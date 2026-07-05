import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/** First-load preloader: "Body by Xenia" lockup + counter, then lifts away. */
export default function Preloader() {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    // time-based so jank on cold load can't stall the counter
    const start = performance.now()
    const DURATION = 1100
    let raf = 0
    let doneTimer: ReturnType<typeof setTimeout> | undefined
    const tick = (now: number) => {
      const p = Math.min(100, Math.round(((now - start) / DURATION) * 100))
      setPct(p)
      if (p < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        doneTimer = setTimeout(() => setDone(true), 300)
      }
    }
    raf = requestAnimationFrame(tick)
    // hard failsafe: never trap the user behind the loader
    const failsafe = setTimeout(() => setGone(true), 3200)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(failsafe)
      if (doneTimer) clearTimeout(doneTimer)
    }
  }, [])

  if (gone) return null

  return (
    <motion.div
      className="preloader"
      initial={false}
      animate={done ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => done && setGone(true)}
    >
      <div className="word">
        <span className="w-serif">Body</span>
        <span className="w-script">by Xenia</span>
      </div>
      <div className="pct">{pct}%</div>
    </motion.div>
  )
}
