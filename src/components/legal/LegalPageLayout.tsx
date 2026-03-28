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
    <div className="bg-background text-text-primary min-h-screen">
      <Navbar />
      <main className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="border-border bg-surface/50 shadow-primary/5 rounded-3xl border p-8 shadow-xl backdrop-blur-sm md:p-12">
            <p className="font-body text-secondary text-xs font-semibold tracking-[0.28em] uppercase">
              {eyebrow}
            </p>
            <h1 className="font-display text-text-primary mt-4 text-4xl md:text-5xl">{title}</h1>
            <p className="font-body text-text-secondary mt-5 max-w-3xl text-base leading-relaxed md:text-lg">
              {summary}
            </p>
            <p className="font-body text-text-muted mt-6 text-sm">Last updated {updatedOn}</p>
          </div>

          <div className="mt-8 space-y-6">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
