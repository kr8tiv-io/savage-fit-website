import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import PriceCard from '../components/PriceCard'
import Marquee from '../components/Marquee'
import Magnetic from '../components/Magnetic'
import { SplitReveal, FadeUp, Frame } from '../components/Reveal'
import { checkout, social } from '../data/site'

/* ————— data ————— */

type Track = {
  tag: string
  title: string
  tagline: string
  desc: string
  warn?: string
  meta: { k: string; v: string }[]
}

const TRACKS: Track[] = [
  {
    tag: 'Build Muscle',
    title: 'Savage Lean Gains',
    tagline: 'Hypertrophy focused. Muscle building. Results guaranteed.',
    desc: 'Lean Gains is a hypertrophy-focused program using proven training methods with varied rep ranges and supersets. Expect to tear up every muscle fiber by reaching muscle failure in most workouts. Cardio is minimal but intense.',
    meta: [
      { k: 'Perfect for', v: 'Mass building, muscle gains, or fat burning with reduced calories' },
      { k: 'Training style', v: 'Intense hypertrophy focus with optional cardio' },
      { k: 'Access', v: 'Main program (gym or home) plus the opposite version in a sub-category' },
    ],
  },
  {
    tag: 'Competition Lean',
    title: 'Savage Shred',
    tagline: 'Competition-prep style. Intense fat loss. Transform your physique.',
    desc: 'Savage Shred is designed to get your physique LEAN. This intense program features workouts ranging from 1–2 hours, 6 days a week. Fasted cardio and training later in the day are encouraged.',
    warn: 'Intense — not recommended for more than 3 months at a time',
    meta: [
      { k: 'Perfect for', v: 'Fat loss, competition prep, serious body transformation' },
      { k: 'Training style', v: '1–2 hour sessions, 6 days a week, fasted cardio encouraged' },
      { k: 'Access', v: 'Main program (gym or home) plus the opposite version in a sub-category' },
      { k: 'Home gym', v: 'Same requirements as Lean Gains — pick your level below' },
    ],
  },
  {
    tag: 'Balanced',
    title: 'Savage Lifestyle',
    tagline: '45–60 minutes. 5 days a week. Life–fitness balance perfected.',
    desc: 'Savage Lifestyle gets you in and out of the gym within 45–60 minutes, 5 days a week. It is intense yet sustainable, letting you balance life and fitness without sacrificing results — and programs rotate every 2 weeks so training never gets stale.',
    meta: [
      { k: 'Perfect for', v: 'Busy schedules and sustainable long-term training' },
      { k: 'Proven results', v: 'Several transformation challenge winners trained on Lifestyle' },
      { k: 'Available in', v: 'Both gym and home versions' },
    ],
  },
  {
    tag: 'Foundations',
    title: 'Basic Bitch Gone Savage',
    tagline: 'Master the basics. Build the habit. Earn the savage.',
    desc: "Every savage started somewhere. This foundations track is built for women starting out — nailing the fundamental lifts, locking in proper form, and building the consistency every transformation stands on. Master the basics until they're automatic, then walk into any other Savage track with total confidence.",
    meta: [
      { k: 'Perfect for', v: 'Beginners, comeback queens, and anyone rebuilding from the ground up' },
      { k: 'Training style', v: 'Form-first foundational strength with steady progression' },
      { k: 'Access', v: 'Gym and home versions included' },
    ],
  },
  {
    tag: 'Curves & Strength',
    title: 'Booty Gains',
    tagline: 'Glutes 3x a week. Off-season building. Rounder, stronger, curvier.',
    desc: 'Our "off-season" booty-building program — a fully rounded training plan with emphasis on growing legs and glutes. Designed for Bikini and Wellness competitors, but perfect for anyone chasing a rounder, stronger, curvier booty.',
    meta: [
      { k: 'Focus', v: 'Glute-focused training 3x per week' },
      { k: 'Training rotation', v: 'Every 4 weeks' },
      { k: 'Available in', v: 'Both gym and home versions' },
    ],
  },
]

