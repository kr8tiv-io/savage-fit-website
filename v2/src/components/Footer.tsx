import { Link } from 'react-router-dom'
import { routes, social, checkout } from '../data/site'
import { SplitReveal, FadeUp } from './Reveal'
import Magnetic from './Magnetic'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__cta">
        <FadeUp as="span" className="kicker" y={20} >
          Your tribe is waiting
        </FadeUp>
        <SplitReveal className="display d-hero" as="h2">
          Go <span className="serif-i">Savage</span>
        </SplitReveal>
        <FadeUp delay={0.2}>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <Magnetic>
              <a className="btn btn--pink" href={checkout.subMonthly} target="_blank" rel="noreferrer">
                Start Training Today <span className="arr">→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--ghost" href={social.email}>
                Talk to Xenia
              </a>
            </Magnetic>
          </div>
        </FadeUp>
      </div>

      <div className="container footer__grid">
        <div className="footer__col" style={{ maxWidth: 320 }}>
          <Link to="/" className="nav__logo" style={{ marginBottom: 16 }}>
            <img src="/img/logo-white.png" alt="" />
            Savage<span style={{ color: 'var(--pink)' }}>Fit</span>
          </Link>
          <p style={{ fontSize: '0.9rem', color: 'var(--dim)' }}>
            Online coaching community led by IFBB Figure Pro Xenia Busigin. Training, nutrition,
            and a sisterhood that has your back.
          </p>
        </div>
        <div className="footer__col">
          <h4>Sitemap</h4>
          <ul>
            {routes.map((r) => (
              <li key={r.path}>
                <Link to={r.path}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href={social.instagram} target="_blank" rel="noreferrer">
                Instagram — @ifbb_pro_xenia
              </a>
            </li>
            <li>
              <a href={social.facebook} target="_blank" rel="noreferrer">
                Facebook Community
              </a>
            </li>
            <li>
              <a href={social.email}>Xeniaa@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer__col" style={{ maxWidth: 300 }}>
          <h4>Newsletter</h4>
          <p style={{ fontSize: '0.9rem' }}>
            Tips, advice, and challenge announcements. No spam — just Savage.
          </p>
          <a
            className="btn btn--ghost"
            style={{ marginTop: 16, padding: '13px 26px' }}
            href={social.email}
          >
            Subscribe <span className="arr">→</span>
          </a>
        </div>
      </div>

      <div className="container footer__legal">
        <span>© 2026 Savage Fit. All rights reserved.</span>
        <span>
          Coaching and nutrition guidance are educational and not medical advice. Consult your
          physician before beginning any new program.
        </span>
      </div>
    </footer>
  )
}
