import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SplitReveal, FadeUp } from './Reveal'

/** Shared interior-page hero: kicker chip, giant title, lede, optional CTAs. */
export default function PageHero({
  chip,
  title,
  lede,
  children,
}: {
  chip: string
  title: ReactNode
  lede?: ReactNode
  children?: ReactNode
}) {
  return (
    <section
      className="section"
      style={{
        paddingTop: 'calc(var(--nav-h) + clamp(70px, 10vw, 130px))',
        position: 'relative',
        overflow: 'clip',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(55% 45% at 82% 0%, var(--wash-pink), transparent 64%), radial-gradient(42% 36% at 6% 32%, var(--wash-lilac), transparent 62%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ position: 'relative' }}>
        <motion.span
          className="chip chip--pink"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="dot" />
          {chip}
        </motion.span>
        <SplitReveal as="h1" className="display d-hero" >
          {title}
        </SplitReveal>
        {lede && (
          <FadeUp as="p" className="lede" delay={0.25}>
            {lede}
          </FadeUp>
        )}
        {children && <FadeUp delay={0.35}>{children}</FadeUp>}
      </div>
    </section>
  )
}
