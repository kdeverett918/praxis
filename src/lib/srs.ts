export interface SRSState {
  easeFactor: number
  interval: number
  repetitions: number
  nextReview: Date
}

export function calculateSRS(
  _isCorrect: boolean,
  quality: number,
  currentEF: number,
  currentInterval: number,
  currentReps: number,
): SRSState {
  let ef = currentEF
  let interval = currentInterval
  let reps = currentReps

  if (quality >= 3) {
    if (reps === 0) interval = 1
    else if (reps === 1) interval = 3
    else interval = Math.round(currentInterval * ef)
    reps += 1
  } else {
    reps = 0
    interval = 1
  }

  ef = Math.max(1.3, ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))

  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + interval)

  return { easeFactor: ef, interval, repetitions: reps, nextReview }
}

export const DEFAULT_SRS: SRSState = {
  easeFactor: 2.5,
  interval: 1,
  repetitions: 0,
  nextReview: new Date(),
}
