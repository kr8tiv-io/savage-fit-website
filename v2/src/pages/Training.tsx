import { Link } from 'react-router-dom'
import Magnetic from '../components/Magnetic'
import Marquee from '../components/Marquee'
import PageHero from '../components/PageHero'
import PriceCard from '../components/PriceCard'
import SectionHead from '../components/SectionHead'
import { SplitReveal, FadeUp, Frame } from '../components/Reveal'
import { checkout, social } from '../data/site'

/* ————— data ————— */

const COACH_FAILS = [
  'Generic program templates',
  'Slow response times — 48 to 72+ hours',
  'Limited customization options',
  'Minimal ongoing support',
]

const SAVAGE_WINS = [
  '100% custom programming from day one',
  'Rapid response support — within 24 hours',
  'Unlimited program modifications',
  'Proactive coaching and guidance',
]

const FEATURES = [
  {
    k: 'Every week',
    t: 'Weekly Personal Check-ins',
    points: [
      'Detailed review of your progress, measurements, and photos',
      'Program adjustments based on your results and feedback',
      'Goal reassessment and strategy refinement',
      'Motivation and accountability to keep you on track',
    ],
  },
  {
    k: 'Whenever you need it',
    t: 'On-Demand Support',
    points: [
      'Questions about your workout? Fast answers.',
      'Struggling with meal prep? Immediate guidance.',
      'Need program modifications? Changes made promptly.',
      'Facing challenges or plateaus? Expert solutions, quickly.',
    ],
  },
  {
    k: 'As your life changes',
    t: 'Program Evolution',
    points: [
      'Your program evolves with you — no stagnation, no generic progressions',
      'Regular assessments to keep results on track',
      'Modifications for injuries, travel, schedule changes, or equipment limits',
      'Seasonal adjustments and goal pivots as your life changes',
    ],
  },
]

const FIT_YES = [
  'You want completely personalized programming based on your unique physiology',
  'You need frequent guidance and support throughout your journey',
  'You have specific goals, limitations, or requirements that demand custom solutions',
  'You value direct access to expert coaching whenever you need it',
  'You are serious about exceptional results and willing to invest in premium coaching',
  'You want the accountability and motivation of regular 1-on-1 check-ins',
]

const FIT_NO = [
  'You prefer working independently without much guidance',
  'You thrive in group challenge environments',
  'You do not need frequent program adjustments or modifications',
]

const APP_POINTS = [
  'All your custom workouts delivered through our intuitive smartphone app',
  'HD video demonstrations for every exercise',
  'Real-time progress tracking and analytics',
  'Instant program updates when changes are needed',
  'Direct messaging with Xenia through the app',
]

const PROCESS = [
  {
    t: 'Initial Consultation',
    d: 'A real conversation about your goals and challenges — and an honest call on whether Savage 1-on-1 coaching is the right fit for you.',
  },
  {
    t: 'Comprehensive Assessment',
    d: 'Xenia digs into your training history, measurements, lifestyle, schedule, and equipment so nothing about your program is guesswork.',
  },
  {
    t: 'Custom Program Design',
    d: 'Your completely personalized training and nutrition protocols, built from your assessment — never pulled from a template.',
  },
  {
    t: 'Onboarding & App Setup',
    d: 'Your custom programs land in the app, your tracking is set up, and your direct line to your coach opens. Time to work.',
  },
]

/* ————— small helpers ————— */

function CheckList({
  items,
  mark = '✓',
  markColor = 'var(--pink)',
}: {
  items: string[]
  mark?: string
  markColor?: string
}) {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span
            aria-hidden
            style={{
              color: markColor,
              fontWeight: 700,
              lineHeight: 1.55,
              flex: 'none',
              fontSize: '0.9rem',
            }}
          >
            {mark}
          </span>
          <span style={{ color: 'var(--dim)', lineHeight: 1.55 }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ————— sections ————— */

function Hero() {
  return (
    <PageHero
      chip="1-on-1 Coaching"
      title={
        <>
          Coaching, <span className="serif-i">tailored</span>
          <br />
          to you.
        </>
      }
      lede={
        <>
          Premium personalized online training and nutrition with{' '}
          <strong>Xenia Busigin, IFBB Figure Pro</strong> — elite-level coaching for those who
          demand exceptional results and personalized attention.
        </>
      }
    >
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 'clamp(10px, 2vw, 20px)' }}>
        <Magnetic>
          <a className="btn btn--pink" href="#pricing">
            Start Your Journey <span className="arr">→</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a className="btn btn--ghost" href={social.email}>
            Book a Consult
          </a>
        </Magnetic>
      </div>
    </PageHero>
  )
}

