import { useState } from 'react'
import { Sparkles, Flag, ChevronRight, ChevronLeft } from 'lucide-react'
import type { QuestionOption } from '@/types/database'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import { CONTENT_CATEGORY_LABELS, DIFFICULTY_LABELS } from '@/types/question'
import type { ContentCategory, Difficulty } from '@/types/question'

interface QuestionCardProps {
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
  isFlagged?: boolean
  onAnswer: (optionId: string) => void
  onFlag?: () => void
  onNext: () => void
  onPrev: () => void
  onRequestAIRationale?: () => void
}

export default function QuestionCard({
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
  isFlagged = false,
  onAnswer,
  onFlag,
  onNext,
  onPrev,
  onRequestAIRationale,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const isStudyMode = mode === 'study'
  const hasAnswered = selected !== null

  const handleSelect = (optionId: string) => {
    if (hasAnswered && isStudyMode) return
    setSelected(optionId)
    onAnswer(optionId)
    if (isStudyMode) setShowExplanation(true)
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
    <div className="mx-auto max-w-3xl">
      {/* Header bar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
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

      {/* Progress bar */}
      <div className="mb-8 h-1 overflow-hidden rounded-full bg-surface-elevated">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question stem */}
      <div className="mb-8 rounded-2xl border border-border bg-surface p-6 md:p-8">
        <p className="font-body text-lg leading-relaxed text-text-primary">{stem}</p>
        {bigNine.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {bigNine.map((area) => (
              <Badge key={area} variant="default" className="text-[10px]">
                {area}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, idx) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={hasAnswered && isStudyMode}
            className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-all duration-200 ${getOptionStyle(option)}`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background font-mono text-sm font-bold">
              {String.fromCharCode(65 + idx)}
            </span>
            <span className="font-body text-sm leading-relaxed">{option.text}</span>
          </button>
        ))}
      </div>

      {/* Explanation (study mode) */}
      {showExplanation && isStudyMode && (
        <div className="mt-6 rounded-2xl border border-success/30 bg-success-light p-6">
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
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onPrev} disabled={questionNumber === 1}>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button variant="primary" size="sm" onClick={onNext}>
          {questionNumber === totalQuestions ? 'Finish' : 'Next'}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
