import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/** Custom cursor: pink dot + trailing ring. Hidden on touch devices via CSS. */
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 120, damping: 16, mass: 0.4 })
  const ry = useSpring(y, { stiffness: 120, damping: 16, mass: 0.4 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
