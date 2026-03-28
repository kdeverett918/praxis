import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight } from 'lucide-react'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import { studyContentData } from '@/data/study-content'

const CONTENT_CATEGORY_LABELS: Record<string, string> = {
  I: 'Foundations & Professional Practice',
  II: 'Screening, Assessment, Eval & Dx',
  III: 'Treatment Planning & Implementation',
}

const CATEGORY_COLORS: Record<string, string> = {
  I: 'from-primary to-indigo-400',
  II: 'from-secondary to-amber-400',
  III: 'from-success to-emerald-400',
}

// Group study content by contentCategory
function buildSections() {
  const grouped: Record<string, typeof studyContentData> = {}
  for (const item of studyContentData) {
    if (!grouped[item.contentCategory]) {
      grouped[item.contentCategory] = []
    }
    grouped[item.contentCategory]!.push(item)
  }

  // Sort each group by sortOrder
  const categories = ['I', 'II', 'III'] as const
  return categories
    .filter((cat) => grouped[cat])
    .map((cat) => {
      const items = grouped[cat]!
      return {
        category: cat,
        title: CONTENT_CATEGORY_LABELS[cat] ?? cat,
        topics: items.sort((a, b) => a.sortOrder - b.sortOrder).map((item) => ({
        id: item.id,
        title: item.title,
        bigNine: item.bigNine.length > 0 ? item.bigNine.join(', ') : 'All',
        items: item.keyTerms.length,
      })),
      }
    })
}

const REVIEW_SECTIONS = buildSections()

export default function ReviewPage() {
  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      <div className="mb-8 flex items-center gap-3">
        <BookOpen className="h-6 w-6 text-primary" />
        <h1 className="font-display text-2xl text-text-primary">Study Content Review</h1>
      </div>

      <p className="mb-10 font-body text-text-secondary">
        Concise clinical review outlines organized by the Praxis 5331 blueprint. Not a textbook — think clinical cheat sheets.
      </p>

      <div className="space-y-10">
        {REVIEW_SECTIONS.map((section) => (
          <div key={section.category}>
            <div className="mb-4 flex items-center gap-3">
              <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${CATEGORY_COLORS[section.category]} flex items-center justify-center`}>
                <span className="font-mono text-sm font-bold text-white">{section.category}</span>
              </div>
              <h2 className="font-display text-xl text-text-primary">{section.title}</h2>
            </div>

            <div className="space-y-2">
              {section.topics.map((topic) => (
                <Link key={topic.id} to={`/review/${topic.id}`}>
                  <Card hover className="group flex items-center justify-between py-4">
                    <div>
                      <p className="font-body font-medium text-text-primary">{topic.title}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge variant="default" className="text-[10px]">{topic.bigNine}</Badge>
                        <span className="font-body text-xs text-text-muted">{topic.items} key terms</span>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-text-muted transition-transform group-hover:translate-x-1" />
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