const BONUSES = [
  {
    tag: '8 weeks',
    t: 'Home HIIT',
    d: 'High-intensity interval training designed specifically for home workouts.',
  },
  {
    tag: 'Short-term',
    t: 'Booty Building',
    d: 'A specialized short-term glute-focus program to sharpen your curves.',
  },
  {
    tag: 'Anywhere',
    t: 'Hotel & Travel',
    d: 'Workouts built for small spaces and minimal equipment — zero excuses on the road.',
  },
  {
    tag: 'Free access',
    t: 'Savage in 6 Challenges',
    d: 'Free access to our transformation challenge programs — join any time.',
  },
]

const GYM_LEVELS = [
  {
    level: 'Basic',
    items: [
      '3 increments of resistance bands with handles',
      'Loop bands',
      '3 increments of dumbbells',
      'Door pull-up bar',
      'Stability ball',
      'Chair or bench',
      'Jump rope',
    ],
  },
  {
    level: 'Ideal',
    items: [
      '5+ increments of dumbbells (or adjustable set)',
      'Medicine ball',
      'TRX or suspension trainer',
      'Various resistance bands and loop bands',
      'Adjustable bench',
      'Treadmill or spin bike',
    ],
  },
  {
    level: 'Extra',
    items: [
      'Barbell and plates',
      'Medicine ball',
      'TRX suspension trainer',
      'Adjustable bench',
      'Parallel bars',
      'Battle ropes',
    ],
  },
  {
    level: 'Deluxe',
    items: [
      'Cable machine with attachments',
      'Squat rack with barbell and plates',
      'Battle ropes',
      'Parallel bars',
      'Everything from previous levels',
    ],
  },
]

const APP_FEATURES = [
  'Video demonstrations of every exercise',
  'Easy-to-follow exercise plans',
  'Complete workouts in real time',
  'MyFitnessPal integration',
  'Track food and stats in one app',
  'Highly customizable tracking',
  'Measurements, body fat, and statistics',
  'Stunning visuals and data comparison',
  'Tracking tools for self-monitoring',
]

const COMMUNITY_PERKS = [
  'Daily support and motivation',
  'Ask questions and get expert answers',
  'Share progress and inspire others',
  'Direct access to coaching support',
  'Exclusive member benefits',
]

/* ————— sections ————— */

