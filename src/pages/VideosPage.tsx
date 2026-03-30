import { useState, useMemo, useRef, useEffect } from 'react'
import { Video } from 'lucide-react'
import VideoCard from '@/components/shared/VideoCard'
import { SOCIAL_VIDEOS, CATEGORY_LABELS, PLATFORM_LABELS } from '@/data/social-videos'
import type { SocialVideo } from '@/data/social-videos'

type CategoryFilter = SocialVideo['category'] | 'all'
type PlatformFilter = SocialVideo['platform'] | 'all'

const CATEGORIES: { key: CategoryFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'study-tips', label: CATEGORY_LABELS['study-tips'] },
  { key: 'quick-review', label: CATEGORY_LABELS['quick-review'] },
  { key: 'slp-life', label: CATEGORY_LABELS['slp-life'] },
  { key: 'motivation', label: CATEGORY_LABELS.motivation },
]

const PLATFORMS: { key: PlatformFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'youtube', label: PLATFORM_LABELS.youtube },
  { key: 'tiktok', label: PLATFORM_LABELS.tiktok },
  { key: 'instagram', label: PLATFORM_LABELS.instagram },
  { key: 'facebook', label: PLATFORM_LABELS.facebook },
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll<HTMLElement>('.scroll-reveal')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = parseInt(el.dataset.delay ?? '0', 10)
            setTimeout(() => el.classList.add('revealed'), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

export default function VideosPage() {
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [platform, setPlatform] = useState<PlatformFilter>('all')
  const pageRef = useScrollReveal()

  const filtered = useMemo(() => {
    return SOCIAL_VIDEOS.filter((v) => {
      if (category !== 'all' && v.category !== category) return false
      if (platform !== 'all' && v.platform !== platform) return false
      return true
    })
  }, [category, platform])

  return (
    <div ref={pageRef} className="min-h-screen bg-background text-text-primary">
      {/* Header */}
      <div className="border-b border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="scroll-reveal flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-pink-light">
              <Video className="h-6 w-6 text-accent-pink" />
            </div>
            <div>
              <h1 className="font-display text-2xl text-text-primary md:text-3xl">Study Videos</h1>
              <p className="mt-1 font-body text-sm text-text-secondary">
                Curated SLP content from top creators
              </p>
            </div>
          </div>

          {/* Category tabs */}
          <div className="scroll-reveal mt-8 flex flex-wrap gap-2" data-delay="80">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  category === cat.key
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-surface text-text-secondary hover:border-primary/40 hover:text-text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Platform filter pills */}
          <div className="scroll-reveal mt-3 flex flex-wrap gap-2" data-delay="160">
            {PLATFORMS.map((plat) => (
              <button
                key={plat.key}
                onClick={() => setPlatform(plat.key)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                  platform === plat.key
                    ? 'border-accent-cyan bg-accent-cyan-light text-accent-cyan'
                    : 'border-border bg-surface text-text-muted hover:border-accent-cyan/40 hover:text-text-secondary'
                }`}
              >
                {plat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video grid */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-body text-text-muted">No videos match your filters.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((video, i) => (
              <div key={video.id} className="scroll-reveal" data-delay={i * 60}>
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="border-t border-border bg-surface/30 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-body text-xs text-text-muted">
            Videos are curated from public content by independent SLP creators.
            SLP Study Hub is not affiliated with or endorsed by these creators.
          </p>
        </div>
      </div>
    </div>
  )
}
