import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { Zap, Clock, Trophy, ArrowRight, RotateCcw, Home, Flame } from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import { useGamificationStore } from '@/stores/gamificationStore'

interface SpeedQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
}

const SPEED_QUESTIONS: SpeedQuestion[] = [
  {
    id: 'sq1',
    question: 'Which cranial nerve innervates the tongue for movement?',
    options: [
      'CN X (Vagus)',
      'CN XII (Hypoglossal)',
      'CN IX (Glossopharyngeal)',
      'CN VII (Facial)',
    ],
    correctIndex: 1,
  },
  {
    id: 'sq2',
    question: 'At what age does babbling typically begin?',
    options: ['2 months', '4-6 months', '9 months', '12 months'],
    correctIndex: 1,
  },
  {
    id: 'sq3',
    question: "The Broca's area is primarily responsible for:",
    options: ['Auditory comprehension', 'Speech production', 'Visual processing', 'Memory storage'],
    correctIndex: 1,
  },
  {
    id: 'sq4',
    question: 'Which structure prevents food from entering the airway during swallowing?',
    options: ['Velum', 'Epiglottis', 'Hyoid bone', 'Cricoid cartilage'],
    correctIndex: 1,
  },
  {
    id: 'sq5',
    question: 'The FEES assessment uses:',
    options: ['X-ray imaging', 'Ultrasound', 'Flexible endoscope', 'CT scan'],
    correctIndex: 2,
  },
  {
    id: 'sq6',
    question: 'MLU is a measure of:',
    options: [
      'Vocabulary size',
      'Morphological development',
      'Phonological awareness',
      'Pragmatic skills',
    ],
    correctIndex: 1,
  },
  {
    id: 'sq7',
    question: 'Which muscle is the primary elevator of the velum?',
    options: ['Tensor veli palatini', 'Levator veli palatini', 'Palatoglossus', 'Palatopharyngeus'],
    correctIndex: 1,
  },
  {
    id: 'sq8',
    question: "Wernicke's area is located in which lobe?",
    options: ['Frontal', 'Parietal', 'Temporal', 'Occipital'],
    correctIndex: 2,
  },
  {
    id: 'sq9',
    question: 'A child says "goed" instead of "went". This is an example of:',
    options: ['Phonological error', 'Overregularization', 'Code-switching', 'Neologism'],
    correctIndex: 1,
  },
  {
    id: 'sq10',
    question: 'The four phases of swallowing include all EXCEPT:',
    options: ['Oral preparatory', 'Pharyngeal', 'Esophageal', 'Laryngeal'],
    correctIndex: 3,
  },
  {
    id: 'sq11',
    question: 'Which cranial nerve is responsible for vocal fold adduction?',
    options: ['CN IX', 'CN X (Vagus)', 'CN XI', 'CN XII'],
    correctIndex: 1,
  },
  {
    id: 'sq12',
    question: 'The typical age for a child to produce two-word combinations is:',
    options: ['12 months', '18-24 months', '30 months', '36 months'],
    correctIndex: 1,
  },
  {
    id: 'sq13',
    question: 'Which voice disorder is characterized by vocal fold nodules?',
    options: [
      'Spasmodic dysphonia',
      'Muscle tension dysphonia',
      'Phonotrauma',
      'Vocal fold paralysis',
    ],
    correctIndex: 2,
  },
  {
    id: 'sq14',
    question: "ASHA's Code of Ethics Principle I addresses:",
    options: [
      'Professional competence',
      'Welfare of persons served',
      'Public trust',
      'Interprofessional relationships',
    ],
    correctIndex: 1,
  },
  {
    id: 'sq15',
    question:
      'The International Dysphagia Diet Standardisation Initiative (IDDSI) has how many levels?',
    options: ['5 levels', '7 levels', '8 levels', '10 levels'],
    correctIndex: 2,
  },
  {
    id: 'sq16',
    question: 'Which is NOT a feature of childhood apraxia of speech (CAS)?',
    options: [
      'Inconsistent errors',
      'Difficulty with volitional movement',
      'Consistent substitutions',
      'Groping behaviors',
    ],
    correctIndex: 2,
  },
  {
    id: 'sq17',
    question: 'The hyoid bone is located at the level of which cervical vertebra?',
    options: ['C2', 'C3', 'C4', 'C6'],
    correctIndex: 1,
  },
  {
    id: 'sq18',
    question: 'Which type of hearing loss results from damage to the cochlea?',
    options: ['Conductive', 'Sensorineural', 'Mixed', 'Central'],
    correctIndex: 1,
  },
]

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]!
    shuffled[i] = shuffled[j]!
    shuffled[j] = temp
  }
  return shuffled
}

type GamePhase = 'ready' | 'playing' | 'results'

interface Particle {
  id: number
  x: number
  y: number
}

