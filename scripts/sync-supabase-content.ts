import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { Client } from 'pg'
import { category1Flashcards } from '../src/data/flashcards-category-1.ts'
import { category2Flashcards } from '../src/data/flashcards-category-2.ts'
import { category3Flashcards } from '../src/data/flashcards-category-3.ts'
import { category1Questions } from '../src/data/questions-category-1.ts'
import { category1PoolB } from '../src/data/questions-category-1-pool-b.ts'
import { category1PoolC } from '../src/data/questions-category-1-pool-c.ts'
import { category1PoolD } from '../src/data/questions-category-1-pool-d.ts'
import { category2Questions } from '../src/data/questions-category-2.ts'
import { category2PoolB } from '../src/data/questions-category-2-pool-b.ts'
import { category2PoolC } from '../src/data/questions-category-2-pool-c.ts'
import { category2PoolD } from '../src/data/questions-category-2-pool-d.ts'
import { category3Questions } from '../src/data/questions-category-3.ts'
import { category3PoolB } from '../src/data/questions-category-3-pool-b.ts'
import { category3PoolC } from '../src/data/questions-category-3-pool-c.ts'
import { category3PoolD } from '../src/data/questions-category-3-pool-d.ts'
import { studyContentData } from '../src/data/study-content.ts'

type ContentCategory = 'I' | 'II' | 'III'

type LocalQuestion = {
  id: string
  stem: string
  options: Array<{ id: string; text: string; isCorrect: boolean }>
  explanation: string
  incorrectExplanations: Record<string, string>
  contentCategory: ContentCategory
  subcategory: string
  bigNine: string[]
  difficulty: 'recall' | 'application' | 'analysis' | 'clinical_reasoning'
  tags: string[]
  clinicalSetting: string | null
  referenceSources: string[]
}

type LocalFlashcard = {
  id: string
  front: string
  back: string
  category: string
  subcategory: string
  tags: string[]
}

type LocalStudyTopic = {
  id: string
  title: string
  contentCategory: ContentCategory
  subcategory: string
  bigNine: string[]
  contentMarkdown: string
  keyTerms: Array<{ term: string; definition: string }>
  sortOrder: number
}

const questionBanks: Record<ContentCategory, LocalQuestion[]> = {
  I: [...category1Questions, ...category1PoolB, ...category1PoolC, ...category1PoolD],
  II: [...category2Questions, ...category2PoolB, ...category2PoolC, ...category2PoolD],
  III: [...category3Questions, ...category3PoolB, ...category3PoolC, ...category3PoolD],
}

const allQuestions = Object.values(questionBanks).flat()

const flashcardBanks: Record<ContentCategory, LocalFlashcard[]> = {
  I: category1Flashcards,
  II: category2Flashcards,
  III: category3Flashcards,
}

const allFlashcards = Object.entries(flashcardBanks).flatMap(([contentCategory, items]) =>
  items.map((item) => ({ ...item, contentCategory: contentCategory as ContentCategory })),
)

const allStudyTopics = studyContentData as LocalStudyTopic[]

