export interface QuestionData {
  id: string
  stem: string
  options: Array<{ id: string; text: string; isCorrect: boolean }>
  explanation: string
  incorrectExplanations: Record<string, string>
  contentCategory: 'I' | 'II' | 'III'
  subcategory: string
  bigNine: string[]
  difficulty: 'recall' | 'application' | 'analysis' | 'clinical_reasoning'
  tags: string[]
  clinicalSetting: string | null
  referenceSources: string[]
}

export const category3Questions: QuestionData[] = [
  // ─── RECALL (15%) — Questions 1–8 ───────────────────────────────────────────

  {
    id: 'c3-q001',
    stem: 'Which of the following BEST describes the "S" component of a SMART goal?',
    options: [
      {
        id: 'a',
        text: 'The goal should be supported by standardized assessment data',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'The goal should identify a precise, observable behavior the client will perform',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'The goal should be structured in a sequential hierarchy',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'The goal should be sensitive to cultural and linguistic differences',
        isCorrect: false,
      },
    ],
    explanation:
      'In the SMART framework, "S" stands for Specific. A specific goal clearly identifies what behavior the client will demonstrate, under what conditions, and with what level of support. It avoids vague language like "improve" or "get better" in favor of precise, observable actions.',
    incorrectExplanations: {
      a: 'While assessment data informs goal writing, "S" refers to Specific—not standardized.',
      c: 'Sequential hierarchy relates to goal ordering, not the meaning of the "S" in SMART.',
      d: 'Cultural sensitivity is important in treatment planning but does not define the "S" in SMART goals.',
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — SMART Goals',
    bigNine: [],
    difficulty: 'recall',
    tags: ['SMART goals', 'treatment planning', 'goal writing'],
    clinicalSetting: null,
    referenceSources: ['ASHA Practice Portal: Treatment Planning'],
  },
  {
    id: 'c3-q002',
    stem: 'The Mendelsohn maneuver is designed primarily to:',
    options: [
      {
        id: 'a',
        text: 'Strengthen the tongue base against the posterior pharyngeal wall',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Prolong and elevate hyolaryngeal excursion to improve UES opening',
        isCorrect: true,
      },
      { id: 'c', text: 'Increase vocal fold adduction during the swallow', isCorrect: false },
      { id: 'd', text: 'Improve bolus formation within the oral cavity', isCorrect: false },
    ],
    explanation:
      'The Mendelsohn maneuver involves voluntarily prolonging laryngeal elevation at the peak of the swallow. This extended hyolaryngeal excursion increases the duration and extent of upper esophageal sphincter (UES) opening, facilitating bolus clearance through the pharyngoesophageal segment.',
    incorrectExplanations: {
      a: 'Tongue base retraction exercises (e.g., Masako maneuver) target tongue base-to-pharyngeal wall contact, not the Mendelsohn.',
      c: 'Vocal fold adduction during swallowing is addressed by supraglottic and super-supraglottic swallow maneuvers.',
      d: 'Oral bolus formation is addressed through lingual strengthening exercises, not the Mendelsohn maneuver.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Rehabilitative Exercises',
    bigNine: ['Dysphagia'],
    difficulty: 'recall',
    tags: ['Mendelsohn maneuver', 'dysphagia', 'rehabilitative', 'UES opening'],
    clinicalSetting: null,
    referenceSources: ['Logemann, J.A. (1998). Evaluation and Treatment of Swallowing Disorders'],
  },
  {
    id: 'c3-q003',
    stem: 'In the IDDSI framework, Level 4 corresponds to which food texture?',
    options: [
      { id: 'a', text: 'Minced & Moist', isCorrect: false },
      { id: 'b', text: 'Pureed', isCorrect: true },
      { id: 'c', text: 'Soft & Bite-Sized', isCorrect: false },
      { id: 'd', text: 'Liquidised', isCorrect: false },
    ],
    explanation:
      'IDDSI Level 4 is Pureed. The IDDSI framework uses levels 0–7 for drinks and foods. Level 4 (Pureed) describes food that requires no chewing, is smooth with no lumps, and holds its shape on a spoon but falls off when the spoon is tilted. It can be piped, layered, or molded.',
    incorrectExplanations: {
      a: 'Minced & Moist is IDDSI Level 5, which allows particles up to 4 mm.',
      c: 'Soft & Bite-Sized is IDDSI Level 6, which allows pieces up to 15 mm.',
      d: 'Liquidised is IDDSI Level 3, which is a thick, pourable texture with no lumps.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — IDDSI Framework',
    bigNine: ['Dysphagia'],
    difficulty: 'recall',
    tags: ['IDDSI', 'dysphagia', 'diet modification', 'food texture'],
    clinicalSetting: null,
    referenceSources: ['IDDSI Framework (iddsi.org)'],
  },
  {
    id: 'c3-q004',
    stem: 'LSVT LOUD is an intensive voice treatment originally developed for individuals with:',
    options: [
      { id: 'a', text: 'Unilateral vocal fold paralysis', isCorrect: false },
      { id: 'b', text: 'Spasmodic dysphonia', isCorrect: false },
      { id: 'c', text: 'Parkinson disease', isCorrect: true },
      { id: 'd', text: 'Muscle tension dysphonia', isCorrect: false },
    ],
    explanation:
      'LSVT LOUD (Lee Silverman Voice Treatment) was specifically developed for individuals with Parkinson disease to address hypophonia. The program is delivered as 16 sessions over 4 weeks (4 sessions per week) and focuses on a single target: increasing vocal loudness ("Think LOUD!"). It has the strongest evidence base for voice treatment in Parkinson disease.',
    incorrectExplanations: {
      a: 'Unilateral vocal fold paralysis is typically managed with medialization procedures or vocal function exercises, not LSVT LOUD.',
      b: 'Spasmodic dysphonia is a neurological voice disorder often treated with botulinum toxin injections, not LSVT LOUD.',
      d: 'Muscle tension dysphonia is treated with laryngeal massage, resonant voice therapy, or circumlaryngeal manual therapy—not LSVT LOUD.',
    },
    contentCategory: 'III',
    subcategory: 'Voice Treatment — Named Programs',
    bigNine: ['Voice'],
    difficulty: 'recall',
    tags: ['LSVT LOUD', 'Parkinson disease', 'voice treatment', 'hypophonia'],
    clinicalSetting: null,
    referenceSources: ['Ramig, L.O., et al. (2001). LSVT: A practical guide'],
  },
  {
    id: 'c3-q005',
    stem: 'The Lidcombe Program is a behavioral treatment primarily used for:',
    options: [
      {
        id: 'a',
        text: 'School-age children who stutter with concomitant language delays',
        isCorrect: false,
      },
      { id: 'b', text: 'Preschool-age children who stutter', isCorrect: true },
      { id: 'c', text: 'Adolescents with cluttering', isCorrect: false },
      { id: 'd', text: 'Adults with acquired neurogenic stuttering', isCorrect: false },
    ],
    explanation:
      'The Lidcombe Program is an operant-based, parent-delivered stuttering treatment designed for preschool-age children (typically under 6 years). Parents provide verbal contingencies for stutter-free speech (praise) and, less frequently, for stuttered speech (acknowledgment/correction) during structured daily practice and in natural conversation.',
    incorrectExplanations: {
      a: 'While school-age children who stutter may benefit from behavioral approaches, the Lidcombe Program was specifically developed and has its strongest evidence for preschool-age children.',
      c: 'Cluttering is a distinct fluency disorder requiring different treatment approaches focused on rate control and self-monitoring.',
      d: 'Acquired neurogenic stuttering in adults requires different treatment approaches tailored to the underlying neurological condition.',
    },
    contentCategory: 'III',
    subcategory: 'Fluency Treatment — Named Programs',
    bigNine: ['Fluency'],
    difficulty: 'recall',
    tags: ['Lidcombe Program', 'stuttering', 'fluency', 'preschool', 'parent-delivered'],
    clinicalSetting: null,
    referenceSources: [
      'Onslow, M., Packman, A., & Harrison, E. (2003). The Lidcombe Program of Early Stuttering Intervention',
    ],
  },
  {
    id: 'c3-q006',
    stem: 'Expiratory Muscle Strength Training (EMST) targets improvement in which of the following?',
    options: [
      { id: 'a', text: 'Inspiratory volume and respiratory endurance', isCorrect: false },
      {
        id: 'b',
        text: 'Maximum expiratory pressure, cough effectiveness, and swallowing safety',
        isCorrect: true,
      },
      { id: 'c', text: 'Phonation threshold pressure only', isCorrect: false },
      { id: 'd', text: 'Diaphragmatic excursion and lung compliance', isCorrect: false },
    ],
    explanation:
      'EMST uses a calibrated pressure-threshold device to overload expiratory muscles. Research demonstrates improvements in maximum expiratory pressure (MEP), subglottic pressure generation, cough effectiveness (important for airway protection), and hyolaryngeal excursion during swallowing. It has been studied in Parkinson disease, ALS, stroke, and healthy aging populations.',
    incorrectExplanations: {
      a: 'EMST targets expiratory muscles specifically. Inspiratory muscle strength training (IMST) would target inspiratory volume.',
      c: 'While EMST can improve phonation threshold pressure, its benefits extend to cough effectiveness and swallowing safety—it is not limited to phonation.',
      d: 'Diaphragmatic excursion and lung compliance are primarily respiratory therapy targets, not the primary focus of EMST.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Rehabilitative Exercises',
    bigNine: ['Dysphagia', 'Voice'],
    difficulty: 'recall',
    tags: ['EMST', 'expiratory muscle strength', 'dysphagia', 'cough', 'airway protection'],
    clinicalSetting: null,
    referenceSources: [
      'Pitts, T., et al. (2009). Impact of EMST on voluntary cough and swallow function in Parkinson disease',
    ],
  },
  {
    id: 'c3-q007',
    stem: 'Which level of evidence is considered the HIGHEST in the evidence hierarchy for treatment efficacy?',
    options: [
      { id: 'a', text: 'Single randomized controlled trial', isCorrect: false },
      { id: 'b', text: 'Systematic review with meta-analysis of multiple RCTs', isCorrect: true },
      { id: 'c', text: 'Large cohort study with long-term follow-up', isCorrect: false },
      { id: 'd', text: 'Expert consensus panel report', isCorrect: false },
    ],
    explanation:
      'In the evidence hierarchy, systematic reviews and meta-analyses of multiple high-quality randomized controlled trials represent the highest level of evidence (Level I). They synthesize findings across studies to provide the most robust estimate of treatment effect, reducing bias from individual studies.',
    incorrectExplanations: {
      a: 'A single RCT represents Level II evidence. While strong, it cannot account for variability across settings and populations the way a systematic review of multiple RCTs can.',
      c: 'Cohort studies are observational designs (Level III-IV) and are subject to confounding variables that RCTs control for.',
      d: 'Expert consensus represents the lowest level of evidence (Level V) because it is based on clinical opinion rather than empirical data.',
    },
    contentCategory: 'III',
    subcategory: 'Evidence-Based Practice — Evidence Hierarchy',
    bigNine: [],
    difficulty: 'recall',
    tags: ['evidence-based practice', 'evidence hierarchy', 'systematic review', 'meta-analysis'],
    clinicalSetting: null,
    referenceSources: ['Sackett, D.L., et al. (2000). Evidence-Based Medicine'],
  },
  {
    id: 'c3-q008',
    stem: 'The Masako maneuver (tongue-hold swallow) is designed to strengthen which structure?',
    options: [
      { id: 'a', text: 'Bilateral pharyngeal constrictors', isCorrect: false },
      { id: 'b', text: 'Posterior tongue base and pharyngeal wall approximation', isCorrect: true },
      { id: 'c', text: 'Cricopharyngeus muscle', isCorrect: false },
      { id: 'd', text: 'Suprahyoid musculature', isCorrect: false },
    ],
    explanation:
      'The Masako maneuver (tongue-hold swallow) involves holding the tongue tip between the teeth while swallowing. By anchoring the tongue anteriorly, the posterior pharyngeal wall must work harder to make contact with the tongue base during the pharyngeal phase, thereby strengthening this compensatory movement. It should be performed as an exercise, not during meals.',
    incorrectExplanations: {
      a: 'While the pharyngeal constrictors participate in swallowing, the Masako specifically targets increased posterior pharyngeal wall movement toward the tongue base.',
      c: 'The cricopharyngeus (UES) is targeted by exercises like the Shaker or Mendelsohn maneuver, not the Masako.',
      d: 'The suprahyoid muscles are targeted by the Shaker exercise and chin tuck against resistance, not the Masako maneuver.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Rehabilitative Exercises',
    bigNine: ['Dysphagia'],
    difficulty: 'recall',
    tags: ['Masako maneuver', 'tongue-hold swallow', 'dysphagia', 'pharyngeal wall'],
    clinicalSetting: null,
    referenceSources: [
      'Fujiu, M., & Logemann, J.A. (1996). Effect of a tongue-holding maneuver on posterior pharyngeal wall movement',
    ],
  },

  // ─── APPLICATION (35%) — Questions 9–26 ─────────────────────────────────────

  {
    id: 'c3-q009',
    stem: 'A 68-year-old male with Parkinson disease presents with a breathy, monotone voice and reduced loudness. His wife reports she frequently asks him to repeat himself. Which treatment approach has the STRONGEST evidence for this presentation?',
    options: [
      {
        id: 'a',
        text: 'Resonant voice therapy with semi-occluded vocal tract exercises',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'LSVT LOUD delivered as 16 sessions over 4 consecutive weeks',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Pitch glides and vocal range expansion exercises 3 times per week',
        isCorrect: false,
      },
      { id: 'd', text: 'Conversation training with rate reduction strategies', isCorrect: false },
    ],
    explanation:
      'LSVT LOUD has the strongest evidence base for treating hypophonia in Parkinson disease. The intensive schedule (4 days per week for 4 weeks = 16 sessions) is a defining feature of the program. It targets a single motor variable—vocal loudness—and uses principles of motor learning including high effort, intensive practice, and self-calibration of loudness.',
    incorrectExplanations: {
      a: 'Resonant voice therapy is effective for muscle tension dysphonia and vocal fatigue but does not have the same evidence base for Parkinson-related hypophonia as LSVT LOUD.',
      c: 'Pitch glide exercises may be appropriate for some voice disorders but do not address the core issue of hypokinetic dysarthria in Parkinson disease.',
      d: 'Rate reduction strategies are used in some dysarthria treatments but do not target the primary deficit of reduced loudness in Parkinson disease.',
    },
    contentCategory: 'III',
    subcategory: 'Voice Treatment — Named Programs',
    bigNine: ['Voice'],
    difficulty: 'application',
    tags: ['LSVT LOUD', 'Parkinson disease', 'hypophonia', 'evidence-based treatment'],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: ['Ramig, L.O., et al. (2001)', 'ASHA Practice Portal: Voice Disorders'],
  },
  {
    id: 'c3-q010',
    stem: 'An SLP is writing a treatment goal for a 4-year-old child with a phonological disorder who deletes all final consonants. Which of the following is the BEST example of a measurable, functional SMART goal?',
    options: [
      {
        id: 'a',
        text: 'The child will improve final consonant production in conversation',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Given minimal pair activities, the child will produce final consonants in CVC words with 80% accuracy across 3 consecutive sessions',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'The child will produce /t, d, n/ in all word positions within 6 months',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'The child will demonstrate awareness of final consonants by pointing to correct pictures',
        isCorrect: false,
      },
    ],
    explanation:
      'This goal meets all SMART criteria: Specific (final consonants in CVC words), Measurable (80% accuracy), Achievable (appropriate for age and pattern), Relevant (functional for intelligibility), and Time-bound (implied by the criterion of 3 consecutive sessions). It also specifies the condition (minimal pair activities).',
    incorrectExplanations: {
      a: 'This goal lacks measurability—"improve" is vague, and there is no criterion level, condition, or time frame specified.',
      c: 'While this goal includes specific sounds and a time frame, it lacks a measurable criterion (percentage accuracy) and condition.',
      d: "This goal targets receptive identification rather than the production deficit. The treatment target should address the child's expressive phonological pattern of final consonant deletion.",
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — SMART Goals',
    bigNine: ['Articulation/Phonology'],
    difficulty: 'application',
    tags: ['SMART goals', 'phonological disorder', 'goal writing', 'final consonant deletion'],
    clinicalSetting: 'school-based',
    referenceSources: ['ASHA Practice Portal: Speech Sound Disorders'],
  },
  {
    id: 'c3-q011',
    stem: 'A patient who had a left CVA 3 weeks ago presents with Broca aphasia. During a modified barium swallow study, the SLP observes premature spillage of thin liquids into the pharynx before the swallow is triggered, with penetration to the level of the vocal folds. Which compensatory strategy should the SLP trial FIRST?',
    options: [
      { id: 'a', text: 'Chin tuck posture during liquid intake', isCorrect: true },
      { id: 'b', text: 'Head rotation to the left side', isCorrect: false },
      { id: 'c', text: 'Supraglottic swallow technique', isCorrect: false },
      { id: 'd', text: 'Thickening all liquids to IDDSI Level 3', isCorrect: false },
    ],
    explanation:
      'Chin tuck is the most appropriate first compensatory trial for premature pharyngeal spillage with penetration. The chin tuck widens the valleculae (providing more holding space), narrows the airway entrance, and pushes the tongue base posteriorly, all of which help prevent premature spillage from entering the airway. It is a simple postural adjustment that can be trialed during the instrumental exam.',
    incorrectExplanations: {
      b: "Head rotation is used to redirect the bolus toward the stronger side or to compensate for unilateral pharyngeal weakness. This patient's issue is premature spillage, not lateralized weakness.",
      c: "While the supraglottic swallow protects the airway, it requires the patient to follow a complex multi-step sequence. Given this patient's Broca aphasia, comprehension of complex instructions may be impaired, making chin tuck a better first trial.",
      d: 'Diet modification to thickened liquids may be appropriate if compensatory strategies fail, but it should not be the first intervention trialed during the MBSS when postural strategies can be tested.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Compensatory Strategies',
    bigNine: ['Dysphagia'],
    difficulty: 'application',
    tags: ['chin tuck', 'compensatory strategy', 'MBSS', 'premature spillage', 'penetration'],
    clinicalSetting: 'acute care hospital',
    referenceSources: ['Logemann, J.A. (1998)', 'Shanahan, T.K., et al. (1993)'],
  },
  {
    id: 'c3-q012',
    stem: 'An SLP is implementing Semantic Feature Analysis (SFA) with a 55-year-old patient with anomic aphasia. During a naming task, the patient cannot retrieve the word "hammer." Which set of prompts BEST represents the SFA approach?',
    options: [
      {
        id: 'a',
        text: '"It starts with /h/. It rhymes with glamour. Say hammer."',
        isCorrect: false,
      },
      {
        id: 'b',
        text: '"What group does it belong to? What does it look like? What do you use it for? Where do you find it?"',
        isCorrect: true,
      },
      {
        id: 'c',
        text: '"Point to the hammer. Now say the word three times quickly."',
        isCorrect: false,
      },
      { id: 'd', text: '"Complete this sentence: You pound a nail with a ___."', isCorrect: false },
    ],
    explanation:
      'Semantic Feature Analysis (SFA) activates the semantic network surrounding a target word by prompting the patient to generate features across multiple categories: group/category, physical properties, function/use, location, and association. This spreading activation is theorized to strengthen retrieval pathways and has evidence supporting generalization to untrained words in anomic aphasia.',
    incorrectExplanations: {
      a: 'This describes phonological cueing (initial sound, rhyme) and direct imitation—a phonological approach rather than semantic feature analysis.',
      c: 'Pointing and repetition represent receptive identification and motor practice, not the semantic network activation central to SFA.',
      d: 'Sentence completion is a cloze task that provides contextual cueing but does not systematically activate the semantic feature network as SFA does.',
    },
    contentCategory: 'III',
    subcategory: 'Aphasia Treatment — Named Programs',
    bigNine: ['Aphasia/Neurogenic Language'],
    difficulty: 'application',
    tags: ['SFA', 'semantic feature analysis', 'anomic aphasia', 'word retrieval'],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: ['Boyle, M. (2004). Semantic feature analysis treatment for anomia'],
  },
  {
    id: 'c3-q013',
    stem: 'A 3-year-old child with autism spectrum disorder has no functional spoken words and limited gestural communication. The child demonstrates good visual matching skills and can discriminate among photographs. Which AAC approach is MOST appropriate to implement initially?',
    options: [
      {
        id: 'a',
        text: 'A comprehensive speech-generating device with dynamic display and robust vocabulary',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Picture Exchange Communication System (PECS) beginning at Phase I',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'A low-tech communication board with 50+ symbols organized by category',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Sign language instruction focusing on 20 core vocabulary signs',
        isCorrect: false,
      },
    ],
    explanation:
      'PECS Phase I teaches the communicative exchange itself—the child learns to pick up a picture and hand it to a communication partner to request a desired item. This is appropriate because the child has good visual skills, the approach builds on requesting (a high-motivation function), and it systematically teaches the initiation component that is often challenging for children with ASD. PECS has strong evidence for this population.',
    incorrectExplanations: {
      a: 'While a speech-generating device may be appropriate eventually, starting with a comprehensive dynamic display system would be too complex for a child who has not yet learned the communicative exchange process.',
      c: 'A 50+ symbol board assumes the child already understands how to use symbols communicatively. This child needs to learn the fundamental act of communication exchange first.',
      d: "Sign language requires motor imitation skills and a communication partner who understands signs. The child's strength in visual matching makes a picture-based system more immediately accessible.",
    },
    contentCategory: 'III',
    subcategory: 'AAC Implementation',
    bigNine: ['AAC'],
    difficulty: 'application',
    tags: ['PECS', 'AAC', 'autism spectrum disorder', 'preschool', 'functional communication'],
    clinicalSetting: 'early intervention',
    referenceSources: [
      'Bondy, A., & Frost, L. (2001). PECS Training Manual',
      'ASHA Practice Portal: AAC',
    ],
  },
  {
    id: 'c3-q014',
    stem: 'An SLP is treating an adult with chronic moderate Broca aphasia who wants to order food independently at restaurants. Which treatment approach MOST directly addresses this functional goal?',
    options: [
      {
        id: 'a',
        text: 'Melodic Intonation Therapy to improve verbal output length',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Script training using personalized restaurant ordering scripts',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Confrontation naming of food items using a semantic cueing hierarchy',
        isCorrect: false,
      },
      { id: 'd', text: 'PACE therapy with picture description tasks', isCorrect: false },
    ],
    explanation:
      'Script training directly addresses functional communication goals by having the patient practice specific, personally relevant scripts until they become automatic. For restaurant ordering, the SLP would develop scripts like "I\'d like the..." or "Can I have the..." that the patient rehearses to fluency. Research by Cherney and colleagues demonstrates that script training promotes automaticity and participation in targeted real-life situations.',
    incorrectExplanations: {
      a: 'MIT targets nonfluent verbal output using melodic intoning and is most appropriate for severely nonfluent patients. It does not directly target functional restaurant ordering.',
      c: 'Confrontation naming of food items addresses word retrieval but not the conversational exchange required for ordering at a restaurant.',
      d: 'PACE therapy targets general communicative effectiveness but does not train the specific scripts needed for independent restaurant ordering.',
    },
    contentCategory: 'III',
    subcategory: 'Aphasia Treatment — Named Programs',
    bigNine: ['Aphasia/Neurogenic Language'],
    difficulty: 'application',
    tags: ['script training', 'Broca aphasia', 'functional communication', 'life participation'],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: [
      'Cherney, L.R., et al. (2008). Script training: An approach to aphasia treatment',
    ],
  },
  {
    id: 'c3-q015',
    stem: 'During a FEES, an SLP observes that a patient with a recent right CVA has significant pharyngeal residue in the right pyriform sinus after each swallow, with left-sided pharyngeal clearance appearing adequate. Which compensatory strategy should the SLP trial?',
    options: [
      { id: 'a', text: 'Head tilt to the left', isCorrect: false },
      { id: 'b', text: 'Head rotation to the right', isCorrect: true },
      { id: 'c', text: 'Head rotation to the left', isCorrect: false },
      { id: 'd', text: 'Effortful swallow with chin tuck', isCorrect: false },
    ],
    explanation:
      'Head rotation toward the damaged/weak side (right) closes the pyriform sinus on that side and redirects the bolus toward the stronger (left) side. Since the FEES showed residue in the right pyriform sinus with adequate left-sided clearance, rotating the head to the right directs the bolus through the functioning left pharyngeal channel.',
    incorrectExplanations: {
      a: 'Head tilt to the left uses gravity to direct the bolus to the left side and is used for oral-stage unilateral weakness. Head rotation is the preferred strategy for pharyngeal-stage unilateral weakness.',
      c: 'Rotating to the left would close the stronger left side and direct the bolus toward the weaker right side, worsening the residue problem.',
      d: 'While effortful swallow may help with overall pharyngeal clearance, it does not specifically address unilateral pharyngeal weakness. Head rotation is the most targeted compensatory approach here.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Compensatory Strategies',
    bigNine: ['Dysphagia'],
    difficulty: 'application',
    tags: [
      'head rotation',
      'compensatory strategy',
      'pharyngeal residue',
      'FEES',
      'unilateral weakness',
    ],
    clinicalSetting: 'acute care hospital',
    referenceSources: ['Logemann, J.A. (1998)', 'ASHA Practice Portal: Adult Dysphagia'],
  },
  {
    id: 'c3-q016',
    stem: 'A 5-year-old with a moderate-severe phonological disorder produces /t/ for /k/ and /d/ for /g/ in all word positions. The SLP has chosen to target /k/ in initial position. Which treatment approach uses minimal pairs to create communicative conflict that motivates sound change?',
    options: [
      { id: 'a', text: 'Cycles Approach', isCorrect: false },
      {
        id: 'b',
        text: 'Traditional articulation approach with phonetic placement',
        isCorrect: false,
      },
      { id: 'c', text: 'Minimal pairs contrast therapy', isCorrect: true },
      { id: 'd', text: 'Core vocabulary approach', isCorrect: false },
    ],
    explanation:
      'Minimal pairs contrast therapy (also called meaningful minimal pairs) presents word pairs that differ by only the target contrast (e.g., "tea" vs. "key," "toe" vs. "go"). When the child produces /t/ for /k/, the listener selects the wrong picture, creating communicative failure that motivates the child to modify their production. This approach leverages the linguistic function of phonemic contrasts.',
    incorrectExplanations: {
      a: 'The Cycles Approach targets phonological patterns through auditory bombardment and production practice on a cyclical schedule. It does not rely on communicative conflict from minimal pairs.',
      b: 'The traditional approach focuses on motor placement and shaping of individual sounds through a hierarchy. It does not use communicative conflict to drive phonological reorganization.',
      d: 'The core vocabulary approach targets whole-word accuracy for individually selected high-frequency words. It is designed for children with inconsistent speech disorder, not systematic phonological patterns.',
    },
    contentCategory: 'III',
    subcategory: 'Speech Sound Treatment — Approaches',
    bigNine: ['Articulation/Phonology'],
    difficulty: 'application',
    tags: ['minimal pairs', 'phonological disorder', 'velar fronting', 'contrast therapy'],
    clinicalSetting: 'school-based',
    referenceSources: ['Barlow, J.A., & Gierut, J.A. (2002)'],
  },
  {
    id: 'c3-q017',
    stem: 'An SLP is developing a Hanen "It Takes Two to Talk" program for parents of a 2-year-old with language delay. Which of the following BEST represents a core strategy taught in this program?',
    options: [
      {
        id: 'a',
        text: 'Parents drill 10 target words daily using flashcards and imitation prompts',
        isCorrect: false,
      },
      {
        id: 'b',
        text: "Parents follow the child's lead, wait for communication attempts, and respond by adding language",
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Parents withhold desired items to force verbal requests',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Parents use structured ABA discrete trial training during play',
        isCorrect: false,
      },
    ],
    explanation:
      'The Hanen "It Takes Two to Talk" program teaches parents responsive interaction strategies summarized as OWL: Observe, Wait, Listen. Parents learn to follow the child\'s lead during natural interactions, wait for the child to initiate communication, and respond by matching their language to the child\'s level while adding slightly more complex language (expansion and extension). This approach aligns with social-interactionist language learning theory.',
    incorrectExplanations: {
      a: 'Flashcard drills and imitation prompts represent a clinician-directed approach, which contradicts the Hanen philosophy of child-led, naturalistic interaction.',
      c: 'Withholding items to force verbal requests is a structured behavioral strategy (environmental arrangement/communication temptation) but not the responsive interaction approach central to Hanen.',
      d: 'Discrete trial training is an ABA methodology that uses structured teaching episodes. The Hanen program emphasizes naturalistic, parent-mediated interaction.',
    },
    contentCategory: 'III',
    subcategory: 'Language Treatment — Named Programs',
    bigNine: ['Child Language'],
    difficulty: 'application',
    tags: [
      'Hanen',
      'It Takes Two to Talk',
      'parent-mediated',
      'language delay',
      'early intervention',
    ],
    clinicalSetting: 'early intervention',
    referenceSources: ['Pepper, J., & Weitzman, E. (2004). It Takes Two to Talk'],
  },
  {
    id: 'c3-q018',
    stem: 'A patient 6 weeks post-total laryngectomy is ready to begin alaryngeal speech training. The patient has adequate stoma care skills, good manual dexterity, and is motivated to communicate immediately in social settings. Which alaryngeal speech method should be introduced FIRST?',
    options: [
      { id: 'a', text: 'Esophageal speech', isCorrect: false },
      { id: 'b', text: 'Tracheoesophageal puncture (TEP) with voice prosthesis', isCorrect: false },
      { id: 'c', text: 'Artificial (electrolarynx) speech', isCorrect: true },
      { id: 'd', text: 'Buccal speech', isCorrect: false },
    ],
    explanation:
      'The electrolarynx (artificial larynx) is typically introduced first because it provides immediate functional communication with relatively little training. Given that the patient wants to communicate immediately in social settings, the electrolarynx offers the quickest path to functional speech. Esophageal speech and TEP speech are also options but require more time to learn or surgical placement, respectively.',
    incorrectExplanations: {
      a: "Esophageal speech requires significant practice to master air intake and controlled release. It typically takes weeks to months to develop functional esophageal speech, which does not meet this patient's immediate communication needs.",
      b: 'While TEP with voice prosthesis often produces the most natural-sounding alaryngeal speech, it requires a surgical procedure (if not done during laryngectomy) and fitting of a prosthesis. The question states the patient is 6 weeks post-surgery and wants immediate communication.',
      d: "Buccal speech uses air trapped in the oral cavity and produces very limited, quiet speech. It is not a primary alaryngeal speech method and would not meet the patient's functional communication needs.",
    },
    contentCategory: 'III',
    subcategory: 'Voice Treatment — Alaryngeal Speech',
    bigNine: ['Voice'],
    difficulty: 'application',
    tags: ['alaryngeal speech', 'electrolarynx', 'laryngectomy', 'voice rehabilitation'],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: [
      'Doyle, P.C. (2005). Clinical procedures for training use of the electrolarynx',
    ],
  },
  {
    id: 'c3-q019',
    stem: 'An SLP is treating a 70-year-old patient with oropharyngeal dysphagia following a brainstem stroke. The patient demonstrates reduced hyolaryngeal excursion on videofluoroscopy. Which rehabilitative exercise MOST directly targets this deficit?',
    options: [
      { id: 'a', text: 'Masako maneuver', isCorrect: false },
      { id: 'b', text: 'Shaker exercise', isCorrect: true },
      { id: 'c', text: 'Effortful swallow', isCorrect: false },
      { id: 'd', text: 'Supraglottic swallow', isCorrect: false },
    ],
    explanation:
      'The Shaker exercise (head-lift exercise) specifically targets the suprahyoid muscles responsible for hyolaryngeal excursion and UES opening. The exercise involves sustained and repetitive head lifts from a supine position. Research by Shaker and colleagues demonstrated that this exercise increases anterior hyoid excursion and UES opening diameter, directly addressing reduced hyolaryngeal excursion.',
    incorrectExplanations: {
      a: 'The Masako maneuver targets tongue base retraction and posterior pharyngeal wall movement, not hyolaryngeal excursion.',
      c: 'The effortful swallow increases overall pharyngeal pressure and tongue base retraction but does not specifically target suprahyoid muscle strengthening for hyolaryngeal excursion.',
      d: 'The supraglottic swallow is a compensatory technique for airway protection (voluntary breath hold before and during swallow). It does not strengthen the muscles responsible for hyolaryngeal excursion.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Rehabilitative Exercises',
    bigNine: ['Dysphagia'],
    difficulty: 'application',
    tags: ['Shaker exercise', 'hyolaryngeal excursion', 'dysphagia', 'rehabilitative'],
    clinicalSetting: 'inpatient rehabilitation',
    referenceSources: [
      'Shaker, R., et al. (2002). Rehabilitation of swallowing by exercise in tube-fed patients',
    ],
  },
  {
    id: 'c3-q020',
    stem: 'A school-age child who stutters is being treated using the Camperdown Program. Which element is central to this approach?',
    options: [
      {
        id: 'a',
        text: 'Parents deliver verbal contingencies for stutter-free speech',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'The clinician teaches prolonged speech that the client self-rates and adjusts for naturalness',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Desensitization through voluntary stuttering and pseudostuttering exercises',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Cognitive restructuring of negative attitudes about communication',
        isCorrect: false,
      },
    ],
    explanation:
      'The Camperdown Program teaches prolonged speech (using model speech from a video exemplar) and then has the client self-rate their speech on two scales: stuttering severity and speech naturalness. The client learns to adjust their use of prolonged speech to achieve a balance between fluency and natural-sounding speech. Self-monitoring and self-evaluation are central to the program.',
    incorrectExplanations: {
      a: 'Parent-delivered verbal contingencies describe the Lidcombe Program, which is designed for preschool-age children who stutter.',
      c: 'Voluntary stuttering and desensitization are components of stuttering modification approaches (e.g., Van Riper therapy), not the Camperdown Program.',
      d: 'Cognitive restructuring is associated with cognitive-behavioral therapy approaches to stuttering. The Camperdown Program focuses on speech technique and self-monitoring.',
    },
    contentCategory: 'III',
    subcategory: 'Fluency Treatment — Named Programs',
    bigNine: ['Fluency'],
    difficulty: 'application',
    tags: ['Camperdown Program', 'fluency treatment', 'prolonged speech', 'self-monitoring'],
    clinicalSetting: 'outpatient clinic',
    referenceSources: ["O'Brian, S., et al. (2003). The Camperdown Program"],
  },
  {
    id: 'c3-q021',
    stem: 'An SLP is recommending a liquid consistency for a patient whose FEES shows trace penetration of thin liquids but safe swallowing with mildly thick liquids. According to the IDDSI framework, which level should the SLP recommend?',
    options: [
      { id: 'a', text: 'Level 0 — Thin', isCorrect: false },
      { id: 'b', text: 'Level 1 — Slightly Thick', isCorrect: true },
      { id: 'c', text: 'Level 2 — Mildly Thick', isCorrect: false },
      { id: 'd', text: 'Level 3 — Moderately Thick', isCorrect: false },
    ],
    explanation:
      'IDDSI Level 1 (Slightly Thick) represents the least restrictive modification that may address trace penetration while maintaining quality of life. The patient demonstrated safe swallowing with mildly thick liquids (Level 2), so the SLP should trial Level 1 first as it is closer to thin liquids and less restrictive. The principle of least restrictive diet modification should guide the recommendation.',
    incorrectExplanations: {
      a: 'Level 0 (Thin) is the consistency that caused penetration. Recommending thin liquids would not address the observed swallowing safety concern.',
      c: 'While Level 2 was demonstrated to be safe, recommending it without first trialing Level 1 would be more restrictive than necessary. The principle of least restrictive modification applies.',
      d: 'Level 3 (Moderately Thick) is significantly more restrictive than what this patient needs. The patient only showed trace penetration with thin liquids.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — IDDSI Framework',
    bigNine: ['Dysphagia'],
    difficulty: 'application',
    tags: ['IDDSI', 'liquid consistency', 'FEES', 'least restrictive', 'diet modification'],
    clinicalSetting: 'acute care hospital',
    referenceSources: ['IDDSI Framework (iddsi.org)', 'ASHA Practice Portal: Adult Dysphagia'],
  },
  {
    id: 'c3-q022',
    stem: 'An SLP is implementing VNeST (Verb Network Strengthening Treatment) with a patient with aphasia. Which of the following BEST describes the treatment protocol?',
    options: [
      {
        id: 'a',
        text: 'The patient generates agent-verb-patient thematic role combinations for target verbs and answers related semantic questions',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'The patient names pictures of actions and describes the steps involved in each action',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'The patient practices repeating verb phrases with increasing length and complexity',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'The patient matches written verbs to corresponding pictures in a timed task',
        isCorrect: false,
      },
    ],
    explanation:
      'VNeST focuses on activating verb networks by having the patient generate thematic role combinations: who (agent) does what (verb) to whom/what (patient). For example, for the verb "measure," the patient might generate "carpenter-measure-board" and "tailor-measure-fabric." The patient also answers wh-questions about each combination (Where? Why?). This strengthens the verb\'s semantic network and has been shown to generalize to untrained words.',
    incorrectExplanations: {
      b: "Describing action steps is more consistent with a script training or procedural discourse approach, not VNeST's structured thematic role generation.",
      c: 'Repeating verb phrases with increasing complexity is a verbal production hierarchy, not the semantic network activation approach used in VNeST.',
      d: 'Timed matching tasks are more consistent with speed-accuracy assessment than the generative semantic activation central to VNeST.',
    },
    contentCategory: 'III',
    subcategory: 'Aphasia Treatment — Named Programs',
    bigNine: ['Aphasia/Neurogenic Language'],
    difficulty: 'application',
    tags: ['VNeST', 'aphasia', 'verb network', 'word retrieval', 'semantic therapy'],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: [
      'Edmonds, L.A., et al. (2009). VNeST: A new approach to treating lexical retrieval in aphasia',
    ],
  },
  {
    id: 'c3-q023',
    stem: 'A 7-year-old child with childhood apraxia of speech (CAS) produces "nana" for "banana" and "puter" for "computer." The SLP wants to use PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets). Which statement BEST describes this approach?',
    options: [
      {
        id: 'a',
        text: 'The SLP provides auditory bombardment with the target words followed by repeated imitation',
        isCorrect: false,
      },
      {
        id: 'b',
        text: "The SLP uses tactile-kinesthetic cues on the face, jaw, and lips to guide the child's articulatory movements",
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'The SLP teaches the child phonological awareness skills to support self-correction',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'The SLP uses a visual biofeedback system showing real-time acoustic spectrograms',
        isCorrect: false,
      },
    ],
    explanation:
      "PROMPT is a tactile-kinesthetic approach in which the clinician uses touch cues on the client's face, jaw, and oral structures to guide and shape articulatory movements. The tactile input provides spatial and timing information about where and how articulators should move. It is particularly appropriate for children with CAS because it bypasses the motor planning deficit by providing external sensory guidance for movement sequences.",
    incorrectExplanations: {
      a: 'Auditory bombardment with imitation describes aspects of the Cycles Approach for phonological disorders, not the tactile-kinesthetic cueing system of PROMPT.',
      c: 'Teaching phonological awareness is a metalinguistic approach that does not address the motor planning deficit underlying CAS.',
      d: 'Visual biofeedback with spectrograms is a different treatment modality. PROMPT specifically uses tactile-kinesthetic (touch-based) input, not visual feedback.',
    },
    contentCategory: 'III',
    subcategory: 'Speech Sound Treatment — Named Programs',
    bigNine: ['Articulation/Phonology'],
    difficulty: 'application',
    tags: ['PROMPT', 'CAS', 'childhood apraxia of speech', 'tactile-kinesthetic'],
    clinicalSetting: 'private practice',
    referenceSources: [
      'Hayden, D.A. (2006). The PROMPT model: Use and application for children with mixed phonological-motor impairment',
    ],
  },
  {
    id: 'c3-q024',
    stem: 'An SLP on an acute care team is determining the prognosis for a 72-year-old patient with a large left MCA stroke resulting in global aphasia. The patient is 10 days post-onset, has a prior history of a smaller right-hemisphere stroke, and has diabetes and hypertension. Which factor is MOST predictive of a poorer long-term prognosis for language recovery?',
    options: [
      { id: 'a', text: "The patient's age of 72 years", isCorrect: false },
      { id: 'b', text: 'The large lesion size in the left MCA distribution', isCorrect: true },
      { id: 'c', text: 'The presence of diabetes and hypertension', isCorrect: false },
      { id: 'd', text: 'The short time post-onset of 10 days', isCorrect: false },
    ],
    explanation:
      'Lesion size is one of the strongest predictors of aphasia recovery. A large lesion in the left MCA distribution (affecting multiple language areas—Broca, Wernicke, arcuate fasciculus, surrounding cortex) resulting in global aphasia is associated with the poorest prognosis for language recovery. While age, comorbidities, and bilateral damage also influence prognosis, lesion size and location are the most powerful predictors.',
    incorrectExplanations: {
      a: 'While older age is associated with somewhat slower recovery, age alone is not as strong a predictor as lesion size. Many individuals in their 70s make meaningful recovery from aphasia.',
      c: 'Diabetes and hypertension are risk factors for stroke and general health complications, but they are not as directly predictive of language recovery as the extent of the brain lesion.',
      d: 'Being only 10 days post-onset is actually favorable—the patient is early in the recovery window when spontaneous recovery is most active.',
    },
    contentCategory: 'III',
    subcategory: 'Prognosis — Factors Affecting Recovery',
    bigNine: ['Aphasia/Neurogenic Language'],
    difficulty: 'application',
    tags: ['prognosis', 'aphasia', 'stroke recovery', 'lesion size', 'global aphasia'],
    clinicalSetting: 'acute care hospital',
    referenceSources: ['Plowman, E., et al. (2012)', 'Lazar, R.M., et al. (2010)'],
  },
  {
    id: 'c3-q025',
    stem: 'An SLP working in a skilled nursing facility is treating a patient with moderate dementia and oropharyngeal dysphagia. The patient frequently forgets to use the chin tuck during meals. Which strategy is MOST appropriate for this patient?',
    options: [
      {
        id: 'a',
        text: 'Post visual cue cards at the bedside and train nursing staff to provide verbal reminders during meals',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Teach the patient the Mendelsohn maneuver as a more effective alternative',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Discontinue the chin tuck recommendation since the patient cannot consistently use it',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Write a treatment goal for the patient to independently perform chin tuck in 80% of swallows',
        isCorrect: false,
      },
    ],
    explanation:
      "For patients with moderate dementia who cannot independently remember compensatory strategies, environmental modifications and staff training are the most effective approaches. Visual cue cards serve as external reminders, and training nursing staff ensures consistent cueing during meals. This compensatory-supportive approach works with the patient's cognitive limitations rather than against them.",
    incorrectExplanations: {
      b: 'The Mendelsohn maneuver is a more complex technique that requires even greater cognitive and motor planning demands than a chin tuck. It would be less appropriate for a patient with moderate dementia.',
      c: 'Discontinuing a beneficial compensatory strategy because the patient cannot remember it independently is inappropriate. The appropriate response is to provide environmental and caregiver supports.',
      d: 'Setting an 80% independent accuracy goal for chin tuck is unrealistic for a patient with moderate dementia. The goal should focus on safe swallowing with appropriate supports.',
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Cognitive Considerations',
    bigNine: ['Dysphagia'],
    difficulty: 'application',
    tags: ['dementia', 'dysphagia', 'compensatory strategies', 'staff training', 'skilled nursing'],
    clinicalSetting: 'skilled nursing facility',
    referenceSources: ['ASHA Practice Portal: Dementia', 'ASHA Practice Portal: Adult Dysphagia'],
  },
  {
    id: 'c3-q026',
    stem: 'An SLP is implementing Constraint-Induced Aphasia Therapy (CIAT/ILAT) with a group of patients with chronic aphasia. Which of the following is a defining principle of this approach?',
    options: [
      {
        id: 'a',
        text: 'Patients are encouraged to use any modality—speech, writing, gesture, or drawing—to communicate',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Patients must use verbal speech and are constrained from compensating with gesture or writing',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Patients practice individual computer-based language exercises for 30 minutes per session',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Patients receive melodic intoning to facilitate word retrieval during card-request activities',
        isCorrect: false,
      },
    ],
    explanation:
      'Constraint-Induced Aphasia Therapy (also called Intensive Language-Action Therapy, ILAT) constrains patients from using compensatory modalities (gesture, writing, drawing) and requires them to use verbal speech during communicative activities—typically card-request games. Treatment is intensive (typically 3+ hours per day) and emphasizes massed practice and communicative relevance. This parallels the constraint-induced movement therapy principle used in physical rehabilitation.',
    incorrectExplanations: {
      a: 'Multi-modal communication is the opposite of the constraint principle. CIAT specifically restricts non-verbal modalities to force verbal output.',
      c: 'CIAT is a face-to-face, group-based treatment involving communicative interaction between patients, not individual computer exercises.',
      d: 'Melodic intoning is the basis of Melodic Intonation Therapy (MIT), a separate treatment approach. CIAT does not use melodic or singing components.',
    },
    contentCategory: 'III',
    subcategory: 'Aphasia Treatment — Named Programs',
    bigNine: ['Aphasia/Neurogenic Language'],
    difficulty: 'application',
    tags: ['CIAT', 'ILAT', 'constraint-induced', 'aphasia', 'intensive treatment'],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: [
      'Pulvermuller, F., et al. (2001). Constraint-induced therapy of chronic aphasia after stroke',
    ],
  },

  // ─── ANALYSIS (30%) — Questions 27–41 ───────────────────────────────────────

  {
    id: 'c3-q027',
    stem: "A 45-year-old patient with TBI is 3 months post-injury and demonstrates impaired attention, reduced initiation, and difficulty with problem-solving in daily activities. The SLP is designing a cognitive-communication treatment plan. Which combination of approaches BEST addresses this patient's needs?",
    options: [
      {
        id: 'a',
        text: 'Auditory comprehension drills and confrontation naming tasks',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Direct attention training paired with metacognitive strategy instruction for problem-solving in functional contexts',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Written expression exercises with grammar correction feedback',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Social skills group focused on conversational turn-taking',
        isCorrect: false,
      },
    ],
    explanation:
      'This patient presents with classic cognitive-communication deficits following TBI: attention, initiation, and executive function (problem-solving) impairments. The most evidence-supported approach combines direct attention training (e.g., Attention Process Training) to rebuild attentional capacity with metacognitive strategy instruction (self-monitoring, self-evaluation, plan-do-review cycles) applied to real-life functional tasks. This dual approach addresses both the underlying deficit and functional performance.',
    incorrectExplanations: {
      a: "Auditory comprehension drills and confrontation naming are aphasia-oriented treatments. This TBI patient's deficits are in attention and executive function, not linguistic processing per se.",
      c: 'Written expression with grammar correction targets language form, which is not the primary deficit described. The patient needs attention and executive function intervention.',
      d: "While social skills may eventually be relevant, the patient's primary deficits in attention, initiation, and problem-solving need to be addressed first as they underlie functional communication.",
    },
    contentCategory: 'III',
    subcategory: 'Cognitive-Communication Treatment',
    bigNine: ['Cognitive-Communication'],
    difficulty: 'analysis',
    tags: [
      'TBI',
      'cognitive-communication',
      'attention training',
      'metacognitive strategies',
      'executive function',
    ],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: [
      'Sohlberg, M.M., & Mateer, C.A. (2001). Cognitive Rehabilitation: An Integrative Neuropsychological Approach',
    ],
  },
  {
    id: 'c3-q028',
    stem: 'An SLP reviews a published study claiming that a new tongue-strengthening device significantly improves swallowing outcomes in stroke patients. The study used a pre-post design with 12 participants and no control group. The SLP notes improvement in tongue strength measures but no functional swallowing outcomes (e.g., diet level, penetration-aspiration scores). How should the SLP BEST evaluate this evidence?',
    options: [
      {
        id: 'a',
        text: 'The study provides strong evidence because tongue strength improved significantly',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'The study provides limited evidence due to lack of control group, small sample, and absence of functional swallowing outcome measures',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'The study provides no evidence and should be disregarded entirely',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'The study is adequate evidence to change clinical practice because it showed statistically significant results',
        isCorrect: false,
      },
    ],
    explanation:
      'Critical evidence appraisal requires considering study design (pre-post without control = Level IV), sample size (12 is very small), and outcome measures (tongue strength is an impairment-level measure that does not necessarily translate to functional swallowing improvement). The study provides preliminary evidence but has significant limitations that preclude changing clinical practice based on this study alone.',
    incorrectExplanations: {
      a: 'Statistical significance in tongue strength does not equate to clinical significance in swallowing function. The lack of functional outcome measures is a critical limitation.',
      c: 'Even limited evidence contributes to the knowledge base. The study should be evaluated critically, not disregarded. It may generate hypotheses for future controlled trials.',
      d: 'Statistical significance alone does not constitute adequate evidence to change practice. The study design limitations (no control, small sample, no functional outcomes) prevent this conclusion.',
    },
    contentCategory: 'III',
    subcategory: 'Evidence-Based Practice — Evidence Evaluation',
    bigNine: ['Dysphagia'],
    difficulty: 'analysis',
    tags: ['evidence appraisal', 'research design', 'dysphagia', 'evidence-based practice'],
    clinicalSetting: null,
    referenceSources: [
      'Dollaghan, C.A. (2007). The Handbook for Evidence-Based Practice in Communication Disorders',
    ],
  },
  {
    id: 'c3-q029',
    stem: 'A 10-year-old student who uses a speech-generating device (SGD) is transitioning from elementary to middle school. The student currently has a 60-location grid display with core vocabulary and curriculum-specific fringe vocabulary. Teachers at the new school report the student participates minimally in class discussions. Which modification should the SLP prioritize?',
    options: [
      {
        id: 'a',
        text: 'Reduce the grid to 20 locations to simplify navigation in the new environment',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Switch from the SGD to a low-tech communication board to reduce classroom distraction',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Program curriculum-relevant vocabulary for each subject and train teachers on communication partner strategies',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Remove the SGD from classroom use and focus on writing as the primary communication mode',
        isCorrect: false,
      },
    ],
    explanation:
      "The student's reduced participation likely reflects vocabulary gaps for the new curriculum and unfamiliar communication partners who may not know how to support AAC interaction. The priority intervention is twofold: (1) update the SGD vocabulary to include subject-specific terms and discussion phrases relevant to middle school content, and (2) train teachers and peers as communication partners—modeling wait time, reading the display, and accepting AAC output as valid participation.",
    incorrectExplanations: {
      a: "Reducing from 60 to 20 locations would decrease the student's communicative options at a time when more vocabulary is needed for academic demands. The student has already demonstrated competence with 60 locations.",
      b: 'Switching to low-tech from a functional SGD would be a regression. The SGD provides more efficient and independent communication than a low-tech board.',
      d: "Removing the SGD denies the student access to functional communication. Writing may supplement but should not replace the student's primary AAC system.",
    },
    contentCategory: 'III',
    subcategory: 'AAC Implementation — School Transition',
    bigNine: ['AAC'],
    difficulty: 'analysis',
    tags: ['AAC', 'SGD', 'school transition', 'vocabulary', 'communication partners'],
    clinicalSetting: 'school-based',
    referenceSources: [
      'ASHA Practice Portal: AAC',
      'Beukelman, D.R., & Light, J.C. (2020). Augmentative and Alternative Communication',
    ],
  },
  {
    id: 'c3-q030',
    stem: 'An SLP receives a referral for a 62-year-old woman with progressive bulbar ALS. She currently has mild dysarthria and is eating a regular diet but occasionally coughs with thin liquids. The SLP must develop a comprehensive treatment plan. Which approach BEST reflects appropriate clinical reasoning?',
    options: [
      {
        id: 'a',
        text: 'Focus exclusively on intensive strengthening exercises to slow the disease progression',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Defer treatment until symptoms worsen since the patient is currently functional',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Implement proactive planning: introduce compensatory swallowing strategies now, establish AAC baseline and begin device exploration, and develop a staged plan for anticipated decline',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Recommend immediate PEG tube placement to prevent aspiration pneumonia',
        isCorrect: false,
      },
    ],
    explanation:
      'ALS is a progressive, degenerative disease. Clinical reasoning for progressive conditions requires proactive planning rather than waiting for crisis. Current best practice includes: (1) compensatory swallowing strategies for immediate safety (e.g., chin tuck for thin liquid coughs), (2) AAC assessment and device exploration while the patient can still participate in training and voice banking, and (3) a staged plan that anticipates declining function in speech, swallowing, and respiration. Intensive strengthening is contraindicated in ALS due to risk of overuse fatigue.',
    incorrectExplanations: {
      a: 'Intensive strengthening exercises are contraindicated in ALS because they can accelerate muscle fatigue in the context of motor neuron disease. Treatment should focus on compensatory strategies and proactive planning.',
      b: 'Deferring treatment in a progressive disease means missing the window for critical interventions like AAC introduction and voice banking while the patient still has functional speech.',
      d: 'Immediate PEG placement is premature. The patient is eating a regular diet with only occasional coughing. PEG may be discussed as part of the staged plan for future consideration.',
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Progressive Conditions',
    bigNine: ['Dysphagia', 'AAC', 'Motor Speech'],
    difficulty: 'analysis',
    tags: ['ALS', 'progressive disease', 'proactive planning', 'AAC', 'dysphagia', 'voice banking'],
    clinicalSetting: 'outpatient neurology clinic',
    referenceSources: [
      'ASHA Practice Portal: ALS',
      'Yorkston, K.M., et al. (2010). Management of Motor Speech Disorders in Children and Adults',
    ],
  },
  {
    id: 'c3-q031',
    stem: 'An SLP is treating a 5-year-old who stutters with a severity rating of moderate. The child shows extensive secondary behaviors (eye blinking, head jerking) and expresses frustration about talking. The parents report the child avoids speaking at school. Which treatment plan component is MOST critical to include?',
    options: [
      {
        id: 'a',
        text: "Fluency shaping techniques only, since addressing emotional reactions might increase the child's awareness of stuttering",
        isCorrect: false,
      },
      {
        id: 'b',
        text: "An integrated approach combining fluency management strategies with desensitization activities and affective components addressing the child's feelings and avoidance",
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Referral to psychology with no direct speech treatment until emotional issues are resolved',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Parent counseling only, since direct treatment of stuttering at age 5 may cause negative self-awareness',
        isCorrect: false,
      },
    ],
    explanation:
      'This child presents with the full stuttering experience: core behaviors, secondary behaviors, negative emotional reactions, and avoidance. An integrated treatment approach is essential and should address all dimensions. Fluency management (easy onsets, light contacts) addresses the speech production component, while desensitization (voluntary stuttering, exploration of stuttering) reduces fear and tension, and affective activities address feelings and avoidance. Treating only one dimension is insufficient.',
    incorrectExplanations: {
      a: 'The idea that addressing emotions increases awareness is outdated. This child is already highly aware (secondary behaviors, frustration, avoidance). Ignoring the emotional component would be clinically inappropriate.',
      c: 'Deferring speech treatment is inappropriate. The SLP should address both the speech and emotional components of stuttering. Psychology referral may be considered as an adjunct but should not replace speech treatment.',
      d: "While parent counseling is important, this child's active avoidance and secondary behaviors indicate a need for direct treatment. Concerns about awareness are unfounded—the child is clearly already aware.",
    },
    contentCategory: 'III',
    subcategory: 'Fluency Treatment — Integrated Approaches',
    bigNine: ['Fluency'],
    difficulty: 'analysis',
    tags: [
      'stuttering',
      'integrated treatment',
      'secondary behaviors',
      'avoidance',
      'desensitization',
    ],
    clinicalSetting: 'private practice',
    referenceSources: [
      'Guitar, B. (2019). Stuttering: An Integrated Approach to Its Nature and Treatment',
    ],
  },
  {
    id: 'c3-q032',
    stem: 'A patient in acute rehabilitation following a left CVA has severe Wernicke aphasia with jargon output, poor auditory comprehension, and anosognosia (unawareness of deficits). The SLP is writing treatment goals for the first week. Which approach is MOST appropriate?',
    options: [
      {
        id: 'a',
        text: 'Target conversational speech through structured dialogue with specific vocabulary targets',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Focus on auditory comprehension of single words and simple commands using multimodal input, with environmental management strategies for communication partners',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Begin VNeST protocol with 10 target verbs to improve word retrieval',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Implement CIAT with 3 hours per day of verbal-only communication activities',
        isCorrect: false,
      },
    ],
    explanation:
      'In the acute phase with severe Wernicke aphasia and anosognosia, the patient cannot self-monitor output or recognize communication breakdowns. Treatment should start with the most fundamental receptive skill—auditory comprehension of single words and simple commands using multimodal supports (visual, gestural, written cues alongside auditory input). Environmental management (reducing noise, using short utterances, confirming comprehension) helps communication partners support the patient. The anosognosia also means the patient will not benefit from approaches requiring self-monitoring.',
    incorrectExplanations: {
      a: 'Conversational speech targeting is inappropriate for severe Wernicke aphasia with jargon—the patient cannot self-monitor output and does not recognize that their speech is not meaningful.',
      c: 'VNeST requires the patient to generate semantic information, which is beyond the current ability of a patient with severe Wernicke aphasia and jargon output.',
      d: 'CIAT requires verbal constraint and self-monitoring, which is contraindicated for a patient with severe comprehension deficits, jargon output, and anosognosia.',
    },
    contentCategory: 'III',
    subcategory: 'Aphasia Treatment — Severity-Appropriate Planning',
    bigNine: ['Aphasia/Neurogenic Language'],
    difficulty: 'analysis',
    tags: ['Wernicke aphasia', 'acute treatment', 'auditory comprehension', 'anosognosia'],
    clinicalSetting: 'inpatient rehabilitation',
    referenceSources: [
      'Chapey, R. (2008). Language Intervention Strategies in Aphasia and Related Neurogenic Communication Disorders',
    ],
  },
  {
    id: 'c3-q033',
    stem: 'An SLP in a school setting has a caseload of 55 students and is determining which students are ready for dismissal from speech-language services. Which student BEST meets criteria for discharge?',
    options: [
      {
        id: 'a',
        text: 'A 9-year-old with an articulation disorder who produces /r/ correctly in structured activities at 90% but at 40% in conversation',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'A 7-year-old with a history of expressive language disorder whose standardized scores are now within normal limits and who participates effectively in classroom instruction without support',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'A 10-year-old who stutters with 3% syllables stuttered in clinic but 12% in the classroom, who reports anxiety about oral presentations',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'An 8-year-old with a language disorder whose standardized scores are now within normal limits but who continues to struggle with reading comprehension',
        isCorrect: false,
      },
    ],
    explanation:
      'Discharge criteria should consider: (1) standardized assessment within normal limits, (2) functional performance across settings, and (3) impact on educational participation. The 7-year-old meets all three—standardized scores are within normal limits AND functional classroom participation is adequate without support. This demonstrates both the normalization of the underlying skill and successful generalization to the educational environment.',
    incorrectExplanations: {
      a: 'The 40% accuracy in conversation indicates the skill has not generalized from structured activities to functional communication. Generalization is a critical criterion for discharge.',
      c: 'The significant discrepancy between clinic (3%) and classroom (12%) stuttering, combined with anxiety about oral presentations, indicates the student still experiences functional impact from stuttering in the educational setting.',
      d: 'Despite normalized standardized language scores, ongoing reading comprehension difficulties may indicate residual language-based academic impact that warrants continued monitoring or support.',
    },
    contentCategory: 'III',
    subcategory: 'Discharge Planning — School Setting',
    bigNine: ['Child Language'],
    difficulty: 'analysis',
    tags: ['discharge criteria', 'school-based', 'generalization', 'caseload management'],
    clinicalSetting: 'school-based',
    referenceSources: ['ASHA Practice Portal: Caseload and Workload', 'IDEA (2004)'],
  },
  {
    id: 'c3-q034',
    stem: 'An SLP is treating a 50-year-old professional singer diagnosed with bilateral vocal fold nodules. After 8 weeks of voice therapy targeting vocal hygiene, resonant voice therapy, and semi-occluded vocal tract exercises, the patient reports improved speaking voice but continued difficulty with high-range singing. Stroboscopy shows the nodules have decreased in size but are still present. What is the MOST appropriate next step?',
    options: [
      {
        id: 'a',
        text: 'Discharge the patient since speaking voice has improved',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Continue voice therapy with added singing-specific exercises and coordinate with a singing voice specialist, while monitoring nodule regression',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Immediately refer for surgical excision of the remaining nodules',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Increase voice therapy to 5 days per week to accelerate nodule resolution',
        isCorrect: false,
      },
    ],
    explanation:
      "The patient is a professional singer whose livelihood depends on vocal performance. The treatment is showing progress (improved speaking voice, decreased nodule size), but the singing-specific goals have not been met. The appropriate next step is to continue therapy while adding singing-specific rehabilitation and coordinating with a singing voice specialist. Surgical referral would be premature given ongoing improvement, and the patient's singing demands require specialized attention beyond standard voice therapy.",
    incorrectExplanations: {
      a: "Discharging based only on speaking voice improvement ignores the patient's primary functional concern—singing. Treatment goals should reflect the patient's professional needs.",
      c: 'Surgical referral is premature because the nodules are decreasing with voice therapy. Surgery is typically considered when nodules fail to respond to adequate behavioral management.',
      d: 'Increasing to 5 days per week may cause therapy fatigue and is not evidence-based for accelerating nodule resolution. Quality of practice matters more than frequency beyond a certain point.',
    },
    contentCategory: 'III',
    subcategory: 'Voice Treatment — Treatment Modification',
    bigNine: ['Voice'],
    difficulty: 'analysis',
    tags: [
      'vocal nodules',
      'voice therapy',
      'singing voice',
      'treatment modification',
      'stroboscopy',
    ],
    clinicalSetting: 'voice center',
    referenceSources: [
      'Stemple, J.C., et al. (2010). Clinical Voice Pathology: Theory and Management',
    ],
  },
  {
    id: 'c3-q035',
    stem: "An SLP is comparing two treatment approaches for a patient with chronic nonfluent aphasia. Approach A has three Level I systematic reviews supporting it, while Approach B has two Level III cohort studies and several expert opinions but aligns more closely with the patient's personal communication goals. How should the SLP weigh these factors using an evidence-based practice framework?",
    options: [
      {
        id: 'a',
        text: 'Choose Approach A because Level I evidence always takes precedence over lower-level evidence',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Choose Approach B because patient preference and values are more important than research evidence',
        isCorrect: false,
      },
      {
        id: 'c',
        text: "Integrate the strong evidence for Approach A with the patient's goals by discussing both options, their evidence bases, and how elements of each might address the patient's priorities",
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Alternate between both approaches each session to cover both evidence and preference',
        isCorrect: false,
      },
    ],
    explanation:
      "Evidence-based practice requires integrating three components: best available evidence, clinical expertise, and patient values/preferences. The correct approach is to share the evidence for both options with the patient, explain how Approach A's strong evidence base may benefit them, and explore how elements of each approach might address their communication goals. The SLP uses clinical expertise to create a treatment plan informed by evidence that also honors the patient's priorities.",
    incorrectExplanations: {
      a: 'EBP does not mean that research evidence alone dictates treatment. Patient preferences and clinical expertise are equally important pillars of the EBP framework.',
      b: 'While patient preferences are critical, they should be informed by the available evidence. Choosing an approach with weak evidence without discussing the stronger alternative does not fulfill EBP obligations.',
      d: 'Alternating between approaches without rationale is not systematic or evidence-based. Treatment should be planned with clear goals and a coherent theoretical framework.',
    },
    contentCategory: 'III',
    subcategory: 'Evidence-Based Practice — Clinical Decision-Making',
    bigNine: ['Aphasia/Neurogenic Language'],
    difficulty: 'analysis',
    tags: ['evidence-based practice', 'EBP', 'clinical decision-making', 'patient preferences'],
    clinicalSetting: null,
    referenceSources: [
      'Sackett, D.L., et al. (2000). Evidence-Based Medicine',
      'ASHA Practice Portal: EBP',
    ],
  },
  {
    id: 'c3-q036',
    stem: 'A 4-year-old child with Down syndrome receives speech-language therapy targeting both intelligibility and expressive language. The child produces only initial consonant-vowel (CV) syllables and has an expressive vocabulary of approximately 50 words. The SLP must prioritize treatment targets. Which analysis BEST supports target selection?',
    options: [
      {
        id: 'a',
        text: 'Target final consonants because they are developmentally expected and will increase the number of distinct word shapes the child can produce, thereby expanding functional vocabulary',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Target early-developing vowel contrasts because vowels carry more acoustic energy and will improve intelligibility most rapidly',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Target multisyllabic words because they represent higher complexity and will accelerate overall development',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Target voice onset time distinctions for stop consonants to improve phonemic contrast',
        isCorrect: false,
      },
    ],
    explanation:
      "At 50 words, expanding the child's phonological system to include CVC structures (by targeting final consonants) creates more distinct word shapes. This is clinically significant because: (1) final consonants are developmentally expected by this stage, (2) adding final consonants doubles the number of possible word shapes (CV→CVC), (3) more distinct word shapes support vocabulary expansion, and (4) improved word-final marking supports morphological development (e.g., plural -s, past tense -ed). This analysis integrates phonological and language development considerations.",
    incorrectExplanations: {
      b: "While vowel contrasts contribute to intelligibility, this child's primary phonological limitation is the restricted syllable shape (CV only). Expanding to CVC will have a greater functional impact.",
      c: 'Targeting multisyllabic words before the child has established CVC words skips a fundamental step in phonological development and does not follow a developmental or complexity approach appropriately.',
      d: "Voice onset time distinctions are fine-grained acoustic contrasts that are not the priority when the child's primary limitation is syllable structure complexity.",
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Target Selection',
    bigNine: ['Articulation/Phonology', 'Child Language'],
    difficulty: 'analysis',
    tags: [
      'Down syndrome',
      'target selection',
      'phonological development',
      'final consonants',
      'vocabulary expansion',
    ],
    clinicalSetting: 'early intervention',
    referenceSources: ['Stoel-Gammon, C. (2001). Down syndrome phonology'],
  },
  {
    id: 'c3-q037',
    stem: "An SLP is comparing rehabilitative versus compensatory strategies for a 58-year-old patient who is 4 months post-stroke with moderate oropharyngeal dysphagia. The patient is medically stable, cognitively intact, and motivated. Which clinical reasoning BEST guides the SLP's treatment approach?",
    options: [
      {
        id: 'a',
        text: 'Use only compensatory strategies since the patient is past the acute recovery window',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Use only rehabilitative exercises since the patient is cognitively intact and motivated',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Combine rehabilitative exercises to improve underlying physiology with compensatory strategies to ensure safety during the rehabilitation process',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Recommend a permanent modified diet since 4 months post-stroke leaves limited potential for improvement',
        isCorrect: false,
      },
    ],
    explanation:
      "Best practice for dysphagia management in a medically stable, cognitively intact, and motivated patient combines both approaches: rehabilitative exercises (e.g., Shaker, EMST, lingual strengthening) target the underlying physiological deficits to promote long-term improvement, while compensatory strategies (postural adjustments, diet modifications, swallow maneuvers) ensure safety during meals while rehabilitation is ongoing. The patient's cognitive status and motivation support compliance with exercises, and 4 months post-stroke is still within the window for neural recovery.",
    incorrectExplanations: {
      a: "Limiting treatment to compensatory strategies ignores this patient's potential for physiological improvement. Four months post-stroke is not past the window for rehabilitation gains.",
      b: 'Relying only on rehabilitative exercises without compensatory strategies would leave the patient at risk during the rehabilitation process. Safety must be maintained while working toward improvement.',
      d: 'A permanent modified diet at 4 months post-stroke is premature and unnecessarily restrictive for a patient who has rehabilitation potential.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Rehabilitative vs. Compensatory',
    bigNine: ['Dysphagia'],
    difficulty: 'analysis',
    tags: ['rehabilitative vs compensatory', 'dysphagia', 'stroke', 'treatment planning'],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: ['Logemann, J.A. (1998)', 'ASHA Practice Portal: Adult Dysphagia'],
  },
  {
    id: 'c3-q038',
    stem: 'An 8-year-old child with high-functioning autism spectrum disorder (ASD, Level 1) demonstrates adequate vocabulary and grammar but struggles with understanding sarcasm, making inferences in narratives, and adjusting language for different listeners. The SLP is designing a treatment plan. Which goal area is MOST appropriate?',
    options: [
      {
        id: 'a',
        text: 'Receptive vocabulary expansion with tier 2 academic vocabulary',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Pragmatic language skills including figurative language comprehension, inferencing, and audience awareness',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Phonological awareness and decoding for reading improvement',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Mean length of utterance expansion through sentence combining',
        isCorrect: false,
      },
    ],
    explanation:
      "This child's profile—adequate vocabulary and grammar but difficulty with sarcasm, inference, and listener adaptation—is characteristic of pragmatic language challenges common in ASD Level 1. The treatment plan should target: figurative language comprehension (sarcasm, idioms, metaphor), narrative inferencing (character feelings, motivations, predictions), and audience awareness/code-switching (adjusting language for different listeners). These are the areas of functional deficit despite intact structural language.",
    incorrectExplanations: {
      a: "The child's vocabulary is described as adequate. While academic vocabulary is always beneficial, the primary deficit is pragmatic, not lexical.",
      c: 'Phonological awareness and decoding are literacy skills that are not described as areas of concern for this student.',
      d: "The child's grammar is adequate, so MLU expansion is not the priority. The child's sentences may be structurally correct but pragmatically inappropriate.",
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Pragmatic Language',
    bigNine: ['Child Language', 'Social Communication'],
    difficulty: 'analysis',
    tags: ['ASD', 'pragmatic language', 'figurative language', 'inferencing', 'audience awareness'],
    clinicalSetting: 'school-based',
    referenceSources: [
      'ASHA Practice Portal: Social Communication Disorder',
      'Adams, C. (2005). Social communication intervention',
    ],
  },
  {
    id: 'c3-q039',
    stem: 'An SLP in an SNF is asked to evaluate and treat a 85-year-old patient with advanced Alzheimer disease (Global Deterioration Scale stage 6) who has been refusing meals and losing weight. Nursing staff request "swallow therapy" to address the intake issue. After a clinical swallowing evaluation reveals no oropharyngeal dysphagia, which is the MOST appropriate course of action?',
    options: [
      {
        id: 'a',
        text: "Begin oral motor exercises to improve the patient's interest in eating",
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Recommend thickened liquids and pureed diet to make meals easier',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Educate staff that the intake decline is likely related to disease progression rather than swallowing impairment, and collaborate on environmental and feeding modifications to support comfort and intake',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Recommend PEG tube placement to ensure adequate nutrition',
        isCorrect: false,
      },
    ],
    explanation:
      'In advanced Alzheimer disease (GDS stage 6), reduced oral intake is often a feature of disease progression rather than oropharyngeal dysphagia. Since the swallowing evaluation showed no dysphagia, "swallow therapy" would not address the underlying cause. The SLP\'s appropriate role is to: (1) educate staff about the disease-related nature of reduced intake, (2) collaborate on environmental modifications (reduce distractions, offer preferred foods, appropriate timing) and feeding approaches (cueing, pacing) that may support comfort and optimize intake, and (3) participate in goals-of-care discussions.',
    incorrectExplanations: {
      a: 'Oral motor exercises do not address reduced appetite or food refusal related to disease progression. There is no evidence that oral motor exercises increase interest in eating.',
      b: 'The evaluation showed no oropharyngeal dysphagia. Modifying diet texture without swallowing impairment would unnecessarily restrict the patient and reduce eating pleasure without addressing the actual cause of reduced intake.',
      d: 'PEG tube placement in advanced dementia has not been shown to reduce aspiration pneumonia, improve functional status, or prolong survival. It is generally not recommended by medical and ethical guidelines for patients with advanced dementia.',
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Ethical Considerations',
    bigNine: ['Dysphagia'],
    difficulty: 'analysis',
    tags: ['dementia', 'advanced Alzheimer', 'feeding', 'ethical practice', 'end-of-life care'],
    clinicalSetting: 'skilled nursing facility',
    referenceSources: [
      'ASHA Practice Portal: Dementia',
      'American Geriatrics Society (2014). Feeding tubes in advanced dementia position statement',
    ],
  },
  {
    id: 'c3-q040',
    stem: 'An SLP is developing treatment goals for a 30-year-old male with moderate-severe traumatic brain injury who is emerging from post-traumatic amnesia. The patient follows simple commands inconsistently, has periods of agitation, and demonstrates minimal verbal output. Which Rancho Los Amigos level does this MOST likely represent, and what is the appropriate treatment focus?',
    options: [
      {
        id: 'a',
        text: 'Level IV (Confused-Agitated): Focus on reducing stimulation, establishing consistent responses to simple commands, and training caregivers in communication strategies',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Level VI (Confused-Appropriate): Focus on memory strategies and community reintegration activities',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Level III (Localized Response): Focus on sensory stimulation to elicit purposeful responses',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Level VII (Automatic-Appropriate): Focus on higher-level cognitive-linguistic tasks for return to work',
        isCorrect: false,
      },
    ],
    explanation:
      'Rancho Level IV (Confused-Agitated) is characterized by heightened state of activity, confusion, agitation, and bizarre/non-purposeful behavior. The patient may follow simple commands inconsistently and demonstrate limited verbal output. Treatment at this level focuses on environmental management (reducing stimulation, structured routine), establishing reliable yes/no responses and command-following, and training caregivers to use simple, direct communication strategies. Complex cognitive tasks are inappropriate at this level.',
    incorrectExplanations: {
      b: "Level VI patients demonstrate goal-directed behavior and carry over new learning with moderate assistance. This patient's agitation and inconsistent command-following place them at a lower level.",
      c: 'Level III patients respond specifically to stimuli (e.g., turning toward a sound) but do not follow commands. This patient does follow simple commands, albeit inconsistently.',
      d: "Level VII patients function in structured settings with minimal confusion. This patient's agitation and inconsistent responses are far below Level VII functioning.",
    },
    contentCategory: 'III',
    subcategory: 'Cognitive-Communication Treatment — TBI Recovery Stages',
    bigNine: ['Cognitive-Communication'],
    difficulty: 'analysis',
    tags: [
      'TBI',
      'Rancho Los Amigos',
      'cognitive-communication',
      'agitation',
      'post-traumatic amnesia',
    ],
    clinicalSetting: 'inpatient rehabilitation',
    referenceSources: [
      'Hagen, C. (1998). Rancho Levels of Cognitive Functioning',
      'ASHA Practice Portal: TBI',
    ],
  },
  {
    id: 'c3-q041',
    stem: 'An SLP is treating a 6-year-old child with childhood apraxia of speech (CAS) using Dynamic Temporal and Tactile Cueing (DTTC). After 12 sessions, the child accurately produces trained two-syllable words at 85% accuracy with simultaneous production (clinician and child speaking together) but drops to 30% accuracy with independent production. Which treatment modification is MOST appropriate?',
    options: [
      {
        id: 'a',
        text: 'Move to three-syllable words since two-syllable accuracy is high with cueing',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Systematically fade the simultaneous production support through the DTTC cueing hierarchy—from simultaneous to slightly delayed to immediate repetition to independent',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Switch to a phonological awareness approach since the motor approach is not producing independent accuracy',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Add visual biofeedback technology to supplement the tactile cues',
        isCorrect: false,
      },
    ],
    explanation:
      "DTTC uses a systematic cueing hierarchy that fades support: simultaneous production → slightly delayed imitation → immediate imitation → delayed imitation → spontaneous production. The child's high accuracy with simultaneous production (85%) and low independent accuracy (30%) indicates they are ready to move to the next step in the fading hierarchy (slightly delayed production), not to increase complexity. Systematic fading is the core principle of DTTC and motor learning for CAS.",
    incorrectExplanations: {
      a: 'Moving to three-syllable words increases complexity prematurely. The child has not yet achieved independence at the two-syllable level. Cueing should be faded before complexity is increased.',
      c: 'Phonological awareness does not address the motor planning deficit underlying CAS. The DTTC approach is appropriate—the child just needs systematic fading of cueing support rather than a different approach entirely.',
      d: 'While visual biofeedback might supplement treatment, the fundamental issue is the need to fade cues systematically within the existing DTTC framework, not to add more types of cues.',
    },
    contentCategory: 'III',
    subcategory: 'Speech Sound Treatment — Motor Learning Principles',
    bigNine: ['Articulation/Phonology'],
    difficulty: 'analysis',
    tags: ['CAS', 'DTTC', 'motor learning', 'cueing hierarchy', 'treatment modification'],
    clinicalSetting: 'private practice',
    referenceSources: [
      'Strand, E.A., et al. (2006). Treatment of severe CAS: A treatment efficacy study',
    ],
  },

  // ─── CLINICAL REASONING (20%) — Questions 42–51 ────────────────────────────

  {
    id: 'c3-q042',
    stem: "A 75-year-old patient with a right CVA is being treated for left neglect, dysphagia, and cognitive-communication deficits in an inpatient rehabilitation setting. Insurance authorization allows 10 more therapy sessions. The patient's family is pushing for focus on swallowing so the patient can eat regular food before discharge. However, the SLP notes the patient's left neglect causes them to miss food on the left side of the tray, and the cognitive-communication deficits affect safety awareness. How should the SLP BEST allocate the remaining sessions?",
    options: [
      {
        id: 'a',
        text: "Dedicate all 10 sessions exclusively to dysphagia treatment per the family's request",
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Split sessions equally: 5 for dysphagia, 3 for cognitive-communication, 2 for neglect',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Address all three areas within each session by integrating neglect and cognitive strategies during mealtime-based dysphagia treatment, while educating the family on the interconnection of these deficits',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Focus on cognitive-communication since it underlies the other deficits, and defer dysphagia treatment until after discharge',
        isCorrect: false,
      },
    ],
    explanation:
      "The most efficient and clinically sound approach integrates all three treatment targets during functional mealtime activities. For example: address neglect by cueing the patient to scan the full tray, address cognitive-communication by working on safety awareness and problem-solving during meals, and address dysphagia through compensatory strategies and diet advancement—all within the same session. Family education about how neglect and cognition affect safe eating helps them understand the SLP's approach and prepares them for supporting the patient post-discharge.",
    incorrectExplanations: {
      a: 'Focusing only on dysphagia ignores the neglect and cognitive deficits that directly impact feeding safety. The patient might aspirate not from a swallowing deficit but from neglect-related behaviors or impaired safety awareness.',
      b: 'Rigidly splitting sessions treats each area in isolation and fails to address their functional interconnection during mealtimes.',
      d: "Deferring dysphagia treatment risks unsafe swallowing at discharge and does not address the family's legitimate concern about oral intake.",
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Integrated Clinical Reasoning',
    bigNine: ['Dysphagia', 'Cognitive-Communication'],
    difficulty: 'clinical_reasoning',
    tags: [
      'right CVA',
      'left neglect',
      'integrated treatment',
      'resource allocation',
      'family education',
    ],
    clinicalSetting: 'inpatient rehabilitation',
    referenceSources: [
      'ASHA Practice Portal: Right Hemisphere Disorder',
      'ASHA Practice Portal: Adult Dysphagia',
    ],
  },
  {
    id: 'c3-q043',
    stem: 'An SLP in a pediatric outpatient clinic is treating a 3-year-old bilingual (Spanish-English) child diagnosed with a language disorder. The parents speak primarily Spanish at home and request that therapy be conducted in English only to "help with school readiness." The SLP is proficient in both Spanish and English. What is the MOST appropriate clinical decision?',
    options: [
      {
        id: 'a',
        text: 'Conduct therapy in English only as the parents requested since they know their child best',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Conduct therapy in Spanish only since it is the home language and will provide the strongest foundation',
        isCorrect: false,
      },
      {
        id: 'c',
        text: "Educate the parents about the benefits of bilingual intervention, explain that treating in both languages supports both languages, and incorporate both Spanish and English targets based on the child's linguistic environments",
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Refer to an English-only SLP since the parents want English intervention',
        isCorrect: false,
      },
    ],
    explanation:
      "Research consistently demonstrates that bilingual intervention does not hinder English development and may actually enhance it through cross-linguistic transfer. The SLP should educate the parents about the evidence supporting bilingual intervention, explain that skills learned in one language can transfer to the other, and address the misconception that bilingualism causes or exacerbates language disorders. A bilingual treatment plan that targets skills in both languages, aligned with the child's linguistic environments, is the evidence-based approach.",
    incorrectExplanations: {
      a: "While parent preferences should be considered, the SLP has an ethical obligation to educate families about evidence-based practices. English-only intervention could actually harm the child's overall language development and family communication.",
      b: "Spanish-only therapy ignores the child's need to function in English-speaking environments and does not honor a bilingual approach.",
      d: 'Referring to an English-only SLP when the current SLP can provide bilingual services would provide inferior care. The bilingual SLP is uniquely qualified to serve this family.',
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Bilingual Considerations',
    bigNine: ['Child Language'],
    difficulty: 'clinical_reasoning',
    tags: [
      'bilingual',
      'Spanish-English',
      'language disorder',
      'parent education',
      'cultural competence',
    ],
    clinicalSetting: 'pediatric outpatient',
    referenceSources: [
      'ASHA Practice Portal: Bilingual Service Delivery',
      'Kohnert, K. (2010). Bilingual children with primary language impairment',
    ],
  },
  {
    id: 'c3-q044',
    stem: 'An SLP is managing care for a 60-year-old patient with head and neck cancer who has completed chemoradiation for a T3 base-of-tongue tumor. The patient presents with severe dysphagia (NPO on tube feeds), trismus (maximum interincisal opening of 18 mm), fibrosis-related reduced tongue base retraction, and xerostomia. The patient is eager to eat again. How should the SLP approach treatment planning?',
    options: [
      {
        id: 'a',
        text: 'Begin aggressive oral trials with pureed food to motivate the patient and prevent learned non-use of swallowing muscles',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Develop a phased plan: Phase 1 targets trismus and range-of-motion exercises; Phase 2 introduces progressive oral trials as physiology improves; throughout, address xerostomia management and coordinate with the oncology team on radiation effects timeline',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Recommend permanent PEG dependency since base-of-tongue radiation typically causes irreversible dysphagia',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Focus solely on Mendelsohn maneuver repetitions since tongue base retraction is the primary deficit',
        isCorrect: false,
      },
    ],
    explanation:
      "Post-chemoradiation head and neck cancer dysphagia requires a comprehensive, phased approach. Trismus directly limits oral access and must be addressed first (jaw stretching exercises, TheraBite). Tongue base retraction exercises and swallowing maneuvers are introduced as range of motion improves. Oral trials are progressed systematically based on instrumental assessment findings. Xerostomia management (saliva substitutes, frequent sips) is ongoing. Coordination with oncology is essential because radiation effects can continue to evolve for months. This patient's eagerness is an asset for compliance but must be channeled into a safe, systematic plan.",
    incorrectExplanations: {
      a: 'Aggressive oral trials with severe dysphagia and 18 mm jaw opening are unsafe and impractical. The trismus must be addressed first to allow functional oral intake.',
      c: 'Recommending permanent PEG dependency is premature and overly pessimistic. Many patients with base-of-tongue tumors treated with chemoradiation can return to some level of oral intake with rehabilitation.',
      d: 'The Mendelsohn maneuver alone does not address the trismus, xerostomia, or fibrosis. A single exercise cannot manage the multifactorial nature of post-radiation dysphagia.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Head and Neck Cancer',
    bigNine: ['Dysphagia'],
    difficulty: 'clinical_reasoning',
    tags: ['head and neck cancer', 'chemoradiation', 'dysphagia', 'trismus', 'phased treatment'],
    clinicalSetting: 'outpatient oncology',
    referenceSources: [
      'Hutcheson, K.A., & Lewin, J.S. (2012). Functional outcomes after chemoradiation for advanced-stage HNC',
    ],
  },
  {
    id: 'c3-q045',
    stem: "A 16-year-old with a high-tech AAC device (eye-gaze controlled) and cerebral palsy is transitioning to adult services. The student currently uses the device effectively in school but the family reports it is rarely used at home or in the community. The student will age out of school services in 2 years. What should the SLP's transition plan prioritize?",
    options: [
      {
        id: 'a',
        text: 'Simplify the AAC system to a low-tech board that is easier for the family to manage',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Focus remaining school sessions on academic vocabulary to maximize educational benefit',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Prioritize community and home integration: train family and community partners, program vocabulary for adult contexts (medical appointments, employment, social media), and connect with adult AAC support services',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Transfer AAC management to the family and discontinue school-based services to promote independence',
        isCorrect: false,
      },
    ],
    explanation:
      'The critical gap is community and home use. With only 2 years before aging out of school services, the SLP should prioritize generalization beyond school: (1) train family members as competent communication partners, (2) program vocabulary for adult contexts the student will encounter (medical self-advocacy, employment interviews, social and recreational activities, social media), (3) connect with adult service providers and AAC funding sources, and (4) build the student\'s skills for self-advocating about their AAC needs. Keeping the device school-only creates a "communication cliff" at transition.',
    incorrectExplanations: {
      a: "Simplifying to low-tech abandons the student's demonstrated competence with the eye-gaze device. The issue is not device complexity but lack of home/community integration and partner training.",
      b: 'Focusing only on academic vocabulary ignores the impending transition to adult life where academic vocabulary will be less relevant than functional adult communication.',
      d: 'Abruptly transferring management and discontinuing services does not provide the training and bridge-building needed for successful transition.',
    },
    contentCategory: 'III',
    subcategory: 'AAC Implementation — Transition Planning',
    bigNine: ['AAC'],
    difficulty: 'clinical_reasoning',
    tags: ['AAC', 'transition', 'cerebral palsy', 'community integration', 'adult services'],
    clinicalSetting: 'school-based',
    referenceSources: ['ASHA Practice Portal: AAC', 'IDEA Transition Planning Requirements'],
  },
  {
    id: 'c3-q046',
    stem: 'An SLP in a hospital receives a consultation for a 48-year-old patient in the ICU who is intubated, sedated, and on a ventilator following a motor vehicle accident. The nurse requests a swallowing evaluation. The patient has a GCS of 8. What is the MOST appropriate response?',
    options: [
      { id: 'a', text: 'Perform a bedside swallowing screening using ice chips', isCorrect: false },
      {
        id: 'b',
        text: 'Schedule a FEES for the following day to assess pharyngeal function around the endotracheal tube',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Decline the swallowing evaluation at this time, document that the patient is not an appropriate candidate due to current medical status, and recommend reassessment when the patient is extubated and alert',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Begin prophylactic oral motor exercises to maintain swallowing musculature while the patient is intubated',
        isCorrect: false,
      },
    ],
    explanation:
      'A patient who is intubated, sedated, with a GCS of 8 is not a candidate for swallowing evaluation. The endotracheal tube prevents normal swallowing, sedation impairs consciousness and protective reflexes, and a GCS of 8 indicates severe neurological compromise. The appropriate response is to document why evaluation is not feasible, educate the team about prerequisites for swallowing assessment, and recommend reassessment criteria (extubation, adequate alertness, ability to manage secretions). This demonstrates clinical judgment in knowing when NOT to evaluate.',
    incorrectExplanations: {
      a: 'Ice chips or any oral trials are contraindicated in an intubated, sedated patient. The endotracheal tube bypasses the larynx and the patient cannot safely swallow.',
      b: 'FEES cannot be meaningfully performed on a sedated patient with impaired consciousness. Additionally, the endotracheal tube would significantly alter pharyngeal anatomy during the exam.',
      d: 'Oral motor exercises on a sedated, intubated patient with a GCS of 8 are neither safe nor effective. The patient cannot participate in exercises or protect their airway.',
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Medical Appropriateness',
    bigNine: ['Dysphagia'],
    difficulty: 'clinical_reasoning',
    tags: ['ICU', 'intubation', 'medical appropriateness', 'clinical judgment', 'GCS'],
    clinicalSetting: 'ICU / acute care',
    referenceSources: [
      'ASHA Practice Portal: Adult Dysphagia',
      'Brodsky, M.B., et al. (2018). Screening for dysphagia in the ICU',
    ],
  },
  {
    id: 'c3-q047',
    stem: 'An SLP treats a 35-year-old female teacher diagnosed with muscle tension dysphonia (MTD). After 6 sessions of laryngeal manual therapy, resonant voice therapy, and vocal hygiene education, the patient reports her voice feels "almost normal" during therapy but "falls apart" by the end of each teaching day. Stroboscopy shows resolved MTD patterns in clinic. What is the MOST appropriate next clinical step?',
    options: [
      {
        id: 'a',
        text: 'Discharge since stroboscopy is normal and in-clinic voice is functional',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Continue current therapy protocol for 6 more sessions and reassess',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Shift treatment focus to vocal load management and carryover strategies specific to the classroom environment, including voice amplification assessment, vocal dosing, and in-vivo practice during teaching',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Refer to ENT for possible botulinum toxin injection since behavioral therapy alone is insufficient',
        isCorrect: false,
      },
    ],
    explanation:
      'The patient has achieved the target vocal behavior in clinic but cannot maintain it under the vocal demands of full-day teaching. The remaining gap is between clinic and real-world performance. Treatment should shift to: (1) vocal load management strategies specific to teaching (vocal dosing—how much voice use per hour, scheduled voice rest, hydration protocol), (2) assessment for voice amplification to reduce vocal effort in the classroom, (3) in-vivo practice of resonant voice techniques during actual teaching, and (4) environmental modifications (reducing background noise, classroom acoustics). This is a carryover and generalization issue, not a need for more of the same therapy.',
    incorrectExplanations: {
      a: 'Discharging when the patient still experiences voice breakdown during her primary occupational activity is premature. Functional outcome in the real-world environment is the standard for discharge.',
      b: 'Repeating the same protocol that already achieved in-clinic success will not address the carryover gap. The treatment focus needs to shift to generalization and vocal load management.',
      d: 'Botulinum toxin is indicated for spasmodic dysphonia, not MTD. The resolved stroboscopy findings confirm that the behavioral approach is working—the issue is carryover, not treatment failure.',
    },
    contentCategory: 'III',
    subcategory: 'Voice Treatment — Carryover and Generalization',
    bigNine: ['Voice'],
    difficulty: 'clinical_reasoning',
    tags: [
      'MTD',
      'voice therapy',
      'carryover',
      'vocal load',
      'occupational voice use',
      'amplification',
    ],
    clinicalSetting: 'voice center',
    referenceSources: [
      'Verdolini, K., & Ramig, L.O. (2001). Review: Occupational risks for voice problems',
      'Stemple, J.C., et al. (2010)',
    ],
  },
  {
    id: 'c3-q048',
    stem: 'An SLP is providing services to a 12-year-old with a severe TBI who is Rancho Level V (Confused-Inappropriate). The student is returning to school with a 1:1 aide. The IEP team asks the SLP to write cognitive-communication goals. The student can follow 1-step directions in a quiet environment but becomes disoriented and agitated with multi-step instructions or environmental noise. Which goal set BEST reflects appropriate Rancho Level V treatment targets?',
    options: [
      {
        id: 'a',
        text: 'Follow 3-step classroom directions with 80% accuracy and participate in small group discussions using complete sentences',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Follow 1-2 step directions in a structured environment with visual supports, orient to daily schedule using a visual planner, and use a written checklist to complete familiar classroom routines with aide cueing',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Write paragraph-length responses to reading comprehension questions and summarize main ideas from grade-level text',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Independently initiate conversations with peers and self-correct errors during oral presentations',
        isCorrect: false,
      },
    ],
    explanation:
      'Rancho Level V (Confused-Inappropriate) is characterized by responses that may be random or fragmented, inability to learn new information consistently, and increased response to external stimuli in structured settings. Appropriate goals focus on: orienting the student to daily routine using external supports (visual schedule), following simple directions in controlled environments, and using external memory aids (checklists) with cueing support. Goals should be achievable, functional, and aligned with the cognitive level—not aspirational for a higher Rancho level.',
    incorrectExplanations: {
      a: 'Following 3-step directions and participating in group discussions are Rancho Level VI-VII targets. The student currently manages only 1-step directions in quiet environments.',
      c: 'Written paragraph responses and text summarization require intact working memory, executive function, and language skills that are beyond Rancho Level V capacity.',
      d: "Independent initiation and self-correction require the metacognitive awareness and self-monitoring characteristic of Rancho Level VII-VIII, far above this student's current functioning.",
    },
    contentCategory: 'III',
    subcategory: 'Cognitive-Communication Treatment — IEP Goals for TBI',
    bigNine: ['Cognitive-Communication'],
    difficulty: 'clinical_reasoning',
    tags: [
      'TBI',
      'Rancho Level V',
      'school reentry',
      'IEP',
      'cognitive-communication',
      'visual supports',
    ],
    clinicalSetting: 'school-based',
    referenceSources: [
      'Hagen, C. (1998). Rancho Levels of Cognitive Functioning',
      'Ylvisaker, M. (1998). Traumatic Brain Injury Rehabilitation: Children and Adolescents',
    ],
  },
  {
    id: 'c3-q049',
    stem: "An SLP is treating a 28-year-old patient with moderate apraxia of speech following a left CVA. After 3 months of treatment using articulatory-kinematic approaches, the patient can produce trained single words with 80% accuracy but struggles with connected speech. Rate is slow, prosody is flat, and speech naturalness is poor. The patient's primary goal is returning to work as a customer service representative. How should the SLP modify the treatment plan?",
    options: [
      {
        id: 'a',
        text: 'Continue single-word drill practice until accuracy reaches 95% before moving to phrases',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Transition to script training for work-specific phrases, incorporate contrastive stress and intonation practice, and explore AAC supplementation for complex communication demands',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Switch entirely to an AAC-only approach since speech will not meet occupational demands',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Discharge from speech therapy and recommend vocational counseling for a different career',
        isCorrect: false,
      },
    ],
    explanation:
      "The patient has made meaningful progress at the word level. Treatment now needs to bridge to functional connected speech for vocational reentry. Script training for work-specific phrases (greetings, common questions, phone scripts) allows practiced automaticity for high-frequency work interactions. Prosody and naturalness work (contrastive stress, intonation contours) addresses the flat prosody affecting communication effectiveness. AAC supplementation (text-based backup for complex explanations) provides a safety net for situations where verbal speech breaks down. This multimodal plan respects the patient's vocational goal while being realistic about current limitations.",
    incorrectExplanations: {
      a: 'Remaining at single-word level until 95% accuracy delays functional progress. Motor learning research supports moving to more complex contexts once a reasonable accuracy threshold is reached, as connected speech introduces coarticulatory demands that cannot be addressed at the word level.',
      c: 'Abandoning speech entirely at 80% word-level accuracy is premature. The patient has demonstrated potential for speech improvement, and multimodal communication (speech + AAC support) is more appropriate.',
      d: "Recommending career change after only 3 months of therapy is premature and fails to explore all rehabilitation options. The SLP should support the patient's vocational goals through adapted treatment.",
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Vocational Rehabilitation',
    bigNine: ['Motor Speech', 'AAC'],
    difficulty: 'clinical_reasoning',
    tags: [
      'apraxia of speech',
      'vocational rehabilitation',
      'script training',
      'prosody',
      'multimodal communication',
    ],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: [
      'Wambaugh, J.L., et al. (2006). Treatment for acquired apraxia of speech',
      'ASHA Practice Portal: Apraxia of Speech',
    ],
  },
  {
    id: 'c3-q050',
    stem: "An SLP is working with a multidisciplinary team to develop a discharge plan for a 78-year-old patient with a left CVA who has moderate Broca aphasia and mild dysphagia (currently tolerating IDDSI Level 6 solids, Level 1 liquids). The patient lives alone, has a daughter who visits on weekends, and will receive home health services. Which discharge recommendation BEST addresses the patient's safety and communication needs across settings?",
    options: [
      {
        id: 'a',
        text: 'Discharge with a written diet card, weekly home health SLP visits, and a referral to a community aphasia group',
        isCorrect: false,
      },
      {
        id: 'b',
        text: "Discharge with a communication wallet containing key phrases and medical information, written and pictorial diet guidelines posted in the kitchen, trained daughter in dysphagia safety signs and communication strategies, home health SLP 2-3x/week initially with transition to outpatient aphasia treatment, and an emergency communication card in the patient's wallet",
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Recommend extended inpatient stay until the patient can communicate independently and eat a regular diet',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Discharge with a home exercise program handout and follow-up in 3 months',
        isCorrect: false,
      },
    ],
    explanation:
      "This discharge plan addresses the complex reality of a patient living alone with both communication and swallowing deficits. It includes: multimodal communication supports (communication wallet, emergency card) for independence and safety, visual environmental supports (kitchen-posted diet guidelines) for daily safety compliance, caregiver training (daughter) for the primary support person, intensive home health services initially that transition to outpatient (appropriate for a patient who lives alone and needs support establishing routines), and long-term community reintegration (aphasia group). Every element addresses a specific risk factor in this patient's discharge scenario.",
    incorrectExplanations: {
      a: 'A written diet card alone is insufficient for a patient with aphasia who may have reading comprehension challenges. Weekly visits are too infrequent initially for a patient living alone. A community aphasia group is appropriate but should not be the only support.',
      c: 'Extended inpatient stay for independence in communication and regular diet is unrealistic for moderate aphasia and is not medically necessary. Rehabilitation can continue effectively in the home and outpatient settings.',
      d: 'A home exercise handout and 3-month follow-up provides inadequate support for a patient with moderate aphasia living alone with dysphagia. This leaves significant safety gaps.',
    },
    contentCategory: 'III',
    subcategory: 'Discharge Planning — Comprehensive',
    bigNine: ['Aphasia/Neurogenic Language', 'Dysphagia'],
    difficulty: 'clinical_reasoning',
    tags: [
      'discharge planning',
      'aphasia',
      'dysphagia',
      'home safety',
      'caregiver training',
      'multidisciplinary',
    ],
    clinicalSetting: 'inpatient rehabilitation → home health',
    referenceSources: ['ASHA Practice Portal: Adult Dysphagia', 'ASHA Practice Portal: Aphasia'],
  },
  {
    id: 'c3-q051',
    stem: 'An SLP conducts a modified barium swallow study on a patient with Parkinson disease and observes the following: delayed swallow initiation (2.5 seconds), reduced tongue base retraction resulting in vallecular residue, reduced hyolaryngeal excursion, and trace penetration with thin liquids that is cleared with a spontaneous cough. The patient is currently on a regular diet. Which treatment plan BEST integrates instrumental findings with the clinical picture?',
    options: [
      {
        id: 'a',
        text: 'Immediately restrict to IDDSI Level 4 (Pureed) and Level 2 (Mildly Thick) liquids to eliminate all aspiration risk',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'No intervention needed since the patient cleared the penetration with a spontaneous cough',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Implement EMST to improve hyolaryngeal excursion and cough strength, Shaker exercise for UES opening, effortful swallow for tongue base retraction, and trial chin tuck with thin liquids; monitor with follow-up instrumental assessment in 8 weeks; maintain current diet with compensatory strategy use',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Focus exclusively on LSVT LOUD since this will improve all oral motor function in Parkinson disease',
        isCorrect: false,
      },
    ],
    explanation:
      'This treatment plan systematically addresses each instrumental finding: EMST targets expiratory muscle strength (improving hyolaryngeal excursion and cough effectiveness), Shaker exercise targets suprahyoid muscles for hyolaryngeal excursion and UES opening, effortful swallow targets tongue base retraction (addressing vallecular residue), and chin tuck is trialed as a compensatory strategy for the trace penetration with thin liquids. The patient maintains the current diet because the penetration was trace-level and cleared, but exercises target the underlying physiology to prevent deterioration. Follow-up instrumental assessment monitors progress in this progressive disease.',
    incorrectExplanations: {
      a: 'Restricting to pureed food and thickened liquids is overly aggressive for trace penetration that the patient successfully cleared. This would unnecessarily reduce quality of life.',
      b: 'While the patient cleared the penetration, doing nothing ignores the underlying deficits (delayed initiation, reduced tongue base retraction, reduced hyolaryngeal excursion) that will likely worsen with Parkinson disease progression.',
      d: 'LSVT LOUD targets vocal loudness, not swallowing physiology. While some studies suggest carryover to swallowing in Parkinson disease, it does not specifically address the instrumental findings documented here.',
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Integrating Instrumental Findings',
    bigNine: ['Dysphagia'],
    difficulty: 'clinical_reasoning',
    tags: [
      'Parkinson disease',
      'MBSS',
      'instrumental findings',
      'EMST',
      'Shaker',
      'treatment planning',
    ],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: [
      'Logemann, J.A. (1998)',
      'Troche, M.S., et al. (2010). Aspiration and swallowing in Parkinson disease',
    ],
  },
  {
    id: 'c3-q052',
    stem: 'A 9-year-old child with language learning disability has been receiving language therapy for 2 years targeting vocabulary and sentence formulation. Standardized testing shows receptive and expressive language scores have improved from the 5th to the 18th percentile. The child now performs adequately in classroom discussions but continues to struggle with reading comprehension and written expression. The teacher reports the child "doesn\'t seem to need speech anymore." How should the SLP respond?',
    options: [
      {
        id: 'a',
        text: 'Agree with the teacher and discharge the student since standardized scores have improved significantly',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Continue the same treatment protocol since scores are still below the 25th percentile',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Shift treatment goals to address the language underpinnings of literacy—targeting reading comprehension strategies, written language organization, and metalinguistic skills—and educate the teacher about the language basis of reading and writing difficulties',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Transfer the student to the reading specialist and discontinue speech-language services',
        isCorrect: false,
      },
    ],
    explanation:
      "The student's profile shows successful treatment of oral language skills (improved scores, adequate classroom discussion) but persistent difficulties in literate language demands (reading comprehension, written expression). The SLP's scope of practice includes the language basis of literacy. Treatment should shift to address: reading comprehension strategies (inference-making, text structure awareness), written language organization (planning, revising, cohesion), and metalinguistic skills that support both. Teacher education is essential because the teacher may not recognize that reading and writing difficulties can have a language basis that is within the SLP's scope.",
    incorrectExplanations: {
      a: "Improved standardized scores do not mean the student no longer needs services. The continued struggles with reading comprehension and written expression indicate language-based academic deficits that fall within the SLP's scope.",
      b: "Continuing the same protocol targeting vocabulary and sentence formulation would not address the current functional deficits in literacy. Treatment goals should evolve to match the student's changing needs.",
      d: "The reading and writing difficulties have a language basis that is within the SLP's scope. The SLP should collaborate with the reading specialist, not transfer responsibility entirely.",
    },
    contentCategory: 'III',
    subcategory: 'Treatment Planning — Evolving Goals',
    bigNine: ['Child Language'],
    difficulty: 'clinical_reasoning',
    tags: [
      'language learning disability',
      'literacy',
      'reading comprehension',
      'written expression',
      'scope of practice',
    ],
    clinicalSetting: 'school-based',
    referenceSources: [
      'ASHA Practice Portal: Written Language Disorders',
      'Ehren, B.J. (2000). Maintaining a therapeutic focus and sharing responsibility for student success',
    ],
  },
  {
    id: 'c3-q053',
    stem: 'Melodic Intonation Therapy (MIT) is MOST appropriate for a patient with which of the following profiles?',
    options: [
      {
        id: 'a',
        text: 'Severe Wernicke aphasia with fluent jargon and poor auditory comprehension',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Severe nonfluent aphasia with limited verbal output but relatively preserved auditory comprehension and good motivation',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Mild anomic aphasia with occasional word-finding difficulty in conversation',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Transcortical motor aphasia with intact repetition but limited spontaneous output',
        isCorrect: false,
      },
    ],
    explanation:
      'MIT was developed for patients with severe nonfluent aphasia (typically Broca-type) who have very limited propositional speech but relatively preserved auditory comprehension and motivation. MIT leverages right hemisphere melody and rhythm processing to facilitate verbal output. Key candidate criteria include: nonfluent/severely restricted verbal output, relatively preserved auditory comprehension (needed to follow MIT procedures), poor repetition, and adequate motivation/attention. The theory is that intoning activates right hemisphere pathways to compensate for left hemisphere damage.',
    incorrectExplanations: {
      a: 'Patients with severe Wernicke aphasia have poor auditory comprehension, which is needed to participate in MIT. Additionally, their fluent output (even if jargon) is not the profile MIT was designed for.',
      c: 'Mild anomic aphasia with occasional word-finding difficulty does not require MIT. MIT is designed for severe nonfluent profiles, and milder deficits respond to less intensive semantic and phonological approaches.',
      d: 'Transcortical motor aphasia features intact repetition. MIT leverages melodic intoning to facilitate output; if repetition is already intact, the primary mechanism of MIT is not needed.',
    },
    contentCategory: 'III',
    subcategory: 'Aphasia Treatment — Named Programs',
    bigNine: ['Aphasia/Neurogenic Language'],
    difficulty: 'application',
    tags: ['MIT', 'melodic intonation therapy', 'nonfluent aphasia', 'treatment candidacy'],
    clinicalSetting: 'outpatient rehabilitation',
    referenceSources: [
      'Albert, M.L., Sparks, R.W., & Helm, N.A. (1973). Melodic intonation therapy for aphasia',
    ],
  },
  {
    id: 'c3-q054',
    stem: 'The supraglottic swallow maneuver involves which sequence of steps?',
    options: [
      {
        id: 'a',
        text: 'Inhale, hold breath, swallow while holding breath, cough immediately after the swallow, swallow again',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Bear down, hold the Valsalva, swallow, exhale forcefully',
        isCorrect: false,
      },
      { id: 'c', text: 'Tuck chin, hold breath, swallow twice, exhale', isCorrect: false },
      {
        id: 'd',
        text: 'Squeeze all swallowing muscles as hard as possible during the swallow, then clear throat',
        isCorrect: false,
      },
    ],
    explanation:
      'The supraglottic swallow sequence is: (1) take a deep breath, (2) hold the breath (which closes the vocal folds before and during the swallow), (3) swallow while continuing to hold the breath, (4) cough immediately after swallowing (to clear any residue from the laryngeal vestibule), and (5) swallow again. This maneuver provides voluntary airway protection by closing the vocal folds before the swallow initiates and is indicated for patients with delayed pharyngeal swallow onset or reduced laryngeal closure.',
    incorrectExplanations: {
      b: 'Bearing down (Valsalva) with forceful exhalation describes aspects of the super-supraglottic swallow, which adds effortful breath-holding (bearing down) to achieve earlier and more complete arytenoid-to-epiglottic base contact.',
      c: 'While chin tuck is a compensatory posture, it is not part of the supraglottic swallow sequence. The supraglottic swallow is a maneuver, not a postural strategy.',
      d: "Squeezing all muscles describes the effortful swallow, not the supraglottic swallow. The supraglottic swallow's primary mechanism is breath-holding for airway protection, not effortful muscle contraction.",
    },
    contentCategory: 'III',
    subcategory: 'Dysphagia Treatment — Compensatory Maneuvers',
    bigNine: ['Dysphagia'],
    difficulty: 'recall',
    tags: ['supraglottic swallow', 'dysphagia', 'airway protection', 'compensatory maneuver'],
    clinicalSetting: null,
    referenceSources: ['Logemann, J.A. (1998). Evaluation and Treatment of Swallowing Disorders'],
  },
  {
    id: 'c3-q055',
    stem: 'An SLP is working with a 6-year-old child who uses PECS and has progressed to Phase IV (sentence structure). The child consistently constructs "I want" + picture sentences to request desired items. What is the NEXT phase in PECS progression?',
    options: [
      { id: 'a', text: 'Phase V — Responding to "What do you want?"', isCorrect: true },
      {
        id: 'b',
        text: 'Phase V — Using PECS to comment on items in the environment',
        isCorrect: false,
      },
      { id: 'c', text: 'Phase V — Initiating conversations about past events', isCorrect: false },
      { id: 'd', text: 'Phase V — Transitioning to a speech-generating device', isCorrect: false },
    ],
    explanation:
      'PECS Phase V is "Responsive Requesting" — the child learns to respond to the direct question "What do you want?" Up to this point, all PECS communication has been child-initiated. Phase V teaches the child to respond to a communication partner\'s question while still using the sentence strip. Phase VI then teaches commenting (responding to "What do you see?" "What is it?"). The systematic progression of PECS ensures each communicative function is firmly established before the next is introduced.',
    incorrectExplanations: {
      b: 'Commenting is Phase VI of PECS. Phase V focuses on responsive requesting (answering "What do you want?") before introducing the more complex function of commenting.',
      c: 'Initiating conversations about past events represents a complex pragmatic skill that is not a defined PECS phase. PECS progresses through requesting and commenting functions.',
      d: 'Transitioning to a speech-generating device is not a PECS phase. While some children do transition from PECS to SGDs, this is an individual clinical decision, not a prescribed PECS phase.',
    },
    contentCategory: 'III',
    subcategory: 'AAC Implementation — PECS Phases',
    bigNine: ['AAC'],
    difficulty: 'application',
    tags: ['PECS', 'AAC', 'phases', 'communication functions', 'requesting'],
    clinicalSetting: 'school-based',
    referenceSources: ['Bondy, A., & Frost, L. (2001). PECS Training Manual'],
  },
]
