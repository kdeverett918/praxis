import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import { studyContentData } from '@/data/study-content'

const CONTENT_CATEGORY_LABELS: Record<string, string> = {
  I: 'Foundations & Professional Practice',
  II: 'Screening, Assessment, Eval & Dx',
  III: 'Treatment Planning & Implementation',
}

/**
 * Minimal Markdown-to-JSX renderer for study content.
 * Handles headings, bold, italic, tables, blockquotes, ordered/unordered lists, and paragraphs.
 */
function renderMarkdown(md: string) {
  const lines = md.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  const getLine = (idx: number): string => lines[idx] ?? ''

  while (i < lines.length) {
    const line = getLine(i)

    // Skip empty lines
    if (line.trim() === '') {
      i++
      continue
    }

    // Table — starts with |
    if (line.trim().startsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && getLine(i).trim().startsWith('|')) {
        tableLines.push(getLine(i))
        i++
      }
      elements.push(renderTable(tableLines, elements.length))
      continue
    }

    // Blockquote
    if (line.trim().startsWith('>')) {
      const quoteLines: string[] = []
      while (i < lines.length && getLine(i).trim().startsWith('>')) {
        quoteLines.push(getLine(i).trim().replace(/^>\s*/, ''))
        i++
      }
      elements.push(
        <blockquote
          key={elements.length}
          className="my-4 border-l-4 border-primary/40 bg-primary/5 px-4 py-3 font-body text-sm leading-relaxed text-text-secondary"
        >
          {inlineFormat(quoteLines.join(' '))}
        </blockquote>,
      )
      continue
    }

    // Heading
    const headingMatch = line.match(/^(#{1,4})\s+(.*)/)
    if (headingMatch) {
      const level = headingMatch[1]?.length ?? 4
      const text = headingMatch[2] ?? ''
      const headingClasses: Record<number, string> = {
        1: 'font-display text-2xl text-text-primary mt-8 mb-4',
        2: 'font-display text-xl text-text-primary mt-6 mb-3',
        3: 'font-display text-lg text-text-primary mt-5 mb-2',
        4: 'font-display text-base text-text-primary mt-4 mb-2',
      }
      elements.push(
        <div key={elements.length} className={headingClasses[level] ?? headingClasses[4]}>
          {inlineFormat(text)}
        </div>,
      )
      i++
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line.trim())) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(getLine(i).trim())) {
        listItems.push(getLine(i).trim().replace(/^\d+\.\s+/, ''))
        i++
      }
      elements.push(
        <ol key={elements.length} className="my-3 ml-6 list-decimal space-y-1 font-body text-sm leading-relaxed text-text-secondary">
          {listItems.map((item, idx) => (
            <li key={idx}>{inlineFormat(item)}</li>
          ))}
        </ol>,
      )
      continue
    }

    // Unordered list (- or *)
    if (/^[-*]\s/.test(line.trim())) {
      const listItems: string[] = []
      while (i < lines.length && /^[-*]\s/.test(getLine(i).trim())) {
        listItems.push(getLine(i).trim().replace(/^[-*]\s+/, ''))
        i++
      }
      elements.push(
        <ul key={elements.length} className="my-3 ml-6 list-disc space-y-1 font-body text-sm leading-relaxed text-text-secondary">
          {listItems.map((item, idx) => (
            <li key={idx}>{inlineFormat(item)}</li>
          ))}
        </ul>,
      )
      continue
    }

    // Paragraph (default)
    elements.push(
      <p key={elements.length} className="my-2 font-body text-sm leading-relaxed text-text-secondary">
        {inlineFormat(line.trim())}
      </p>,
    )
    i++
  }

  return elements
}

/** Render inline formatting: bold, italic, inline code */
function inlineFormat(text: string): React.ReactNode {
  // Split on **bold**, *italic*, and `code` patterns
  const parts: React.ReactNode[] = []
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[2]) {
      parts.push(<strong key={match.index} className="font-semibold text-text-primary">{match[2]}</strong>)
    } else if (match[3]) {
      parts.push(<em key={match.index}>{match[3]}</em>)
    } else if (match[4]) {
      parts.push(
        <code key={match.index} className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-xs text-primary">
          {match[4]}
        </code>,
      )
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts.length === 1 ? parts[0] : parts
}

/** Render a Markdown table from raw lines */
function renderTable(tableLines: string[], key: number) {
  const parseRow = (line: string) =>
    line
      .split('|')
      .map((c) => c.trim())
      .filter(Boolean)

  const headers = parseRow(tableLines[0] ?? '')
  // Skip separator line (index 1)
  const bodyLines = tableLines.slice(2)

  return (
    <div key={key} className="my-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left font-body text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-elevated">
            {headers.map((h, idx) => (
              <th key={idx} className="px-4 py-2.5 font-semibold text-text-primary">
                {inlineFormat(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyLines.map((line, rowIdx) => {
            const cells = parseRow(line)
            return (
              <tr key={rowIdx} className="border-b border-border last:border-0">
                {cells.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-4 py-2.5 text-text-secondary">
                    {inlineFormat(cell)}
                  </td>
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

  if (!topic) {
    return (
      <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
        <Link to="/review" className="mb-6 inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-text-secondary">
          <ArrowLeft className="h-4 w-4" />
          Back to Review
        </Link>
        <h1 className="font-display text-2xl text-text-primary">Topic Not Found</h1>
        <p className="mt-4 font-body text-text-secondary">
          The requested review topic could not be found.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      <Link to="/review" className="mb-6 inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-text-secondary">
        <ArrowLeft className="h-4 w-4" />
        Back to Review
      </Link>

      <div className="mb-6 flex items-center gap-3">
        <BookOpen className="h-6 w-6 text-primary" />
        <h1 className="font-display text-2xl text-text-primary">{topic.title}</h1>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Badge variant="primary">{CONTENT_CATEGORY_LABELS[topic.contentCategory] ?? topic.contentCategory}</Badge>
        <Badge variant="default">{topic.subcategory}</Badge>
        {topic.bigNine.map((area) => (
          <Badge key={area} variant="default" className="text-[10px]">{area}</Badge>
        ))}
      </div>

      {/* Markdown content */}
      <Card className="mb-8">
        <div className="prose-custom">{renderMarkdown(topic.contentMarkdown)}</div>
      </Card>

      {/* Key Terms */}
      {topic.keyTerms.length > 0 && (
        <div>
          <h2 className="mb-4 font-display text-xl text-text-primary">Key Terms</h2>
          <div className="space-y-2">
            {topic.keyTerms.map((term) => (
              <Card key={term.term} className="py-3">
                <p className="font-body font-semibold text-text-primary">{term.term}</p>
                <p className="mt-1 font-body text-sm text-text-secondary">{term.definition}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
