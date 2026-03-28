import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-stone-50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="group mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-teal-700 font-bold tracking-tighter text-white shadow-sm">
                P
              </div>
              <span className="text-xl font-semibold tracking-tight text-slate-900">
                PraxisPrep
              </span>
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed text-slate-500">
              The clinical, data-driven approach to passing the SLP Praxis 5331 exam. Stop guessing,
              start preparing with confidence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold tracking-tight text-slate-900">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/quiz/diagnostic"
                  className="text-slate-500 transition-colors hover:text-teal-700"
                >
                  Free Diagnostic
                </Link>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-slate-500 transition-colors hover:text-teal-700"
                >
                  The System
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-500 transition-colors hover:text-teal-700">
                  Pricing
                </a>
              </li>
              <li>
                <Link to="/login" className="text-slate-500 transition-colors hover:text-teal-700">
                  Log In
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold tracking-tight text-slate-900">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-slate-500 transition-colors hover:text-teal-700">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-500 transition-colors hover:text-teal-700"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@praxisprep.com"
                  className="text-slate-500 transition-colors hover:text-teal-700"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-sm text-slate-400">© {currentYear} PraxisPrep. All rights reserved.</p>
          <p className="max-w-2xl text-center text-xs text-slate-400 md:text-right">
            Praxis® is a registered trademark of Educational Testing Service (ETS). This product is
            not endorsed or approved by ETS.
          </p>
        </div>
      </div>
    </footer>
  )
}
