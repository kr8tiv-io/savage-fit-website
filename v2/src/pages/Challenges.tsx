import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import PriceCard from '../components/PriceCard'
import Accordion, { type QA } from '../components/Accordion'
import Marquee from '../components/Marquee'
import Magnetic from '../components/Magnetic'
import Stat from '../components/Stat'
import { SplitReveal, FadeUp, Frame } from '../components/Reveal'
import { checkout } from '../data/site'

/* ————— data ————— */

const TRACKS = [
  {
    k: 'Build lean muscle',
    t: 'Savage Gains',
    d: 'Perfect for building lean muscle while keeping a tight, sculpted physique — and getting seriously stronger. Progressive strength training paired with strategic nutrition.',
  },
  {
    k: 'Maximum fat loss',
    t: 'Savage Shred',
    d: 'Designed for maximum fat loss while preserving and building muscle. High-intensity training meets precision nutrition for rapid body-composition change.',
  },
  {
    k: 'Fit for real life',
    t: 'Savage Lifestyle',
    d: 'Efficient workouts that get you in and out of the gym fast — without sacrificing results. Perfect for busy people who want to keep their physique without living in the gym.',
  },
]

const REASONS = [
  {
    t: 'Proven Results',
    d: 'Our community has achieved thousands of transformations — real women, real before-and-afters, real momentum.',
  },
  {
    t: 'Expert Guidance',
    d: 'Programs designed by IFBB Figure Pro Xenia Busigin and experienced coaches with proven records.',
  },
  {
    t: 'Flexible Options',
    d: 'Gym or home workouts, with intensity levels for every ability — you choose the version that fits your life.',
  },
  {
    t: 'Accountability',
    d: 'Friendly, motivating weekly check-ins keep you on track from day one to day forty-two. No one gets left behind.',
  },
]

const FAQ: QA[] = [
  {
    q: 'Can I participate if I live outside Canada/US?',
    a: 'Absolutely. We have participants from around the world, and we send prizes via PayPal internationally.',
  },
  {
    q: 'Do I need a gym membership?',
    a: 'No. We provide both gym and home workout options — you choose the version that works best for your situation.',
  },
  {
    q: 'What makes Savage in 6 different?',
    a: 'Our comprehensive approach combines personalized nutrition, progressive training, community support, and real accountability. Plus, our smartphone app makes tracking effortless with video demonstrations and real-time progress monitoring.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing typically ranges from $89.99 USD for Savage Lite to $189.99 USD for Savage Full. Early-bird discounts and group rates are often available.',
  },
]

/* ————— sections ————— */

function WhatIsSi6() {
  return (
    <section className="section section--line">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <div>
          <SectionHead
            num="01"
            kicker="What is Si6?"
            title={
              <>
                Six weeks of
                <br />
                <span className="serif-i">progress</span>.
              </>
            }
          />
          <FadeUp as="p" className="lede" delay={0.1}>
            Savage in 6 is our <strong>signature six-week transformation challenge</strong>,
            designed to help you build strength, burn fat, and create lasting habits. Whether
            you're looking to gain lean muscle, shred body fat, or keep a balanced lifestyle
            approach — there's a track tailored just for you.
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 44 }}>
              <Stat value={6} label="Weeks of Progress" />
              <Stat value={3} label="Training Tracks" />
              <Stat value={2} label="Ways to Train — Gym or Home" />
            </div>
          </FadeUp>
        </div>
        <Frame
          src="/img/transform-3.png"
          alt="Savage in 6 client transformation — before and after"
          ratio="4 / 3"
          parallax={14}
        />
      </div>
    </section>
  )
}

