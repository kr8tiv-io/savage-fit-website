import { Link } from 'react-router-dom'
import Magnetic from '../components/Magnetic'

export default function NotFound() {
  return (
    <>
      <title>Page Not Found — Savage Fit</title>
      <section
        className="section"
        style={{
          minHeight: '80svh',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 'var(--nav-h)',
        }}
      >
        <div className="container">
          <p className="display d-hero hollow-text">404</p>
          <h1 className="display d-2" style={{ margin: '18px 0 14px' }}>
            This page skipped <span className="serif-i">leg day</span>.
          </h1>
          <p className="lede" style={{ marginInline: 'auto', marginBottom: 32 }}>
            The page you're looking for doesn't exist — but your comeback does.
          </p>
          <Magnetic>
            <Link className="btn btn--pink" to="/">
              Back to Home <span className="arr">→</span>
            </Link>
          </Magnetic>
        </div>
      </section>
    </>
  )
}
