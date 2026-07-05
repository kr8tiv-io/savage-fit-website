import { type ReactNode } from 'react'
import { SplitReveal, FadeUp } from './Reveal'

/** Standard section header: numbered kicker + display headline + optional lede. */
export default function SectionHead({
  num,
  kicker,
  title,
  lede,
  align = 'left',
  size = 'd-1',
}: {
  num?: string
  kicker: string
  title: ReactNode
  lede?: ReactNode
  align?: 'left' | 'center'
  size?: 'd-1' | 'd-2'
}) {
  const center = align === 'center'
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(18px, 2.4vw, 30px)',
        alignItems: center ? 'center' : 'flex-start',
        textAlign: center ? 'center' : 'left',
        marginBottom: 'clamp(40px, 6vw, 80px)',
      }}
    >
      <FadeUp as="span" className={`kicker${num ? ' kicker--num' : ''}`} y={20}>
        {num && <span className="num">{num}</span>}
        {kicker}
      </FadeUp>
      <SplitReveal className={`display ${size}`}>{title}</SplitReveal>
      {lede && (
        <FadeUp as="p" className="lede" delay={0.15}>
          {lede}
        </FadeUp>
      )}
    </div>
  )
}
