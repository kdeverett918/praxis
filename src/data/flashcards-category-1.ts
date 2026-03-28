export interface FlashcardData {
  id: string
  front: string
  back: string
  category: string
  subcategory: string
  tags: string[]
}

export const category1Flashcards: FlashcardData[] = [
  // ─────────────────────────────────────────────────────────
  // DEVELOPMENTAL MILESTONES
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-001',
    front: 'At what age does canonical (reduplicated) babbling typically emerge?',
    back: 'Approximately 6–7 months. The child produces consonant-vowel (CV) syllable repetitions such as "bababa" or "mamama." This stage is considered a critical prelinguistic milestone.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['babbling', 'prelinguistic', 'speech-development'],
  },
  {
    id: 'fc1-002',
    front: 'What is the expected expressive vocabulary size at 18 months?',
    back: 'Approximately 50 words. Children at this age are at the cusp of the "vocabulary spurt" (also called the naming explosion), during which word learning accelerates rapidly between 18–24 months.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['vocabulary', 'expressive-language', '18-months'],
  },
  {
    id: 'fc1-003',
    front: 'At what age do children typically begin combining two words?',
    back: 'Approximately 18–24 months. Early two-word combinations are telegraphic in nature, expressing semantic relations such as agent-action ("daddy go"), action-object ("eat cookie"), and attribute-entity ("big ball").',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['two-word-combinations', 'language-development'],
  },
  {
    id: 'fc1-004',
    front: 'What is the expected expressive vocabulary size at 24 months?',
    back: 'Approximately 200–300 words. Children at this age are using two-word combinations routinely and beginning to produce some three-word phrases. A child with fewer than 50 words at 24 months is considered a "late talker."',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['vocabulary', 'expressive-language', '24-months', 'late-talker'],
  },
  {
    id: 'fc1-005',
    front: 'At what age does a child typically produce their first true words?',
    back: 'Approximately 12 months. First words are typically context-bound (used in specific situations) and often consist of simple CV or CVCV structures such as "mama," "dada," "ball," or "more."',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['first-words', 'language-development'],
  },
  {
    id: 'fc1-006',
    front: 'When does joint attention typically emerge?',
    back: 'Between 9–12 months. Joint attention involves coordinating attention between a person and an object/event, and includes behaviors like following a point, showing objects, and alternating gaze. It is a critical precursor to language development.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['joint-attention', 'social-communication', 'prelinguistic'],
  },
  {
    id: 'fc1-007',
    front: 'At what age does a child typically follow two-step related directions?',
    back: 'Approximately 24–30 months. For example: "Pick up the ball and put it on the table." By 36 months, children can typically follow two-step unrelated directions ("Clap your hands and then jump").',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['receptive-language', 'following-directions'],
  },

  // ─────────────────────────────────────────────────────────
  // BROWN'S STAGES
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-008',
    front: "What are the MLU range and approximate age for Brown's Stage I?",
    back: 'MLU: 1.0–2.0 morphemes. Age: approximately 12–26 months. Characterized by single words and early two-word combinations. Semantic relations include agent-action, action-object, and entity-locative.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-I'],
  },
  {
    id: 'fc1-009',
    front: "What are the MLU range and approximate age for Brown's Stage II?",
    back: 'MLU: 2.0–2.5 morphemes. Age: approximately 27–30 months. Marked by the emergence of grammatical morphemes, including present progressive (-ing), prepositions "in" and "on," and regular plural (-s).',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-II', 'grammatical-morphemes'],
  },
  {
    id: 'fc1-010',
    front: "What are the MLU range and approximate age for Brown's Stage III?",
    back: 'MLU: 2.5–3.0 morphemes. Age: approximately 31–34 months. Characterized by simple sentence forms (subject-verb-object) and emergence of irregular past tense, possessive (-\'s), and the uncontractible copula ("he is big").',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-III'],
  },
  {
    id: 'fc1-011',
    front: "What are the MLU range and approximate age for Brown's Stage IV?",
    back: 'MLU: 3.0–3.75 morphemes. Age: approximately 35–40 months. Marked by embedding of sentences within sentences and emergence of regular third person (-s), articles (a, the), and the contractible copula ("he\'s big").',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-IV'],
  },
  {
    id: 'fc1-012',
    front: "What are the MLU range and approximate age for Brown's Stage V?",
    back: 'MLU: 3.75–4.5 morphemes. Age: approximately 41–46 months. Characterized by conjoining of sentences using conjunctions (and, but, because), the contractible auxiliary ("he\'s running"), and the uncontractible auxiliary ("he is running").',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-V'],
  },
  {
    id: 'fc1-013',
    front: "List Brown's 14 grammatical morphemes in order of acquisition.",
    back: '1. Present progressive (-ing)\n2. Preposition "in"\n3. Preposition "on"\n4. Regular plural (-s)\n5. Irregular past tense (went, fell)\n6. Possessive (\'s)\n7. Uncontractible copula (is, are)\n8. Articles (a, the)\n9. Regular past tense (-ed)\n10. Regular third person (-s)\n11. Irregular third person (does, has)\n12. Uncontractible auxiliary (is, are)\n13. Contractible copula (he\'s big)\n14. Contractible auxiliary (she\'s running)',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', '14-morphemes', 'morphosyntax'],
  },

  // ─────────────────────────────────────────────────────────
  // PHONOLOGICAL PROCESSES & SUPPRESSION AGES
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-014',
    front: 'By what age is the phonological process of "stopping" typically suppressed?',
    back: 'Stopping is suppressed at different ages depending on the target sound:\n• /f, s/ stopping: suppressed by 3;0\n• /v, z/ stopping: suppressed by 3;6\n• /ʃ, tʃ, dʒ/ stopping: suppressed by 4;6\n• /θ, ð/ stopping: suppressed by 5;0',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'stopping', 'suppression-ages'],
  },
  {
    id: 'fc1-015',
    front: 'By what age is "fronting" typically suppressed?',
    back: 'Velar fronting (replacing /k, g/ with /t, d/) is typically suppressed by age 3;6. Palatal fronting (replacing /ʃ/ with /s/) may persist slightly longer but is generally resolved by age 4;0.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'fronting', 'suppression-ages'],
  },
  {
    id: 'fc1-016',
    front: 'By what age is "gliding" typically suppressed?',
    back: 'Gliding of liquids (/r/ → /w/ and /l/ → /w/ or /j/) is typically suppressed by age 5;0. This is one of the later-developing phonological processes to resolve.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'gliding', 'suppression-ages'],
  },
  {
    id: 'fc1-017',
    front: 'By what age is "cluster reduction" typically suppressed?',
    back: 'Cluster reduction (omitting one consonant from a cluster) is typically suppressed by age 4;0 (without /s/). /s/-clusters may persist slightly longer, resolving by approximately 4;6–5;0.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'cluster-reduction', 'suppression-ages'],
  },
  {
    id: 'fc1-018',
    front: 'By what age is "final consonant deletion" typically suppressed?',
    back: 'Final consonant deletion is typically suppressed by age 3;0–3;3. Persistence beyond this age is considered delayed and may warrant assessment and intervention.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'final-consonant-deletion', 'suppression-ages'],
  },
  {
    id: 'fc1-019',
    front: 'What is "weak syllable deletion" and when is it typically suppressed?',
    back: 'Weak syllable deletion is the omission of an unstressed syllable from a multisyllabic word (e.g., "nana" for "banana," "tefone" for "telephone"). It is typically suppressed by age 4;0.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'weak-syllable-deletion', 'suppression-ages'],
  },
  {
    id: 'fc1-020',
    front: 'What is "deaffrication" and when is it typically suppressed?',
    back: 'Deaffrication is the replacement of an affricate with a fricative (e.g., "ship" for "chip" — /ʃ/ for /tʃ/). It is typically suppressed by age 4;0.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'deaffrication', 'suppression-ages'],
  },
  {
    id: 'fc1-021',
    front:
      'Name three phonological processes that are considered "atypical" or unusual at any age.',
    back: '1. Backing — replacing anterior sounds with posterior sounds (e.g., "gog" for "dog")\n2. Initial consonant deletion — omitting the initial consonant of a word (e.g., "at" for "cat")\n3. Glottal replacement — substituting a glottal stop for a consonant (e.g., "baʔ" for "bat")\n\nThese processes are not part of typical phonological development and may indicate a more severe phonological disorder.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'atypical-processes', 'backing'],
  },

  // ─────────────────────────────────────────────────────────
  // CRANIAL NERVES
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-022',
    front: 'CN V (Trigeminal) — What are its functions relevant to SLP practice?',
    back: 'Motor: Muscles of mastication (masseter, temporalis, medial/lateral pterygoids), tensor veli palatini, mylohyoid, anterior belly of digastric.\nSensory: General sensation to the face (3 divisions: ophthalmic V1, maxillary V2, mandibular V3).\nSLP relevance: Jaw opening/closing for speech and chewing; sensation to oral structures.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-V', 'trigeminal', 'mastication'],
  },
  {
    id: 'fc1-023',
    front: 'CN VII (Facial) — What are its functions relevant to SLP practice?',
    back: 'Motor: Muscles of facial expression (orbicularis oris, buccinator, etc.).\nSensory: Taste to anterior 2/3 of the tongue (via chorda tympani).\nParasympathetic: Submandibular and sublingual salivary glands, lacrimal glands.\nSLP relevance: Lip rounding, lip closure for bilabials, facial symmetry assessment.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-VII', 'facial', 'facial-expression'],
  },
  {
    id: 'fc1-024',
    front: 'CN IX (Glossopharyngeal) — What are its functions relevant to SLP practice?',
    back: 'Motor: Stylopharyngeus muscle (elevates pharynx).\nSensory: Afferent limb of the gag reflex; general sensation and taste to the posterior 1/3 of the tongue; sensation to the pharynx.\nParasympathetic: Parotid salivary gland.\nSLP relevance: Pharyngeal sensation, gag reflex assessment, swallowing.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-IX', 'glossopharyngeal', 'gag-reflex'],
  },
  {
    id: 'fc1-025',
    front: 'CN X (Vagus) — What are its functions relevant to SLP practice?',
    back: 'Motor: All laryngeal muscles (via recurrent laryngeal nerve and superior laryngeal nerve), pharyngeal constrictors, levator veli palatini.\nSensory: Sensation to the larynx, lower pharynx, and viscera; efferent limb of gag reflex.\nSLP relevance: Vocal fold movement, voice quality, velopharyngeal closure, pharyngeal swallow, cough reflex.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-X', 'vagus', 'voice', 'swallowing'],
  },
  {
    id: 'fc1-026',
    front: 'CN XII (Hypoglossal) — What are its functions relevant to SLP practice?',
    back: 'Motor: All intrinsic tongue muscles (superior/inferior longitudinal, transversus, verticalis) and most extrinsic tongue muscles (genioglossus, hyoglossus, styloglossus — except palatoglossus which is CN X).\nSLP relevance: Tongue protrusion, lateralization, elevation, bolus manipulation, lingual speech sounds.\nAssessment: Tongue deviates toward the side of the lesion in LMN damage.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-XII', 'hypoglossal', 'tongue'],
  },
  {
    id: 'fc1-027',
    front: 'Which cranial nerves are involved in the swallowing process?',
    back: 'CN V (Trigeminal) — jaw movement, mastication\nCN VII (Facial) — lip closure, buccal tension\nCN IX (Glossopharyngeal) — pharyngeal sensation, pharyngeal elevation\nCN X (Vagus) — pharyngeal constriction, laryngeal closure, velopharyngeal closure\nCN XII (Hypoglossal) — tongue movement for bolus formation and propulsion\n\nMnemonic: "5, 7, 9, 10, 12 help you swallow"',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'swallowing', 'dysphagia'],
  },

  // ─────────────────────────────────────────────────────────
  // ASHA CODE OF ETHICS
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-028',
    front: 'ASHA Code of Ethics — Principle I',
    back: 'Individuals shall hold paramount the welfare of persons they serve professionally or who are participants in research and scholarly activities, and shall treat animals involved in research in a humane manner.\n\nKey rules: Provide competent services; do not discriminate; maintain confidentiality; refer when outside scope of competence; obtain informed consent.',
    category: 'Foundations & Professional Practice',
    subcategory: 'ASHA Code of Ethics',
    tags: ['ASHA-ethics', 'Principle-I', 'patient-welfare'],
  },
  {
    id: 'fc1-029',
    front: 'ASHA Code of Ethics — Principle II',
    back: 'Individuals shall honor their responsibility to achieve and maintain the highest level of professional competence and performance.\n\nKey rules: Practice only within scope of competence; engage in lifelong learning and continuing education; use EBP; delegate appropriately; maintain accurate records.',
    category: 'Foundations & Professional Practice',
    subcategory: 'ASHA Code of Ethics',
    tags: ['ASHA-ethics', 'Principle-II', 'competence'],
  },
  {
    id: 'fc1-030',
    front: 'ASHA Code of Ethics — Principle III',
    back: 'Individuals shall honor their responsibility to the public when advocating for the unmet communication and swallowing needs of the public and shall provide accurate information in all communications involving any aspect of the professions.\n\nKey rules: Do not misrepresent credentials; do not make false claims about services; report accurate information about products and research.',
    category: 'Foundations & Professional Practice',
    subcategory: 'ASHA Code of Ethics',
    tags: ['ASHA-ethics', 'Principle-III', 'public-trust'],
  },
  {
    id: 'fc1-031',
    front: 'ASHA Code of Ethics — Principle IV',
    back: "Individuals shall uphold the dignity and autonomy of the professions, maintain collaborative and harmonious interprofessional and intraprofessional relationships, and accept the professions' self-imposed standards.\n\nKey rules: Do not engage in dishonesty, fraud, or deceit; report ethics violations to the Board of Ethics; comply with all ASHA policies.",
    category: 'Foundations & Professional Practice',
    subcategory: 'ASHA Code of Ethics',
    tags: ['ASHA-ethics', 'Principle-IV', 'professional-integrity'],
  },

  // ─────────────────────────────────────────────────────────
  // LEGISLATION
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-032',
    front: 'What is IDEA and what are its key provisions?',
    back: 'Individuals with Disabilities Education Act (IDEA) — Federal law ensuring FAPE (Free Appropriate Public Education) for children with disabilities ages 3–21.\n\nKey provisions:\n• Part B: Services for ages 3–21 via IEP\n• Part C: Early intervention for birth–3 via IFSP\n• LRE (Least Restrictive Environment)\n• Procedural safeguards and due process rights\n• Nondiscriminatory evaluation\n• Zero reject / Child Find mandate',
    category: 'Foundations & Professional Practice',
    subcategory: 'Legislation',
    tags: ['IDEA', 'FAPE', 'LRE', 'IEP', 'IFSP'],
  },
  {
    id: 'fc1-033',
    front: 'What is the difference between IDEA Part B and Part C?',
    back: 'Part B: School-age services (ages 3–21). Services provided via an IEP (Individualized Education Program) through the local school district. Focus on educational impact.\n\nPart C: Early intervention (birth through age 2, until 3rd birthday). Services provided via an IFSP (Individualized Family Service Plan) in natural environments. Family-centered with a service coordinator. Transition to Part B occurs at age 3.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Legislation',
    tags: ['IDEA', 'Part-B', 'Part-C', 'IEP', 'IFSP'],
  },
  {
    id: 'fc1-034',
    front: 'What is HIPAA and how does it apply to SLPs?',
    back: "Health Insurance Portability and Accountability Act (HIPAA) — Protects the privacy of individuals' health information (PHI) held by covered entities (healthcare providers, health plans, clearinghouses).\n\nSLP applications:\n• Medical/private practice SLPs must follow HIPAA\n• Requires patient consent for information release\n• Mandates secure storage of records\n• Limits disclosure to minimum necessary information\n• School-based SLPs are governed by FERPA instead",
    category: 'Foundations & Professional Practice',
    subcategory: 'Legislation',
    tags: ['HIPAA', 'PHI', 'privacy', 'covered-entities'],
  },
  {
    id: 'fc1-035',
    front: 'What is FERPA and how does it differ from HIPAA?',
    back: 'Family Educational Rights and Privacy Act (FERPA) — Protects the privacy of student education records.\n\nKey provisions:\n• Applies to schools receiving federal funds\n• Parents have right to access and amend records\n• Schools need written consent to release records\n• Rights transfer to the student at age 18\n\nKey difference from HIPAA: FERPA governs education records in schools; HIPAA governs health records in healthcare settings. Speech therapy records in a school are education records under FERPA.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Legislation',
    tags: ['FERPA', 'privacy', 'education-records', 'school-setting'],
  },
  {
    id: 'fc1-036',
    front: 'What is Section 504 of the Rehabilitation Act?',
    back: 'Section 504 prohibits discrimination against individuals with disabilities in programs receiving federal financial assistance.\n\nKey points:\n• Broader definition of disability than IDEA\n• Provides accommodations (not specialized instruction)\n• 504 Plan (not IEP) — may include classroom modifications, assistive technology, etc.\n• A child may qualify for 504 but not IDEA if the disability does not require specialized instruction\n• Covers the child through age 21 (or postsecondary)',
    category: 'Foundations & Professional Practice',
    subcategory: 'Legislation',
    tags: ['Section-504', 'accommodations', 'disability-rights'],
  },
  {
    id: 'fc1-037',
    front: 'What is the ADA and how does it relate to SLP practice?',
    back: "Americans with Disabilities Act (ADA) — Civil rights law prohibiting discrimination based on disability in employment, public services, public accommodations, and telecommunications.\n\nSLP relevance:\n• Ensures accessibility of clinical facilities\n• Requires reasonable accommodations for employees with disabilities\n• Protects patients' rights to access services\n• Applies to private practice settings as public accommodations",
    category: 'Foundations & Professional Practice',
    subcategory: 'Legislation',
    tags: ['ADA', 'disability-rights', 'accessibility'],
  },

  // ─────────────────────────────────────────────────────────
  // RESEARCH TERMINOLOGY
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-038',
    front: 'Define "sensitivity" and "specificity" in the context of diagnostic assessments.',
    back: "Sensitivity (true positive rate): The proportion of individuals WITH the condition who are correctly identified as positive by the test. High sensitivity = few missed cases (low false negatives).\n\nSpecificity (true negative rate): The proportion of individuals WITHOUT the condition who are correctly identified as negative. High specificity = few false alarms (low false positives).\n\nFor screening tools, high sensitivity is prioritized (don't miss true cases). For diagnostic tools, both are important.",
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['sensitivity', 'specificity', 'assessment', 'psychometrics'],
  },
  {
    id: 'fc1-039',
    front: 'What are the three pillars of Evidence-Based Practice (EBP)?',
    back: "1. Best available scientific evidence — research findings from systematic reviews, RCTs, and other study designs\n2. Clinical expertise — the clinician's knowledge, experience, and judgment\n3. Client/caregiver values and preferences — the unique needs, preferences, cultural values, and circumstances of the individual being served\n\nAll three pillars must be integrated for sound clinical decision-making.",
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['EBP', 'evidence-based-practice', 'clinical-decision-making'],
  },
  {
    id: 'fc1-040',
    front: 'Define reliability and validity in assessment.',
    back: 'Reliability: The consistency or stability of test results.\n• Test-retest: Consistency across time\n• Inter-rater: Consistency across examiners\n• Internal consistency: Consistency across items\n\nValidity: The degree to which a test measures what it claims to measure.\n• Content validity: Test items represent the domain\n• Criterion validity: Correlates with other measures\n• Construct validity: Measures the theoretical construct\n\nA test can be reliable without being valid, but a valid test must be reliable.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['reliability', 'validity', 'assessment', 'psychometrics'],
  },
  {
    id: 'fc1-041',
    front: 'What is the difference between incidence and prevalence?',
    back: 'Incidence: The number of NEW cases of a condition occurring within a specified time period (usually one year). Reflects the rate at which new cases develop.\n\nPrevalence: The total number of EXISTING cases of a condition at a given point in time. Reflects how widespread the condition is.\n\nExample — Stuttering:\n• Incidence: ~5% (lifetime occurrence)\n• Prevalence: ~1% (at any given time)\nThe difference reflects natural recovery.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['incidence', 'prevalence', 'epidemiology'],
  },
  {
    id: 'fc1-042',
    front: 'What is a Type I error vs. a Type II error?',
    back: 'Type I error (false positive / alpha error): Rejecting the null hypothesis when it is actually true. Concluding there is an effect when there is not. The probability of a Type I error is set by alpha (usually 0.05).\n\nType II error (false negative / beta error): Failing to reject the null hypothesis when it is actually false. Missing a real effect. The probability of a Type II error is beta. Statistical power (1 - beta) is the probability of correctly detecting a true effect.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['Type-I-error', 'Type-II-error', 'statistics', 'research-methodology'],
  },
  {
    id: 'fc1-043',
    front: 'What are the levels of evidence in the EBP hierarchy (highest to lowest)?',
    back: '1. Systematic reviews / Meta-analyses\n2. Randomized controlled trials (RCTs)\n3. Non-randomized controlled trials (quasi-experimental)\n4. Cohort studies (prospective/retrospective)\n5. Case-control studies\n6. Case series / Case reports\n7. Expert opinion / Consensus statements\n\nHigher levels provide stronger evidence for causal claims. Lower levels may still be valuable, especially when higher-level evidence is unavailable.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['EBP', 'evidence-hierarchy', 'research-design'],
  },
  {
    id: 'fc1-044',
    front: 'What is effect size and why is it important?',
    back: "Effect size measures the magnitude of a treatment effect or the strength of a relationship between variables, independent of sample size.\n\nCommon measures:\n• Cohen's d: small (0.2), medium (0.5), large (0.8)\n• Eta-squared (η²): small (0.01), medium (0.06), large (0.14)\n• Pearson's r: small (0.1), medium (0.3), large (0.5)\n\nImportance: Statistical significance (p-value) can be achieved with trivially small effects if the sample is large enough. Effect size tells you whether the difference is clinically meaningful.",
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['effect-size', 'Cohens-d', 'clinical-significance', 'statistics'],
  },
  {
    id: 'fc1-045',
    front: 'What is a norm-referenced test vs. a criterion-referenced test?',
    back: "Norm-referenced: Compares an individual's performance to a normative sample. Produces standard scores, percentile ranks, etc. Used to determine how a child performs relative to same-age peers.\n\nCriterion-referenced: Measures performance against a predetermined standard or criterion. Determines what a child can and cannot do. Not compared to peers.\n\nExample: A standardized language test with norms (norm-referenced) vs. a curriculum-based assessment of specific vocabulary words (criterion-referenced).",
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['norm-referenced', 'criterion-referenced', 'assessment-types'],
  },
]
