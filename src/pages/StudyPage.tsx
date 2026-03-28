import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import QuestionCard from '@/components/question/QuestionCard'
import Badge from '@/components/shared/Badge'
import { ALL_QUESTIONS } from '@/lib/questionBank'
import { useGamificationStore } from '@/stores/gamificationStore'

export default function StudyPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const addXP = useGamificationStore((s) => s.addXP)
  const addQuestionsAnswered = useGamificationStore((s) => s.addQuestionsAnswered)
  const addCorrectAnswer = useGamificationStore((s) => s.addCorrectAnswer)
  const updateStreak = useGamificationStore((s) => s.updateStreak)

  const question = ALL_QUESTIONS[currentIndex]
  if (!question) return null

  const handleAnswer = (optionId: string) => {
    if (answers[question.id]) return
    setAnswers({ ...answers, [question.id]: optionId })

    const isCorrect = question.options.find((o) => o.id === optionId)?.isCorrect ?? false
    addXP(isCorrect ? 10 : 5)
    addQuestionsAnswered(1)
    if (isCorrect) addCorrectAnswer()
    updateStreak()
  }

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      <div className="mb-8 flex items-center gap-3">
        <GraduationCap className="h-6 w-6 text-primary" />
        <h1 className="font-display text-2xl text-text-primary">Study Mode</h1>
        <Badge variant="primary">Untimed</Badge>
      </div>

      <QuestionCard
        key={question.id}
        questionId={question.id}
        stem={question.stem}
        options={question.options}
        explanation={question.explanation}
        incorrectExplanations={question.incorrectExplanations}
        contentCategory={question.contentCategory}
        difficulty={question.difficulty}
        bigNine={question.bigNine}
        questionNumber={currentIndex + 1}
        totalQuestions={ALL_QUESTIONS.length}
        mode="study"
        selectedOptionId={answers[question.id] ?? null}
        onAnswer={handleAnswer}
        onNext={() => setCurrentIndex(Math.min(currentIndex + 1, ALL_QUESTIONS.length - 1))}
        onPrev={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
        onRequestAIRationale={() => {/* Claude API call */}}
      />
    </div>
  )
}
