/* ============================================================
   Diploma in Nursing · D333 Orthopedic Nursing
   — 14 topics. Aligned to the BNMC syllabus (foundations of
   orthopedic nursing & immobility; trauma — fractures,
   dislocations, amputation; disorders & orthopedic surgery).
   Grounded in standard texts:
     • Maheshwari J, Mhaskar VA. Essential Orthopaedics. Jaypee.
     • Smeltzer SC et al. Brunner & Suddarth's Textbook of
       Medical-Surgical Nursing (Musculoskeletal Function).
     • Maher AB, Salmond SW, Pellino TA. Orthopaedic Nursing.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_ORT = [
  "Maheshwari J, Mhaskar VA. Essential Orthopaedics. Jaypee Brothers Medical Publishers.",
  "Smeltzer SC, Bare BG, Hinkle JL, Cheever KH. Brunner & Suddarth's Textbook of Medical-Surgical Nursing (Musculoskeletal Function). Lippincott Williams & Wilkins.",
  "Maher AB, Salmond SW, Pellino TA. Orthopaedic Nursing. W.B. Saunders."
];

window.Academic.topics["diploma-nursing/orthopedic-nursing"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "ort-01-intro",
    unit: "Unit 1 · Foundations",
    title: "Introduction to Orthopedic Nursing & Musculoskeletal Assessment",
    readMinutes: 16,
    summary: "Meaning and scope of orthopedics and orthopedic nursing, the orthopedic team, common orthopedic problems, and the systematic nursing assessment of the musculoskeletal system.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is orthopedics?", p: "Orthopedics is the branch of medicine and surgery concerned with the prevention, diagnosis, treatment and rehabilitation of disorders and injuries of the musculoskeletal system — the bones, joints, muscles, tendons, ligaments and nerves that allow movement and give the body its shape and support. The word comes from the Greek 'orthos' (straight) and 'paidion' (child), because the field began with the correction of childhood deformities." },
      { h: "Orthopedic nursing", p: "Orthopedic nursing is the specialty concerned with the nursing care of patients with musculoskeletal problems — from acute injuries such as fractures to chronic and disabling conditions such as arthritis. Its central themes are the relief of pain, the safe use of immobilisation devices, the prevention of the complications of immobility, restoration of function, and rehabilitation so that the patient regains the highest possible level of independence." },
      { h: "Roles and responsibilities of the orthopedic nurse", list: [
        "Caregiver — relieving pain, positioning, neurovascular monitoring and care of casts, traction and wounds.",
        "Educator — teaching the patient and family about the condition, exercises, mobility aids and home care.",
        "Preventer of complications — preventing pressure injuries, deep vein thrombosis, chest infection, constipation and contractures.",
        "Rehabilitator — encouraging exercise, ambulation and self-care to restore function.",
        "Coordinator and advocate — working within the orthopedic team and speaking for the patient's needs.",
        "Counsellor — supporting the patient psychologically through long immobilisation, disability or amputation."
      ] },
      { h: "The orthopedic team", p: "Care of the orthopedic patient is multidisciplinary. The team usually includes the orthopedic surgeon, the orthopedic nurse, the physiotherapist (restoration of movement and strength), the occupational therapist (activities of daily living and adaptive devices), the orthotist/prosthetist (braces and artificial limbs), the medical social worker, the dietitian and the radiographer. The nurse coordinates and reinforces the work of the whole team at the bedside." },
      { h: "Common orthopedic problems", list: [
        "Traumatic — fractures, dislocations, sprains, strains and soft-tissue injuries.",
        "Degenerative — osteoarthritis and degenerative disc disease.",
        "Inflammatory / autoimmune — rheumatoid arthritis and other connective-tissue diseases.",
        "Infective — osteomyelitis, septic arthritis and bone tuberculosis.",
        "Congenital and developmental — clubfoot (CTEV), developmental dysplasia of the hip.",
        "Metabolic — rickets, osteomalacia and osteoporosis.",
        "Neoplastic — benign and malignant bone tumours."
      ] },
      { h: "Acute vs chronic orthopedic conditions", p: "Acute conditions, such as a fresh fracture or dislocation, come on suddenly, are often painful and need urgent care. Chronic conditions, such as arthritis, low back pain or a long-standing deformity, develop slowly, last a long time and require continuing management, exercise and adaptation. Nursing priorities differ: acute care focuses on stabilisation, pain relief and prevention of complications, whereas chronic care emphasises self-management, function and quality of life." },
      { h: "Musculoskeletal nursing assessment", p: "A systematic assessment combines history and physical examination.", list: [
        "History — the presenting complaint (pain, swelling, deformity, loss of function), mechanism of any injury, past illnesses, occupation, mobility and the effect on daily living.",
        "Inspection — look for swelling, deformity, shortening, wounds, bruising, redness and muscle wasting; compare with the opposite side.",
        "Palpation — feel for tenderness, warmth, crepitus, abnormal movement and pulses.",
        "Movement — assess active and passive range of motion and muscle power.",
        "Measurement — limb length and girth where indicated.",
        "Neurovascular status — colour, warmth, capillary refill, pulses, sensation and movement distal to the injury (the '5 Ps')."
      ] },
      { h: "The neurovascular (5 Ps) check", p: "A key orthopedic skill is the neurovascular assessment of a limb, remembered as the 5 Ps: Pain, Pallor, Pulselessness, Paraesthesia (pins-and-needles or numbness) and Paralysis. A sixth, Poikilothermia (coldness), is sometimes added. Worsening of these signs warns of impaired circulation, a tight cast or compartment syndrome and must be reported at once.", figure: {
        caption: "The 5 Ps of neurovascular assessment of an injured limb.",
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The five Ps of neurovascular assessment"><rect x="10" y="10" width="540" height="210" rx="12" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="280" y="38" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#7C2D12">Neurovascular check — the 5 Ps</text><rect x="35" y="55" width="150" height="44" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="110" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Pain</text><rect x="205" y="55" width="150" height="44" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="280" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Pallor</text><rect x="375" y="55" width="150" height="44" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="450" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Pulselessness</text><rect x="120" y="120" width="150" height="44" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="195" y="147" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Paraesthesia</text><rect x="290" y="120" width="150" height="44" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="365" y="147" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Paralysis</text><text x="280" y="200" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#15803D">Worsening of any P → report at once (suspect compartment syndrome)</text></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      "Define orthopedics and orthopedic nursing. Explain the scope of orthopedic nursing.",
      "Describe the roles and responsibilities of the orthopedic nurse.",
      "List the members of the orthopedic team and state the role of each.",
      "Describe the steps of a systematic musculoskeletal nursing assessment.",
      "What is a neurovascular assessment? Explain the 5 Ps and their importance."
    ],
    assessment: [
      { type: "mcq", q: "Orthopedics is the branch of medicine concerned with disorders of the:", options: ["Respiratory system", "Musculoskeletal system", "Digestive system", "Urinary system"], answer: 1, rationale: "Orthopedics deals with bones, joints, muscles, tendons, ligaments and related structures — the musculoskeletal system." },
      { type: "mcq", q: "The word 'orthopedics' originally referred to the correction of deformities in:", options: ["Children", "The elderly", "Athletes", "Soldiers"], answer: 0, rationale: "From Greek 'orthos' (straight) and 'paidion' (child) — the field began with childhood deformity correction." },
      { type: "mcq", q: "Which member of the orthopedic team mainly restores movement and muscle strength through exercise?", options: ["Prosthetist", "Radiographer", "Dietitian", "Physiotherapist"], answer: 3, rationale: "The physiotherapist is responsible for restoring movement, strength and mobility through therapeutic exercise." },
      { type: "mcq", q: "A fresh fracture is an example of a/an ____ orthopedic condition.", options: ["Chronic", "Acute", "Congenital", "Metabolic"], answer: 1, rationale: "A fresh fracture comes on suddenly and needs urgent care — it is an acute condition." },
      { type: "mcq", q: "Which of the following is NOT one of the classic 5 Ps of neurovascular assessment?", options: ["Pain", "Pallor", "Pyrexia", "Paralysis"], answer: 2, rationale: "The 5 Ps are Pain, Pallor, Pulselessness, Paraesthesia and Paralysis; pyrexia (fever) is not one of them." },
      { type: "mcq", q: "When assessing a limb, comparing it with the opposite side is part of which step?", options: ["Inspection", "Auscultation", "Percussion", "History taking"], answer: 0, rationale: "Inspection includes looking for swelling, deformity and wasting and comparing with the unaffected limb." },
      { type: "mcq", q: "Osteoarthritis is best classified as a/an ____ orthopedic problem.", options: ["Infective", "Traumatic", "Degenerative", "Congenital"], answer: 2, rationale: "Osteoarthritis results from wear and degeneration of joint cartilage — a degenerative disorder." },
      { type: "mcq", q: "Feeling for crepitus, warmth and tenderness over a bone is part of:", options: ["Palpation", "Inspection", "Measurement", "Auscultation"], answer: 0, rationale: "Palpation is feeling the part for tenderness, warmth, crepitus, abnormal movement and pulses." },
      { type: "mcq", q: "Teaching a patient how to use crutches safely is which nursing role?", options: ["Educator", "Surgeon", "Radiographer", "Anaesthetist"], answer: 0, rationale: "Instructing the patient and family on aids and self-care is the educator role of the nurse." },
      { type: "mcq", q: "Tuberculosis of the spine is an example of a/an ____ orthopedic condition.", options: ["Degenerative", "Metabolic", "Neoplastic", "Infective"], answer: 3, rationale: "Bone and joint tuberculosis is caused by infection with Mycobacterium tuberculosis — an infective disorder." }
      , { type: "fill", q: "The systematic check of colour, pulses, sensation and movement distal to an injury is called the ____ assessment.", accept: ["neurovascular", "neuro-vascular", "5 Ps", "5 ps"], rationale: "Neurovascular assessment monitors circulation and nerve function distal to the injury." }
      , { type: "fill", q: "The 'P' in the 5 Ps that means pins-and-needles or numbness is ____.", accept: ["paraesthesia", "paresthesia"], rationale: "Paraesthesia is abnormal sensation such as tingling or numbness, an early sign of nerve compromise." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "ort-02-msk-investigations",
    unit: "Unit 1 · Foundations",
    title: "Review of the Musculoskeletal System & Common Orthopedic Investigations",
    readMinutes: 16,
    summary: "Structure and functions of bones, joints and muscles, the process of bone healing, and the common investigations used in orthopedics with the nurse's role in each.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of the musculoskeletal system", list: [
        "Support — gives the body its framework and shape.",
        "Movement — bones act as levers moved by muscles across joints.",
        "Protection — bones shield vital organs (skull, ribs, vertebrae).",
        "Mineral storage — bones store calcium and phosphate.",
        "Blood-cell formation (haematopoiesis) — red marrow produces blood cells.",
        "Energy storage — yellow marrow stores fat."
      ] },
      { h: "Bones — types and structure", p: "The adult skeleton has 206 bones, divided into the axial skeleton (skull, vertebral column, ribs and sternum) and the appendicular skeleton (limbs and girdles). By shape, bones are long (femur), short (carpals), flat (skull, scapula), irregular (vertebrae) and sesamoid (patella). A typical long bone has a shaft (diaphysis), two ends (epiphyses), a growth plate (epiphyseal plate) in the growing child, an outer covering (periosteum), and a central marrow cavity. Bone tissue is of two kinds — dense compact (cortical) bone and spongy (cancellous) bone." },
      { h: "Bone cells and remodelling", p: "Bone is living tissue that is constantly renewed. Osteoblasts build new bone, osteoclasts break down and resorb old bone, and osteocytes are mature cells that maintain it. This continuous balance of formation and resorption is called remodelling and lets bone repair itself and adapt to stress. Vitamin D, calcium, parathyroid hormone and weight-bearing exercise are all important for healthy bone." },
      { h: "Joints", p: "A joint is where two or more bones meet. Joints are classified by how much they move: fibrous (immovable, e.g. skull sutures), cartilaginous (slightly movable, e.g. between vertebrae) and synovial (freely movable, e.g. knee, hip, shoulder). A synovial joint has a joint cavity, articular cartilage, a synovial membrane that secretes lubricating synovial fluid, and a fibrous capsule with supporting ligaments." },
      { h: "Muscles, tendons and ligaments", p: "Skeletal (voluntary) muscles produce movement by contracting and pulling on bones. A tendon is tough fibrous tissue that attaches muscle to bone, while a ligament joins bone to bone and stabilises a joint. Cartilage is smooth connective tissue that covers joint surfaces and cushions them. Knowing the difference matters clinically: a sprain injures a ligament, a strain injures a muscle or tendon." },
      { h: "Stages of bone (fracture) healing", p: "Bone heals through overlapping stages: (1) haematoma formation — bleeding and a blood clot at the fracture site in the first hours; (2) inflammation and cellular proliferation; (3) callus formation — a soft fibrocartilaginous callus is replaced by a bony (hard) callus over weeks; (4) ossification — the callus is converted to firm bone; and (5) remodelling — over months the bone is reshaped to its normal contour. Good blood supply, immobilisation, good nutrition and the absence of infection all aid healing.", figure: {
        caption: "Stages of fracture healing from haematoma to remodelling.",
        svg: '<svg viewBox="0 0 580 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of fracture healing"><defs><marker id="ortArr2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="8" y="50" width="95" height="48" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="1.8"/><text x="55" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Haematoma</text><text x="55" y="88" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">hours</text><rect x="122" y="50" width="95" height="48" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.8"/><text x="169" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Inflammation</text><text x="169" y="88" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">days</text><rect x="236" y="50" width="95" height="48" rx="8" fill="#FFEDD5" stroke="#B45309" stroke-width="1.8"/><text x="283" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Callus</text><text x="283" y="88" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">weeks</text><rect x="350" y="50" width="95" height="48" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.8"/><text x="397" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Ossification</text><rect x="464" y="50" width="100" height="48" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.8"/><text x="514" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Remodelling</text><text x="514" y="88" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">months</text><line x1="103" y1="74" x2="120" y2="74" stroke="#7C2D12" stroke-width="2" marker-end="url(#ortArr2)"/><line x1="217" y1="74" x2="234" y2="74" stroke="#7C2D12" stroke-width="2" marker-end="url(#ortArr2)"/><line x1="331" y1="74" x2="348" y2="74" stroke="#7C2D12" stroke-width="2" marker-end="url(#ortArr2)"/><line x1="445" y1="74" x2="462" y2="74" stroke="#7C2D12" stroke-width="2" marker-end="url(#ortArr2)"/></svg>'
      } },
      { h: "Common orthopedic investigations", list: [
        "X-ray (radiograph) — the basic, first-line test; shows fractures, dislocations, deformity and bone disease.",
        "CT scan — detailed cross-sectional images of complex fractures, especially the spine and joints.",
        "MRI — best for soft tissues — ligaments, cartilage, discs, tumours and infection.",
        "Bone scan (scintigraphy) — detects infection, tumour, stress fractures and metastases.",
        "DEXA scan — measures bone mineral density to diagnose osteoporosis.",
        "Arthroscopy — direct visual examination of a joint with a fibre-optic scope.",
        "Blood tests — calcium, phosphate, alkaline phosphatase, uric acid, rheumatoid factor, ESR/CRP.",
        "Aspiration (arthrocentesis) and biopsy — joint fluid or tissue for laboratory study."
      ] },
      { h: "Nursing role in investigations", list: [
        "Explain the procedure to relieve anxiety and obtain informed consent where needed.",
        "Check for contraindications — e.g. metal implants or pacemakers before MRI, pregnancy before X-ray, allergy to contrast/iodine.",
        "Remove metal objects and jewellery before imaging.",
        "Keep the patient still and correctly positioned during X-ray.",
        "For invasive tests (arthroscopy, aspiration, biopsy) — pre-procedure preparation, asepsis, and post-procedure observation of the site for bleeding, swelling, pain and infection.",
        "Ensure reports reach the team and document findings."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "List and explain the functions of the musculoskeletal system.",
      "Classify joints with examples and describe the structure of a synovial joint.",
      "Describe the stages of fracture healing with a diagram.",
      "Differentiate between a tendon and a ligament; a sprain and a strain.",
      "List common orthopedic investigations and describe the nurse's role in preparing a patient for an MRI."
    ],
    assessment: [
      { type: "mcq", q: "The number of bones in the normal adult human skeleton is:", options: ["186", "206", "256", "300"], answer: 1, rationale: "The adult skeleton has 206 bones (the newborn has more, which later fuse)." },
      { type: "mcq", q: "The bone cells that break down and resorb old bone are:", options: ["Osteoblasts", "Osteocytes", "Osteoclasts", "Chondrocytes"], answer: 2, rationale: "Osteoclasts resorb bone; osteoblasts form it; osteocytes maintain it." },
      { type: "mcq", q: "A freely movable joint such as the knee or hip is classified as:", options: ["Fibrous", "Cartilaginous", "Sutural", "Synovial"], answer: 3, rationale: "Synovial joints are freely movable and have a joint cavity with synovial fluid." },
      { type: "mcq", q: "Tough fibrous tissue that attaches muscle to bone is a:", options: ["Ligament", "Tendon", "Cartilage", "Bursa"], answer: 1, rationale: "A tendon connects muscle to bone; a ligament connects bone to bone." },
      { type: "mcq", q: "The FIRST stage of fracture healing is:", options: ["Callus formation", "Remodelling", "Haematoma formation", "Ossification"], answer: 2, rationale: "Healing begins with bleeding and haematoma (blood clot) formation at the fracture site." },
      { type: "mcq", q: "Which investigation is BEST for imaging soft tissues such as ligaments and intervertebral discs?", options: ["Plain X-ray", "MRI", "DEXA scan", "Bone scan"], answer: 1, rationale: "MRI gives excellent soft-tissue detail of ligaments, cartilage, discs and tumours." },
      { type: "mcq", q: "The investigation used to measure bone mineral density and diagnose osteoporosis is:", options: ["Arthroscopy", "DEXA scan", "Arthrocentesis", "Myelography"], answer: 1, rationale: "DEXA (dual-energy X-ray absorptiometry) measures bone mineral density." },
      { type: "mcq", q: "Before an MRI scan, it is most important to check for:", options: ["Recent meals", "Metal implants or a pacemaker", "Blood pressure", "Skin colour"], answer: 1, rationale: "MRI uses a strong magnetic field; metal implants and pacemakers are important contraindications to check." },
      { type: "mcq", q: "Direct visual examination of the inside of a joint using a fibre-optic scope is called:", options: ["Arthrocentesis", "Arthrodesis", "Arthroplasty", "Arthroscopy"], answer: 3, rationale: "Arthroscopy is endoscopic inspection of a joint; arthrocentesis is fluid aspiration." },
      { type: "mcq", q: "Red bone marrow is the main site of:", options: ["Fat storage", "Blood-cell formation", "Calcium excretion", "Hormone secretion"], answer: 1, rationale: "Red marrow carries out haematopoiesis — the formation of blood cells." }
      , { type: "fill", q: "An injury that stretches or tears a ligament is called a ____.", accept: ["sprain"], rationale: "A sprain injures a ligament; a strain injures a muscle or tendon." }
      , { type: "fill", q: "The bone-forming cells responsible for building new bone are the ____.", accept: ["osteoblasts", "osteoblast"], rationale: "Osteoblasts synthesise and lay down new bone matrix." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "ort-03-immobility",
    unit: "Unit 1 · Foundations",
    title: "Immobility — Effects, Complications & Nursing Care",
    readMinutes: 17,
    summary: "Meaning and causes of immobility, its harmful effects on every body system, risk assessment, and the nursing measures used to prevent the complications of prolonged bed rest.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and causes", p: "Immobility is the inability to move freely, or restriction of movement, whether prescribed (e.g. traction, casting after surgery) or caused by disease. In orthopedics, immobilisation is often deliberate — to rest an injured part and allow healing — but the resulting inactivity affects the whole body. Causes include fractures, surgery, traction, paralysis, severe illness, pain, and prescribed bed rest." },
      { h: "Why immobility is harmful", p: "The human body is designed for movement. When a patient is immobile for a long time, every system slows and weakens — a state sometimes called 'disuse syndrome'. The harmful effects develop quickly, so prevention from day one is a core nursing responsibility." },
      { h: "Musculoskeletal effects", list: [
        "Muscle wasting (atrophy) and loss of strength.",
        "Joint stiffness and contractures (fixed shortening).",
        "Disuse osteoporosis — bones lose calcium and become weak.",
        "Foot drop if the foot is not supported."
      ] },
      { h: "Skin effects", p: "Continuous pressure over bony prominences (sacrum, heels, hips, elbows) reduces blood flow and causes pressure injuries (bed sores). These can develop within hours and are largely preventable with regular position change, skin care and pressure-relieving surfaces." },
      { h: "Cardiovascular and respiratory effects", list: [
        "Venous stasis leading to deep vein thrombosis (DVT) and the risk of pulmonary embolism.",
        "Orthostatic (postural) hypotension — dizziness on getting up after long bed rest.",
        "Increased cardiac workload.",
        "Shallow breathing and pooling of secretions, leading to chest infection (hypostatic pneumonia) and atelectasis."
      ] },
      { h: "Gastrointestinal, urinary and metabolic effects", list: [
        "Constipation and loss of appetite from reduced gut activity.",
        "Urinary stasis, infection and renal calculi (stones) from pooled urine and calcium loss.",
        "Negative nitrogen and calcium balance; slower metabolism."
      ] },
      { h: "Psychological effects", p: "Prolonged immobility and dependence can cause boredom, anxiety, low mood, helplessness, disturbed sleep and, in some patients, confusion. Loss of independence and an altered body image are particularly distressing after amputation or long traction." },
      { h: "Risk assessment", p: "Nurses identify patients at risk early and use structured tools. A pressure-injury risk scale (such as the Braden scale, where a lower score means higher risk) guides skin-care planning, and a venous-thromboembolism (VTE) risk assessment guides DVT prophylaxis. Reassessment is repeated regularly as the patient's condition changes." },
      { h: "Nursing prevention and management", list: [
        "Skin — change position at least 2-hourly, keep skin clean and dry, use pressure-relieving mattresses, inspect bony prominences each shift.",
        "Chest — encourage deep breathing and coughing, change position, and provide chest physiotherapy.",
        "DVT — leg exercises, early mobilisation, anti-embolism stockings, calf-muscle pumping and prescribed anticoagulants; watch for calf pain, swelling and warmth.",
        "Muscles and joints — active and passive range-of-motion exercises, correct positioning, footboard to prevent foot drop.",
        "Bowel and bladder — adequate fluids, fibre, privacy and a regular toileting routine.",
        "Nutrition — high-protein, high-calorie, high-fibre diet with adequate calcium and vitamins.",
        "Psychological — orientation, diversional activity, involving the family and encouraging independence.",
        "Promote the earliest safe mobilisation, which prevents most of these complications."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Define immobility and list its causes in orthopedic patients.",
      "Describe the systemic (system-by-system) effects of prolonged immobility.",
      "How is a pressure injury prevented in an immobilised patient?",
      "Explain the nursing measures used to prevent deep vein thrombosis.",
      "Discuss the psychological effects of immobility and how the nurse can address them."
    ],
    assessment: [
      { type: "mcq", q: "A pressure injury (bed sore) is most likely to develop over a:", options: ["Soft fleshy area", "Bony prominence", "Hairy area", "Joint cavity"], answer: 1, rationale: "Pressure injuries form where bone presses tissue against a surface — over bony prominences such as the sacrum and heels." },
      { type: "mcq", q: "The most serious circulatory complication of prolonged immobility is:", options: ["Deep vein thrombosis", "Varicose veins", "Hypertension", "Anaemia"], answer: 0, rationale: "Venous stasis predisposes to DVT, which can lead to fatal pulmonary embolism." },
      { type: "mcq", q: "Foot drop in a bed-bound patient is prevented mainly by:", options: ["High-protein diet", "A footboard and correct foot positioning", "Anticoagulants", "Deep breathing exercises"], answer: 1, rationale: "Supporting the foot at a right angle with a footboard prevents the plantar-flexed deformity of foot drop." },
      { type: "mcq", q: "Hypostatic pneumonia in an immobile patient results from:", options: ["Too much exercise", "Pooling of secretions in the lungs", "Excess fluid intake", "High calcium diet"], answer: 1, rationale: "Shallow breathing and stagnant secretions in dependent lung areas predispose to infection." },
      { type: "mcq", q: "The minimum recommended frequency for changing the position of an immobile patient to protect the skin is at least every:", options: ["8 hours", "6 hours", "12 hours", "2 hours"], answer: 3, rationale: "Repositioning at least 2-hourly relieves pressure and helps prevent pressure injuries." },
      { type: "mcq", q: "Disuse osteoporosis in an immobilised limb is caused by:", options: ["Gain of calcium in bone", "Loss of calcium from bone", "Increased muscle mass", "Better blood supply"], answer: 1, rationale: "Lack of weight-bearing leads to calcium loss and weakening of the bone." },
      { type: "mcq", q: "Dizziness when an immobile patient first stands up is called:", options: ["Orthostatic hypotension", "Hypertension", "Tachycardia", "Atelectasis"], answer: 0, rationale: "Loss of vascular tone during bed rest causes a drop in BP on standing — orthostatic (postural) hypotension." },
      { type: "mcq", q: "A widely used tool to assess a patient's risk of pressure injury is the:", options: ["Glasgow scale", "Braden scale", "APGAR score", "Bishop score"], answer: 1, rationale: "The Braden scale assesses pressure-injury risk; a lower score indicates higher risk." },
      { type: "mcq", q: "Which diet best supports tissue repair and prevents complications in the immobile orthopedic patient?", options: ["Low-protein, low-fibre", "High-protein, high-fibre with adequate calcium", "High-fat, low-fluid", "Carbohydrate only"], answer: 1, rationale: "Protein aids tissue healing, fibre and fluids prevent constipation, and calcium supports bone." },
      { type: "mcq", q: "The single most effective way to prevent the complications of immobility is:", options: ["Sedation", "Early and safe mobilisation", "Restricting fluids", "Strict bed rest"], answer: 1, rationale: "Restoring movement as early as safely possible reverses or prevents most disuse complications." }
      , { type: "fill", q: "The fixed shortening and stiffening of a joint from prolonged immobility is called a ____.", accept: ["contracture", "contractures"], rationale: "Contractures are permanent shortening of muscle and connective tissue around an immobile joint." }
      , { type: "fill", q: "Anti-embolism ____ are worn on the legs to help prevent deep vein thrombosis.", accept: ["stockings", "stocking"], rationale: "Graduated compression (anti-embolism) stockings reduce venous stasis and DVT risk." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "ort-04-cast-splint",
    unit: "Unit 1 · Foundations",
    title: "Care of the Patient with a Cast/Plaster & Splint (Neurovascular Checks)",
    readMinutes: 17,
    summary: "Purposes and types of casts and splints, application and drying of plaster, nursing care of a casted limb, neurovascular monitoring, and recognition of complications such as compartment syndrome.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a cast and a splint?", p: "A cast is a rigid external device that encircles a limb to immobilise a bone or joint while it heals; it is made of plaster of Paris or, more commonly now, synthetic (fibreglass) material. A splint is a partial, non-encircling support that holds a part still — it allows for swelling and is often used for acute injuries or as a temporary measure. Immobilisation in this way rests the injured part, holds the bone in correct alignment, reduces pain and prevents deformity." },
      { h: "Purposes of a cast", list: [
        "To immobilise and hold a reduced fracture in correct position.",
        "To rest and support an injured joint or soft tissue.",
        "To correct or prevent deformity (e.g. serial casting in clubfoot).",
        "To allow early protected mobilisation."
      ] },
      { h: "Types of casts", list: [
        "Short arm / long arm cast — forearm or whole arm injuries.",
        "Short leg / long leg cast — lower leg or whole leg.",
        "Cylinder cast — for the knee.",
        "Hip spica — encircles the trunk and one or both legs (hip/femur).",
        "Body cast — encircles the trunk for spinal conditions."
      ] },
      { h: "Care during application and drying", list: [
        "Explain the procedure and position the limb in correct alignment.",
        "Protect skin with stockinette and padding before plaster is applied.",
        "Handle a wet plaster cast with the palms, not the fingertips, to avoid pressure dents.",
        "A plaster cast takes about 24-48 hours to dry fully; leave it uncovered and support it on a pillow to dry evenly. Fibreglass dries in minutes.",
        "Keep the cast clean and dry; never get a plaster cast wet."
      ] },
      { h: "Neurovascular monitoring (the priority)", p: "Because a cast encircles the limb, swelling beneath it can compress nerves and blood vessels. The nurse checks the limb distal to the cast frequently — colour, warmth, capillary refill, pulses, sensation, movement and pain — using the 5 Ps. Findings are compared with the other limb and recorded. Pain that is increasing, severe and not relieved by usual analgesia is an important danger sign." },
      { h: "Elevation, swelling and exercise", list: [
        "Elevate the casted limb on a pillow above heart level for the first 24-48 hours to reduce swelling.",
        "Apply ice over the fracture site if ordered.",
        "Encourage movement of the fingers or toes and of joints not enclosed by the cast.",
        "Teach isometric (muscle-setting) exercises to maintain muscle tone inside the cast."
      ] },
      { h: "Complications and danger signs", list: [
        "Compartment syndrome — increasing, severe, unrelenting pain, especially on passive stretch, with pallor, paraesthesia, pulselessness and tense swelling; an emergency.",
        "Pressure sores under the cast — localised pain, burning, a hot spot or a bad smell/drainage staining the plaster.",
        "Impaired circulation — cold, blue, numb fingers or toes; slow capillary refill.",
        "Cast too tight or too loose, skin maceration, and infection of an underlying wound."
      ], figure: {
        caption: "Compartment syndrome danger signs — recognise and report immediately.",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compartment syndrome warning signs"><rect x="10" y="10" width="540" height="140" rx="12" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="280" y="36" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#7C2D12">Compartment syndrome — ACT FAST</text><text x="30" y="64" font-family="sans-serif" font-size="12" fill="#7C2D12">• Severe pain, worse on passive stretch, not relieved by analgesia</text><text x="30" y="86" font-family="sans-serif" font-size="12" fill="#7C2D12">• Pallor, paraesthesia (numbness), pulselessness, paralysis</text><text x="30" y="108" font-family="sans-serif" font-size="12" fill="#7C2D12">• Tense, swollen, tight limb</text><rect x="30" y="120" width="500" height="22" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="280" y="135" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Loosen/split cast, elevate to heart level, inform surgeon at once</text></svg>'
      } },
      { h: "Care of a removed cast and patient education", list: [
        "After removal the skin is often dry and scaly with wasted muscle — wash gently, apply moisturiser and avoid scrubbing.",
        "Resume movement and exercise gradually as advised; physiotherapy restores strength.",
        "Teach the patient to report increasing pain, swelling, numbness, coldness, colour change, foul smell or a loose/cracked cast.",
        "Instruct never to insert objects (e.g. a stick) inside the cast to scratch, and to keep the cast dry."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Define a cast and a splint and state the purposes of casting.",
      "Describe the nursing care of a patient during and after application of a plaster cast.",
      "What is compartment syndrome? List its warning signs and emergency management.",
      "Explain neurovascular monitoring of a casted limb.",
      "List the instructions you would give a patient on home care of a cast."
    ],
    assessment: [
      { type: "mcq", q: "A wet plaster cast should be handled with the:", options: ["Fingertips", "Palms of the hands", "A towel only", "Forceps"], answer: 1, rationale: "Using the palms prevents fingertip dents that could press on the skin and cause sores." },
      { type: "mcq", q: "For the first 24-48 hours, a newly casted limb should be:", options: ["Kept dependent (hanging down)", "Elevated above heart level", "Wrapped tightly in a blanket", "Placed flat with no support"], answer: 1, rationale: "Elevation above heart level reduces swelling and the risk of neurovascular compromise." },
      { type: "mcq", q: "The MOST important nursing observation after a cast is applied is:", options: ["The patient's appetite", "Body temperature only", "Hair growth", "Neurovascular status of the limb"], answer: 3, rationale: "A circumferential cast can compress vessels and nerves, so frequent neurovascular checks are the priority." },
      { type: "mcq", q: "Severe, increasing pain not relieved by analgesia, with pallor and numbness under a cast, suggests:", options: ["Normal healing", "Compartment syndrome", "Mild bruising", "Good circulation"], answer: 1, rationale: "These are the classic warning signs of compartment syndrome, an emergency." },
      { type: "mcq", q: "A plaster of Paris cast usually takes how long to dry completely?", options: ["A few minutes", "About 24-48 hours", "One week", "One hour"], answer: 1, rationale: "Plaster of Paris takes roughly 24-48 hours to dry fully, unlike fibreglass which dries in minutes." },
      { type: "mcq", q: "Compared with a cast, a splint has the advantage that it:", options: ["Is fully waterproof", "Allows room for swelling", "Cannot be removed", "Needs no padding"], answer: 1, rationale: "A splint does not fully encircle the limb, so it accommodates swelling — useful in acute injury." },
      { type: "mcq", q: "A foul smell or drainage staining a cast most likely indicates:", options: ["The cast is dry", "A pressure sore or wound infection underneath", "The cast is too loose", "Normal sweating"], answer: 1, rationale: "Odour and drainage through plaster suggest skin breakdown or infection beneath the cast." },
      { type: "mcq", q: "To maintain muscle strength inside a cast, the nurse teaches:", options: ["Bed rest only", "Isometric (muscle-setting) exercises", "Massage of the cast", "Heat application"], answer: 1, rationale: "Isometric exercises contract the muscle without joint movement, preserving tone within the cast." },
      { type: "mcq", q: "A cast that encircles the trunk and one or both legs is a:", options: ["Cylinder cast", "Hip spica", "Short arm cast", "Body jacket"], answer: 1, rationale: "A hip spica encircles the trunk and extends down one or both legs to immobilise the hip/femur." },
      { type: "mcq", q: "A correct instruction for home care of a plaster cast is to:", options: ["Scratch inside with a stick when itchy", "Keep the cast dry and never get it wet", "Cover it tightly to dry faster", "Walk on a wet leg cast"], answer: 1, rationale: "A plaster cast must be kept dry; inserting objects can injure the skin and cause infection." }
      , { type: "fill", q: "The serious emergency in which swelling within a closed muscle space compresses nerves and vessels is called ____ syndrome.", accept: ["compartment"], rationale: "Compartment syndrome raises pressure within a fascial compartment and can cause permanent damage." }
      , { type: "fill", q: "A partial, non-encircling support that allows room for swelling is called a ____.", accept: ["splint"], rationale: "Unlike a cast, a splint does not fully surround the limb and accommodates swelling." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "ort-05-traction",
    unit: "Unit 1 · Foundations",
    title: "Care of the Patient on Traction",
    readMinutes: 17,
    summary: "Meaning, purposes and principles of traction, the main types (skin, skeletal and manual), the nursing care of a patient on traction, and the prevention of its complications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is traction?", p: "Traction is the application of a pulling force to a part of the body to align bones, reduce a fracture or dislocation, relieve muscle spasm and pain, correct or prevent deformity, and immobilise a part. The pull is applied through ropes, pulleys and weights, and is balanced by counter-traction (usually the patient's own body weight, often aided by raising the foot of the bed)." },
      { h: "Purposes of traction", list: [
        "To reduce and immobilise a fracture and maintain alignment.",
        "To reduce and prevent recurrence of a dislocation.",
        "To relieve muscle spasm and pain.",
        "To correct or prevent deformity and contracture.",
        "To rest an inflamed or injured joint."
      ] },
      { h: "Principles of effective traction", list: [
        "There must be adequate counter-traction to oppose the pull.",
        "The line of pull must be in the correct direction and maintained continuously.",
        "Weights must hang freely and never rest on the floor or bed.",
        "Ropes must run freely in the centre of the pulleys and not be obstructed.",
        "Continuous traction must not be interrupted unless specifically ordered.",
        "Knots should not touch the pulleys and bedclothes should not interfere with the pull."
      ] },
      { h: "Types of traction", p: "Traction is broadly skin, skeletal or manual.", list: [
        "Skin traction — the pull is applied to the skin and soft tissues through adhesive strapping, foam or a boot; uses lighter weights (generally up to about 2-3 kg / 5 lb on a limb) for short-term use. Examples: Buck's extension (hip/knee), Russell's traction.",
        "Skeletal traction — the pull is applied directly to the bone through a metal pin or wire (e.g. a Steinmann pin or Kirschner wire) and can take heavier weights for longer periods. Example: tibial pin traction for a femoral fracture.",
        "Manual traction — a steady pull applied by the hands, used temporarily, for example during reduction of a fracture or application of a cast."
      ], figure: {
        caption: "Skin vs skeletal traction — point of application of the pull.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of skin and skeletal traction"><rect x="15" y="20" width="255" height="130" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="142" y="44" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">Skin traction</text><text x="35" y="70" font-family="sans-serif" font-size="11" fill="#7C2D12">• Pull on skin via straps/boot</text><text x="35" y="92" font-family="sans-serif" font-size="11" fill="#7C2D12">• Light weights (≈ up to 2-3 kg)</text><text x="35" y="114" font-family="sans-serif" font-size="11" fill="#7C2D12">• Short-term, e.g. Buck&apos;s</text><text x="35" y="136" font-family="sans-serif" font-size="11" fill="#7C2D12">• Non-invasive</text><rect x="290" y="20" width="255" height="130" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="417" y="44" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">Skeletal traction</text><text x="310" y="70" font-family="sans-serif" font-size="11" fill="#7C2D12">• Pull on bone via pin/wire</text><text x="310" y="92" font-family="sans-serif" font-size="11" fill="#7C2D12">• Heavier weights, longer use</text><text x="310" y="114" font-family="sans-serif" font-size="11" fill="#7C2D12">• e.g. tibial pin for femur</text><text x="310" y="136" font-family="sans-serif" font-size="11" fill="#7C2D12">• Pin-site care needed</text></svg>'
      } },
      { h: "Nursing care of the patient on traction", list: [
        "Maintain the traction — weights hanging free, ropes in pulleys, correct line of pull, counter-traction in place; do not remove weights without an order.",
        "Neurovascular checks of the limb distal to the traction.",
        "Prevent complications of immobility — pressure care, deep breathing, leg exercises of the unaffected limb, fluids, fibre.",
        "Maintain correct body alignment and use a firm mattress.",
        "Provide comfort, analgesia and help with hygiene, elimination and meals.",
        "Encourage a trapeze (overhead bar) to help the patient lift and reposition."
      ] },
      { h: "Pin-site care in skeletal traction", p: "Where a pin enters the skin there is a route for infection, so pin sites are observed for redness, swelling, pain, loosening and discharge, and cleaned according to local protocol using aseptic technique. The pin ends are covered with caps to prevent injury. Any signs of pin loosening or infection are reported." },
      { h: "Complications and prevention", list: [
        "Pressure sores — relieve pressure, keep skin and bedding clean and dry.",
        "Deep vein thrombosis and chest infection — exercises, deep breathing, hydration.",
        "Pin-site or skin infection — aseptic pin care; watch skin under skin-traction strapping for blistering and pressure.",
        "Foot drop and contractures — footplate/support and range-of-motion exercises.",
        "Constipation and urinary problems — diet, fluids and routine."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Define traction and list its purposes.",
      "State the principles of effective traction.",
      "Differentiate between skin traction and skeletal traction with examples.",
      "Describe the nursing care of a patient on skeletal traction.",
      "What is pin-site care? How are the complications of traction prevented?"
    ],
    assessment: [
      { type: "mcq", q: "Traction is the application of a ____ force to a part of the body.", options: ["Pushing", "Pulling", "Twisting", "Bending"], answer: 1, rationale: "Traction applies a controlled pulling force, balanced by counter-traction." },
      { type: "mcq", q: "In skin traction, the pulling force is applied to the:", options: ["Bone via a metal pin", "Joint capsule", "Skin and soft tissues", "Muscle belly directly"], answer: 2, rationale: "Skin traction pulls through strapping or a boot applied to the skin and soft tissues." },
      { type: "mcq", q: "Skeletal traction applies the pull directly to bone using a:", options: ["Foam boot", "Adhesive strap", "Crepe bandage", "Steinmann pin or Kirschner wire"], answer: 3, rationale: "Skeletal traction uses a pin or wire passed through the bone to take heavier weights." },
      { type: "mcq", q: "For traction to be effective, the weights must:", options: ["Rest on the floor", "Hang freely without touching the floor or bed", "Be removed at night", "Be held by the nurse"], answer: 1, rationale: "Weights must hang free and continuous, or the pull (and counter-traction) is lost." },
      { type: "mcq", q: "Buck's extension is an example of which type of traction?", options: ["Skeletal traction", "Skin traction", "Manual traction", "Halo traction"], answer: 1, rationale: "Buck's extension is a common form of skin traction for the hip/knee region." },
      { type: "mcq", q: "The force that opposes and balances the pull of traction is called:", options: ["Friction", "Counter-traction", "Compression", "Tension"], answer: 1, rationale: "Counter-traction (often the patient's body weight) balances the traction pull." },
      { type: "mcq", q: "A key feature of skeletal traction care that is NOT needed in skin traction is:", options: ["Pin-site care", "Neurovascular checks", "Pressure care", "Comfort measures"], answer: 0, rationale: "Pin-site care to prevent infection at the bone-entry point is unique to skeletal traction." },
      { type: "mcq", q: "Compared with skin traction, skeletal traction generally allows:", options: ["Lighter weights", "Heavier weights for longer periods", "No weights at all", "Only manual pull"], answer: 1, rationale: "Because force is applied to bone, skeletal traction tolerates heavier weights over longer periods." },
      { type: "mcq", q: "To help a patient on traction lift and reposition in bed, the nurse provides a:", options: ["Wheelchair", "Walking frame", "Crutch", "Trapeze (overhead bar)"], answer: 3, rationale: "An overhead trapeze lets the patient lift the upper body and assist with care while traction is maintained." },
      { type: "mcq", q: "When a patient is on continuous traction, the nurse should:", options: ["Remove the weights to make the bed", "Not interrupt the traction unless ordered", "Let the weights rest on the bed at night", "Tie the ropes to the bed frame"], answer: 1, rationale: "Continuous traction must be maintained without interruption unless specifically prescribed." }
      , { type: "fill", q: "Traction applied through ropes and weights directly to the bone via a pin is called ____ traction.", accept: ["skeletal"], rationale: "Skeletal traction transmits the pull to the bone through a pin or wire." }
      , { type: "fill", q: "The force, usually the patient's own body weight, that balances the pull of traction is called ____.", accept: ["counter-traction", "countertraction", "counter traction"], rationale: "Counter-traction opposes the traction force to keep the limb in alignment." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "ort-06-fractures",
    unit: "Unit 2 · Trauma",
    title: "Fractures — Types, Fracture Healing & Principles of Management",
    readMinutes: 18,
    summary: "Definition, causes and classification of fractures, the clinical features, the stages of fracture healing, and the principles of fracture management (reduce, hold, rehabilitate).",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and causes", p: "A fracture is a break in the continuity of a bone. It is usually caused by trauma — a direct blow, a fall, a twisting force or a road traffic accident. A fracture may also occur with minimal force when the bone is already weakened by disease (a pathological fracture, e.g. in osteoporosis, tumour or infection), or from repeated minor stress (a stress fracture)." },
      { h: "Classification by skin integrity", list: [
        "Closed (simple) fracture — the overlying skin is intact.",
        "Open (compound) fracture — the bone breaks the skin or a wound communicates with the fracture; this carries a high risk of infection and is a surgical emergency."
      ] },
      { h: "Classification by the fracture pattern", list: [
        "Transverse — the break runs straight across the bone.",
        "Oblique — the break runs at an angle.",
        "Spiral — a twisting break around the bone.",
        "Comminuted — the bone is broken into more than two fragments.",
        "Greenstick — an incomplete break in which one side bends (typical of children).",
        "Impacted — one fragment is driven into another.",
        "Depressed — fragments are pushed inward (e.g. skull)."
      ], figure: {
        caption: "Common fracture patterns.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Common fracture patterns"><rect x="10" y="15" width="540" height="120" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="280" y="38" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">Fracture patterns</text><text x="35" y="68" font-family="sans-serif" font-size="12" fill="#7C2D12">• Transverse — straight across</text><text x="35" y="90" font-family="sans-serif" font-size="12" fill="#7C2D12">• Oblique — at an angle</text><text x="35" y="112" font-family="sans-serif" font-size="12" fill="#7C2D12">• Spiral — twisting</text><text x="305" y="68" font-family="sans-serif" font-size="12" fill="#7C2D12">• Comminuted — &gt;2 fragments</text><text x="305" y="90" font-family="sans-serif" font-size="12" fill="#7C2D12">• Greenstick — incomplete (child)</text><text x="305" y="112" font-family="sans-serif" font-size="12" fill="#7C2D12">• Impacted — driven together</text></svg>'
      } },
      { h: "Other classifications", list: [
        "Complete (the bone is broken right across) vs incomplete (e.g. greenstick).",
        "Displaced (fragments out of alignment) vs undisplaced.",
        "Pathological — through diseased/weakened bone.",
        "Stress (fatigue) — from repeated overload.",
        "Intra-articular — the fracture line enters a joint."
      ] },
      { h: "Clinical features", list: [
        "Pain and tenderness at the site, worsened by movement.",
        "Swelling and bruising.",
        "Deformity, angulation or shortening of the limb.",
        "Loss of function and inability to bear weight or use the part.",
        "Abnormal mobility and crepitus (grating felt on movement).",
        "An open wound with bone exposed in compound fractures."
      ] },
      { h: "Stages of fracture healing", p: "Bone heals through overlapping phases: (1) haematoma formation within hours; (2) inflammation and cellular proliferation in the first days; (3) soft (fibrocartilaginous) callus; (4) hard (bony) callus over several weeks; and (5) remodelling over months until the bone regains its normal shape and strength. Healing is faster in children and slower in the elderly. Factors that delay healing include poor blood supply, infection, movement at the fracture, poor nutrition, diabetes and smoking." },
      { h: "Abnormal healing", list: [
        "Delayed union — healing takes longer than expected.",
        "Malunion — the bone heals in a faulty position (deformity).",
        "Non-union — the bone fails to unite and a false joint may form."
      ] },
      { h: "Principles of fracture management", p: "Management follows three classic principles, often summarised as Reduce, Hold (immobilise) and Rehabilitate.", list: [
        "Reduction — restoring the bone fragments to correct alignment. Closed reduction is done by manipulation without surgery; open reduction exposes the fracture surgically (open reduction and internal fixation, ORIF).",
        "Immobilisation (hold) — keeping the reduced fracture in place with a cast, splint, traction, external fixator or internal fixation (plates, screws, nails) until it unites.",
        "Rehabilitation — restoring function through exercise, physiotherapy and graded weight-bearing to regain strength and movement.",
        "First aid at the scene — control bleeding, immobilise the part with a splint before moving the patient, cover open wounds, and check neurovascular status."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Define a fracture and describe its causes.",
      "Classify fractures with examples of each type.",
      "List the clinical features (signs and symptoms) of a fracture.",
      "Describe the stages of fracture healing and the factors that delay it.",
      "Explain the principles of fracture management — reduction, immobilisation and rehabilitation."
    ],
    assessment: [
      { type: "mcq", q: "A fracture in which the overlying skin remains intact is called:", options: ["Open", "Compound", "Closed", "Comminuted"], answer: 2, rationale: "A closed (simple) fracture has intact overlying skin; an open/compound fracture breaks the skin." },
      { type: "mcq", q: "An incomplete fracture in which one side of the bone bends, common in children, is a:", options: ["Comminuted fracture", "Greenstick fracture", "Spiral fracture", "Impacted fracture"], answer: 1, rationale: "Greenstick fractures are incomplete breaks typical of soft, growing children's bones." },
      { type: "mcq", q: "A fracture in which the bone is broken into more than two fragments is:", options: ["Transverse", "Oblique", "Comminuted", "Greenstick"], answer: 2, rationale: "Comminuted fractures have more than two bone fragments." },
      { type: "mcq", q: "A fracture that occurs through bone weakened by disease such as a tumour is called a:", options: ["Stress fracture", "Pathological fracture", "Greenstick fracture", "Depressed fracture"], answer: 1, rationale: "A pathological fracture occurs through diseased bone with little or no force." },
      { type: "mcq", q: "The grating sensation felt when broken bone ends move against each other is called:", options: ["Crepitus", "Clonus", "Crackles", "Friction rub"], answer: 0, rationale: "Crepitus is the grating felt or heard when fractured bone ends rub together." },
      { type: "mcq", q: "Restoring fractured bone fragments to correct alignment is called:", options: ["Fixation", "Traction", "Rehabilitation", "Reduction"], answer: 3, rationale: "Reduction is the realignment of the bone fragments, either closed or open." },
      { type: "mcq", q: "ORIF stands for:", options: ["Open Reduction Internal Fixation", "Outer Rod Immobilisation Frame", "Orthopedic Rapid Injury Fix", "Osteo Repair Internal Frame"], answer: 0, rationale: "ORIF = Open Reduction and Internal Fixation — surgical exposure and fixation with plates, screws or nails." },
      { type: "mcq", q: "When a fractured bone heals in a faulty position causing deformity, this is called:", options: ["Non-union", "Delayed union", "Malunion", "Remodelling"], answer: 2, rationale: "Malunion is healing in an incorrect position; non-union is failure to heal at all." },
      { type: "mcq", q: "The correct first-aid priority for a suspected limb fracture before moving the patient is to:", options: ["Massage the limb", "Immobilise the part with a splint", "Make the patient walk", "Apply heat"], answer: 1, rationale: "Splinting prevents further injury, pain and bleeding before transport." },
      { type: "mcq", q: "Which factor delays fracture healing?", options: ["Good blood supply", "Adequate nutrition", "Infection at the site", "Proper immobilisation"], answer: 2, rationale: "Infection, poor blood supply, movement and poor nutrition all delay union; immobilisation and good nutrition help." }
      , { type: "fill", q: "A fracture in which a bone fragment pierces the skin is called an open or ____ fracture.", accept: ["compound"], rationale: "An open fracture, also called compound, communicates with the external environment and risks infection." }
      , { type: "fill", q: "Failure of a fractured bone to unite at all is termed ____.", accept: ["non-union", "nonunion", "non union"], rationale: "Non-union is the complete failure of bone ends to heal together." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "ort-07-fracture-nursing",
    unit: "Unit 2 · Trauma",
    title: "Nursing Care of the Patient with a Fracture",
    readMinutes: 18,
    summary: "Emergency and continuing nursing care of the fracture patient — pain management, neurovascular monitoring, wound and infection prevention, mobility, patient education and the recognition of fracture complications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Emergency (first-aid) care", list: [
        "Ensure airway, breathing and circulation first; control external bleeding with direct pressure.",
        "Immobilise the injured part with a splint, including the joints above and below the fracture.",
        "Cover an open wound with a clean, sterile dressing; do not push back exposed bone.",
        "Do not attempt to straighten or reduce the fracture in the field.",
        "Check and record neurovascular status distal to the injury.",
        "Relieve pain, keep the patient warm and reassured, and arrange safe transport."
      ] },
      { h: "Nursing assessment", p: "On admission the nurse assesses the level of pain, the neurovascular status of the limb (the 5 Ps), the condition of any wound, vital signs (watching for shock from blood loss), and the patient's general and emotional state. Baseline observations allow later changes to be detected early." },
      { h: "Pain management", list: [
        "Assess pain regularly using a pain scale.",
        "Give prescribed analgesia and evaluate its effect.",
        "Use positioning, elevation, splinting and immobilisation to reduce pain.",
        "Apply cold packs in the early phase if ordered to reduce swelling and pain.",
        "Remember that sudden, severe, unrelieved pain may signal compartment syndrome — investigate, do not just increase analgesia."
      ] },
      { h: "Neurovascular monitoring", p: "Frequent neurovascular checks (colour, warmth, capillary refill, pulses, sensation, movement and pain) of the limb distal to the fracture are a continuing nursing priority. Comparing with the opposite limb and acting on early warning signs can prevent permanent damage from swelling, a tight cast or compartment syndrome." },
      { h: "Wound care and infection prevention", list: [
        "Maintain strict asepsis for open fractures and surgical wounds.",
        "Observe the wound and any external fixator or pin sites for redness, swelling, pain and discharge.",
        "Ensure tetanus prophylaxis and give prescribed antibiotics for open fractures.",
        "Monitor temperature and other signs of infection."
      ] },
      { h: "Promoting mobility and preventing immobility complications", list: [
        "Encourage active and passive range-of-motion exercises of unaffected joints.",
        "Teach isometric exercises for muscles within a cast.",
        "Prevent pressure injuries, DVT and chest complications with repositioning, leg exercises, deep breathing and early safe mobilisation.",
        "Assist with safe ambulation and the correct use of crutches, walker or wheelchair.",
        "Maintain correct alignment and support of the injured limb."
      ] },
      { h: "Nutrition and elimination", p: "A diet high in protein, calcium, vitamins C and D, and adequate fibre and fluids supports bone healing and prevents constipation. The nurse encourages fluids to prevent urinary stasis and stones, and establishes a regular bowel routine." },
      { h: "Complications of fractures", list: [
        "Early — shock and haemorrhage, fat embolism (especially with long-bone fractures — restlessness, breathlessness, confusion, petechiae), compartment syndrome, infection, deep vein thrombosis and pulmonary embolism, neurovascular injury.",
        "Late — delayed union, malunion, non-union, avascular necrosis, joint stiffness, contractures and complex regional pain syndrome.",
        "The nurse observes for these and reports early warning signs promptly."
      ] },
      { h: "Patient education and rehabilitation", list: [
        "Teach care of the cast or fixator and the warning signs to report.",
        "Explain the importance of prescribed exercises and gradual weight-bearing.",
        "Advise on safe use of mobility aids and home safety to prevent falls.",
        "Reinforce nutrition, follow-up appointments and not weight-bearing earlier than allowed.",
        "Provide psychological support and involve the family in care."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Describe the emergency (first-aid) management of a patient with a suspected fracture.",
      "Discuss the nursing management of a patient with a fracture of the femur.",
      "How does the nurse prevent infection in a patient with an open fracture?",
      "List the early and late complications of fractures and the nurse's role in detecting them.",
      "What advice would you give a patient with a lower-limb fracture on discharge?"
    ],
    assessment: [
      { type: "mcq", q: "The FIRST priority when managing a patient with multiple injuries including a fracture is:", options: ["Splint the fracture", "Airway, breathing and circulation", "Give analgesia", "Take an X-ray"], answer: 1, rationale: "Life-threatening ABC problems are managed before attending to the fracture itself." },
      { type: "mcq", q: "Correct first aid for an open fracture wound is to:", options: ["Push exposed bone back in", "Cover with a clean sterile dressing", "Wash with soap and scrub", "Leave it open to the air"], answer: 1, rationale: "Cover the wound with a sterile dressing; never push back exposed bone — it increases infection risk." },
      { type: "mcq", q: "Fat embolism is a complication most associated with fractures of:", options: ["Fingers", "Long bones such as the femur", "Skull", "Ribs only"], answer: 1, rationale: "Fat embolism syndrome classically follows long-bone (especially femoral) and pelvic fractures." },
      { type: "mcq", q: "Restlessness, breathlessness, confusion and petechiae after a femoral fracture suggest:", options: ["Constipation", "Fat embolism syndrome", "Mild anxiety", "Urinary infection"], answer: 1, rationale: "These are classic features of fat embolism syndrome and require urgent attention." },
      { type: "mcq", q: "A patient with an open fracture should routinely receive prophylaxis against:", options: ["Malaria", "Tetanus", "Measles", "Polio"], answer: 1, rationale: "Tetanus prophylaxis (and antibiotics) is essential for open, contaminated fractures." },
      { type: "mcq", q: "The continuing nursing observation of greatest priority in a casted fracture limb is:", options: ["Hair growth", "Hobbies", "Sleep position", "Neurovascular status"], answer: 3, rationale: "Frequent neurovascular checks detect swelling or compromise early and prevent permanent damage." },
      { type: "mcq", q: "Which diet best promotes fracture healing?", options: ["Low protein, low calcium", "High protein with calcium and vitamins C and D", "High fat, low fluid", "Carbohydrate only"], answer: 1, rationale: "Protein, calcium and vitamins C and D support tissue and bone repair." },
      { type: "mcq", q: "To preserve muscle strength inside a cast, the nurse teaches the patient to perform:", options: ["Vigorous joint bending", "Isometric (muscle-setting) exercises", "No movement at all", "Cast massage"], answer: 1, rationale: "Isometric exercises maintain muscle tone without moving the immobilised joint." },
      { type: "mcq", q: "Sudden severe pain in a fractured limb that is not relieved by the usual analgesia should make the nurse suspect:", options: ["Normal healing", "Compartment syndrome", "Hunger", "Boredom"], answer: 1, rationale: "Disproportionate, unrelenting pain is an early warning of compartment syndrome and must be reported." },
      { type: "mcq", q: "Which is a LATE complication of a fracture?", options: ["Haemorrhagic shock", "Fat embolism", "Non-union", "Compartment syndrome"], answer: 2, rationale: "Non-union, malunion and avascular necrosis are late complications; shock, fat embolism and compartment syndrome are early." }
      , { type: "fill", q: "When splinting a fracture, the nurse should immobilise the joints ____ and below the fracture.", accept: ["above"], rationale: "Splinting must include the joints above and below the fracture to immobilise it effectively." }
      , { type: "fill", q: "Small reddish-purple skin spots seen in fat embolism syndrome are called ____.", accept: ["petechiae", "petechia"], rationale: "Petechiae are pinpoint haemorrhages, a classic sign of fat embolism syndrome." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "ort-08-dislocation-soft-tissue",
    unit: "Unit 2 · Trauma",
    title: "Dislocations, Sprains, Strains & Soft-Tissue Injuries",
    readMinutes: 16,
    summary: "Definitions and differences between dislocation, subluxation, sprain and strain, their clinical features, management including the RICE principle, and the nursing care of soft-tissue injuries.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", list: [
        "Dislocation — complete loss of contact between the two joint surfaces; the bones are out of their normal position (e.g. shoulder dislocation).",
        "Subluxation — a partial dislocation, where the joint surfaces are only partly displaced.",
        "Sprain — an injury (stretch or tear) of a ligament caused by a sudden twist or wrench of a joint.",
        "Strain — an injury (overstretch or tear) of a muscle or tendon from overuse or sudden pull.",
        "Soft-tissue injury — a general term for injury to muscles, tendons, ligaments and other non-bony tissue, including contusions (bruises)."
      ] },
      { h: "Causes", p: "These injuries usually follow trauma — falls, sports, twisting movements, road accidents or a direct blow. A dislocation may also be congenital (e.g. developmental dysplasia of the hip) or pathological (from disease around the joint). Recurrent dislocation can follow when the supporting structures are stretched or torn." },
      { h: "Clinical features of dislocation", list: [
        "Severe pain at the joint.",
        "Visible deformity and abnormal position of the joint.",
        "Loss of normal movement (the joint is 'locked').",
        "Swelling and tenderness.",
        "Shortening or lengthening of the limb.",
        "Possible neurovascular injury if a nerve or vessel is stretched."
      ] },
      { h: "Clinical features of sprains and strains", list: [
        "Sprain — pain, swelling, bruising and tenderness over a ligament, with painful movement of the joint.",
        "Strain — pain, muscle spasm, swelling and loss of strength in the affected muscle.",
        "Both cause loss of function but, unlike a fracture, there is usually no bony deformity or crepitus."
      ] },
      { h: "Management of dislocation", list: [
        "Reduction — the joint is put back into place (closed reduction by manipulation, or open reduction by surgery), usually under analgesia/anaesthesia.",
        "Immobilisation — the joint is rested in a sling, bandage or cast for a period to allow the soft tissues to heal.",
        "Check neurovascular status before and after reduction.",
        "Gradual mobilisation and physiotherapy to restore movement and strength.",
        "Do not attempt forceful reduction in the field; immobilise and transfer."
      ] },
      { h: "Management of sprains and strains — the RICE principle", p: "The first-aid management of most acute soft-tissue injuries follows RICE.", list: [
        "R — Rest the injured part to prevent further damage.",
        "I — Ice (cold packs) for the first 24-48 hours to reduce swelling and pain (apply over a cloth, not directly on skin).",
        "C — Compression with an elastic bandage to limit swelling.",
        "E — Elevation of the part above heart level to reduce swelling."
      ], figure: {
        caption: "The RICE principle for acute soft-tissue injury.",
        svg: '<svg viewBox="0 0 560 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RICE principle"><rect x="10" y="15" width="540" height="110" rx="12" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><rect x="35" y="45" width="115" height="55" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="92" y="70" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#7C2D12">R</text><text x="92" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Rest</text><rect x="165" y="45" width="115" height="55" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="222" y="70" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#7C2D12">I</text><text x="222" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Ice</text><rect x="295" y="45" width="115" height="55" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="352" y="70" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#7C2D12">C</text><text x="352" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Compression</text><rect x="425" y="45" width="110" height="55" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="480" y="70" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#7C2D12">E</text><text x="480" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Elevation</text></svg>'
      } },
      { h: "Nursing care", list: [
        "Relieve pain with analgesia, rest and the RICE measures.",
        "Immobilise and support the part as ordered (sling, bandage, splint).",
        "Monitor neurovascular status, especially after a dislocation or reduction.",
        "Observe for swelling and complications; teach the patient to report increasing pain or numbness.",
        "Encourage gradual return to movement and exercises as healing allows; avoid heat in the first 48 hours.",
        "Educate on injury prevention — warming up, correct technique and supportive footwear."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Differentiate between a dislocation, a sprain and a strain.",
      "Describe the clinical features and management of a dislocated shoulder.",
      "Explain the RICE principle in the management of a soft-tissue injury.",
      "Outline the nursing care of a patient with a sprained ankle.",
      "What is subluxation? How is recurrent dislocation prevented?"
    ],
    assessment: [
      { type: "mcq", q: "Complete loss of contact between two joint surfaces is called:", options: ["Sprain", "Strain", "Dislocation", "Subluxation"], answer: 2, rationale: "Dislocation is complete displacement of the joint surfaces; subluxation is partial." },
      { type: "mcq", q: "A partial dislocation in which joint surfaces are only partly displaced is a:", options: ["Subluxation", "Strain", "Sprain", "Contusion"], answer: 0, rationale: "Subluxation is an incomplete or partial dislocation." },
      { type: "mcq", q: "Injury to a ligament from a sudden twist of a joint is a:", options: ["Strain", "Fracture", "Dislocation", "Sprain"], answer: 3, rationale: "A sprain injures a ligament; a strain injures a muscle or tendon." },
      { type: "mcq", q: "Injury (overstretch or tear) of a muscle or tendon is a:", options: ["Strain", "Sprain", "Subluxation", "Dislocation"], answer: 0, rationale: "A strain affects muscle or tendon; a sprain affects a ligament." },
      { type: "mcq", q: "In the RICE principle, the 'C' stands for:", options: ["Cold", "Compression", "Cast", "Cleaning"], answer: 1, rationale: "C is compression with an elastic bandage to limit swelling; ice provides the cold." },
      { type: "mcq", q: "For an acute ankle sprain, ice should generally be applied during the:", options: ["First 24-48 hours", "Second week only", "Whole month", "Never"], answer: 0, rationale: "Cold is most useful in the first 24-48 hours to reduce swelling and pain." },
      { type: "mcq", q: "Putting a dislocated joint back into its normal position is called:", options: ["Fixation", "Reduction", "Fusion", "Traction"], answer: 1, rationale: "Reduction restores the joint surfaces to their normal alignment." },
      { type: "mcq", q: "A feature that helps distinguish a sprain from a fracture is that a sprain usually has:", options: ["Bony deformity", "Crepitus", "No bony deformity or crepitus", "Complete loss of the limb"], answer: 2, rationale: "Sprains injure soft tissue, so there is usually no bony deformity or crepitus as in a fracture." },
      { type: "mcq", q: "After reducing a dislocation, the joint is usually:", options: ["Left free to move fully at once", "Immobilised for a period to allow healing", "Heated immediately", "Massaged vigorously"], answer: 1, rationale: "The joint is rested/immobilised to let the stretched soft tissues heal before gradual mobilisation." },
      { type: "mcq", q: "An important nursing check before and after reduction of a dislocation is:", options: ["Hair colour", "Neurovascular status of the limb", "Body weight", "Appetite"], answer: 1, rationale: "Nerves and vessels may be injured by the dislocation or reduction, so neurovascular status is monitored." }
      , { type: "fill", q: "The first-aid principle for soft-tissue injury summarised as Rest, Ice, Compression and Elevation is called ____.", accept: ["RICE", "rice"], rationale: "RICE is the standard acute management of sprains and strains." }
      , { type: "fill", q: "A bruise caused by a direct blow to soft tissue is called a ____.", accept: ["contusion"], rationale: "A contusion is bruising of soft tissue from direct trauma without breaking the skin." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "ort-09-amputation",
    unit: "Unit 2 · Trauma",
    title: "Amputation, Prosthesis & Rehabilitation",
    readMinutes: 18,
    summary: "Meaning, indications and levels of amputation, pre- and post-operative nursing care, stump (residual limb) care, management of phantom limb sensation, and rehabilitation with a prosthesis.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and indications", p: "Amputation is the surgical removal of all or part of a limb. It is done as a last resort when a limb cannot be saved or is a danger to life.", list: [
        "Peripheral vascular disease and diabetic gangrene (the commonest causes in adults).",
        "Severe trauma with an unsalvageable limb.",
        "Malignant bone or soft-tissue tumour.",
        "Severe, life-threatening infection (e.g. gas gangrene).",
        "Severe deformity or a useless, painful limb."
      ] },
      { h: "Levels and types", list: [
        "By level — above-knee (transfemoral), below-knee (transtibial), above-elbow, below-elbow, and amputation of digits; below-knee amputations generally allow better rehabilitation than above-knee.",
        "Closed (flap) amputation — the wound is closed primarily over the stump; usual in planned surgery.",
        "Open (guillotine) amputation — the wound is left open, used when infection is present, and closed later."
      ] },
      { h: "Pre-operative nursing care", list: [
        "Psychological preparation — the loss of a limb is a major emotional event; allow the patient to express fears and grief, and give honest information.",
        "Obtain informed consent and explain the procedure and expected outcome.",
        "Prepare the skin and the surgical site; control infection and stabilise general condition (e.g. blood sugar in diabetics).",
        "Begin teaching about post-operative exercises, stump care and the rehabilitation plan.",
        "Routine pre-operative checks — fasting, baseline observations, investigations."
      ] },
      { h: "Post-operative nursing care", list: [
        "Monitor vital signs and observe the stump dressing for bleeding/haemorrhage — keep a tourniquet at the bedside in the early period.",
        "Relieve pain and manage the wound with asepsis to prevent infection.",
        "Position the stump correctly to prevent contractures — avoid prolonged flexion; after a below-knee amputation keep the knee straight and elevate the stump on a pillow for the first 24 hours only (to reduce oedema), then keep it flat to prevent hip/knee flexion contracture.",
        "Encourage range-of-motion exercises and prevent the complications of immobility.",
        "Provide emotional support and help with adjustment to altered body image."
      ] },
      { h: "Stump (residual limb) care", list: [
        "Keep the stump clean and dry; inspect daily for redness, swelling, blisters or breakdown.",
        "Apply stump bandaging or a shrinker sock with even pressure to shape (cone) the stump for the prosthesis.",
        "Do not apply lotion, oil or powder unless advised, and avoid anything that softens or irritates the skin.",
        "Encourage prone lying for periods (after a leg amputation) to prevent hip flexion contracture.",
        "Toughen (harden) the stump as advised — gentle massage and pressure to prepare it for the prosthesis."
      ] },
      { h: "Phantom limb sensation and pain", p: "Many patients feel as if the amputated limb is still present (phantom limb sensation), and some experience pain in the missing part (phantom limb pain). This is real and not imagined; the nurse acknowledges it, reassures the patient, gives prescribed pain relief, and uses measures such as distraction, relaxation, stump exercise and early prosthesis use, which often help it settle over time." },
      { h: "Prosthesis and rehabilitation", p: "A prosthesis is an artificial replacement for the missing limb. Rehabilitation is a team effort and aims at the highest possible independence.", list: [
        "Prepare and shape the stump so a prosthesis can be fitted.",
        "Strengthen the remaining muscles and the unaffected limbs with exercise.",
        "Teach safe transfer, balance, use of crutches/walker and then gait training with the prosthesis.",
        "Teach care of the prosthesis and the skin in contact with it.",
        "Provide continuing psychological support, vocational guidance and family involvement.",
        "Encourage participation in self-care and return to normal activities and work."
      ] },
      { h: "Complications", list: [
        "Haemorrhage and shock in the early period.",
        "Wound infection and delayed healing (especially in diabetes and vascular disease).",
        "Contractures from poor positioning.",
        "Phantom limb pain.",
        "Depression and difficulty adjusting to body-image change."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Define amputation and list its common indications.",
      "Describe the pre-operative and post-operative nursing care of an amputee.",
      "Explain stump (residual limb) care and how contractures are prevented.",
      "What is phantom limb pain? How does the nurse manage it?",
      "Discuss the rehabilitation of a patient with a below-knee amputation."
    ],
    assessment: [
      { type: "mcq", q: "The commonest cause of lower-limb amputation in adults is:", options: ["Sports injury", "Peripheral vascular disease and diabetic gangrene", "Snake bite", "Common cold"], answer: 1, rationale: "Peripheral vascular disease, often with diabetes, leads to gangrene and is the leading cause of adult amputation." },
      { type: "mcq", q: "An amputation in which the wound is left open because of infection and closed later is a/an:", options: ["Closed (flap) amputation", "Open (guillotine) amputation", "Disarticulation", "Revision amputation"], answer: 1, rationale: "An open or guillotine amputation is used when infection is present and is closed at a later operation." },
      { type: "mcq", q: "Which item should be kept at the bedside immediately after a limb amputation?", options: ["A tourniquet", "A wheelchair", "A walker", "Crutches"], answer: 0, rationale: "A tourniquet is kept ready to control sudden haemorrhage from the stump in the early period." },
      { type: "mcq", q: "The feeling that an amputated limb is still present is called:", options: ["Phantom limb sensation", "Compartment syndrome", "Referred pain", "Neuralgia"], answer: 0, rationale: "Phantom limb sensation is the perception that the missing limb is still there; it is a real phenomenon." },
      { type: "mcq", q: "To prevent a hip flexion contracture after a leg amputation, the patient is encouraged to lie:", options: ["Continuously with the stump raised on pillows", "Prone (on the abdomen) for periods", "Curled up on the side", "Sitting upright at all times"], answer: 1, rationale: "Periods of prone lying extend the hip and help prevent a flexion contracture; prolonged stump elevation should be avoided after the first day." },
      { type: "mcq", q: "An artificial replacement for an amputated limb is called a:", options: ["Orthosis", "Splint", "Traction", "Prosthesis"], answer: 3, rationale: "A prosthesis is an artificial limb; an orthosis supports an existing body part." },
      { type: "mcq", q: "Stump bandaging (or a shrinker sock) is applied mainly to:", options: ["Keep the stump warm only", "Shape the stump for a prosthesis", "Stop phantom pain", "Replace the limb"], answer: 1, rationale: "Even compression shapes (cones) the stump and reduces oedema in preparation for prosthesis fitting." },
      { type: "mcq", q: "Which level of lower-limb amputation generally allows the best rehabilitation and walking?", options: ["Above-knee", "Below-knee", "Hip disarticulation", "Hemipelvectomy"], answer: 1, rationale: "A below-knee (transtibial) amputation preserves the knee, giving better function with a prosthesis." },
      { type: "mcq", q: "A priority of pre-operative care before amputation is:", options: ["Ignoring the patient's feelings", "Psychological preparation and honest information", "Hiding the diagnosis", "Forcing immediate decisions"], answer: 1, rationale: "Loss of a limb is a major emotional event; psychological preparation and honest communication are essential." },
      { type: "mcq", q: "Phantom limb pain is best understood by the nurse as:", options: ["Imaginary and ignored", "A real experience needing acknowledgement and treatment", "A sign of mental illness", "Always permanent and untreatable"], answer: 1, rationale: "Phantom limb pain is real; it is acknowledged and treated with analgesia and supportive measures." }
      , { type: "fill", q: "The portion of the limb remaining after amputation, requiring careful care and shaping, is called the ____.", accept: ["stump", "residual limb"], rationale: "The stump (residual limb) is cared for and shaped to receive a prosthesis." }
      , { type: "fill", q: "An artificial limb fitted to replace the amputated part is called a ____.", accept: ["prosthesis"], rationale: "A prosthesis is the artificial replacement for a missing body part." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "ort-10-arthritis",
    unit: "Unit 3 · Disorders & Surgery",
    title: "Joint Disorders — Osteoarthritis & Rheumatoid Arthritis",
    readMinutes: 18,
    summary: "Definition, causes, pathophysiology, clinical features and management of osteoarthritis and rheumatoid arthritis, with the differences between them and the nursing care of patients with chronic joint disease.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Osteoarthritis — definition and causes", p: "Osteoarthritis (OA), or degenerative joint disease, is the slow wearing away of the articular cartilage of a joint with changes in the underlying bone. It is the commonest form of arthritis and mainly affects weight-bearing joints — the knees, hips and spine — and the hands. Risk factors include increasing age, obesity, previous joint injury, repetitive overuse and a family history." },
      { h: "Osteoarthritis — pathophysiology and features", p: "The smooth cartilage covering the joint surfaces gradually softens, frays and is lost, so bone rubs on bone. The body forms bony spurs (osteophytes) at the joint margins and the joint space narrows.", list: [
        "Joint pain that worsens with activity and use and is relieved by rest.",
        "Stiffness, especially after rest, that eases with movement; morning stiffness is usually brief (under 30 minutes).",
        "Reduced range of movement, crepitus (grating) and gradual deformity.",
        "Bony swelling; in the hands, Heberden's nodes (at the end finger joints) and Bouchard's nodes (at the middle joints).",
        "Usually affects only a few joints, often asymmetrically; no marked general illness."
      ] },
      { h: "Rheumatoid arthritis — definition and causes", p: "Rheumatoid arthritis (RA) is a chronic, systemic autoimmune disease in which the body's immune system attacks the synovial lining of joints, causing inflammation. The exact cause is unknown but genetic and environmental factors are involved. It is commoner in women and usually begins between 30 and 50 years of age." },
      { h: "Rheumatoid arthritis — pathophysiology and features", p: "Inflammation of the synovium (synovitis) leads to a thickened, inflamed membrane called pannus, which gradually destroys cartilage and bone and causes deformity.", list: [
        "Symmetrical pain, swelling, warmth and stiffness of joints, typically the small joints of the hands and feet first.",
        "Prolonged morning stiffness (often lasting more than one hour).",
        "Systemic features — fatigue, low-grade fever, weight loss and malaise.",
        "Progressive joint deformity — e.g. ulnar deviation, swan-neck and boutonnière deformities of the fingers.",
        "Rheumatoid nodules and possible involvement of other organs (eyes, lungs, heart)."
      ] },
      { h: "Osteoarthritis vs rheumatoid arthritis", figure: {
        caption: "Key differences between osteoarthritis and rheumatoid arthritis.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Osteoarthritis versus rheumatoid arthritis"><rect x="10" y="10" width="540" height="160" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="160" stroke="#B45309" stroke-width="1.5"/><line x1="375" y1="20" x2="375" y2="160" stroke="#B45309" stroke-width="1.5"/><text x="105" y="38" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Feature</text><text x="287" y="38" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Osteoarthritis</text><text x="462" y="38" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Rheumatoid</text><text x="20" y="62" font-family="sans-serif" font-size="10" fill="#7C2D12">Cause</text><text x="210" y="62" font-family="sans-serif" font-size="10" fill="#7C2D12">Wear / degeneration</text><text x="385" y="62" font-family="sans-serif" font-size="10" fill="#7C2D12">Autoimmune</text><text x="20" y="86" font-family="sans-serif" font-size="10" fill="#7C2D12">Pattern</text><text x="210" y="86" font-family="sans-serif" font-size="10" fill="#7C2D12">Asymmetrical, large joints</text><text x="385" y="86" font-family="sans-serif" font-size="10" fill="#7C2D12">Symmetrical, small joints</text><text x="20" y="110" font-family="sans-serif" font-size="10" fill="#7C2D12">Morning stiff</text><text x="210" y="110" font-family="sans-serif" font-size="10" fill="#7C2D12">&lt; 30 minutes</text><text x="385" y="110" font-family="sans-serif" font-size="10" fill="#7C2D12">&gt; 1 hour</text><text x="20" y="134" font-family="sans-serif" font-size="10" fill="#7C2D12">Systemic</text><text x="210" y="134" font-family="sans-serif" font-size="10" fill="#7C2D12">No</text><text x="385" y="134" font-family="sans-serif" font-size="10" fill="#7C2D12">Yes (fatigue, fever)</text><text x="20" y="158" font-family="sans-serif" font-size="10" fill="#7C2D12">Pain pattern</text><text x="210" y="158" font-family="sans-serif" font-size="10" fill="#7C2D12">Worse with use</text><text x="385" y="158" font-family="sans-serif" font-size="10" fill="#7C2D12">Worse after rest</text></svg>'
      } },
      { h: "Investigations", list: [
        "X-ray — OA shows joint-space narrowing and osteophytes; RA shows erosions and deformity.",
        "Blood tests — RA: raised ESR/CRP, positive rheumatoid factor and anti-CCP antibodies, mild anaemia; OA usually has normal inflammatory markers.",
        "Joint fluid (aspiration) analysis where needed."
      ] },
      { h: "Management", list: [
        "OA — weight reduction, exercise, physiotherapy, analgesia (paracetamol) and NSAIDs, walking aids, intra-articular steroid injections, and joint replacement for severe disease.",
        "RA — disease-modifying anti-rheumatic drugs (DMARDs such as methotrexate), NSAIDs and short courses of corticosteroids for flares, biologic agents in selected cases, plus physiotherapy and surgery for damaged joints.",
        "Both — rest during acute flares balanced with regular gentle exercise to keep joints mobile, and protection of joints from strain."
      ] },
      { h: "Nursing management", list: [
        "Relieve pain — analgesia as prescribed, rest the inflamed joint during flares, apply heat (for stiffness) or cold (for acute inflammation) as appropriate.",
        "Maintain mobility and function — range-of-motion and strengthening exercises, correct positioning to prevent deformity, and rest splints during flares.",
        "Promote joint protection and energy conservation — teach the patient to use larger joints, avoid prolonged grip, and pace activities.",
        "Provide assistive and walking aids and advise on home modifications.",
        "Educate on the disease, medication (and side-effects of NSAIDs and steroids), and the importance of continuing therapy.",
        "Support nutrition and weight control, and give psychological support for living with chronic pain and disability."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Define osteoarthritis. Describe its causes, pathophysiology and clinical features.",
      "Define rheumatoid arthritis and describe its clinical features.",
      "Differentiate between osteoarthritis and rheumatoid arthritis.",
      "Describe the medical and nursing management of a patient with rheumatoid arthritis.",
      "Explain the principles of joint protection and energy conservation in arthritis."
    ],
    assessment: [
      { type: "mcq", q: "Osteoarthritis is primarily a disease of:", options: ["Autoimmune inflammation", "Degeneration of joint cartilage", "Bacterial infection", "Nerve damage"], answer: 1, rationale: "OA is degenerative — the articular cartilage gradually wears away." },
      { type: "mcq", q: "Rheumatoid arthritis is best described as a/an:", options: ["Autoimmune systemic disease", "Degenerative disease", "Infective disease", "Metabolic disease"], answer: 0, rationale: "RA is a chronic autoimmune systemic disease attacking the synovium." },
      { type: "mcq", q: "Morning stiffness lasting more than one hour is most characteristic of:", options: ["Osteoarthritis", "Rheumatoid arthritis", "Gout", "Fracture"], answer: 1, rationale: "Prolonged morning stiffness (over an hour) is typical of inflammatory RA; OA stiffness is brief." },
      { type: "mcq", q: "Bony swellings at the end (distal) finger joints in osteoarthritis are called:", options: ["Bouchard's nodes", "Heberden's nodes", "Rheumatoid nodules", "Tophi"], answer: 1, rationale: "Heberden's nodes occur at the distal interphalangeal joints in OA; Bouchard's nodes at the proximal joints." },
      { type: "mcq", q: "The inflamed, thickened synovial tissue that destroys joints in rheumatoid arthritis is called:", options: ["Osteophyte", "Pannus", "Callus", "Tophus"], answer: 1, rationale: "Pannus is the inflammatory synovial overgrowth that erodes cartilage and bone in RA." },
      { type: "mcq", q: "Pain that is worse with activity and relieved by rest is most typical of:", options: ["Osteoarthritis", "Rheumatoid arthritis", "Septic arthritis", "Osteomyelitis"], answer: 0, rationale: "OA pain typically increases with use of the weight-bearing joint and eases with rest." },
      { type: "mcq", q: "A first-line disease-modifying drug commonly used in rheumatoid arthritis is:", options: ["Paracetamol", "Insulin", "Furosemide", "Methotrexate"], answer: 3, rationale: "Methotrexate is a commonly used DMARD that slows the progression of RA." },
      { type: "mcq", q: "Which is a positive blood finding in rheumatoid arthritis?", options: ["Low ESR", "Positive rheumatoid factor", "Negative anti-CCP", "Raised blood sugar"], answer: 1, rationale: "RA often shows positive rheumatoid factor and anti-CCP with raised ESR/CRP." },
      { type: "mcq", q: "An important nursing principle for arthritis is to teach the patient to:", options: ["Keep joints completely immobile forever", "Protect joints and balance rest with gentle exercise", "Avoid all movement", "Carry heavy loads with small joints"], answer: 1, rationale: "Joint protection plus a balance of rest (in flares) and regular gentle exercise maintains function." },
      { type: "mcq", q: "Joint replacement surgery may be required in severe:", options: ["Mild sprain", "Osteoarthritis of the hip or knee", "Common cold", "Simple bruise"], answer: 1, rationale: "Total joint replacement is offered for advanced OA (and damaged RA joints) to relieve pain and restore function." }
      , { type: "fill", q: "The bony spurs that form at the joint margins in osteoarthritis are called ____.", accept: ["osteophytes", "osteophyte"], rationale: "Osteophytes are bony outgrowths at the margins of an osteoarthritic joint." }
      , { type: "fill", q: "Rheumatoid arthritis typically affects joints in a ____ (both sides) pattern.", accept: ["symmetrical", "symmetric", "bilateral"], rationale: "RA characteristically involves joints symmetrically on both sides of the body." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "ort-11-bone-joint-infections",
    unit: "Unit 3 · Disorders & Surgery",
    title: "Bone & Joint Infections — Osteomyelitis, Septic Arthritis & Tuberculosis of Bone",
    readMinutes: 18,
    summary: "Causes, pathophysiology, clinical features, investigations and management of osteomyelitis, septic arthritis and skeletal tuberculosis (including Pott's spine), and the nursing care of patients with bone and joint infection.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Osteomyelitis — definition and causes", p: "Osteomyelitis is infection of bone and bone marrow. It is most often caused by Staphylococcus aureus. Infection reaches the bone by the blood stream (haematogenous, common in children), by direct spread from a wound, open fracture or surgery, or from a nearby soft-tissue infection. It may be acute or, if untreated, become chronic." },
      { h: "Osteomyelitis — pathophysiology and features", p: "Bacteria multiply in the bone, causing inflammation, pus formation and raised pressure that cuts off the blood supply; a piece of dead bone (sequestrum) may form, surrounded by new bone (involucrum), which keeps the infection going in chronic disease.", list: [
        "Acute — sudden severe localised bone pain, tenderness, swelling, warmth and redness over the part, with high fever, chills and malaise; the limb is held still and movement is painful.",
        "Chronic — persistent or recurring pain, a discharging sinus, and intermittent flares.",
        "Reluctance to move or bear weight on the affected limb."
      ] },
      { h: "Septic (suppurative) arthritis", p: "Septic arthritis is infection within a joint, usually bacterial (often Staphylococcus aureus). It is an emergency because pus can rapidly destroy the cartilage. Features are a hot, swollen, very painful joint that the patient refuses to move, with fever and general illness. Prompt drainage of the joint and antibiotics are needed to save it." },
      { h: "Tuberculosis of bone and joint", p: "Skeletal tuberculosis is caused by Mycobacterium tuberculosis, usually spreading from a primary focus (often the lungs) through the blood. It is a chronic, slow infection. The spine is the commonest site (Pott's disease/Pott's spine); the hip and knee are also affected.", list: [
        "Insidious onset of pain, swelling and stiffness of the affected joint or back.",
        "Muscle wasting and limitation of movement.",
        "A 'cold abscess' (collection of pus without the usual heat and redness).",
        "In Pott's spine — back pain, a gibbus (angular kyphotic deformity), and possible paraplegia (Pott's paraplegia) if the spinal cord is compressed.",
        "Constitutional features — evening rise of temperature, night sweats, weight loss and loss of appetite."
      ] },
      { h: "Investigations", list: [
        "Blood — raised ESR/CRP and white-cell count; blood culture in acute infection.",
        "X-ray — bone changes (late in early osteomyelitis); destruction in chronic disease and TB.",
        "MRI/bone scan — early detection of infection.",
        "Aspiration and culture of pus or joint fluid to identify the organism and guide antibiotics.",
        "For TB — sputum/tissue for AFB, the tuberculin test and culture."
      ] },
      { h: "Management", list: [
        "Osteomyelitis — prompt, prolonged appropriate antibiotics (often given intravenously first, then orally for several weeks); rest and immobilisation of the limb; surgical drainage of pus and removal of dead bone (sequestrectomy) in chronic disease.",
        "Septic arthritis — urgent drainage of the joint (aspiration or surgical washout) plus antibiotics; rest and later mobilisation.",
        "Skeletal TB — a full course of anti-tubercular drugs for several months (multi-drug therapy), rest and immobilisation of the part, good nutrition, and surgery (drainage or stabilisation) where needed; spinal TB with cord compression may need decompression."
      ] },
      { h: "Nursing management", list: [
        "Relieve pain and immobilise/support the affected part; handle the limb gently.",
        "Give antibiotics/anti-tubercular drugs exactly as prescribed and on time; teach the patient that the full long course must be completed (especially in TB) even when feeling better.",
        "Wound and sinus care with strict asepsis; observe and record discharge, and protect others from cross-infection.",
        "Monitor temperature and other signs of infection and response to treatment.",
        "Provide a high-protein, high-calorie, vitamin-rich diet and adequate fluids to aid healing.",
        "Prevent the complications of immobility and assist with hygiene and exercises.",
        "Health education — completing treatment, follow-up, nutrition, and seeking early care for wounds and infections.",
        "Psychological support during the long course of treatment."
      ] },
      { h: "Complications", list: [
        "Chronic osteomyelitis with a persistent discharging sinus and sequestrum.",
        "Septicaemia and spread of infection.",
        "Joint destruction, deformity and stiffness.",
        "Pathological fracture.",
        "In Pott's spine — kyphotic deformity and paraplegia."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Define osteomyelitis. Describe its causes, clinical features and management.",
      "What is septic arthritis? Why is it an emergency and how is it managed?",
      "Describe the clinical features of tuberculosis of the spine (Pott's disease).",
      "Outline the nursing management of a patient with chronic osteomyelitis.",
      "Explain the health education you would give a patient with bone tuberculosis on anti-tubercular treatment."
    ],
    assessment: [
      { type: "mcq", q: "Osteomyelitis is an infection of the:", options: ["Joint cavity only", "Bone and bone marrow", "Muscle only", "Skin only"], answer: 1, rationale: "Osteomyelitis is infection of bone and its marrow." },
      { type: "mcq", q: "The commonest causative organism of acute osteomyelitis is:", options: ["Escherichia coli", "Mycobacterium leprae", "Candida albicans", "Staphylococcus aureus"], answer: 3, rationale: "Staphylococcus aureus is the usual cause of acute osteomyelitis and septic arthritis." },
      { type: "mcq", q: "A piece of dead bone that forms in chronic osteomyelitis is called a:", options: ["Involucrum", "Sequestrum", "Osteophyte", "Pannus"], answer: 1, rationale: "A sequestrum is dead bone; the new bone forming around it is the involucrum." },
      { type: "mcq", q: "Septic arthritis is considered an emergency because:", options: ["It is painless", "Pus can rapidly destroy joint cartilage", "It always heals on its own", "It never spreads"], answer: 1, rationale: "Untreated, pus in the joint rapidly destroys cartilage, so urgent drainage is needed." },
      { type: "mcq", q: "The commonest site of skeletal tuberculosis is the:", options: ["Skull", "Fingers", "Spine", "Jaw"], answer: 2, rationale: "Spinal TB (Pott's disease) is the commonest form of skeletal tuberculosis." },
      { type: "mcq", q: "Tuberculosis of bone is caused by:", options: ["Staphylococcus aureus", "Streptococcus", "Mycobacterium tuberculosis", "E. coli"], answer: 2, rationale: "Skeletal TB is caused by Mycobacterium tuberculosis, usually spread from a primary focus." },
      { type: "mcq", q: "A collection of pus without the usual heat and redness, typical of tuberculosis, is called a:", options: ["Hot abscess", "Cold abscess", "Sequestrum", "Furuncle"], answer: 1, rationale: "TB characteristically produces a 'cold abscess' lacking the classic signs of acute inflammation." },
      { type: "mcq", q: "The angular kyphotic deformity of the spine in Pott's disease is called a:", options: ["Gibbus", "Lordosis", "Scoliosis", "Bunion"], answer: 0, rationale: "A gibbus is the sharp angular kyphosis of the spine in Pott's disease." },
      { type: "mcq", q: "The most important nursing teaching for a patient on anti-tubercular drugs is to:", options: ["Stop the drugs when feeling better", "Complete the full course even when feeling well", "Take the drugs only during pain", "Share the drugs with family"], answer: 1, rationale: "The full multi-month course must be completed to cure TB and prevent drug resistance." },
      { type: "mcq", q: "Definitive identification of the organism in a bone or joint infection is best obtained by:", options: ["X-ray alone", "Culture of aspirated pus or joint fluid", "Blood pressure", "Temperature chart"], answer: 1, rationale: "Culture of pus or joint fluid identifies the organism and guides antibiotic choice." }
      , { type: "fill", q: "Infection within a joint, presenting as a hot, swollen, painful joint, is called ____ arthritis.", accept: ["septic", "suppurative", "pyogenic"], rationale: "Septic (suppurative) arthritis is bacterial infection of a joint and is an emergency." }
      , { type: "fill", q: "Tuberculosis of the spine is also known as ____ disease.", accept: ["Pott's", "potts", "pott", "Pott"], rationale: "Spinal tuberculosis is called Pott's disease, after Percival Pott." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "ort-12-spinal-disorders",
    unit: "Unit 3 · Disorders & Surgery",
    title: "Spinal Disorders — Low Back Pain, Prolapsed Intervertebral Disc & Scoliosis",
    readMinutes: 17,
    summary: "Common spinal problems — low back pain, prolapsed (herniated) intervertebral disc and scoliosis — their causes, features, management and the nursing care of patients with back disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Low back pain — causes", p: "Low back pain is an extremely common complaint. Most cases are mechanical (muscle or ligament strain from poor posture, heavy or wrong lifting, prolonged standing or sitting, or obesity). Other causes include a prolapsed disc, degenerative disease of the spine, osteoporosis, infection (TB), tumour and referred pain from pelvic or abdominal organs." },
      { h: "Low back pain — features and management", list: [
        "Pain in the lower back, sometimes radiating to the buttock or leg, often worse on movement and relieved by rest.",
        "Muscle spasm and stiffness; limited movement.",
        "Management — rest in the acute phase (but prolonged bed rest is avoided), analgesia and muscle relaxants, heat application, physiotherapy and back-strengthening exercises, weight reduction, and education on posture and lifting.",
        "Surgery is reserved for specific causes such as a significant disc prolapse with nerve compression."
      ] },
      { h: "Prolapsed intervertebral disc (PIVD)", p: "Between the vertebrae lie intervertebral discs, each with a soft jelly-like centre (nucleus pulposus) inside a tough outer ring (annulus fibrosus). In a prolapsed (herniated or 'slipped') disc, the soft centre bulges or ruptures through the outer ring, often after lifting or straining, and presses on a spinal nerve root. The lumbar region (especially L4-L5 and L5-S1) and the neck are common sites." },
      { h: "PIVD — clinical features", list: [
        "Back pain that may radiate down the leg along the sciatic nerve (sciatica) in lumbar disc prolapse.",
        "Pain made worse by coughing, sneezing, straining and bending.",
        "Numbness, tingling and weakness in the area supplied by the affected nerve.",
        "Limited spinal movement and muscle spasm; a positive straight-leg-raise test.",
        "In severe central prolapse — bladder and bowel disturbance (cauda equina syndrome), a surgical emergency."
      ] },
      { h: "PIVD — management", list: [
        "Conservative — rest, analgesia and anti-inflammatory drugs, muscle relaxants, physiotherapy, traction in selected cases, and back exercises once acute pain settles.",
        "Surgery — discectomy (removal of the prolapsed portion) or laminectomy when conservative treatment fails or there are progressive neurological signs.",
        "Education — correct posture, lifting technique, weight control and avoiding strain."
      ] },
      { h: "Scoliosis", p: "Scoliosis is a sideways (lateral) curvature of the spine, often with rotation, giving an S- or C-shaped curve. It may be idiopathic (cause unknown, the commonest type, often appearing in adolescence, more in girls), congenital, or secondary to neuromuscular disease.", list: [
        "Visible curve of the spine, uneven shoulders or hips, a prominence of the ribs on one side, and uneven waist.",
        "Usually painless in adolescents but may worsen during growth.",
        "Diagnosis confirmed by examination (forward-bend test) and X-ray (the Cobb angle measures severity).",
        "Management depends on severity — observation for mild curves, a brace for moderate curves in a growing child, and surgical correction with spinal fusion for severe curves.",
        "Early detection through school screening allows simpler treatment."
      ], figure: {
        caption: "Normal spine versus a scoliotic (lateral) curve.",
        svg: '<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal spine versus scoliosis"><rect x="10" y="10" width="340" height="180" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="95" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Normal</text><line x1="95" y1="45" x2="95" y2="170" stroke="#15803D" stroke-width="6" stroke-linecap="round"/><text x="260" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Scoliosis</text><path d="M260 45 C 300 80, 220 120, 260 170" fill="none" stroke="#B45309" stroke-width="6" stroke-linecap="round"/><text x="180" y="188" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Lateral curvature of the spine</text></svg>'
      } },
      { h: "Nursing management of spinal disorders", list: [
        "Relieve pain — correct positioning (a firm mattress, knees slightly flexed), analgesia, heat and rest as ordered.",
        "Maintain correct body alignment; teach the log-roll technique to turn the patient after spinal surgery.",
        "Teach safe posture, body mechanics and lifting (bend the knees, keep the back straight, hold loads close).",
        "Encourage prescribed back-strengthening exercises and gradual mobilisation.",
        "Monitor neurological status — power, sensation and bladder/bowel function — and report deterioration.",
        "For a braced child — skin care under the brace, correct wearing schedule, and psychological support.",
        "Educate on weight control, ergonomics and prevention of recurrence."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "List the causes of low back pain and outline its management.",
      "What is a prolapsed intervertebral disc? Describe its clinical features.",
      "Describe the conservative and surgical management of a prolapsed lumbar disc.",
      "Define scoliosis. How is it detected and managed?",
      "Explain the nursing care and health education for a patient with low back pain."
    ],
    assessment: [
      { type: "mcq", q: "The most common cause of low back pain is:", options: ["Mechanical strain (muscle/ligament)", "Bone tumour", "Tuberculosis", "Heart disease"], answer: 0, rationale: "Most low back pain is mechanical, from muscle/ligament strain and poor posture or lifting." },
      { type: "mcq", q: "The soft jelly-like centre of an intervertebral disc is the:", options: ["Annulus fibrosus", "Nucleus pulposus", "Lamina", "Pedicle"], answer: 1, rationale: "The nucleus pulposus is the gelatinous centre; the annulus fibrosus is the tough outer ring." },
      { type: "mcq", q: "Pain radiating down the leg along the sciatic nerve in lumbar disc prolapse is called:", options: ["Neuralgia", "Claudication", "Referred pain", "Sciatica"], answer: 3, rationale: "Compression of a lumbar nerve root causes sciatica — pain radiating down the leg." },
      { type: "mcq", q: "Pain from a prolapsed disc is typically made worse by:", options: ["Lying still", "Coughing, sneezing and straining", "Sleeping", "Warmth"], answer: 1, rationale: "Coughing, sneezing, bending and straining raise pressure and worsen disc pain." },
      { type: "mcq", q: "Surgical removal of a prolapsed portion of an intervertebral disc is called:", options: ["Laminectomy", "Discectomy", "Arthroplasty", "Osteotomy"], answer: 1, rationale: "Discectomy removes the prolapsed disc material; laminectomy removes part of the vertebral arch." },
      { type: "mcq", q: "Scoliosis is a/an ____ curvature of the spine.", options: ["Forward", "Backward", "Sideways (lateral)", "No"], answer: 2, rationale: "Scoliosis is a lateral (sideways) curvature, often with rotation." },
      { type: "mcq", q: "The commonest type of scoliosis, often appearing in adolescence, is:", options: ["Congenital", "Neuromuscular", "Idiopathic", "Traumatic"], answer: 2, rationale: "Idiopathic scoliosis (cause unknown) is the commonest type and often appears in adolescence." },
      { type: "mcq", q: "The angle measured on X-ray to assess the severity of scoliosis is the:", options: ["Cobb angle", "Bishop angle", "Carrying angle", "Q angle"], answer: 0, rationale: "The Cobb angle measures the degree of spinal curvature in scoliosis." },
      { type: "mcq", q: "The technique used to turn a patient after spinal surgery while keeping the spine straight is:", options: ["Log-rolling", "Fowler's position", "Trendelenburg", "Lithotomy"], answer: 0, rationale: "Log-rolling turns the patient as one unit, maintaining spinal alignment." },
      { type: "mcq", q: "Bladder and bowel disturbance with a large central disc prolapse indicates:", options: ["Normal recovery", "Cauda equina syndrome (an emergency)", "Mild strain", "Good prognosis"], answer: 1, rationale: "Cauda equina syndrome from a central prolapse is a surgical emergency needing urgent decompression." }
      , { type: "fill", q: "Correct lifting technique requires bending the ____ and keeping the back straight.", accept: ["knees", "knee"], rationale: "Bending the knees and keeping the back straight protects the spine during lifting." }
      , { type: "fill", q: "A sideways curvature of the spine is called ____.", accept: ["scoliosis"], rationale: "Scoliosis is the lateral curvature of the spine." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "ort-13-orthopedic-surgery",
    unit: "Unit 3 · Disorders & Surgery",
    title: "Orthopedic Surgeries & Nursing Care (Joint Replacement, Internal Fixation)",
    readMinutes: 18,
    summary: "Common orthopedic operations — internal and external fixation, joint replacement (arthroplasty), arthrodesis and amputation — with the pre-operative and post-operative nursing care of the surgical orthopedic patient.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Common orthopedic surgeries", list: [
        "Open reduction and internal fixation (ORIF) — the fracture is exposed and held with plates, screws, nails, wires or rods.",
        "External fixation — pins through the bone are connected to an outside frame; used for open or comminuted fractures and infection.",
        "Arthroplasty (joint replacement) — a damaged joint is replaced with an artificial one (prosthesis); total hip and total knee replacement are the commonest.",
        "Arthrodesis — surgical fusion (stiffening) of a joint to relieve pain or instability.",
        "Osteotomy — cutting and realigning a bone to correct deformity or redistribute weight.",
        "Amputation — removal of all or part of a limb.",
        "Bone grafting — placing bone to aid healing in non-union or after tumour removal."
      ] },
      { h: "Internal vs external fixation", list: [
        "Internal fixation — implants are placed inside the body (plates, screws, intramedullary nails); gives stable fixation and earlier mobilisation but carries a risk of infection of the implant.",
        "External fixation — the frame is outside the body; allows wound access in open fractures and infection but needs careful pin-site care."
      ] },
      { h: "Joint replacement (arthroplasty)", p: "In total joint replacement the worn joint surfaces are removed and replaced with metal and plastic (or ceramic) components. It is most often done for severe osteoarthritis or rheumatoid arthritis of the hip or knee, to relieve pain and restore movement and function. Careful positioning afterwards is essential to prevent dislocation of the new joint." },
      { h: "Pre-operative nursing care", list: [
        "Explain the operation and expected outcome; obtain informed consent.",
        "Complete pre-operative investigations and optimise general condition (e.g. control diabetes, treat anaemia and infection).",
        "Skin preparation of the operative site and screening for infection.",
        "Teach post-operative exercises, deep breathing, use of mobility aids and what to expect.",
        "Routine pre-operative preparation — fasting, baseline observations, marking the correct site, and prophylactic antibiotics and anticoagulants as prescribed."
      ] },
      { h: "Post-operative nursing care — general", list: [
        "Monitor vital signs, level of consciousness and the wound/drain for bleeding.",
        "Neurovascular checks of the operated limb.",
        "Pain management with prescribed analgesia.",
        "Maintain correct positioning and alignment of the limb.",
        "Wound care with strict asepsis; observe for signs of infection.",
        "Prevent the complications of immobility — DVT prophylaxis (exercises, stockings, anticoagulants), deep breathing, pressure care.",
        "Encourage early, graded mobilisation and exercises as ordered, with physiotherapy.",
        "Adequate fluids, a high-protein diet and care of elimination."
      ] },
      { h: "Special care after total hip replacement", p: "After a total hip replacement the new joint can dislocate if the hip is moved into a wrong position, so the nurse teaches and maintains hip precautions.", list: [
        "Keep the legs apart — use an abduction pillow/wedge between the legs.",
        "Do not bend the hip more than 90 degrees (avoid low chairs and toilets; use a raised seat).",
        "Do not cross the legs or turn the toes inward.",
        "Avoid twisting at the hip; turn the whole body.",
        "Report sudden severe hip pain, shortening or outward rotation of the limb — signs of dislocation."
      ], figure: {
        caption: "Hip precautions after total hip replacement to prevent dislocation.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hip precautions after total hip replacement"><rect x="10" y="10" width="540" height="130" rx="12" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="280" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">Total hip replacement — precautions</text><text x="30" y="62" font-family="sans-serif" font-size="12" fill="#15803D">DO: keep legs apart (abduction pillow), use raised seat, turn whole body</text><text x="30" y="88" font-family="sans-serif" font-size="12" fill="#7C2D12">DON&apos;T: bend hip &gt; 90°, cross legs, turn toes inward, twist at the hip</text><rect x="30" y="104" width="500" height="24" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="280" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Report sudden pain, limb shortening or outward rotation = possible dislocation</text></svg>'
      } },
      { h: "Complications of orthopedic surgery", list: [
        "Infection — wound, implant or pin-site infection.",
        "Bleeding and haematoma.",
        "Deep vein thrombosis and pulmonary embolism.",
        "Dislocation of a replaced joint.",
        "Neurovascular injury and compartment syndrome.",
        "Implant loosening or failure, and delayed wound healing."
      ] },
      { h: "Discharge teaching and rehabilitation", list: [
        "Teach wound care and the signs of infection to report (redness, swelling, discharge, fever).",
        "Reinforce hip/knee precautions and prescribed exercises.",
        "Teach safe use of walking aids and home-safety measures to prevent falls.",
        "Advise on gradual increase in activity, follow-up appointments and continuing physiotherapy.",
        "Encourage good nutrition and continuing anticoagulant therapy if prescribed."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "Name the common orthopedic surgeries and briefly describe each.",
      "Differentiate between internal and external fixation.",
      "Describe the pre-operative nursing preparation of a patient for joint replacement.",
      "Discuss the post-operative nursing care after total hip replacement, including hip precautions.",
      "List the complications of orthopedic surgery and the nurse's role in preventing them."
    ],
    assessment: [
      { type: "mcq", q: "ORIF involves fixing a fracture with:", options: ["An external frame only", "Plates, screws or nails inside the body", "A plaster cast only", "Traction only"], answer: 1, rationale: "Open Reduction and Internal Fixation uses internal implants (plates, screws, nails) to hold the fracture." },
      { type: "mcq", q: "Surgical replacement of a damaged joint with an artificial one is called:", options: ["Arthrodesis", "Osteotomy", "Arthroscopy", "Arthroplasty"], answer: 3, rationale: "Arthroplasty is joint replacement; arthrodesis is joint fusion." },
      { type: "mcq", q: "Surgical fusion (stiffening) of a joint is called:", options: ["Arthroplasty", "Arthrodesis", "Osteotomy", "Discectomy"], answer: 1, rationale: "Arthrodesis is the surgical fusion of a joint to relieve pain or instability." },
      { type: "mcq", q: "External fixation is especially useful for:", options: ["Simple closed fractures", "Open or infected fractures needing wound access", "Minor sprains", "Skin grafts"], answer: 1, rationale: "An external frame allows access to open wounds and is useful in open or infected fractures." },
      { type: "mcq", q: "After total hip replacement, to prevent dislocation the nurse keeps the legs:", options: ["Crossed", "Together and turned in", "Apart with an abduction pillow", "Bent past 90 degrees"], answer: 2, rationale: "Keeping the legs abducted (apart) with a pillow and avoiding adduction prevents hip dislocation." },
      { type: "mcq", q: "Which movement must be avoided after total hip replacement?", options: ["Keeping legs apart", "Bending the hip beyond 90 degrees", "Turning the whole body", "Using a raised toilet seat"], answer: 1, rationale: "Hip flexion beyond 90 degrees and crossing/turning in the legs can dislocate the new joint." },
      { type: "mcq", q: "Sudden severe hip pain with shortening and outward rotation of the leg after hip replacement suggests:", options: ["Normal healing", "Dislocation of the prosthesis", "Good circulation", "Constipation"], answer: 1, rationale: "These are classic signs of dislocation of the replaced hip and must be reported at once." },
      { type: "mcq", q: "An important measure to prevent DVT after orthopedic surgery is:", options: ["Strict bed rest with no movement", "Leg exercises, stockings and prescribed anticoagulants", "Restricting all fluids", "Keeping the legs crossed"], answer: 1, rationale: "Early movement, anti-embolism stockings and anticoagulants reduce the risk of DVT." },
      { type: "mcq", q: "The implant used inside the marrow cavity of a long bone to fix a fracture is a/an:", options: ["External fixator", "Intramedullary nail", "Abduction pillow", "Brace"], answer: 1, rationale: "An intramedullary nail is passed down the medullary canal to stabilise a long-bone fracture." },
      { type: "mcq", q: "A continuing post-operative priority for the operated limb is:", options: ["Hair care", "Neurovascular monitoring", "Diet preference", "Hobbies"], answer: 1, rationale: "Frequent neurovascular checks of the operated limb detect circulatory or nerve compromise early." }
      , { type: "fill", q: "Surgical cutting and realigning of a bone to correct deformity is called ____.", accept: ["osteotomy"], rationale: "An osteotomy cuts and realigns bone to correct deformity or redistribute load." }
      , { type: "fill", q: "After total hip replacement, an ____ pillow is placed between the legs to keep them apart.", accept: ["abduction", "abductor"], rationale: "An abduction pillow keeps the legs apart and prevents adduction that could dislocate the joint." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "ort-14-congenital-metabolic-devices",
    unit: "Unit 3 · Disorders & Surgery",
    title: "Congenital & Metabolic Bone Disorders (CTEV, Rickets, Osteoporosis) & Assistive Devices",
    readMinutes: 18,
    summary: "Common congenital and metabolic bone disorders — clubfoot (CTEV), rickets and osteoporosis — their causes, features and management, together with the common orthopedic assistive and mobility devices and the nurse's role in their use.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Congenital talipes equinovarus (CTEV / clubfoot)", p: "CTEV, or clubfoot, is a common congenital deformity in which the foot is turned downward and inward at birth. The components are remembered by the mnemonic CAVE — Cavus (high midfoot arch), Adductus (forefoot turned in), Varus (heel/hindfoot turned in) and Equinus (foot pointing down). The exact cause is unknown; it may be linked to position in the womb and genetic factors, and it is commoner in boys." },
      { h: "CTEV — management", list: [
        "Treatment begins as early as possible after birth, when the tissues are most pliable.",
        "Serial manipulation and casting (the Ponseti method) gradually corrects the deformity with weekly plaster changes.",
        "A minor tenotomy of the Achilles tendon is often needed to correct the equinus.",
        "After correction, a foot-abduction brace (boots and bar) is worn to prevent relapse.",
        "Surgery is reserved for severe or neglected cases.",
        "Nursing role — cast care and neurovascular checks, teaching parents brace wear and skin care, and emotional support."
      ] },
      { h: "Rickets and osteomalacia", p: "Rickets is softening and weakening of the growing bones in children, and osteomalacia is the same softening in adults, due mainly to deficiency of vitamin D (and calcium/phosphate). Vitamin D is needed to absorb calcium; without it, bone fails to mineralise properly.", list: [
        "Causes — lack of sunlight, poor diet, malabsorption.",
        "Features in children — bow legs or knock knees, swelling of the wrists, a beaded ribcage (rickety rosary), delayed walking and teeth, and bony tenderness.",
        "Management — vitamin D and calcium supplements, adequate sunlight exposure and a balanced diet; correction of any deformity once healed.",
        "Prevention — sunlight, vitamin D-rich foods and supplementation in at-risk groups."
      ] },
      { h: "Osteoporosis", p: "Osteoporosis is a condition in which bone mass and density are reduced and the bone becomes porous and fragile, so that fractures occur easily, often after minor injury. It is common in older people, especially women after the menopause due to fall in oestrogen.", list: [
        "Risk factors — older age, female sex and menopause, low calcium and vitamin D, physical inactivity, smoking, excess alcohol, long-term steroids and a family history.",
        "Features — it is often 'silent' until a fracture occurs (typically of the hip, wrist or spine), loss of height and a stooped (kyphotic) posture from vertebral collapse.",
        "Diagnosis — DEXA scan measuring bone mineral density.",
        "Management — calcium and vitamin D, weight-bearing exercise, bone-protecting drugs (e.g. bisphosphonates), and fall prevention.",
        "Nursing role — health education, fall prevention, nutrition, encouraging exercise and safe handling to avoid fractures."
      ] },
      { h: "Assistive and mobility devices — overview", p: "Orthopedic patients often need devices to support a part, correct deformity or aid walking. The nurse teaches their correct, safe use and checks the skin and fit.", list: [
        "Orthoses — braces, splints, callipers and supports that hold or correct a body part.",
        "Walking aids — walking stick (cane), crutches, walking frame (walker).",
        "Wheelchair — for those unable to walk.",
        "Prosthesis — an artificial limb after amputation."
      ] },
      { h: "Crutches and crutch walking", list: [
        "Measure crutches correctly — the top should rest about 2-3 finger-widths (about 5 cm) below the armpit, with the elbow slightly bent.",
        "Weight is taken on the hands, NOT the armpits, to avoid pressure on the nerves under the arm (crutch palsy).",
        "Teach the correct gait as prescribed (e.g. three-point gait for a non-weight-bearing leg).",
        "Going up stairs — lead with the good (strong) leg; going down — lead with the crutches and the affected leg ('up with the good, down with the bad').",
        "Check rubber tips, fit and the patient's footwear and balance for safety."
      ], figure: {
        caption: "Key crutch-walking safety rules.",
        svg: '<svg viewBox="0 0 560 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crutch walking safety rules"><rect x="10" y="10" width="540" height="120" rx="12" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="280" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">Crutch walking — safety</text><text x="30" y="60" font-family="sans-serif" font-size="12" fill="#7C2D12">• Top of crutch ~5 cm (2-3 fingers) below the armpit</text><text x="30" y="84" font-family="sans-serif" font-size="12" fill="#7C2D12">• Bear weight on the hands, not the armpits (avoid crutch palsy)</text><text x="30" y="108" font-family="sans-serif" font-size="12" fill="#15803D">• Stairs: up with the good leg, down with the bad leg</text></svg>'
      } },
      { h: "Walking stick and walker", list: [
        "A walking stick (cane) is held in the hand opposite the affected leg and advanced with that leg.",
        "A walking frame (walker) gives the most stability — the patient lifts/rolls it forward a little, then steps up to it.",
        "Adjust the height so the elbow is slightly bent and check tips and brakes.",
        "Always assess the patient's balance and the environment (loose rugs, wet floors) to prevent falls."
      ] },
      { h: "Nurse's role with assistive devices", list: [
        "Ensure the correct device and the correct size/fit.",
        "Teach and supervise safe use until the patient is confident.",
        "Inspect the skin for pressure or rubbing from braces, splints or crutches.",
        "Teach care and cleaning of the device and when to seek help.",
        "Promote independence and confidence while ensuring safety."
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      "What is CTEV (clubfoot)? Describe its components and management.",
      "Define rickets. Describe its causes, features and prevention.",
      "What is osteoporosis? Discuss its risk factors and management.",
      "Describe the correct measurement and use of crutches and the nurse's teaching role.",
      "List the common orthopedic assistive devices and the nurse's responsibilities in their use."
    ],
    assessment: [
      { type: "mcq", q: "CTEV (clubfoot) is a/an:", options: ["Acquired adult disorder", "Congenital foot deformity present at birth", "Infection of the foot", "Type of fracture"], answer: 1, rationale: "Congenital talipes equinovarus is a foot deformity present at birth." },
      { type: "mcq", q: "Treatment of clubfoot is best started:", options: ["As early as possible after birth", "At school age", "After puberty", "Only in adulthood"], answer: 0, rationale: "Early treatment, when tissues are pliable, gives the best correction (e.g. Ponseti casting)." },
      { type: "mcq", q: "The serial manipulation and casting method widely used to correct clubfoot is the:", options: ["Bryant's method", "Russell's method", "Thomas method", "Ponseti method"], answer: 3, rationale: "The Ponseti method uses weekly manipulation and casting (often with an Achilles tenotomy)." },
      { type: "mcq", q: "Rickets in children is caused mainly by deficiency of:", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], answer: 2, rationale: "Vitamin D deficiency impairs calcium absorption and bone mineralisation, causing rickets." },
      { type: "mcq", q: "The softening of bones equivalent to rickets but occurring in adults is called:", options: ["Osteomalacia", "Osteoporosis", "Osteomyelitis", "Osteoarthritis"], answer: 0, rationale: "Osteomalacia is the adult form of bone softening from vitamin D deficiency." },
      { type: "mcq", q: "Osteoporosis is characterised by:", options: ["Increased bone density", "Reduced bone mass and fragile bones", "Joint inflammation", "Bone infection"], answer: 1, rationale: "In osteoporosis bone density falls and bones become porous and fracture easily." },
      { type: "mcq", q: "Osteoporosis is especially common in women after the:", options: ["Menarche", "Menopause", "First pregnancy", "Childhood"], answer: 1, rationale: "Falling oestrogen after the menopause accelerates bone loss, increasing osteoporosis risk." },
      { type: "mcq", q: "When using crutches, the patient should bear weight on the:", options: ["Armpits", "Shoulders", "Neck", "Hands"], answer: 3, rationale: "Weight is taken on the hands; pressure on the armpits can cause crutch (radial nerve) palsy." },
      { type: "mcq", q: "When climbing stairs with crutches, the patient should lead with the:", options: ["Affected (bad) leg", "Good (strong) leg", "Crutches first", "Both legs together"], answer: 1, rationale: "'Up with the good, down with the bad' — lead upstairs with the strong leg." },
      { type: "mcq", q: "A walking stick (cane) should be held:", options: ["On the same side as the affected leg", "In the hand opposite the affected leg", "In both hands", "Behind the back"], answer: 1, rationale: "Holding the cane on the opposite side gives better balance and support to the affected leg." }
      , { type: "fill", q: "The bone-thinning condition in which bones become porous and fracture easily is called ____.", accept: ["osteoporosis"], rationale: "Osteoporosis is reduced bone mass and density leading to fragile bones." }
      , { type: "fill", q: "Nerve injury under the arm from bearing weight on the armpits while using crutches is called crutch ____.", accept: ["palsy", "paralysis"], rationale: "Crutch palsy is nerve damage caused by pressure in the axilla from incorrect crutch use." }
    ]
  }
];





