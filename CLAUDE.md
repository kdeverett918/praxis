# PraxisPrep.io — SLP Praxis 5331 Study Platform

## Project Overview
AI-powered adaptive study platform for SLP grad students preparing for the Praxis 5331 exam. Built by Tech SLP Studio (Kristine, M.A., CCC-SLP).

## Tech Stack
- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS 4
- **State**: Zustand (persisted user state, quiz/exam session state)
- **Animation**: GSAP 3 (ScrollTrigger) + Motion
- **Charts**: Recharts
- **Backend**: Supabase (Auth, PostgreSQL, RLS)
- **AI**: Anthropic Claude API (rationale generation)
- **Payments**: Stripe (one-time purchase model)
- **Deployment**: Render (static site, auto-deploy from master)
- **Icons**: Lucide React

## URLs
- **Live**: https://praxis-8vla.onrender.com
- **GitHub**: https://github.com/kdeverett918/praxis
- **Render Service ID**: srv-d73icgfpm1nc739b3js0

## Design System: Midnight Scholar
- **Palette**: Deep indigo (#0f0a2e) background, warm amber (#f59e0b) secondary, indigo (#4338ca) primary
- **Typography**: DM Serif Display (headlines), Plus Jakarta Sans (body), JetBrains Mono (data)
- **Texture**: Film grain noise overlay (0.03 opacity), gradient orbs, frosted glass cards
- **Motion**: Cinematic fade-up reveals, GSAP ScrollTrigger, snappy button hover
- **Design DNA**: `design/DESIGN-DNA.md`
- **Tokens**: `src/styles/design-tokens.css`

## Project Structure
```
src/
├── components/
│   ├── layout/          # AppShell, Navbar, Footer
│   ├── question/        # QuestionCard (core product)
│   ├── shared/          # Button, Card, Badge
│   ├── dashboard/       # (future) StudyStreak, BigNineRadar
│   ├── exam/            # (future) ExamNavGrid, ExamResults
│   ├── flashcard/       # (future) FlashcardDeck
│   └── content/         # (future) TopicOutline
├── pages/               # Route components (lazy-loaded)
├── stores/              # Zustand stores (questionStore)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (animations, srs, supabase)
├── types/               # TypeScript types (database, question)
├── styles/              # Design tokens CSS
└── data/                # (future) Seed data, constants
```

## Key Commands
```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # TypeScript check + Vite build
npm test             # Run Vitest
npm run test:e2e     # Run Playwright
npm run lint         # ESLint
npm run format       # Prettier
```

## Routes
| Path | Page | Auth Required |
|------|------|---------------|
| `/` | Landing page (marketing) | No |
| `/login` | Login | No |
| `/signup` | Signup | No |
| `/dashboard` | Main dashboard | Yes |
| `/study` | Study mode (untimed, with rationales) | Yes |
| `/exam` | Exam simulation (132 Qs, 150 min) | Yes |
| `/quiz` | Custom quiz builder | Yes |
| `/flashcards` | Flashcard review | Yes |
| `/analytics` | Performance analytics | Yes |
| `/review` | Study content outlines | Yes |

## Conventions
- **Path aliases**: `@/*` maps to `src/*`
- **Tailwind CSS 4**: Using `@theme inline` in index.css, design tokens as CSS custom properties
- **No semicolons**: Prettier config (matching careers project)
- **Lazy loading**: All page components are lazy-loaded with Suspense
- **Code splitting**: Manual chunks for react-vendor, ui-vendor, animation-vendor, supabase

## Environment Variables
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_ANTHROPIC_API_KEY=
VITE_STRIPE_PUBLISHABLE_KEY=
VITE_POSTHOG_KEY=
```

## Praxis 5331 Content Structure
- **3 Content Categories**: I (Foundations), II (Assessment), III (Treatment) — 44 questions each
- **9 Big Nine Areas**: Speech sound, fluency, voice/resonance, language, pragmatics, cognitive, AAC, hearing, feeding/swallowing
- **4 Difficulty Tiers**: Recall, Application, Analysis, Clinical Reasoning
- **Question Format**: Single-select MCQ (4 options), with explanation + incorrect explanations
- **SM-2 Algorithm**: Spaced repetition in `src/lib/srs.ts`

## Legal
- "Praxis" is a registered trademark of ETS — include disclaimer on all pages
- All questions must be 100% original — never reproduce ETS questions
- ASHA Code of Ethics and legislation (IDEA/Medicare) are public and can be referenced