function Tracks() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="01"
          kicker="Five training tracks"
          title={
            <>
              Choose your path.
              <br />
              Switch <span className="serif-i">whenever</span> you want.
            </>
          }
          lede={
            <>
              Every track below is included in your subscription — <strong>all of them, all the
              time</strong>. Pick the style that matches your goal today, and swap the moment your
              goal changes.
            </>
          }
        />
        <div>
          {TRACKS.map((t, i) => (
            <FadeUp key={t.title} delay={0.05}>
              <div
                className="grid-2"
                style={{
                  borderTop: '1px solid var(--line)',
                  padding: 'clamp(32px, 4.5vw, 60px) 0',
                  alignItems: 'start',
                }}
              >
                <div>
                  <span className="kicker kicker--num">
                    <span className="num">0{i + 1}</span>
                    {t.tag}
                  </span>
                  <h3 className="display d-2" style={{ margin: '14px 0 12px' }}>
                    {t.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--pink)',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t.tagline}
                  </p>
                  {t.warn && (
                    <span className="chip chip--pink" style={{ marginTop: 18 }}>
                      <span className="dot" />
                      {t.warn}
                    </span>
                  )}
                </div>
                <div>
                  <p className="lede">{t.desc}</p>
                  <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {t.meta.map((m) => (
                      <div
                        key={m.k}
                        style={{
                          display: 'flex',
                          gap: 16,
                          alignItems: 'baseline',
                          borderTop: '1px solid var(--line)',
                          paddingTop: 12,
                          flexWrap: 'wrap',
                        }}
                      >
                        <span
                          style={{
                            color: 'var(--pink)',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            flex: '0 0 140px',
                          }}
                        >
                          {m.k}
                        </span>
                        <span style={{ color: 'var(--dim)', fontSize: '0.95rem', flex: 1, minWidth: '20ch' }}>
                          {m.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Bonuses() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="02"
          kicker="Bonus programs"
          title={
            <>
              Included <span className="serif-i">free</span> with every plan.
            </>
          }
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(14px, 1.6vw, 24px)',
          }}
        >
          {BONUSES.map((b, i) => (
            <FadeUp key={b.t} delay={i * 0.1} className="card">
              <span className="kicker" style={{ marginBottom: 12 }}>
                {b.tag}
              </span>
              <h3 className="display d-3" style={{ margin: '10px 0 10px' }}>
                {b.t}
              </h3>
              <p style={{ color: 'var(--dim)', fontSize: '0.93rem' }}>{b.d}</p>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.2}>
          <p style={{ textAlign: 'center', color: 'var(--faint)', marginTop: 28, fontSize: '0.85rem' }}>
            More programs and options are being added soon.
          </p>
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
          num="03"
          kicker="All Access VIP"
          title={
            <>
              Get everything.
              <br />
              Pay <span className="serif-i">less</span>.
            </>
          }
          lede={
            <>
              One membership unlocks <strong>every Savage training program</strong> plus bonuses
              and community access. Live the Savage lifestyle — for less than a drop-in class.
            </>
          }
        />
        <div className="grid-3">
          <PriceCard
            plan="Pay Monthly"
            was="$44"
            price="$23"
            per="/month"
            href={checkout.subMonthly}
            features={[
              'All 5 training tracks + bonus programs',
              'Gym and home versions of every program',
              'Switch programs whenever you want',
              'Savage Society community access',
            ]}
          />
          <PriceCard
            plan="Pay Quarterly"
            was="$111"
            price="$39"
            per="/3 months"
            href={checkout.subQuarterly}
            hot
            tag="Best Seller"
            delay={0.12}
            features={[
              'Everything in monthly',
              'MyFitnessPal integration',
              'Free Savage in 6 challenge workouts',
              '30% off challenge meal plans',
            ]}
          />
          <PriceCard
            plan="Pay Yearly"
            was="$369"
            price="$55"
            per="/year"
            href={checkout.subYearly}
            delay={0.24}
            features={[
              'Everything in quarterly',
              'Lowest cost per month',
              'Priority program requests',
              'Best value for committed savages',
            ]}
          />
        </div>
        <FadeUp delay={0.2}>
          <p style={{ textAlign: 'center', color: 'var(--faint)', marginTop: 28, fontSize: '0.85rem' }}>
            Prices in USD. Cancel anytime — switch programs any time by messaging Xenia.
          </p>
        </FadeUp>

        {/* meal plan add-on */}
        <FadeUp delay={0.1}>
          <div
            className="card"
            style={{
              marginTop: 'clamp(40px, 5vw, 72px)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'clamp(20px, 3vw, 40px)',
            }}
          >
            <div style={{ flex: '1 1 380px' }}>
              <span className="kicker" style={{ marginBottom: 12 }}>
                Add-on
              </span>
              <h3 className="display d-2" style={{ margin: '10px 0 12px' }}>
                Need a custom <span className="serif-i">meal</span> plan?
              </h3>
              <p style={{ color: 'var(--dim)', maxWidth: '52ch' }}>
                Order a meal plan catered to your needs and requirements — built to complement
                your training package and get you to your goal faster.
              </p>
            </div>
            <Magnetic>
              <a className="btn btn--pink" href={checkout.mealPlan} target="_blank" rel="noreferrer">
                Order Your Meal Plan <span className="arr">→</span>
              </a>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function HomeGym() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="04"
          kicker="Home gym requirements"
          title={
            <>
              A program for <span className="serif-i">every</span> setup.
            </>
          }
          lede={
            <>
              Training at home? Pick the level that matches your equipment —{' '}
              <strong>Lean Gains and Shred share the same home requirements</strong>, so choose
              based on your current setup.
            </>
          }
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(14px, 1.6vw, 24px)',
            alignItems: 'stretch',
          }}
        >
          {GYM_LEVELS.map((g, i) => (
            <FadeUp key={g.level} delay={i * 0.1} className="card">
              <span className="kicker kicker--num">
                <span className="num">LV {i + 1}</span>
              </span>
              <h3 className="display d-3" style={{ margin: '12px 0 16px' }}>
                {g.level}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {g.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      color: 'var(--dim)',
                      fontSize: '0.92rem',
                      display: 'flex',
                      gap: 10,
                      alignItems: 'baseline',
                    }}
                  >
                    <span aria-hidden style={{ color: 'var(--pink)', fontSize: '0.6rem' }}>
                      ◆
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function AppFeatures() {
  return (
    <section className="section section--line">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
          <SectionHead
            num="05"
            kicker="Training app"
            title={
              <>
                Everything you need
                <br />
                in <span className="serif-i">one</span> place.
              </>
            }
            lede="Your programs live in our training app — follow along in real time, watch video demos, and track every stat that matters."
          />
          <Magnetic>
            <a className="btn btn--pink" href="#pricing">
              Get the Programs <span className="arr">→</span>
            </a>
          </Magnetic>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.4vw, 16px)' }}>
          {APP_FEATURES.map((f, i) => (
            <FadeUp key={f} delay={i * 0.05}>
              <div
                style={{
                  display: 'flex',
                  gap: 18,
                  alignItems: 'baseline',
                  borderBottom: '1px solid var(--line)',
                  padding: '14px 4px',
                }}
              >
                <span
                  style={{
                    color: 'var(--pink)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    flex: 'none',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ color: 'var(--ink)', fontSize: '1.02rem' }}>{f}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Community() {
  return (
    <section className="section section--line">
      <div className="container grid-2">
        <Frame src="/img/xenia-face.png" alt="Xenia Busigin — your coach inside the Savage Society" ratio="4 / 5" parallax={12} />
        <div>
          <SectionHead
            num="06"
            kicker="Our family"
            title={
              <>
                Welcome to your <span className="serif-i">tribe</span>.
              </>
            }
            lede={
              <>
                Savage Society is an online community of fitness-minded women running the Savage
                training programs. We're a <strong>tightly knit family</strong>, constantly
                expanding — so you won't be the new person for long.
              </>
            }
          />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 34 }}>
            {COMMUNITY_PERKS.map((p, i) => (
              <FadeUp as="li" key={p} delay={i * 0.06}>
                <span style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                  <span aria-hidden style={{ color: 'var(--pink)', fontSize: '0.6rem' }}>
                    ◆
                  </span>
                  <span style={{ color: 'var(--ink)' }}>{p}</span>
                </span>
              </FadeUp>
            ))}
          </ul>
          <FadeUp delay={0.15}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Magnetic>
                <a className="btn btn--ghost" href={social.facebook} target="_blank" rel="noreferrer">
                  Meet the Society <span className="arr">→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a className="btn btn--ghost" href={social.instagram} target="_blank" rel="noreferrer">
                  Follow Xenia
                </a>
              </Magnetic>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function EndCta() {
  return (
    <section className="section section--line">
      <div
        className="container"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        <FadeUp as="span" className="kicker" y={20}>
          All Access VIP
        </FadeUp>
        <SplitReveal className="display d-1" as="h2">
          One subscription.
          <br />
          <span className="serif-i">Every</span> program.
        </SplitReveal>
        <FadeUp as="p" className="lede" delay={0.15}>
          Pick your plan, download the app, and start training today. Workouts that never go
          stale, a sisterhood that never lets you quit.
        </FadeUp>
        <FadeUp delay={0.25}>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 'clamp(24px, 3vw, 40px)' }}>
            <Magnetic>
              <a className="btn btn--pink" href="#pricing">
                Choose Your Plan <span className="arr">→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <Link className="btn btn--ghost" to="/training">
                Prefer 1-on-1 Coaching?
              </Link>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ————— page ————— */

export default function Subscription() {
  return (
    <>
      <title>Savage Society Subscription — All Access VIP | Savage Fit</title>
      <PageHero
        chip="Savage Society"
        title={
          <>
            All access.
            <br />
            <span className="serif-i">Zero</span> excuses.
          </>
        }
        lede={
          <>
            The All Access VIP subscription gives you <strong>unlimited access to every Savage
            training program</strong>, plus exclusive bonuses and community access. Choose your
            training style and switch between programs whenever you want — it's all included.
          </>
        }
      >
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 'clamp(24px, 3vw, 40px)' }}>
          <Magnetic>
            <a className="btn btn--pink" href={checkout.subQuarterly} target="_blank" rel="noreferrer">
              Start Your Journey <span className="arr">→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn--ghost" href="#pricing">
              See Pricing
            </a>
          </Magnetic>
        </div>
      </PageHero>
      <Tracks />
      <Bonuses />
      <Marquee
        items={[
          'Lean Gains',
          'Savage Shred',
          'Lifestyle',
          'Booty Gains',
          'Basic → Savage',
          'Home HIIT',
          'Hotel & Travel',
        ]}
        reverse
      />
      <Pricing />
      <HomeGym />
      <AppFeatures />
      <Community />
      <EndCta />
    </>
  )
}