function ConfettiBurst({ particles }: { particles: Particle[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || particles.length === 0) return

    const els = containerRef.current.querySelectorAll('.confetti-particle')
    els.forEach((el) => {
      gsap.fromTo(
        el,
        {
          scale: 0,
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
        },
        {
          scale: gsap.utils.random(0.5, 1.5),
          opacity: 0,
          x: gsap.utils.random(-120, 120),
          y: gsap.utils.random(-150, -30),
          rotation: gsap.utils.random(-360, 360),
          duration: gsap.utils.random(0.6, 1.2),
          ease: 'power2.out',
        },
      )
    })
  }, [particles])

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[9997] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle absolute h-3 w-3 rounded-sm"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: ['#f59e0b', '#4338ca', '#22c55e', '#ef4444', '#a855f7', '#ec4899'][
              p.id % 6
            ],
          }}
        />
      ))}
    </div>
  )
}

export default function SpeedRoundPage() {
  const navigate = useNavigate()
  const [phase, setPhase] = useState<GamePhase>('ready')
  const [questions, setQuestions] = useState<SpeedQuestion[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [score, setScore] = useState(0)
  const [combo, setCombo] = useState(0)
  const [maxCombo, setMaxCombo] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const questionRef = useRef<HTMLDivElement>(null)
  const particleIdRef = useRef(0)

  const addXP = useGamificationStore((s) => s.addXP)
  const updateStreak = useGamificationStore((s) => s.updateStreak)
  const completeSpeedRound = useGamificationStore((s) => s.completeSpeedRound)
  const addQuestionsAnswered = useGamificationStore((s) => s.addQuestionsAnswered)

  const endGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    setPhase('results')
  }, [])

  useEffect(() => {
    if (phase !== 'playing') return

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          endGame()
          return 0
        }
        return t - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [phase, endGame])

  // Animate question entrance
  useEffect(() => {
    if (phase === 'playing' && questionRef.current) {
      gsap.fromTo(
        questionRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' },
      )
    }
  }, [currentIdx, phase])

  function startGame() {
    const shuffled = shuffleArray(SPEED_QUESTIONS)
    setQuestions(shuffled)
    setCurrentIdx(0)
    setTimeLeft(60)
    setScore(0)
    setCombo(0)
    setMaxCombo(0)
    setTotalAnswered(0)
    setShowFeedback(null)
    setParticles([])
    setPhase('playing')
  }

  function spawnParticles(x: number, y: number) {
    const newParticles: Particle[] = []
    for (let i = 0; i < 12; i++) {
      particleIdRef.current += 1
      newParticles.push({ id: particleIdRef.current, x, y })
    }
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 1500)
  }

  function handleAnswer(selectedIdx: number, event: React.MouseEvent) {
    if (showFeedback) return
    const q = questions[currentIdx]
    if (!q) return

    const isCorrect = selectedIdx === q.correctIndex
    setTotalAnswered((a) => a + 1)

    if (isCorrect) {
      const comboBonus = Math.min(combo, 5)
      const points = 10 + comboBonus * 2
      setScore((s) => s + points)
      setCombo((c) => {
        const newC = c + 1
        setMaxCombo((m) => Math.max(m, newC))
        return newC
      })
      spawnParticles(event.clientX, event.clientY)
      setShowFeedback('correct')
    } else {
      setCombo(0)
      setShowFeedback('wrong')
    }

    setTimeout(() => {
      setShowFeedback(null)
      if (currentIdx < questions.length - 1) {
        setCurrentIdx((i) => i + 1)
      } else {
        endGame()
      }
    }, 600)
  }

  // Apply XP on results
  useEffect(() => {
    if (phase === 'results' && totalAnswered > 0) {
      addXP(score)
      addQuestionsAnswered(totalAnswered)
      updateStreak()
      completeSpeedRound()
    }
    // Only run when entering results phase
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const currentQuestion = questions[currentIdx]
  const timerPercent = (timeLeft / 60) * 100
  const timerColor = timeLeft > 20 ? 'text-success' : timeLeft > 10 ? 'text-warning' : 'text-error'

  return (
    <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
      <ConfettiBurst particles={particles} />

      {phase === 'ready' && (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <div className="from-secondary shadow-secondary/30 mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br to-amber-400 shadow-lg">
            <Zap className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-display text-text-primary text-4xl md:text-5xl">Speed Round</h1>
          <p className="font-body text-text-secondary mx-auto mt-4 max-w-md text-lg">
            60 seconds. Rapid-fire SLP questions. Build combos for bonus points. How high can you
            score?
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <div className="bg-surface flex items-center gap-2 rounded-xl px-4 py-2">
              <Clock className="text-secondary h-4 w-4" />
              <span className="text-text-secondary font-mono text-sm">60 seconds</span>
            </div>
            <div className="bg-surface flex items-center gap-2 rounded-xl px-4 py-2">
              <Flame className="text-error h-4 w-4" />
              <span className="text-text-secondary font-mono text-sm">Combo multiplier</span>
            </div>
            <div className="bg-surface flex items-center gap-2 rounded-xl px-4 py-2">
              <Trophy className="text-primary h-4 w-4" />
              <span className="text-text-secondary font-mono text-sm">+10 XP per correct</span>
            </div>
          </div>
          <Button variant="primary" size="lg" className="mt-10" onClick={startGame}>
            Start Round
            <Zap className="h-5 w-5" />
          </Button>
        </div>
      )}

      {phase === 'playing' && currentQuestion && (
        <div>
          {/* Top bar: timer + score + combo */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`flex items-center gap-2 ${timerColor}`}>
                <Clock className="h-5 w-5 shrink-0" />
                <span className="font-mono text-xl font-bold sm:text-2xl">{timeLeft}s</span>
              </div>
              {combo > 1 && (
                <div className="bg-secondary/15 flex items-center gap-1 rounded-full px-2.5 py-1 sm:px-3">
                  <Flame className="text-secondary h-4 w-4" />
                  <span className="text-secondary font-mono text-xs font-bold sm:text-sm">
                    {combo}x
                  </span>
                </div>
              )}
            </div>
            <div className="text-right">
              <p className="text-text-primary font-mono text-xl font-bold sm:text-2xl">{score}</p>
              <p className="font-body text-text-muted text-xs">points</p>
            </div>
          </div>

          {/* Timer bar */}
          <div className="bg-surface-elevated mb-8 h-1.5 overflow-hidden rounded-full">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-linear ${
                timeLeft > 20 ? 'bg-success' : timeLeft > 10 ? 'bg-warning' : 'bg-error'
              }`}
              style={{ width: `${timerPercent}%` }}
            />
          </div>

          {/* Question */}
          <div ref={questionRef}>
            <Card className="relative mb-6 overflow-hidden">
              {showFeedback === 'correct' && (
                <div className="border-success/50 bg-success/5 pointer-events-none absolute inset-0 rounded-2xl border-2" />
              )}
              {showFeedback === 'wrong' && (
                <div className="border-error/50 bg-error/5 pointer-events-none absolute inset-0 rounded-2xl border-2" />
              )}
              <p className="font-body text-text-muted text-xs">
                Question {currentIdx + 1} of {questions.length}
              </p>
              <h2 className="font-display text-text-primary mt-2 text-lg leading-snug sm:text-xl md:text-2xl">
                {currentQuestion.question}
              </h2>
            </Card>

            <div className="grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option, idx) => {
                let style = 'border-border bg-surface/50 hover:border-primary/50 hover:bg-surface'
                if (showFeedback) {
                  if (idx === currentQuestion.correctIndex) {
                    style = 'border-success/50 bg-success/10'
                  } else if (showFeedback === 'wrong') {
                    style = 'border-border bg-surface/50 opacity-50'
                  }
                }
                return (
                  <button
                    key={idx}
                    onClick={(e) => handleAnswer(idx, e)}
                    disabled={showFeedback !== null}
                    className={`font-body text-text-primary rounded-xl border p-3 text-left text-sm leading-relaxed transition-all duration-200 sm:p-4 ${style}`}
                  >
                    <span className="text-text-muted mr-2 font-mono text-xs">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {phase === 'results' && (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <div className="from-primary to-secondary shadow-primary/30 mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br shadow-lg">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-display text-text-primary text-4xl md:text-5xl">Round Complete!</h1>
          <p className="font-body text-text-secondary mt-2 text-lg">Here are your results</p>

          <div className="mt-8 grid w-full max-w-md grid-cols-3 items-stretch gap-3 sm:gap-4">
            <Card className="flex flex-col items-center justify-center text-center">
              <p className="text-secondary font-mono text-2xl font-bold sm:text-3xl">{score}</p>
              <p className="font-body text-text-muted mt-1 text-xs">Points</p>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center">
              <p className="text-primary font-mono text-2xl font-bold sm:text-3xl">
                {totalAnswered}
              </p>
              <p className="font-body text-text-muted mt-1 text-xs">Answered</p>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center">
              <p className="text-success font-mono text-2xl font-bold sm:text-3xl">{maxCombo}x</p>
              <p className="font-body text-text-muted mt-1 text-xs">Max Combo</p>
            </Card>
          </div>

          <div className="bg-secondary/10 mt-4 rounded-xl px-6 py-3">
            <p className="font-body text-secondary text-sm">
              <Zap className="mr-1 inline h-4 w-4" />+{score} XP earned!
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Button variant="primary" onClick={startGame}>
              <RotateCcw className="h-4 w-4" />
              Play Again
            </Button>
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
          </div>

          <button
            onClick={() => navigate('/clinical-scenario')}
            className="font-body text-text-secondary hover:text-primary mt-4 flex items-center gap-2 text-sm transition-colors"
          >
            Try Clinical Scenarios
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}
