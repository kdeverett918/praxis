import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Lightbulb, ChevronRight } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import { studyContentData } from '@/data/study-content'

const CATEGORY_CONFIG: Record<string, { label: string; gradient: string; accentColor: string; badgeColor: string }> = {
  I: { label: 'Foundations & Professional Practice', gradient: 'from-purple-500 to-fuchsia-500', accentColor: 'text-purple-400', badgeColor: 'bg-purple-500/15 text-purple-400 border border-purple-500/20' },
  II: { label: 'Screening, Assessment, Eval & Dx', gradient: 'from-amber-500 to-orange-500', accentColor: 'text-amber-400', badgeColor: 'bg-amber-500/15 text-amber-400 border border-amber-500/20' },
  III: { label: 'Treatment Planning & Implementation', gradient: 'from-emerald-500 to-teal-500', accentColor: 'text-emerald-400', badgeColor: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' },
}

function renderMarkdown(md: string) {
  const lines = md.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  const getLine = (idx: number): string => lines[idx] ?? ''

  while (i < lines.length) {
    const line = getLine(i)
    if (line.trim() === '') { i++; continue }

    // Table
    if (line.trim().startsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && getLine(i).trim().startsWith('|')) { tableLines.push(getLine(i)); i++ }
      elements.push(renderTable(tableLines, elements.length))
      continue
    }

    // Blockquote (High-Yield callouts)
    if (line.trim().startsWith('>')) {
      const quoteLines: string[] = []
      while (i < lines.length && getLine(i).trim().startsWith('>')) { quoteLines.push(getLine(i).trim().replace(/^>\s*/, '')); i++ }
      const text = quoteLines.join(' ')
      const isHighYield = text.includes('High-Yield')
      elements.push(
        <div
          key={elements.length}
          className={`my-5 flex gap-3 rounded-xl border p-4 ${
            isHighYield
              ? 'border-amber-500/30 bg-amber-500/5'
              : 'border-primary/30 bg-primary/5'
          }`}
        >
          <Lightbulb className={`mt-0.5 h-4 w-4 shrink-0 ${isHighYield ? 'text-amber-400' : 'text-primary'}`} />
          <p className="font-body text-sm leading-relaxed text-text-secondary">{inlineFormat(text)}</p>
        </div>,
      )
      continue
    }

    // Heading
    const headingMatch = line.match(/^(#{1,4})\s+(.*)/)
    if (headingMatch) {
      const level = headingMatch[1]?.length ?? 4
      const text = headingMatch[2] ?? ''
      const cls: Record<number, string> = {
        1: 'font-display text-2xl text-text-primary mt-10 mb-4 pb-3 border-b border-border',
        2: 'font-display text-xl text-text-primary mt-8 mb-3',
        3: 'font-display text-lg text-text-primary mt-6 mb-2',
        4: 'font-body text-base font-semibold text-text-primary mt-5 mb-2',
      }
      elements.push(<div key={elements.length} className={cls[level] ?? cls[4]}>{inlineFormat(text)}</div>)
      i++; continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line.trim())) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(getLine(i).trim())) { items.push(getLine(i).trim().replace(/^\d+\.\s+/, '')); i++ }
      elements.push(
        <ol key={elements.length} className="my-3 ml-5 list-decimal space-y-1.5 font-body text-sm leading-relaxed text-text-secondary marker:text-text-muted">
          {items.map((item, idx) => <li key={idx} className="pl-1">{inlineFormat(item)}</li>)}
        </ol>,
      )
      continue
    }

    // Unordered list
    if (/^[-*]\s/.test(line.trim())) {
      const items: string[] = []
      while (i < lines.length && /^[-*]\s/.test(getLine(i).trim())) { items.push(getLine(i).trim().replace(/^[-*]\s+/, '')); i++ }
      elements.push(
        <ul key={elements.length} className="my-3 ml-5 list-disc space-y-1.5 font-body text-sm leading-relaxed text-text-secondary marker:text-text-muted">
          {items.map((item, idx) => <li key={idx} className="pl-1">{inlineFormat(item)}</li>)}
        </ul>,
      )
      continue
    }

    // Paragraph
    elements.push(
      <p key={elements.length} className="my-3 font-body text-sm leading-[1.75] text-text-secondary">{inlineFormat(line.trim())}</p>,
    )
    i++
  }
  return elements
}

function inlineFormat(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    if (match[2]) parts.push(<strong key={match.index} className="font-semibold text-text-primary">{match[2]}</strong>)
    else if (match[3]) parts.push(<em key={match.index} className="text-text-secondary/90">{match[3]}</em>)
    else if (match[4]) parts.push(<code key={match.index} className="rounded-md bg-surface-elevated px-1.5 py-0.5 font-mono text-xs text-primary">{match[4]}</code>)
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts.length === 1 ? parts[0] : parts
}

