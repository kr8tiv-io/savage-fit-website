import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Custom cursor: gradient dot + soft halo that blooms over links/buttons.
 * Hidden on touch devices via CSS.
 */
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const hx = useSpring(x, { stiffness: 260, damping: 24, mass: 0.5 })
  const hy = useSpring(y, { stiffness: 260, damping: 24, mass: 0.5 })
  const [hot, setHot] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const t = e.target as Element | null
      setHot(!!t?.closest?.('a, button, [role="button"], input, .acc__head'))
    }
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y])

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: hot ? 0.5 : 1 }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        className="cursor-halo"
        style={{ x: hx, y: hy, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: hot ? 1 : 0.35, opacity: hot ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  )
}
