import { useRef, type ReactNode, type ElementType } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '../lib/gsap'

/** Split-text line reveal on scroll. Wrap headings in this. */
export function SplitReveal({
  children,
  as: Tag = 'h2',
  className = '',
  delay = 0,
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLElement>(null)
  const T = Tag as any

  useGSAP(
    () => {
      if (!ref.current) return
      const split = new SplitText(ref.current, {
        type: 'lines',
        linesClass: 'split-line-inner',
      })
      gsap.set(ref.current, { opacity: 1 })
      const wrappers: HTMLElement[] = []
      split.lines.forEach((line) => {
        const wrap = document.createElement('div')
        wrap.className = 'split-line'
        line.parentNode?.insertBefore(wrap, line)
        wrap.appendChild(line)
        wrappers.push(wrap)
      })
      gsap.from(split.lines, {
        yPercent: 110,
        duration: 1.15,
        stagger: 0.09,
        ease: 'power4.out',
        delay,
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      })
    },
    { scope: ref },
  )

  return (
    <T ref={ref} className={className} data-reveal>
      {children}
    </T>
  )
}

/** Fade-and-rise reveal for blocks. */
export function FadeUp({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  y = 40,
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  y?: number
}) {
  const ref = useRef<HTMLElement>(null)
  const T = Tag as any

  useGSAP(
    () => {
      if (!ref.current) return
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        },
      )
    },
    { scope: ref },
  )

  return (
    <T ref={ref} className={className} data-reveal>
      {children}
    </T>
  )
}

/** Image frame with curtain wipe + subtle parallax drift. */
export function Frame({
  src,
  alt,
  className = '',
  ratio,
  parallax = 12,
}: {
  src: string
  alt: string
  className?: string
  ratio?: string
  parallax?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return
      const curtain = ref.current.querySelector('.curtain')
      const img = ref.current.querySelector('img')
      gsap.to(curtain, {
        scaleY: 0,
        duration: 1.2,
        ease: 'power4.inOut',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      })
      if (img && parallax > 0) {
        gsap.fromTo(
          img,
          { yPercent: -parallax / 2, scale: 1 + parallax / 100 },
          {
            yPercent: parallax / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      }
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={`frame ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img src={src} alt={alt} loading="lazy" />
      <div className="curtain" />
    </div>
  )
}
