import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ClipboardList } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import QuestionCard from '@/components/question/QuestionCard'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import {
  buildDiagnosticQuestions,
  saveDiagnosticSession,
  scoreDiagnosticQuiz,
} from '@/lib/diagnostic'

export default function DiagnosticQuizPage() {
  const navigate = useNavigate()
  const questions = useMemo(() => buildDiagnosticQuestions(12), [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [error, setError] = useState<string | null>(null)

  const currentQuestion = questions[currentIndex]
  const answeredCount = Object.keys(answers).length

  function handleAdvance() {
    const activeQuestion = questions[currentIndex]

    if (!activeQuestion) {
      setError('The current question could not be loaded. Restart the diagnostic and try again.')
      return
    }

    if (!answers[activeQuestion.id]) {
      setError('Choose an answer before moving on.')
      return
    }

    setError(null)

    if (currentIndex === questions.length - 1) {
      const result = scoreDiagnosticQuiz(questions, answers)
      saveDiagnosticSession({ questions, answers, result })
      navigate('/quiz/diagnostic/results')
      return
    }

    setCurrentIndex((index) => index + 1)
  }

  if (!currentQuestion) {
    return (
      <div className="bg-background text-text-primary min-h-screen">
        <Navbar />

        <main className="mx-auto flex max-w-4xl px-6 pt-28 pb-20">
          <Card variant="glass" className="w-full">
            <Badge variant="secondary" className="mb-5">
              <ClipboardList className="h-3.5 w-3.5" />
              Free diagnostic
            </Badge>
            <h1 className="text-3xl font-bold md:text-4xl">We could not load the diagnostic.</h1>
            <p className="font-body text-text-secondary mt-4 text-base leading-7">
              The question set is unavailable right now. Return to the funnel and restart the
              diagnostic flow.
            </p>
            <div className="mt-6">
              <Link to="/">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4" />
                  Back to funnel
                </Button>
              </Link>
            </div>
          </Card>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-background text-text-primary min-h-screen">
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-28 pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.45fr]">
          <Card variant="glass" className="h-fit">
            <Badge variant="secondary" className="mb-5">
              <ClipboardList className="h-3.5 w-3.5" />
              Free diagnostic
            </Badge>
            <h1 className="text-3xl font-bold md:text-4xl">
              See if you are actually Praxis-ready.
            </h1>
            <p className="font-body text-text-secondary mt-4 text-base leading-7">
              This 12-question check is meant to create clarity fast. Finish it in one sitting, then
              use the results to decide whether you need the full Pass Pack.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Questions', value: '12' },
                { label: 'Time', value: '10-12 min' },
                { label: 'Cost', value: '$0' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-border/80 bg-surface/70 rounded-2xl border px-4 py-4 text-center"
                >
                  <p className="text-secondary font-mono text-lg font-bold">{item.value}</p>
                  <p className="font-body text-text-muted mt-1 text-xs tracking-[0.18em] uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-border/80 bg-surface/60 mt-6 rounded-2xl border p-4">
              <p className="font-body text-text-primary text-sm font-semibold">
                Clear next step once you finish:
              </p>
              <p className="font-body text-text-secondary mt-2 text-sm leading-7">
                You will see your weakest areas, how close you are to exam-ready, and whether the
                one-time Pass Pack is worth it for your current score.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                  Back to funnel
                </Button>
              </Link>
              <p className="font-body text-text-muted text-sm">{answeredCount} of 12 answered</p>
            </div>
          </Card>

          <div>
            {error && (
              <div className="border-warning/30 bg-warning-light font-body text-text-primary mb-4 rounded-2xl border px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <QuestionCard
              key={currentQuestion.id}
              questionId={currentQuestion.id}
              stem={currentQuestion.stem}
              options={currentQuestion.options}
              explanation={currentQuestion.explanation}
              incorrectExplanations={currentQuestion.incorrectExplanations}
              contentCategory={currentQuestion.contentCategory}
              difficulty={currentQuestion.difficulty}
              bigNine={currentQuestion.bigNine}
              questionNumber={currentIndex + 1}
              totalQuestions={questions.length}
              mode="quiz"
              selectedOptionId={answers[currentQuestion.id] ?? null}
              onAnswer={(optionId) => {
                setError(null)
                setAnswers((currentAnswers) => ({
                  ...currentAnswers,
                  [currentQuestion.id]: optionId,
                }))
              }}
              onPrev={() => {
                setError(null)
                setCurrentIndex((index) => Math.max(0, index - 1))
              }}
              onNext={handleAdvance}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
