import type { ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

interface LegalPageLayoutProps {
  eyebrow: string
  title: string
  summary: string
  updatedOn: string
  children: ReactNode
}

export default function LegalPageLayout({
  eyebrow,
  title,
  summary,
  updatedOn,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-border bg-surface/50 p-8 shadow-xl shadow-primary/5 backdrop-blur-sm md:p-12">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl text-text-primary md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
              {summary}
            </p>
            <p className="mt-6 font-body text-sm text-text-muted">Last updated {updatedOn}</p>
          </div>

          <div className="mt-8 space-y-6">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
