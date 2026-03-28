import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import QuestionCard from '@/components/question/QuestionCard'
import Badge from '@/components/shared/Badge'
import type { ContentCategory, Difficulty } from '@/types/question'

// Demo question for MVP
const DEMO_QUESTIONS: Array<{
  id: string
  stem: string
  options: Array<{ id: string; text: string; isCorrect: boolean }>
  explanation: string
  incorrect_explanations: Record<string, string>
  content_category: ContentCategory
  subcategory: string
  big_nine: string[]
  difficulty: Difficulty
  tags: string[]
  clinical_setting: string | null
  reference_sources: string[]
  is_published: boolean
  created_at: string
}> = [
  {
    id: '1',
    stem: 'A 68-year-old patient who had a left CVA presents with fluent speech containing neologisms and empty speech. Auditory comprehension is severely impaired, and the patient seems unaware of errors. This presentation is most consistent with which type of aphasia?',
    options: [
      { id: 'a', text: "Broca's aphasia", isCorrect: false },
      { id: 'b', text: "Wernicke's aphasia", isCorrect: true },
      { id: 'c', text: 'Anomic aphasia', isCorrect: false },
      { id: 'd', text: 'Global aphasia', isCorrect: false },
    ],
    explanation: "Wernicke's aphasia is characterized by fluent speech with poor content (empty speech, neologisms, paraphasias), severely impaired auditory comprehension, and reduced awareness of errors (anosognosia). The lesion is typically in the posterior superior temporal gyrus. Broca's aphasia features nonfluent speech with relatively preserved comprehension. Anomic aphasia presents with word-finding difficulties but intact comprehension. Global aphasia involves severe impairment in all modalities.",
    incorrect_explanations: {
      a: "Broca's aphasia is characterized by nonfluent, effortful speech with relatively preserved auditory comprehension. The patient in this scenario has fluent speech, which rules out Broca's.",
      c: "Anomic aphasia features fluent speech with primarily word-finding difficulties, but auditory comprehension is typically intact or mildly impaired. This patient's severely impaired comprehension points away from anomic aphasia.",
      d: "Global aphasia involves severe deficits across all language modalities — nonfluent speech AND impaired comprehension. Since this patient is fluent, global aphasia is not the best answer.",
    },
    content_category: 'II' as ContentCategory,
    subcategory: 'II.C.4',
    big_nine: ['Receptive & Expressive Language'],
    difficulty: 'application' as Difficulty,
    tags: ['aphasia', 'CVA', 'adult', 'neurogenic'],
    clinical_setting: 'acute care',
    reference_sources: ['ASHA Practice Portal: Aphasia'],
    is_published: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    stem: 'Which cranial nerve is primarily responsible for the motor control of the velum (soft palate) during speech production?',
    options: [
      { id: 'a', text: 'CN V (Trigeminal)', isCorrect: false },
      { id: 'b', text: 'CN VII (Facial)', isCorrect: false },
      { id: 'c', text: 'CN X (Vagus)', isCorrect: true },
      { id: 'd', text: 'CN XII (Hypoglossal)', isCorrect: false },
    ],
    explanation: 'The vagus nerve (CN X), specifically through its pharyngeal branch, provides the primary motor innervation to the muscles of the velum (soft palate), including the levator veli palatini. This muscle is responsible for elevating the velum during speech and swallowing to achieve velopharyngeal closure. CN V (trigeminal) innervates the tensor veli palatini, which plays a role in Eustachian tube function but is not the primary motor nerve for velar elevation during speech.',
    incorrect_explanations: {
      a: 'CN V (Trigeminal) innervates the tensor veli palatini, which tenses the soft palate and opens the Eustachian tube, but the primary motor innervation for velar elevation in speech comes from CN X.',
      b: 'CN VII (Facial) innervates the muscles of facial expression, the stapedius, and submandibular/sublingual salivary glands. It does not directly control velar movement.',
      d: 'CN XII (Hypoglossal) is the motor nerve for the tongue. It does not innervate the velum.',
    },
    content_category: 'I' as ContentCategory,
    subcategory: 'I.A.1',
    big_nine: ['Voice, Resonance & Motor Speech'],
    difficulty: 'recall' as Difficulty,
    tags: ['cranial nerves', 'anatomy', 'velum', 'resonance'],
    clinical_setting: null,
    reference_sources: ['Seikel, Drumright, & Seikel: Essentials of Anatomy and Physiology for Communication Disorders'],
    is_published: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    stem: 'An SLP is evaluating a 3-year-old child referred for possible speech sound disorder. The child produces /t/ for /k/ and /d/ for /g/ consistently across all word positions. This pattern is best described as:',
    options: [
      { id: 'a', text: 'Fronting', isCorrect: true },
      { id: 'b', text: 'Backing', isCorrect: false },
      { id: 'c', text: 'Stopping', isCorrect: false },
      { id: 'd', text: 'Cluster reduction', isCorrect: false },
    ],
    explanation: 'Fronting is a phonological process in which velar sounds (/k/, /g/) are replaced by alveolar sounds (/t/, /d/). This is a normal developmental process typically suppressed by age 3.5. The consistent substitution pattern of /t/ for /k/ and /d/ for /g/ — replacing back sounds with front sounds — is the hallmark of fronting.',
    incorrect_explanations: {
      b: 'Backing is the opposite pattern — alveolar sounds replaced by velar sounds (e.g., /k/ for /t/). This child is moving sounds forward, not backward.',
      c: 'Stopping involves replacing fricatives or affricates with stops (e.g., /t/ for /s/). The child is replacing velars with alveolars, not fricatives with stops.',
      d: 'Cluster reduction involves simplifying consonant clusters by omitting one or more consonants (e.g., "top" for "stop"). This pattern involves single consonant substitutions.',
    },
    content_category: 'II' as ContentCategory,
    subcategory: 'II.C.1',
    big_nine: ['Speech Sound Production'],
    difficulty: 'application' as Difficulty,
    tags: ['phonological processes', 'pediatric', 'speech sounds', 'assessment'],
    clinical_setting: 'schools',
    reference_sources: ['Bowen, C.: Children\'s Speech Sound Disorders'],
    is_published: true,
    created_at: new Date().toISOString(),
  },
]

export default function StudyPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const question = DEMO_QUESTIONS[currentIndex]
  if (!question) return null

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      <div className="mb-8 flex items-center gap-3">
        <GraduationCap className="h-6 w-6 text-primary" />
        <h1 className="font-display text-2xl text-text-primary">Study Mode</h1>
        <Badge variant="primary">Untimed</Badge>
      </div>

      <QuestionCard
        stem={question.stem}
        options={question.options}
        explanation={question.explanation}
        incorrectExplanations={question.incorrect_explanations as Record<string, string>}
        contentCategory={question.content_category}
        difficulty={question.difficulty}
        bigNine={question.big_nine}
        questionNumber={currentIndex + 1}
        totalQuestions={DEMO_QUESTIONS.length}
        mode="study"
        onAnswer={(optionId) => setAnswers({ ...answers, [question.id]: optionId })}
        onNext={() => setCurrentIndex(Math.min(currentIndex + 1, DEMO_QUESTIONS.length - 1))}
        onPrev={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
        onRequestAIRationale={() => {/* Claude API call */}}
      />
    </div>
  )
}
