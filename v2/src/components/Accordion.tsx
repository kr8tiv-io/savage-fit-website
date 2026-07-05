import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export type QA = { q: string; a: string }

export default function Accordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div className={`acc__item${isOpen ? ' open' : ''}`} key={i}>
            <button
              className="acc__head"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.q}
              <span className="acc__x">+</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="acc__body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
