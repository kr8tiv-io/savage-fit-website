import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import HeroCanvas from '../components/HeroCanvas'
import Marquee from '../components/Marquee'
import Magnetic from '../components/Magnetic'
import Accordion, { type QA } from '../components/Accordion'
import PriceCard from '../components/PriceCard'
import SectionHead from '../components/SectionHead'
import Stat from '../components/Stat'
import { SplitReveal, FadeUp, Frame } from '../components/Reveal'
import { checkout, social } from '../data/site'

/* ————— data ————— */

const FAQ: QA[] = [
  {
    q: 'What is Body by Xenia?',
    a: 'Body by Xenia (Savage Fit) is an online coaching community led by IFBB Figure Pro Xenia Busigin, built to help you reach your goals with confidence. Workouts arrive through our fitness app with video demonstrations and real-time progress tracking.',
  },
  {
    q: 'What is the training subscription?',
    a: 'A self-guided subscription to every workout library, so you can pick programs that match your goals. Swap programs any time by messaging Xenia, track workouts, meals, weight, and photos in the app, and lean on our community — Xenia checks in often. Custom meal plans are available as an add-on.',
  },
  {
    q: 'What are the fitness challenges?',
    a: 'Seasonal six-to-nine-week programs where the whole group trains together and keeps each other accountable. Subscription members get 30% off challenge meal plans and free access to challenge workouts, dropped straight into the app.',
  },
  {
    q: 'How is 1-on-1 coaching different?',
    a: 'Online coaching with Xenia is a fully customized program, meal plan, and diet with weekly email check-ins for feedback on your progress. Everything is built from your questionnaire — no cookie-cutter, no recycled programs. Your body, your needs, your goals.',
  },
  {
    q: 'Do I need equipment?',
    a: 'No — there are programs for both home setups and the gym, from resistance bands to full racks. You choose the version that fits your space.',
  },
  {
    q: 'Can beginners join?',
    a: 'Absolutely. Whether you are just starting or leveling up, programs are designed for every fitness level, from first-timers to advanced athletes.',
  },
  {
    q: 'How do I get started?',
    a: 'Choose a plan, sign up, and your coach guides you through the next steps. You get everything you need to begin right away.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'One-time programs stay as purchased, but subscriptions can be changed easily — just reach out to Xenia.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Giselle A.',
    tag: 'Working out 6x a week',
    quote:
      "Your knowledge, level of firmness, calling things out in the most professional way, all while being relatable. I can now hit the weight room with a confidence I didn't have before.",
  },
  {
    name: 'Lidia F.',
    tag: 'Best decision I’ve made',
    quote:
      "I loved the guidance and the community. I felt I was part of something — I wasn't just going to the gym. I never felt alone; there was always somebody there for me.",
  },
  {
    name: 'Joanne B.',
    tag: 'You take the time for everyone',
    quote:
      "I have never in my entire life been part of such an amazing family. You take the time for each and every one of us, and that is HUGE.",
  },
  {
    name: 'Jolene',
    tag: 'Truly cares',
    quote:
      'I will take away all the confidence you have instilled in me, lifestyle changes, and learning to accept food in a positive way again. I love the support and realness.',
  },
  {
    name: 'Brittany T.',
    tag: 'Stronger and more confident',
    quote:
      "You guys really seem to care. It might be an online program, but you don't make the distance obvious. I grew a lot more in this program than I could've imagined.",
  },
  {
    name: 'Sarah W.',
    tag: 'Part of the family',
    quote:
      'Working with Xenia is always an awesome experience. I learn so much from her — new routines, making healthy eating fun, or understanding supplements.',
  },
]

const STEPS = [
  {
    t: 'Choose Your Vision',
    d: "Tell us your goals — building curves, leaning out, or feeling absolutely unstoppable. We'll match you with the perfect approach.",
  },
  {
    t: 'Get Your Custom Blueprint',
    d: 'Receive a personalized training and meal plan designed around YOUR body, lifestyle, and goals.',
  },
  {
    t: 'Train With Purpose',
    d: 'Follow your plan through the app with video demonstrations, progress tracking, and direct access to Xenia for guidance.',
  },
  {
    t: 'Weekly Check-Ins',
    d: 'Stay accountable with measurements, progress photos, and program adjustments. Your coach monitors every detail.',
  },
]

