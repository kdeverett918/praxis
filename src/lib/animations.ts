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

export { gsap, ScrollTrigger }
