import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import PriceCard from '../components/PriceCard'
import Magnetic from '../components/Magnetic'
import Marquee from '../components/Marquee'
import { FadeUp, Frame } from '../components/Reveal'
import { checkout, social } from '../data/site'

/* ————— data ————— */

const APPROACH = [
  { t: 'Glute Density', d: 'Targeted hypertrophy for visible shape.' },
  { t: 'Progressive Overload', d: 'Structured load progression across 6 weeks.' },
  { t: 'Performance Conditioning', d: 'Metabolic work built around output.' },
  { t: 'Aligned Nutrition', d: 'Fuel timing matched to training demand.' },
  { t: 'Measurable Results', d: 'Track progression every single week.' },
]

const OUTCOMES = [
  { g: '◆', t: 'Visible Glute Density', d: 'Targeted development you can see and feel.' },
  { g: '▲', t: 'Lower Body Strength', d: 'Measurable increases in key lifts.' },
  { g: '★', t: 'Improved Conditioning', d: 'Metabolic capacity built for performance.' },
  { g: '◾', t: 'Clear Training Structure', d: 'Every session planned and purposeful.' },
  { g: '◉', t: 'Strategic Fuel Timing', d: 'Nutrition that supports your output.' },
  { g: '✔', t: 'Measurable Progress', d: 'Weekly benchmarks to track your growth.' },
]

const TRAINING: { t: string; fullOnly?: boolean }[] = [
  { t: '6 weeks of structured programming' },
  { t: 'Gym & home training versions' },
  { t: 'Conditioning protocols' },
  { t: 'In-app progress tracking' },
]

const NUTRITION: { t: string; fullOnly?: boolean }[] = [
  { t: 'Custom macro targets or meal plan' },
  { t: 'Strategic fuel timing guide' },
  { t: 'Weekly coaching check-ins', fullOnly: true },
  { t: 'Program adjustments', fullOnly: true },
]

const WHO_FOR = [
  'Women ready to build shape — not just lose weight',
  'Gym or home lifters who want structured progression',
  'Anyone tired of random workouts with no clear direction',
  'Athletes seeking performance-based training with visible results',
]

/* ————— countdown ————— */

const MS_DAY = 86_400_000
const MS_HOUR = 3_600_000
const MS_MIN = 60_000

/** Next March 9 at local midnight — rolls to next year once this year's date passes. */
function nextMarchNine(): Date {
  const now = new Date()
  const target = new Date(now.getFullYear(), 2, 9, 0, 0, 0)
  if (target.getTime() <= now.getTime()) target.setFullYear(target.getFullYear() + 1)
  return target
}