function WhatIsIt() {
  return (
    <section className="section section--line">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <div>
          <SectionHead
            num="01"
            kicker="What is Savage Coaching"
            title={
              <>
                Our most <span className="serif-i">exclusive</span>
                <br />
                coaching experience.
              </>
            }
          />
          <FadeUp as="p" className="lede" delay={0.1}>
            Savage 1-on-1 coaching is a <strong>completely customized, high-touch</strong> approach
            to fitness and nutrition. Unlike our group challenges, every aspect of your program is
            tailored specifically to your body, your goals, and your lifestyle.
          </FadeUp>
          <FadeUp as="p" className="lede" delay={0.18}>
            This is not for everyone. We intentionally keep the client roster small so every woman
            gets the dedicated attention and support she deserves.
          </FadeUp>
          <div className="grid-2" style={{ marginTop: 'clamp(32px, 4vw, 48px)', gap: 'clamp(18px, 2vw, 28px)' }}>
            <FadeUp className="card" delay={0.1}>
              <span className="kicker" style={{ marginBottom: 12 }}>
                All Levels
              </span>
              <h3 className="display d-3" style={{ margin: '10px 0 10px' }}>
                Beginners to Competitors
              </h3>
              <p style={{ color: 'var(--dim)', fontSize: '0.95rem' }}>
                Xenia works with every level of fitness — from experienced competitors to pregnant
                women and seniors. Your program starts where you are.
              </p>
            </FadeUp>
            <FadeUp className="card" delay={0.2}>
              <span className="kicker" style={{ marginBottom: 12 }}>
                Pro Pedigree
              </span>
              <h3 className="display d-3" style={{ margin: '10px 0 10px' }}>
                IFBB Pro Experience
              </h3>
              <p style={{ color: 'var(--dim)', fontSize: '0.95rem' }}>
                As an IFBB Pro card winner, Xenia understands the demands of competition prep and
                what it takes to coach extreme athletes.
              </p>
            </FadeUp>
          </div>
        </div>
        <Frame
          src="/img/ifbb-procard.jpg"
          alt="Xenia Busigin backstage with a winner at an IFBB show"
          ratio="3 / 4"
          parallax={14}
        />
      </div>
    </section>
  )
}

