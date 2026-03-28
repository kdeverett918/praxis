import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl text-text-primary">PraxisPrep</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              The smartest way to pass the SLP Praxis 5331. Built by a CCC-SLP who codes.
            </p>
          </div>

          {/* Study */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-text-muted">Study</h4>
            <ul className="space-y-3">
              <li><Link to="/study" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Practice Questions</Link></li>
              <li><Link to="/exam" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Exam Simulation</Link></li>
              <li><Link to="/flashcards" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Flashcards</Link></li>
              <li><Link to="/review" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Study Content</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-text-muted">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-text-secondary transition-colors hover:text-text-primary">About</a></li>
              <li><a href="#pricing" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Pricing</a></li>
              <li><Link to="/privacy" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-text-muted">Connect</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@praxisprep.io" className="text-sm text-text-secondary transition-colors hover:text-text-primary">hello@praxisprep.io</a></li>
              <li><a href="https://instagram.com/thetechslp" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Instagram</a></li>
              <li><a href="https://linkedin.com/in/thetechslp" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-text-primary">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-text-muted">
            PraxisPrep is not affiliated with, endorsed by, or sponsored by ETS.
            &ldquo;Praxis&rdquo; is a registered trademark of Educational Testing Service.
          </p>
          <p className="mt-2 text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Tech SLP Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