function renderTable(tableLines: string[], key: number) {
  const parseRow = (line: string) => line.split('|').map((c) => c.trim()).filter(Boolean)
  const headers = parseRow(tableLines[0] ?? '')
  const bodyLines = tableLines.slice(2)
  return (
    <div key={key} className="my-5 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left font-body text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-elevated/70">
            {headers.map((h, idx) => (
              <th key={idx} className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted">{inlineFormat(h)}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {bodyLines.map((line, rowIdx) => {
            const cells = parseRow(line)
            return (
              <tr key={rowIdx} className="transition-colors hover:bg-surface/50">
                {cells.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-4 py-3 text-text-secondary">{inlineFormat(cell)}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default function ReviewDetailPage() {
  const { topicId } = useParams<{ topicId: string }>()
  const topic = studyContentData.find((item) => item.id === topicId)
  const catConfig = topic ? CATEGORY_CONFIG[topic.contentCategory] : null

  if (!topic || !catConfig) {
    return (
      <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
        <Link to="/review" className="mb-6 inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-text-secondary">
          <ArrowLeft className="h-4 w-4" /> Back to Review
        </Link>
        <h1 className="font-display text-2xl text-text-primary">Topic Not Found</h1>
        <p className="mt-4 font-body text-text-secondary">The requested review topic could not be found.</p>
      </div>
    )
  }

  // Find prev/next in the same category
  const sameCat = studyContentData
    .filter((s) => s.contentCategory === topic.contentCategory)
    .sort((a, b) => a.sortOrder - b.sortOrder)
  const currentIdx = sameCat.findIndex((s) => s.id === topic.id)
  const prev = currentIdx > 0 ? sameCat[currentIdx - 1] : null
  const next = currentIdx < sameCat.length - 1 ? sameCat[currentIdx + 1] : null

  return (
    <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
      {/* Breadcrumb */}
      <Link to="/review" className="mb-6 inline-flex items-center gap-2 font-body text-sm text-text-muted transition-colors hover:text-text-secondary">
        <ArrowLeft className="h-4 w-4" /> Back to Review
      </Link>

      {/* Topic Header */}
      <div className={`mb-8 rounded-2xl border ${catConfig.badgeColor.includes('purple') ? 'border-purple-500/20' : catConfig.badgeColor.includes('amber') ? 'border-amber-500/20' : 'border-emerald-500/20'} bg-gradient-to-r ${catConfig.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 p-4 sm:p-6 md:p-8`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${catConfig.badgeColor}`}>
            Category {topic.contentCategory}
          </span>
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${catConfig.badgeColor}`}>
            {topic.subcategory}
          </span>
        </div>
        <div className="flex items-start gap-3">
          <BookOpen className={`mt-1 h-6 w-6 shrink-0 ${catConfig.accentColor}`} />
          <h1 className="font-display text-xl text-text-primary sm:text-2xl md:text-3xl">{topic.title}</h1>
        </div>
        {topic.bigNine.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {topic.bigNine.map((area) => (
              <Badge key={area} variant="default" className="text-[10px]">{area}</Badge>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mb-10 rounded-2xl border border-border bg-surface p-4 sm:p-6 md:p-8">
        {renderMarkdown(topic.contentMarkdown)}
      </div>

      {/* Key Terms */}
      {topic.keyTerms.length > 0 && (
        <div className="mb-10">
          <h2 className="mb-4 font-display text-xl text-text-primary">
            Key Terms ({topic.keyTerms.length})
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {topic.keyTerms.map((term) => (
              <Card key={term.term} className="py-4">
                <p className="font-body text-sm font-semibold text-text-primary">{term.term}</p>
                <p className="mt-1 font-body text-xs leading-relaxed text-text-secondary">{term.definition}</p>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next Navigation */}
      <div className="flex items-stretch gap-4">
        {prev ? (
          <Link to={`/review/${prev.id}`} className="group flex flex-1 items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
            <ArrowLeft className="h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:-translate-x-1" />
            <div className="min-w-0">
              <p className="font-body text-[10px] uppercase tracking-wider text-text-muted">Previous</p>
              <p className="truncate font-body text-sm font-medium text-text-primary">{prev.title}</p>
            </div>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link to={`/review/${next.id}`} className="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-border bg-surface p-4 text-right transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
            <div className="min-w-0">
              <p className="font-body text-[10px] uppercase tracking-wider text-text-muted">Next</p>
              <p className="truncate font-body text-sm font-medium text-text-primary">{next.title}</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:translate-x-1" />
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  )
}
