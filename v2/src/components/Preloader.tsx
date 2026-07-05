import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LETTERS = 'SAVAGE'.split('')

/** First-visit preloader: counter + letter reveal, then lifts away. */
export default function Preloader({ onDone }: { onDone?: () => void }) {
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let v = 0
    const id = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 9) + 3)
      setPct(v)
      if (v >= 100) {
        clearInterval(id)
        setTimeout(() => {
          setGone(true)
          onDone?.()
        }, 450)
      }
    }, 55)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="word">
            {LETTERS.map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <div className="pct">{pct}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
