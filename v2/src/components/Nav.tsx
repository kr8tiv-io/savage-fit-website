import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { routes, social, checkout } from '../data/site'
import { getLenis } from '../lib/SmoothScroll'
import Magnetic from './Magnetic'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = 0
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > 400 && y > last)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const lenis = getLenis()
    if (open) lenis?.stop()
    else lenis?.start()
    return () => {
      lenis?.start()
    }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}${hidden && !open ? ' hidden' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
            <img src="/img/logo-white.png" alt="Savage Fit" />
            Savage<span style={{ color: 'var(--pink)' }}>Fit</span>
          </Link>
          <div className="nav__right">
            <Magnetic>
              <a className="btn btn--pink nav__cta" href={checkout.subMonthly} target="_blank" rel="noreferrer">
                Join Now
              </a>
            </Magnetic>
            <Magnetic>
              <button
                className={`burger${open ? ' open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                <span />
                <span />
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      {/* Always mounted; animated by state — immune to stuck exit animations. */}
      <motion.nav
        className="menu"
        initial={false}
        animate={{ clipPath: open ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)' }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
        aria-hidden={!open}
      >
        <div className="menu__inner">
          <ul className="menu__links">
            {routes.map((r, i) => (
              <motion.li
                key={r.path}
                animate={open ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                transition={{
                  delay: open ? 0.16 + i * 0.055 : 0,
                  duration: open ? 0.6 : 0.25,
                  ease: EASE,
                }}
              >
                <NavLink to={r.path} className="menu__link" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  <span className="idx">0{i + 1}</span>
                  {r.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className="menu__foot"
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ delay: open ? 0.45 : 0, duration: 0.4 }}
        >
          <span>Xenia Busigin · IFBB Figure Pro</span>
          <div style={{ display: 'flex', gap: 28 }}>
            <a href={social.instagram} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
              Instagram
            </a>
            <a href={social.facebook} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
              Facebook
            </a>
            <a href={social.email} tabIndex={open ? 0 : -1}>
              Email
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}
