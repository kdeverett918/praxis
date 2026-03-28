import { describe, it, expect } from 'vitest'
import { calculateSRS, DEFAULT_SRS } from './srs'

describe('SM-2 Spaced Repetition Algorithm', () => {
  it('should return default state', () => {
    expect(DEFAULT_SRS.easeFactor).toBe(2.5)
    expect(DEFAULT_SRS.interval).toBe(1)
    expect(DEFAULT_SRS.repetitions).toBe(0)
  })

  it('should set interval to 1 on first correct answer', () => {
    const result = calculateSRS(false, 4, 2.5, 1, 0)
    expect(result.interval).toBe(1)
    expect(result.repetitions).toBe(1)
  })

  it('should set interval to 3 on second correct answer', () => {
    const result = calculateSRS(false, 4, 2.5, 1, 1)
    expect(result.interval).toBe(3)
    expect(result.repetitions).toBe(2)
  })

  it('should multiply interval by ease factor on subsequent correct answers', () => {
    const result = calculateSRS(false, 4, 2.5, 3, 2)
    expect(result.interval).toBe(8) // Math.round(3 * 2.5) = 8
    expect(result.repetitions).toBe(3)
  })

  it('should reset on incorrect answer', () => {
    const result = calculateSRS(false, 1, 2.5, 6, 3)
    expect(result.interval).toBe(1)
    expect(result.repetitions).toBe(0)
  })

  it('should never let ease factor drop below 1.3', () => {
    const result = calculateSRS(false, 0, 1.3, 1, 0)
    expect(result.easeFactor).toBeGreaterThanOrEqual(1.3)
  })

  it('should increase ease factor for high quality answers', () => {
    const result = calculateSRS(false, 5, 2.5, 1, 0)
    expect(result.easeFactor).toBeGreaterThan(2.5)
  })

  it('should decrease ease factor for low quality answers', () => {
    const result = calculateSRS(false, 3, 2.5, 1, 0)
    expect(result.easeFactor).toBeLessThan(2.5)
  })

  it('should set next review date in the future', () => {
    const now = new Date()
    const result = calculateSRS(false, 4, 2.5, 1, 0)
    expect(result.nextReview.getTime()).toBeGreaterThan(now.getTime())
  })
})
