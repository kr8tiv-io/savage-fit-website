import { Link } from 'react-router-dom'
import { routes, social, checkout, mailchimp } from '../data/site'
import { SplitReveal, FadeUp } from './Reveal'
import Magnetic from './Magnetic'

export default function Footer() {
  return (
    <footer className="footer">
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(50% 40% at 50% 0%, rgba(238,178,210,0.35), transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container footer__cta" style={{ position: 'relative' }}>
        <FadeUp as="span" className="kicker" y={20}>
          Your transformation begins here
        </FadeUp>
        <SplitReveal className="display d-hero" as="h2">
          Begin, <span className="serif-i">beautifully</span>
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

      <div className="container footer__grid" style={{ position: 'relative' }}>
        <div className="footer__col" style={{ maxWidth: 340 }}>
          <Link to="/" className="nav__logo" style={{ marginBottom: 16 }}>
            <span className="word">Body</span>
            <span className="sig">by Xenia</span>
          </Link>
          <p style={{ fontSize: '0.9rem', color: 'var(--dim)' }}>
            Elite online coaching by IFBB Figure Pro Xenia Busigin. Personalized training,
            nutrition, and a community of women building their strongest selves.
          </p>
        </div>
        <div className="footer__col">
          <h4>Explore</h4>
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
        <div className="footer__col" style={{ maxWidth: 380 }}>
          <h4>Newsletter</h4>
          <p style={{ fontSize: '0.9rem' }}>
            Training tips, nutrition advice, and challenge announcements — straight from Xenia.
          </p>
          <form
            className="mc-form"
            action={mailchimp.action}
            method="post"
            target="_blank"
            rel="noreferrer"
          >
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="Your email address"
              aria-label="Email address"
            />
            <div aria-hidden="true" style={{ position: 'absolute', left: -5000 }}>
              <input type="text" name={mailchimp.honeypot} tabIndex={-1} defaultValue="" />
            </div>
            <button className="btn" type="submit" style={{ padding: '14px 24px' }}>
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="container footer__legal" style={{ position: 'relative' }}>
        <span>© 2026 Body by Xenia · Savage Fit. All rights reserved.</span>
        <span>
          Coaching and nutrition guidance are educational and not medical advice. Consult your
          physician before beginning any new program.
        </span>
      </div>
    </footer>
  )
}
