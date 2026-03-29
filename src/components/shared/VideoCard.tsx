import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import type { SocialVideo } from '@/data/social-videos'
import { CATEGORY_LABELS, PLATFORM_LABELS } from '@/data/social-videos'
import Badge from '@/components/shared/Badge'

interface VideoCardProps {
  video: SocialVideo
  className?: string
}

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

export default function VideoCard({ video, className = '' }: VideoCardProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover ${className}`}
    >
      {/* Video embed / thumbnail */}
      <div className="relative aspect-video bg-surface-elevated">
        {loaded ? (
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
            onClick={() => setLoaded(true)}
            className="flex h-full w-full items-center justify-center transition-colors hover:bg-surface-hover"
            aria-label={`Play: ${video.title}`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 text-primary" fill="currentColor" />
              </div>
              <span className="font-body text-xs text-text-muted">Click to play</span>
            </div>

            {/* Platform badge */}
            <span
              className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold ${PLATFORM_COLORS[video.platform]}`}
            >
              {PLATFORM_LABELS[video.platform]}
            </span>

            {/* Duration badge */}
            {video.duration && (
              <span className="absolute bottom-3 right-3 rounded bg-background/80 px-2 py-0.5 font-mono text-[10px] text-text-secondary backdrop-blur-sm">
                {video.duration}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 font-body text-sm font-semibold leading-snug text-text-primary">
            {video.title}
          </h3>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-text-muted transition-colors hover:text-primary"
            aria-label="Open in new tab"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="mb-3 font-body text-xs text-text-muted">{video.creator}</p>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant={CATEGORY_BADGE_VARIANT[video.category]} className="text-[10px]">
            {CATEGORY_LABELS[video.category]}
          </Badge>
        </div>
      </div>
    </div>
  )
}