function Countdown() {
  const [target] = useState(nextMarchNine)
  const [left, setLeft] = useState(() => Math.max(0, target.getTime() - Date.now()))

  useEffect(() => {
    const id = window.setInterval(() => {
      setLeft(Math.max(0, target.getTime() - Date.now()))
    }, 1000)
    return () => window.clearInterval(id)
  }, [target])

  const blocks = [
    { v: Math.floor(left / MS_DAY), l: 'Days' },
    { v: Math.floor((left % MS_DAY) / MS_HOUR), l: 'Hours' },
    { v: Math.floor((left % MS_HOUR) / MS_MIN), l: 'Minutes' },
    { v: Math.floor((left % MS_MIN) / 1000), l: 'Seconds' },
  ]

  return (
    <section className="section--line" style={{ padding: 'clamp(48px, 7vw, 96px) 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <FadeUp as="span" className="kicker" y={20}>
          Protocol starts March 9
        </FadeUp>
        <FadeUp delay={0.1}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(18px, 4.5vw, 64px)',
              flexWrap: 'wrap',
              margin: 'clamp(26px, 3.5vw, 44px) 0',
            }}
          >
            {blocks.map((b) => (
              <div
                key={b.l}
                style={{
                  minWidth: 'clamp(78px, 11vw, 150px)',
                  borderTop: '2px solid var(--pink)',
                  paddingTop: 'clamp(14px, 2vw, 24px)',
                }}
              >
                <div
                  className="display d-2"
                  style={{ fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}
                >
                  {String(b.v).padStart(2, '0')}
                </div>
                <span className="kicker" style={{ display: 'inline-block', marginTop: 12 }}>
                  {b.l}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <span className="chip chip--pink">
            <span className="dot" />
            Enrollment closes March 8
          </span>
        </FadeUp>
      </div>
    </section>
  )
}

/* ————— sections ————— */

function Approach() {
  return (
    <section className="section section--line" id="approach">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
          <SectionHead
            num="01"
            kicker="The Approach"
            title={
              <>
                This is not a generic <span className="serif-i">shred</span>.
              </>
            }
            lede={
              <>
                This protocol is built around one objective: <strong>visible glute development</strong>{' '}
                backed by real performance output. Every session is structured with progressive
                overload. Every macro is aligned with your training demand. No filler workouts, no
                cookie-cutter meal plans — just 6 weeks of precise execution.
              </>
            }
          />
          <Magnetic>
            <a className="btn btn--pink" href="#pricing">
              Start March 9 <span className="arr">→</span>
            </a>
          </Magnetic>
        </div>
        <div>
          {APPROACH.map((f, i) => (
            <FadeUp key={f.t} delay={i * 0.06}>
              <div
                style={{
                  borderTop: '1px solid var(--line)',
                  padding: 'clamp(22px, 2.8vw, 36px) 0',
                  display: 'flex',
                  gap: 'clamp(16px, 2vw, 30px)',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    color: 'var(--pink)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.22em',
                    flex: 'none',
                  }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="display d-3">{f.t}</h3>
                  <p style={{ color: 'var(--dim)', marginTop: 8 }}>{f.d}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Outcome() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="02"
          kicker="The Outcome"
          title={
            <>
              What you will <span className="serif-i">gain</span>.
            </>
          }
        />
        <div className="grid-3">
          {OUTCOMES.map((o, i) => (
            <FadeUp key={o.t} delay={(i % 3) * 0.1} className="card">
              <span
                aria-hidden
                style={{
                  color: 'var(--pink)',
                  fontSize: '1.4rem',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: 18,
                }}
              >
                {o.g}
              </span>
              <h3 className="display d-3" style={{ marginBottom: 10 }}>
                {o.t}
              </h3>
              <p style={{ color: 'var(--dim)', fontSize: '0.95rem' }}>{o.d}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProtocolList({ items }: { items: { t: string; fullOnly?: boolean }[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {items.map((item) => (
        <li
          key={item.t}
          style={{
            display: 'flex',
            gap: 14,
            alignItems: 'center',
            padding: '14px 0',
            borderTop: '1px solid var(--line)',
          }}
        >
          <span aria-hidden style={{ color: 'var(--pink)', fontSize: '0.6rem', flex: 'none' }}>
            ◆
          </span>
          <span style={{ color: 'var(--ink)' }}>{item.t}</span>
          {item.fullOnly && (
            <span className="chip chip--pink" style={{ marginLeft: 'auto', flex: 'none' }}>
              <span className="dot" />
              Full Only
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

function Inside() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="03"
          kicker="Inside the Protocol"
          title={
            <>
              Everything is <span className="serif-i">included</span>.
            </>
          }
        />
        <div className="grid-2" style={{ alignItems: 'start' }}>
          <FadeUp className="card">
            <span className="kicker" style={{ marginBottom: 18, display: 'inline-block' }}>
              Training
            </span>
            <ProtocolList items={TRAINING} />
          </FadeUp>
          <FadeUp className="card" delay={0.12}>
            <span className="kicker" style={{ marginBottom: 18, display: 'inline-block' }}>
              Nutrition & Support
            </span>
            <ProtocolList items={NUTRITION} />
          </FadeUp>
        </div>
        <FadeUp delay={0.15}>
          <div style={{ position: 'relative', marginTop: 'clamp(24px, 3vw, 40px)' }}>
            <Frame
              src="/img/transform-5.png"
              alt="Savage Fit client transformation — before and after"
              ratio="16 / 7"
              parallax={10}
            />
            <span
              className="chip"
              style={{
                position: 'absolute',
                left: 16,
                bottom: 16,
                background: 'rgba(11,11,13,0.65)',
                backdropFilter: 'blur(8px)',
                color: 'var(--ink)',
                border: '1px solid rgba(245,242,236,0.2)',
              }}
            >
              Real Savage results
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section section--line" id="pricing">
      <div className="container">
        <SectionHead
          num="04"
          kicker="Choose your path"
          title={
            <>
              Two options. One <span className="serif-i">protocol</span>.
            </>
          }
          lede="One-time payment. Six weeks of structured execution."
        />
        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          <PriceCard
            plan="Savage Lite"
            price="$110"
            per=" one-time · 6 weeks"
            href={checkout.springLite}
            cta="Join Lite — Self Guided"
            features={[
              '6-week structured program',
              'Custom macros or meal plan',
              'In-app access & tracking',
              'Gym & home versions',
              'Conditioning protocols',
            ]}
          />
          <PriceCard
            plan="Savage Full"
            price="$239"
            per=" one-time · 6 weeks"
            href={checkout.springFull}
            cta="Join Full — Coached"
            hot
            tag="10 Coaching Spots"
            delay={0.12}
            features={[
              'Everything in Lite',
              'Weekly coaching check-ins',
              'Program adjustments',
              'Direct support access',
            ]}
          />
        </div>
        <FadeUp delay={0.2}>
          <p style={{ textAlign: 'center', color: 'var(--faint)', marginTop: 28, fontSize: '0.85rem' }}>
            One-time payment. Enrollment closes March 8. Limited coaching spots.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

function WhoFor() {
  return (
    <section className="section section--line">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <div>
          <SectionHead
            num="05"
            kicker="Is this you"
            title={
              <>
                Who this is <span className="serif-i">for</span>.
              </>
            }
          />
          <div>
            {WHO_FOR.map((s, i) => (
              <FadeUp key={s} delay={i * 0.07}>
                <div
                  style={{
                    borderTop: '1px solid var(--line)',
                    padding: 'clamp(20px, 2.6vw, 34px) 0',
                    display: 'flex',
                    gap: 'clamp(14px, 1.8vw, 24px)',
                    alignItems: 'baseline',
                  }}
                >
                  <span aria-hidden style={{ color: 'var(--pink)', fontSize: '0.65rem', flex: 'none' }}>
                    ◆
                  </span>
                  <p className="display d-3">{s}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
          <Frame
            src="/img/transform-4.png"
            alt="Savage Fit client transformation — visible lower body change"
            ratio="4 / 3.4"
            parallax={12}
          />
        </div>
      </div>
    </section>
  )
}

function Members() {
  return (
    <section className="section section--line">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <Frame
          src="/img/xenia-portrait.png"
          alt="Xenia Busigin, IFBB Figure Pro — Savage Fit head coach"
          ratio="4 / 5"
          parallax={12}
        />
        <div>
          <SectionHead
            num="06"
            kicker="Current Members"
            size="d-2"
            title={
              <>
                Already a Savage Fit <span className="serif-i">member</span>?
              </>
            }
            lede={
              <>
                If you are an active Savage Fit app subscriber, you{' '}
                <strong>automatically receive the Spring Aesthetic training program</strong> inside
                your membership starting March 9. No additional purchase is required for the
                workouts.
              </>
            }
          />
          <FadeUp as="p" className="lede" delay={0.1}>
            Want more this phase? The upgrades below are available exclusively for active
            subscribers who want personalized nutrition or coached execution.
          </FadeUp>
          <FadeUp delay={0.18}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
              <Magnetic>
                <a className="btn btn--pink" href={social.upgradeNutrition}>
                  Add Custom Nutrition <span className="arr">→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a className="btn btn--ghost" href={social.upgradeCoached}>
                  Upgrade to Coached Execution
                </a>
              </Magnetic>
            </div>
          </FadeUp>
          <FadeUp as="p" delay={0.24}>
            <span style={{ display: 'block', color: 'var(--faint)', fontSize: '0.82rem', marginTop: 18, maxWidth: '52ch' }}>
              Active Savage Fit members only. Upgrade requests are verified against active
              subscription status before purchase access is granted. Non-member purchases will be
              refunded.
            </span>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="card" style={{ marginTop: 'clamp(28px, 3vw, 44px)' }}>
              <h3 className="display d-3" style={{ marginBottom: 10 }}>
                Not a member yet?
              </h3>
              <p style={{ color: 'var(--dim)', marginBottom: 20 }}>
                Join Savage Fit to receive automatic access to all challenge training phases, plus
                ongoing programming and community support.
              </p>
              <Magnetic>
                <Link className="btn btn--ghost" to="/subscription">
                  View Membership Options <span className="arr">→</span>
                </Link>
              </Magnetic>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function Disclaimer() {
  return (
    <section className="section--line" style={{ padding: 'clamp(28px, 4vw, 48px) 0' }}>
      <div className="container">
        <FadeUp as="p">
          <span style={{ display: 'block', color: 'var(--faint)', fontSize: '0.78rem', maxWidth: '78ch', lineHeight: 1.7 }}>
            Disclaimer: Coaching, nutrition, and supplement guidance are educational and not
            medical advice. Consult your physician before beginning any new training, nutrition, or
            supplement protocol, especially if pregnant, nursing, managing a medical condition, or
            taking medications.
          </span>
        </FadeUp>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="section section--line">
      <div className="container" style={{ textAlign: 'center' }}>
        <SectionHead
          kicker="Limited Enrollment"
          align="center"
          title={
            <>
              Enrollment closes <span className="serif-i">March 8</span>.
            </>
          }
          lede="Secure your place in the Spring Aesthetic protocol before the doors shut."
        />
        <FadeUp delay={0.15}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Magnetic>
              <a className="btn btn--pink" href={checkout.springFull} target="_blank" rel="noreferrer">
                Secure Your Spot <span className="arr">→</span>
              </a>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ————— page ————— */

export default function SpringAesthetic() {
  return (
    <>
      <title>Spring Aesthetic — The Glute Growth Protocol | Savage Fit</title>
      <PageHero
        chip="Si6 Challenge · 6-Week Protocol"
        title={
          <>
            Spring <span className="serif-i">Aesthetic</span>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '0.3em',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--pink)',
                marginTop: '0.7em',
              }}
            >
              The Glute Growth Protocol
            </span>
          </>
        }
        lede={
          <>
            Metabolic manipulation for visible glute density & spring conditioning.{' '}
            <strong>Train the fibers. Manipulate the fuel. Build the shape.</strong>
          </>
        }
      >
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 'clamp(24px, 3vw, 40px)' }}>
          <Magnetic>
            <a className="btn btn--pink" href="#pricing">
              Start March 9 <span className="arr">→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn--ghost" href="#approach">
              The Approach
            </a>
          </Magnetic>
        </div>
      </PageHero>
      <Countdown />
      <Marquee
        items={[
          'Glute Density',
          'Progressive Overload',
          'Performance Conditioning',
          'Aligned Nutrition',
          'Measurable Results',
        ]}
      />
      <Approach />
      <Outcome />
      <Inside />
      <Pricing />
      <WhoFor />
      <Members />
      <Disclaimer />
      <FinalCta />
    </>
  )
}
