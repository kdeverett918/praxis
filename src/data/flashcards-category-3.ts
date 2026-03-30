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

  // ─── Additional Named Treatments ──────────────────────────────────────────

  {
    id: 'c3-fc046',
    front: 'Minimal Pairs Therapy — Procedure, population, and goal',
    back: 'Population: Children with phonological disorders. Procedure: Present word pairs that differ by one phoneme (the target error and the correct sound), e.g., "tea" vs. "key" for fronting. The child produces the word, and communication breakdown occurs if the wrong sound is used, creating meaningful contrast. Goal: Help the child establish phonemic contrast by demonstrating that sound changes create meaning changes. Effective for children whose errors result in homophony (two words sounding the same).',
    category: 'III — Treatment',
    subcategory: 'Speech Sound Treatment — Named Programs',
    tags: ['minimal pairs', 'phonological treatment', 'phonemic contrast'],
  },
  {
    id: 'c3-fc047',
    front: 'Maximal Oppositions Therapy — How does it differ from minimal pairs?',
    back: 'Maximal oppositions uses word pairs that differ by MULTIPLE features rather than one (e.g., "mop" vs. "chop" — differs in manner, place, and voicing). Theory: Targeting maximally opposed sounds promotes broader phonological reorganization. Developed by Judith Gierut. Evidence: Greater generalization to untrained sounds compared to minimal pairs. Recommended for children with moderate-to-severe phonological disorders with multiple error patterns. More efficient than treating one contrast at a time.',
    category: 'III — Treatment',
    subcategory: 'Speech Sound Treatment — Named Programs',
    tags: ['maximal oppositions', 'Gierut', 'phonological treatment', 'generalization'],
  },
  {
    id: 'c3-fc048',
    front: 'Cycles Approach — Developer, target population, and protocol structure',
    back: 'Developer: Barbara Hodson. Population: Children with highly unintelligible speech (severe phonological disorders) with multiple processes. Protocol: Target phonological patterns in cycles (~3–6 weeks per cycle). Each pattern is targeted for a short period, then the cycle moves to the next pattern. Patterns are recycled until eliminated. Session structure: Auditory bombardment (listen to 12 target words with amplification), production practice of target patterns, stimulability probes.\n\nKey principle: All deficient patterns receive treatment, not just one. Mimics natural development (multiple patterns improve simultaneously).',
    category: 'III — Treatment',
    subcategory: 'Speech Sound Treatment — Named Programs',
    tags: ['Cycles approach', 'Hodson', 'phonological-disorder', 'severe-unintelligibility'],
  },
  {
    id: 'c3-fc049',
    front: 'Phonological Complexity Approach — What is the treatment philosophy?',
    back: 'Philosophy: Target more COMPLEX sounds/structures FIRST. Treating complex targets promotes generalization to simpler, untreated targets (implicational universals). Examples: Treat clusters before singletons. Treat later-developing sounds before earlier ones. Treat marked features before unmarked.\n\nEvidence: Gierut\'s research shows treating complex sounds leads to widespread change across the system — treating simple sounds does not generalize upward. Counterintuitive but well-supported. Applicable when the child is at least minimally stimulable for complex targets.',
    category: 'III — Treatment',
    subcategory: 'Speech Sound Treatment — Named Programs',
    tags: ['complexity approach', 'Gierut', 'phonological-treatment', 'generalization'],
  },
  {
    id: 'c3-fc050',
    front: 'PACE (Promoting Aphasics\' Communicative Effectiveness) — Describe the approach',
    back: 'Approach: Functional, interactive communication treatment for aphasia. Principles: (1) Equal participation — clinician and patient alternate as sender/receiver. (2) New information exchange — real communication (barrier tasks where the listener doesn\'t know the message). (3) Free choice of communication channel — patient can use speech, gesture, drawing, writing, or any combination. (4) Natural feedback — clinician responds to the adequacy of communication, not the form.\n\nGoal: Improve overall communicative effectiveness rather than targeting specific linguistic forms. Patient-centered and functional.',
    category: 'III — Treatment',
    subcategory: 'Aphasia Treatment — Named Programs',
    tags: ['PACE', 'aphasia', 'functional-communication', 'multimodal'],
  },
  {
    id: 'c3-fc051',
    front: 'Phonological Components Analysis (PCA) — Describe the approach for aphasia',
    back: 'PCA is a cueing-based naming treatment for aphasia that uses PHONOLOGICAL features (rather than semantic features as in SFA). When the patient cannot name a target, the clinician prompts: first sound, last sound, rhyming word, number of syllables, first sound of a related word.\n\nTarget: Word retrieval deficits, especially when semantic approaches have limited effectiveness. Mechanism: Activates phonological representations to facilitate lexical access. Evidence: Effective for patients whose naming benefits more from phonological cues than semantic cues. Can be combined with SFA for a dual-route approach.',
    category: 'III — Treatment',
    subcategory: 'Aphasia Treatment — Named Programs',
    tags: ['PCA', 'phonological-components', 'aphasia', 'word-retrieval'],
  },
  {
    id: 'c3-fc052',
    front: 'SOS Approach to Feeding — What is it and who is it for?',
    back: 'SOS (Sequential Oral Sensory) Approach: Developed by Kay Toomey. Population: Children with feeding disorders, including sensory-based food refusal, limited diet variety, and mealtime behavioral difficulties.\n\nApproach: Systematic desensitization through a hierarchy of food interaction steps: (1) Tolerate food in the room. (2) Interact with food (touch, explore). (3) Smell the food. (4) Touch to lips. (5) Taste. (6) Eat.\n\nPhilosophy: Children must feel safe with food. Never force feeding. Focus on exploration, play, and positive associations. Combines sensory, motor, behavioral, nutritional, and environmental components.',
    category: 'III — Treatment',
    subcategory: 'Pediatric Feeding Treatment',
    tags: ['SOS approach', 'feeding', 'sensory', 'Kay Toomey', 'pediatric'],
  },
  {
    id: 'c3-fc053',
    front: 'Food Chaining — Describe the approach for pediatric feeding',
    back: 'Food chaining is a technique where new foods are introduced based on shared properties with foods the child already accepts (preferred foods). Chains are created by systematically changing one property at a time: flavor, texture, color, temperature, or brand.\n\nExample chain: Accepts McDonald\'s french fries → other brands of fries → baked potato wedges → mashed potato → sweet potato. Each step is a small change from the accepted food. Requires detailed inventory of accepted foods and their sensory properties. Less structured than SOS but shares the philosophy of gradual, non-forced exposure. Used for selective/picky eaters.',
    category: 'III — Treatment',
    subcategory: 'Pediatric Feeding Treatment',
    tags: ['food chaining', 'pediatric-feeding', 'selective-eating', 'sensory'],
  },
  {
    id: 'c3-fc054',
    front: 'Errorless Learning — Describe the technique and its application in cognitive-communication',
    back: 'Technique: Structure the task so the patient CANNOT make errors during the learning phase. Provide the correct response immediately or use heavy cueing so the patient always produces the correct answer. Gradually fade cues over time.\n\nRationale: In patients with memory impairment, errors during learning become consolidated and are difficult to unlearn. Preventing errors avoids reinforcing incorrect responses.\n\nApplications: (1) Learning names/faces in dementia. (2) Learning to use compensatory strategies. (3) Learning AAC device use. (4) Procedural tasks. Populations: Dementia, severe TBI, amnesia.\n\nContrast: Errorful learning (trial and error) is better for intact learners because errors promote deeper processing.',
    category: 'III — Treatment',
    subcategory: 'Cognitive-Communication Treatment — Memory Strategies',
    tags: ['errorless learning', 'dementia', 'memory', 'implicit-learning'],
  },

  // ─── Additional Dysphagia Exercises ───────────────────────────────────────

  {
    id: 'c3-fc055',
    front: 'Chin Tuck Against Resistance (CTAR) — Describe the exercise and its purpose',
    back: 'Purpose: Alternative to the Shaker exercise for patients who cannot lie supine. Strengthens suprahyoid muscles to improve hyolaryngeal excursion.\n\nProcedure: Patient places a small rubber ball (or resistance device) under the chin and squeezes chin down against it. Isometric and isokinetic versions: (1) Sustained hold: compress ball for 10 seconds, 10 repetitions. (2) Repetitions: 30 quick squeezes.\n\nEvidence: Yoon et al. (2014) showed CTAR activates the same suprahyoid muscles as the Shaker exercise. More accessible for bedridden or older adults who cannot tolerate the supine head-lift.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Rehabilitative Exercises',
    tags: ['CTAR', 'chin-tuck-against-resistance', 'suprahyoid', 'hyolaryngeal-excursion'],
  },
  {
    id: 'c3-fc056',
    front: 'Lingual Resistance Training (Tongue Strengthening) — Protocol and evidence',
    back: 'Target: Increase tongue strength (maximum isometric pressure) for improved bolus propulsion and oral clearance.\n\nDevice: Iowa Oral Performance Instrument (IOPI) or similar pressure-sensing bulb.\n\nProtocol: Patient presses tongue against palate on the bulb at target percentage of maximum isometric pressure (typically 60–80%). Sets of 10 repetitions at anterior and posterior tongue positions. 3 sets, 3x/week for 8 weeks.\n\nEvidence: Robbins et al. showed improved tongue strength and reduced MBSS residue in stroke patients. Tongue strengthening also shown to improve isometric and swallowing pressures in healthy older adults.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Rehabilitative Exercises',
    tags: ['lingual-resistance', 'tongue-strength', 'IOPI', 'dysphagia-rehabilitation'],
  },
  {
    id: 'c3-fc057',
    front: 'Lee Silverman Voice Treatment (LSVT) — What is the difference between LSVT LOUD and LSVT BIG?',
    back: 'LSVT LOUD: Targets voice/speech. "Think LOUD!" Increases vocal loudness through maximum effort phonation. 16 sessions/4 weeks. For SLPs.\n\nLSVT BIG: Targets limb and body movement. "Think BIG!" Increases movement amplitude through high-effort, big movements. 16 sessions/4 weeks. For PTs and OTs.\n\nShared principles: (1) Single focus (loudness or amplitude). (2) High effort. (3) Intensive dosage. (4) Self-calibration (patient learns to recognize that what feels "too loud" or "too big" is actually normal). (5) Targets the underlying hypometria of Parkinson disease.\n\nBoth have strong evidence for Parkinson disease.',
    category: 'III — Treatment',
    subcategory: 'Voice Treatment — Named Programs',
    tags: ['LSVT LOUD', 'LSVT BIG', 'Parkinson', 'intensive-treatment'],
  },

  // ─── Additional Compensatory Swallowing Strategies ────────────────────────

  {
    id: 'c3-fc058',
    front: 'Head Rotation to Weak Side — Mechanism and indications',
    back: 'Mechanism: Turning the head to the weak/paralyzed side closes the pyriform sinus on that side, redirecting the bolus through the stronger side of the pharynx. Also increases vocal fold closure on the rotated side.\n\nIndication: Unilateral pharyngeal weakness, unilateral vocal fold paralysis. Identified on MBSS as unilateral pyriform sinus residue.\n\nHow to identify the weak side: On MBSS, residue will be greater on the weak side. Head rotation TO the weak side diverts the bolus AWAY from the weak side.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Compensatory Strategies',
    tags: ['head-rotation', 'unilateral-weakness', 'pharyngeal-compensation'],
  },
  {
    id: 'c3-fc059',
    front: 'Multiple Swallows (Dry Swallow) — Purpose and indication',
    back: 'Purpose: Clear residual material from the pharynx after the initial swallow. Patient takes one additional "dry" swallow (or more) after each bolus swallow.\n\nIndication: Pharyngeal residue identified on instrumental assessment (vallecular or pyriform sinus residue). Reduced pharyngeal stripping wave.\n\nLimitation: Only effective if the patient can generate enough pressure on subsequent swallows. If residue does not clear with multiple swallows, a different strategy may be needed.\n\nOften combined with other strategies: Multiple swallows + effortful swallow, or multiple swallows + liquid wash.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Compensatory Strategies',
    tags: ['multiple-swallows', 'dry-swallow', 'residue-clearance'],
  },
  {
    id: 'c3-fc060',
    front: 'Liquid Wash — Purpose and indication',
    back: 'Purpose: Clear solid food residue from the pharynx by alternating solids with liquid sips. Patient takes a sip of liquid after each bite of solid food.\n\nIndication: Pharyngeal residue after solid boluses, reduced pharyngeal clearance, reduced tongue base retraction.\n\nCaution: Only use if the patient can safely tolerate the prescribed liquid consistency. If the patient aspirates thin liquids, use thickened liquids for the wash or choose a different strategy. Must be verified on instrumental assessment.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Compensatory Strategies',
    tags: ['liquid-wash', 'pharyngeal-residue', 'bolus-alternation'],
  },
  {
    id: 'c3-fc061',
    front: 'Bolus Modification Strategies — Size, pace, and temperature',
    back: 'Bolus size: Smaller boluses are easier to control. Use a teaspoon instead of tablespoon. Avoid straw drinking for large boluses (harder to control volume).\n\nPace: Slow down eating rate. Allow complete pharyngeal clearance before the next bolus. Alternate bites with swallows.\n\nTemperature: Cold or carbonated boluses may enhance sensory awareness and trigger a faster swallow response. Thermal-tactile stimulation (cold laryngeal mirror to anterior faucial pillars) was historically used but has limited evidence.\n\nAll bolus modifications are compensatory — they improve safety without changing underlying physiology.',
    category: 'III — Treatment',
    subcategory: 'Dysphagia — Compensatory Strategies',
    tags: ['bolus-modification', 'bolus-size', 'pacing', 'temperature'],
  },

  // ─── AAC Vocabulary Organization ──────────────────────────────────────────

  {
    id: 'c3-fc062',
    front: 'AAC Vocabulary Organization Methods — Describe three main approaches',
    back: 'Semantic-Syntactic (Grid): Vocabulary organized by word class/category in a grid layout. Core words on the main page, fringe in topic folders. Supports generative language. Examples: LAMP (Language Acquisition through Motor Planning), Proloquo2Go.\n\nFitzgerald Key: Color-coded organization where word categories are assigned specific colors and positions (left to right matching sentence structure). People/pronouns = yellow, verbs = green, descriptors = blue, nouns = orange.\n\nVisual Scene Displays (VSDs): Photographs or illustrations of real scenes with embedded hotspots. Context-rich. Excellent for early communicators, young children, and adults with aphasia. Supports commenting and narrative rather than just requesting.',
    category: 'III — Treatment',
    subcategory: 'AAC Implementation — Vocabulary Organization',
    tags: ['AAC', 'vocabulary-organization', 'Fitzgerald-key', 'VSD', 'grid-layout'],
  },
  {
    id: 'c3-fc063',
    front: 'AAC Access Methods — Direct selection vs. Scanning vs. Eye gaze',
    back: 'Direct Selection: User directly indicates the desired item (touch, point, mouse). Fastest access method. Requires adequate motor control for target isolation. Most common method.\n\nScanning: Items are sequentially highlighted; user activates a switch when the desired item is indicated. Types: linear (one at a time), row-column (row highlighted, then items within row), group-item. Slower but requires only one reliable movement. Used for severe motor impairment.\n\nEye Gaze: User looks at the desired item on a screen; eye-tracking camera detects gaze. Requires calibration, stable head positioning, and adequate oculomotor control. Used for individuals with severe physical disabilities (e.g., ALS, locked-in syndrome).',
    category: 'III — Treatment',
    subcategory: 'AAC Implementation — Access Methods',
    tags: ['AAC', 'direct-selection', 'scanning', 'eye-gaze', 'access-methods'],
  },
  {
    id: 'c3-fc064',
    front: 'Aided Language Stimulation (ALgS / Modeling) — What is it and why is it critical?',
    back: 'Aided language stimulation (also called AAC modeling or aided language input) is the practice of communication partners MODELING AAC use during natural interactions by pointing to symbols on the AAC system while speaking.\n\nWhy it is critical: (1) Provides receptive input in the AAC modality — just as hearing children learn from speech input, AAC users need to see their system used. (2) Reduces the expectation gap (we expect AAC users to produce language they have never been modeled). (3) Research shows robust modeling significantly increases AAC output. (4) All communication partners should model, not just the SLP.\n\nPrinciple: Input before output. Model extensively before expecting production.',
    category: 'III — Treatment',
    subcategory: 'AAC Implementation — Modeling',
    tags: ['aided-language-stimulation', 'AAC-modeling', 'input-before-output'],
  },

  // ─── Cueing Hierarchies ───────────────────────────────────────────────────

  {
    id: 'c3-fc065',
    front: 'Most-to-Least Cueing Hierarchy — Describe and provide examples',
    back: 'Approach: Start with maximum support and systematically fade cues as the patient succeeds.\n\nHierarchy (naming example):\n1. Clinician provides the word (model/imitation)\n2. Phonemic cue — initial sound ("/k/")\n3. Semantic cue — "It\'s something you sit on"\n4. Sentence completion — "You sit on a ___"\n5. Open question — "What is this?"\n\nAdvantages: Reduces frustration, builds confidence, ensures high success rate. Best for: Patients with severe deficits, early stages of treatment, errorless learning approaches, patients with memory impairment.',
    category: 'III — Treatment',
    subcategory: 'Treatment Techniques — Cueing',
    tags: ['cueing-hierarchy', 'most-to-least', 'scaffolding'],
  },
  {
    id: 'c3-fc066',
    front: 'Least-to-Most Cueing Hierarchy — Describe and provide examples',
    back: 'Approach: Start with minimal support and add cues only as needed.\n\nHierarchy (naming example):\n1. Open question — "What is this?" (no cue)\n2. Semantic cue — "It\'s something you sit on"\n3. Phonemic cue — initial sound ("/tʃ/")\n4. Choice — "Is it a chair or a table?"\n5. Model/imitation — "Say chair"\n\nAdvantages: Promotes independence, maximizes self-retrieval attempts, may strengthen neural pathways more effectively. Best for: Patients with mild-moderate deficits, later stages of treatment, patients who benefit from effortful retrieval. Aligns with retrieval practice research.',
    category: 'III — Treatment',
    subcategory: 'Treatment Techniques — Cueing',
    tags: ['cueing-hierarchy', 'least-to-most', 'independence'],
  },
  {
    id: 'c3-fc067',
    front: 'Phonemic vs. Semantic Cueing — When to use each',
    back: 'Phonemic cueing: Provide the first sound or syllable of the target word. Best when: The patient has a phonological access deficit (they know the word but cannot access the sound form). Common in conduction aphasia and tip-of-the-tongue states.\n\nSemantic cueing: Provide information about meaning, function, category, or associations. Best when: The patient has a semantic access deficit (the meaning representation is weak). Common in semantic dementia, Wernicke aphasia, anomic aphasia.\n\nClinical tip: Test both cue types during assessment to determine which is more effective for each patient. Use the more effective cue type in treatment, or combine both (dual cueing).',
    category: 'III — Treatment',
    subcategory: 'Treatment Techniques — Cueing',
    tags: ['phonemic-cue', 'semantic-cue', 'word-retrieval', 'aphasia'],
  },

  // ─── Motor Learning Principles (Expanded) ────────────────────────────────

  {
    id: 'c3-fc068',
    front: 'Blocked vs. Random Practice — Define and compare effects on learning',
    back: 'Blocked practice: Repeated practice of the SAME target before moving to the next (e.g., AAA BBB CCC). Easier during practice. Higher immediate accuracy. POORER long-term retention and generalization.\n\nRandom practice: Targets intermixed in unpredictable order (e.g., A C B A B C). Harder during practice (contextual interference effect). Lower immediate accuracy. BETTER long-term retention and generalization.\n\nClinical application: Use blocked practice early (to establish the motor pattern) then transition to random practice (to promote retention and transfer). This applies to articulation, CAS, apraxia of speech, and dysphagia exercises.',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — Motor Learning',
    tags: ['blocked-practice', 'random-practice', 'contextual-interference', 'motor-learning'],
  },
  {
    id: 'c3-fc069',
    front: 'Knowledge of Results (KR) vs. Knowledge of Performance (KP)',
    back: 'KR (Knowledge of Results): Feedback about the OUTCOME of the movement. "That sounded correct!" "You produced the /s/ clearly." Tells the learner whether the goal was achieved.\n\nKP (Knowledge of Performance): Feedback about the PROCESS/movement itself. "Keep your tongue tip behind your teeth." "Your jaw was too wide on that one." Tells the learner HOW the movement was performed.\n\nClinical guidance: Use KP early in learning when the patient needs to understand the movement. Transition to KR as the patient develops internal awareness. Reduce frequency of both over time (summary/delayed feedback promotes independence).',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — Motor Learning',
    tags: ['KR', 'KP', 'feedback', 'motor-learning'],
  },
  {
    id: 'c3-fc070',
    front: 'Principles of Motor Learning Applied to CAS Treatment',
    back: 'High-intensity practice: More repetitions per session, more sessions per week (3–5x/week ideally).\nDistributed practice: Short frequent sessions better than long infrequent.\nVariable practice: Vary targets, contexts, and prosodic patterns.\nRandom practice: Intermix targets (after initial blocked practice).\nFeedback: Frequent initially, then reduce. Use KP early ("Keep your lips rounded"), transition to KR ("Good!").\n\nAdditional CAS principles: Use simultaneous and immediate cues initially (e.g., PROMPT), systematically fade. Movement transitions are key targets. Use real words and functional phrases. Multimodal cueing (auditory, visual, tactile).',
    category: 'III — Treatment',
    subcategory: 'Speech Sound Treatment — CAS',
    tags: ['CAS', 'motor-learning', 'practice-principles', 'high-intensity'],
  },

  // ─── ICF Framework ────────────────────────────────────────────────────────

  {
    id: 'c3-fc071',
    front: 'ICF Framework — Describe the components and give SLP examples',
    back: 'WHO International Classification of Functioning, Disability and Health:\n\n1. Body Function/Structure: Impairment level. Example: Reduced tongue strength, vocal fold paralysis, receptive language deficit.\n\n2. Activity: Task execution. Example: Difficulty naming objects, unable to swallow thin liquids safely, cannot follow multi-step directions.\n\n3. Participation: Involvement in life situations. Example: Cannot order food at a restaurant, withdrawn from social events, unable to participate in class discussions.\n\n4. Environmental Factors: External influences. Example: Supportive family, noisy classroom, access to AAC device, insurance coverage.\n\n5. Personal Factors: Individual attributes. Example: Motivation, age, coping style, cultural background.\n\nGoals should address activity and participation levels, not just body function.',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — ICF Framework',
    tags: ['ICF', 'WHO', 'body-function', 'activity', 'participation'],
  },

  // ─── NOMS Levels ──────────────────────────────────────────────────────────

  {
    id: 'c3-fc072',
    front: 'ASHA NOMS — Swallowing Functional Communication Measures (FCMs)',
    back: 'Level 1: Individual is not able to swallow anything safely by mouth. All nutrition via nonoral means (NPO).\nLevel 2: NPO except for consistent maximal cue trials of oral intake.\nLevel 3: Taking some nutrition by mouth but requires moderate cues. Alternative nutrition needed.\nLevel 4: Swallowing is safe but usually requires moderate cueing for diet modifications or strategies.\nLevel 5: Swallowing is safe with minimal cueing for diet modifications or strategies. May need one modified consistency.\nLevel 6: Swallowing is safe; patient independently uses strategies with minimal diet limitations.\nLevel 7: Patient\'s ability to eat independently is not limited. Swallows all food and liquid consistencies safely.',
    category: 'III — Treatment',
    subcategory: 'Outcome Measures — NOMS',
    tags: ['NOMS', 'swallowing-FCM', 'functional-outcome', 'ASHA'],
  },

  // ─── Additional Voice Treatments ──────────────────────────────────────────

  {
    id: 'c3-fc073',
    front: 'Confidential Voice — Describe the technique and indication',
    back: 'Technique: Patient speaks in a soft, breathy voice (like sharing a secret) rather than whispering. The vocal folds are barely adducting, reducing impact stress.\n\nIndication: Acute vocal fold pathology requiring voice rest (but complete voice rest is not feasible). Vocal nodules, polyps, post-surgical voice use.\n\nKey distinction from whispering: Whispering can actually increase vocal fold tension and should be AVOIDED. Confidential voice maintains gentle phonation with minimal fold contact.\n\nTypically used as a temporary strategy during the early phase of voice therapy, not a long-term approach.',
    category: 'III — Treatment',
    subcategory: 'Voice Treatment — Approaches',
    tags: ['confidential-voice', 'voice-therapy', 'vocal-hygiene', 'phonotrauma'],
  },
  {
    id: 'c3-fc074',
    front: 'Semi-Occluded Vocal Tract Exercises (SOVTEs) — Types and mechanism',
    back: 'SOVTEs partially occlude the vocal tract to create back-pressure that optimizes vocal fold vibration.\n\nTypes: Lip trills, tongue trills, humming, straw phonation, cup bubble, kazoo, raspberries, /v/ and /z/ phonation.\n\nMechanism: The semi-occlusion increases supraglottic pressure, which (1) lowers phonation threshold pressure, (2) widens the glottis slightly during vibration, (3) reduces vocal fold collision forces, and (4) promotes more efficient vibration.\n\nClinical use: Voice warm-ups, resonant voice therapy, rehabilitation after vocal fold surgery, building vocal endurance. Evidence supports SOVTEs for multiple voice disorders. Straw phonation (Titze) is particularly well-researched.',
    category: 'III — Treatment',
    subcategory: 'Voice Treatment — Approaches',
    tags: ['SOVTE', 'straw-phonation', 'lip-trill', 'vocal-efficiency'],
  },
  {
    id: 'c3-fc075',
    front: 'Vocal Hygiene Education — Key recommendations',
    back: 'Vocal hygiene is the foundation of all voice treatment programs. Key recommendations:\n\n1. Hydration: Drink 6–8 glasses of water daily. Avoid caffeine/alcohol excess (diuretics).\n2. Avoid phonotrauma: Reduce yelling, screaming, throat clearing, excessive coughing.\n3. Reduce irritants: Avoid smoking, secondhand smoke, excessive dust/chemicals.\n4. Manage reflux (LPR): Dietary modifications, medication, elevate head of bed.\n5. Voice rest: Use voice rest after heavy vocal use. Avoid whispering.\n6. Amplification: Use a microphone when speaking in large/noisy spaces.\n7. Environment: Reduce background noise during conversation.\n\nAlone, vocal hygiene is often insufficient — combine with direct voice therapy for best outcomes.',
    category: 'III — Treatment',
    subcategory: 'Voice Treatment — Vocal Hygiene',
    tags: ['vocal-hygiene', 'voice-therapy', 'phonotrauma-prevention', 'hydration'],
  },

  // ─── Additional Fluency Treatment ─────────────────────────────────────────

  {
    id: 'c3-fc076',
    front: 'Camperdown Program — Describe the approach for adult stuttering',
    back: 'Population: Adults and adolescents who stutter. Approach: Teaches a prolonged speech pattern using video model imitation. Then the patient learns to modify the pattern to sound natural while maintaining fluency.\n\nPhases: (1) Learn prolonged speech from video model. (2) Practice with self-rating of naturalness and fluency. (3) Generalize to daily conversations. (4) Maintenance with self-monitoring.\n\nKey feature: Self-evaluation using a 9-point severity rating scale. Patient sets their own fluency/naturalness targets. Telehealth delivery studied with positive results. More recent and streamlined than traditional prolonged speech programs.',
    category: 'III — Treatment',
    subcategory: 'Fluency Treatment — Named Programs',
    tags: ['Camperdown', 'adult-stuttering', 'prolonged-speech', 'self-monitoring'],
  },
  {
    id: 'c3-fc077',
    front: 'Stuttering Modification Techniques — Define cancellations, pullouts, and preparatory sets',
    back: 'Cancellations: AFTER a stuttered word, the speaker pauses, then re-says the word with a modified, easier stutter. Purpose: Reduce avoidance, confront the moment of stuttering.\n\nPullouts: DURING a moment of stuttering, the speaker eases out of the stutter by reducing tension and transitioning smoothly into the next sound. Purpose: Modify the stutter in real-time.\n\nPreparatory sets: BEFORE a word that is anticipated to be stuttered, the speaker prepares the articulators in a relaxed, easy-onset position. Purpose: Prevent the tense block before it occurs.\n\nHierarchy of difficulty: Cancellations (easiest to learn) → Pullouts → Preparatory sets (most difficult, most proactive). Associated with Charles Van Riper.',
    category: 'III — Treatment',
    subcategory: 'Fluency Treatment — Techniques',
    tags: ['cancellations', 'pullouts', 'preparatory-sets', 'Van-Riper', 'stuttering-modification'],
  },
  {
    id: 'c3-fc078',
    front: 'Fluency Shaping Techniques — Define easy onset, light contact, and continuous phonation',
    back: 'Easy onset: Begin phonation with gradual, gentle vocal fold adduction rather than a hard glottal attack. Start voicing softly and build. Reduces blocks on initial vowels.\n\nLight articulatory contact: Reduce the force of articulatory contact for consonants. Lips, tongue, and palate touch lightly rather than pressing firmly. Reduces tension-based blocks.\n\nContinuous phonation: Maintain airflow and voicing across words and phrases, linking sounds together rather than stopping between words. Reduces between-word blocks.\n\nAll three reduce the physical tension that triggers and maintains stuttering moments. Combined with rate reduction in many fluency shaping programs.',
    category: 'III — Treatment',
    subcategory: 'Fluency Treatment — Techniques',
    tags: ['easy-onset', 'light-contact', 'continuous-phonation', 'fluency-shaping'],
  },

  // ─── Cognitive-Communication Treatment (Expanded) ─────────────────────────

  {
    id: 'c3-fc079',
    front: 'External Memory Aids — Types and implementation principles',
    back: 'Types: Memory notebooks, planners, calendars, checklists, to-do lists, smartphones (alarms, reminders, notes apps), voice recorders, whiteboards, pill organizers, GPS.\n\nImplementation principles: (1) Train the patient to USE the aid, not just have it. (2) Use spaced retrieval to teach the habit ("Look at your book"). (3) Customize to the patient\'s needs and abilities. (4) Start with one simple aid and expand. (5) Practice in functional settings. (6) Train caregivers/family to cue use. (7) The aid compensates for memory — it does not improve memory itself.\n\nEvidence: Strong support for external aids as the most effective memory compensation strategy in TBI and dementia.',
    category: 'III — Treatment',
    subcategory: 'Cognitive-Communication Treatment — Compensatory Strategies',
    tags: ['memory-aids', 'external-aids', 'TBI', 'compensatory-strategy'],
  },
  {
    id: 'c3-fc080',
    front: 'Metacognitive Strategy Training — Describe the approach for cognitive-communication treatment',
    back: 'Metacognition = "thinking about thinking." Training patients to monitor, evaluate, and regulate their own cognitive processes.\n\nComponents: (1) Self-awareness: Recognize deficits (e.g., "I have trouble remembering names"). (2) Self-monitoring: Check performance during tasks (e.g., "Am I staying on topic?"). (3) Self-evaluation: Assess outcome quality (e.g., "Did that make sense?"). (4) Self-regulation: Adjust strategies as needed.\n\nTechniques: Self-questioning, self-checklists, error detection tasks, video self-review.\n\nPopulations: TBI (especially Rancho VI–VIII), RHD, mild cognitive impairment.\n\nKey: Anosognosia (lack of awareness) is the primary barrier. Building awareness is the essential first step.',
    category: 'III — Treatment',
    subcategory: 'Cognitive-Communication Treatment — Metacognition',
    tags: ['metacognition', 'self-monitoring', 'self-awareness', 'TBI'],
  },

  // ─── Pediatric Language Treatment ─────────────────────────────────────────

  {
    id: 'c3-fc081',
    front: 'Milieu Teaching — Describe the approach and its variations',
    back: 'Milieu teaching is a naturalistic, child-directed language intervention approach that uses the child\'s interests and activities as the context for language teaching.\n\nVariations:\n1. Model: Adult models the target form during play.\n2. Mand-model: Adult asks "What do you want?" (mand), then models if child cannot respond.\n3. Time delay: Adult pauses expectantly (delays response) to elicit communication from the child.\n4. Incidental teaching: Adult responds to child-initiated communication by prompting elaboration.\n\nPrinciples: Follow the child\'s lead, use natural consequences (give the requested item), embed targets in meaningful interactions. Strong evidence for early language intervention.',
    category: 'III — Treatment',
    subcategory: 'Language Treatment — Pediatric',
    tags: ['milieu-teaching', 'naturalistic', 'child-directed', 'early-intervention'],
  },
  {
    id: 'c3-fc082',
    front: 'Focused Stimulation — Describe the approach',
    back: 'Focused stimulation is a clinician-directed but child-centered approach where the clinician provides concentrated/repeated models of a target language form within meaningful contexts without requiring the child to produce the target.\n\nProcedure: Choose a target (e.g., present progressive -ing). Create or select activities where the target can be modeled many times. Provide frequent, natural models during play (e.g., "The dog is running! He\'s jumping! Look, he\'s eating!").\n\nKey feature: No imitation demanded — the high-density input is expected to facilitate natural acquisition. Best for children in early stages of language development who are not yet ready for direct elicitation. Evidence-based for late talkers and children with mild-moderate language delays.',
    category: 'III — Treatment',
    subcategory: 'Language Treatment — Pediatric',
    tags: ['focused-stimulation', 'language-modeling', 'no-imitation', 'early-intervention'],
  },
  {
    id: 'c3-fc083',
    front: 'Recasting — What is it and why is it effective?',
    back: 'Recasting is a responsive interaction technique where the adult repeats the child\'s utterance with the correct form, adding or correcting the grammatical target while maintaining the child\'s meaning.\n\nChild: "Him goed outside." Adult: "Yes, he went outside!" (recast correcting pronoun and verb)\n\nWhy it is effective: (1) Provides corrective feedback without direct correction (preserves communication flow). (2) Juxtaposes the child\'s error with the correct form for implicit comparison. (3) Maintains the child\'s topic and intent. (4) Uses the child\'s own meaning as the context for learning.\n\nEvidence: One of the most well-studied and effective techniques for grammatical morpheme and syntax intervention in children with DLD.',
    category: 'III — Treatment',
    subcategory: 'Language Treatment — Pediatric',
    tags: ['recasting', 'responsive-interaction', 'grammar', 'DLD'],
  },
  {
    id: 'c3-fc084',
    front: 'Narrative Intervention — Why is it important and how is it structured?',
    back: 'Importance: Narrative skills (storytelling) are critical for academic success, social interaction, and literacy. Children with language disorders often have impaired narrative skills.\n\nStructured approach: Teach story grammar elements:\n1. Character(s)\n2. Setting (when/where)\n3. Initiating event (problem)\n4. Internal response (feelings/thoughts)\n5. Plan\n6. Attempt(s)\n7. Consequence/resolution\n8. Ending/reaction\n\nTechniques: Story maps, graphic organizers, story retell, personal narratives, fictional narratives. Progress from supported retell → independent retell → independent generation.\n\nAssessment: Story grammar analysis, cohesion markers, narrative scoring rubrics.',
    category: 'III — Treatment',
    subcategory: 'Language Treatment — Pediatric',
    tags: ['narrative-intervention', 'story-grammar', 'literacy', 'language-treatment'],
  },

  // ─── Social Communication Treatment ───────────────────────────────────────

  {
    id: 'c3-fc085',
    front: 'Social Thinking (Michelle Garcia Winner) — Describe the approach',
    back: 'Social Thinking is a cognitive-behavioral approach that teaches individuals WHY social rules exist and HOW to think about social situations, rather than just memorizing rules.\n\nKey concepts: (1) Expected vs. unexpected behaviors — and how they make others feel. (2) Thinking with your eyes — observing others\' behavior/context. (3) Social detective — reading social cues to figure out the "hidden rules." (4) Size of the problem — matching emotional reactions to the severity of the situation. (5) Whole body listening — attention involves the entire body.\n\nPopulation: ASD, ADHD, social communication disorder, RHD. Ages: School-age through adult. Focus is on building social COGNITION, not just social scripts.',
    category: 'III — Treatment',
    subcategory: 'Social Communication Treatment',
    tags: ['Social-Thinking', 'Michelle-Garcia-Winner', 'ASD', 'social-cognition'],
  },
  {
    id: 'c3-fc086',
    front: 'ReST (Rapid Syllable Transition Treatment) — Describe the approach for CAS',
    back: 'ReST targets the smooth transition between syllables in children with CAS. Uses nonsense words (pseudo-words) of increasing syllable length and stress complexity to train accurate, fluent syllable transitions without semantic cues.\n\nProcedure: Clinician models a pseudo-word, child imitates. Feedback is given on accuracy of sounds, stress pattern, and smoothness of transitions. Practice is blocked initially, then randomized.\n\nKey principles: High intensity (4x/week), 100+ trials per session, systematic progression from 2- to 3-syllable pseudo-words. Strong evidence from Australian RCTs showing generalization to real words and maintenance at follow-up.',
    category: 'III — Treatment',
    subcategory: 'Speech Sound Treatment — CAS',
    tags: ['ReST', 'CAS', 'rapid-syllable-transition', 'pseudo-words', 'motor-speech'],
  },

  // ─── Literacy Treatment ───────────────────────────────────────────────────

  {
    id: 'c3-fc087',
    front: 'SLP Role in Literacy — What is the connection between language and reading?',
    back: 'Oral language is the foundation for reading. The "Simple View of Reading": Reading Comprehension = Decoding × Language Comprehension.\n\nSLP contributions to literacy: (1) Phonological awareness intervention (foundational for decoding). (2) Vocabulary instruction (supports comprehension). (3) Narrative skills (supports reading comprehension). (4) Morphological awareness (prefixes, suffixes, root words). (5) Syntactic knowledge (understanding complex sentences in text).\n\nChildren with language disorders have a 40–75% risk of reading difficulties. SLPs are uniquely qualified to address the LANGUAGE underpinnings of literacy. ASHA position: Literacy is within the SLP scope of practice.',
    category: 'III — Treatment',
    subcategory: 'Literacy Intervention',
    tags: ['literacy', 'reading', 'phonological-awareness', 'SLP-role'],
  },

  // ─── Tracheostomy and Ventilator ──────────────────────────────────────────

  {
    id: 'c3-fc088',
    front: 'Tracheostomy and Communication — SLP considerations',
    back: 'A tracheostomy tube bypasses the larynx, diverting airflow from the vocal folds. Without airflow through the larynx, phonation is not possible with a standard cuffed tracheostomy tube.\n\nCommunication options: (1) Cuff deflation — allows air to pass around the tube and through the larynx. (2) Speaking valve (Passy-Muir) — one-way valve that allows air in through the trach but redirects exhalation through the larynx. Requires cuff deflation. (3) Finger occlusion — patient covers the trach opening to redirect airflow. (4) AAC if voicing is not possible.\n\nSLP role: Assess candidacy for speaking valve, monitor voicing quality, evaluate swallowing (trach patients have elevated aspiration risk), coordinate with respiratory therapy.',
    category: 'III — Treatment',
    subcategory: 'Tracheostomy — Communication',
    tags: ['tracheostomy', 'speaking-valve', 'Passy-Muir', 'communication'],
  },
  {
    id: 'c3-fc089',
    front: 'Passy-Muir Valve — How does it work and what are the contraindications?',
    back: 'Mechanism: One-way valve placed on the tracheostomy tube hub. Air enters through the trach on inhalation. On exhalation, the valve closes, redirecting air UP through the larynx, pharynx, nose, and mouth. Restores voicing, smell, taste, and closed airway system.\n\nRequirements: (1) Cuff must be FULLY DEFLATED (mandatory — inflated cuff + valve = no exhalation = suffocation). (2) Patient must tolerate cuff deflation. (3) Airway must be patent above the trach.\n\nContraindications: Inflated cuff, unconscious patient, severe airway obstruction above trach, foam-filled cuff.\n\nBenefits beyond voice: Improved secretion management, improved swallowing, restored subglottic pressure for cough.',
    category: 'III — Treatment',
    subcategory: 'Tracheostomy — Speaking Valve',
    tags: ['Passy-Muir', 'speaking-valve', 'cuff-deflation', 'tracheostomy'],
  },

  // ─── Cultural Competence in Treatment ─────────────────────────────────────

  {
    id: 'c3-fc090',
    front: 'Cultural Competence in SLP Treatment — Key principles',
    back: 'Principles: (1) Self-awareness: Recognize your own cultural biases and how they affect clinical decisions. (2) Knowledge: Learn about the communication norms and values of the populations you serve. (3) Respect: Honor cultural differences in communication styles (e.g., eye contact norms, directness, narrative styles). (4) Adapt treatment: Modify materials, activities, and goals to be culturally relevant. (5) Family involvement: Understand family structures and decision-making patterns. (6) Language: Provide services in the patient\'s preferred language when possible; use trained interpreters.\n\nKey: Cultural humility is ongoing — no one can be fully "competent" in all cultures. Approach each family as the expert on their own culture.',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — Cultural Competence',
    tags: ['cultural-competence', 'cultural-humility', 'diversity', 'treatment-planning'],
  },

  // ─── Service Delivery Models ──────────────────────────────────────────────

  {
    id: 'c3-fc091',
    front: 'Service Delivery Models in Schools — Pull-out vs. Push-in vs. Collaborative Consultation',
    back: 'Pull-out: Student removed from classroom for individual/small group therapy in the speech room. Advantages: Focused, controlled environment, less distraction. Disadvantages: Misses classroom instruction, limited generalization, stigma.\n\nPush-in (Classroom-based): SLP provides services WITHIN the classroom alongside the teacher. Advantages: Naturalistic context, peer modeling, immediate generalization, curriculum relevance. Disadvantages: Distractions, scheduling, limited individualization.\n\nCollaborative Consultation: SLP works WITH the teacher to embed language strategies in instruction. No direct student contact. Advantages: Reaches all students, builds teacher capacity. Disadvantages: SLP does not directly observe student response.\n\nBest practice: Use a combination based on student needs and IEP goals.',
    category: 'III — Treatment',
    subcategory: 'Service Delivery — School-Based',
    tags: ['pull-out', 'push-in', 'consultation', 'school-based', 'service-delivery'],
  },
  {
    id: 'c3-fc092',
    front: 'Group vs. Individual Therapy — When to use each',
    back: 'Individual therapy: Best for severe deficits, early learning stages, sensitive content (counseling), motor speech disorders requiring intensive repetition, patients who are easily overstimulated.\n\nGroup therapy: Best for social communication goals, generalization practice, pragmatic skills, peer modeling, fluency desensitization, aphasia group support, voice group. Provides natural communication contexts.\n\nKey considerations: (1) Group size affects individualization. (2) Group members should have complementary (not identical) goals. (3) Document individual goals within the group context. (4) Insurance/billing requirements may dictate. (5) Many patients benefit from both individual AND group in a treatment plan.\n\nEvidence: Group therapy for aphasia and stuttering shows strong outcomes for social participation goals.',
    category: 'III — Treatment',
    subcategory: 'Service Delivery — Group vs. Individual',
    tags: ['group-therapy', 'individual-therapy', 'service-delivery'],
  },

  // ─── Counseling in SLP ────────────────────────────────────────────────────

  {
    id: 'c3-fc093',
    front: 'Counseling in SLP — Informational vs. Supportive counseling',
    back: 'Informational counseling: Providing information about the diagnosis, prognosis, treatment plan, home programs, and resources. Teaching skills and strategies. Within SLP scope.\n\nSupportive/personal adjustment counseling: Helping the patient/family process emotions related to the communication disorder — grief, frustration, isolation, identity changes. Active listening, validation, empathy. Within SLP scope as it relates to the communication disorder.\n\nOutside SLP scope: Psychotherapy for clinical depression, anxiety disorders, marital problems, substance abuse — refer to psychology/social work/psychiatry.\n\nKey: SLPs often underestimate the importance of counseling. Communication disorders profoundly affect identity, relationships, and quality of life. Addressing the emotional impact is essential, not optional.',
    category: 'III — Treatment',
    subcategory: 'Counseling',
    tags: ['counseling', 'informational', 'supportive', 'emotional-adjustment'],
  },

  // ─── Additional Named Treatments ──────────────────────────────────────────

  {
    id: 'c3-fc094',
    front: 'Dynamic Temporal and Tactile Cueing (DTTC) — Describe the approach for CAS',
    back: 'DTTC is a motor-based approach for childhood apraxia of speech. Based on integral stimulation ("Watch me, listen to me, do what I do").\n\nHierarchy: (1) Simultaneous production (clinician + child together). (2) Mimed production (clinician mouths while child produces). (3) Direct imitation (clinician models, child imitates immediately). (4) Delayed imitation (pause before child produces). (5) Spontaneous production.\n\nKey features: Slowed rate, multimodal cueing (auditory, visual, tactile), emphasis on smooth movement transitions, functional/meaningful utterances, systematic fading of cues.\n\nEvidence: Supported for moderate-to-severe CAS. More structured than general motor-based approaches.',
    category: 'III — Treatment',
    subcategory: 'Speech Sound Treatment — CAS',
    tags: ['DTTC', 'CAS', 'integral-stimulation', 'motor-speech'],
  },
  {
    id: 'c3-fc095',
    front: 'Response Elaboration Training (RET) — Describe the approach for aphasia',
    back: 'RET is a treatment for aphasia that targets connected speech through forward chaining of patient-generated responses.\n\nProcedure: (1) Show a picture stimulus. (2) Patient provides an initial response (any form). (3) Clinician models a combined response (patient\'s utterance + elaboration). (4) Patient repeats the combined response. (5) Process continues with further elaboration.\n\nKey principle: Uses the PATIENT\'S own words and ideas as the foundation — not clinician-selected targets. This makes it personally relevant and meaningful.\n\nGoal: Increase the amount and informativeness of connected speech. Evidence: Shown to increase content units per utterance in nonfluent aphasia.',
    category: 'III — Treatment',
    subcategory: 'Aphasia Treatment — Named Programs',
    tags: ['RET', 'response-elaboration', 'aphasia', 'connected-speech'],
  },
  {
    id: 'c3-fc096',
    front: 'Beckman Oral Motor Protocol — Describe the approach and target population',
    back: 'The Beckman Oral Motor Protocol uses assisted movement and stretch techniques to quantify and improve oral motor function. The clinician applies calibrated pressure to the lips, cheeks, jaw, and tongue to assess and treat range, strength, variety, and control of movement.\n\nPopulation: Children and adults with reduced oral motor skills affecting feeding and/or speech — including Down syndrome, cerebral palsy, CAS, and other neuromuscular conditions.\n\nKey features: Does not rely on the patient following verbal directions (useful for very young children or those with cognitive limitations). Provides a standardized way to measure oral motor response to stretch and resistance. Requires specific Beckman training for accurate administration.',
    category: 'III — Treatment',
    subcategory: 'Oral Motor Treatment',
    tags: ['Beckman', 'oral-motor', 'assisted-movement', 'feeding', 'pediatric'],
  },

  // ─── Interprofessional Practice ───────────────────────────────────────────

  {
    id: 'c3-fc097',
    front: 'Interprofessional Collaborative Practice (IPP) — Key team members and SLP role',
    back: 'SLPs work on interdisciplinary teams across settings:\n\nMedical: Physicians, nurses, OT, PT, dietitian, respiratory therapy, neuropsychology. SLP role: Communication and swallowing assessment/treatment.\n\nSchool: Teachers, special educators, school psychologist, OT, PT, social worker. SLP role: Language/literacy support, classroom collaboration.\n\nEarly intervention: Service coordinator, developmental pediatrician, OT, PT, audiologist, social worker. SLP role: Communication within family-centered model.\n\nIPP principles: Shared decision-making, role clarity, mutual respect, unified goals. Different team models: Multidisciplinary (parallel), Interdisciplinary (coordinated), Transdisciplinary (role release/crossing boundaries).',
    category: 'III — Treatment',
    subcategory: 'Interprofessional Practice',
    tags: ['IPP', 'team-based', 'collaboration', 'interdisciplinary'],
  },

  // ─── Documentation ────────────────────────────────────────────────────────

  {
    id: 'c3-fc098',
    front: 'SOAP Note Format — Define each section for SLP documentation',
    back: 'S — Subjective: Patient/caregiver report, complaints, perceptions, goals expressed. "Patient reports difficulty swallowing pills."\n\nO — Objective: Measurable data from the session. Quantitative results, clinician observations, standardized test scores. "Produced /s/ in initial position with 70% accuracy across 30 trials with verbal cueing."\n\nA — Assessment: Clinician\'s interpretation of the data. Progress toward goals, prognosis, clinical reasoning. "Patient demonstrates steady improvement in phoneme accuracy. Progress is consistent with good prognosis."\n\nP — Plan: Next steps. Continue/modify treatment, referrals, home program, frequency changes, discharge planning. "Continue targeting /s/ blends; introduce carryover activities for home practice."',
    category: 'III — Treatment',
    subcategory: 'Documentation',
    tags: ['SOAP-note', 'documentation', 'treatment-planning'],
  },
  {
    id: 'c3-fc099',
    front: 'Measurable Treatment Data — How to collect and report',
    back: 'Data types: Accuracy (% correct), frequency (number of occurrences), duration (time on task), level of cueing needed (independent, minimal, moderate, maximal), consistency (across sessions/contexts).\n\nReporting format: "Produced [target] with [X]% accuracy across [N] trials/opportunities at [cueing level] in [context]."\n\nExample: "Named target objects using SFA strategy with 65% accuracy across 20 trials with moderate cueing in structured activities."\n\nData collection methods: Tally/frequency count, rubric scoring, rating scales, language sample analysis, standardized probe sheets.\n\nBest practice: Collect data every session, graph progress, compare to baseline. Objective data supports clinical decision-making, insurance justification, and accountability.',
    category: 'III — Treatment',
    subcategory: 'Documentation — Data Collection',
    tags: ['data-collection', 'measurable-outcomes', 'treatment-data', 'documentation'],
  },
  {
    id: 'c3-fc100',
    front: 'Generalization and Maintenance — How to program for carryover',
    back: 'Generalization: Transfer of learned skills to untrained contexts (new settings, people, stimuli, responses). Maintenance: Retention of skills over time after treatment ends.\n\nStrategies for generalization: (1) Train in multiple settings. (2) Use multiple exemplars (varied stimuli). (3) Involve multiple communication partners. (4) Use functional, real-world materials. (5) Use random practice. (6) Progressively reduce cueing. (7) Assign homework/carryover activities. (8) Train self-monitoring.\n\nStrategies for maintenance: (1) Overlearn the skill (practice beyond mastery). (2) Distributed practice schedule. (3) Provide booster sessions after discharge. (4) Train caregivers to support continued practice. (5) Include a maintenance phase in the treatment plan with probe data.\n\nIf skills do not generalize, treatment is incomplete.',
    category: 'III — Treatment',
    subcategory: 'Treatment Planning — Generalization',
    tags: ['generalization', 'maintenance', 'carryover', 'transfer'],
  },
]
