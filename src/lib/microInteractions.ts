import gsap from 'gsap'

/**
 * Animates an XP gain popup element: floats up, scales, fades out.
 * The element should already be positioned and visible.
 */
export function xpPopup(el: HTMLElement) {
  return gsap.fromTo(
    el,
    { y: 0, opacity: 1, scale: 1 },
    {
      y: -60,
      opacity: 0,
      scale: 1.2,
      duration: 0.8,
      ease: 'power2.out',
      onComplete() {
        el.remove()
      },
    },
  )
}

/**
 * Green glow pulse on an element for correct-answer feedback.
 */
export function swipeSuccessGlow(el: HTMLElement) {
  return gsap.fromTo(
    el,
    { boxShadow: '0 0 0 rgba(34, 197, 94, 0)' },
    {
      boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)',
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out',
    },
  )
}

/**
 * Red glow flash for wrong-answer feedback.
 */
export function swipeErrorGlow(el: HTMLElement) {
  return gsap.fromTo(
    el,
    { boxShadow: '0 0 0 rgba(239, 68, 68, 0)' },
    {
      boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)',
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out',
    },
  )
}

/**
 * Scale bounce for combo counter increments.
 */
export function comboIncrement(el: HTMLElement) {
  return gsap.fromTo(
    el,
    { scale: 1 },
    {
      scale: 1.3,
      duration: 0.2,
      ease: 'back.out(2)',
      yoyo: true,
      repeat: 1,
    },
  )
}

/**
 * Celebration scale-in for level-up or achievement badges.
 */
export function celebrationEntrance(el: HTMLElement) {
  return gsap.fromTo(
    el,
    { scale: 0, opacity: 0, rotation: -10 },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)',
    },
  )
}

/**
 * Shimmer sweep across an element (e.g., correct answer border).
 */
export function shimmerSweep(el: HTMLElement) {
  return gsap.fromTo(
    el,
    { backgroundPosition: '-200% 0' },
    {
      backgroundPosition: '200% 0',
      duration: 0.8,
      ease: 'power2.inOut',
    },
  )
}
