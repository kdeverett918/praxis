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
    front: 'What are the MLU range and approximate age for Brown\'s Stage I?',
    back: 'MLU: 1.0–2.0 morphemes. Age: approximately 12–26 months. Characterized by single words and early two-word combinations. Semantic relations include agent-action, action-object, and entity-locative.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-I'],
  },
  {
    id: 'fc1-009',
    front: 'What are the MLU range and approximate age for Brown\'s Stage II?',
    back: 'MLU: 2.0–2.5 morphemes. Age: approximately 27–30 months. Marked by the emergence of grammatical morphemes, including present progressive (-ing), prepositions "in" and "on," and regular plural (-s).',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-II', 'grammatical-morphemes'],
  },
  {
    id: 'fc1-010',
    front: 'What are the MLU range and approximate age for Brown\'s Stage III?',
    back: 'MLU: 2.5–3.0 morphemes. Age: approximately 31–34 months. Characterized by simple sentence forms (subject-verb-object) and emergence of irregular past tense, possessive (-\'s), and the uncontractible copula ("he is big").',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-III'],
  },
  {
    id: 'fc1-011',
    front: 'What are the MLU range and approximate age for Brown\'s Stage IV?',
    back: 'MLU: 3.0–3.75 morphemes. Age: approximately 35–40 months. Marked by embedding of sentences within sentences and emergence of regular third person (-s), articles (a, the), and the contractible copula ("he\'s big").',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-IV'],
  },
  {
    id: 'fc1-012',
    front: 'What are the MLU range and approximate age for Brown\'s Stage V?',
    back: 'MLU: 3.75–4.5 morphemes. Age: approximately 41–46 months. Characterized by conjoining of sentences using conjunctions (and, but, because), the contractible auxiliary ("he\'s running"), and the uncontractible auxiliary ("he is running").',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Stages',
    tags: ['Browns-stages', 'MLU', 'Stage-V'],
  },
  {
    id: 'fc1-013',
    front: 'List Brown\'s 14 grammatical morphemes in order of acquisition.',
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
    front: 'Name three phonological processes that are considered "atypical" or unusual at any age.',
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
    back: 'Individuals shall uphold the dignity and autonomy of the professions, maintain collaborative and harmonious interprofessional and intraprofessional relationships, and accept the professions\' self-imposed standards.\n\nKey rules: Do not engage in dishonesty, fraud, or deceit; report ethics violations to the Board of Ethics; comply with all ASHA policies.',
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
    back: 'Health Insurance Portability and Accountability Act (HIPAA) — Protects the privacy of individuals\' health information (PHI) held by covered entities (healthcare providers, health plans, clearinghouses).\n\nSLP applications:\n• Medical/private practice SLPs must follow HIPAA\n• Requires patient consent for information release\n• Mandates secure storage of records\n• Limits disclosure to minimum necessary information\n• School-based SLPs are governed by FERPA instead',
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
    back: 'Americans with Disabilities Act (ADA) — Civil rights law prohibiting discrimination based on disability in employment, public services, public accommodations, and telecommunications.\n\nSLP relevance:\n• Ensures accessibility of clinical facilities\n• Requires reasonable accommodations for employees with disabilities\n• Protects patients\' rights to access services\n• Applies to private practice settings as public accommodations',
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
    back: 'Sensitivity (true positive rate): The proportion of individuals WITH the condition who are correctly identified as positive by the test. High sensitivity = few missed cases (low false negatives).\n\nSpecificity (true negative rate): The proportion of individuals WITHOUT the condition who are correctly identified as negative. High specificity = few false alarms (low false positives).\n\nFor screening tools, high sensitivity is prioritized (don\'t miss true cases). For diagnostic tools, both are important.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['sensitivity', 'specificity', 'assessment', 'psychometrics'],
  },
  {
    id: 'fc1-039',
    front: 'What are the three pillars of Evidence-Based Practice (EBP)?',
    back: '1. Best available scientific evidence — research findings from systematic reviews, RCTs, and other study designs\n2. Clinical expertise — the clinician\'s knowledge, experience, and judgment\n3. Client/caregiver values and preferences — the unique needs, preferences, cultural values, and circumstances of the individual being served\n\nAll three pillars must be integrated for sound clinical decision-making.',
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
    back: 'Effect size measures the magnitude of a treatment effect or the strength of a relationship between variables, independent of sample size.\n\nCommon measures:\n• Cohen\'s d: small (0.2), medium (0.5), large (0.8)\n• Eta-squared (η²): small (0.01), medium (0.06), large (0.14)\n• Pearson\'s r: small (0.1), medium (0.3), large (0.5)\n\nImportance: Statistical significance (p-value) can be achieved with trivially small effects if the sample is large enough. Effect size tells you whether the difference is clinically meaningful.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['effect-size', 'Cohens-d', 'clinical-significance', 'statistics'],
  },
  {
    id: 'fc1-045',
    front: 'What is a norm-referenced test vs. a criterion-referenced test?',
    back: 'Norm-referenced: Compares an individual\'s performance to a normative sample. Produces standard scores, percentile ranks, etc. Used to determine how a child performs relative to same-age peers.\n\nCriterion-referenced: Measures performance against a predetermined standard or criterion. Determines what a child can and cannot do. Not compared to peers.\n\nExample: A standardized language test with norms (norm-referenced) vs. a curriculum-based assessment of specific vocabulary words (criterion-referenced).',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['norm-referenced', 'criterion-referenced', 'assessment-types'],
  },

  // ─────────────────────────────────────────────────────────
  // CRANIAL NERVES (EXPANDED)
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-046',
    front: 'CN I (Olfactory) — Type and function',
    back: 'Type: Sensory only. Function: Smell (olfaction). Clinical note: Not routinely tested in SLP evaluations, but olfactory deficits can affect appetite, food enjoyment, and safety awareness in patients with TBI or neurodegenerative disease.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-I', 'olfactory', 'sensory'],
  },
  {
    id: 'fc1-047',
    front: 'CN II (Optic) — Type and function',
    back: 'Type: Sensory only. Function: Vision. Clinical note: Visual deficits (e.g., hemianopsia after stroke) can affect reading, AAC use, and communication board access. Not directly assessed by SLPs but impacts treatment planning.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-II', 'optic', 'vision'],
  },
  {
    id: 'fc1-048',
    front: 'CN III (Oculomotor) — Type and function',
    back: 'Type: Motor (with parasympathetic). Function: Most eye movements (superior/medial/inferior rectus, inferior oblique), eyelid elevation (levator palpebrae), pupil constriction, lens accommodation. SLP relevance: Eye gaze AAC access relies on intact oculomotor function.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-III', 'oculomotor'],
  },
  {
    id: 'fc1-049',
    front: 'CN IV (Trochlear) — Type and function',
    back: 'Type: Motor only. Function: Superior oblique muscle (downward and inward eye movement). The thinnest cranial nerve. SLP relevance: Minimal direct relevance, but damage can cause diplopia affecting reading and visual processing tasks.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-IV', 'trochlear'],
  },
  {
    id: 'fc1-050',
    front: 'CN VI (Abducens) — Type and function',
    back: 'Type: Motor only. Function: Lateral rectus muscle (abduction of the eye — outward movement). Damage causes medial strabismus (eye turns inward). SLP relevance: Like CN III and IV, intact eye movement is important for AAC access and reading.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-VI', 'abducens'],
  },
  {
    id: 'fc1-051',
    front: 'CN VIII (Vestibulocochlear) — Type and function',
    back: 'Type: Sensory only. Two divisions: (1) Cochlear — hearing (auditory input from cochlea). (2) Vestibular — balance and spatial orientation. SLP relevance: Hearing loss directly impacts speech-language development and communication. Acoustic neuroma (vestibular schwannoma) affects this nerve.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-VIII', 'vestibulocochlear', 'hearing'],
  },
  {
    id: 'fc1-052',
    front: 'CN XI (Accessory / Spinal Accessory) — Type and function',
    back: 'Type: Motor only. Function: Sternocleidomastoid (head turning) and trapezius (shoulder elevation). SLP relevance: Limited direct role in speech/swallowing, but head/neck positioning is important for swallowing posture. May be damaged during neck surgery (e.g., radical neck dissection for head/neck cancer).',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-XI', 'accessory', 'spinal-accessory'],
  },
  {
    id: 'fc1-053',
    front: 'Which cranial nerve branches innervate the larynx? Describe the recurrent laryngeal nerve and superior laryngeal nerve.',
    back: 'Both are branches of CN X (Vagus).\n\nRecurrent Laryngeal Nerve (RLN): Motor to ALL intrinsic laryngeal muscles except the cricothyroid. Sensory to the glottis and subglottis. Left RLN loops under the aortic arch (longer path = more vulnerable to surgical damage).\n\nSuperior Laryngeal Nerve (SLN): Internal branch — sensory to supraglottis. External branch — motor to the cricothyroid muscle (vocal fold tension/pitch control).\n\nUnilateral RLN damage: vocal fold paralysis, breathy voice. Bilateral: potential airway compromise.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Cranial Nerves',
    tags: ['cranial-nerves', 'CN-X', 'RLN', 'SLN', 'laryngeal-innervation'],
  },

  // ─────────────────────────────────────────────────────────
  // BROWN'S 14 GRAMMATICAL MORPHEMES (EXPANDED)
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-054',
    front: 'Brown\'s Morpheme #1: Present progressive (-ing) — Acquisition age and example',
    back: 'Acquired: 19–28 months. Example: "Mommy running." The first grammatical morpheme to emerge. Initially used without the auxiliary ("running" not "is running"). Mastery criterion: 90% use in obligatory contexts.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'present-progressive', '-ing'],
  },
  {
    id: 'fc1-055',
    front: 'Brown\'s Morpheme #2: Preposition "in" — Acquisition age and example',
    back: 'Acquired: 27–30 months. Example: "Ball in box." One of the earliest spatial prepositions. Children typically master "in" before "on" because containment is conceptually simpler than surface contact.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'preposition-in'],
  },
  {
    id: 'fc1-056',
    front: 'Brown\'s Morpheme #3: Preposition "on" — Acquisition age and example',
    back: 'Acquired: 27–30 months. Example: "Cup on table." Emerges around the same time as "in." Together, these are the first two spatial prepositions mastered.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'preposition-on'],
  },
  {
    id: 'fc1-057',
    front: 'Brown\'s Morpheme #4: Regular plural (-s) — Acquisition age and example',
    back: 'Acquired: 27–33 months. Example: "Two dogs." Three allomorphs: /s/ after voiceless sounds (cats), /z/ after voiced sounds (dogs), /ɪz/ after sibilants (buses). Children may initially overgeneralize (e.g., "foots," "mouses").',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'regular-plural', '-s'],
  },
  {
    id: 'fc1-058',
    front: 'Brown\'s Morpheme #5: Irregular past tense — Acquisition age and examples',
    back: 'Acquired: 25–46 months. Examples: went, fell, broke, sat, ran. Acquired before regular past tense (-ed). Children initially produce correct irregular forms, then temporarily overgeneralize regular -ed (e.g., "goed," "falled") before mastering both systems.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'irregular-past-tense'],
  },
  {
    id: 'fc1-059',
    front: 'Brown\'s Morpheme #6: Possessive (\'s) — Acquisition age and example',
    back: 'Acquired: 26–40 months. Example: "Daddy\'s hat." Marks ownership. Same phonological rules as regular plural: /s/, /z/, or /ɪz/ depending on the final sound of the noun.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'possessive'],
  },
  {
    id: 'fc1-060',
    front: 'Brown\'s Morpheme #7: Uncontractible copula — Acquisition age and example',
    back: 'Acquired: 27–39 months. Example: "He is" (in response to "Who is happy?"). The copula is the "to be" verb used as a main verb (linking verb). "Uncontractible" means it cannot be shortened — typically in sentence-final position or in emphasis.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'uncontractible-copula'],
  },
  {
    id: 'fc1-061',
    front: 'Brown\'s Morpheme #8: Articles (a, the) — Acquisition age and usage',
    back: 'Acquired: 28–46 months. "A" (indefinite) introduces new information; "the" (definite) refers to known/shared referents. Children often overgeneralize "a" before mastering the distinction. Article use requires understanding of shared knowledge between speaker and listener.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'articles'],
  },
  {
    id: 'fc1-062',
    front: 'Brown\'s Morpheme #9: Regular past tense (-ed) — Acquisition age and example',
    back: 'Acquired: 26–48 months. Example: "He walked." Three allomorphs: /t/ after voiceless (walked), /d/ after voiced (played), /ɪd/ after /t/ or /d/ (wanted). Acquired AFTER irregular past tense. Overgeneralization errors (e.g., "eated") indicate productive rule learning.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'regular-past-tense', '-ed'],
  },
  {
    id: 'fc1-063',
    front: 'Brown\'s Morpheme #10: Regular third person (-s) — Acquisition age and example',
    back: 'Acquired: 26–46 months. Example: "He runs." Marks present tense with third person singular subjects. Same allomorphic rules as regular plural. Common error: omission ("He run") especially in African American English, which is a dialectal feature, not a disorder.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'regular-third-person'],
  },
  {
    id: 'fc1-064',
    front: 'Brown\'s Morpheme #11: Irregular third person — Acquisition age and examples',
    back: 'Acquired: 28–50 months. Examples: does, has. These irregular forms do not follow the regular -s pattern. "Does" is irregular from "do" and "has" is irregular from "have." Among the later-acquired morphemes.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'irregular-third-person'],
  },
  {
    id: 'fc1-065',
    front: 'Brown\'s Morpheme #12: Uncontractible auxiliary — Acquisition age and example',
    back: 'Acquired: 29–48 months. Example: "He is running" (stressed or sentence-final: "He IS"). The auxiliary "to be" used with a main verb (e.g., is running). Uncontractible form used in emphasis or sentence-final position.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'uncontractible-auxiliary'],
  },
  {
    id: 'fc1-066',
    front: 'Brown\'s Morpheme #13: Contractible copula — Acquisition age and example',
    back: 'Acquired: 29–49 months. Example: "He\'s happy" (contracted form of "He is happy"). The copula links the subject to a predicate adjective/noun. Contractible because it can be shortened to \'s in casual speech.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'contractible-copula'],
  },
  {
    id: 'fc1-067',
    front: 'Brown\'s Morpheme #14: Contractible auxiliary — Acquisition age and example',
    back: 'Acquired: 30–50 months. Example: "She\'s running" (contracted from "She is running"). The last of the 14 morphemes to be mastered. The auxiliary "to be" is contracted in casual speech before a present participle.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Browns Morphemes',
    tags: ['Browns-morphemes', 'contractible-auxiliary'],
  },

  // ─────────────────────────────────────────────────────────
  // ADDITIONAL PHONOLOGICAL PROCESSES
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-068',
    front: 'What is "assimilation" (consonant harmony) and when is it typically suppressed?',
    back: 'Assimilation is the process where one sound becomes more like another sound in the same word (e.g., "gog" for "dog," "bab" for "bath"). It is typically suppressed by age 3;0. Types include velar assimilation, labial assimilation, and nasal assimilation.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'assimilation', 'consonant-harmony'],
  },
  {
    id: 'fc1-069',
    front: 'What is "prevocalic voicing" and when is it suppressed?',
    back: 'Prevocalic voicing is the substitution of a voiced consonant for a voiceless consonant at the beginning of a word (e.g., "big" for "pig," "do" for "two"). Typically suppressed by age 3;0.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'prevocalic-voicing'],
  },
  {
    id: 'fc1-070',
    front: 'What is "postvocalic devoicing" and when is it suppressed?',
    back: 'Postvocalic devoicing is the substitution of a voiceless consonant for a voiced consonant at the end of a word (e.g., "bet" for "bed," "pick" for "pig"). Typically suppressed by age 3;0.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Phonological Processes',
    tags: ['phonological-processes', 'postvocalic-devoicing'],
  },

  // ─────────────────────────────────────────────────────────
  // DEVELOPMENTAL MILESTONES (EXPANDED)
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-071',
    front: 'What are the key speech and language milestones at 6 months?',
    back: 'Speech: Vocal play, marginal babbling (single syllable-like sounds), cooing/gooing, squealing, growling, raspberries.\nLanguage: Responds to name, recognizes familiar voices, responds to "no" (by tone), vocalizes pleasure and displeasure.\nFeeding: Introduction of pureed solids, lip closure on spoon improving, tongue thrust reflex diminishing.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['milestones', '6-months', 'prelinguistic'],
  },
  {
    id: 'fc1-072',
    front: 'What are the key speech and language milestones at 36 months?',
    back: 'Speech: 75–100% intelligible to familiar listeners. Most vowels and early consonants mastered (/m, n, p, b, t, d, k, g, w, h/). Some cluster reduction and liquid errors expected.\nLanguage: MLU ~3.0. Uses 3–4 word sentences. 900–1000 word vocabulary. Asks "why" and "what" questions. Follows 2-step unrelated directions. Uses pronouns (I, me, you).\nPragmatics: Takes 2–3 conversational turns. Requests, comments, protests.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['milestones', '36-months', 'speech-language'],
  },
  {
    id: 'fc1-073',
    front: 'What are the key speech and language milestones at 48 months (4 years)?',
    back: 'Speech: Intelligible to unfamiliar listeners most of the time. Consonants mastered: /f, v, s, z, ʃ, tʃ, dʒ/ emerging or mastered. Errors on /r, l, θ, ð/ still expected.\nLanguage: MLU ~4.0. Uses complex sentences (because, so, if). 1500+ word vocabulary. Tells simple stories. Understands spatial concepts (in, on, under, behind).\nPragmatics: Adjusts speech for different listeners, engages in pretend play with narrative.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['milestones', '48-months', 'speech-language'],
  },
  {
    id: 'fc1-074',
    front: 'What are the key speech and language milestones at 60 months (5 years)?',
    back: 'Speech: Most sounds mastered except possibly /r, θ, ð/. Consonant clusters mostly accurate. Intelligible in connected speech.\nLanguage: MLU ~5.0. Uses complex and compound sentences. 2000+ word vocabulary. Can define words, tell detailed stories with a clear beginning, middle, and end. Understands time concepts (yesterday, tomorrow).\nLiteracy: Recognizes letters, rhyming, beginning sound awareness (phonological awareness emerging).',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['milestones', '60-months', 'speech-language', 'literacy'],
  },
  {
    id: 'fc1-075',
    front: 'What are the key feeding milestones from birth to 12 months?',
    back: 'Birth–4 months: Rooting and sucking reflexes. Suck-swallow-breathe coordination for bottle/breast. Reflexive tongue thrust.\n4–6 months: Tongue thrust diminishing. Accepts pureed solids from spoon. Munching pattern emerging.\n6–9 months: Lateral tongue movement developing. Soft mashed table foods. Cup drinking with support. Phasic bite reflex fading.\n9–12 months: Controlled sustained bite. Rotary jaw movement emerging for chewing. Finger feeding. Drinking from open cup with some spillage. Straw drinking may begin.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Developmental Milestones',
    tags: ['milestones', 'feeding', 'birth-to-12-months'],
  },

  // ─────────────────────────────────────────────────────────
  // ADDITIONAL RESEARCH TERMINOLOGY
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-076',
    front: 'What is internal validity vs. external validity?',
    back: 'Internal validity: The degree to which a study establishes a cause-and-effect relationship between the treatment and outcome. Threats include maturation, history, testing effects, and attrition.\n\nExternal validity: The degree to which study findings can be generalized to other populations, settings, and conditions. Threats include narrow sampling, artificial laboratory settings, and highly controlled conditions.\n\nTrade-off: Highly controlled studies (strong internal validity) may lack generalizability (weaker external validity) and vice versa.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['internal-validity', 'external-validity', 'research-design'],
  },
  {
    id: 'fc1-077',
    front: 'What is inter-rater reliability and why is it important?',
    back: 'Inter-rater reliability (inter-observer agreement) is the degree to which two or more independent raters/judges produce the same score or judgment. Measured by Cohen\'s kappa (categorical data) or intraclass correlation coefficient (ICC, continuous data). Important because: ensures objective measurement, reduces examiner bias, and strengthens the credibility of assessment and research findings. Generally, kappa > 0.80 is considered excellent agreement.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['inter-rater-reliability', 'Cohens-kappa', 'ICC'],
  },
  {
    id: 'fc1-078',
    front: 'What is positive predictive value (PPV) and negative predictive value (NPV)?',
    back: 'PPV: The proportion of individuals who TEST POSITIVE who actually HAVE the condition. A high PPV means a positive result is trustworthy.\n\nNPV: The proportion of individuals who TEST NEGATIVE who actually DO NOT have the condition. A high NPV means a negative result is trustworthy.\n\nKey difference from sensitivity/specificity: PPV and NPV depend on the prevalence (base rate) of the condition in the population. In low-prevalence conditions, even a highly specific test can have a low PPV.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['PPV', 'NPV', 'predictive-value', 'psychometrics'],
  },
  {
    id: 'fc1-079',
    front: 'What is the standard error of measurement (SEM)?',
    back: 'SEM estimates the range of variability in a test score due to measurement error. It reflects how much an individual\'s score might change if tested repeatedly. Formula: SEM = SD × √(1 - reliability). Used to construct confidence intervals around obtained scores (e.g., obtained score ± 1 SEM = 68% CI). Clinical importance: Two children scoring 85 and 80 may not be meaningfully different if the SEM is 5 points.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Research Terminology',
    tags: ['SEM', 'standard-error', 'confidence-interval', 'psychometrics'],
  },

  // ─────────────────────────────────────────────────────────
  // HEARING SCIENCE
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-080',
    front: 'What are frequency (Hz) and intensity (dB) in hearing science?',
    back: 'Frequency: The number of vibration cycles per second, measured in Hertz (Hz). Perceived as pitch. Human hearing range: ~20–20,000 Hz. Speech range: ~250–8,000 Hz.\n\nIntensity: The magnitude of sound pressure, measured in decibels (dB). Perceived as loudness. Conversational speech: ~45–65 dB HL. Pain threshold: ~120–140 dB SPL.\n\nAudiogram axes: Frequency (Hz) on x-axis (left=low, right=high), Intensity (dB HL) on y-axis (top=soft, bottom=loud).',
    category: 'Foundations & Professional Practice',
    subcategory: 'Hearing Science',
    tags: ['frequency', 'intensity', 'Hz', 'dB', 'hearing-science'],
  },
  {
    id: 'fc1-081',
    front: 'What is the "speech banana" on an audiogram?',
    back: 'The "speech banana" is a banana-shaped area on the audiogram that represents the frequency and intensity ranges of conversational speech sounds. It spans approximately 250–6000 Hz and 20–50 dB HL. Vowels cluster in the low-frequency, higher-intensity area (left side). Consonants like /s, f, θ/ are in the high-frequency, softer intensity area (right side). A person\'s hearing thresholds relative to the speech banana indicate which speech sounds they can and cannot hear.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Hearing Science',
    tags: ['speech-banana', 'audiogram', 'speech-sounds'],
  },
  {
    id: 'fc1-082',
    front: 'What are OAEs (Otoacoustic Emissions) and how are they used?',
    back: 'OAEs are low-level sounds produced by the outer hair cells of the cochlea. Measured by a probe microphone in the ear canal. Types: Transient evoked (TEOAEs) and distortion product (DPOAEs). Present OAEs = functioning outer hair cells = cochlear integrity. Absent OAEs = possible cochlear damage or middle ear dysfunction.\n\nUses: Newborn hearing screening, monitoring ototoxicity, differentiating sensory vs. neural hearing loss. OAEs are present in auditory neuropathy spectrum disorder (ANSD) despite absent/abnormal ABR.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Hearing Science',
    tags: ['OAE', 'otoacoustic-emissions', 'cochlea', 'hearing-screening'],
  },
  {
    id: 'fc1-083',
    front: 'What is the ABR (Auditory Brainstem Response) and when is it used?',
    back: 'ABR measures electrical activity from the auditory nerve to the brainstem in response to click or tone-burst stimuli. Five waves (I–V), with Wave V the most clinically significant. Uses: (1) Newborn hearing screening (automated ABR), (2) threshold estimation in infants/non-cooperative patients, (3) diagnosis of auditory neuropathy spectrum disorder (ANSD), (4) retrocochlear pathology detection (acoustic neuroma). Advantage: Does not require patient cooperation — can be performed during natural sleep in infants.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Hearing Science',
    tags: ['ABR', 'auditory-brainstem-response', 'newborn-screening'],
  },

  // ─────────────────────────────────────────────────────────
  // LARYNGEAL ANATOMY
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-084',
    front: 'Name the three unpaired laryngeal cartilages.',
    back: 'Thyroid cartilage: Largest laryngeal cartilage. Forms the "Adam\'s apple." Shields the vocal folds anteriorly.\n\nCricoid cartilage: Complete ring of cartilage below the thyroid cartilage. Only complete cartilaginous ring in the airway. Landmarks the inferior border of the larynx.\n\nEpiglottis: Leaf-shaped, flexible cartilage attached to the inner surface of the thyroid cartilage. Deflects over the airway entrance during swallowing to protect the larynx.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Laryngeal Anatomy',
    tags: ['laryngeal-anatomy', 'thyroid-cartilage', 'cricoid', 'epiglottis'],
  },
  {
    id: 'fc1-085',
    front: 'Name the paired laryngeal cartilages and their functions.',
    back: 'Arytenoid cartilages: Pyramid-shaped, sit atop the posterior cricoid. Vocal folds attach to the vocal processes. Muscular processes are attachment points for muscles that abduct/adduct the vocal folds. Most important cartilages for vocal fold movement.\n\nCorniculate cartilages: Small, sit atop the arytenoids. Help with epiglottic closure during swallowing.\n\nCuneiform cartilages: Small, within the aryepiglottic folds. Provide structural support.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Laryngeal Anatomy',
    tags: ['laryngeal-anatomy', 'arytenoid', 'corniculate', 'cuneiform'],
  },
  {
    id: 'fc1-086',
    front: 'Describe the layers of the vocal fold (SMEGL) and their clinical significance.',
    back: 'S — Squamous epithelium: Thin outer covering, holds the shape of the vocal fold.\nM — Superficial layer of lamina propria (Reinke\'s space): Gel-like, most pliable. Site of vocal fold edema and Reinke\'s edema.\nE — Elastic (intermediate layer of lamina propria): Elastic fibers.\nG — Gelatinous/collagenous (deep layer of lamina propria): Collagen fibers.\nL — Lamina (thyroarytenoid muscle / vocalis): The body of the vocal fold.\n\nCover-body theory: The cover (epithelium + superficial LP) vibrates over the body (deep LP + muscle). Mucosal wave depends on pliability of the superficial LP.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Laryngeal Anatomy',
    tags: ['vocal-fold-layers', 'SMEGL', 'cover-body-theory', 'mucosal-wave'],
  },
  {
    id: 'fc1-087',
    front: 'What are the intrinsic muscles of the larynx and their functions?',
    back: 'Abductor: Posterior cricoarytenoid (PCA) — ONLY abductor of the vocal folds. Opens for breathing.\n\nAdductors: Lateral cricoarytenoid (LCA), transverse arytenoid, oblique arytenoid — close the vocal folds for phonation and airway protection.\n\nTensor: Cricothyroid (CT) — lengthens and tenses the vocal folds, raises pitch. (Innervated by SLN external branch, not RLN.)\n\nRelaxer/Shortener: Thyroarytenoid (TA/vocalis) — shortens and relaxes vocal folds, lowers pitch.\n\nAll innervated by the recurrent laryngeal nerve EXCEPT the cricothyroid (SLN external branch).',
    category: 'Foundations & Professional Practice',
    subcategory: 'Laryngeal Anatomy',
    tags: ['intrinsic-muscles', 'PCA', 'LCA', 'cricothyroid', 'thyroarytenoid'],
  },
  {
    id: 'fc1-088',
    front: 'What is the myoelastic-aerodynamic theory of phonation?',
    back: 'Explains how the vocal folds vibrate: (1) Medial compression (adduction) brings vocal folds together. (2) Subglottic air pressure builds below closed folds. (3) When pressure exceeds medial compression, air bursts through, pushing folds apart (aerodynamic force). (4) Bernoulli effect: Fast-moving air through the narrow glottis creates negative pressure, sucking folds back together. (5) Elastic recoil of vocal fold tissue also pulls them back (myoelastic force). (6) Cycle repeats rapidly (100–250 Hz in adults). The folds do NOT actively open and close through muscle contraction — vibration is passive.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Laryngeal Anatomy',
    tags: ['phonation', 'myoelastic-aerodynamic', 'Bernoulli', 'vocal-fold-vibration'],
  },

  // ─────────────────────────────────────────────────────────
  // ADDITIONAL LEGISLATION
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-089',
    front: 'What is the difference between an IEP and an IFSP?',
    back: 'IEP (Individualized Education Program): Ages 3–21 under IDEA Part B. School-based. Team includes parents, teachers, SLP, special ed teacher, LEA representative. Focus on educational goals. Services delivered in the school setting. Annual review, triennial reevaluation.\n\nIFSP (Individualized Family Service Plan): Birth–3 under IDEA Part C. Family-centered. Includes family outcomes, not just child goals. Services in natural environments (home, daycare). Service coordinator assigned. Reviewed every 6 months, evaluated annually. Transition planning to Part B at age 3.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Legislation',
    tags: ['IEP', 'IFSP', 'IDEA', 'Part-B', 'Part-C'],
  },
  {
    id: 'fc1-090',
    front: 'What are the key components of an IEP?',
    back: 'Required components: (1) Present levels of academic achievement and functional performance (PLAAFP). (2) Measurable annual goals (and short-term objectives for students with alternate assessments). (3) Special education and related services, including frequency, duration, and location. (4) Participation with nondisabled peers (LRE statement). (5) Accommodations for state/district assessments. (6) Date of initiation, frequency, location, and duration of services. (7) Transition plan (beginning at age 16, or earlier). (8) How progress will be measured and reported to parents.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Legislation',
    tags: ['IEP', 'components', 'IDEA', 'special-education'],
  },
  {
    id: 'fc1-091',
    front: 'What is the RTI/MTSS framework and how does it relate to SLP services?',
    back: 'RTI (Response to Intervention) / MTSS (Multi-Tiered System of Supports) is a framework for providing increasingly intensive academic and behavioral support.\n\nTier 1: Universal instruction for all students (~80%).\nTier 2: Targeted small-group intervention for at-risk students (~15%).\nTier 3: Intensive individualized intervention (~5%).\n\nSLP role: Collaborate at all tiers. Tier 1 — support curriculum-based language/literacy. Tier 2 — provide targeted language groups. Tier 3 — individual assessment and therapy. RTI data can be used as part of (but not replacement for) special education evaluation.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Legislation',
    tags: ['RTI', 'MTSS', 'tiered-intervention', 'school-based'],
  },

  // ─────────────────────────────────────────────────────────
  // ADDITIONAL FOUNDATIONS TOPICS
  // ─────────────────────────────────────────────────────────
  {
    id: 'fc1-092',
    front: 'What is phonological awareness and what are its components?',
    back: 'Phonological awareness is the ability to detect and manipulate the sound structure of language, independent of meaning. Hierarchy from easiest to hardest:\n1. Word awareness (sentences have separate words)\n2. Syllable awareness (clapping syllables)\n3. Onset-rime awareness ("cat" = /k/ + /æt/)\n4. Rhyme recognition and production\n5. Phoneme awareness: isolation, blending, segmentation, deletion, substitution\n\nPhonemic awareness (phoneme-level) is the strongest predictor of reading success. Deficits are common in children with language disorders and dyslexia.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Literacy Foundations',
    tags: ['phonological-awareness', 'phonemic-awareness', 'literacy', 'reading'],
  },
  {
    id: 'fc1-093',
    front: 'What is the difference between a speech disorder and a language disorder?',
    back: 'Speech disorder: Difficulty with the motor production or phonological organization of speech sounds. Includes articulation disorders, phonological disorders, childhood apraxia of speech (CAS), dysarthria, fluency disorders, and voice disorders.\n\nLanguage disorder: Difficulty understanding (receptive) or using (expressive) the rule systems of language — phonology, morphology, syntax, semantics, and/or pragmatics. Includes developmental language disorder (DLD), specific language impairment (SLI), and acquired language disorders (aphasia).\n\nA child can have both simultaneously.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Foundational Concepts',
    tags: ['speech-disorder', 'language-disorder', 'classification'],
  },
  {
    id: 'fc1-094',
    front: 'What are the five components of language?',
    back: 'Phonology: Sound system rules (which sounds are used, how they combine).\nMorphology: Rules for word formation (prefixes, suffixes, root words, inflections).\nSyntax: Rules for sentence structure (word order, phrase structure, sentence types).\nSemantics: Meaning of words, phrases, and sentences (vocabulary, word relationships, figurative language).\nPragmatics: Social use of language (turn-taking, topic maintenance, register, nonverbal communication, narrative skills).\n\nForm = phonology + morphology + syntax. Content = semantics. Use = pragmatics.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Foundational Concepts',
    tags: ['language-components', 'phonology', 'morphology', 'syntax', 'semantics', 'pragmatics'],
  },
  {
    id: 'fc1-095',
    front: 'What is Developmental Language Disorder (DLD)?',
    back: 'DLD (formerly specific language impairment / SLI) is a language disorder that affects the learning and use of language without a known biomedical etiology (not caused by intellectual disability, hearing loss, ASD, or neurological damage). Characteristics: Difficulty with morphosyntax (verb tense marking is a clinical marker), word finding, narrative skills, and complex sentences. Prevalence: ~7% of kindergartners. Persists into adulthood. Diagnosis requires functional impact. DLD was adopted by the CATALISE consortium (Bishop et al., 2017) to improve identification and reduce diagnostic inconsistency.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Foundational Concepts',
    tags: ['DLD', 'developmental-language-disorder', 'SLI', 'CATALISE'],
  },
  {
    id: 'fc1-096',
    front: 'What is the difference between a language difference and a language disorder?',
    back: 'Language difference: Variations in language use that reflect cultural, regional, or linguistic diversity (e.g., African American English, dialectal variations, bilingual influence). These are rule-governed linguistic systems, NOT disorders.\n\nLanguage disorder: A deficit in the ability to learn and use any language system, present across ALL languages the individual speaks.\n\nKey principle: Never diagnose a disorder based on features that are consistent with a dialect or second language influence. Use dynamic assessment, language sampling in both languages, and culturally valid measures.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Foundational Concepts',
    tags: ['language-difference', 'language-disorder', 'dialect', 'bilingual', 'cultural-competence'],
  },
  {
    id: 'fc1-097',
    front: 'What is the role of the SLP Assistant (SLPA)?',
    back: 'SLPAs perform tasks prescribed, directed, and supervised by an ASHA-certified SLP. SLPAs MAY: implement treatment plans, assist with screenings, document client progress, prepare therapy materials, perform hearing screenings, assist with AAC. SLPAs MAY NOT: independently evaluate, diagnose, develop/modify treatment plans, counsel clients/families, represent themselves as SLPs, select or discharge clients, make referrals, or sign treatment plans. Supervision: Direct (in person or real-time observation) for a minimum percentage of clinical time, plus indirect (review of documentation, consultation).',
    category: 'Foundations & Professional Practice',
    subcategory: 'Professional Practice',
    tags: ['SLPA', 'supervision', 'scope-of-practice', 'ASHA'],
  },
  {
    id: 'fc1-098',
    front: 'What is the CCC-SLP and what are the requirements?',
    back: 'CCC-SLP = Certificate of Clinical Competence in Speech-Language Pathology, awarded by ASHA.\n\nRequirements: (1) Graduate degree (master\'s or doctoral) from a CAA-accredited program. (2) 400 supervised clinical hours (minimum 375 in graduate program, 25 in observation). (3) Pass the Praxis 5331 exam. (4) Complete the Clinical Fellowship (CF) — 36 weeks of mentored clinical experience, minimum 1260 hours. (5) Ongoing: 30 CEUs (continuing education units) every 3-year maintenance interval.\n\nThe CF supervisor must hold CCC-SLP and provide at least 36 hours of supervision activities.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Professional Practice',
    tags: ['CCC-SLP', 'ASHA-certification', 'clinical-fellowship', 'Praxis'],
  },
  {
    id: 'fc1-099',
    front: 'What is telepractice in SLP and what are the key guidelines?',
    back: 'Telepractice is the use of technology to deliver SLP services remotely. ASHA position: Telepractice is an appropriate service delivery model when it meets the same standards as in-person services.\n\nKey considerations: (1) Licensure must be held in the state where the CLIENT is located. (2) Must ensure HIPAA/FERPA compliance. (3) Informed consent specific to telepractice. (4) Technology must support clinical needs (audio/video quality, bandwidth). (5) Not appropriate for all clients (e.g., those needing hands-on oral motor work). (6) An on-site facilitator (e-helper) may be needed for children. (7) Cultural and digital literacy considerations.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Professional Practice',
    tags: ['telepractice', 'telehealth', 'ASHA', 'service-delivery'],
  },
  {
    id: 'fc1-100',
    front: 'What is the scope of practice for speech-language pathologists?',
    back: 'ASHA\'s Scope of Practice (2016) includes: (1) Speech sound production and motor planning. (2) Fluency. (3) Voice and resonance. (4) Receptive and expressive language. (5) Pragmatics/social communication. (6) Cognitive-communication. (7) Feeding and swallowing (dysphagia). (8) Hearing (screening, aural rehabilitation). (9) AAC. SLP roles span prevention, screening, assessment, diagnosis, treatment, counseling, collaboration, and advocacy. Settings: schools, hospitals, skilled nursing facilities, private practice, early intervention, universities, research. SLPs must practice only within their area of competence and refer when outside their expertise.',
    category: 'Foundations & Professional Practice',
    subcategory: 'Professional Practice',
    tags: ['scope-of-practice', 'ASHA', 'SLP-roles', 'clinical-domains'],
  },
]
