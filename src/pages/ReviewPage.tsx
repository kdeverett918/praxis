import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight } from 'lucide-react'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'

const REVIEW_TOPICS = [
  {
    category: 'I',
    title: 'Foundations & Professional Practice',
    topics: [
      { id: 'typical-dev', title: 'Typical Development Across Lifespan', bigNine: 'All', items: 12 },
      { id: 'factors', title: 'Factors Influencing Communication', bigNine: 'All', items: 8 },
      { id: 'ethics', title: 'ASHA Code of Ethics', bigNine: 'Professional Practice', items: 6 },
      { id: 'legislation', title: 'Legislation & Advocacy (IDEA, Medicare)', bigNine: 'Professional Practice', items: 7 },
      { id: 'ebp', title: 'Research Methodology & EBP', bigNine: 'Professional Practice', items: 5 },
    ],
  },
  {
    category: 'II',
    title: 'Screening, Assessment, Eval & Dx',
    topics: [
      { id: 'screening', title: 'Screening Procedures', bigNine: 'All', items: 4 },
      { id: 'assessment-approaches', title: 'Assessment Approaches & Cultural Factors', bigNine: 'All', items: 9 },
      { id: 'speech-assessment', title: 'Speech Sound Assessment', bigNine: 'Speech Sound Production', items: 6 },
      { id: 'language-assessment', title: 'Language Assessment', bigNine: 'Receptive & Expressive Language', items: 8 },
      { id: 'swallow-assessment', title: 'Swallowing Assessment (MBSS, FEES)', bigNine: 'Feeding & Swallowing', items: 10 },
      { id: 'etiology', title: 'Etiology & Differential Diagnosis', bigNine: 'All', items: 11 },
    ],
  },
  {
    category: 'III',
    title: 'Treatment Planning & Implementation',
    topics: [
      { id: 'treatment-planning', title: 'Goal Development & Prognosis', bigNine: 'All', items: 5 },
      { id: 'named-treatments', title: 'Named Treatments (MIT, LSVT, PROMPT, etc.)', bigNine: 'All', items: 14 },
      { id: 'fluency-tx', title: 'Fluency Treatment Approaches', bigNine: 'Fluency', items: 6 },
      { id: 'voice-tx', title: 'Voice & Motor Speech Treatment', bigNine: 'Voice & Resonance', items: 8 },
      { id: 'aac-tx', title: 'AAC Selection & Implementation', bigNine: 'AAC', items: 7 },
      { id: 'dysphagia-tx', title: 'Dysphagia Management', bigNine: 'Feeding & Swallowing', items: 9 },
    ],
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  I: 'from-primary to-indigo-400',
  II: 'from-secondary to-amber-400',
  III: 'from-success to-emerald-400',
}

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
        {REVIEW_TOPICS.map((section) => (
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
                        <span className="font-body text-xs text-text-muted">{topic.items} key concepts</span>
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