const PILLARS = [
  {
    t: 'A True Sisterhood',
    d: "This isn't just another fitness program — it's your community. Women who lift each other up, celebrate every win, and prove that when women support women, everything changes.",
  },
  {
    t: 'Programs That Actually Work',
    d: 'Methods designed around what YOUR body needs — not what some generic plan thinks you should do. Thoughtful programming, real results, no gimmicks.',
  },
  {
    t: 'Always in Your Corner',
    d: 'The difference between giving up and glowing up? People who genuinely care about your success — through every breakthrough, plateau, and victory.',
  },
]

const TRANSFORMS = [1, 2, 3, 4, 5, 6].map((n) => `/img/transform-${n}.png`)

const glassChip: React.CSSProperties = {
  position: 'absolute',
  left: 16,
  bottom: 16,
  background: 'rgba(253, 251, 250, 0.78)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(37, 28, 46, 0.14)',
  color: 'var(--ink)',
}

/* ————— sections ————— */

function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.splash img',
        { scale: 1.09, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.7, delay: 0.85, ease: 'power3.out' },
      )
      gsap.to('.splash', {
        yPercent: 7,
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'clip',
        paddingTop: 'calc(var(--nav-h) + clamp(14px, 3vh, 44px))',
      }}
    >
      <HeroCanvas />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <motion.span
            className="chip chip--pink"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 'clamp(16px, 2.4vw, 28px)' }}
          >
            <span className="dot" />
            Elite Coaching · IFBB Figure Pro
          </motion.span>

          <h1
            className="display d-hero"
            style={{ position: 'relative', zIndex: 2, marginBottom: '-0.52em', pointerEvents: 'none' }}
          >
            <span className="split-line" style={{ display: 'block' }}>
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: '112%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.62, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              >
                Your body,
              </motion.span>
            </span>
            <span className="split-line" style={{ display: 'block' }}>
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: '112%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.76, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              >
                beautifully <span className="serif-i">strong</span>.
              </motion.span>
            </span>
          </h1>
        </div>

        {/* the original two-tone studio splash, edges dissolved into the page */}
        <div className="splash" style={{ zIndex: 1 }}>
          <img
            src="/img/xenia-wide.png"
            alt="Xenia Busigin, IFBB Figure Pro, on a rose and blue studio backdrop"
            style={{ objectPosition: '47% 10%' }}
          />
          <motion.span
            className="script"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              left: 'clamp(12px, 9%, 200px)',
              bottom: '16%',
              fontSize: 'clamp(1.9rem, 3.6vw, 3.4rem)',
              transform: 'rotate(-6deg)',
              zIndex: 2,
            }}
          >
            Xenia Busigin
          </motion.span>
          <motion.svg
            className="badge-spin"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ right: 'clamp(10px, 7%, 160px)', top: '10%', zIndex: 2 }}
            aria-hidden
          >
            <defs>
              <path
                id="badge-circ"
                d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                fill="none"
              />
            </defs>
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="rgba(253,251,250,0.55)"
              stroke="rgba(217,79,150,0.35)"
              strokeWidth="0.75"
            />
            <text
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '7px',
                fontWeight: 700,
                letterSpacing: '0.24em',
                fill: 'var(--pink-hot)',
              }}
            >
              <textPath href="#badge-circ">BODY BY XENIA · IFBB FIGURE PRO · SINCE DAY ONE ·</textPath>
            </text>
            <text x="50" y="54" textAnchor="middle" style={{ fontSize: '10px', fill: 'var(--steel)' }}>
              ✿
            </text>
          </motion.svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, marginTop: 'clamp(-56px, -4vw, -20px)' }}>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              gap: 'clamp(16px, 3vw, 40px)',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              textAlign: 'center',
              flexDirection: 'column',
              paddingBottom: 'clamp(30px, 4vw, 56px)',
            }}
          >
            <p className="lede" style={{ maxWidth: '54ch' }}>
              Elite-level coaching by <strong>IFBB Figure Pro Xenia Busigin</strong>. Personalized
              online training, group challenges, and a supportive community of women — wherever
              you are in your journey.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Magnetic>
                <a className="btn btn--pink" href="#programs">
                  Begin Today <span className="arr">→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <Link className="btn btn--ghost" to="/training">
                  1-on-1 Coaching
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Marquee
          items={[
            'IFBB Figure Pro',
            'Personalized Coaching',
            'A True Sisterhood',
            'Real Results',
            'Train Anywhere',
          ]}
        />
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about" style={{ overflow: 'clip' }}>
      <span className="wm" aria-hidden style={{ top: '4%', right: '-4%' }}>
        community
      </span>
      <div className="container grid-2">
        <div>
          <SectionHead
            num="01"
            kicker="About"
            title={
              <>
                Your fitness.
                <br />
                Your <span className="serif-i">community</span>.
              </>
            }
          />
          <FadeUp as="p" className="lede" delay={0.1}>
            Fitness is more than training — it's about building an{' '}
            <strong>unshakeable mindset</strong> and joining a community that has your back.
            Whether you're ready to take on your first challenge, push past plateaus, or
            completely transform your lifestyle, our proven coaching system and devoted community
            will guide you every rep of the way.
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 48 }}>
              <Stat value={6} label="Week Signature Challenge" />
              <Stat value={5} suffix="+" label="Training Tracks" />
              <Stat value={24} suffix="h" label="Coach Response Time" />
              <Stat value={100} suffix="%" label="Custom Programming" />
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.15}>
          <div style={{ position: 'relative', padding: '6% 4%' }}>
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: '4% 0',
                background:
                  'radial-gradient(60% 52% at 50% 40%, var(--wash-lilac), transparent 70%), radial-gradient(50% 45% at 38% 62%, var(--wash-pink), transparent 72%)',
                filter: 'blur(4px)',
              }}
            />
            <img
              src="/img/cut/xenia-portrait.png"
              alt="Xenia Busigin"
              className="fade-b"
              style={{ position: 'relative', width: '100%' }}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function Transformations() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const rail = ref.current?.querySelector<HTMLElement>('.rail')
      if (!rail || !ref.current) return
      const scroll = () => rail.scrollWidth - window.innerWidth
      gsap.to(rail, {
        x: () => -scroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: () => `+=${scroll()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="section--line" style={{ overflow: 'clip', background: 'var(--bg-2)' }}>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBlock: 'clamp(60px, 8vh, 100px)',
        }}
      >
        <div className="container" style={{ marginBottom: 'clamp(32px, 5vh, 64px)' }}>
          <span className="kicker kicker--num">
            <span className="num">02</span>Transformations
          </span>
          <SplitReveal className="display d-1" as="h2">
            Real women. <span className="serif-i">Real</span> results.
          </SplitReveal>
        </div>
        <div
          className="rail"
          style={{
            display: 'flex',
            gap: 'clamp(16px, 2vw, 32px)',
            paddingLeft: 'var(--gutter)',
            width: 'max-content',
          }}
        >
          {TRANSFORMS.map((src, i) => (
            <div
              key={src}
              className="frame"
              style={{ width: 'clamp(300px, 44vw, 640px)', aspectRatio: '4 / 3', flex: 'none' }}
            >
              <img src={src} alt={`Client transformation ${i + 1} — before and after`} loading="lazy" />
              <span className="chip" style={glassChip}>
                Transformation · {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
          <div
            style={{
              width: 'clamp(280px, 30vw, 420px)',
              flex: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ textAlign: 'center', padding: 24 }}>
              <p className="display d-3" style={{ marginBottom: 24 }}>
                Strong curves. New confidence.
                <br />
                <span className="serif-i">Your turn.</span>
              </p>
              <Magnetic>
                <Link className="btn btn--pink" to="/challenges">
                  Join a Challenge <span className="arr">→</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Programs() {
  const cards = [
    {
      to: '/subscription',
      img: '/img/xenia-portrait.png',
      pos: '50% 12%',
      k: 'Self-guided · App-based',
      t: 'Training Subscription',
      d: 'Unlimited access to the full program library — strength, sculpt, lifestyle, glute-focus — rotating monthly so you never plateau.',
    },
    {
      to: '/training',
      img: '/img/ifbb-procard.jpg',
      pos: '50% 24%',
      k: 'Premium · 1-on-1',
      t: 'Custom Online Coaching',
      d: '100% custom programming, weekly personal check-ins, and direct access to an IFBB Pro. Completely built around you.',
    },
    {
      to: '/spring-aesthetic',
      img: '/img/stage-winners.jpg',
      pos: '50% 30%',
      k: 'Group · 6 weeks',
      t: 'Six-Week Challenge',
      d: 'Our signature transformation experience. Group energy, prizes, and programs tailored to your goal.',
    },
  ]
  return (
    <section className="section section--line" id="programs">
      <div className="container">
        <SectionHead
          num="03"
          kicker="Choose your path"
          title={
            <>
              No matter your level,
              <br />
              there's a <span className="serif-i">program</span> for you.
            </>
          }
        />
        <div className="grid-3">
          {cards.map((c, i) => (
            <FadeUp key={c.to} delay={i * 0.12}>
              <Link to={c.to} className="card" style={{ display: 'block', padding: 0 }}>
                <div className="frame" style={{ aspectRatio: '4 / 3', borderRadius: 0, boxShadow: 'none' }}>
                  <img
                    src={c.img}
                    alt={c.t}
                    loading="lazy"
                    style={{ objectPosition: c.pos, transition: 'transform 0.8s var(--ease-out)' }}
                  />
                </div>
                <div style={{ padding: 'clamp(22px, 2.4vw, 34px)' }}>
                  <span className="kicker" style={{ marginBottom: 14 }}>
                    {c.k}
                  </span>
                  <h3 className="display d-3" style={{ margin: '10px 0 12px' }}>
                    {c.t}
                  </h3>
                  <p style={{ color: 'var(--dim)', fontSize: '0.95rem', marginBottom: 18 }}>{c.d}</p>
                  <span
                    style={{
                      color: 'var(--pink-hot)',
                      fontWeight: 700,
                      fontSize: '0.76rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Explore →
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section section--line">
      <div className="container panel-blush">
        <SectionHead
          num="04"
          kicker="Membership"
          title={
            <>
              Fall in love with your own
              <br />
              <span className="serif-i">transformation</span>.
            </>
          }
          lede={
            <>
              Unlimited access to the entire library of fresh programs that rotate monthly. No
              filler — thoughtful workouts designed by an IFBB Pro who knows exactly how to help
              you sweat, sculpt, and shine.
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
              'Full program library, rotating monthly',
              'Gym and home versions',
              'Video demos + tracking tools',
              'Private community access',
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
              'VIP challenge workout access',
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
              'Best value all year',
              'Discounts on coaching + meal plans',
              'Priority program requests',
            ]}
          />
        </div>
        <FadeUp delay={0.2}>
          <p style={{ textAlign: 'center', color: 'var(--faint)', marginTop: 28, fontSize: '0.85rem' }}>
            Prices in USD. Cancel anytime.{' '}
            <Link to="/subscription" style={{ color: 'var(--pink-hot)' }}>
              See everything the subscription includes →
            </Link>
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="05"
          kicker="The difference"
          title={
            <>
              Simple. Effective.
              <br />
              <span className="serif-i">Life changing.</span>
            </>
          }
        />
        <div>
          {PILLARS.map((p, i) => (
            <FadeUp key={p.t} delay={i * 0.08}>
              <div
                className="grid-2"
                style={{
                  borderTop: '1px solid var(--line)',
                  padding: 'clamp(28px, 4vw, 56px) 0',
                  alignItems: 'start',
                }}
              >
                <h3 className="display d-2" style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
                  <span
                    style={{
                      fontSize: '0.34em',
                      color: 'var(--pink)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                    }}
                  >
                    0{i + 1}
                  </span>
                  {p.t}
                </h3>
                <p className="lede">{p.d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="section section--line">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
          <SectionHead
            num="06"
            kicker="1-on-1 Coaching"
            title={
              <>
                Built <span className="serif-i">around</span>
                <br />
                your body.
              </>
            }
            lede="Getting started is simple. Follow these steps and let's build the best version of you — together."
          />
          <Magnetic>
            <Link className="btn btn--pink" to="/training">
              Learn More <span className="arr">→</span>
            </Link>
          </Magnetic>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2vw, 22px)' }}>
          {STEPS.map((s, i) => (
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

function Team() {
  const team = [
    {
      img: '/img/cut/xenia-crop.png',
      n: 'Xenia Busigin',
      r: 'Founder · Head Coach · IFBB Figure Pro',
      d: 'IFBB Pro card winner who knows the demands of competition prep and everyday life alike. Xenia has helped hundreds of women transform their bodies and mindsets.',
    },
    {
      img: '/img/cut/coach-angie.png',
      n: 'Angie Romayor-Eisele',
      r: 'Coach · Custom Training',
      d: 'Angie coaches with equal parts fire and heart — custom programming, nutrition guidance, and the accountability to keep you moving forward.',
    },
  ]
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="07"
          kicker="Your coaches"
          title={
            <>
              The team in your <span className="serif-i">corner</span>.
            </>
          }
        />
        <div
          className="grid-3"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 940, marginInline: 'auto' }}
        >
          {team.map((m, i) => (
            <FadeUp key={m.n} delay={i * 0.12}>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', padding: '8% 12% 0' }}>
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      inset: '6% 8%',
                      background:
                        i % 2
                          ? 'radial-gradient(58% 50% at 50% 42%, var(--wash-lilac), transparent 70%)'
                          : 'radial-gradient(58% 50% at 50% 42%, var(--wash-pink), transparent 70%)',
                      filter: 'blur(4px)',
                    }}
                  />
                  <img
                    src={m.img}
                    alt={m.n}
                    loading="lazy"
                    className="fade-b"
                    style={{ position: 'relative', width: '100%', aspectRatio: '3 / 3.3', objectFit: 'cover', objectPosition: '50% 8%' }}
                  />
                </div>
                <div style={{ padding: 'clamp(18px, 2vw, 26px) 8px 8px' }}>
                  <h3 className="display d-3">{m.n}</h3>
                  <p
                    style={{
                      color: 'var(--pink-hot)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      margin: '8px 0 12px',
                    }}
                  >
                    {m.r}
                  </p>
                  <p style={{ color: 'var(--dim)', fontSize: '0.92rem' }}>{m.d}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Journal() {
  return (
    <section className="section section--line">
      <div className="container grid-2">
        <Frame src="/img/beach.jpg" alt="Recovery and balance" ratio="1 / 1" parallax={12} />
        <div>
          <SectionHead
            num="08"
            kicker="From Xenia"
            title={
              <>
                Your come back is <span className="serif-i">programmed</span>.
              </>
            }
            lede={
              <>
                The foundation you built — those neural superhighways you created through all that
                consistent action — <strong>they don't just disappear.</strong> Fall off? Get back
                on. Your body remembers.
              </>
            }
          />
          <Magnetic>
            <a className="btn btn--ghost" href={social.instagram} target="_blank" rel="noreferrer">
              Follow the Journey <span className="arr">→</span>
            </a>
          </Magnetic>
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
            num="09"
            kicker="FAQ"
            title={
              <>
                Questions?
                <br />
                We've got <span className="serif-i">answers</span>.
              </>
            }
            lede="Everything you need to know — features, pricing, and how to get started."
          />
        </div>
        <Accordion items={FAQ} />
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section section--line" style={{ overflow: 'clip' }}>
      <span className="wm" aria-hidden style={{ bottom: '2%', left: '-3%' }}>
        loved
      </span>
      <div className="container">
        <SectionHead
          num="10"
          kicker="Testimonials"
          title={
            <>
              What our clients <span className="serif-i">say</span>.
            </>
          }
          align="center"
        />
      </div>
      <div className="container grid-3">
        {TESTIMONIALS.map((t, i) => (
          <FadeUp key={t.name} delay={(i % 3) * 0.1} className="card">
            <div
              style={{
                color: 'var(--pink)',
                fontSize: '2.4rem',
                fontFamily: 'var(--font-script)',
                lineHeight: 1,
              }}
            >
              “
            </div>
            <p style={{ color: 'var(--ink)', margin: '10px 0 22px', fontSize: '0.97rem', lineHeight: 1.7 }}>
              {t.quote}
            </p>
            <div>
              <strong style={{ display: 'block' }}>{t.name}</strong>
              <span
                style={{
                  color: 'var(--pink-hot)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                {t.tag}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

/* ————— page ————— */

export default function Home() {
  return (
    <>
      <title>Body by Xenia — Elite Online Coaching by IFBB Figure Pro Xenia Busigin</title>
      <Hero />
      <About />
      <Transformations />
      <Programs />
      <Pricing />
      <Pillars />
      <Steps />
      <Team />
      <Journal />
      <Faq />
      <Testimonials />
      <Marquee items={['Join the Sisterhood', 'Train Anywhere', 'Real Results', 'Begin Beautifully']} reverse />
    </>
  )
}
