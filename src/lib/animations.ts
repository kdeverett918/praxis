import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initScrollReveals() {
  const reveals = document.querySelectorAll('.gsap-reveal')
  reveals.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  })

  const revealsLeft = document.querySelectorAll('.gsap-reveal-left')
  revealsLeft.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  })

  const revealsRight = document.querySelectorAll('.gsap-reveal-right')
  revealsRight.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  })

  const scaleIns = document.querySelectorAll('.gsap-scale-in')
  scaleIns.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  })
}

export function staggerReveal(selector: string, staggerDelay = 0.1) {
  gsap.to(selector, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: staggerDelay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: selector,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })
}

export function counterAnimation(el: HTMLElement, target: number, duration = 1.5) {
  const obj = { val: 0 }
  gsap.to(obj, {
    val: target,
    duration,
    ease: 'power2.out',
    onUpdate() {
      el.textContent = Math.round(obj.val).toLocaleString()
    },
  })
}

export function cardEntrance(el: HTMLElement) {
  gsap.fromTo(
    el,
    { opacity: 0, scale: 0.9, rotation: 1 },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.7,
      ease: 'back.out(1.7)',
    },
  )
}

export function pulseGlow(el: HTMLElement, color = 'rgba(99, 102, 241, 0.4)') {
  gsap.to(el, {
    boxShadow: `0 0 30px ${color}, 0 0 60px ${color}`,
    duration: 1,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  })
}

export function shakeElement(el: HTMLElement) {
  gsap.fromTo(
    el,
    { x: 0 },
    {
      x: 8,
      duration: 0.08,
      ease: 'power2.inOut',
      repeat: 5,
      yoyo: true,
      onComplete() {
        gsap.set(el, { x: 0 })
      },
    },
  )
}

export { gsap, ScrollTrigger }
