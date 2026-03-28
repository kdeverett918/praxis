import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200 bg-white/90 py-3 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-stone-50 py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-teal-700 font-bold tracking-tighter text-white shadow-sm transition-colors group-hover:bg-teal-800">
              P
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">PraxisPrep</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              The System
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Log in
            </Link>
            <Link
              to="/quiz/diagnostic"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-teal-800 active:scale-95"
            >
              Free Diagnostic
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 flex flex-col gap-4 border-b border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            The System
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            FAQ
          </a>
          <hr className="my-2 border-slate-100" />
          <Link
            to="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Log in
          </Link>
          <Link
            to="/quiz/diagnostic"
            onClick={() => setMobileMenuOpen(false)}
            className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-base font-medium text-white shadow-sm"
          >
            Take Free Diagnostic
          </Link>
        </div>
      )}
    </header>
  )
}
