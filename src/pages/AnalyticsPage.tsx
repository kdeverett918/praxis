import { useState } from 'react'
import { BarChart3, TrendingUp, AlertCircle, BookOpen, Target, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

// Mock Data structure for demonstration
const mockCategories = [
  { name: 'Speech Sound Production', score: 88, total: 45, status: 'strong' },
  { name: 'Fluency Disorders', score: 92, total: 30, status: 'strong' },
  { name: 'Voice & Resonance', score: 45, total: 40, status: 'weak' },
  { name: 'Receptive/Expressive Language', score: 76, total: 60, status: 'moderate' },
  { name: 'Social Aspects of Communication', score: 82, total: 25, status: 'strong' },
  { name: 'Cognitive Aspects', score: 60, total: 35, status: 'moderate' },
  { name: 'Augmentative & Alternative Comm.', score: 95, total: 20, status: 'strong' },
  { name: 'Hearing / Aural Rehab', score: 35, total: 25, status: 'weak' },
  { name: 'Swallowing / Dysphagia', score: 71, total: 55, status: 'moderate' },
]

export default function AnalyticsPage() {
  // Toggle this to false to view the premium empty state
  const [hasData] = useState(true)

  if (!hasData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4 md:p-8">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
            <BarChart3 className="h-8 w-8 text-teal-700" />
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">
            No Analytics Yet
          </h2>
          <p className="mb-8 leading-relaxed text-slate-500">
            Take your baseline diagnostic exam to unlock your customized "Big Nine" mastery
            dashboard and predict your score.
          </p>
          <Link
            to="/quiz/diagnostic"
            className="flex w-full items-center justify-center rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-teal-800"
          >
            Take Free Diagnostic
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* App Header (Internal) */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-slate-100 p-2">
              <TrendingUp className="h-5 w-5 text-slate-700" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Performance Analytics
            </h1>
          </div>
          <Link
            to="/study"
            className="flex items-center gap-1 text-sm font-medium text-teal-700 hover:text-teal-800"
          >
            <BookOpen className="h-4 w-4" />
            Return to Study
          </Link>
        </div>
      </header>

      <main className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Level Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-2 text-sm font-semibold tracking-wider text-slate-500 uppercase">
              Predicted Score
            </div>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-slate-900">168</span>
              <span className="mb-1 flex items-center text-sm font-medium text-emerald-600">
                <TrendingUp className="mr-1 h-4 w-4" /> +4 points
              </span>
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-emerald-500" style={{ width: '75%' }}></div>
            </div>
            <p className="mt-2 text-xs text-slate-400">Passing score is typically 162</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-2 text-sm font-semibold tracking-wider text-slate-500 uppercase">
              Overall Accuracy
            </div>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-slate-900">72%</span>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
              <Target className="h-4 w-4" /> Based on 335 questions answered
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-rose-100 bg-rose-50 p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-rose-600" />
              <div>
                <h3 className="mb-1 font-bold text-rose-900">Focus Area: Hearing</h3>
                <p className="mb-3 text-sm text-rose-700">
                  Your accuracy in Aural Rehab is 35%. Reviewing this section will yield the highest
                  score boost.
                </p>
                <Link
                  to="/study?category=hearing"
                  className="text-sm font-semibold text-rose-800 underline underline-offset-2 hover:text-rose-900"
                >
                  Study Hearing Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* The Big Nine Breakdown */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-5">
            <h2 className="text-lg font-bold text-slate-900">The Big Nine Mastery</h2>
            <p className="text-sm text-slate-500">
              Your performance mapped to the exact ETS ASHA categories.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {mockCategories.map((cat, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 px-6 py-4 transition-colors hover:bg-slate-50 md:flex-row md:items-center"
              >
                <div className="md:w-1/3">
                  <h4 className="text-sm font-semibold text-slate-900">{cat.name}</h4>
                  <p className="text-xs text-slate-500">{cat.total} questions attempted</p>
                </div>

                <div className="flex flex-1 items-center gap-4">
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${
                        cat.status === 'strong'
                          ? 'bg-emerald-500'
                          : cat.status === 'moderate'
                            ? 'bg-amber-400'
                            : 'bg-rose-500'
                      }`}
                      style={{ width: `${cat.score}%` }}
                    />
                  </div>
                  <div className="w-12 text-right text-sm font-bold text-slate-700">
                    {cat.score}%
                  </div>
                  <div className="flex w-6 justify-end">
                    {cat.status === 'strong' && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    )}
                    {cat.status === 'weak' && <AlertCircle className="h-5 w-5 text-rose-500" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