function Tracks() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="02"
          kicker="Three tracks"
          title={
            <>
              One challenge.
              <br />
              Three ways to <span className="serif-i">win</span>.
            </>
          }
          lede="Every body, every goal, every schedule. Pick the track that matches your mission — the whole group trains together either way."
        />
        <div className="grid-3">
          {TRACKS.map((t, i) => (
            <FadeUp key={t.t} delay={i * 0.12} className="card">
              <span
                aria-hidden
                style={{ color: 'var(--pink)', fontSize: '1.3rem', lineHeight: 1, display: 'block' }}
              >
                ◆
              </span>
              <span className="kicker" style={{ display: 'block', margin: '18px 0 6px' }}>
                {t.k}
              </span>
              <h3 className="display d-3" style={{ margin: '4px 0 12px' }}>
                {t.t}
              </h3>
              <p style={{ color: 'var(--dim)', fontSize: '0.95rem' }}>{t.d}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Included() {
  return (
    <section className="section section--line" id="included">
      <div className="container">
        <SectionHead
          num="03"
          kicker="What's included"
          title={
            <>
              Pick your level of <span className="serif-i">savage</span>.
            </>
          }
          lede={
            <>
              Both options run the full six weeks through our smartphone app. Go{' '}
              <strong>Lite</strong> for the complete self-guided experience, or go{' '}
              <strong>Full</strong> for weekly check-ins with Xenia and a shot at cash prizes.
            </>
          }
        />
        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          <PriceCard
            plan="Savage Lite"
            price="$89.99"
            per="USD · 6 weeks"
            href={checkout.si6Lite}
            cta="Start with Lite"
            features={[
              '6 weeks of customized workouts through our smartphone app',
              'Video demonstrations for every exercise',
              'Personalized meal plan and macro guidelines',
              'Access to our private Facebook support community',
              'New workout programs every 2 weeks',
              'Both gym and home workout options',
            ]}
          />
          <PriceCard
            plan="Savage Full"
            price="$189.99"
            per="USD · 6 weeks"
            href={checkout.si6Full}
            cta="Go Full Savage"
            hot
            tag="Full Experience"
            delay={0.12}
            features={[
              'Everything in Savage Lite, PLUS:',
              'Weekly personal check-ins with Xenia',
              'Real-time meal plan and macro adjustments',
              'Priority support and accountability',
              'Eligible for cash prizes and transformation contests',
              'Advanced progress tracking and measurements',
            ]}
          />
        </div>
        <FadeUp delay={0.2}>
          <p style={{ textAlign: 'center', color: 'var(--faint)', marginTop: 28, fontSize: '0.85rem' }}>
            Prices in USD. Early-bird discounts and group rates are often available.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

function WhyJoin() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="04"
          kicker="Why join"
          title={
            <>
              Why Savage in 6 <span className="serif-i">works</span>.
            </>
          }
        />
        <div className="grid-2" style={{ alignItems: 'start' }}>
          <Frame
            src="/img/stage-winners.jpg"
            alt="Savage Fit athletes on the IFBB stage with trophies overhead"
            ratio="4 / 4.2"
            parallax={12}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2vw, 22px)' }}>
            {REASONS.map((r, i) => (
              <FadeUp key={r.t} delay={i * 0.08} className="card">
                <span className="kicker kicker--num">
                  <span className="num">0{i + 1}</span>
                </span>
                <h3 className="display d-3" style={{ margin: '12px 0 8px' }}>
                  {r.t}
                </h3>
                <p style={{ color: 'var(--dim)' }}>{r.d}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section section--line">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
          <SectionHead
            num="05"
            kicker="FAQ"
            title={
              <>
                Before you
                <br />
                <span className="serif-i">commit</span>.
              </>
            }
            lede="Straight answers about the challenge — where you can join from, what you need, and what it costs."
          />
        </div>
        <Accordion items={FAQ} />
      </div>
    </section>
  )
}

function NextChallenge() {
  return (
    <section className="section section--line" style={{ overflow: 'clip' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <FadeUp>
          <span className="chip chip--pink" style={{ marginBottom: 'clamp(16px, 2.5vw, 28px)' }}>
            <span className="dot" />
            Next up · Spring Aesthetic
          </span>
        </FadeUp>
        <SplitReveal as="h2" className="display d-1">
          The next <span className="serif-i">Savage in 6</span>
          <br />
          is coming.
        </SplitReveal>
        <FadeUp delay={0.15}>
          <p className="lede" style={{ marginInline: 'auto', marginTop: 18 }}>
            The <strong>Spring Aesthetic edition</strong> takes everything you just read — three
            tracks, weekly check-ins, cash prizes — and points it at the season ahead. Your
            highest self is six weeks out.
          </p>
        </FadeUp>
        <FadeUp delay={0.25}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 'clamp(24px, 3vw, 40px)' }}>
            <Magnetic>
              <Link className="btn btn--pink" to="/spring-aesthetic">
                Explore Spring Aesthetic <span className="arr">→</span>
              </Link>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
      <div className="container grid-2" style={{ marginTop: 'clamp(40px, 6vw, 72px)' }}>
        <Frame
          src="/img/transform-5.png"
          alt="Savage in 6 transformation — before and after"
          ratio="4 / 3"
          parallax={12}
        />
        <Frame
          src="/img/transform-6.png"
          alt="Savage in 6 transformation — before and after"
          ratio="4 / 3"
          parallax={16}
        />
      </div>
    </section>
  )
}

/* ————— page ————— */

export default function Challenges() {
  return (
    <>
      <title>Savage in 6 Challenge — 6-Week Group Transformation | Savage Fit</title>
      <PageHero
        chip="Group Challenge · 6 Weeks"
        title={
          <>
            Six weeks to your
            <br />
            <span className="serif-i">highest</span> self.
          </>
        }
        lede={
          <>
            Get ready to transform your body and mindset in just six weeks. Savage in 6 is our{' '}
            <strong>signature transformation challenge</strong> — build strength, burn fat, and
            create habits that actually last.
          </>
        }
      >
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 'clamp(24px, 3vw, 40px)' }}>
          <Magnetic>
            <Link className="btn btn--pink" to="/spring-aesthetic">
              Current Challenge: Spring Aesthetic <span className="arr">→</span>
            </Link>
          </Magnetic>
          <Magnetic>
            <a className="btn btn--ghost" href="#included">
              What's Included
            </a>
          </Magnetic>
        </div>
      </PageHero>

      <WhatIsSi6 />
      <Tracks />
      <Marquee
        items={['Savage Gains', 'Savage Shred', 'Savage Lifestyle', 'Six Weeks', 'Cash Prizes']}
      />
      <Included />
      <WhyJoin />
      <Faq />
      <NextChallenge />
    </>
  )
}
