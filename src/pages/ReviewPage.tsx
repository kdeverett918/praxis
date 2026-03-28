import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight, Search, Filter, BookMarked, FlaskConical, Stethoscope } from 'lucide-react'
import Card from '@/components/shared/Card'
import { studyContentData } from '@/data/study-content'

const CATEGORIES = [
  {
    key: 'I' as const,
    label: 'Foundations & Professional Practice',
    shortLabel: 'Foundations',
    icon: BookMarked,
    gradient: 'from-indigo-500 to-violet-500',
    bgGradient: 'from-indigo-500/10 to-violet-500/5',
    borderColor: 'border-indigo-500/30',
    accentColor: 'text-indigo-400',
    badgeColor: 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/20',
    dotColor: 'bg-indigo-400',
    hoverBorder: 'hover:border-indigo-500/50',
  },
  {
    key: 'II' as const,
    label: 'Screening, Assessment, Eval & Dx',
    shortLabel: 'Assessment',
    icon: FlaskConical,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/5',
    borderColor: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    badgeColor: 'bg-amber-500/15 text-amber-400 border border-amber-500/20',
    dotColor: 'bg-amber-400',
    hoverBorder: 'hover:border-amber-500/50',
  },
  {
    key: 'III' as const,
    label: 'Treatment Planning & Implementation',
    shortLabel: 'Treatment',
    icon: Stethoscope,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/5',
    borderColor: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20',
    dotColor: 'bg-emerald-400',
    hoverBorder: 'hover:border-emerald-500/50',
  },
]

function buildSections() {
  const grouped: Record<string, typeof studyContentData> = {}
  for (const item of studyContentData) {
    if (!grouped[item.contentCategory]) {
      grouped[item.contentCategory] = []
    }
    grouped[item.contentCategory]!.push(item)
  }

  return CATEGORIES.filter((cat) => grouped[cat.key]).map((cat) => {
    const items = grouped[cat.key]!
    return {
      ...cat,
      topics: items.sort((a, b) => a.sortOrder - b.sortOrder).map((item) => ({
        id: item.id,
        title: item.title,
        bigNine: item.bigNine,
        keyTermCount: item.keyTerms.length,
        subcategory: item.subcategory,
      })),
    }
  })
}

const REVIEW_SECTIONS = buildSections()

export default function ReviewPage() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredSections = REVIEW_SECTIONS.map((section) => ({
    ...section,
    topics: section.topics.filter((topic) => {
      const matchesSearch = search === '' ||
        topic.title.toLowerCase().includes(search.toLowerCase()) ||
        topic.bigNine.some((b) => b.toLowerCase().includes(search.toLowerCase()))
      const matchesFilter = !activeFilter || section.key === activeFilter
      return matchesSearch && matchesFilter
    }),
  })).filter((section) => section.topics.length > 0)

  const totalTopics = REVIEW_SECTIONS.reduce((sum, s) => sum + s.topics.length, 0)

  return (
    <div className="mx-auto max-w-5xl pb-24 lg:pb-0">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="font-display text-2xl text-text-primary md:text-3xl">Study Review</h1>
            <p className="font-body text-sm text-text-muted">{totalTopics} clinical cheat sheets</p>
          </div>
        </div>
      </div>

      {/* Search + Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search topics, Big Nine areas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-surface py-2.5 pr-4 pl-10 font-body text-sm text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-text-muted" />
          <button
            onClick={() => setActiveFilter(null)}
            className={`rounded-lg px-3 py-1.5 font-body text-xs font-medium transition-all ${
              !activeFilter
                ? 'bg-primary/15 text-primary'
                : 'text-text-muted hover:bg-surface hover:text-text-secondary'
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(activeFilter === cat.key ? null : cat.key)}
              className={`rounded-lg px-3 py-1.5 font-body text-xs font-medium transition-all ${
                activeFilter === cat.key
                  ? cat.badgeColor
                  : 'text-text-muted hover:bg-surface hover:text-text-secondary'
              }`}
            >
              {cat.shortLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      <div className="space-y-12">
        {filteredSections.map((section) => (
          <div key={section.key}>
            {/* Category Header */}
            <div className={`mb-6 rounded-2xl border ${section.borderColor} bg-gradient-to-r ${section.bgGradient} p-5`}>
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${section.gradient} shadow-lg`}>
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-sm font-bold ${section.accentColor}`}>
                      Category {section.key}
                    </span>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${section.badgeColor}`}>
                      {section.topics.length} topics
                    </span>
                  </div>
                  <h2 className="mt-1 font-display text-lg text-text-primary md:text-xl">
                    {section.label}
                  </h2>
                </div>
              </div>
            </div>

            {/* Topic Cards Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {section.topics.map((topic) => (
                <Link key={topic.id} to={`/review/${topic.id}`}>
                  <Card
                    hover
                    spotlight
                    className={`group flex h-full flex-col border-l-[3px] ${section.borderColor} ${section.hoverBorder} py-5 transition-all duration-200`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-body text-sm font-semibold leading-snug text-text-primary">
                          {topic.title}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-1.5">
                          <span className={`inline-flex h-2 w-2 rounded-full ${section.dotColor}`} />
                          <span className="font-body text-[11px] text-text-muted">
                            {topic.subcategory}
                          </span>
                          <span className="text-text-muted/30">|</span>
                          <span className="font-body text-[11px] text-text-muted">
                            {topic.keyTermCount} key terms
                          </span>
                        </div>
                        {topic.bigNine.length > 0 && (
                          <div className="mt-2.5 flex flex-wrap gap-1">
                            {topic.bigNine.slice(0, 3).map((area) => (
                              <span
                                key={area}
                                className={`inline-flex rounded-md px-1.5 py-0.5 text-[10px] font-medium ${section.badgeColor}`}
                              >
                                {area}
                              </span>
                            ))}
                            {topic.bigNine.length > 3 && (
                              <span className="inline-flex rounded-md px-1.5 py-0.5 text-[10px] font-medium text-text-muted">
                                +{topic.bigNine.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredSections.length === 0 && (
        <div className="py-20 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-text-muted/30" />
          <p className="mt-4 font-body text-text-muted">No topics match your search.</p>
          <button
            onClick={() => { setSearch(''); setActiveFilter(null) }}
            className="mt-2 font-body text-sm text-primary hover:text-primary-hover"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
