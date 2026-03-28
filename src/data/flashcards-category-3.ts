export interface FlashcardData {
  id: string
  front: string
  back: string
  category: string
  subcategory: string
  tags: string[]
}

export const category3Flashcards: FlashcardData[] = [
  // ─── Named Treatments: Evidence, Population, Features ──────────────────────

  {
    id: 'c3-fc001',
    front: 'LSVT LOUD — What is the treatment protocol, target population, and primary treatment focus?',
    back: 'Protocol: 16 sessions over 4 weeks (4x/week, 1 hour each). Population: Originally developed for Parkinson disease; also studied in other neurological conditions. Focus: Single target — increase vocal loudness ("Think LOUD!"). Relies on high-effort practice, intensive scheduling, and self-calibration of loudness. Strongest evidence base for hypophonia in PD. Key principle: recalibrate the patient\'s perception of their own loudness.',
    category: 'III — Treatment',
    subcategory: 'Voice Treatment — Named Programs',
    tags: ['LSVT LOUD', 'Parkinson disease', 'voice treatment', 'hypophonia'],
  },
  {
    id: 'c3-fc002',
    front: 'Melodic Intonation Therapy (MIT) — Candidate criteria, mechanism, and protocol structure',
    back: 'Candidates: Severe nonfluent aphasia (e.g., Broca), very limited propositional speech, relatively preserved auditory comprehension, poor repetition, good motivation. Mechanism: Leverages right hemisphere processing of melody and rhythm to facilitate verbal output through intoning (singing-like speech). Protocol: Three levels of increasing difficulty — (1) humming melody with hand-tapping, (2) unison intoning with clinician, (3) fading to independent production. Phrases progress from high-frequency functional utterances to longer, novel sentences.',
    category: 'III — Treatment',
    subcategory: 'Aphasia Treatment — Named Programs',
    tags: ['MIT', 'melodic intonation therapy', 'nonfluent aphasia', 'right hemisphere'],
  },
  {
    id: 'c3-fc003',
    front: 'VNeST (Verb Network Strengthening Treatment) — How does it work and what does the evidence show?',
    back: 'Procedure: Patient generates agent-verb-patient thematic role combinations for target verbs (e.g., "carpenter-measure-board"). Then answers wh-questions (Where? Why? When?). Mechanism: Activates the verb\'s semantic network through spreading activation of thematic roles. Evidence: Demonstrated generalization to untrained words and improved discourse in chronic aphasia. Sessions typically 2x/week for 6 weeks. Targets lexical retrieval through verb-centered semantic activation rather than phonological cueing.',
    category: 'III — Treatment',
    subcategory: 'Aphasia Treatment — Named Programs',
    tags: ['VNeST', 'aphasia', 'verb network', 'word retrieval'],
  },
  {
    id: 'c3-fc004',
    front: 'PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets) — Describe the approach and population',
    back: 'Approach: Tactile-kinesthetic treatment where the clinician uses touch cues on the patient\'s face, jaw, and lips to guide articulatory movements. Provides spatial (where to move) and timing (when and how fast) information externally. Population: Primarily childhood apraxia of speech (CAS); also used with dysarthria and other motor speech disorders. Key feature: The clinician physically shapes the movement, bypassing the motor planning deficit. Requires PROMPT certification for full implementation.',
    category: 'III — Treatment',
    subcategory: 'Speech Sound Treatment — Named Programs',
    tags: ['PROMPT', 'CAS', 'tactile-kinesthetic', 'motor speech'],
  },
  {
    id: 'c3-fc005',
    front: 'Lidcombe Program — Protocol, population, and mechanism',
    back: 'Population: Preschool-age children who stutter (typically under 6 years). Protocol: Parent-delivered behavioral treatment in two stages — Stage 1: Daily structured practice + natural conversation with verbal contingencies. Parents praise stutter-free speech (5:1 ratio to corrections) and occasionally acknowledge/request self-correction of stuttering. Stage 2: Maintenance with gradually reduced contact. Mechanism: Operant conditioning — positive reinforcement for fluency, response-contingent stimulation for stuttering. Evidence: Strong RCT evidence for preschool stuttering.',
    category: 'III — Treatment',
    subcategory: 'Fluency Treatment — Named Programs',
    tags: ['Lidcombe Program', 'stuttering', 'preschool', 'parent-delivered'],
  },
  {
    id: 'c3-fc006',
    front: 'CART (Computer-Assisted Reading Treatment) — Describe the approach for aphasia',
    back: 'Population: Adults with acquired alexia secondary to aphasia. Approach: Computerized treatment targeting reading comprehension using multimodal cueing (auditory, visual, orthographic). Patient reads text on screen with hierarchical supports that are systematically faded. Incorporates repeated practice with the same texts to build fluency. Key feature: Self-directed practice component allows high-intensity training beyond therapy sessions. Evidence supports improvement in reading rate and comprehension.',
    category: 'III — Treatment',
    subcategory: 'Aphasia Treatment — Named Programs',
    tags: ['CART', 'aphasia', 'reading', 'computer-assisted', 'alexia'],
  },
  {
    id: 'c3-fc007',
    front: 'Hanen Programs — Name the three main programs, their populations, and core philosophy',
    back: '"It Takes Two to Talk": Parents of children with language delays. Teaches responsive interaction (OWL: Observe, Wait, Listen). "More Than Words": Parents of children with ASD. Focuses on building social communication in daily routines. "Target Word": Late-talking toddlers. Intensive vocabulary-focused parent coaching. Core philosophy across all: Parent-mediated, naturalistic interaction. Follow the child\'s lead. Language learning happens best in responsive, child-centered interactions — not adult-directed drill.',
    category: 'III — Treatment',
    subcategory: 'Language Treatment — Named Programs',
    tags: ['Hanen', 'parent-mediated', 'language delay', 'ASD', 'early intervention'],
  },
  {
    id: 'c3-fc008',
    front: 'PECS (Picture Exchange Communication System) — List and describe all 6 phases',
    back: 'Phase I: Physical Exchange — child learns to pick up a single picture and hand it to a partner to get a desired item. Phase II: Distance and Persistence — child travels to communication board, removes picture, and seeks out a partner. Phase III: Picture Discrimination — child selects from multiple pictures. Phase IV: Sentence Structure — child builds "I want" + picture on a sentence strip. Phase V: Responsive Requesting — child responds to "What do you want?" Phase VI: Commenting — child responds to "What do you see/hear?" and spontaneously comments.',
    category: 'III — Treatment',
    subcategory: 'AAC Implementation — PECS',
    tags: ['PECS', 'AAC', 'phases', 'communication exchange'],
  },
  {
    id: 'c3-fc009',
    front: 'Semantic Feature Analysis (SFA) — Procedure, target, and evidence for generalization',
    back: 'Target: Word retrieval deficits in aphasia (especially anomic aphasia). Procedure: When patient cannot name a target item, the clinician prompts semantic features across categories: group/category, physical properties, function/use, location, association. Mechanism: Spreading activation through the semantic network strengthens retrieval pathways. Evidence: Demonstrated generalization to untrained items — unique among many naming treatments. The theory is that activating multiple features raises the overall activation of the target and semantically related words above threshold.',
    category: 'III — Treatment',
    subcategory: 'Aphasia Treatment — Named Programs',
    tags: ['SFA', 'semantic feature analysis', 'anomia', 'word retrieval'],
  },
  {
    id: 'c3-fc010',
    front: 'Script Training for Aphasia — Procedure, evidence, and target population',
    back: 'Population: Adults with chronic aphasia who want to participate in specific life activities. Procedure: Develop personalized scripts for functional situations (ordering food, calling family, introducing self). Practice repeatedly until script becomes automatic. Progress from supported to independent production. Evidence: Cherney et al. demonstrated that practiced scripts can become automatic and functional, enabling participation in real-life situations. Key: Scripts should be personally relevant, motivating, and target the patient\'s Life Participation goals.',
    category: 'III — Treatment',
    subcategory: 'Aphasia Treatment — Named Programs',
    tags: ['script training', 'aphasia', 'functional communication', 'automaticity'],
  },

  // ─── Dysphagia Exercises ───────────────────────────────────────────────────

  {
    id: 'c3-fc011',
    front: 'Shaker Exercise (Head-Lift) — Target, protocol, and contraindications',
    back: 'Target: Strengthen suprahyoid muscles to improve hyolaryngeal excursion and UES opening. Protocol: Supine position. Sustained hold: lift head to see toes, hold 60 seconds, rest 60 seconds, x3. Repetitions: 30 consecutive head lifts without sustained hold. Frequency: 3x/day for 6 weeks. Contraindications: Cervical spine injury/surgery, severe neck pain, inability to lie flat. Alternative: Chin tuck against resistance (CTAR) for patients who cannot perform the supine version.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Rehabilitative Exercises',
    tags: ['Shaker exercise', 'head-lift', 'hyolaryngeal excursion', 'UES'],
  },
  {
    id: 'c3-fc012',
    front: 'Mendelsohn Maneuver — Target, procedure, and indication',
    back: 'Target: Prolong hyolaryngeal elevation at peak of swallow to increase UES opening duration and extent. Procedure: Patient swallows and, at the peak of the swallow (when the "Adam\'s apple" is at its highest), voluntarily holds the larynx in the elevated position for several seconds before releasing. Can be taught with sEMG biofeedback. Indication: Reduced hyolaryngeal excursion, incomplete UES opening, residue in the pyriform sinuses. Can be used as both an exercise and a compensatory maneuver during meals.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Rehabilitative Exercises',
    tags: ['Mendelsohn maneuver', 'UES opening', 'hyolaryngeal excursion'],
  },
  {
    id: 'c3-fc013',
    front: 'EMST (Expiratory Muscle Strength Training) — Device, protocol, and multisystem benefits',
    back: 'Device: Calibrated pressure-threshold device (e.g., EMST150). Patient exhales forcefully into the device; air only passes when expiratory pressure exceeds the calibrated threshold. Protocol: 5 sets of 5 breaths, 5 days/week, 4-8 weeks. Threshold set at 75% of maximum expiratory pressure (MEP). Benefits: (1) Increased MEP, (2) improved cough effectiveness for airway protection, (3) increased hyolaryngeal excursion during swallowing, (4) improved subglottic pressure for voice. Studied in Parkinson disease, ALS, stroke, healthy aging.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Rehabilitative Exercises',
    tags: ['EMST', 'expiratory muscle strength', 'cough', 'swallowing'],
  },
  {
    id: 'c3-fc014',
    front: 'Masako Maneuver (Tongue-Hold Swallow) — Target, procedure, and important caution',
    back: 'Target: Strengthen posterior pharyngeal wall movement (compensatory bulging) toward the tongue base. Procedure: Patient holds the tongue tip between the front teeth while swallowing. This anchors the tongue anteriorly, forcing the posterior pharyngeal wall to work harder to contact the retracted tongue base. IMPORTANT CAUTION: This is an exercise ONLY — never use during actual meals. Because the tongue is held forward, oral control and bolus propulsion are impaired, creating aspiration risk with real food/liquid.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Rehabilitative Exercises',
    tags: ['Masako maneuver', 'tongue-hold swallow', 'pharyngeal wall'],
  },
  {
    id: 'c3-fc015',
    front: 'Effortful Swallow — Target, procedure, and clinical indication',
    back: 'Target: Increase tongue base retraction and overall pharyngeal pressure during the swallow. Procedure: Patient swallows with maximum effort, "squeezing all the muscles as hard as possible" during the swallow. Indication: Vallecular residue due to reduced tongue base-to-pharyngeal wall contact. Can be used as an exercise (dry swallows) or compensatory strategy (during meals). Mechanism: The increased muscular effort improves bolus clearance through the pharynx, particularly from the valleculae.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Rehabilitative Exercises',
    tags: ['effortful swallow', 'tongue base retraction', 'pharyngeal clearance'],
  },
  {
    id: 'c3-fc016',
    front: 'Supraglottic Swallow vs. Super-Supraglottic Swallow — Compare the two',
    back: 'Supraglottic Swallow: (1) Inhale, (2) hold breath (closes true vocal folds), (3) swallow while holding breath, (4) cough, (5) swallow again. Protects airway at the level of the true vocal folds. Indicated for delayed swallow onset or reduced laryngeal closure. Super-Supraglottic Swallow: Same steps BUT with effortful breath-hold (bearing down/Valsalva). The effort closes both the true and false vocal folds and tilts the arytenoids forward to contact the epiglottic base. Provides airway protection at the vestibular level. Indicated for reduced airway closure at the laryngeal entrance.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Compensatory Maneuvers',
    tags: ['supraglottic swallow', 'super-supraglottic swallow', 'airway protection'],
  },

  // ─── IDDSI Framework ──────────────────────────────────────────────────────

  {
    id: 'c3-fc017',
    front: 'IDDSI Framework — List all 8 levels (0-7) with names for drinks and foods',
    back: 'DRINKS: Level 0 — Thin. Level 1 — Slightly Thick. Level 2 — Mildly Thick. Level 3 — Moderately Thick / Liquidised. Level 4 — Extremely Thick / Pureed. FOODS: Level 3 — Liquidised. Level 4 — Pureed. Level 5 — Minced & Moist (particles ≤4mm). Level 6 — Soft & Bite-Sized (pieces ≤15mm). Level 7 — Easy to Chew / Regular. Note: Levels 3 and 4 overlap between drinks and foods (triangle shape). The framework replaced the National Dysphagia Diet (NDD) as the international standard.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — IDDSI Framework',
    tags: ['IDDSI', 'diet modification', 'food texture', 'liquid consistency'],
  },
  {
    id: 'c3-fc018',
    front: 'IDDSI Level 0 (Thin) — Testing method and characteristics',
    back: 'Characteristics: Flows like water. Fast flow rate. Examples: water, tea, coffee, clear juices, milk, broth. Testing: IDDSI Syringe Flow Test — 10 mL syringe, flow for 10 seconds. Level 0 liquids leave ≤1 mL remaining in the syringe after 10 seconds. This is the standard liquid consistency that most people drink. Modification from Level 0 is only recommended when instrumental assessment demonstrates a safety concern with thin liquids.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — IDDSI Framework',
    tags: ['IDDSI', 'thin liquids', 'Level 0', 'syringe test'],
  },
  {
    id: 'c3-fc019',
    front: 'IDDSI Level 4 (Pureed) — Testing method and characteristics',
    back: 'Characteristics: No lumps. Smooth, cohesive. Not sticky. Does not require chewing. Holds its shape on a spoon. Falls off when spoon is tilted. Can be piped, layered, molded. Cannot be poured. Cannot be sipped through a straw. Testing: Fork drip test — sits in a mound above the fork prongs; does not drip through. Spoon tilt test — falls off the spoon in a single, cohesive spoonful. Example: smooth yogurt, pureed vegetables, smooth pudding.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — IDDSI Framework',
    tags: ['IDDSI', 'pureed', 'Level 4', 'fork drip test'],
  },
  {
    id: 'c3-fc020',
    front: 'IDDSI Level 7 (Regular / Easy to Chew) — Two sub-levels and characteristics',
    back: 'Level 7 — Regular: Normal, everyday food. Any texture. No restrictions. Includes hard, chewy, fibrous, stringy, crunchy, dry, mixed consistencies. Level 7 — Easy to Chew: Soft and tender but NOT pureed or minced. Can be broken apart with the side of a fork. Must be chewed before swallowing. No hard, tough, chewy, fibrous, stringy, crunchy, or crumbly textures. No foods with seeds, pips, or bones. This sub-level bridges between modified diets and full regular diet.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — IDDSI Framework',
    tags: ['IDDSI', 'regular', 'easy to chew', 'Level 7'],
  },

  // ─── Compensatory vs. Rehabilitative Strategies ───────────────────────────

  {
    id: 'c3-fc021',
    front: 'Compensatory vs. Rehabilitative Strategies for Dysphagia — Define and compare',
    back: 'COMPENSATORY: Do NOT change the underlying swallowing physiology. Applied during meals to improve safety. Effects are immediate but temporary. Examples: chin tuck, head rotation, head tilt, diet modification, bolus size/pace modifications, multiple swallows per bolus. REHABILITATIVE: Aim to change the underlying swallowing physiology through strengthening, range of motion, or neural reorganization. Effects develop over time. Examples: Shaker exercise, EMST, lingual resistance training, Mendelsohn maneuver (when used as exercise), McNeill Dysphagia Therapy Program. Best practice: Combine both approaches.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Treatment Approaches',
    tags: ['compensatory', 'rehabilitative', 'dysphagia', 'treatment approaches'],
  },
  {
    id: 'c3-fc022',
    front: 'Postural Compensatory Strategies for Dysphagia — List the 4 main postures and their indications',
    back: '1. Chin Tuck: Widens valleculae, narrows airway entrance, pushes tongue base posteriorly. For premature spillage, delayed swallow onset. 2. Head Rotation (turn to weak side): Closes pyriform sinus on the turned side, directs bolus to stronger side. For unilateral pharyngeal weakness. 3. Head Tilt (tilt to strong side): Uses gravity to direct bolus toward stronger side. For unilateral oral weakness. 4. Head Extension (chin up): Uses gravity to move bolus from oral cavity to pharynx. For reduced posterior tongue propulsion (use ONLY with intact airway protection).',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Compensatory Strategies',
    tags: ['postural strategies', 'chin tuck', 'head rotation', 'head tilt', 'dysphagia'],
  },

  // ─── Evidence Hierarchy ────────────────────────────────────────────────────

  {
    id: 'c3-fc023',
    front: 'Evidence Hierarchy — List the 5 levels from highest to lowest',
    back: 'Level I: Systematic reviews and meta-analyses of multiple high-quality RCTs. Level II: Well-designed randomized controlled trials (RCTs). Level III: Controlled trials without randomization (quasi-experimental); well-designed cohort or case-control studies. Level IV: Case series, pre-post studies, single-subject designs. Level V: Expert opinion, consensus panels, case reports, clinical experience. Remember: EBP integrates best evidence (hierarchy) + clinical expertise + patient values/preferences. Higher-level evidence does not automatically override clinical judgment or patient preference.',
    category: 'III — Treatment',
    subcategory: 'Evidence-Based Practice',
    tags: ['evidence hierarchy', 'EBP', 'systematic review', 'RCT'],
  },
  {
    id: 'c3-fc024',
    front: 'Three Pillars of Evidence-Based Practice (EBP) — What are they and how do they interact?',
    back: '1. Best Available Research Evidence: External scientific research ranked by the evidence hierarchy. 2. Clinical Expertise: The clinician\'s accumulated knowledge, skills, and professional judgment from experience. 3. Patient/Client Values and Preferences: Individual\'s unique concerns, expectations, cultural/linguistic background, and priorities. Integration: No single pillar overrides the others. If strong evidence supports Treatment A but the patient strongly prefers Treatment B (with moderate evidence), the clinician uses clinical expertise to discuss options and reach a shared decision. EBP is a framework for decision-making, not a mandate to follow the highest-level study.',
    category: 'III — Treatment',
    subcategory: 'Evidence-Based Practice',
    tags: ['EBP', 'clinical decision-making', 'patient preferences', 'clinical expertise'],
  },

  // ─── SMART Goal Examples ───────────────────────────────────────────────────

  {
    id: 'c3-fc025',
    front: 'SMART Goals — Define each letter with examples for SLP practice',
    back: 'S — Specific: Clearly identify the behavior (e.g., "produce /s/ in initial position of words" not "improve articulation"). M — Measurable: Include a criterion (e.g., "80% accuracy," "4 out of 5 trials"). A — Achievable: Realistic given the client\'s current level and potential (e.g., don\'t target 100% if baseline is 20%). R — Relevant: Meaningful to the client\'s life (e.g., ordering at a restaurant, classroom participation). T — Time-bound: Include a time frame or mastery criterion (e.g., "within 6 months," "across 3 consecutive sessions"). Example: "Given a picture description task, the patient will produce target words using SFA cueing with 70% accuracy across 2 consecutive sessions within 8 weeks."',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — SMART Goals',
    tags: ['SMART goals', 'goal writing', 'treatment planning'],
  },
  {
    id: 'c3-fc026',
    front: 'Long-Term Goal vs. Short-Term Goal vs. Benchmark — Distinguish these in SLP treatment planning',
    back: 'Long-Term Goal (LTG): The functional outcome expected by the end of the treatment period. Written at the participation/activity level. Example: "The patient will communicate basic wants and needs using verbal speech or AAC in daily interactions." Short-Term Goal (STG): Stepping stones toward the LTG. More specific behaviors with measurable criteria. Example: "The patient will name common objects with phonemic cuing with 80% accuracy in structured tasks." Benchmark: Intermediate performance levels that track progress toward the STG. Example: "By Week 4: 50% accuracy; By Week 8: 70% accuracy." STGs should clearly build toward the LTG in a logical hierarchy.',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — Goal Hierarchy',
    tags: ['goal hierarchy', 'long-term goal', 'short-term goal', 'benchmark'],
  },

  // ─── AAC Decision Frameworks ──────────────────────────────────────────────

  {
    id: 'c3-fc027',
    front: 'AAC Feature Matching — What is it and what factors are considered?',
    back: 'Feature matching is the process of matching AAC system features to the user\'s abilities, needs, and environments. Key factors: Motor: Access method (direct selection vs. scanning; hand, eye-gaze, switch). Vision: Display size, symbol type (photos, line drawings, text), contrast. Cognition: Number of symbols, organization (grid, visual scene, hybrid), navigation depth. Language: Core vs. fringe vocabulary balance, symbol system (PCS, SymbolStix, Minspeak). Environment: Portability, durability, noise level, mounting. Social: Communication partners, cultural/linguistic needs. Growth: System must support increasing complexity as skills develop. No single AAC system is universally best — it must be matched to the individual.',
    category: 'III — Treatment',
    subcategory: 'AAC Implementation — Feature Matching',
    tags: ['AAC', 'feature matching', 'access method', 'symbol selection'],
  },
  {
    id: 'c3-fc028',
    front: 'Core Vocabulary vs. Fringe Vocabulary in AAC — Define and explain clinical implications',
    back: 'Core vocabulary: A small set of high-frequency words (approximately 200-400 words) that account for ~80% of daily communication. Mostly function words and common verbs (I, want, go, more, that, not, help, put, like). Consistent across age, gender, and context. Fringe vocabulary: Content-specific words unique to individuals, topics, or contexts (pizza, recess, Grandma, dinosaur). Changes frequently. Clinical implication: AAC systems should prioritize core vocabulary access on the main display for generative language, with fringe vocabulary organized in topic-based pages. Core vocabulary enables novel sentence generation; fringe vocabulary alone limits communication to pre-programmed messages.',
    category: 'III — Treatment',
    subcategory: 'AAC Implementation — Vocabulary Selection',
    tags: ['AAC', 'core vocabulary', 'fringe vocabulary', 'vocabulary organization'],
  },
  {
    id: 'c3-fc029',
    front: 'AAC Myths vs. Facts — List the key myths that affect clinical decision-making',
    back: 'MYTH: AAC will prevent speech development. FACT: Research consistently shows AAC does NOT inhibit speech and often facilitates it. MYTH: A child must demonstrate cognitive prerequisites before receiving AAC. FACT: There are no cognitive prerequisites for AAC — communication is a right, not a privilege. MYTH: AAC should be the "last resort" after speech therapy fails. FACT: AAC should be introduced early, alongside speech therapy. MYTH: Only nonverbal individuals need AAC. FACT: AAC supplements speech and can be used by anyone along the communication continuum. MYTH: The AAC assessment must find "the one" perfect system. FACT: AAC needs change over time; systems should be regularly reassessed and adjusted.',
    category: 'III — Treatment',
    subcategory: 'AAC Implementation — Myths and Evidence',
    tags: ['AAC', 'myths', 'evidence-based practice', 'clinical decision-making'],
  },

  // ─── Voice Therapy Approaches ──────────────────────────────────────────────

  {
    id: 'c3-fc030',
    front: 'Resonant Voice Therapy — Target, mechanism, and populations',
    back: 'Target: Achieve maximum vocal output with minimal vocal fold impact stress ("the most voice for the least effort"). Mechanism: Uses semi-occluded vocal tract exercises (humming, lip trills, straw phonation, nasal consonants) to increase oral vibratory sensations while maintaining easy phonation. The semi-occlusion increases supraglottic impedance, optimizing vocal fold vibration patterns. Populations: Muscle tension dysphonia, vocal nodules, vocal fatigue, presbyphonia. Key figure: Katherine Verdolini (Lessac-Madsen Resonant Voice Therapy). Teaches patients to find and maintain the "resonant" quality — a voice produced with anterior oral vibration and easy effort.',
    category: 'III — Treatment',
    subcategory: 'Voice Treatment — Approaches',
    tags: ['resonant voice therapy', 'semi-occluded vocal tract', 'vocal efficiency'],
  },
  {
    id: 'c3-fc031',
    front: 'Vocal Function Exercises (VFE) — What are the 4 exercises and their purpose?',
    back: 'Purpose: Strengthen and coordinate the laryngeal musculature (vocal "physical therapy"). Four exercises performed 2x each, 2x daily: (1) Warm-up: Sustain /i/ on a musical note as long as possible with good quality. (2) Stretching: Glide from lowest to highest note on "knoll" smoothly. (3) Contracting: Glide from highest to lowest note on "knoll" smoothly. (4) Adduction power: Sustain musical notes on "knoll" as long as possible (C-D-E-F for women, one octave lower for men). Goal: Maximum phonation time equals the patient\'s target based on vital capacity. Developed by Joseph Stemple. Evidence: Effective for vocal fatigue, presbyphonia, and as a general voice conditioning program.',
    category: 'III — Treatment',
    subcategory: 'Voice Treatment — Approaches',
    tags: ['VFE', 'vocal function exercises', 'Stemple', 'voice conditioning'],
  },
  {
    id: 'c3-fc032',
    front: 'Alaryngeal Speech Options — Compare electrolarynx, esophageal speech, and TEP',
    back: 'Electrolarynx: External device held against neck/cheek. Fastest to learn. Mechanical sound quality. Good for immediate post-surgical communication. Esophageal speech: Air injection/inhalation into esophagus; PE segment vibrates. No device needed (hands-free). Most difficult to learn (months of practice). Lower success rate. Quieter. TEP (Tracheoesophageal Puncture): Surgical puncture between trachea and esophagus with one-way voice prosthesis. Redirects pulmonary air to vibrate PE segment. Most natural-sounding. Requires stoma occlusion (hands or HME valve). Requires prosthesis maintenance. Highest satisfaction ratings. Often introduced: electrolarynx first for immediate communication, then TEP as primary long-term voice.',
    category: 'III — Treatment',
    subcategory: 'Voice Treatment — Alaryngeal Speech',
    tags: ['alaryngeal speech', 'electrolarynx', 'esophageal speech', 'TEP'],
  },

  // ─── Fluency Treatment ────────────────────────────────────────────────────

  {
    id: 'c3-fc033',
    front: 'Fluency Shaping vs. Stuttering Modification — Compare the two major fluency approaches',
    back: 'FLUENCY SHAPING: Goal is fluent speech. Techniques: easy onset, light articulatory contacts, continuous phonation, reduced rate, smooth transitions. Focus on motor speech production. Minimal focus on feelings/attitudes. Programs: Camperdown, Precision Fluency Shaping Program. STUTTERING MODIFICATION: Goal is easier stuttering, not perfect fluency. Techniques: voluntary stuttering, pullouts (modifying stuttering moments), cancellations (pausing and retrying). Focus on reducing fear, avoidance, and tension. Addresses affective/cognitive components. Associated with Charles Van Riper. INTEGRATED APPROACH: Most modern clinicians combine both — fluency techniques + attitudinal/emotional work.',
    category: 'III — Treatment',
    subcategory: 'Fluency Treatment — Approaches',
    tags: ['fluency shaping', 'stuttering modification', 'Van Riper', 'integrated approach'],
  },
  {
    id: 'c3-fc034',
    front: 'Stuttering Treatment Across the Lifespan — What approach is most appropriate at each age?',
    back: 'Preschool (2-5): Lidcombe Program (parent-delivered operant), Palin PCI (parent-child interaction), indirect approaches (environmental modification). High natural recovery potential. Parental involvement is critical. School-age (6-12): Integrated approaches — fluency management techniques + desensitization + social-emotional support. Self-monitoring skills. Classroom accommodations. Adolescent (13-17): Strong focus on attitudes/avoidance, self-advocacy, acceptance alongside fluency management. Peer support critical. Self-monitoring and generalization emphasis. Adult (18+): Camperdown Program, stuttering modification, CBT for stuttering-related anxiety. Self-help/support groups (NSA, Friends). Focus on communication confidence and life participation.',
    category: 'III — Treatment',
    subcategory: 'Fluency Treatment — Lifespan Approaches',
    tags: ['stuttering', 'lifespan', 'treatment selection', 'age-appropriate'],
  },

  // ─── Cognitive-Communication Treatment ────────────────────────────────────

  {
    id: 'c3-fc035',
    front: 'Attention Process Training (APT) — Describe the hierarchy and clinical application',
    back: 'Developed by Sohlberg & Mateer for attention deficits following TBI. Hierarchy: (1) Focused attention: respond to a single stimulus. (2) Sustained attention: maintain response over time. (3) Selective attention: respond to target while ignoring distractors. (4) Alternating attention: shift between two tasks with different demands. (5) Divided attention: respond to two tasks simultaneously. Clinical application: Start training at the highest level the patient can perform with 80% success. Systematically increase difficulty. Use functional tasks (not just computer drills). Pair with metacognitive strategies (self-monitoring, error detection). Evidence supports direct attention training for TBI and stroke.',
    category: 'III — Treatment',
    subcategory: 'Cognitive-Communication Treatment',
    tags: ['APT', 'attention training', 'TBI', 'Sohlberg and Mateer'],
  },
  {
    id: 'c3-fc036',
    front: 'Rancho Los Amigos Levels and Treatment Focus — Summarize levels I-VIII with appropriate SLP intervention',
    back: 'I (No Response): Sensory stimulation — varied modalities to elicit responses. II (Generalized Response): Continued multisensory stimulation. Document any consistent responses. III (Localized Response): Structured sensory input. Establish yes/no responses. IV (Confused-Agitated): Reduce stimulation. Short, structured sessions. Simple commands. Caregiver training. V (Confused-Inappropriate): External structure. Visual schedules. Memory aids with cueing. Familiar routine practice. VI (Confused-Appropriate): Goal-directed tasks. Memory notebook training. Simple problem-solving. Supervised community tasks. VII (Automatic-Appropriate): Higher-level cognitive-linguistic tasks. Self-monitoring. Vocational/academic reintegration planning. VIII (Purposeful-Appropriate): Advanced executive function. Social communication refinement. Full community/vocational reintegration.',
    category: 'III — Treatment',
    subcategory: 'Cognitive-Communication Treatment — TBI Recovery',
    tags: ['Rancho Los Amigos', 'TBI', 'cognitive recovery', 'treatment levels'],
  },

  // ─── Discharge Planning ────────────────────────────────────────────────────

  {
    id: 'c3-fc037',
    front: 'Discharge Criteria in Speech-Language Pathology — What factors should be considered?',
    back: 'Consider: (1) Goal attainment: Have treatment goals been met or has meaningful progress plateaued? (2) Functional performance: Can the patient/client perform adequately in their real-world environment? (3) Generalization: Have skills transferred beyond the therapy setting? (4) Standardized measures: Are scores within functional limits for age/context? (5) Patient/family perspective: What are their feelings about readiness for discharge? (6) Maintenance: Can gains be maintained without direct therapy? (7) Educational impact (school): Is there still adverse educational impact? (8) Prognosis for further improvement: Is continued direct therapy likely to produce meaningful additional gains? Discharge is not abandonment — provide a home program, follow-up plan, and re-referral criteria.',
    category: 'III — Treatment',
    subcategory: 'Discharge Planning',
    tags: ['discharge criteria', 'treatment outcomes', 'generalization', 'maintenance'],
  },
  {
    id: 'c3-fc038',
    front: 'Prognosis — Key factors affecting recovery from stroke-related aphasia',
    back: 'STRONGEST PREDICTORS: (1) Lesion size (larger = poorer prognosis). (2) Lesion location (damage to multiple language areas = worse). (3) Initial aphasia severity (more severe = less complete recovery). MODERATE PREDICTORS: (4) Aphasia type (global worst, anomic best prognosis). (5) Age (younger generally better, but age alone is a weak predictor). (6) Time post-onset (most spontaneous recovery in first 3-6 months, but improvement possible years later with therapy). ADDITIONAL FACTORS: Bilateral damage, pre-morbid education/literacy, motivation/psychosocial factors, comorbidities (depression significantly impacts recovery), access to intensive therapy. NOTE: Prognosis is probabilistic — individual outcomes vary. Never deny treatment based on prognosis alone.',
    category: 'III — Treatment',
    subcategory: 'Prognosis — Aphasia Recovery',
    tags: ['prognosis', 'aphasia', 'stroke recovery', 'predictive factors'],
  },

  // ─── Additional Treatment Approaches ──────────────────────────────────────

  {
    id: 'c3-fc039',
    front: 'CIAT/ILAT (Constraint-Induced Aphasia Therapy / Intensive Language-Action Therapy) — Principles and protocol',
    back: 'Principles: (1) Constraint: Restrict compensatory modalities (gesture, writing, drawing) — force verbal speech. (2) Massed practice: 3+ hours per day of intensive treatment. (3) Behavioral relevance: Use communicative language games (card-requesting activities) where verbal output has real consequences. Protocol: Group format (2-3 patients). Barrier tasks with cards — patient must verbally request specific cards from partners. Complexity systematically increased. Typically 2-4 weeks of daily intensive treatment. Modeled after constraint-induced movement therapy (CIMT) from physical rehabilitation. Evidence: Multiple studies showing improvements in chronic aphasia.',
    category: 'III — Treatment',
    subcategory: 'Aphasia Treatment — Named Programs',
    tags: ['CIAT', 'ILAT', 'constraint-induced', 'intensive aphasia treatment'],
  },
  {
    id: 'c3-fc040',
    front: 'McNeill Dysphagia Therapy Program (MDTP) — Describe this systematic rehabilitative approach',
    back: 'Approach: Systematic, exercise-based swallowing rehabilitation that uses real food and liquid swallows as the primary exercise modality (rather than non-swallowing exercises). Principle: The best exercise for swallowing is swallowing itself — uses actual swallows at systematically increasing levels of difficulty. Protocol: Hierarchical progression of bolus types (easiest to most challenging). Adjunctive swallowing maneuvers used as needed. Progressive difficulty based on patient performance. Frequency: Typically 3-5x/week. Key distinction: Unlike exercise-only approaches (Shaker, EMST), MDTP uses real swallows as the primary rehabilitative tool, maintaining ecological validity.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Rehabilitative Programs',
    tags: ['MDTP', 'dysphagia rehabilitation', 'exercise-based', 'swallowing therapy'],
  },
  {
    id: 'c3-fc041',
    front: 'Treatment Intensity — Define dose, dose frequency, dose form, and total intervention duration',
    back: 'Dose: Number of properly administered teaching episodes per session (e.g., 100 naming trials per session). Dose form: The activity within which the teaching episodes are delivered (e.g., naming pictures, conversation, barrier game). Dose frequency: How often sessions occur (e.g., 3x/week, daily). Session duration: Length of each session (e.g., 45 minutes). Total intervention duration: The entire period of treatment (e.g., 12 weeks). Cumulative intervention intensity: Dose x dose frequency x total intervention duration = total teaching episodes. Clinical implication: Research increasingly shows that intensity matters — more intensive treatment often produces better outcomes (e.g., CIAT, LSVT LOUD, Lidcombe). But intensity must be balanced with patient factors (fatigue, access, compliance).',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — Intensity',
    tags: ['treatment intensity', 'dose', 'dose frequency', 'session planning'],
  },
  {
    id: 'c3-fc042',
    front: 'Motor Learning Principles for SLP Treatment — List the key principles and clinical applications',
    back: 'Key principles: (1) Prepractice: Clear instruction + modeling before practice begins. (2) Practice amount: More practice = better learning (massed vs. distributed). (3) Practice distribution: Distributed practice (spread over time) generally superior for retention. (4) Practice variability: Variable practice (varying targets/contexts) promotes generalization. (5) Practice schedule: Random practice order harder initially but better for retention than blocked practice. (6) Feedback: Knowledge of results (KR) — was it correct? Knowledge of performance (KP) — how was the movement? (7) Feedback frequency: Reduced/delayed feedback promotes motor learning better than constant/immediate feedback. (8) Feedback schedule: Summary feedback (after several trials) better than trial-by-trial for retention. Applies to: CAS, apraxia of speech, dysarthria, voice therapy, dysphagia exercises.',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — Motor Learning',
    tags: ['motor learning', 'practice schedule', 'feedback', 'retention', 'generalization'],
  },
  {
    id: 'c3-fc043',
    front: 'Spaced Retrieval Training (SRT) — Describe the technique and its application in cognitive-communication',
    back: 'Technique: Teach a target piece of information, then test recall at systematically expanding intervals. If correct: double the interval (30s → 1min → 2min → 4min → 8min → etc.). If incorrect: provide the answer and return to the last successful interval. Mechanism: Exploits preserved implicit memory systems even when explicit memory is impaired. Applications in SLP: (1) Teaching names of caregivers or family to patients with dementia. (2) Teaching use of memory aids (e.g., "Look at your memory book"). (3) Teaching swallowing strategies (e.g., "Use chin tuck when drinking"). (4) Teaching AAC device use. Populations: Dementia, TBI, stroke with memory impairment. Advantage: Can be embedded in functional activities and requires minimal cognitive demand.',
    category: 'III — Treatment',
    subcategory: 'Cognitive-Communication Treatment — Memory Strategies',
    tags: ['spaced retrieval', 'SRT', 'memory', 'dementia', 'implicit memory'],
  },
  {
    id: 'c3-fc044',
    front: 'Bilingual Treatment Planning — Key principles for treating bilingual individuals with communication disorders',
    back: 'Principles: (1) A communication disorder affects ALL languages — it is not a disorder in one language only. (2) Treat in both languages when possible; cross-linguistic transfer occurs. (3) Do not recommend dropping one language — it harms family communication and cultural identity. (4) Use language bridges — cognates, shared concepts, cross-linguistic facilitation. (5) If only one treatment language is possible, treat in the language with the most functional use AND provide home language support through family. (6) Dynamic assessment can separate difference from disorder. (7) Standardized tests normed on monolingual English speakers cannot diagnose disorder in bilingual speakers. (8) Interpreters should be trained in communication disorders assessment, not just general interpretation.',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — Bilingual Considerations',
    tags: ['bilingual', 'cross-linguistic transfer', 'cultural competence', 'treatment planning'],
  },
  {
    id: 'c3-fc045',
    front: 'Progressive Neurological Conditions — How does treatment planning differ from non-progressive conditions?',
    back: 'Key differences: (1) Goal is maintenance and proactive planning, not restoration. (2) Strengthening exercises may be contraindicated (e.g., ALS — risk of overuse fatigue). (3) AAC assessment should begin EARLY while the patient can still participate in training and voice banking. (4) Staging: Plan for anticipated decline with clear triggers for advancing to next phase (e.g., "When intelligibility drops below 70%, transition to AAC as primary"). (5) Counseling: Support grief, identity changes, and family adjustment at each stage. (6) Compensatory over rehabilitative: Emphasize energy conservation and compensatory strategies. (7) Voice banking: Record before significant decline for future AAC personalization. Examples: ALS, Parkinson disease (progressive), primary progressive aphasia, Huntington disease, MS. Each has a unique trajectory requiring tailored staging.',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — Progressive Conditions',
    tags: ['progressive disease', 'ALS', 'proactive planning', 'voice banking', 'staging'],
  },
]
