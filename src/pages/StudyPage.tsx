import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import QuestionCard from '@/components/question/QuestionCard'
import Badge from '@/components/shared/Badge'
import { category1Questions } from '@/data/questions-category-1'
import { category2Questions } from '@/data/questions-category-2'
import { category3Questions } from '@/data/questions-category-3'

const ALL_QUESTIONS = [
  ...category1Questions,
  ...category2Questions,
  ...category3Questions,
]

export default function StudyPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const question = ALL_QUESTIONS[currentIndex]
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
        incorrectExplanations={question.incorrectExplanations}
        contentCategory={question.contentCategory}
        difficulty={question.difficulty}
        bigNine={question.bigNine}
        questionNumber={currentIndex + 1}
        totalQuestions={ALL_QUESTIONS.length}
        mode="study"
        onAnswer={(optionId) => setAnswers({ ...answers, [question.id]: optionId })}
        onNext={() => setCurrentIndex(Math.min(currentIndex + 1, ALL_QUESTIONS.length - 1))}
        onPrev={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
        onRequestAIRationale={() => {/* Claude API call */}}
      />
    </div>
  )
}
