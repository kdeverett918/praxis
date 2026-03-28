import { useState } from 'react'
import { Layers, Play } from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import { CONTENT_CATEGORY_LABELS, BIG_NINE_LABELS, DIFFICULTY_LABELS } from '@/types/question'
import type { ContentCategory, BigNineArea, Difficulty } from '@/types/question'
import { useSettingsStore } from '@/stores/settingsStore'

export default function QuizPage() {
  const defaultQuizLength = useSettingsStore((s) => s.defaultQuizLength)
  const [selectedCategories, setSelectedCategories] = useState<Set<ContentCategory>>(new Set())
  const [selectedBigNine, setSelectedBigNine] = useState<Set<BigNineArea>>(new Set())
  const [selectedDifficulty, setSelectedDifficulty] = useState<Set<Difficulty>>(new Set())
  const [questionCount, setQuestionCount] = useState(defaultQuizLength)

  const toggleSet = <T,>(set: Set<T>, value: T): Set<T> => {
    const next = new Set(set)
    if (next.has(value)) next.delete(value)
    else next.add(value)
    return next
  }

  return (
    <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
      <div className="mb-8 flex items-center gap-3">
        <Layers className="h-6 w-6 text-success" />
        <h1 className="font-display text-2xl text-text-primary">Custom Quiz Builder</h1>
      </div>

      {/* Category Filter */}
      <Card className="mb-6">
        <h2 className="mb-4 font-display text-lg text-text-primary">Content Categories</h2>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(CONTENT_CATEGORY_LABELS) as [ContentCategory, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategories(toggleSet(selectedCategories, key))}
              className={`rounded-xl border px-4 py-2 font-body text-sm transition-all ${
                selectedCategories.has(key)
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-text-secondary hover:border-primary/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      {/* Big Nine Filter */}
      <Card className="mb-6">
        <h2 className="mb-4 font-display text-lg text-text-primary">Big Nine Areas</h2>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(BIG_NINE_LABELS) as [BigNineArea, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedBigNine(toggleSet(selectedBigNine, key))}
              className={`rounded-xl border px-4 py-2 font-body text-sm transition-all ${
                selectedBigNine.has(key)
                  ? 'border-secondary bg-secondary/10 text-secondary'
                  : 'border-border text-text-secondary hover:border-secondary/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      {/* Difficulty Filter */}
      <Card className="mb-6">
        <h2 className="mb-4 font-display text-lg text-text-primary">Difficulty</h2>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(DIFFICULTY_LABELS) as [Difficulty, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedDifficulty(toggleSet(selectedDifficulty, key))}
              className={`rounded-xl border px-4 py-2 font-body text-sm transition-all ${
                selectedDifficulty.has(key)
                  ? 'border-success bg-success/10 text-success'
                  : 'border-border text-text-secondary hover:border-success/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      {/* Question Count */}
      <Card className="mb-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-display text-lg text-text-primary">Number of Questions</h2>
          <span className="font-body text-xs text-text-muted">Saved default: {defaultQuizLength}</span>
        </div>
        <div className="flex items-center gap-4">
          {[10, 20, 30, 50].map((count) => (
            <button
              key={count}
              onClick={() => setQuestionCount(count)}
              className={`flex h-12 w-12 items-center justify-center rounded-xl border font-mono text-sm font-bold transition-all ${
                questionCount === count
                  ? 'border-primary bg-primary text-white'
                  : 'border-border text-text-secondary hover:border-primary/50'
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </Card>

      {/* Summary + Start */}
      <Card variant="glass" className="text-center">
        <div className="mb-4 flex flex-wrap justify-center gap-2 sm:gap-3">
          <Badge variant="primary">{selectedCategories.size || 3} Categories</Badge>
          <Badge variant="secondary">{selectedBigNine.size || 9} Big Nine</Badge>
          <Badge variant="success">{questionCount} Questions</Badge>
        </div>
        <Button variant="primary" size="lg">
          <Play className="h-5 w-5" />
          Start Quiz
        </Button>
      </Card>
    </div>
  )
}
