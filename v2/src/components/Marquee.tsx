import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

export default function Marquee({
  items,
  speed = 60,
  reverse = false,
  className = '',
}: {
  items: string[]
  speed?: number
  reverse?: boolean
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const track = ref.current?.querySelector<HTMLElement>('.marquee__track')
      if (!track) return
      const width = track.scrollWidth / 2
      const tween = gsap.to(track, {
        x: reverse ? width : -width,
        duration: Math.max(10, width / speed),
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % width}px`,
        },
      })
      return () => tween.kill()
    },
    { scope: ref },
  )

  const row = (key: string) => (
    <span key={key} style={{ display: 'inline-flex' }}>
      {items.map((it, i) => (
        <span className="marquee__item" key={i}>
          <span className={i % 2 ? 'hollow' : ''}>{it}</span>
          <span className="diamond">◆</span>
        </span>
      ))}
    </span>
  )

  return (
    <div ref={ref} className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee__track">
        {row('a')}
        {row('b')}
      </div>
    </div>
  )
}
