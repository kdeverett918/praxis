import { useState, useEffect, useRef } from 'react'
import { Sparkles, Flag, ChevronRight, ChevronLeft } from 'lucide-react'
import type { QuestionOption } from '@/types/database'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import { BIG_NINE_LABELS, CONTENT_CATEGORY_LABELS, DIFFICULTY_LABELS } from '@/types/question'
import type { ContentCategory, Difficulty } from '@/types/question'

interface QuestionCardProps {
  questionId: string
  stem: string
  options: QuestionOption[]
  explanation: string
  incorrectExplanations?: Record<string, string> | null
  contentCategory: ContentCategory
  difficulty: Difficulty
  bigNine: string[]
  questionNumber: number
  totalQuestions: number
  mode: 'study' | 'exam' | 'quiz'
  selectedOptionId?: string | null
  isFlagged?: boolean
  onAnswer: (optionId: string) => void
  onFlag?: () => void
  onNext: () => void
  onPrev: () => void
  onRequestAIRationale?: () => void
  hideNav?: boolean
}

export default function QuestionCard({
  questionId,
  stem,
  options,
  explanation,
  incorrectExplanations,
  contentCategory,
  difficulty,
  bigNine,
  questionNumber,
  totalQuestions,
  mode,
  selectedOptionId = null,
  isFlagged = false,
  onAnswer,
  onFlag,
  onNext,
  onPrev,
  onRequestAIRationale,
  hideNav = false,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(selectedOptionId)
  const [showExplanation, setShowExplanation] = useState(mode === 'study' && selectedOptionId !== null)
  const [shakeId, setShakeId] = useState<string | null>(null)
  const [glowId, setGlowId] = useState<string | null>(null)
  const explanationRef = useRef<HTMLDivElement>(null)
  const isStudyMode = mode === 'study'
  const hasAnswered = selected !== null

  // Animate explanation panel height on reveal
  useEffect(() => {
    if (showExplanation && explanationRef.current) {
      const el = explanationRef.current
      el.style.height = '0px'
      el.style.opacity = '0'
      // Trigger reflow
      void el.offsetHeight
      const fullHeight = el.scrollHeight
      el.style.transition = 'height 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease'
      el.style.height = `${fullHeight}px`
      el.style.opacity = '1'
      // After animation, allow natural height
      const timer = setTimeout(() => {
        el.style.height = 'auto'
      }, 420)
      return () => clearTimeout(timer)
    }
  }, [showExplanation])

  const handleSelect = (optionId: string) => {
    if (hasAnswered && isStudyMode) return
    setSelected(optionId)
    onAnswer(optionId)

    if (isStudyMode) {
      const selectedOption = options.find((o) => o.id === optionId)
      if (selectedOption?.isCorrect) {
        setGlowId(optionId)
        setTimeout(() => setGlowId(null), 600)
      } else {
        setShakeId(optionId)
        setTimeout(() => setShakeId(null), 300)

        // Also briefly glow the correct answer
        const correctOption = options.find((o) => o.isCorrect)
        if (correctOption) {
          setTimeout(() => {
            setGlowId(correctOption.id)
            setTimeout(() => setGlowId(null), 600)
          }, 300)
        }
      }
      setShowExplanation(true)
    }
  }

  const getOptionStyle = (option: QuestionOption) => {
    if (!hasAnswered || !isStudyMode) {
      return selected === option.id
        ? 'border-primary bg-primary/10 text-text-primary'
        : 'border-border bg-surface hover:border-primary/50 hover:bg-surface-elevated'
    }
    if (option.isCorrect) return 'border-success bg-success-light text-text-primary'
    if (selected === option.id && !option.isCorrect) return 'border-error bg-error-light text-text-primary'
    return 'border-border bg-surface opacity-50'
  }

  return (
    <div className="mx-auto max-w-3xl" data-question-id={questionId}>
      {/* Header bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-sm text-text-muted">
            {questionNumber} / {totalQuestions}
          </span>
          <Badge variant="primary">{CONTENT_CATEGORY_LABELS[contentCategory]}</Badge>
          <Badge variant="default">{DIFFICULTY_LABELS[difficulty]}</Badge>
        </div>
        {onFlag && (
          <button
            onClick={onFlag}
            className={`rounded-lg p-2 transition-colors ${
              isFlagged ? 'bg-warning/10 text-warning' : 'text-text-muted hover:text-warning'
            }`}
            aria-label={isFlagged ? 'Unflag question' : 'Flag question'}
          >
            <Flag className="h-5 w-5" fill={isFlagged ? 'currentColor' : 'none'} />
          </button>
        )}
      </div>

      {/* Progress bar with gradient glow */}
      <div data-testid="question-progress" className="relative mb-8">
        <div className="h-1.5 overflow-hidden rounded-full bg-surface-elevated">
          <div
            data-testid="question-progress-fill"
            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
        <div
          className="pointer-events-none absolute top-0 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-50 blur-[6px]"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question stem with left accent bar and inner glow */}
      <div data-testid="question-stem" className="card-highlight mb-8 rounded-2xl border border-border border-l-[3px] border-l-primary bg-surface p-4 sm:p-6 md:p-8">
        <p className="font-body text-base leading-relaxed text-text-primary sm:text-lg">{stem}</p>
        {bigNine.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {bigNine.map((area) => (
              <Badge key={area} variant="default" className="text-[10px]">
                {BIG_NINE_LABELS[area as keyof typeof BIG_NINE_LABELS] ?? area}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Options */}
      <div data-testid="answer-options" className="space-y-3">
        {options.map((option, idx) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={hasAnswered && isStudyMode}
            data-testid="answer-option"
            className={`group flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-all duration-200 ${getOptionStyle(option)} ${
              shakeId === option.id ? 'qc-shake' : ''
            } ${glowId === option.id ? 'qc-glow-correct' : ''}`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated font-mono text-sm font-bold transition-colors group-hover:border-primary/50">
              {String.fromCharCode(65 + idx)}
            </span>
            <span className="font-body text-sm leading-relaxed">{option.text}</span>
          </button>
        ))}
      </div>

      {/* Explanation (study mode) — slide-down reveal */}
      {showExplanation && isStudyMode && (
        <div ref={explanationRef} className="mt-6 overflow-hidden">
          <div data-testid="explanation-panel" className="rounded-2xl border border-success/30 bg-success-light p-6">
            <h4 className="mb-3 font-display text-lg text-text-primary">Explanation</h4>
            <p className="font-body text-sm leading-relaxed text-text-secondary">{explanation}</p>

            {incorrectExplanations && selected && !options.find((o) => o.id === selected)?.isCorrect && (
              <div className="mt-4 border-t border-success/20 pt-4">
                <h5 className="mb-2 font-body text-sm font-semibold text-error">Why your answer was incorrect:</h5>
                <p className="font-body text-sm leading-relaxed text-text-secondary">
                  {incorrectExplanations[selected]}
                </p>
              </div>
            )}

            {onRequestAIRationale && (
              <button
                onClick={onRequestAIRationale}
                className="mt-4 flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-primary-hover"
              >
                <Sparkles className="h-4 w-4" />
                Get AI-Powered Deep Dive
              </button>
            )}
          </div>
        </div>
      )}

      {/* Navigation — sticky at bottom with backdrop-blur (hidden in swipe mode) */}
      {!hideNav && (
        <div className="sticky bottom-16 z-20 mt-8 flex items-center justify-between rounded-xl border border-border/50 bg-background/80 px-4 py-3 backdrop-blur-md lg:bottom-0">
          <Button variant="ghost" size="sm" onClick={onPrev} disabled={questionNumber === 1}>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button variant="primary" size="sm" onClick={onNext}>
            {questionNumber === totalQuestions ? 'Finish' : 'Next'}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
