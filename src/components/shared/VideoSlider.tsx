import { useState, useRef, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, ExternalLink, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SOCIAL_VIDEOS, PLATFORM_LABELS, CATEGORY_LABELS } from '@/data/social-videos'
import type { SocialVideo } from '@/data/social-videos'
import Badge from '@/components/shared/Badge'

const PLATFORM_COLORS: Record<SocialVideo['platform'], string> = {
  youtube: 'bg-error/20 text-error',
  tiktok: 'bg-text-primary/10 text-text-primary',
  instagram: 'bg-accent-pink/20 text-accent-pink',
  facebook: 'bg-info/20 text-info',
}

const CATEGORY_BADGE_VARIANT: Record<SocialVideo['category'], 'primary' | 'secondary' | 'cyan' | 'success'> = {
  'study-tips': 'primary',
  'quick-review': 'cyan',
  'slp-life': 'secondary',
  motivation: 'success',
}

// Show a curated sample for the landing page slider
const FEATURED_VIDEOS = SOCIAL_VIDEOS.slice(0, 12)

function SliderCard({ video }: { video: SocialVideo }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="w-[280px] shrink-0 snap-start sm:w-[320px]">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
        {/* Video area */}
        <div className="relative aspect-video bg-surface-elevated">
          {playing ? (
            <iframe
              src={video.embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              loading="lazy"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="flex h-full w-full items-center justify-center transition-colors hover:bg-surface-hover"
              aria-label={`Play: ${video.title}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Play className="h-5 w-5 text-primary" fill="currentColor" />
              </div>
              <span
                className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-semibold ${PLATFORM_COLORS[video.platform]}`}
              >
                {PLATFORM_LABELS[video.platform]}
              </span>
              {video.duration && (
                <span className="absolute bottom-2 right-2 rounded bg-background/80 px-1.5 py-0.5 font-mono text-[10px] text-text-secondary backdrop-blur-sm">
                  {video.duration}
                </span>
              )}
            </button>
          )}
        </div>

        {/* Info */}
        <div className="p-3">
          <div className="flex items-start justify-between gap-2">
            <h4 className="line-clamp-2 font-body text-xs font-semibold leading-snug text-text-primary">
              {video.title}
            </h4>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-text-muted transition-colors hover:text-primary"
              aria-label="Open in new tab"
            >
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <p className="mt-1 font-body text-[10px] text-text-muted">{video.creator}</p>
          <div className="mt-2">
            <Badge variant={CATEGORY_BADGE_VARIANT[video.category]} className="text-[9px]">
              {CATEGORY_LABELS[video.category]}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VideoSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    return () => el.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  function scroll(direction: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    const amount = direction === 'left' ? -340 : 340
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-accent-pink" />
              <span className="font-body text-xs font-medium uppercase tracking-wider text-accent-pink">
                Free Resources
              </span>
            </div>
            <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.025em]">
              SLP study videos from across the web
            </h2>
            <p className="mt-2 max-w-xl font-body text-sm text-text-secondary">
              Curated study tips, clinical reviews, and motivation from independent SLP creators. Free to watch — no account needed.
            </p>
          </div>

          {/* Navigation arrows (desktop) */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:border-primary/40 hover:text-text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-secondary"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:border-primary/40 hover:text-text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-secondary"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div
          ref={scrollRef}
          className="scroll-reveal -mx-6 mt-8 flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-none"
          data-delay={100}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEATURED_VIDEOS.map((video) => (
            <SliderCard key={video.id} video={video} />
          ))}

          {/* "See all" card */}
          <div className="w-[280px] shrink-0 snap-start sm:w-[320px]">
            <Link
              to="/videos"
              className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/50 p-6 text-center transition-all hover:border-primary/40 hover:bg-surface"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-pink/10">
                <Video className="h-7 w-7 text-accent-pink" />
              </div>
              <p className="mt-4 font-body text-sm font-semibold text-text-primary">
                Browse all {SOCIAL_VIDEOS.length} videos
              </p>
              <p className="mt-1 font-body text-xs text-text-muted">
                Filter by category and platform
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
