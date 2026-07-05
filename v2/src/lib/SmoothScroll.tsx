import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'

let lenis: Lenis | null = null
export const getLenis = () => lenis

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  useEffect(() => {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    ;(window as unknown as { lenis: Lenis | null }).lenis = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time: number) => lenis?.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(raf)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  useEffect(() => {
    // new page: jump to top and refresh triggers once content is in
    lenis?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
    const t = setTimeout(() => ScrollTrigger.refresh(), 120)
    return () => clearTimeout(t)
  }, [pathname])

  return <>{children}</>
}
