import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

/** Animated counter stat. `value` is the numeric part; prefix/suffix render around it. */
export default function Stat({
  value,
  suffix = '',
  prefix = '',
  label,
  decimals = 0,
}: {
  value: number
  suffix?: string
  prefix?: string
  label: string
  decimals?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current?.querySelector<HTMLElement>('.n .val')
      if (!el) return
      const obj = { v: 0 }
      gsap.to(obj, {
        v: value,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
        onUpdate: () => {
          el.textContent = obj.v.toFixed(decimals)
        },
      })
    },
    { scope: ref },
  )

  return (
    <div className="stat" ref={ref}>
      <div className="n">
        {prefix}
        <span className="val">0</span>
        {suffix}
      </div>
      <div className="l">{label}</div>
    </div>
  )
}
