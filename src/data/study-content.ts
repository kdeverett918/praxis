export interface StudyContentData {
  id: string
  title: string
  contentCategory: 'I' | 'II' | 'III'
  subcategory: string
  bigNine: string[]
  contentMarkdown: string
  keyTerms: Array<{ term: string; definition: string }>
  sortOrder: number
}

export const studyContentData: StudyContentData[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Speech & Language Development Milestones (Birth–5)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'dev-milestones-birth-5',
    title: 'Speech & Language Development Milestones (Birth–5)',
    contentCategory: 'I',
    subcategory: 'Developmental Norms',
    bigNine: ['Articulation/Phonology', 'Language', 'Child Language'],
    contentMarkdown: `
## Speech & Language Development: Birth Through Age 5

### Pre-Linguistic Stage (0–12 months)

| Age | Receptive | Expressive |
|-----|-----------|------------|
| **0–3 mo** | Startles to sound; recognizes caregiver voice; quiets when spoken to | Reflexive crying; vegetative sounds; cooing begins (~2 mo) |
| **4–6 mo** | Turns to sound source; responds to name; recognizes "no" tone | Vocal play; marginal babbling; laughing; squealing |
| **7–9 mo** | Understands "no"; recognizes familiar words in context; looks at named objects | **Canonical (reduplicated) babbling** ("bababa"); gestures emerge |
| **10–12 mo** | Follows simple commands with gestures; understands ~50 words | First true words; variegated babbling; jargon with sentence-like intonation |

> **High-Yield:** Canonical babbling onset (~7 mo) is a critical milestone. Absence by 10 months is a red flag for hearing loss or motor speech disorder.

### Early Linguistic Stage (12–24 months)

- **12–18 mo:** 3–50 word expressive vocabulary; mostly nouns; single-word utterances; overextensions common
- **18–24 mo:** **Vocabulary spurt** (50+ words); two-word combinations emerge ("more juice"); MLU ~1.0–2.0
- **Comprehension always exceeds production** — receptive vocab ~200–300 words by 24 mo

> **High-Yield:** 50-word threshold and two-word combinations by age 2 are key benchmarks. Failure to combine words by 24 months = referral trigger.

### Preschool Language Explosion (2–5 years)

| Age | MLU (Brown's Stages) | Key Grammar | Pragmatic Skills |
|-----|---------------------|-------------|------------------|
| **2–3 yr** | 2.0–3.0 (Stages II–III) | Present progressive (-ing); plurals (-s); prepositions (in, on); negation (no/not) | Conversational turns; topic maintenance (1–2 turns); requests |
| **3–4 yr** | 3.0–4.0 (Stages III–IV) | Regular past tense (-ed); possessives; articles; copula "is" | Narratives emerge; role-play; adjusts speech to listener |
| **4–5 yr** | 4.0–5.0 (Stages IV–V) | Complex sentences (because, when, if); irregular past tense; passive voice emerging | Sustained narratives; storytelling; indirect requests; humor |

### Brown's 14 Grammatical Morphemes — Acquisition Order

1. Present progressive **-ing** (no auxiliary)
2. Preposition **in**
3. Preposition **on**
4. Regular plural **-s**
5. Irregular past tense (went, fell)
6. Possessive **'s**
7. Uncontractible copula ("he **is** big")
8. Articles **a, the**
9. Regular past tense **-ed**
10. Third person regular **-s**
11. Third person irregular (does, has)
12. Uncontractible auxiliary ("he **is** running")
13. Contractible copula ("he**'s** big")
14. Contractible auxiliary ("he**'s** running")

> **High-Yield:** The Praxis loves Brown's morpheme order. Memorize at least the first 8. Note that **irregular** past tense is acquired BEFORE **regular** past tense (-ed).

### Speech Intelligibility Benchmarks

| Age | Intelligibility to Unfamiliar Listener |
|-----|---------------------------------------|
| 1 yr | ~25% |
| 2 yr | ~50% |
| 3 yr | ~75% |
| 4 yr | ~100% |

> **High-Yield:** "1-2-3-4 = 25-50-75-100" — this ratio appears frequently on the exam.
`,
    keyTerms: [
      {
        term: 'Canonical babbling',
        definition:
          'Repetitive consonant-vowel sequences (e.g., "bababa") emerging ~7 months; a critical pre-linguistic milestone',
      },
      {
        term: 'Vocabulary spurt',
        definition:
          'Rapid word-learning acceleration around 18 months when expressive vocabulary reaches ~50 words',
      },
      {
        term: 'MLU',
        definition:
          'Mean Length of Utterance — average number of morphemes per utterance; primary measure of grammatical development',
      },
      {
        term: 'Overextension',
        definition:
          'Using a word too broadly (e.g., calling all four-legged animals "dog"); common in early word learning',
      },
      {
        term: 'Underextension',
        definition:
          'Using a word too narrowly (e.g., "cup" only for child\'s own cup); less noticed but equally common',
      },
      {
        term: "Brown's Stages",
        definition:
          "Roger Brown's 5 stages of morphological development indexed by MLU ranges (I = 1.0–2.0 through V = 4.0+)",
      },
      {
        term: 'Jargon',
        definition:
          'Long strings of babbled sounds with sentence-like prosody but no real words; appears ~10–18 months',
      },
    ],
    sortOrder: 1,
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Later Language Development (School-Age Through Adult)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'later-language-dev',
    title: 'Later Language Development (School-Age Through Adult)',
    contentCategory: 'I',
    subcategory: 'Developmental Norms',
    bigNine: ['Language', 'Child Language'],
    contentMarkdown: `
## Later Language Development: School-Age Through Adulthood

### Metalinguistic Awareness (5–8 years)

- **Phonological awareness** develops: rhyming, segmenting, blending (critical for literacy)
- **Morphological awareness**: understands prefixes/suffixes, can judge grammatical correctness
- Children begin to **self-correct** speech and language errors
- Understanding of **ambiguity** and **multiple meanings** emerges (~6–7 yr)

> **High-Yield:** Phonological awareness is the #1 predictor of reading success. Know the hierarchy: word → syllable → onset-rime → phoneme.

### Syntax & Morphology (6–12 years)

| Feature | Approximate Age |
|---------|----------------|
| Full passive sentences ("The ball was kicked by the boy") | 7–8 yr |
| Relative clauses ("The dog that chased the cat...") | 7–9 yr |
| Conditional (if/then) mastery | 8–10 yr |
| Derivational morphology (happy → unhappiness) | 9–12 yr |
| Figurative language comprehension | 9–12+ yr |

### Narrative Development Stages

1. **Heap** (2 yr): Unrelated statements
2. **Sequence** (3 yr): Labeled events, no central theme
3. **Primitive narrative** (4–4.5 yr): Central topic, no plot
4. **Unfocused chain** (4.5 yr): Events loosely linked
5. **Focused chain** (5 yr): Main character, events linked but no climax
6. **True narrative** (6–7 yr): Complete story grammar (setting, initiating event, plan, attempt, consequence, resolution)

> **High-Yield:** Applebee's narrative stages are commonly tested. True narratives with complete story grammar emerge by first grade.

### Adolescent & Adult Language

- **Abstract reasoning** and **inferencing** continue to mature through adolescence
- **Literate language** features: elaborated noun phrases, subordinate clauses, cohesive ties
- **Pragmatic complexity**: sarcasm, persuasion, negotiation, perspective-taking
- **Word-finding** and **verbal fluency** peak in 20s–30s, gradual decline in typical aging
- **Semantic knowledge** continues to grow throughout the lifespan

### Language & Literacy Connection

- **Simple View of Reading**: Reading Comprehension = Decoding x Linguistic Comprehension
- **Matthew Effect**: Children who read well read more, expanding vocabulary; poor readers fall further behind
- **Phonological awareness → decoding → fluency → comprehension** is the developmental trajectory

> **High-Yield:** SLPs have a critical role in literacy. Know that phonological awareness deficits underlie most reading disabilities, not visual processing issues.
`,
    keyTerms: [
      {
        term: 'Metalinguistic awareness',
        definition:
          'Ability to think about and analyze language as an object; includes phonological, morphological, syntactic, and pragmatic awareness',
      },
      {
        term: 'Phonological awareness',
        definition:
          'Ability to recognize and manipulate the sound structure of language; strongest predictor of early reading ability',
      },
      {
        term: 'Story grammar',
        definition:
          'Structural elements of a narrative: setting, initiating event, internal response, plan, attempt, consequence, resolution',
      },
      {
        term: 'Matthew Effect',
        definition:
          'Stanovich\'s concept that good readers get better (more exposure) while poor readers fall further behind — "the rich get richer"',
      },
      {
        term: 'Literate language',
        definition:
          'Complex language features used in academic/written contexts: subordination, elaborated noun phrases, metalinguistic verbs',
      },
      {
        term: 'Simple View of Reading',
        definition:
          'Gough & Tunmer model: Reading Comprehension = Decoding x Linguistic Comprehension; both components are necessary',
      },
    ],
    sortOrder: 2,
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Phonological Development
  // ─────────────────────────────────────────────────────────────
  {
    id: 'phonological-development',
    title: 'Phonological Development (Processes, Suppression, Acquisition)',
    contentCategory: 'I',
    subcategory: 'Articulation & Phonology',
    bigNine: ['Articulation/Phonology'],
    contentMarkdown: `
## Phonological Development

### Consonant Acquisition Order (Customary Age of Production)

**Early 8** (by age 3): /m, b, j, n, w, d, p, h/

**Middle 8** (by age 4–6): /t, ŋ, k, g, f, v, tʃ, dʒ/

**Late 8** (by age 6–8+): /ʃ, θ, s, z, ð, l, r, ʒ/

> **High-Yield:** The "Early 8" are all nasals, stops, and glides — produced at the front of the mouth. **Liquids /r/ and /l/** and **fricatives /θ, ð/** are the latest acquired. The /r/ sound may not be fully mastered until age 8.

### Phonological Processes & Suppression Ages

| Process | Example | Suppression Age |
|---------|---------|-----------------|
| **Final consonant deletion** | "ca" for "cat" | **~3;0** |
| **Fronting** (velar) | "tat" for "cat" | **~3;6** |
| **Stopping** | "top" for "shop" | **~3;0–5;0** (varies by target) |
| **Consonant harmony** | "gog" for "dog" | **~3;0** |
| **Weak syllable deletion** | "nana" for "banana" | **~4;0** |
| **Cluster reduction** | "top" for "stop" | **~4;0–5;0** |
| **Gliding** | "wabbit" for "rabbit" | **~5;0–6;0** |
| **Deaffrication** | "ship" for "chip" | **~4;0** |
| **Prevocalic voicing** | "big" for "pig" | **~3;0** |
| **Final devoicing** | "bak" for "bag" | **~3;0** |

> **High-Yield:** If a process persists **past its suppression age**, it is considered disordered, not delayed. Know the difference.

### Vowel Development

- Vowels are typically mastered by age **3**
- Vowel errors beyond age 3 suggest **motor speech** involvement (CAS, dysarthria)
- Corner vowels (/i, u, a/) are acquired first

### Key Assessment Concepts

- **Independent analysis**: Inventory of sounds the child produces (no comparison to adult targets)
- **Relational analysis**: Comparison of child's productions to adult targets — identifies error patterns
- **Percent Consonants Correct (PCC)**: Severity metric
  - >85% = mild; 65–85% = mild-moderate; 50–65% = moderate-severe; <50% = severe
- **Stimulability**: Can the child produce the sound with modeling/cues? Predicts self-correction potential

### Choosing Treatment Targets

- **Traditional approach**: Start with earliest developing, most stimulable sounds
- **Complexity approach**: Target later-developing, more complex sounds → generalization to simpler sounds
- **Cycles approach** (Hodson): Rotate through phonological patterns on a cyclical basis; best for highly unintelligible children

> **High-Yield:** The complexity approach is evidence-based and often tested. Know that targeting complex sounds (e.g., clusters) can lead to system-wide change without directly treating simpler sounds.
`,
    keyTerms: [
      {
        term: 'Phonological process',
        definition:
          'Systematic sound simplification pattern used by typically developing children; becomes disordered when persisting past expected suppression age',
      },
      {
        term: 'Fronting',
        definition:
          'Substituting a front sound for a back sound (e.g., /t/ for /k/); suppressed by ~3;6',
      },
      {
        term: 'Stopping',
        definition:
          'Replacing a fricative or affricate with a stop (e.g., /t/ for /s/); suppressed by ~3;0–5;0 depending on target',
      },
      {
        term: 'Gliding',
        definition:
          'Replacing a liquid (/r/ or /l/) with a glide (/w/ or /j/); suppressed by ~5;0–6;0',
      },
      {
        term: 'PCC (Percent Consonants Correct)',
        definition:
          'Severity metric for speech sound disorders calculated from connected speech sample',
      },
      {
        term: 'Complexity approach',
        definition:
          'Targeting later-developing, more complex sounds to promote generalization to simpler untreated targets',
      },
      {
        term: 'Stimulability',
        definition:
          'Ability to produce a sound correctly when given a model; high stimulability may predict self-correction',
      },
    ],
    sortOrder: 3,
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Cranial Nerves for SLP
  // ─────────────────────────────────────────────────────────────
  {
    id: 'cranial-nerves',
    title: 'Cranial Nerves for Speech-Language Pathology',
    contentCategory: 'I',
    subcategory: 'Anatomy & Physiology',
    bigNine: ['Anatomy & Physiology', 'Dysphagia', 'Motor Speech'],
    contentMarkdown: `
## Cranial Nerves for SLP

### The Big 6 for Speech & Swallowing

| CN | Name | Type | SLP-Relevant Functions | Damage Signs |
|----|------|------|----------------------|--------------|
| **V** | Trigeminal | Mixed (S+M) | **Jaw** movement (mastication); sensation to face, oral cavity, anterior 2/3 tongue (general) | Jaw deviation toward weak side; reduced chewing; facial numbness |
| **VII** | Facial | Mixed (S+M) | **Facial expression**; lip closure; taste anterior 2/3 tongue; salivary glands (sublingual, submandibular) | Facial droop; drooling; loss of taste; difficulty with bilabials |
| **IX** | Glossopharyngeal | Mixed (S+M) | Sensation posterior 1/3 tongue & pharynx; taste posterior 1/3; **gag reflex** (afferent); stylopharyngeus (pharyngeal elevation) | Reduced gag (afferent); taste loss posterior tongue; dysphagia |
| **X** | Vagus | Mixed (S+M) | **Vocal fold** movement; velopharyngeal closure; pharyngeal constriction; laryngeal sensation; **gag reflex** (efferent) | Dysphonia; breathy voice; VPI; aspiration; dysphagia |
| **XI** | Spinal Accessory | Motor | **SCM** & trapezius (head turning, shoulder shrug); contributes to pharyngeal/laryngeal function | Head/neck weakness; difficulty with head positioning for swallowing |
| **XII** | Hypoglossal | Motor | **Tongue** movement (all intrinsic & most extrinsic muscles) | Tongue deviation toward weak side; dysarthria; oral phase dysphagia |

### Other CNs Relevant to SLP

| CN | Name | Relevance |
|----|------|-----------|
| **I** Olfactory | Smell — affects taste perception; anosmia after TBI |
| **II** Optic | Vision — relevant for AAC, reading, visual cues |
| **III, IV, VI** Oculomotor, Trochlear, Abducens | Eye movement — track in neurological assessment |
| **VIII** Vestibulocochlear | **Hearing** and balance — hearing loss assessment |

### Vagus Nerve Branches — Critical Detail

- **Pharyngeal branch**: Soft palate elevation (all muscles except tensor veli palatini, which is CN V) and pharyngeal constrictors
- **Superior Laryngeal Nerve (SLN)**:
  - **Internal branch** (sensory): Sensation above vocal folds
  - **External branch** (motor): **Cricothyroid** muscle (pitch control)
- **Recurrent Laryngeal Nerve (RLN)**: ALL intrinsic laryngeal muscles **except** cricothyroid; sensation below vocal folds

> **High-Yield:** Unilateral RLN damage → vocal fold paralysis in **paramedian** position → breathy voice. Bilateral RLN damage → folds in **adducted/median** position → airway compromise. SLN damage → pitch/loudness difficulties, aspiration risk from loss of supraglottic sensation.

### Oral Mechanism Exam — CN Assessment

| Structure | What to Assess | CN Tested |
|-----------|---------------|-----------|
| Jaw | Open, close, lateral movement; strength against resistance | V |
| Lips | Pucker, spread, seal; alternate pucker/spread | VII |
| Tongue | Protrude, lateralize, elevate; push against cheek | XII |
| Soft palate | Say "ah" — observe elevation; check symmetry | X (pharyngeal branch) |
| Larynx | Sustained "ah" — vocal quality; pitch glides; cough | X (RLN, SLN) |
| Face | Smile, frown, puff cheeks; observe symmetry | VII |

> **High-Yield:** Tongue deviates toward the WEAK side (ipsilateral). Jaw deviates toward the WEAK side. Uvula deviates toward the STRONG side (away from lesion).
`,
    keyTerms: [
      {
        term: 'Recurrent Laryngeal Nerve (RLN)',
        definition:
          'Branch of CN X innervating all intrinsic laryngeal muscles except cricothyroid; damage causes vocal fold paralysis',
      },
      {
        term: 'Superior Laryngeal Nerve (SLN)',
        definition:
          'Branch of CN X; external branch innervates cricothyroid (pitch); internal branch provides sensory innervation above vocal folds',
      },
      {
        term: 'CN V (Trigeminal)',
        definition:
          'Mixed nerve responsible for jaw movement (mastication) and facial/oral sensation; jaw deviates to weak side',
      },
      {
        term: 'CN VII (Facial)',
        definition:
          'Mixed nerve controlling facial expression, lip closure, taste to anterior 2/3 tongue, sublingual/submandibular salivary glands',
      },
      {
        term: 'CN XII (Hypoglossal)',
        definition:
          'Pure motor nerve innervating tongue muscles; tongue deviates to weak/damaged side on protrusion',
      },
      {
        term: 'Gag reflex',
        definition:
          'Afferent limb = CN IX (glossopharyngeal); efferent limb = CN X (vagus). Absence does NOT predict aspiration risk.',
      },
    ],
    sortOrder: 4,
  },

  // ─────────────────────────────────────────────────────────────
  // 5. ASHA Code of Ethics
  // ─────────────────────────────────────────────────────────────
  {
    id: 'asha-code-of-ethics',
    title: 'ASHA Code of Ethics',
    contentCategory: 'III',
    subcategory: 'Professional Practice',
    bigNine: ['Professional Issues'],
    contentMarkdown: `
## ASHA Code of Ethics (2023 Revision)

### Four Principles of Ethics

#### Principle I — Welfare of Persons Served
**Core idea:** Hold paramount the welfare of persons served professionally.

**Key Rules:**
- Provide services **competently** using highest quality science and clinical judgment
- Use **every resource** including referral to ensure highest quality service
- Do not discriminate based on race, ethnicity, sex, gender identity, age, religion, national origin, sexual orientation, disability, or any other basis
- Obtain **informed consent** before providing services
- Maintain **confidentiality** of information (HIPAA, FERPA)
- Do not charge for services **not rendered**; do not misrepresent services
- Evaluate effectiveness of services and products **continuously**

> **High-Yield:** Principle I is the most commonly tested. If a scenario asks "what should the SLP do?" — protecting the CLIENT always comes first.

#### Principle II — Professional Competence
**Core idea:** Achieve and maintain the highest level of professional competence.

**Key Rules:**
- Practice only in areas of **competence** (education, training, supervised experience)
- Engage in **lifelong learning** and continuing education
- Delegate tasks only to competent individuals; **supervise** appropriately
- **SLPAs** may not practice independently — must be supervised by a licensed SLP
- Use **technology and instrumentation** competently
- Recognize when personal issues may interfere with professional duties

#### Principle III — Responsibility to the Public
**Core idea:** Uphold public trust through honest, accurate professional communication.

**Key Rules:**
- Do not **misrepresent** credentials, competence, or services
- Do not engage in **dishonesty, fraud, deceit, or misrepresentation**
- Accurately represent **research** results; do not suppress data
- Follow institutional, state, and federal **regulations**
- Report violations of the Code of Ethics to the **ASHA Board of Ethics**

> **High-Yield:** SLPs have an obligation to **report** known ethics violations. This includes self-reporting and reporting colleagues.

#### Principle IV — Professional Relationships
**Core idea:** Maintain honorable relationships with colleagues and other professionals.

**Key Rules:**
- Do not engage in **conflicts of interest** (financial, personal)
- Do not discriminate against colleagues
- Assign credit for professional work appropriately
- Do not **harass** anyone in professional settings
- Cooperate with ASHA during ethics investigations

### Ethics Decision-Making Framework

When facing an ethical dilemma:
1. **Identify** all stakeholders
2. **Gather** relevant facts
3. **Review** applicable Principles and Rules
4. **Consider** possible courses of action
5. **Evaluate** consequences of each option
6. **Act** — and document your reasoning

### Common Exam Scenarios

| Scenario | Correct Action | Principle |
|----------|---------------|-----------|
| SLP asked to treat outside competence | Decline; seek training or refer | II |
| Colleague committing insurance fraud | Report to ASHA Board of Ethics | III |
| Parent requests confidential records | Follow HIPAA/FERPA; require proper authorization | I |
| Supervisor-student boundary issue | Maintain professional boundaries | IV |
| Student clinician unsupervised | Supervising SLP is responsible; must correct | II |
| Conflict of interest (product sales) | Disclose; prioritize client welfare | I & IV |
`,
    keyTerms: [
      {
        term: 'Principle I',
        definition:
          'Hold paramount the welfare of persons served; the highest ethical obligation in SLP practice',
      },
      {
        term: 'Principle II',
        definition:
          'Achieve and maintain highest professional competence; practice only within scope of training',
      },
      {
        term: 'Principle III',
        definition:
          'Responsibility to the public; honesty, accuracy, obligation to report ethics violations',
      },
      {
        term: 'Principle IV',
        definition: 'Maintain honorable professional relationships; avoid conflicts of interest',
      },
      {
        term: 'Informed consent',
        definition:
          'Ethical and legal requirement to explain nature, risks, and alternatives of services before beginning treatment',
      },
      {
        term: 'Scope of competence',
        definition:
          'Ethical principle that SLPs must only practice in areas where they have adequate education, training, and supervised experience',
      },
      {
        term: 'Mandatory reporting',
        definition:
          'Obligation to report known Code of Ethics violations to the ASHA Board of Ethics',
      },
    ],
    sortOrder: 5,
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Key Legislation
  // ─────────────────────────────────────────────────────────────
  {
    id: 'key-legislation',
    title: 'Key Legislation (IDEA, 504, ADA, HIPAA, FERPA, Medicare)',
    contentCategory: 'III',
    subcategory: 'Professional Practice',
    bigNine: ['Professional Issues'],
    contentMarkdown: `
## Key Legislation for SLPs

### IDEA — Individuals with Disabilities Education Act

| Component | Detail |
|-----------|--------|
| **Age range** | Birth through 21 |
| **Part B** | Ages 3–21: Free Appropriate Public Education (**FAPE**) in Least Restrictive Environment (**LRE**) |
| **Part C** | Birth–2: Early intervention; **IFSP** (Individualized Family Service Plan); family-centered; natural environments |
| **Part B (3–21)** | **IEP** (Individualized Education Program); team includes parents, teachers, SLP, LEA rep |
| **Eligibility** | Must have disability that **adversely affects educational performance** |
| **13 Categories** | Includes speech/language impairment, autism, specific learning disability, TBI, hearing impairment, etc. |
| **Transitions** | IFSP → IEP at age 3; transition planning begins at **16** |
| **Due process** | Parents have right to dispute decisions; mediation and hearings available |

> **High-Yield:** IFSP is **family-centered** with outcomes; IEP is **student-centered** with goals. Know the difference. Part C = birth–2 = IFSP = natural environments. Part B = 3–21 = IEP = LRE.

### Section 504 of the Rehabilitation Act

- Civil rights law — prohibits discrimination based on disability in programs receiving federal funds
- **504 Plan**: Accommodations (NOT specialized instruction); no need for "adverse educational impact"
- Broader eligibility than IDEA — any physical or mental impairment substantially limiting a **major life activity**
- Examples: Preferential seating, FM system, extended time, modified assignments

### ADA — Americans with Disabilities Act (1990)

- Extends civil rights protections to **all** settings (not just federally funded)
- **Title I**: Employment — reasonable accommodations
- **Title II**: State/local government services
- **Title III**: Public accommodations (hospitals, private practices, clinics)
- SLPs in private practice must comply with ADA accessibility requirements

### HIPAA — Health Insurance Portability and Accountability Act (1996)

- **Privacy Rule**: Protects **Protected Health Information (PHI)**
- **Minimum necessary** standard: Share only what's needed for treatment, payment, or operations
- Patients have right to access, amend, and receive an accounting of disclosures
- **Business Associate Agreements (BAA)** required for third parties handling PHI
- Penalties for violations range from fines to criminal charges

### FERPA — Family Educational Rights and Privacy Act

- Protects **student education records** in schools receiving federal funds
- Parents have access rights until student turns **18** (then transfers to student)
- Schools cannot release records without **written consent** (with exceptions)
- FERPA applies in schools; HIPAA applies in medical settings
- **School-based SLPs follow FERPA, not HIPAA** (but may follow both in medical SLP roles)

> **High-Yield:** FERPA vs HIPAA is a commonly tested distinction. School SLPs = FERPA. Medical SLPs = HIPAA. Know which applies in each setting.

### Medicare

- **Part A**: Inpatient hospital/SNF services
- **Part B**: Outpatient services (most SLP services billed here)
- Requires services be **medically necessary** and **skilled**
- **8-Minute Rule**: Time-based billing for therapy services
- **Functional Limitation Reporting**: Document severity and predicted outcome
- SLP services must be provided by or under supervision of a **licensed SLP**
- SLPAs **cannot** independently bill Medicare
- **SNF Prospective Payment System (PPS)**: PDPM model classifies patients for reimbursement

> **High-Yield:** Medicare requires services to be "skilled" — maintenance programs alone are not sufficient unless skilled SLP judgment is needed to maintain function (Jimmo v. Sebelius).
`,
    keyTerms: [
      {
        term: 'FAPE',
        definition:
          'Free Appropriate Public Education — IDEA mandate that students with disabilities receive special education at no cost in the least restrictive environment',
      },
      {
        term: 'LRE',
        definition:
          'Least Restrictive Environment — students with disabilities educated with non-disabled peers to the maximum extent appropriate',
      },
      {
        term: 'IFSP',
        definition:
          'Individualized Family Service Plan — Part C early intervention plan for birth–2; family-centered with outcomes in natural environments',
      },
      {
        term: 'IEP',
        definition:
          'Individualized Education Program — Part B plan for ages 3–21; includes measurable goals, services, accommodations',
      },
      {
        term: 'PHI',
        definition:
          'Protected Health Information — individually identifiable health data protected under HIPAA',
      },
      {
        term: 'FERPA',
        definition:
          'Federal law protecting student education records; applies to school-based SLPs rather than HIPAA',
      },
      {
        term: 'Jimmo v. Sebelius',
        definition:
          '2013 settlement clarifying Medicare covers skilled maintenance therapy — function need not be improving if skilled care is needed to maintain or prevent decline',
      },
    ],
    sortOrder: 6,
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Research & EBP
  // ─────────────────────────────────────────────────────────────
  {
    id: 'research-ebp',
    title: 'Research Design & Evidence-Based Practice',
    contentCategory: 'III',
    subcategory: 'Research & EBP',
    bigNine: ['Professional Issues'],
    contentMarkdown: `
## Research Design & Evidence-Based Practice

### EBP Triangle

Evidence-Based Practice integrates three components:
1. **Best available research evidence**
2. **Clinical expertise** (SLP's knowledge and judgment)
3. **Client/family values and preferences**

> **High-Yield:** EBP is not just "use research." All three components must be weighed. A treatment with strong evidence may not be appropriate if it conflicts with client values.

### Evidence Hierarchy (Strongest → Weakest)

1. **Systematic reviews / Meta-analyses** — synthesize multiple studies; strongest evidence
2. **Randomized Controlled Trials (RCTs)** — gold standard for individual studies
3. **Non-randomized controlled studies** (quasi-experimental)
4. **Case-control and cohort studies**
5. **Case series / Case studies**
6. **Expert opinion / Clinical consensus**

### Study Designs

| Design | Description | Strengths | Limitations |
|--------|-------------|-----------|-------------|
| **RCT** | Random assignment to treatment/control | Controls confounds; establishes causation | Expensive; may lack ecological validity |
| **Quasi-experimental** | Comparison groups without random assignment | More feasible; real-world settings | Cannot establish causation as strongly |
| **Single-subject** (SSED) | Individual serves as own control (A-B-A-B) | Ideal for clinical populations; shows individual response | Limited generalizability |
| **Cohort** | Follows groups over time (prospective) | Identifies risk factors | Confounds; time-consuming |
| **Case-control** | Compares those with/without condition (retrospective) | Efficient; good for rare conditions | Recall bias; cannot establish causation |
| **Cross-sectional** | Snapshot at one time point | Quick; inexpensive | Cannot show change over time |

### Reliability Types

| Type | What It Measures | Example |
|------|-----------------|---------|
| **Test-retest** | Consistency over time | Same test, same person, two weeks apart |
| **Inter-rater** | Agreement between raters | Two SLPs score same language sample |
| **Intra-rater** | Consistency within one rater | Same SLP re-scores same sample |
| **Internal consistency** | Items measure same construct | Cronbach's alpha on a test |
| **Parallel forms** | Equivalence of alternate forms | Form A vs. Form B of a test |

### Validity Types

| Type | What It Measures |
|------|-----------------|
| **Content** | Test covers the domain adequately (expert judgment) |
| **Criterion-related** | Correlates with an established measure |
| — **Concurrent** | Compared to criterion at same time |
| — **Predictive** | Predicts future performance |
| **Construct** | Measures the theoretical concept it claims to |
| — **Convergent** | Correlates with related measures |
| — **Discriminant** | Does NOT correlate with unrelated measures |

> **High-Yield:** Know the difference between reliability (consistency) and validity (accuracy). A test can be reliable but NOT valid. A test cannot be valid without being reliable.

### Key Statistical Concepts

- **Sensitivity**: Proportion of TRUE positives correctly identified (rules OUT when negative — "SnNout")
- **Specificity**: Proportion of TRUE negatives correctly identified (rules IN when positive — "SpPin")
- **Positive Predictive Value (PPV)**: Probability that a positive result is truly positive
- **Negative Predictive Value (NPV)**: Probability that a negative result is truly negative
- **Effect size**: Magnitude of treatment effect (Cohen's d: 0.2 = small, 0.5 = medium, 0.8 = large)
- **p-value**: Probability of obtaining results if null hypothesis is true (p < .05 = statistically significant)
- **Type I error (alpha)**: False positive — rejecting a true null hypothesis
- **Type II error (beta)**: False negative — failing to reject a false null hypothesis

> **High-Yield:** "SnNout" (high Sensitivity, Negative result rules OUT) and "SpPin" (high Specificity, Positive result rules IN) are Praxis favorites.
`,
    keyTerms: [
      {
        term: 'EBP',
        definition:
          'Evidence-Based Practice — integration of best research, clinical expertise, and client values/preferences in clinical decision-making',
      },
      {
        term: 'RCT',
        definition:
          'Randomized Controlled Trial — experimental design with random assignment to treatment/control groups; gold standard for causal inference',
      },
      {
        term: 'Sensitivity',
        definition:
          'True positive rate — ability of a test to correctly identify those WITH the condition; high sensitivity rules OUT (SnNout)',
      },
      {
        term: 'Specificity',
        definition:
          'True negative rate — ability of a test to correctly identify those WITHOUT the condition; high specificity rules IN (SpPin)',
      },
      {
        term: 'Reliability',
        definition:
          'Consistency/stability of measurement across time, raters, or items; necessary but not sufficient for validity',
      },
      {
        term: 'Validity',
        definition:
          'Degree to which a test measures what it claims to measure; requires reliability as a prerequisite',
      },
      {
        term: 'Type I error',
        definition:
          'False positive — concluding a treatment works when it does not (alpha error); controlled by significance level (p-value threshold)',
      },
    ],
    sortOrder: 7,
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Aphasia Classification
  // ─────────────────────────────────────────────────────────────
  {
    id: 'aphasia-classification',
    title: 'Aphasia Classification (Types, Features, Lesion Sites)',
    contentCategory: 'II',
    subcategory: 'Acquired Language Disorders',
    bigNine: ['Aphasia', 'Adult Language'],
    contentMarkdown: `
## Aphasia Classification

### Overview

Aphasia = acquired language disorder due to **brain damage** (most commonly left CVA). Affects expression, comprehension, reading, and/or writing in varying combinations.

### Classification by Fluency, Comprehension, and Repetition

| Type | Fluency | Comprehension | Repetition | Naming | Lesion Site |
|------|---------|--------------|------------|--------|-------------|
| **Broca's** | **Non-fluent** | Relatively preserved | Impaired | Impaired | Left posterior inferior frontal (Broca's area, BA 44/45) |
| **Wernicke's** | **Fluent** | Severely impaired | Impaired | Impaired | Left posterior superior temporal (Wernicke's area, BA 22) |
| **Global** | **Non-fluent** | Severely impaired | Impaired | Impaired | Large left perisylvian (MCA territory) |
| **Conduction** | **Fluent** | Relatively preserved | **Severely impaired** | Impaired (conduite d'approche) | Arcuate fasciculus / supramarginal gyrus |
| **Transcortical Motor** | **Non-fluent** | Relatively preserved | **Preserved** | Impaired | Anterior/superior to Broca's area (frontal watershed) |
| **Transcortical Sensory** | **Fluent** | Severely impaired | **Preserved** | Impaired | Posterior/inferior to Wernicke's (parietal-temporal watershed) |
| **Mixed Transcortical** | **Non-fluent** | Severely impaired | **Preserved** | Impaired | Anterior + posterior watershed areas |
| **Anomic** | **Fluent** | Relatively preserved | Relatively preserved | **Severely impaired** | Variable; angular gyrus, temporal lobe |

> **High-Yield:** The KEY distinguishing feature for transcortical aphasias is **preserved repetition**. If repetition is intact, think "transcortical." Conduction aphasia's hallmark is **severely impaired repetition** with **conduite d'approche** (successive self-correction attempts).

### Key Features by Type

**Broca's Aphasia:**
- Effortful, telegraphic speech ("agrammatic")
- Short phrase length (1–4 words)
- Relatively preserved comprehension (breaks down with complex syntax)
- Often co-occurs with **right hemiparesis** and **apraxia of speech**
- Awareness of deficits → **frustration**

**Wernicke's Aphasia:**
- Fluent but **empty** speech; paraphasias; neologisms; jargon
- **Poor auditory comprehension**
- Often **unaware** of deficits (anosognosia)
- "Press of speech" — excessive output
- No motor deficits typically

**Global Aphasia:**
- Severe impairment across all modalities
- May produce stereotypies or automatisms
- Largest lesion site — most severe prognosis

**Conduction Aphasia:**
- Fluent speech with frequent **phonemic paraphasias**
- **Conduite d'approche**: Repeated self-correction attempts approaching the target
- Disproportionate difficulty with repetition
- Good comprehension

### Paraphasia Types

| Type | Definition | Example |
|------|-----------|---------|
| **Phonemic/Literal** | Sound substitution | "tevelision" for "television" |
| **Semantic/Verbal** | Related word substitution | "chair" for "table" |
| **Neologism** | Nonexistent word | "plumbert" for "telephone" |
| **Unrelated** | Unrelated real word | "apple" for "chair" |

### Assessment Tools

- **Western Aphasia Battery-Revised (WAB-R)**: Yields Aphasia Quotient (AQ) and classifies aphasia type
- **Boston Diagnostic Aphasia Examination (BDAE-3)**: Comprehensive; includes Cookie Theft picture
- **Boston Naming Test (BNT)**: 60-item confrontation naming test
- **Comprehensive Aphasia Test (CAT)**: Includes cognitive screening

### Treatment Approaches

- **Melodic Intonation Therapy (MIT)**: For non-fluent aphasia; uses melodic contour to access right hemisphere language
- **Constraint-Induced Language Therapy (CILT)**: Forces verbal communication; no compensatory strategies
- **Semantic Feature Analysis (SFA)**: Activates semantic network for word retrieval
- **Response Elaboration Training (RET)**: Increases verbal elaboration
- **PACE (Promoting Aphasics' Communicative Effectiveness)**: Functional, conversational approach
- **Script training**: Practices functional scripts for daily situations

> **High-Yield:** MIT uses the **right hemisphere**'s musical processing to facilitate language in Broca's aphasia patients. It is NOT singing therapy — it uses specific melodic contours paired with tapping.
`,
    keyTerms: [
      {
        term: "Broca's aphasia",
        definition:
          'Non-fluent, agrammatic aphasia with relatively preserved comprehension; lesion in left posterior inferior frontal gyrus',
      },
      {
        term: "Wernicke's aphasia",
        definition:
          'Fluent aphasia with severely impaired comprehension, paraphasias, and poor self-monitoring; lesion in left posterior superior temporal gyrus',
      },
      {
        term: 'Conduction aphasia',
        definition:
          "Fluent aphasia with disproportionately impaired repetition and conduite d'approche; lesion in arcuate fasciculus",
      },
      {
        term: 'Global aphasia',
        definition:
          'Severe non-fluent aphasia with impairment across all language modalities; large left hemisphere lesion',
      },
      {
        term: "Conduite d'approche",
        definition:
          'Repeated self-correction attempts progressively approaching the target word; hallmark of conduction aphasia',
      },
      {
        term: 'Paraphasia',
        definition:
          'Unintended word/sound substitution — phonemic (sound-based), semantic (meaning-based), or neologistic (nonword)',
      },
      {
        term: 'Transcortical aphasias',
        definition:
          'Aphasia types characterized by PRESERVED repetition (motor, sensory, or mixed); lesions in watershed areas sparing perisylvian cortex',
      },
    ],
    sortOrder: 8,
  },

  // ─────────────────────────────────────────────────────────────
  // 9. Motor Speech Disorders
  // ─────────────────────────────────────────────────────────────
  {
    id: 'motor-speech-disorders',
    title: 'Motor Speech Disorders (Dysarthria Types & CAS)',
    contentCategory: 'II',
    subcategory: 'Motor Speech',
    bigNine: ['Motor Speech', 'Articulation/Phonology'],
    contentMarkdown: `
## Motor Speech Disorders

### Dysarthria vs. Apraxia of Speech

| Feature | Dysarthria | Apraxia of Speech (AOS) |
|---------|-----------|------------------------|
| **Nature** | Neuromuscular execution disorder | Motor planning/programming disorder |
| **Errors** | Consistent; distortions predominate | **Inconsistent**; substitutions & distortions |
| **Rate** | Often slow or rapid (type-dependent) | Slow with trial-and-error **groping** |
| **Prosody** | Abnormal (type-specific) | Disrupted; **equal stress** pattern |
| **Automatic speech** | Equally affected | **Better** than volitional speech |
| **Error pattern** | Simplification errors | Errors increase with word length/complexity |
| **Nonspeech oral movements** | Often impaired | May be intact (dissociation) |

> **High-Yield:** AOS is a PLANNING disorder, not a muscle weakness disorder. Hallmarks: inconsistent errors, groping, increased errors with complexity, and islands of fluency on automatic speech.

### Dysarthria Types (Mayo Classification)

| Type | Lesion Site | Key Features | Associated Conditions |
|------|-----------|--------------|----------------------|
| **Flaccid** | LMN (cranial/spinal nerves) | Hypernasality, breathy voice, nasal emission, muscle atrophy, fasciculations | Myasthenia gravis, Guillain-Barré, Bell's palsy, bulbar ALS |
| **Spastic** | UMN (bilateral) | Strained-strangled voice, slow rate, hypernasality, reduced range | Bilateral stroke, pseudobulbar palsy, spastic CP |
| **Ataxic** | Cerebellum | **Irregular articulatory breakdowns**, excess and equal stress, scanning speech, "drunken" quality | Cerebellar stroke, MS, Friedrich's ataxia, alcohol toxicity |
| **Hypokinetic** | Basal ganglia (substantia nigra) | Monopitch, monoloudness, reduced stress, short rushes of speech, breathy voice, **festinating** speech | **Parkinson's disease** |
| **Hyperkinetic** | Basal ganglia | Involuntary movements affect speech; variable; voice stoppages; excess loudness variations | Huntington's disease, dystonia, chorea, Tourette's |
| **Unilateral UMN** | UMN (unilateral) | Imprecise consonants, harsh voice, slow rate; generally mild | Unilateral stroke |
| **Mixed** | Multiple systems | Combined features | **ALS** (flaccid + spastic), MS, Wilson's disease |

> **High-Yield:** **ALS** = mixed flaccid-spastic dysarthria — this is the most commonly tested mixed type. **Parkinson's** = hypokinetic dysarthria. **Ataxic** dysarthria features "scanning speech" with excess and equal stress.

### Childhood Apraxia of Speech (CAS)

**ASHA's 3 Consensus Features:**
1. **Inconsistent errors** on consonants and vowels in repeated productions
2. **Lengthened and disrupted coarticulatory transitions** between sounds/syllables
3. **Inappropriate prosody** (especially equal stress or lexical stress errors)

**Additional CAS Characteristics:**
- Limited consonant and vowel inventory
- Vowel errors (unusual in pure articulation disorders)
- Groping/silent posturing
- Increased errors with length and complexity
- Gap between receptive and expressive language (receptive >> expressive)
- Difficulty with volitional oral movements (may co-occur with oral apraxia)

**CAS Treatment:**
- **DTTC (Dynamic Temporal and Tactile Cueing)**: Integral stimulation ("watch me, listen to me, do what I do")
- **ReST (Rapid Syllable Transition Treatment)**: Targets smooth transitions
- **PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets)**: Tactile-kinesthetic cues
- High **intensity** and **frequency** of practice (3–5x/week ideal)
- Principles of **motor learning**: distributed practice, variable practice, knowledge of results

> **High-Yield:** CAS is diagnosed by behavioral speech features, NOT by neurological testing. Do NOT diagnose CAS based on non-speech oral motor difficulties alone.

### Treatment for Dysarthria

- **Lee Silverman Voice Treatment (LSVT LOUD)**: Hypokinetic dysarthria (Parkinson's); "Think loud!"
- **Palatal lift/prosthesis**: Flaccid dysarthria with velopharyngeal incompetence
- **Rate control strategies**: Pacing board, alphabet board, finger tapping
- **Respiratory support**: Expiratory muscle strength training (EMST), postural adjustments
- **Prosodic training**: Contrastive stress drills for monotone speech
`,
    keyTerms: [
      {
        term: 'Apraxia of Speech (AOS)',
        definition:
          'Motor speech planning/programming disorder characterized by inconsistent errors, groping, and prosodic disruption; NOT due to muscle weakness',
      },
      {
        term: 'Flaccid dysarthria',
        definition:
          'LMN damage causing hypotonia, breathy voice, hypernasality, nasal emission; seen in myasthenia gravis, bulbar palsy',
      },
      {
        term: 'Spastic dysarthria',
        definition:
          'Bilateral UMN damage causing hypertonia, strained-strangled voice, slow rate; seen in pseudobulbar palsy',
      },
      {
        term: 'Ataxic dysarthria',
        definition:
          'Cerebellar damage causing irregular articulatory breakdowns, excess and equal stress, "scanning speech"',
      },
      {
        term: 'Hypokinetic dysarthria',
        definition:
          "Basal ganglia damage (substantia nigra) causing monopitch, monoloudness, festinating speech; hallmark of Parkinson's disease",
      },
      {
        term: 'CAS',
        definition:
          'Childhood Apraxia of Speech — motor planning disorder with inconsistent errors, disrupted coarticulatory transitions, and inappropriate prosody',
      },
      {
        term: 'DTTC',
        definition:
          'Dynamic Temporal and Tactile Cueing — integral stimulation approach for CAS using multimodal cues and systematic cue reduction',
      },
    ],
    sortOrder: 9,
  },

  // ─────────────────────────────────────────────────────────────
  // 10. Dysphagia Assessment
  // ─────────────────────────────────────────────────────────────
  {
    id: 'dysphagia-assessment',
    title: 'Dysphagia Assessment (Bedside, MBSS, FEES, PAS)',
    contentCategory: 'II',
    subcategory: 'Dysphagia',
    bigNine: ['Dysphagia'],
    contentMarkdown: `
## Dysphagia Assessment

### Clinical Bedside/Swallow Evaluation (CSE)

**Components:**
- **Case history**: Medical diagnoses, medications, NPO status, weight changes, pneumonia history
- **Oral mechanism exam**: Strength, range, symmetry, sensation of oral structures (CN assessment)
- **Cognitive/language screen**: Alertness, orientation, ability to follow commands
- **Trial swallows**: Various consistencies — observe oral control, timing, laryngeal elevation, cough/throat clear
- **Cervical auscultation**: Stethoscope on lateral neck to listen for swallow sounds (adjunct, not diagnostic)

**CSE Limitations:**
- **Cannot visualize pharyngeal phase** — cannot detect silent aspiration
- Cannot assess pharyngeal residue, penetration, or aspiration definitively
- Sensitivity for aspiration: only ~50–60%
- Best used for screening; instrumental assessment recommended when aspiration is suspected

> **High-Yield:** Wet/gurgly voice and coughing during/after swallow are RED FLAGS but their absence does NOT rule out aspiration. **Silent aspiration** occurs in ~40% of aspirating patients.

### Modified Barium Swallow Study (MBSS / VFSS)

- **Gold standard** for dysphagia assessment
- Real-time fluoroscopic imaging of all swallow phases
- Patient ingests barium-coated foods/liquids of various consistencies
- SLP directs the study; radiologist provides fluoroscopy
- Visualizes **oral, pharyngeal, and upper esophageal** phases

**What MBSS Shows:**
- Bolus formation and transit
- Oral residue and premature spillage
- Vallecular and pyriform sinus residue
- Penetration and aspiration (timing relative to swallow)
- Effectiveness of compensatory strategies (tested in real-time)
- Epiglottic deflection, hyolaryngeal excursion, UES opening

**MBSS Standardized Protocol — MBSImP:**
- 17 physiologic components scored on ordinal scales
- Provides objective, reliable scoring framework
- Components include: lip closure, tongue control, bolus transport, laryngeal elevation, pharyngeal contraction, UES opening, etc.

### Fiberoptic Endoscopic Evaluation of Swallowing (FEES)

- Flexible endoscope passed transnasally to view pharynx/larynx from above
- Visualizes pharyngeal and laryngeal structures **before and after** the swallow
- **Whiteout** during the swallow (pharyngeal contraction obscures view)
- Can be done at **bedside** — portable; no radiation
- Excellent for assessing **secretion management**, vocal fold function, velopharyngeal closure

**FEES Advantages over MBSS:**
- Portable (ICU, bedside, nursing home)
- No radiation exposure
- Can assess secretions
- Repeated trials without radiation concern
- Views laryngeal anatomy directly

**FEES Limitations:**
- Cannot view oral phase or esophageal phase
- **Whiteout** during swallow — cannot see moment of aspiration
- Cannot assess UES opening or bolus transit timing as precisely

### Penetration-Aspiration Scale (PAS)

| Score | Description |
|-------|-------------|
| **1** | Material does not enter airway |
| **2** | Material enters airway, stays above vocal folds, is ejected |
| **3** | Material above vocal folds, NOT ejected |
| **4** | Material contacts vocal folds, is ejected |
| **5** | Material contacts vocal folds, NOT ejected |
| **6** | Material passes below vocal folds, is ejected (aspiration with cough) |
| **7** | Material passes below vocal folds, NOT ejected despite effort |
| **8** | Material passes below vocal folds, **no effort** to eject (**silent aspiration**) |

> **High-Yield:** PAS 1–2 = normal to mild. PAS 3–5 = penetration. PAS 6–8 = aspiration. **PAS 8 = silent aspiration** — the most dangerous. Memorize PAS 1, 5, 6, and 8 at minimum.

### When to Refer for Instrumental Assessment

- Suspected silent aspiration (history of pneumonia, weak cough, neurological diagnosis)
- CSE findings are equivocal
- Need to evaluate effectiveness of compensatory strategies
- Persistent dysphagia despite treatment
- Pre-/post-surgical evaluation
- Failure to progress with current diet recommendations
`,
    keyTerms: [
      {
        term: 'MBSS (Modified Barium Swallow Study)',
        definition:
          'Fluoroscopic imaging of swallowing with barium-coated boluses; gold standard for dysphagia assessment; visualizes all phases',
      },
      {
        term: 'FEES',
        definition:
          'Fiberoptic Endoscopic Evaluation of Swallowing — endoscopic view of pharynx/larynx; portable, no radiation; limited by whiteout during swallow',
      },
      {
        term: 'PAS',
        definition:
          'Penetration-Aspiration Scale — 8-point ordinal scale rating airway invasion; 1 = no entry, 8 = silent aspiration',
      },
      {
        term: 'Silent aspiration',
        definition:
          'Aspiration without cough or overt signs; occurs in ~40% of aspirating patients; PAS score of 8',
      },
      {
        term: 'Whiteout',
        definition:
          'Loss of endoscopic visualization during FEES when pharyngeal walls contract around bolus; cannot see the exact moment of swallowing',
      },
      {
        term: 'MBSImP',
        definition:
          'Modified Barium Swallow Impairment Profile — standardized MBSS scoring system with 17 physiologic components',
      },
      {
        term: 'Cervical auscultation',
        definition:
          'Listening to swallow sounds at the neck with a stethoscope; adjunct screening tool, not diagnostic for aspiration',
      },
    ],
    sortOrder: 10,
  },

  // ─────────────────────────────────────────────────────────────
  // 11. Pediatric Assessment Essentials
  // ─────────────────────────────────────────────────────────────
  {
    id: 'pediatric-assessment',
    title: 'Pediatric Assessment Essentials',
    contentCategory: 'II',
    subcategory: 'Assessment',
    bigNine: ['Child Language', 'Articulation/Phonology', 'Assessment'],
    contentMarkdown: `
## Pediatric Assessment Essentials

### Assessment Framework

All pediatric assessments should consider:
- **Developmental history** (prenatal, birth, milestones)
- **Medical history** (hearing, ENT, neurological, genetic conditions)
- **Family history** of speech/language/learning disorders
- **Cultural and linguistic background** — bilingualism is NOT a disorder
- **Functional impact** on participation in daily activities

### Standardized vs. Non-Standardized Assessment

| Standardized | Non-Standardized |
|-------------|-----------------|
| Norm-referenced or criterion-referenced | Language samples, observations, dynamic assessment |
| Controlled administration | Flexible administration |
| Compares to normative sample | Describes individual performance |
| May have bias for CLD populations | More appropriate for CLD populations |
| Yields standard scores, percentiles | Yields qualitative/descriptive data |

> **High-Yield:** Standardized tests should NEVER be the sole basis for diagnosis, especially for **culturally/linguistically diverse (CLD)** populations. Use multiple data sources.

### Key Standardized Tests — Know These

| Test | Ages | What It Measures |
|------|------|-----------------|
| **CELF-5** (Clinical Evaluation of Language Fundamentals) | 5–21 | Comprehensive language (receptive + expressive); Core Language Score |
| **PLS-5** (Preschool Language Scales) | Birth–7;11 | Auditory comprehension + expressive communication |
| **PPVT-5** (Peabody Picture Vocabulary Test) | 2;6–90+ | Receptive vocabulary |
| **EVT-3** (Expressive Vocabulary Test) | 2;6–90+ | Expressive vocabulary |
| **Goldman-Fristoe-3** (GFTA-3) | 2–21 | Articulation (single-word level) |
| **KLPA-3** (Khan-Lewis Phonological Analysis) | 2–21 | Phonological processes (used with GFTA-3) |
| **CASL-2** (Comprehensive Assessment of Spoken Language) | 3–21 | Spoken language (no reading/writing required) |
| **TOLD** (Test of Language Development) | 4–17 | Listening, organizing, speaking, grammar, semantics |
| **OWLS-II** (Oral and Written Language Scales) | 3–21 | Listening comprehension, oral expression, reading, writing |
| **Rossetti Infant-Toddler Language Scale** | Birth–3 | Interaction, pragmatics, play, language, comprehension; criterion-referenced |

### Language Sample Analysis

**Minimum sample size:** 50–100 utterances in spontaneous speech

**Key Measures:**
- **MLU** (Mean Length of Utterance) — in morphemes
- **TTR** (Type-Token Ratio) — lexical diversity
- **NDW** (Number of Different Words) — vocabulary measure
- **% grammatical utterances** — morphosyntactic accuracy
- **Pragmatic analysis** — topic maintenance, turn-taking, presupposition

### Dynamic Assessment

- **Test-teach-retest** paradigm
- Assesses **learning potential** (modifiability), not static knowledge
- Especially valuable for **CLD** children — reduces cultural/linguistic bias
- **Mediated Learning Experience (MLE)**: Clinician provides graduated support during "teach" phase
- Look at: **responsivity, transfer, and awareness**

> **High-Yield:** Dynamic assessment is the recommended approach for differentiating **language difference from language disorder** in bilingual/CLD children. A child who shows high modifiability likely has a language difference, not a disorder.

### Bilingual Assessment Considerations

- Assess in **ALL languages** the child speaks
- **Language loss** (attrition) in L1 is normal during L2 acquisition and is NOT a disorder
- **Code-switching** is a normal bilingual phenomenon, NOT a sign of confusion
- Use **interpreters** trained in assessment procedures when needed
- Cross-linguistic transfer effects are expected (e.g., accent, word order influence)
- **Difference vs. disorder**: True disorder affects ALL languages; a difference affects only one

> **High-Yield:** If errors appear in BOTH languages, suspect a disorder. If errors appear only in the newer language, suspect a difference/normal acquisition pattern.
`,
    keyTerms: [
      {
        term: 'Dynamic assessment',
        definition:
          'Test-teach-retest paradigm measuring learning potential rather than static knowledge; gold standard for differentiating language difference from disorder in CLD children',
      },
      {
        term: 'Language sample analysis',
        definition:
          'Collection and analysis of spontaneous speech (50–100 utterances) examining MLU, TTR, grammatical accuracy, and pragmatic skills',
      },
      {
        term: 'CELF-5',
        definition:
          'Clinical Evaluation of Language Fundamentals — comprehensive standardized language test for ages 5–21 yielding Core Language Score',
      },
      {
        term: 'PLS-5',
        definition:
          'Preschool Language Scales — standardized test for birth through 7;11 measuring auditory comprehension and expressive communication',
      },
      {
        term: 'Code-switching',
        definition:
          'Alternating between two languages within a conversation; a normal bilingual behavior, NOT a sign of language disorder',
      },
      {
        term: 'CLD',
        definition:
          'Culturally and Linguistically Diverse — populations requiring assessment adaptations to avoid cultural/linguistic bias',
      },
      {
        term: 'Norm-referenced test',
        definition:
          'Standardized test comparing individual performance to a normative sample; yields standard scores, percentiles, and age equivalents',
      },
    ],
    sortOrder: 11,
  },

  // ─────────────────────────────────────────────────────────────
  // 12. Hearing & Audiogram Interpretation
  // ─────────────────────────────────────────────────────────────
  {
    id: 'hearing-audiogram',
    title: 'Hearing & Audiogram Interpretation',
    contentCategory: 'I',
    subcategory: 'Hearing',
    bigNine: ['Hearing', 'Audiology'],
    contentMarkdown: `
## Hearing & Audiogram Interpretation

### Hearing Loss Classification by Degree

| Degree | Hearing Level (dB HL) | Impact |
|--------|----------------------|--------|
| **Normal** | -10 to 15 dB | No significant difficulty |
| **Slight** | 16–25 dB | Difficulty with faint speech |
| **Mild** | 26–40 dB | Difficulty with soft speech; misses 25–40% of speech |
| **Moderate** | 41–55 dB | Misses 50%+ of speech; conversation must be loud |
| **Moderately severe** | 56–70 dB | Misses most speech at conversational level |
| **Severe** | 71–90 dB | May hear loud voice at 1 foot; relies on amplification |
| **Profound** | 91+ dB | May feel vibrations; relies on visual communication |

### Types of Hearing Loss

| Type | Site of Lesion | Audiometric Pattern | Examples |
|------|---------------|-------------------|----------|
| **Conductive** | Outer/middle ear | Air-bone gap >10 dB; bone conduction normal | Otitis media, cerumen, TM perforation, otosclerosis, cholesteatoma |
| **Sensorineural** | Inner ear (cochlea) or CN VIII | Air and bone conduction equally impaired; no air-bone gap | Presbycusis, noise-induced, ototoxicity, Meniere's, acoustic neuroma |
| **Mixed** | Both outer/middle AND inner ear | Air-bone gap present but bone conduction also impaired | Otitis media + presbycusis |
| **Auditory neuropathy spectrum disorder (ANSD)** | CN VIII or auditory brainstem | Present OAEs, absent/abnormal ABR | Hyperbilirubinemia, prematurity |

> **High-Yield:** **Conductive** loss has an air-bone gap (bone is normal). **Sensorineural** has no gap (both are impaired equally). **Mixed** has a gap but bone is also impaired.

### Reading an Audiogram

- **X-axis**: Frequency (Hz) — low (250) to high (8000)
- **Y-axis**: Intensity (dB HL) — quiet (top) to loud (bottom)
- **O** = right ear air conduction; **X** = left ear air conduction
- **< or [** = right ear bone conduction; **> or ]** = left ear bone conduction
- **Speech banana**: Area where speech sounds fall (~20–50 dB, 250–6000 Hz)

### Key Audiometric Tests

| Test | What It Measures | Clinical Use |
|------|-----------------|-------------|
| **Pure-tone audiometry** | Hearing thresholds by frequency | Establishes type and degree of hearing loss |
| **Speech Reception Threshold (SRT)** | Softest level to repeat spondee words 50% | Should agree with PTA (±10 dB) |
| **Word Recognition Score (WRS)** | % of words correctly repeated at suprathreshold level | Assesses clarity of hearing; poor WRS suggests retrocochlear pathology |
| **Tympanometry** | Middle ear function (compliance, pressure) | Type A (normal), Type B (flat — effusion), Type C (negative pressure — Eustachian tube dysfunction) |
| **OAE (Otoacoustic Emissions)** | Outer hair cell function | Newborn screening; present = cochlea intact |
| **ABR (Auditory Brainstem Response)** | Neural response from CN VIII to brainstem | Newborn screening; threshold estimation; retrocochlear assessment |

### Tympanometry Types

| Type | Peak | Compliance | Interpretation |
|------|------|-----------|---------------|
| **Type A** | 0 daPa | Normal | Normal middle ear |
| **Type As** | 0 daPa | Reduced (shallow) | Otosclerosis, stiffened ossicles |
| **Type Ad** | 0 daPa | Increased (tall) | Ossicular discontinuity, flaccid TM |
| **Type B** | No peak | Flat | Middle ear effusion, TM perforation (with large volume) |
| **Type C** | Negative pressure | Normal or reduced | Eustachian tube dysfunction |

> **High-Yield:** Type B tympanogram = flat = **effusion** (most common in kids with otitis media). Type B + large ear canal volume = TM **perforation**.

### Impact of Hearing Loss on Speech-Language Development

- Even **mild** hearing loss can significantly impact speech/language development
- High-frequency hearing loss → difficulty with /s, z, f, θ, ʃ/ (voiceless fricatives)
- **Critical period** for language: birth–3 years — early identification is essential
- **Universal Newborn Hearing Screening (UNHS)**: Screen by 1 month, diagnose by 3 months, intervene by 6 months (**1-3-6 guideline**)

> **High-Yield:** The 1-3-6 guideline is frequently tested. Also know that the **Joint Committee on Infant Hearing (JCIH)** publishes risk factors for hearing loss.
`,
    keyTerms: [
      {
        term: 'Conductive hearing loss',
        definition:
          'Hearing loss due to outer/middle ear pathology; characterized by air-bone gap with normal bone conduction',
      },
      {
        term: 'Sensorineural hearing loss',
        definition:
          'Hearing loss due to inner ear (cochlea) or CN VIII damage; air and bone conduction equally impaired',
      },
      {
        term: 'Tympanometry',
        definition:
          'Objective test of middle ear function measuring compliance/admittance; Type A (normal), Type B (effusion), Type C (negative pressure)',
      },
      {
        term: 'OAE',
        definition:
          'Otoacoustic Emissions — sounds generated by outer hair cells; presence indicates cochlear function; used in newborn screening',
      },
      {
        term: 'ABR',
        definition:
          'Auditory Brainstem Response — electrophysiological test of auditory pathway from CN VIII to brainstem; objective threshold estimation',
      },
      {
        term: 'SRT',
        definition:
          'Speech Reception Threshold — softest level at which spondee words are repeated correctly 50% of the time; should agree with PTA ±10 dB',
      },
      {
        term: '1-3-6 Guideline',
        definition:
          'JCIH recommendation: screen hearing by 1 month, diagnose by 3 months, begin intervention by 6 months',
      },
    ],
    sortOrder: 12,
  },

  // ─────────────────────────────────────────────────────────────
  // 13. Genetic Syndromes
  // ─────────────────────────────────────────────────────────────
  {
    id: 'genetic-syndromes',
    title: 'Genetic Syndromes Relevant to SLP',
    contentCategory: 'I',
    subcategory: 'Medical & Developmental Conditions',
    bigNine: ['Child Language', 'Articulation/Phonology'],
    contentMarkdown: `
## Genetic Syndromes Relevant to SLP

### Trisomy 21 (Down Syndrome)

- **Genetics**: Extra chromosome 21
- **Speech-Language Profile:**
  - Language delayed > cognitive ability
  - **Expressive language** more impaired than receptive
  - Phonological errors; reduced intelligibility
  - Hypotonia → poor oral motor control → articulation difficulties
  - **Macroglossia** (relatively large tongue for oral cavity)
  - Higher rates of **middle ear effusion** → fluctuating conductive hearing loss
  - Relatively strong social/pragmatic skills (social referencing, gesture use)
  - Risk for **atlantoaxial instability** — caution with head positioning

> **High-Yield:** Down syndrome = expressive > receptive deficit (expressive is MORE impaired). Relatively strong social skills. High rate of conductive hearing loss.

### 22q11.2 Deletion Syndrome (Velocardiofacial / DiGeorge)

- **Genetics**: Microdeletion on chromosome 22
- **Key Features**: Cardiac anomalies, characteristic facies, velopharyngeal insufficiency (VPI), immune deficiency
- **Speech-Language Profile:**
  - **Velopharyngeal insufficiency (VPI)** — hypernasality, nasal emission
  - **Compensatory articulation patterns**: Glottal stops, pharyngeal fricatives
  - Language delays (expressive and receptive)
  - Learning difficulties; risk for psychiatric disorders
  - Cleft palate (overt or **submucous**)

> **High-Yield:** 22q11.2 is the #1 genetic cause of VPI. Always consider when a child presents with hypernasality + cardiac history. Compensatory articulation errors will NOT resolve with speech therapy alone — VPI must be addressed first (surgery/prosthetic).

### Fragile X Syndrome

- **Genetics**: FMR1 gene mutation on X chromosome; most common inherited cause of intellectual disability
- **More common in males** (X-linked); females may be carriers with milder symptoms
- **Speech-Language Profile:**
  - Cluttering-like speech; **fast, irregular rate**
  - Tangential language; perseveration
  - Echolalia
  - **Pragmatic deficits**: Poor eye contact, topic maintenance, social anxiety
  - Relatively strong vocabulary for cognitive level
  - May co-occur with **autism features** (~30% meet ASD criteria)

### Autism Spectrum Disorder (ASD)

- **Diagnostic criteria (DSM-5-TR):**
  1. Persistent deficits in **social communication and interaction** (all 3):
     - Social-emotional reciprocity
     - Nonverbal communicative behaviors
     - Developing/maintaining relationships
  2. **Restricted, repetitive behaviors** (at least 2 of 4):
     - Stereotyped movements/speech
     - Insistence on sameness
     - Restricted interests
     - Hyper-/hypo-reactivity to sensory input
- **Speech-Language Features**: Echolalia, pronoun reversal, atypical prosody, literal interpretation, reduced joint attention, difficulty with pragmatics and inferencing

> **High-Yield:** ASD diagnosis requires BOTH social communication deficits AND restricted/repetitive behaviors. Social communication disorder (SCD) is diagnosed when there are pragmatic deficits WITHOUT restricted/repetitive behaviors.

### Williams Syndrome

- **Genetics**: Microdeletion on chromosome 7
- **"Cocktail party" personality** — overly friendly, social
- Strong verbal abilities relative to cognitive level
- Weakness in **visuospatial** skills
- Characteristic facial features ("elfin" face)
- Cardiovascular issues (supravalvular aortic stenosis)

### Other Syndromes — Quick Reference

| Syndrome | Key SLP Feature |
|----------|----------------|
| **Pierre Robin Sequence** | Micrognathia, glossoptosis, cleft palate → feeding/airway |
| **Treacher Collins** | Craniofacial anomalies; conductive hearing loss; mandibular hypoplasia |
| **Prader-Willi** | Hypotonia → feeding difficulty in infancy; hyperphagia later; articulation deficits |
| **Angelman** | Severe ID; absent/minimal speech; receptive > expressive; happy demeanor |
| **Turner (45, X0)** | Females only; mild-moderate language/learning difficulties; hearing loss risk |
| **Klinefelter (47, XXY)** | Males only; language/learning delays; may present as late talker |
| **Rett** | Females; loss of hand skills + spoken language; stereotypic hand wringing |
| **Fetal Alcohol Spectrum** | Language delays; pragmatic deficits; executive function impairment; behavioral issues |
`,
    keyTerms: [
      {
        term: 'Trisomy 21',
        definition:
          'Down syndrome — extra chromosome 21; expressive language more impaired than receptive; hypotonia; high conductive hearing loss risk',
      },
      {
        term: '22q11.2 Deletion',
        definition:
          'Velocardiofacial/DiGeorge syndrome — most common genetic cause of VPI; cardiac anomalies; compensatory articulation',
      },
      {
        term: 'Fragile X',
        definition:
          'FMR1 gene mutation — most common inherited intellectual disability; cluttering-like speech, pragmatic deficits, 30% ASD overlap',
      },
      {
        term: 'ASD',
        definition:
          'Autism Spectrum Disorder — requires social communication deficits AND restricted/repetitive behaviors per DSM-5-TR',
      },
      {
        term: 'Williams syndrome',
        definition:
          'Chromosome 7 microdeletion — "cocktail party" personality; strong verbal skills relative to cognition; visuospatial weakness',
      },
      {
        term: 'VPI',
        definition:
          'Velopharyngeal Insufficiency — structural inadequacy of velopharyngeal mechanism; causes hypernasality and nasal emission',
      },
    ],
    sortOrder: 13,
  },

  // ─────────────────────────────────────────────────────────────
  // 14. Swallowing Anatomy & Physiology (4 Phases)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'swallowing-anatomy-physiology',
    title: 'Swallowing Anatomy & Physiology (4 Phases)',
    contentCategory: 'I',
    subcategory: 'Anatomy & Physiology',
    bigNine: ['Dysphagia', 'Anatomy & Physiology'],
    contentMarkdown: `
## Swallowing Anatomy & Physiology

### The 4 Phases of Swallowing

#### Phase 1: Oral Preparatory Phase (Voluntary)

**Function:** Prepare the bolus for swallowing

- **Lip closure** (CN VII) prevents anterior leakage
- **Mastication** (CN V) — rotary jaw movement for solids
- **Buccal tension** (CN VII) keeps food on teeth for chewing
- **Tongue manipulation** (CN XII) mixes food with saliva, forms cohesive bolus
- **Soft palate** is lowered (nasal breathing possible during chewing)
- **Bolus containment**: Tongue holds bolus against hard palate; posterior oral seal prevents premature spillage
- **Saliva**: Parotid, submandibular, sublingual glands (CN VII, IX)

**Impairments:** Drooling, food pocketing, difficulty chewing, poor bolus formation

#### Phase 2: Oral Transit Phase (Voluntary)

**Function:** Propel the bolus posteriorly to trigger the swallow

- **Tongue tip** elevates to alveolar ridge
- **Sequential posterior tongue movement** (tongue "stripping" action) propels bolus
- **Duration**: ~1 second for liquids
- Bolus passes over tongue base → **posterior trigger zone** (faucial arches/tongue base)
- This is where the **swallow reflex is triggered**

**Impairments:** Prolonged oral transit, residue on tongue, repetitive tongue pumping, piecemeal swallow

#### Phase 3: Pharyngeal Phase (Involuntary/Reflexive)

**Function:** Transport bolus through pharynx while protecting the airway

**Events (approximately sequential):**
1. **Velopharyngeal closure** — soft palate elevates to prevent nasal regurgitation
2. **Hyolaryngeal excursion** — hyoid and larynx move **anteriorly and superiorly**
3. **Epiglottic deflection** — epiglottis inverts to cover airway (retroflexion)
4. **True vocal fold adduction** — primary airway protection (most critical)
5. **False vocal fold adduction** — secondary airway protection
6. **Arytenoid tilt** to epiglottic base — additional laryngeal vestibule closure
7. **Pharyngeal peristalsis** (constriction) — sequential contraction of pharyngeal constrictors (superior → middle → inferior)
8. **UES (cricopharyngeus) relaxation and opening** — via:
   - Neural relaxation of cricopharyngeus muscle
   - Mechanical pull from hyolaryngeal excursion
   - Bolus pressure

> **High-Yield:** The **true vocal folds** are the MOST CRITICAL level of airway protection, not the epiglottis. Hyolaryngeal excursion is critical because it contributes to BOTH epiglottic deflection AND UES opening.

**Duration**: ~1 second; fastest phase

**Impairments:** Delayed swallow initiation, reduced laryngeal closure, pharyngeal residue, penetration/aspiration, reduced UES opening

#### Phase 4: Esophageal Phase (Involuntary)

**Function:** Transport bolus from UES to stomach via esophageal peristalsis

- **Esophageal peristalsis** propels bolus (~8–20 seconds)
- **Lower esophageal sphincter (LES)** relaxes to allow entry to stomach
- **NOT within SLP scope** to treat directly, but SLPs identify esophageal-phase problems and refer to GI

**Impairments:** Reflux (GERD/LPR), strictures, motility disorders, Zenker's diverticulum

> **High-Yield:** SLPs do NOT treat esophageal-phase disorders but DO identify signs (reflux, complaints of food "sticking" low) and refer to gastroenterology.

### Key Swallowing Structures

| Structure | Role in Swallowing |
|-----------|-------------------|
| **Hyoid bone** | Anchor for tongue base and laryngeal muscles; hyolaryngeal excursion is critical |
| **Epiglottis** | Deflects during swallow to redirect bolus around airway |
| **Cricopharyngeus** | Upper esophageal sphincter; must relax for bolus passage |
| **Valleculae** | Space between tongue base and epiglottis; common residue site |
| **Pyriform sinuses** | Channels lateral to larynx; residue here suggests pharyngeal weakness |
| **Arytenoids** | Tilt to contact epiglottis; contribute to laryngeal vestibule closure |

### Swallowing Innervation Summary

| Phase | Key Nerves |
|-------|-----------|
| Oral preparatory | CN V (jaw), VII (lips, cheeks), XII (tongue) |
| Oral transit | CN XII (tongue), V (jaw) |
| Pharyngeal | CN IX (pharyngeal sensation), X (pharyngeal motor, laryngeal protection), XII (tongue base retraction) |
| Esophageal | CN X (vagus — esophageal plexus) |
`,
    keyTerms: [
      {
        term: 'Hyolaryngeal excursion',
        definition:
          'Anterior-superior movement of hyoid bone and larynx during swallowing; critical for epiglottic deflection and UES opening',
      },
      {
        term: 'UES (Upper Esophageal Sphincter)',
        definition:
          'Cricopharyngeus muscle that must relax and open for bolus passage; opens via neural relaxation, hyolaryngeal pull, and bolus pressure',
      },
      {
        term: 'Pharyngeal phase',
        definition:
          'Involuntary swallow phase involving airway protection and pharyngeal bolus transport; duration ~1 second',
      },
      {
        term: 'Epiglottic deflection',
        definition:
          'Inversion of epiglottis over airway entrance during swallowing; occurs secondary to hyolaryngeal excursion and tongue base retraction',
      },
      {
        term: 'True vocal fold adduction',
        definition:
          'Closure of true vocal folds during swallowing; the MOST CRITICAL level of airway protection',
      },
      {
        term: 'Valleculae',
        definition:
          'Space between tongue base and epiglottis where food can collect; residue here suggests reduced tongue base retraction',
      },
      {
        term: 'Pyriform sinuses',
        definition:
          'Paired channels lateral to the larynx; residue here suggests reduced pharyngeal constriction or impaired UES opening',
      },
    ],
    sortOrder: 14,
  },

  // ─────────────────────────────────────────────────────────────
  // 15. Named Treatment Approaches
  // ─────────────────────────────────────────────────────────────
  {
    id: 'named-treatment-approaches',
    title: 'Named Treatment Approaches (Comprehensive List)',
    contentCategory: 'II',
    subcategory: 'Treatment',
    bigNine: ['Language', 'Articulation/Phonology', 'Fluency', 'Voice', 'Motor Speech'],
    contentMarkdown: `
## Named Treatment Approaches

### Language Interventions

| Approach | Target Population | Key Features |
|----------|-----------------|-------------|
| **Milieu Teaching** | Young children; language delays | Naturalistic; follows child's lead; uses environmental arrangement, mand-model, time delay, incidental teaching |
| **Enhanced Milieu Teaching (EMT)** | Late talkers; early language delay | Combines responsive interaction + milieu teaching strategies |
| **Focused Stimulation** | Late talkers; early language | Saturated input of target forms in play; no demand for production |
| **It Takes Two to Talk (Hanen)** | Parents of late talkers | Parent coaching; OWL (Observe, Wait, Listen); follow child's lead |
| **More Than Words (Hanen)** | Parents of children with ASD | Parent coaching; targets social communication |
| **SCERTS** | ASD | Social Communication, Emotional Regulation, Transactional Support |
| **DIR/Floortime** | ASD | Developmental, Individual-differences, Relationship-based; follow child's lead in play |
| **Narrative-based intervention** | School-age language disorders | Story grammar; macrostructure; cohesion; story retell/generation |
| **Robust Vocabulary Instruction** | School-age; vocabulary deficits | Multiple exposures; semantic mapping; student-friendly definitions; Tier 2 words |
| **Syntax intervention** | Morphosyntax deficits | Recasting, expansion, modeling, elicited imitation; target Brown's morphemes |
| **Sentence Combining** | School-age; written language | Combine kernel sentences into complex sentences; builds syntactic complexity |

### Articulation & Phonology

| Approach | Key Features |
|----------|-------------|
| **Traditional (Van Riper)** | Ear training → isolation → syllables → words → phrases → sentences → conversation |
| **Cycles** (Hodson & Paden) | Rotate through phonological patterns cyclically; for highly unintelligible children |
| **Minimal Pairs** | Contrast target vs. error (e.g., "tea" vs. "key"); creates communicative failure |
| **Maximal Opposition** | Contrast sounds maximally different in features; promotes system-wide change |
| **Multiple Oppositions** | One error sound vs. multiple targets simultaneously; for collapsed phonemes |
| **Complexity Approach** | Target most complex sounds; generalization drives system reorganization |
| **Core Vocabulary** | Inconsistent errors; practice high-frequency whole words for consistency |
| **PROMPT** | Tactile-kinesthetic cues to jaw, lips, tongue; used for motor speech and articulation |
| **Metaphon** | Develops metaphonological awareness; teaches feature contrasts explicitly |

### Fluency

| Approach | Key Features |
|----------|-------------|
| **Lidcombe Program** | Parent-administered; for preschoolers; operant conditioning; verbal contingencies for stutter-free speech |
| **Fluency Shaping** | Targets smooth, continuous speech; controlled rate, gentle onset, light contact, continuous phonation |
| **Stuttering Modification** (Van Riper) | 4 phases: Identification → Desensitization → Modification → Stabilization; cancellations, pull-outs, preparatory sets |
| **RESTART-DCM** | Demands and Capacities Model; reduce demands, increase capacities; for young children |
| **Palin PCI** | Parent-Child Interaction therapy; modifies parent interaction style; for preschoolers |
| **Comprehensive Fluency Program** | Integrates fluency shaping + stuttering modification |

### Voice

| Approach | Key Features |
|----------|-------------|
| **LSVT LOUD** | Parkinson's/hypokinetic dysarthria; "Think loud!"; intensive (16 sessions/4 weeks); increased vocal effort |
| **Resonant Voice Therapy** (Verdolini) | Anterior focus; easy phonation; "hum" quality; reduces vocal fold collision |
| **Vocal Function Exercises** (Stemple) | Systematic strengthening; warm-up, stretching, contracting, power exercises |
| **Casper-Stone Confidential Voice** | Reduced vocal effort; for vocal fold pathology; whisper-like but NOT whisper |
| **Conversation Training Therapy (CTT)** | Carryover of voice therapy techniques into conversation |
| **Flow Phonation** | Continuous airflow before and during phonation; reduces hard glottal attacks |
| **Lee Silverman Voice Treatment (LSVT LOUD)** | See above — most commonly tested voice treatment |

### Aphasia & Cognitive-Communication

| Approach | Key Features |
|----------|-------------|
| **Melodic Intonation Therapy (MIT)** | Non-fluent aphasia; melodic contour + left-hand tapping; engages right hemisphere |
| **CILT/CIMT** | Constraint-Induced Language Therapy; forces verbal output; no gestures/writing |
| **Semantic Feature Analysis (SFA)** | Word retrieval; generate semantic features of target word to activate network |
| **Response Elaboration Training (RET)** | Increase verbal elaboration in aphasia; forward-chaining, modeling |
| **PACE** | Functional communication; equal turns; novel information exchange |
| **Script Training** | Practice automatized scripts for functional situations |
| **Spaced Retrieval Training (SRT)** | Progressive interval recall; dementia/TBI; errorless learning principle |
| **VNeST** (Verb Network Strengthening Treatment) | Targets verb + thematic role retrieval; generalization to untrained items |

> **High-Yield:** MIT = non-fluent aphasia + right hemisphere. LSVT LOUD = Parkinson's + "think loud." Lidcombe = preschool stuttering + parent-delivered. These three are the most commonly tested named approaches.
`,
    keyTerms: [
      {
        term: 'Milieu Teaching',
        definition:
          'Naturalistic language intervention using child-led interaction with environmental arrangement, mand-model, and time delay strategies',
      },
      {
        term: 'Lidcombe Program',
        definition:
          'Parent-administered behavioral stuttering treatment for preschoolers using verbal contingencies (praise for fluency, acknowledgment of stuttering)',
      },
      {
        term: 'LSVT LOUD',
        definition:
          "Lee Silverman Voice Treatment — intensive 16-session program for hypokinetic dysarthria (Parkinson's); target is increased vocal loudness",
      },
      {
        term: 'Minimal Pairs',
        definition:
          "Phonological intervention contrasting target sound with child's error production to create communicative failure and motivate change",
      },
      {
        term: 'Semantic Feature Analysis',
        definition:
          'Word retrieval treatment generating semantic features (category, use, properties) to activate the semantic network around a target word',
      },
      {
        term: 'MIT',
        definition:
          'Melodic Intonation Therapy — uses melodic contour and rhythmic tapping to facilitate language production in non-fluent aphasia via right hemisphere engagement',
      },
      {
        term: 'Cycles approach',
        definition:
          'Hodson phonological intervention cycling through target patterns (2–6 hours per pattern); for highly unintelligible children with multiple process errors',
      },
    ],
    sortOrder: 15,
  },

  // ─────────────────────────────────────────────────────────────
  // 16. Dysphagia Management
  // ─────────────────────────────────────────────────────────────
  {
    id: 'dysphagia-management',
    title: 'Dysphagia Management (Compensatory, Rehabilitative, IDDSI)',
    contentCategory: 'II',
    subcategory: 'Dysphagia',
    bigNine: ['Dysphagia'],
    contentMarkdown: `
## Dysphagia Management

### Compensatory vs. Rehabilitative Strategies

| Feature | Compensatory | Rehabilitative |
|---------|-------------|---------------|
| **Goal** | Immediate symptom management | Long-term physiological change |
| **Mechanism** | Redirects bolus flow; reduces symptoms | Strengthens muscles; improves neural control |
| **Duration of effect** | Only during use | Lasting changes |
| **Examples** | Postures, diet modifications, bolus modifications | Exercises, EMST, Shaker, MDTP |

### Compensatory Strategies

#### Postural Adjustments

| Posture | Effect | Indication |
|---------|--------|-----------|
| **Chin tuck** | Narrows airway entrance; pushes tongue base posteriorly; widens valleculae | Delayed pharyngeal swallow; reduced tongue base retraction |
| **Head turn** (to weak side) | Closes weak pyriform sinus; directs bolus to stronger side | Unilateral pharyngeal weakness; unilateral vocal fold paralysis |
| **Head tilt** (to strong side) | Uses gravity to direct bolus to stronger side | Unilateral oral/pharyngeal weakness |
| **Head back** | Uses gravity for oral transit | Oral phase impairment (reduced tongue control) — ONLY if airway protection is intact |
| **Side-lying** | Reduces effect of gravity on residue entering airway | Bilateral pharyngeal weakness; reduced pharyngeal constriction |

> **High-Yield:** **Chin tuck** is the most commonly tested posture — know that it widens valleculae and narrows the airway entrance. **Head turn to the weak side** closes the weak side. Head back is ONLY safe if laryngeal closure is intact.

#### Diet/Bolus Modifications

- **Thickened liquids**: Slow bolus transit; give more time for airway closure
- **Texture modification**: Softer solids for chewing difficulties
- **Bolus size modification**: Smaller boluses for reduced airway protection
- **Cold/carbonated/sour bolus**: Increases sensory input; may facilitate swallow trigger
- **Alternating liquids and solids**: Helps clear pharyngeal residue

### IDDSI Framework (International Dysphagia Diet Standardisation Initiative)

**Drinks (0–4):**

| Level | Label | Description |
|-------|-------|-------------|
| 0 | **Thin** | Water, juice, coffee |
| 1 | **Slightly Thick** | Thicker than water; flows through straw |
| 2 | **Mildly Thick** | Sippable; flows off spoon |
| 3 | **Moderately Thick** (formerly "honey") | Can drink from cup; does not flow through straw |
| 4 | **Extremely Thick** (formerly "pudding") | Must eat with spoon; cannot drink |

**Foods (3–7):**

| Level | Label | Description |
|-------|-------|-------------|
| 3 | **Liquidised** | Smooth, no lumps; pourable |
| 4 | **Pureed** | Smooth, cohesive; no chewing required |
| 5 | **Minced & Moist** | Small pieces (4mm); minimal chewing |
| 6 | **Soft & Bite-Sized** | Soft, tender; 1.5cm pieces; can be mashed with fork |
| 7 | **Regular/Easy to Chew** | Normal food / soft foods that are easy to chew |

> **High-Yield:** IDDSI replaced NDD (National Dysphagia Diet) as the global standard. Know that IDDSI uses numbers 0–7 with drinks and foods overlapping at levels 3–4. The old "honey thick" = IDDSI Level 3. The old "nectar thick" = IDDSI Level 2.

### Rehabilitative Exercises

| Exercise | Target | Mechanism |
|----------|--------|-----------|
| **Mendelsohn Maneuver** | Prolonged laryngeal elevation; UES opening | Hold larynx at peak elevation during swallow |
| **Effortful Swallow** | Tongue base retraction; pharyngeal pressure | Swallow with maximum effort |
| **Supraglottic Swallow** | Airway closure before/during swallow | Hold breath → swallow → cough |
| **Super-Supraglottic Swallow** | Same + increased arytenoid tilt | Hold breath + bear down → swallow → cough |
| **Masako (Tongue-Hold) Maneuver** | Pharyngeal wall compensation | Protrude tongue between teeth and swallow (exercise only, NOT with food) |
| **Shaker Exercise** | UES opening; suprahyoid strengthening | Head lifts in supine position (isometric + isokinetic) |
| **EMST (Expiratory Muscle Strength Training)** | Subglottic pressure; cough strength | Forceful exhalation against calibrated resistance |
| **MDTP (McNeill Dysphagia Therapy Program)** | Systematic swallowing rehabilitation | Uses actual food/liquid; protocol-based progressive difficulty |
| **Lee Silverman Voice Treatment (LSVT)** | Vocal loudness → swallow improvements | "Think loud" — improves laryngeal valving |

> **High-Yield:** Masako maneuver is an EXERCISE ONLY — never used with food. The Mendelsohn prolongs laryngeal elevation and UES opening. EMST has evidence for improving cough and swallow safety in Parkinson's disease.

### NPO (Nothing Per Os) Considerations

- NPO does NOT eliminate aspiration risk — patients can aspirate on their own **secretions**
- Oral care is critical during NPO periods
- NPO should be as brief as possible; disuse atrophy can worsen swallowing
- Non-oral feeding: NG tube (short-term), PEG/G-tube (long-term >4 weeks)
- SLPs recommend the route; physicians order it
`,
    keyTerms: [
      {
        term: 'Chin tuck',
        definition:
          'Compensatory posture tucking chin toward chest; widens valleculae and narrows airway entrance; used for delayed swallow and reduced tongue base retraction',
      },
      {
        term: 'IDDSI',
        definition:
          'International Dysphagia Diet Standardisation Initiative — global framework with levels 0–7 for drink thickness and food texture',
      },
      {
        term: 'Mendelsohn maneuver',
        definition:
          'Volitionally prolonging laryngeal elevation during swallow to increase UES opening duration; both compensatory and rehabilitative',
      },
      {
        term: 'Effortful swallow',
        definition:
          'Swallowing with maximum effort to increase tongue base retraction and pharyngeal pressure generation',
      },
      {
        term: 'Supraglottic swallow',
        definition:
          'Voluntary airway closure technique: hold breath, swallow, cough; protects airway before and during swallow',
      },
      {
        term: 'Shaker exercise',
        definition:
          'Supine head-lift exercise (isometric + isokinetic) strengthening suprahyoid muscles to improve UES opening',
      },
      {
        term: 'EMST',
        definition:
          'Expiratory Muscle Strength Training — forceful exhalation against calibrated resistance; improves cough strength and subglottic pressure for swallow safety',
      },
    ],
    sortOrder: 16,
  },

  // ─────────────────────────────────────────────────────────────
  // 17. Fluency Treatment
  // ─────────────────────────────────────────────────────────────
  {
    id: 'fluency-treatment',
    title: 'Fluency Disorders & Treatment',
    contentCategory: 'II',
    subcategory: 'Fluency',
    bigNine: ['Fluency'],
    contentMarkdown: `
## Fluency Disorders & Treatment

### Stuttering vs. Cluttering vs. Normal Disfluency

| Feature | Stuttering | Cluttering | Normal Disfluency |
|---------|-----------|------------|-------------------|
| **Core behaviors** | Repetitions (part-word), prolongations, blocks | Rapid/irregular rate, coalescing syllables, excessive normal disfluencies | Whole-word/phrase repetitions, revisions, interjections |
| **Awareness** | High; increased with severity | Often **low** awareness | Not aware; not concerned |
| **Tension** | Visible tension, struggle | Minimal tension | No tension |
| **Secondary behaviors** | Eye blinks, head nods, avoidance | None or minimal | None |
| **Rate** | May be normal between moments of stuttering | **Excessively fast or irregular** | Normal |
| **Improves with** | Slower rate, DAF, choral reading | **Attention to speech**; slowing down | Reduces naturally with development |
| **Onset** | Typically 2–5 years | Often not identified until school-age | Normal phase; 2–5 years |

> **High-Yield:** Stuttering = part-word repetitions, prolongations, blocks + secondary behaviors + awareness. Normal disfluency = whole-word/phrase repetitions, no tension. Cluttering = rapid rate + coalescing + low awareness.

### Stuttering Onset & Risk Factors

- **Typical onset**: 2–5 years (peak around 2.5–3.5)
- **Natural recovery**: ~75–80% of children who stutter recover spontaneously
- **Risk factors for persistence:**
  - **Male sex** (4:1 M:F ratio in persistence)
  - **Family history** of persistent stuttering
  - **Duration** of stuttering >12 months
  - **Age at onset** >3.5 years
  - Presence of **other speech-language concerns**
  - **No improvement** within 6–12 months of onset

### Stuttering Assessment

**Measures:**
- **%SS (Percent Syllables Stuttered)**: Count stuttered syllables / total syllables x 100
- **SSI-4 (Stuttering Severity Instrument)**: Standardized tool; measures frequency, duration, physical concomitants → severity rating
- **OASES (Overall Assessment of the Speaker's Experience of Stuttering)**: Self-report; measures impact on daily life
- **Attitudes**: CAAT (Communication Attitude Test) for children; S-24 for adults

### Treatment Approaches — Preschool

**Lidcombe Program:**
- **Parent-administered**; SLP coaches parent
- **Operant conditioning** model
- Stage 1: Parent provides verbal contingencies — **praise** for stutter-free speech; **acknowledgment** of stuttering (not punishment)
- Stage 2: Maintenance; gradually reduce clinic visits
- Severity Ratings (1–10) tracked daily by parent
- Goal: <1% SS and severity rating ≤2

**RESTART-DCM (Demands & Capacities Model):**
- Reduce **demands** on child's system (linguistic, motor, cognitive, emotional)
- Increase child's **capacities** (motor fluency, language skills, resilience)
- Modify environment: slower rate, simpler language, reduced questions, less time pressure
- Indirect approach — does not target stuttering directly

### Treatment Approaches — School-Age & Adults

**Stuttering Modification (Van Riper):**
1. **Identification**: Learn to identify stuttering moments
2. **Desensitization**: Reduce fear, avoidance, and negative reactions through voluntary stuttering, pseudostuttering
3. **Modification**: Learn to stutter more easily — **cancellations** (finish word, pause, re-say smoothly), **pull-outs** (modify during stuttering moment), **preparatory sets** (plan smooth production before speaking)
4. **Stabilization**: Maintain gains; self-monitoring

**Fluency Shaping:**
- Targets **smooth, continuous speech**
- Techniques: **Gentle onset**, **light articulatory contact**, **continuous phonation**, **controlled rate** (slow, then gradually increase)
- Establish fluency in controlled setting → transfer to real-world
- May use DAF (Delayed Auditory Feedback) or AAF technology

> **High-Yield:** Stuttering modification focuses on **changing the stuttering** (stutter more easily). Fluency shaping focuses on **producing fluent speech** (replace stuttering with fluency). Most modern programs integrate both.

### Counseling & Affective Components

- Address **feelings, attitudes, and avoidance** — not just overt speech behaviors
- **Cognitive Behavioral Therapy (CBT)** approaches for anxiety
- **Acceptance and Commitment Therapy (ACT)**: Acceptance of stuttering + committed action toward valued goals
- **Self-advocacy** training: Voluntary disclosure of stuttering
- SLP must address the **whole person**, not just fluency counts
`,
    keyTerms: [
      {
        term: 'Stuttering',
        definition:
          'Fluency disorder characterized by part-word repetitions, prolongations, blocks, secondary behaviors, and emotional reactions; onset typically 2–5 years',
      },
      {
        term: 'Cluttering',
        definition:
          'Fluency disorder with rapid/irregular rate, coalescing syllables, and excessive disfluencies; often with low self-awareness',
      },
      {
        term: 'Lidcombe Program',
        definition:
          'Parent-administered operant treatment for preschool stuttering using verbal contingencies — praise for fluency, acknowledgment of stuttering',
      },
      {
        term: 'Stuttering Modification',
        definition:
          "Van Riper's approach: identification → desensitization → modification (cancellations, pull-outs, preparatory sets) → stabilization",
      },
      {
        term: 'Fluency Shaping',
        definition:
          'Treatment targeting smooth continuous speech via gentle onset, light contact, continuous phonation, and controlled rate',
      },
      {
        term: '%SS',
        definition:
          'Percent Syllables Stuttered — primary fluency measure; stuttered syllables divided by total syllables times 100',
      },
      {
        term: 'SSI-4',
        definition:
          'Stuttering Severity Instrument — standardized assessment measuring frequency, duration, and physical concomitants of stuttering',
      },
    ],
    sortOrder: 17,
  },

  // ─────────────────────────────────────────────────────────────
  // 18. AAC Systems & Implementation
  // ─────────────────────────────────────────────────────────────
  {
    id: 'aac-systems',
    title: 'AAC Systems & Implementation',
    contentCategory: 'II',
    subcategory: 'AAC',
    bigNine: ['AAC'],
    contentMarkdown: `
## AAC (Augmentative & Alternative Communication)

### AAC Classification

| Category | Description | Examples |
|----------|-------------|---------|
| **Unaided** | No external equipment; uses body | Gestures, signs, facial expressions, vocalizations |
| **Aided — Low-tech** | Non-electronic external supports | Communication boards, PECS, picture books, eye-gaze boards |
| **Aided — Mid-tech** | Simple electronic devices | Single-message switches (BIGmack), sequential message devices |
| **Aided — High-tech** | Sophisticated electronic devices | SGDs (speech-generating devices): tablets with AAC apps, dedicated devices (Tobii Dynavox, PRC) |

### Key AAC Terminology

- **Augmentative**: Supplements existing communication
- **Alternative**: Replaces spoken communication entirely
- **Multimodal communication**: Using multiple AAC methods (signs + device + vocalizations) — **always the goal**
- **Communication partner**: Person communicating with the AAC user
- **Modeling/Aided Language Stimulation**: Partner uses the AAC system to model language during interaction

> **High-Yield:** AAC does NOT inhibit speech development — research consistently shows AAC SUPPORTS spoken language. There are NO prerequisites for AAC (no cognitive or age requirements). **Everyone can benefit from AAC.**

### Symbol Representation Hierarchy

From most concrete/transparent to most abstract:
1. **Real objects** (most concrete)
2. **Miniature objects**
3. **Color photographs**
4. **Line drawings** (PCS, SymbolStix)
5. **Written words**
6. **Abstract symbols** (Minspeak, Blissymbols) (most abstract)

### PECS (Picture Exchange Communication System)

**6 Phases:**
1. **Physical exchange**: Child gives picture to partner for desired item (full physical prompting)
2. **Expanding spontaneity**: Distance and persistence (travel to book, travel to partner)
3. **Picture discrimination**: Choose correct picture from an array
4. **Sentence structure**: "I want" + picture on sentence strip
5. **Responsive requesting**: "What do you want?" — answers
6. **Commenting**: "I see," "I hear," "I have" + picture

> **High-Yield:** PECS starts with a **physical exchange** — NOT pointing. Phase 1 requires TWO people (a communication partner and a physical prompter). PECS uses **backward chaining** in teaching.

### Access Methods

| Method | Description | Population |
|--------|-------------|-----------|
| **Direct selection** | Touch/point to target directly | Most people; intact motor |
| **Scanning** | System presents options sequentially; user activates switch at target | Severe motor impairment |
| — Automatic scanning | System auto-advances | Most common scanning type |
| — Step scanning | User advances manually | More cognitively demanding |
| — Group-row-column | Highlights group → row → item | Increases speed for large displays |
| **Eye gaze** | Camera tracks eye fixation to select | ALS, locked-in syndrome, severe CP |
| **Head tracking** | Camera tracks head movement | Upper extremity impairment |

### Vocabulary Selection

| Type | Description | Examples |
|------|-------------|---------|
| **Core vocabulary** | Small set of high-frequency words used across contexts | "more," "stop," "I," "want," "go," "help," "that" |
| **Fringe vocabulary** | Context-specific words unique to the individual | Names, favorite foods, school subjects, hobby terms |

> **High-Yield:** **Core vocabulary** (~200–400 words) accounts for ~80% of what we say. AAC systems should prioritize core words over extensive fringe vocabulary. Core words enable **generative language** (combining words to create novel messages).

### AAC Assessment & Implementation

**Assessment Considerations:**
- **Feature matching**: Match device features to user's sensory, motor, cognitive, and linguistic abilities
- No **candidacy requirements** — everyone communicates
- Trial periods with different systems
- Consider **positioning**, **access**, **vision**, **cognition**, **language level**
- Assess current communication methods and contexts

**Implementation:**
- **Aided Language Stimulation (ALgS)**: Model AAC use throughout the day — the #1 implementation strategy
- Teach communication partners, not just the user
- Embed in natural routines and activities
- Start with **motivating** functions (requesting, protesting)
- Gradually expand to **commenting, asking questions, social closeness**
- Monitor and adjust — AAC is a **dynamic process**

### AAC & Motor Learning Principles

- **Consistent motor plans** (words always in the same location) build automaticity
- Avoid frequently rearranging vocabulary layout
- **Robust AAC systems** provide access to all word types from the start
- Do not limit AAC to requesting only — communication serves many functions
`,
    keyTerms: [
      {
        term: 'SGD',
        definition:
          'Speech-Generating Device — high-tech AAC device that produces spoken output; includes dedicated devices and tablet-based apps',
      },
      {
        term: 'PECS',
        definition:
          'Picture Exchange Communication System — 6-phase protocol teaching functional communication through picture exchange; begins with physical exchange',
      },
      {
        term: 'Core vocabulary',
        definition:
          'Small set of high-frequency words (~200–400) that account for ~80% of daily communication; enables generative language in AAC',
      },
      {
        term: 'Fringe vocabulary',
        definition:
          'Person-specific, context-dependent words that supplement core vocabulary in AAC systems',
      },
      {
        term: 'Aided Language Stimulation',
        definition:
          'Communication partner models AAC use by pointing to symbols while speaking; the primary implementation strategy for AAC',
      },
      {
        term: 'Feature matching',
        definition:
          "AAC assessment process matching device features (access method, symbol type, output) to user's abilities and needs",
      },
      {
        term: 'Scanning',
        definition:
          'AAC access method where the system sequentially presents options and the user activates a switch to select; for severe motor impairment',
      },
    ],
    sortOrder: 18,
  },

  // ─────────────────────────────────────────────────────────────
  // 19. Voice Disorders Treatment
  // ─────────────────────────────────────────────────────────────
  {
    id: 'voice-disorders',
    title: 'Voice Disorders & Treatment',
    contentCategory: 'II',
    subcategory: 'Voice',
    bigNine: ['Voice'],
    contentMarkdown: `
## Voice Disorders & Treatment

### Voice Disorder Classification

| Category | Examples | Mechanism |
|----------|---------|-----------|
| **Structural** | Nodules, polyps, cysts, Reinke's edema, papilloma, granuloma, sulcus vocalis, web | Physical tissue change |
| **Functional** | Muscle tension dysphonia (MTD), conversion aphonia/dysphonia, ventricular fold phonation | Maladaptive voice use without structural cause |
| **Neurological** | Vocal fold paralysis/paresis, spasmodic dysphonia, essential voice tremor | Neurological impairment |

### Common Vocal Pathologies

| Pathology | Features | Key Details |
|-----------|----------|-------------|
| **Vocal fold nodules** | Bilateral, symmetric, at junction of anterior 1/3 and posterior 2/3 | Most common benign lesion; "singer's nodules"; caused by **phonotrauma**; voice therapy first |
| **Vocal fold polyps** | Usually unilateral; sessile or pedunculated | Related to single traumatic event or chronic irritation; may require surgery |
| **Reinke's edema** | Bilateral, diffuse swelling of superficial lamina propria | Associated with **smoking**; very low pitch |
| **Contact granuloma** | Posterior glottis (arytenoid process) | GERD/LPR; intubation; throat clearing; effortful voice |
| **Vocal fold paralysis** | Unilateral or bilateral; vocal fold immobility | CN X (RLN) damage; **unilateral** → breathy voice, reduced volume; **bilateral** → airway compromise |
| **Spasmodic dysphonia** | Involuntary laryngeal spasms | **Adductor** (strained, strangled voice breaks) vs. **Abductor** (breathy voice breaks); treated with **botulinum toxin** |
| **MTD** | Excessive laryngeal muscle tension without structural pathology | Diagnosis of exclusion; responds to voice therapy (laryngeal massage, resonant voice) |
| **Puberphonia** (mutational falsetto) | Persistently high pitch post-puberty | Functional; responds quickly to therapy (pitch-lowering techniques) |

> **High-Yield:** Nodules are always **bilateral**. Polyps are usually **unilateral**. Nodules = voice therapy first. Polyps = may need surgery. Nodules are at the anterior 1/3–posterior 2/3 junction (the point of maximal vibration).

### Voice Assessment

**Perceptual Assessment:**
- **CAPE-V (Consensus Auditory-Perceptual Evaluation of Voice)**: Rates overall severity, roughness, breathiness, strain, pitch, loudness on 100mm visual analog scale
- **GRBAS**: Grade, Roughness, Breathiness, Asthenicity, Strain (ordinal 0–3 scale)

**Acoustic Measures:**
| Measure | What It Assesses |
|---------|-----------------|
| **Fundamental frequency (F0)** | Average speaking pitch (adult male ~125 Hz; female ~220 Hz) |
| **Jitter** | Cycle-to-cycle frequency perturbation (pitch stability) |
| **Shimmer** | Cycle-to-cycle amplitude perturbation (loudness stability) |
| **HNR (Harmonics-to-Noise Ratio)** | Signal vs. noise; lower = more noise = more dysphonia |
| **s/z ratio** | s duration / z duration; ratio >1.4 suggests vocal fold pathology |
| **MPT (Maximum Phonation Time)** | Sustained /a/; adult norm ~15–25 seconds; reduced in glottal insufficiency |

> **High-Yield:** s/z ratio >1.4 suggests the vocal folds are not closing efficiently (air escapes during phonation). It's quick, free, and commonly tested.

### Voice Treatment Approaches

**LSVT LOUD:**
- For **hypokinetic dysphonia** (Parkinson's disease)
- 16 sessions over 4 weeks (4x/week)
- Single target: "THINK LOUD"
- Recalibrates patient's perception of vocal effort
- Evidence-based for improving voice, swallowing, and speech intelligibility

**Resonant Voice Therapy (Verdolini):**
- Anterior oral vibratory sensations during phonation
- "Hum" focus — easy phonation with minimal vocal fold collision
- For nodules, MTD, functional voice disorders
- Progresses through hierarchy: hum → syllables → words → conversation

**Vocal Function Exercises (Stemple):**
- Systematic vocal exercise program:
  1. **Warm-up**: Sustain /i/ on musical note (as long as possible)
  2. **Stretching**: Glide low to high on "knoll"
  3. **Contracting**: Glide high to low on "knoll"
  4. **Power**: Sustain notes in middle range on "knoll"
- Performed 2x each, 2x daily
- Goal = MPT targets

**Vocal Hygiene:**
- Hydration (8+ glasses water/day)
- Avoid phonotrauma (shouting, throat clearing, coughing)
- Limit caffeine and alcohol (drying)
- Manage GERD/LPR
- Avoid whispering (increases tension)
- Humidification
- Voice rest when needed (not prolonged silence)

> **High-Yield:** Vocal hygiene alone is rarely sufficient treatment — it should be combined with direct voice therapy. **Whispering is NOT recommended** — it increases laryngeal tension.
`,
    keyTerms: [
      {
        term: 'Vocal fold nodules',
        definition:
          'Bilateral, symmetric callous-like lesions at anterior-posterior 1/3 junction caused by phonotrauma; treated with voice therapy first',
      },
      {
        term: 'Spasmodic dysphonia',
        definition:
          'Neurological voice disorder with involuntary laryngeal spasms; adductor (strained breaks) or abductor (breathy breaks); treated with botulinum toxin',
      },
      {
        term: 'MTD',
        definition:
          'Muscle Tension Dysphonia — excessive laryngeal tension without structural pathology; diagnosis of exclusion; responds to voice therapy',
      },
      {
        term: 'CAPE-V',
        definition:
          'Consensus Auditory-Perceptual Evaluation of Voice — standardized perceptual voice assessment using 100mm visual analog scales',
      },
      {
        term: 's/z ratio',
        definition:
          'Duration of sustained /s/ divided by sustained /z/; ratio >1.4 suggests vocal fold pathology affecting closure',
      },
      {
        term: 'Resonant Voice Therapy',
        definition:
          'Verdolini approach targeting anterior oral vibration during easy phonation; reduces vocal fold collision while maintaining voice quality',
      },
      {
        term: 'Vocal Function Exercises',
        definition:
          "Stemple's systematic vocal exercise program with warm-up, stretching, contracting, and power exercises performed 2x each, 2x daily",
      },
    ],
    sortOrder: 19,
  },

  // ─────────────────────────────────────────────────────────────
  // 20. Treatment Planning & Documentation
  // ─────────────────────────────────────────────────────────────
  {
    id: 'treatment-planning-documentation',
    title: 'Treatment Planning & Documentation (SMART Goals, Progress Notes)',
    contentCategory: 'III',
    subcategory: 'Professional Practice',
    bigNine: ['Professional Issues'],
    contentMarkdown: `
## Treatment Planning & Documentation

### SMART Goals

All treatment goals should be **SMART**:

| Component | Definition | Example Element |
|-----------|-----------|----------------|
| **S**pecific | Clear, well-defined target behavior | "produce /s/ in word-initial position" |
| **M**easurable | Quantifiable criterion | "with 80% accuracy" |
| **A**chievable | Realistic and attainable | Within client's ability given current level |
| **R**elevant | Meaningful to client's life/function | Targets functional communication |
| **T**ime-bound | Has a defined timeline | "within 6 months" / "by the next IEP review" |

### Goal Writing Formula

**[Client] will [specific behavior] [context/condition] [criterion] [time frame].**

**Examples:**
- "Client will produce /r/ in all word positions in structured conversation with 80% accuracy over 3 consecutive sessions."
- "Client will follow 2-step directions in the classroom with 90% accuracy by the annual IEP review."
- "Client will use a sentence strip on AAC device to make 3-word requests during snack time with 80% accuracy within 12 weeks."

> **High-Yield:** Goals must be **observable and measurable**. Avoid vague terms like "improve," "understand," or "demonstrate knowledge of." Use action verbs: produce, use, identify, follow, respond, initiate, maintain.

### Goal Hierarchies

**Short-term goals (STGs)**: Stepping stones; achievable in weeks–months; build toward long-term goals

**Long-term goals (LTGs)**: Broader functional outcomes; achievable in months–year; align with discharge criteria

**Benchmarks/Objectives**: Measurable milestones within a goal (e.g., at word level → phrase → sentence → conversation)

### Documentation Types

#### SOAP Notes (Medical Settings)

| Section | Content |
|---------|---------|
| **S** — Subjective | Client/family report; complaints; self-assessment ("Patient reports voice feels tired by afternoon") |
| **O** — Objective | Measurable data; what was observed/tested ("Produced /s/ in initial position with 7/10 accuracy; MPT = 12 seconds") |
| **A** — Assessment | Clinician's professional interpretation; progress toward goals; analysis of data |
| **P** — Plan | Next steps; modifications; recommendations; frequency; referrals |

#### DAP Notes

| Section | Content |
|---------|---------|
| **D** — Data | Combined S+O; all objective and subjective information |
| **A** — Assessment | Interpretation and clinical reasoning |
| **P** — Plan | Next steps and recommendations |

#### Progress Notes for IEPs (School Settings)

- Report progress on each **IEP goal** at designated intervals (typically quarterly)
- Use objective data (%, frequency, level of cueing)
- Document: goal text, data, progress rating, narrative comment
- Progress ratings: **Mastered, Progressing, Insufficient Progress, Not Addressed**

### Billing & Documentation Requirements

**Key Principles:**
- Document **medical necessity** (why services are needed)
- Document **skilled** nature of services (why an SLP is required)
- Record **functional outcomes** (how treatment affects daily life)
- Include: date, duration, service type, CPT codes, goals addressed, techniques used, client response, plan

**CPT Codes for SLP:**
| Code | Service |
|------|---------|
| **92507** | Treatment of speech, language, voice, communication, auditory processing |
| **92521** | Evaluation of speech fluency |
| **92522** | Evaluation of speech sound production |
| **92523** | Evaluation of speech sound production + language comprehension/expression |
| **92524** | Behavioral and qualitative analysis of voice and resonance |
| **92526** | Treatment of swallowing dysfunction (dysphagia) |
| **92610** | Evaluation of oral and pharyngeal swallowing function |

### Discharge Planning

**Discharge criteria should be established at the START of treatment:**
- Goals met (functional communication achieved)
- Plateau (no measurable progress over defined period)
- Client/family request
- Attendance/compliance issues (after attempts to resolve)
- Medical status changes precluding treatment

> **High-Yield:** Discharge planning begins at EVALUATION, not when the client is ready to leave. Document discharge criteria in the initial treatment plan.

### Documentation Red Flags (What NOT to Do)

- Do not use subjective/vague language without data ("doing well," "making progress")
- Do not copy-paste notes without updating specifics
- Do not backdate or alter records
- Document all contacts, cancellations, and attempts to reach
- Do not include personal opinions unrelated to clinical care
- Always document when a client declines recommended services (**informed refusal**)
`,
    keyTerms: [
      {
        term: 'SMART goals',
        definition:
          'Goal-writing framework: Specific, Measurable, Achievable, Relevant, Time-bound; standard for SLP treatment planning',
      },
      {
        term: 'SOAP note',
        definition:
          'Medical documentation format: Subjective, Objective, Assessment, Plan; standard in healthcare settings',
      },
      {
        term: 'Medical necessity',
        definition:
          'Documentation requirement showing that services are needed to treat a medical condition and require the skill of a licensed professional',
      },
      {
        term: 'CPT codes',
        definition:
          'Current Procedural Terminology codes used for billing SLP services; 92507 (treatment), 92523 (speech-language eval), 92526 (dysphagia tx)',
      },
      {
        term: 'Discharge planning',
        definition:
          'Process of establishing criteria for ending services; should begin at the time of initial evaluation',
      },
      {
        term: 'Informed refusal',
        definition:
          "Client's documented decision to decline recommended services after being informed of risks and benefits",
      },
      {
        term: 'Progress monitoring',
        definition:
          'Systematic tracking of client performance data over time to determine treatment effectiveness and guide clinical decisions',
      },
    ],
    sortOrder: 20,
  },

  // ─────────────────────────────────────────────────────────────
  // 21. Traumatic Brain Injury (TBI)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'traumatic-brain-injury',
    title: 'Traumatic Brain Injury & Cognitive-Communication',
    contentCategory: 'II',
    subcategory: 'Acquired Disorders',
    bigNine: ['Adult Language', 'Cognitive-Communication'],
    contentMarkdown: `
## Traumatic Brain Injury & Cognitive-Communication

### TBI Classification

| Severity | GCS Score | LOC | PTA |
|----------|-----------|-----|-----|
| **Mild** | 13–15 | <30 minutes | <24 hours |
| **Moderate** | 9–12 | 30 min–24 hours | 1–7 days |
| **Severe** | 3–8 | >24 hours | >7 days |

### Types of Injury

- **Focal**: Localized damage (contusion, hemorrhage) → specific deficits based on location
- **Diffuse Axonal Injury (DAI)**: Widespread shearing of axons → attention, processing speed, executive function deficits
- **Coup-contrecoup**: Damage at impact site (coup) AND opposite side (contrecoup)
- **Most common TBI damage sites**: Frontal and temporal lobes (due to skull anatomy)

### Cognitive-Communication Deficits

Unlike aphasia, TBI cognitive-communication disorders involve:
- **Attention** deficits (sustained, selective, alternating, divided)
- **Memory** impairment (working memory, short-term, long-term encoding)
- **Executive function** deficits (planning, organization, self-monitoring, inhibition, flexibility)
- **Processing speed** reduction
- **Pragmatic/social communication** deficits (topic maintenance, turn-taking, interpreting social cues)
- **Word retrieval** difficulties (often in discourse, not confrontation naming)

> **High-Yield:** TBI communication deficits are primarily **cognitive-communication** disorders, NOT aphasia (unless there is a focal left hemisphere lesion). The hallmarks are executive function and pragmatic deficits, not grammatical errors.

### Rancho Los Amigos Levels of Cognitive Functioning

| Level | Name | Description | SLP Role |
|-------|------|------------|----------|
| **I** | No Response | Unresponsive | Sensory stimulation; family education |
| **II** | Generalized Response | Inconsistent, non-purposeful reactions | Sensory stimulation |
| **III** | Localized Response | Inconsistent but purposeful responses to stimuli | Structured sensory input |
| **IV** | Confused-Agitated | Bizarre, non-purposeful behavior; no short-term memory | Reduce stimulation; safety; calm environment |
| **V** | Confused-Inappropriate | Non-agitated; follows simple commands inconsistently; confabulation | Structure; routine; repetition |
| **VI** | Confused-Appropriate | Goal-directed with cuing; follows simple directions; memory improving | Functional tasks with moderate cueing |
| **VII** | Automatic-Appropriate | Appropriate behavior in familiar settings; robot-like | Community reintegration; self-monitoring |
| **VIII** | Purposeful-Appropriate | Functional; may have subtle cognitive deficits | Vocational/academic support; compensatory strategies |

> **High-Yield:** Rancho Level IV (Confused-Agitated) is the most commonly tested — treatment focuses on reducing stimulation and maintaining safety, NOT cognitive-linguistic therapy. Know that treatment approaches differ drastically across levels.

### Assessment

- **Standardized**: RBANS, RIPA-2, SCATBI, ASHA FACS
- **Functional**: Assess communication in real-world contexts
- **Discourse analysis**: Monitor topic maintenance, coherence, information content
- **Executive function**: Trail Making Test, Wisconsin Card Sort (psychology referral)

### Treatment Approaches

- **Restorative**: Directly train impaired cognitive functions (attention training, memory drills)
- **Compensatory**: Teach strategies to bypass deficits (memory notebook, alarms, checklists)
- **Metacognitive Strategy Instruction**: Teach self-monitoring and self-regulation
- **Social communication training**: Role-play, video feedback, group therapy
- **Environmental modification**: Reduce distractions, provide structure
`,
    keyTerms: [
      {
        term: 'GCS (Glasgow Coma Scale)',
        definition:
          'Standardized scale (3–15) measuring eye opening, verbal response, and motor response to classify TBI severity',
      },
      {
        term: 'PTA (Post-Traumatic Amnesia)',
        definition:
          'Period after TBI during which the patient cannot form new continuous memories; duration predicts severity and outcome',
      },
      {
        term: 'Diffuse Axonal Injury',
        definition:
          'Widespread shearing of axons from rotational forces; causes attention, processing speed, and executive function deficits',
      },
      {
        term: 'Rancho Los Amigos Scale',
        definition:
          '8-level scale describing cognitive/behavioral recovery after TBI; guides treatment approach at each level',
      },
      {
        term: 'Cognitive-communication disorder',
        definition:
          'Communication deficits arising from underlying cognitive impairments (attention, memory, executive function) rather than primary language disorder',
      },
      {
        term: 'Executive function',
        definition:
          'Higher-order cognitive processes including planning, organization, inhibition, flexibility, and self-monitoring; commonly impaired after frontal lobe TBI',
      },
    ],
    sortOrder: 21,
  },

  // ─────────────────────────────────────────────────────────────
  // 22. Cleft Palate & Craniofacial Anomalies
  // ─────────────────────────────────────────────────────────────
  {
    id: 'cleft-palate-craniofacial',
    title: 'Cleft Palate & Craniofacial Anomalies',
    contentCategory: 'II',
    subcategory: 'Structural Disorders',
    bigNine: ['Articulation/Phonology', 'Resonance'],
    contentMarkdown: `
## Cleft Palate & Craniofacial Anomalies

### Types of Clefts

| Type | Description | Incidence |
|------|-------------|-----------|
| **Cleft lip only** | Unilateral or bilateral; does not extend through palate | Less common alone |
| **Cleft lip and palate** | Lip + hard and/or soft palate involvement | Most common cleft type |
| **Cleft palate only** | Hard and/or soft palate; lip intact | Associated with more syndromes |
| **Submucous cleft** | Intact mucosa covering a palatal defect; **triad**: bifid uvula, zona pellucida (midline translucency), notched posterior hard palate | Often undiagnosed; suspect with hypernasality |

> **High-Yield:** Submucous cleft palate presents the classic **triad** (bifid uvula, zona pellucida, notched hard palate) and may go undetected until speech develops. Always check for it when a child presents with unexplained hypernasality.

### Surgical Timeline

| Procedure | Age | Purpose |
|-----------|-----|---------|
| **Lip repair** (cheiloplasty) | ~3 months ("Rule of 10s": 10 weeks, 10 lbs, Hgb 10) | Restore lip closure and appearance |
| **Palate repair** (palatoplasty) | ~9–12 months | Close palate before speech develops |
| **Pharyngeal flap / sphincter pharyngoplasty** | 4+ years | Correct VPI if persistent after palatoplasty |
| **Alveolar bone graft** | ~8–10 years (mixed dentition) | Close alveolar cleft; support teeth |
| **Orthognathic surgery** | After growth completion (~16–18) | Correct jaw alignment |

### Speech Characteristics

**Obligatory errors** (caused by structural deficit — will NOT resolve with speech therapy alone):
- **Hypernasality** (excessive nasal resonance on oral sounds)
- **Nasal emission** (audible or inaudible air escape through nose)
- **Nasal turbulence** (nasal emission with friction noise)
- **Reduced intraoral pressure** for pressure consonants

**Compensatory errors** (learned maladaptive patterns — CAN be treated with speech therapy):
- **Glottal stops**: Substituting glottal closure for oral stops/fricatives
- **Pharyngeal fricatives**: Friction at pharyngeal level
- **Pharyngeal stops**: Tongue base to pharyngeal wall
- **Nasal fricatives**: Directing airflow through nose for fricative targets
- **Mid-dorsum palatal stops**: Tongue body contacts palate for stops

> **High-Yield:** You MUST differentiate obligatory from compensatory errors. Surgery/prosthetics fix obligatory errors. Speech therapy targets compensatory errors. Therapy for compensatory errors is most effective AFTER VPI is resolved.

### VPI Assessment

- **Perceptual**: Hypernasality rating, nasal emission detection, pressure consonant production
- **Nasometry**: Nasalance scores (Nasometer); normative values for oral, nasal, and oral-nasal passages
- **Videofluoroscopy (multiview)**: Lateral and frontal views of VP closure during speech
- **Nasopharyngoscopy**: Endoscopic view of VP mechanism from above — assesses closure pattern
- **VP closure patterns**: Coronal, sagittal, circular, circular with Passavant's ridge

### Feeding Considerations (Pre-Surgical)

- Infants with cleft palate have difficulty generating **negative intraoral pressure** for suction
- **Cannot breastfeed** effectively in most cases (cleft palate)
- Specialty bottles: **Haberman (SpecialNeeds Feeder)**, **Dr. Brown's Specialty**, **Pigeon nipple**
- Squeeze delivery (caregiver assists flow) rather than suction-dependent
- Upright positioning to reduce nasal regurgitation
- SLP or feeding specialist guides family

### Team Approach

Cleft palate requires a **multidisciplinary team**:
- Plastic surgeon, oral surgeon, orthodontist, SLP, audiologist, ENT, geneticist, psychologist, social worker, pediatrician
- SLP role: assess/treat speech and resonance, VPI assessment, pre-surgical feeding support
`,
    keyTerms: [
      {
        term: 'VPI (Velopharyngeal Insufficiency)',
        definition:
          'Structural inadequacy of the velopharyngeal mechanism to achieve complete closure; causes hypernasality and nasal emission',
      },
      {
        term: 'Submucous cleft palate',
        definition:
          'Cleft beneath intact mucosa; classic triad: bifid uvula, zona pellucida, notched hard palate; may be occult',
      },
      {
        term: 'Compensatory articulation',
        definition:
          'Maladaptive sound substitutions (glottal stops, pharyngeal fricatives) learned to compensate for VPI; treatable with speech therapy',
      },
      {
        term: 'Obligatory errors',
        definition:
          'Speech errors directly caused by structural deficit (VPI); cannot be corrected by speech therapy alone — require surgical/prosthetic management',
      },
      {
        term: 'Hypernasality',
        definition:
          'Excessive nasal resonance during oral sounds due to incomplete velopharyngeal closure',
      },
      {
        term: 'Nasometry',
        definition:
          'Instrumental measurement of nasalance (ratio of nasal to oral acoustic energy) using a Nasometer; objective VPI assessment',
      },
    ],
    sortOrder: 22,
  },

  // ─────────────────────────────────────────────────────────────
  // 23. Dementia & Right Hemisphere Disorders
  // ─────────────────────────────────────────────────────────────
  {
    id: 'dementia-right-hemisphere',
    title: 'Dementia & Right Hemisphere Disorders',
    contentCategory: 'II',
    subcategory: 'Acquired Disorders',
    bigNine: ['Adult Language', 'Cognitive-Communication'],
    contentMarkdown: `
## Dementia & Right Hemisphere Disorders

### Dementia Types

| Type | Key Features | SLP-Relevant |
|------|-------------|-------------|
| **Alzheimer's Disease** | Most common (~60–70%); gradual onset; memory loss first; word-finding → empty speech → echolalia → mutism | Early: word-finding, topic maintenance; Late: comprehension, all communication |
| **Vascular Dementia** | 2nd most common; **stepwise** decline; related to strokes/CVD | Variable; depends on location of vascular events |
| **Lewy Body Dementia** | Visual hallucinations; fluctuating cognition; Parkinsonism | Cognitive-communication fluctuations; dysarthria may occur |
| **Frontotemporal Dementia (FTD)** | Personality/behavior changes (behavioral variant); OR progressive language decline (PPA) | SLP critical for PPA subtypes |
| **Primary Progressive Aphasia (PPA)** | Language-predominant FTD; 3 variants (see below) | Central SLP role |

### Primary Progressive Aphasia (PPA) Variants

| Variant | Key Deficit | Speech/Language Features |
|---------|-----------|------------------------|
| **Nonfluent/Agrammatic** | Motor speech + grammar | Effortful speech; AOS; agrammatism; comprehension relatively preserved early |
| **Semantic** | Word meaning | Fluent but empty speech; loss of word meaning; surface dyslexia; object recognition declines |
| **Logopenic** | Word retrieval + phonological loop | Frequent pauses for word-finding; phonemic errors; impaired repetition; often progresses to Alzheimer's |

> **High-Yield:** PPA is a **degenerative** language disorder — language is the PRIMARY and EARLIEST symptom (unlike Alzheimer's where memory is first). Know the 3 variants and their distinguishing features.

### Alzheimer's Disease — Language Decline by Stage

| Stage | Language Features |
|-------|-----------------|
| **Early** | Word-finding difficulty; circumlocution; repetitive speech; pragmatic breakdown begins |
| **Middle** | Empty speech; paraphasias; comprehension declines; difficulty following conversations; perseveration |
| **Late** | Echolalia; palilalia; mutism; severely impaired comprehension; may retain automatic speech |

### Treatment for Dementia

- **Goals**: Maintain function; compensate; support communication partners; improve quality of life
- **Spaced Retrieval Training (SRT)**: Progressive interval recall; errorless learning; evidence-based for dementia
- **Memory books/wallets**: External aids with photos, names, facts
- **Montessori-based activities**: Procedural memory tasks; meaningful activity
- **Communication partner training**: Simplify language, reduce questions, use visual supports, validate feelings
- **Environmental modifications**: Signs, labels, consistent routines

> **High-Yield:** Dementia treatment is **NOT restorative** — focus on maintaining function, compensatory strategies, and caregiver training. Spaced retrieval training is the most evidence-based direct intervention.

### Right Hemisphere Disorder (RHD)

**Key deficits** (remember: "LAMP" + neglect):
- **L**eft neglect (unilateral spatial neglect — most commonly left visual field)
- **A**nosognosia (lack of awareness of deficits)
- **M** — Pragmatic/social communication deficits
  - Difficulty with **figurative language**, sarcasm, humor, inference
  - **Tangential** discourse; **excessive/irrelevant detail**
  - Reduced use of **prosody** (flat affect; difficulty interpreting others' prosody)
  - Impaired **theory of mind** / perspective-taking
- **P**rosopagnosia (difficulty recognizing faces) in some cases

**Discourse characteristics:**
- Verbose but disorganized
- Difficulty with **main idea** / gist extraction
- Tangential, off-topic contributions
- Poor topic maintenance
- Difficulty with narratives and story comprehension

> **High-Yield:** RHD patients often present as "socially inappropriate" rather than "aphasic." They may speak fluently but miss sarcasm, interpret literally, and have difficulty with the PRAGMATIC aspects of language. Left neglect is the most dramatic perceptual feature.

### RHD Treatment

- **Neglect training**: Visual scanning strategies; lighthouse technique; anchoring
- **Pragmatic skills training**: Role-play; video feedback; social scripts
- **Inferencing practice**: Indirect requests; figurative language; theory of mind tasks
- **Prosody training**: Recognition and production of emotional/linguistic prosody
- **Awareness training**: Self-monitoring; self-evaluation; video review
`,
    keyTerms: [
      {
        term: "Alzheimer's Disease",
        definition:
          'Most common dementia; progressive; memory loss first, then language decline (word-finding → empty speech → echolalia → mutism)',
      },
      {
        term: 'PPA',
        definition:
          'Primary Progressive Aphasia — neurodegenerative disorder where language is the first and most prominent symptom; 3 variants: nonfluent, semantic, logopenic',
      },
      {
        term: 'Spaced Retrieval Training',
        definition:
          'Evidence-based intervention for dementia using progressively increasing recall intervals with errorless learning principles',
      },
      {
        term: 'Left neglect',
        definition:
          'Unilateral spatial neglect of the left visual field/body side after right hemisphere damage; patient is unaware of stimuli on the left',
      },
      {
        term: 'Anosognosia',
        definition:
          "Unawareness or denial of one's own deficits; common in right hemisphere damage and some types of dementia",
      },
      {
        term: 'RHD',
        definition:
          'Right Hemisphere Disorder — communication deficits including impaired pragmatics, prosody, figurative language, and left neglect following right brain damage',
      },
    ],
    sortOrder: 23,
  },

  // ─────────────────────────────────────────────────────────────
  // 24. Autism & Social Communication
  // ─────────────────────────────────────────────────────────────
  {
    id: 'autism-social-communication',
    title: 'Autism Spectrum Disorder & Social Communication',
    contentCategory: 'II',
    subcategory: 'Developmental Disorders',
    bigNine: ['Child Language', 'Pragmatics', 'AAC'],
    contentMarkdown: `
## Autism Spectrum Disorder & Social Communication

### DSM-5-TR Diagnostic Criteria

**A. Social Communication & Interaction** (all 3 required):
1. Deficits in **social-emotional reciprocity** (reduced sharing of interests, emotions; failure to initiate/respond to social interactions)
2. Deficits in **nonverbal communicative behaviors** (poor eye contact, gestures, facial expressions; abnormal body language)
3. Deficits in **developing, maintaining, and understanding relationships** (difficulty adjusting behavior to social contexts; difficulty sharing imaginative play; difficulty making friends)

**B. Restricted, Repetitive Behaviors** (at least 2 of 4):
1. Stereotyped/repetitive motor movements, speech, or use of objects (echolalia, lining up toys, scripting)
2. Insistence on sameness, inflexible adherence to routines, ritualized patterns
3. Highly restricted, fixated interests abnormal in intensity or focus
4. Hyper-/hypo-reactivity to sensory input or unusual sensory interests

**C.** Symptoms present in **early developmental period** (but may not manifest until social demands exceed capacity)

**D.** Cause clinically significant impairment

**E.** Not better explained by intellectual disability or global developmental delay

### Severity Levels

| Level | Social Communication | Restricted/Repetitive Behaviors |
|-------|--------------------|---------------------------------|
| **Level 1** — Requiring support | Difficulty initiating; atypical responses; may appear to have decreased interest | Inflexibility causes significant interference; difficulty switching activities |
| **Level 2** — Requiring substantial support | Marked deficits; limited initiation; reduced/abnormal responses | Behaviors frequent enough to be obvious; distress with change |
| **Level 3** — Requiring very substantial support | Severe deficits; very limited initiation; minimal response | Behaviors markedly interfere; great distress with change |

### Social Communication Disorder (SCD)

- DSM-5-TR diagnosis for pragmatic deficits WITHOUT restricted/repetitive behaviors
- Deficits in: social use of communication, matching context, conversation rules, inferencing, figurative language
- **Cannot** co-occur with ASD diagnosis
- Must rule out ASD first

> **High-Yield:** The critical distinction: ASD = social communication deficits + RRBs. SCD = social communication deficits ONLY. SCD cannot be diagnosed if ASD criteria are met.

### Communication Profile in ASD

**Language:**
- Ranges from nonverbal to verbose
- **Echolalia** (immediate and delayed) — may serve communicative functions
- Pronoun reversal ("you" for "I")
- Literal interpretation of language
- Pedantic or formal speech
- Difficulty with **figurative language**, idioms, sarcasm

**Pragmatics:**
- Reduced **joint attention** (pointing, showing, following gaze)
- Difficulty with **turn-taking**, **topic maintenance**, and **topic shifting**
- Limited use of **communicative functions** (especially commenting, sharing)
- May predominantly use language for **requesting** but not **social closeness**
- Difficulty reading **nonverbal cues** (body language, facial expressions, tone)

**Prosody:**
- May sound monotone, sing-song, or "robotic"
- Atypical stress and intonation patterns

### Assessment

- **ADOS-2** (Autism Diagnostic Observation Schedule): Gold standard observational assessment; semi-structured activities
- **ADI-R** (Autism Diagnostic Interview-Revised): Structured parent interview
- **SCQ** (Social Communication Questionnaire): Parent screening
- **SRS-2** (Social Responsiveness Scale): Quantifies ASD traits
- **CCC-2** (Children's Communication Checklist): Identifies pragmatic language difficulties

### Evidence-Based Interventions

| Approach | Description |
|----------|-------------|
| **Naturalistic Developmental Behavioral Interventions (NDBI)** | Umbrella term; includes ESDM, JASPER, PRT; combine behavioral + developmental principles in natural contexts |
| **ESDM (Early Start Denver Model)** | Ages 12–48 months; play-based; therapist + parent-delivered; targets social communication |
| **PRT (Pivotal Response Treatment)** | Targets "pivotal" areas: motivation, self-management, responsiveness to cues; child-initiated |
| **JASPER (Joint Attention, Symbolic Play, Engagement & Regulation)** | Targets joint attention and play development; naturalistic |
| **Social Stories (Carol Gray)** | Short written stories describing social situations from the individual's perspective; teaches expected behavior |
| **Video Modeling** | Watch videos of target behavior, then practice; effective for social skills and daily living |
| **Visual Supports** | Schedules, first-then boards, social scripts, choice boards | reduce anxiety, increase predictability |
| **AAC** | For minimally verbal individuals; SGDs, PECS, sign language — multimodal approach |

> **High-Yield:** Echolalia in ASD can be **functional** — it may serve communicative purposes (requesting, turn-taking, self-regulation). Do NOT assume echolalia is meaningless. Analyze the context and function.
`,
    keyTerms: [
      {
        term: 'Joint attention',
        definition:
          'Shared focus between two people on an object/event; includes gaze-following, pointing, and showing; early social communication skill deficient in ASD',
      },
      {
        term: 'Echolalia',
        definition:
          'Repetition of heard speech; immediate or delayed; may serve communicative functions in ASD (requesting, protesting, turn-taking)',
      },
      {
        term: 'ADOS-2',
        definition:
          'Autism Diagnostic Observation Schedule — gold standard semi-structured observational assessment for ASD',
      },
      {
        term: 'NDBI',
        definition:
          'Naturalistic Developmental Behavioral Interventions — evidence-based approaches combining developmental and behavioral principles in natural contexts; includes ESDM, PRT, JASPER',
      },
      {
        term: 'Social Communication Disorder',
        definition:
          'DSM-5-TR diagnosis for pragmatic language deficits WITHOUT restricted/repetitive behaviors; cannot co-occur with ASD',
      },
      {
        term: 'Theory of Mind',
        definition:
          'Ability to attribute mental states (beliefs, intentions, desires) to self and others; often impaired in ASD',
      },
    ],
    sortOrder: 24,
  },

  // ─────────────────────────────────────────────────────────────
  // 25. Laryngeal Anatomy & Voice Production
  // ─────────────────────────────────────────────────────────────
  {
    id: 'laryngeal-anatomy-voice',
    title: 'Laryngeal Anatomy & Voice Production',
    contentCategory: 'I',
    subcategory: 'Anatomy & Physiology',
    bigNine: ['Voice', 'Anatomy & Physiology'],
    contentMarkdown: `
## Laryngeal Anatomy & Voice Production

### Laryngeal Framework

| Structure | Type | Function |
|-----------|------|---------|
| **Thyroid cartilage** | Unpaired | Largest; "Adam's apple"; protects vocal folds |
| **Cricoid cartilage** | Unpaired | Complete ring; foundation of larynx; "signet ring" shape |
| **Epiglottis** | Unpaired | Deflects during swallowing; attached to thyroid cartilage |
| **Arytenoid cartilages** | Paired | Attach to posterior vocal folds; pivot/rock/slide for abduction/adduction |
| **Corniculate cartilages** | Paired | Sit atop arytenoids; stiffen aryepiglottic folds |
| **Cuneiform cartilages** | Paired | Within aryepiglottic folds; structural support |

### Intrinsic Laryngeal Muscles

| Muscle | Action | Innervation |
|--------|--------|------------|
| **Thyroarytenoid (TA)** | **Adduction**; shortens/tenses vocal folds (body) | RLN (CN X) |
| **Lateral Cricoarytenoid (LCA)** | **Adduction**; rotates arytenoids medially | RLN (CN X) |
| **Interarytenoid (IA)** | **Adduction**; closes posterior glottic gap | RLN (CN X) |
| **Posterior Cricoarytenoid (PCA)** | **ONLY ABDUCTOR**; opens vocal folds | RLN (CN X) |
| **Cricothyroid (CT)** | **Pitch control**; lengthens/thins vocal folds (increases pitch) | **SLN external branch** (CN X) |

> **High-Yield:** The **PCA is the ONLY abductor** of the vocal folds — if both PCAs are paralyzed, the vocal folds cannot open and the airway is compromised. The CT is the ONLY intrinsic muscle innervated by the SLN (not the RLN).

### Vocal Fold Layers (Cover-Body Theory)

From superficial to deep:
1. **Epithelium** (squamous) — cover
2. **Superficial lamina propria (SLP/Reinke's space)** — cover; key vibrating layer
3. **Intermediate lamina propria** — vocal ligament (transition)
4. **Deep lamina propria** — vocal ligament (transition)
5. **Thyroarytenoid muscle (vocalis)** — body

> **High-Yield:** The **superficial lamina propria (Reinke's space)** is the most important layer for vibration. Most vocal pathology occurs here (nodules, polyps, Reinke's edema). The cover-body theory explains how the cover vibrates over the relatively stable body.

### Myoelastic-Aerodynamic Theory of Phonation

1. **Subglottic pressure** builds below closed vocal folds
2. Pressure exceeds resistance → vocal folds are **blown apart**
3. **Bernoulli effect** + tissue elasticity → vocal folds are sucked back together
4. Cycle repeats → **mucosal wave** creates quasi-periodic vibration
5. Sound source → filtered by vocal tract (resonance) = voice quality

**Key Parameters:**
- **Subglottic pressure**: Must reach ~5–10 cm H₂O to initiate phonation
- **Fundamental frequency (F0)**: Determined by vocal fold length, tension, mass
  - Males: ~125 Hz
  - Females: ~220 Hz
  - Children: ~300 Hz
- **Intensity (loudness)**: Primarily controlled by subglottic pressure

### Source-Filter Theory

- **Source**: Vocal fold vibration creates a complex tone (harmonic series)
- **Filter**: Vocal tract (pharynx, oral cavity, nasal cavity) shapes the sound
- **Formants**: Resonant frequencies of the vocal tract
  - **F1**: Related to jaw opening / tongue height (high F1 = open/low vowel)
  - **F2**: Related to tongue advancement (high F2 = front vowel)
- Changing vocal tract shape (articulators) creates different vowels and voice qualities

### Respiration for Speech

- **Tidal breathing**: ~500 mL; 40% inhalation, 60% exhalation
- **Speech breathing**: ~10% inhalation, 90% exhalation; larger lung volumes; controlled exhalation
- Respiratory support is the **power source** for voice
- Reduced respiratory support → reduced loudness, short phrases, breathy voice

> **High-Yield:** F1 relates to tongue HEIGHT (high F1 = low/open vowel like /a/). F2 relates to tongue ADVANCEMENT (high F2 = front vowel like /i/). This appears frequently on the Praxis.
`,
    keyTerms: [
      {
        term: 'PCA (Posterior Cricoarytenoid)',
        definition:
          'The ONLY abductor of the vocal folds; opens the glottis for breathing; bilateral paralysis causes airway obstruction',
      },
      {
        term: 'Cricothyroid (CT)',
        definition:
          'Intrinsic laryngeal muscle that lengthens and tensions vocal folds to increase pitch; only intrinsic muscle innervated by the SLN',
      },
      {
        term: "Reinke's space",
        definition:
          'Superficial lamina propria — the key vibrating layer of the vocal folds; site of most vocal pathology (nodules, polyps, edema)',
      },
      {
        term: 'Myoelastic-aerodynamic theory',
        definition:
          'Theory of phonation: subglottic pressure blows folds apart, then Bernoulli effect and tissue elasticity bring them back together in a cycle',
      },
      {
        term: 'Source-Filter Theory',
        definition:
          'Voice production model: vocal fold vibration (source) generates a complex tone filtered by the vocal tract (filter) to produce speech sounds',
      },
      {
        term: 'Formants',
        definition:
          'Resonant frequencies of the vocal tract; F1 relates to tongue height, F2 relates to tongue advancement; together they define vowel quality',
      },
      {
        term: 'Mucosal wave',
        definition:
          'Wave-like motion of the vocal fold cover over the body during phonation; disrupted in vocal fold pathology',
      },
    ],
    sortOrder: 25,
  },
]
