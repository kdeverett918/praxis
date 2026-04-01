import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl text-text-primary">SLP Study Hub</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Praxis prep built for SLP grad students balancing class, clinic, and externship life.
            </p>
          </div>

          {/* Start Here */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-text-muted">Start Here</h4>
            <ul className="space-y-3">
              <li><Link to="/diagnostic" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Free Diagnostic</Link></li>
              <li><Link to="/signup" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Start Free</Link></li>
              <li><Link to="/videos" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Study Videos</Link></li>
              <li><Link to="/login" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Log In</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-text-muted">Explore</h4>
            <ul className="space-y-3">
              <li><a href="/#features" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Features</a></li>
              <li><a href="/#pricing" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Pricing</a></li>
              <li><a href="/#faq" className="text-sm text-text-secondary transition-colors hover:text-text-primary">FAQ</a></li>
              <li><a href="/#about" className="text-sm text-text-secondary transition-colors hover:text-text-primary">About</a></li>
              <li><Link to="/privacy" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-text-muted">Connect</h4>
            <ul className="space-y-3">
              <li><a href="mailto:kristine@slpstudyhub.com" className="text-sm text-text-secondary transition-colors hover:text-text-primary">kristine@slpstudyhub.com</a></li>
              <li><a href="https://instagram.com/thetechslp" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Instagram</a></li>
              <li><a href="https://tiktok.com/@thetechslp" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-text-primary">TikTok</a></li>
              <li><a href="https://linkedin.com/in/thetechslp" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-text-primary">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-text-muted">
            This product is not affiliated with, endorsed by, or sponsored by ETS.
            &ldquo;Praxis&rdquo; is a registered trademark of Educational Testing Service.
          </p>
          <p className="mt-2 text-xs text-text-muted">
            All practice questions, scenarios, and rationales are original educational content created for SLP Study Hub.
          </p>
          <p className="mt-2 text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Tech SLP Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
