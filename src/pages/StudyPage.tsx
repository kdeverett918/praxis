import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, LockKeyhole, Sparkles } from 'lucide-react'
import QuestionCard from '@/components/question/QuestionCard'
import Badge from '@/components/shared/Badge'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import UpgradeModal from '@/components/shared/UpgradeModal'
import { ALL_QUESTIONS } from '@/lib/questionBank'
import { useGamificationStore } from '@/stores/gamificationStore'
import { useSubscription } from '@/hooks/useSubscription'

export default function StudyPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)

  const addXP = useGamificationStore((s) => s.addXP)
  const addQuestionsAnswered = useGamificationStore((s) => s.addQuestionsAnswered)
  const addCorrectAnswer = useGamificationStore((s) => s.addCorrectAnswer)
  const updateStreak = useGamificationStore((s) => s.updateStreak)
  const subscription = useSubscription()

  const question = ALL_QUESTIONS[currentIndex]
  const studyLimitReached = !subscription.hasPaidAccess && subscription.studyQuestionsToday >= 25

  if (!question) return null

  const handleAnswer = (optionId: string) => {
    if (answers[question.id]) return

    if (!subscription.canStudy) {
      setShowUpgradeModal(true)
      return
    }

    const remainingAfterAnswer = subscription.remainingStudyQuestions - 1
    setAnswers({ ...answers, [question.id]: optionId })

    const isCorrect = question.options.find((o) => o.id === optionId)?.isCorrect ?? false
    addXP(isCorrect ? 10 : 5)
    addQuestionsAnswered(1)
    if (isCorrect) addCorrectAnswer()
    updateStreak()
    subscription.recordStudyQuestion()

    if (remainingAfterAnswer <= 0) {
      setShowUpgradeModal(true)
    }
  }

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      <div className="mb-8 flex items-center gap-3">
        <GraduationCap className="text-primary h-6 w-6" />
        <h1 className="font-display text-text-primary text-2xl">Study Mode</h1>
        <Badge variant="primary">Untimed</Badge>
        {!subscription.hasPaidAccess && (
          <Badge variant="warning">
            {subscription.remainingStudyQuestions} free questions left today
          </Badge>
        )}
      </div>

      {studyLimitReached ? (
        <Card variant="glass" spotlight className="relative overflow-hidden">
          <div className="from-secondary/10 to-primary/10 absolute inset-0 bg-gradient-to-br via-transparent" />
          <div className="relative">
            <div className="flex items-start gap-3">
              <div className="bg-secondary/15 text-secondary flex h-12 w-12 items-center justify-center rounded-2xl">
                <LockKeyhole className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-text-primary text-2xl">
                  Today's free study limit is complete
                </h2>
                <p className="font-body text-text-secondary mt-2 max-w-2xl text-sm leading-6">
                  Free access includes 25 study questions per day. Upgrade to Pro for unlimited
                  practice, better rationale support, and full exam simulations.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Unlimited questions', 'Full exam simulations', 'Deeper AI rationale support'].map(
                (item) => (
                  <div
                    key={item}
                    className="border-border bg-surface/70 font-body text-text-secondary rounded-2xl border p-4 text-sm"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/pro" className="block">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Unlock Pro Access
                  <Sparkles className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => setShowUpgradeModal(true)}>
                See upgrade options
              </Button>
            </div>
          </div>
        </Card>
      ) : (
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
          onRequestAIRationale={
            !subscription.hasPaidAccess ? () => setShowUpgradeModal(true) : undefined
          }
        />
      )}

      <UpgradeModal
        open={showUpgradeModal || studyLimitReached}
        onClose={() => setShowUpgradeModal(false)}
        title="You're at the free study limit for today"
        description="You have already used today's complimentary study questions. Upgrade when you want more practice, more explanation depth, and exam-length review."
        highlights={[
          'Unlimited daily study questions',
          'Realistic Praxis exam simulations',
          'Built-in progress tracking and weak-area review',
        ]}
        ctaLabel="Unlock Pro Access"
        ctaHref="/pro"
      />
    </div>
  )
}