function parseEnvFile(filePath: string) {
  if (!existsSync(filePath)) return {}

  return Object.fromEntries(
    readFileSync(filePath, 'utf8')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line !== '' && !line.startsWith('#') && line.includes('='))
      .map((line) => {
        const separatorIndex = line.indexOf('=')
        const key = line.slice(0, separatorIndex).trim()
        const rawValue = line.slice(separatorIndex + 1).trim()
        const value = rawValue.replace(/^['"]|['"]$/g, '')
        return [key, value]
      }),
  )
}

function getEnv() {
  const root = resolve(process.cwd())
  return {
    ...parseEnvFile(resolve(root, '.env')),
    ...parseEnvFile(resolve(root, '.env.local')),
    ...process.env,
  }
}

function getConnectionString(env: Record<string, string | undefined>) {
  if (env.SUPABASE_DB_URL) {
    return env.SUPABASE_DB_URL
  }

  const projectRef =
    env.SUPABASE_PROJECT_REF ??
    (env.VITE_SUPABASE_URL ? new URL(env.VITE_SUPABASE_URL).hostname.split('.')[0] : undefined)
  const dbPassword = env.SUPABASE_DB_PASSWORD

  if (!projectRef || !dbPassword) {
    throw new Error(
      'Missing SUPABASE_DB_URL or both SUPABASE_PROJECT_REF and SUPABASE_DB_PASSWORD in local env files.',
    )
  }

  return `postgresql://postgres:${encodeURIComponent(dbPassword)}@db.${projectRef}.supabase.co:5432/postgres`
}

function pickFreeQuestionIds(questions: LocalQuestion[], perCategory = 6) {
  const selected = new Set<string>()

  for (const category of ['I', 'II', 'III'] as const) {
    const pool = questions
      .filter((question) => question.contentCategory === category)
      .sort((left, right) => left.id.localeCompare(right.id))

    const picked: LocalQuestion[] = []
    const seenAreas = new Set<string>()

    for (const question of pool) {
      if (picked.length >= perCategory) break

      const introducesNewArea = question.bigNine.some((area) => !seenAreas.has(area))
      if (introducesNewArea || picked.length < perCategory) {
        picked.push(question)
        question.bigNine.forEach((area) => seenAreas.add(area))
      }
    }

    for (const question of picked) {
      selected.add(question.id)
    }
  }

  return selected
}

async function main() {
  const env = getEnv()
  const connectionString = getConnectionString(env)
  const freeQuestionIds = pickFreeQuestionIds(allQuestions)
  const schemaSql = readFileSync(resolve(process.cwd(), 'supabase/schema.sql'), 'utf8')

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  })

  await client.connect()

  try {
    await client.query(schemaSql)
    await client.query('begin')

    await client.query(
      `delete from flashcard_progress
       where flashcard_id in (select id from flashcards where source_id is null)`,
    )
    await client.query(
      `delete from srs_cards
       where question_id in (select id from questions where source_id is null)`,
    )
    await client.query(
      `delete from question_attempts
       where question_id in (select id from questions where source_id is null)`,
    )
    await client.query(
      `delete from exam_sessions
       where exists (
         select 1
         from unnest(question_ids) as legacy_question_id
         join questions on questions.id = legacy_question_id
         where questions.source_id is null
       )`,
    )
    await client.query('delete from flashcards where source_id is null')
    await client.query('delete from questions where source_id is null')
    await client.query('delete from study_content where slug is null')

    for (const question of allQuestions) {
      await client.query(
        `insert into questions (
          source_id,
          stem,
          options,
          explanation,
          incorrect_explanations,
          content_category,
          subcategory,
          big_nine,
          difficulty,
          tags,
          clinical_setting,
          reference_sources,
          is_free,
          is_published
        )
        values (
          $1, $2, $3::jsonb, $4, $5::jsonb, $6, $7, $8::text[], $9, $10::text[], $11, $12::text[], $13, true
        )
        on conflict (source_id) do update
        set
          stem = excluded.stem,
          options = excluded.options,
          explanation = excluded.explanation,
          incorrect_explanations = excluded.incorrect_explanations,
          content_category = excluded.content_category,
          subcategory = excluded.subcategory,
          big_nine = excluded.big_nine,
          difficulty = excluded.difficulty,
          tags = excluded.tags,
          clinical_setting = excluded.clinical_setting,
          reference_sources = excluded.reference_sources,
          is_free = excluded.is_free,
          is_published = excluded.is_published,
          updated_at = now()`,
        [
          question.id,
          question.stem,
          JSON.stringify(question.options),
          question.explanation,
          JSON.stringify(question.incorrectExplanations),
          question.contentCategory,
          question.subcategory,
          question.bigNine,
          question.difficulty,
          question.tags,
          question.clinicalSetting,
          question.referenceSources,
          freeQuestionIds.has(question.id),
        ],
      )
    }

    for (const flashcard of allFlashcards) {
      await client.query(
        `insert into flashcards (
          source_id,
          front,
          back,
          content_category,
          category,
          subcategory,
          tags,
          is_published
        )
        values ($1, $2, $3, $4, $5, $6, $7::text[], true)
        on conflict (source_id) do update
        set
          front = excluded.front,
          back = excluded.back,
          content_category = excluded.content_category,
          category = excluded.category,
          subcategory = excluded.subcategory,
          tags = excluded.tags,
          is_published = excluded.is_published`,
        [
          flashcard.id,
          flashcard.front,
          flashcard.back,
          flashcard.contentCategory,
          flashcard.category,
          flashcard.subcategory,
          flashcard.tags,
        ],
      )
    }

    for (const topic of allStudyTopics) {
      await client.query(
        `insert into study_content (
          slug,
          title,
          content_category,
          subcategory,
          big_nine,
          content_markdown,
          key_terms,
          sort_order,
          is_published
        )
        values ($1, $2, $3, $4, $5::text[], $6, $7::jsonb, $8, true)
        on conflict (slug) do update
        set
          title = excluded.title,
          content_category = excluded.content_category,
          subcategory = excluded.subcategory,
          big_nine = excluded.big_nine,
          content_markdown = excluded.content_markdown,
          key_terms = excluded.key_terms,
          sort_order = excluded.sort_order,
          is_published = excluded.is_published`,
        [
          topic.id,
          topic.title,
          topic.contentCategory,
          topic.subcategory,
          topic.bigNine,
          topic.contentMarkdown,
          JSON.stringify(topic.keyTerms),
          topic.sortOrder,
        ],
      )
    }

    const { rows: counts } = await client.query<{
      questions: string
      free_questions: string
      flashcards: string
      study_topics: string
    }>(`
      select
        (select count(*)::text from questions where source_id is not null) as questions,
        (select count(*)::text from questions where is_free = true) as free_questions,
        (select count(*)::text from flashcards where source_id is not null) as flashcards,
        (select count(*)::text from study_content where slug is not null) as study_topics
    `)

    await client.query('commit')

    console.log(
      JSON.stringify(
        {
          synced: {
            questions: allQuestions.length,
            flashcards: allFlashcards.length,
            studyTopics: allStudyTopics.length,
          },
          freeQuestionCount: freeQuestionIds.size,
          database: counts[0],
        },
        null,
        2,
      ),
    )
  } catch (error) {
    await client.query('rollback')
    throw error
  } finally {
    await client.end()
  }
}

void main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
