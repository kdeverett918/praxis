import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  Target,
  BarChart3,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 pb-20 text-center sm:px-6 md:pt-48 md:pb-32 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-800">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-teal-600"></span>
            Updated for the latest Praxis® 5331 format
          </div>

          <h1 className="mb-6 max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Pass the SLP Praxis.
            <br />
            <span className="text-slate-500">Stop second-guessing.</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            A focused, clinician-built prep system designed to eliminate study chaos. Know your
            exact score risk across the Big Nine before test day.
          </p>

          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Link
              to="/quiz/diagnostic"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all hover:bg-teal-800 hover:shadow-md sm:w-auto"
            >
              Take the Free Diagnostic
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#pricing"
              className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 sm:w-auto"
            >
              View the $49 Pass Pack
            </a>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-16 flex w-full max-w-3xl flex-col items-center justify-center gap-8 border-t border-slate-200 pt-8 text-sm font-medium text-slate-500 sm:flex-row">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-teal-600" />
              Clinician-curated questions
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-teal-600" />
              Targeted Big Nine analytics
            </div>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-teal-600" />
              Realistic clinical scenarios
            </div>
          </div>
        </section>

        {/* FEATURE STRUCTURE SECTION */}
        <section id="features" className="border-y border-slate-200 bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Everything you need. Nothing you don't.
              </h2>
              <p className="text-lg text-slate-600">
                Textbooks are for grad school. PraxisPrep is a targeted intervention designed
                specifically for the format and rigor of the 5331 exam.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-2xl border border-slate-100 bg-stone-50 p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                  <Target className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">Diagnostic Simulation</h3>
                <p className="leading-relaxed text-slate-600">
                  Start with a full-length baseline exam. We immediately identify your weakest "Big
                  Nine" categories so you stop studying what you already know.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-2xl border border-slate-100 bg-stone-50 p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                  <BrainCircuit className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">Smart Flashcards</h3>
                <p className="leading-relaxed text-slate-600">
                  Spaced-repetition flashcards mapped directly to ETS categories. Master
                  differential diagnosis, cranial nerves, and milestones efficiently.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-2xl border border-slate-100 bg-stone-50 p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                  <BarChart3 className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">Readiness Analytics</h3>
                <p className="leading-relaxed text-slate-600">
                  Our dashboard tracks your rolling accuracy. When all your Big Nine indicators turn
                  green, you can walk into the testing center with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING / THE OFFER */}
        <section id="pricing" className="bg-slate-900 py-24 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:px-8">
            <div className="max-w-2xl flex-1">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
                One simple price.
                <br /> Lifetime access.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                Most prep courses charge hundreds of dollars for bloated video libraries. We built a
                streamlined, high-yield clinical engine for a fraction of the cost.
              </p>
              <div className="space-y-4">
                {[
                  'Full-length diagnostic & 3 practice exams',
                  'Over 600+ high-yield clinical questions',
                  'Smart Spaced-Repetition Flashcards',
                  'Detailed rationales for every right & wrong answer',
                  'Big Nine progress dashboard',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-teal-400" />
                    <span className="text-lg text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="w-full max-w-md rounded-3xl bg-white p-8 text-slate-900 shadow-2xl lg:-mt-12 lg:mb-12">
              <div className="mb-2 text-sm font-bold tracking-wider text-teal-700 uppercase">
                The Pass Pack
              </div>
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight">$49</span>
                <span className="font-medium text-slate-500">one-time</span>
              </div>

              <Link
                to="/checkout"
                className="mb-4 block w-full rounded-xl bg-slate-900 px-6 py-4 text-center text-lg font-semibold text-white shadow-sm transition-all hover:bg-slate-800"
              >
                Get Instant Access
              </Link>

              <p className="mb-8 text-center text-sm text-slate-500">
                Secure checkout. 7-day money-back guarantee.
              </p>

              <div className="rounded-xl border border-slate-100 bg-stone-50 p-6">
                <p className="mb-4 text-sm font-medium text-slate-700 italic">
                  "I was scoring 150s on my practice tests, used this system for 3 weeks, and passed
                  with a 178. The analytics told me exactly what to study."
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-200 font-bold text-slate-600">
                    S
                  </div>
                  <div>
                    <div className="text-sm font-bold">Sarah M., CCC-SLP</div>
                    <div className="text-xs text-slate-500">Passed March 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