function Difference() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="02"
          kicker="The difference"
          title={
            <>
              Beyond <span className="serif-i">standard</span>
              <br />
              online coaching.
            </>
          }
          lede="Most online coaching is a template with your name typed at the top. Savage Coaching is built from scratch — and rebuilt as often as your life demands."
        />
        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          <FadeUp delay={0.05}>
            <div className="card" style={{ height: '100%', opacity: 0.85 }}>
              <span className="kicker" style={{ marginBottom: 18, color: 'var(--faint)' }}>
                Most Online Coaches
              </span>
              <h3 className="display d-3" style={{ margin: '12px 0 22px', color: 'var(--dim)' }}>
                The template treatment
              </h3>
              <CheckList items={COACH_FAILS} mark="✕" markColor="var(--faint)" />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div
              className="card"
              style={{
                height: '100%',
                border: '1px solid rgba(255,31,112,0.5)',
                boxShadow: '0 24px 90px rgba(255,31,112,0.14)',
              }}
            >
              <span className="chip chip--pink" style={{ marginBottom: 18 }}>
                <span className="dot" />
                Savage Coaching
              </span>
              <h3 className="display d-3" style={{ margin: '16px 0 22px' }}>
                The <span className="gt">1-on-1 standard</span>
              </h3>
              <CheckList items={SAVAGE_WINS} />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function WhatYouGet() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="03"
          kicker="What you get"
          title={
            <>
              High-touch, <span className="serif-i">every</span>
              <br />
              single week.
            </>
          }
        />
        <div className="grid-3">
          {FEATURES.map((f, i) => (
            <FadeUp key={f.t} delay={i * 0.12} className="card">
              <span className="kicker" style={{ marginBottom: 14 }}>
                {f.k}
              </span>
              <h3 className="display d-3" style={{ margin: '12px 0 20px' }}>
                {f.t}
              </h3>
              <CheckList items={f.points} mark="✦" />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function FitCheck() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="04"
          kicker="Fit check"
          title={
            <>
              An <span className="serif-i">honest</span> fit check.
            </>
          }
          lede="Premium coaching only works when it matches how you actually train. Here is the truth, no BS."
        />
        <div className="grid-2" style={{ alignItems: 'start' }}>
          <FadeUp delay={0.05}>
            <h3
              className="display d-3"
              style={{ marginBottom: 22, color: 'var(--pink)' }}
            >
              Perfect for you if
            </h3>
            <CheckList items={FIT_YES} />
          </FadeUp>
          <FadeUp delay={0.15}>
            <h3 className="display d-3" style={{ marginBottom: 22, color: 'var(--dim)' }}>
              Might not be for you if
            </h3>
            <CheckList items={FIT_NO} mark="—" markColor="var(--faint)" />
            <p style={{ color: 'var(--faint)', marginTop: 28, fontSize: '0.9rem' }}>
              Group energy more your speed?{' '}
              <Link to="/challenges" style={{ color: 'var(--pink)' }}>
                Check out the Si6 Challenge →
              </Link>
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function AppExperience() {
  return (
    <section className="section section--line">
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        <Frame
          src="/img/stage-winners.jpg"
          alt="IFBB stage moment with trophies held overhead"
          ratio="1 / 1"
          parallax={12}
        />
        <div>
          <SectionHead
            num="05"
            kicker="The app experience"
            title={
              <>
                Your program,
                <br />
                in your <span className="serif-i">pocket</span>.
              </>
            }
            lede="Everything is delivered through our fitness app — so your coaching travels with you, from the gym floor to the grocery store."
          />
          <FadeUp delay={0.1}>
            <CheckList items={APP_POINTS} />
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section section--line" id="pricing">
      <div className="container">
        <SectionHead
          num="06"
          kicker="Pricing"
          title={
            <>
              Invest in the <span className="serif-i">version</span>
              <br />
              of you that wins.
            </>
          }
          lede={
            <>
              Every plan is the full 1-on-1 experience — custom training, custom nutrition, weekly
              check-ins, and direct access to Xenia. <strong>Longer commitments earn a lower
              effective monthly rate.</strong>
            </>
          }
        />
        <div className="grid-3">
          <PriceCard
            plan="Monthly"
            price="$250"
            per="/month"
            href={checkout.coachingMonthly}
            features={[
              '100% custom training and nutrition',
              'Weekly personal check-ins',
              'Direct messaging with Xenia',
              'Unlimited program modifications',
              'Month-to-month flexibility',
            ]}
          />
          <PriceCard
            plan="3-Month Commitment"
            price="$600"
            per="total · $200/mo"
            href={checkout.coachingQuarterly}
            hot
            tag="Most Popular"
            delay={0.12}
            features={[
              'Everything in Monthly',
              'Effective rate of $200 per month',
              'Save $150 vs paying monthly',
              'Enough runway to see real program evolution',
            ]}
          />
          <PriceCard
            plan="6-Month Transformation"
            price="$900"
            per="total · $150/mo"
            href={checkout.coachingBiannual}
            delay={0.24}
            features={[
              'Everything in Monthly',
              'Effective rate of $150 per month',
              'Save $600 vs paying monthly',
              'A full transformation timeline, goal pivots included',
            ]}
          />
        </div>
        <FadeUp delay={0.2}>
          <p style={{ textAlign: 'center', color: 'var(--faint)', marginTop: 28, fontSize: '0.85rem' }}>
            Prices in USD. Not sure which plan fits?{' '}
            <a href={social.email} style={{ color: 'var(--pink)' }}>
              Book a free consult →
            </a>
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section section--line">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
          <SectionHead
            num="07"
            kicker="Our process"
            title={
              <>
                From consult
                <br />
                to <span className="serif-i">custom</span>.
              </>
            }
            lede="Four steps between you and a program built around your body. No cookie-cutter, no recycled plans — just a clear path in."
          />
          <Magnetic>
            <a className="btn btn--pink" href={social.email}>
              Start Step One <span className="arr">→</span>
            </a>
          </Magnetic>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2vw, 22px)' }}>
          {PROCESS.map((s, i) => (
            <FadeUp key={s.t} delay={i * 0.08} className="card">
              <span className="kicker kicker--num">
                <span className="num">STEP 0{i + 1}</span>
              </span>
              <h3 className="display d-3" style={{ margin: '12px 0 8px' }}>
                {s.t}
              </h3>
              <p style={{ color: 'var(--dim)' }}>{s.d}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="section section--line">
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 'clamp(20px, 3vw, 32px)',
        }}
      >
        <FadeUp as="span" className="chip chip--pink" y={20}>
          <span className="dot" />
          Limited Client Roster
        </FadeUp>
        <SplitReveal className="display d-1" as="h2">
          Ready for truly
          <br />
          <span className="serif-i">personalized</span> coaching?
        </SplitReveal>
        <FadeUp as="p" className="lede" delay={0.15}>
          Book your <strong>complimentary consultation call</strong> to discuss your specific goals
          and challenges, learn how the Savage 1-on-1 process works, and find out if this premium
          coaching experience is right for you. Limited spots available — serious inquiries only.
        </FadeUp>
        <FadeUp delay={0.25}>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Magnetic>
              <a className="btn btn--pink" href={social.email}>
                Book Your Free Consult <span className="arr">→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--ghost" href="#pricing">
                See Plans
              </a>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ————— page ————— */

export default function Training() {
  return (
    <>
      <title>1-on-1 Custom Online Coaching — Savage Fit</title>
      <Hero />
      <WhatIsIt />
      <Difference />
      <WhatYouGet />
      <FitCheck />
      <AppExperience />
      <Pricing />
      <Process />
      <FinalCta />
      <Marquee
        items={[
          '100% Custom',
          'Weekly Check-ins',
          'Response Within 24 Hours',
          'IFBB Pro Coaching',
          'Limited Roster',
        ]}
        reverse
      />
    </>
  )
}
