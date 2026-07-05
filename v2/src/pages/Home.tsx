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
    q: 'What is Savage Fit?',
    a: 'Savage Fit is an online coaching community led by IFBB Figure Pro Xenia Busigin, built to help you get fit and smash your goals. Workouts arrive through our fitness app with video demonstrations and real-time progress tracking.',
  },
  {
    q: 'What is the Savage Subscription?',
    a: 'A self-guided subscription to every workout library, so you can pick programs that match your goals. Swap programs any time by messaging Xenia, track workouts, meals, weight, and photos in the app, and hang out in our community — Xenia checks in often. Custom meal plans are available as an add-on.',
  },
  {
    q: 'What are the fitness challenges?',
    a: 'Seasonal six-to-nine-week sprints where the whole group trains a custom program and keeps each other accountable. Subscription VIPs get 30% off challenge meal plans and free access to challenge workouts, dropped straight into the app.',
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
      "Your knowledge, level of firmness, calling out BS in the most professional way, all while being relatable. I can now hit the weight room with a confidence I didn't have before.",
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
    d: "Tell us your goals — building curves, getting shredded, or feeling absolutely unstoppable. We'll match you with the perfect approach.",
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
    t: 'Savage Sisterhood',
    d: "This isn't just another fitness program — it's your tribe. Fierce women who lift each other up, celebrate every win, and prove that when women support women, magic happens.",
  },
  {
    t: 'Programs That Actually Work',
    d: 'We throw the fitness rulebook out the window. Unconventional methods designed around what YOUR body needs — not what some generic plan thinks you should do. Real results, zero BS.',
  },
  {
    t: 'Always in Your Corner',
    d: 'The difference between giving up and glowing up? People who genuinely care about your success — through every breakthrough, plateau, and victory dance.',
  },
]

const TRANSFORMS = [1, 2, 3, 4, 5, 6].map((n) => `/img/transform-${n}.png`)

/* ————— sections ————— */

function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.hero-img-wrap',
        { clipPath: 'inset(100% 0 0 0)', y: 60 },
        { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 1.4, delay: 1.15, ease: 'power4.out' },
      )
      gsap.to('.hero-img-wrap', {
        y: -60,
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
        justifyContent: 'flex-end',
        position: 'relative',
        overflow: 'clip',
        paddingTop: 'var(--nav-h)',
      }}
    >
      <HeroCanvas />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(70% 55% at 72% 30%, rgba(255,31,112,0.10), transparent 65%), linear-gradient(180deg, rgba(11,11,13,0.4), transparent 30%, transparent 70%, rgba(11,11,13,0.9))',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', position: 'relative' }}>
          {/* floating portrait */}
          <div
            className="hero-img-wrap"
            style={{
              position: 'absolute',
              right: 0,
              bottom: '-16%',
              width: 'clamp(240px, 30vw, 460px)',
              aspectRatio: '4 / 5.4',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              boxShadow: '0 40px 120px rgba(255,31,112,0.22)',
              zIndex: 1,
            }}
          >
            <img
              src="/img/xenia-crop.png"
              alt="Xenia Busigin, IFBB Figure Pro"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 12%' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(200deg, transparent 55%, rgba(11,11,13,0.55))',
              }}
            />
            <span
              className="chip"
              style={{
                position: 'absolute',
                left: 14,
                bottom: 14,
                background: 'rgba(11,11,13,0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(245,242,236,0.25)',
                color: 'var(--ink)',
              }}
            >
              Xenia Busigin · IFBB Figure Pro
            </span>
          </div>

          <motion.span
            className="chip chip--pink"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 'clamp(18px, 3vw, 34px)' }}
          >
            <span className="dot" />
            Elite Online Coaching
          </motion.span>

          <h1 className="display d-hero" style={{ position: 'relative', zIndex: 2 }}>
            <span className="split-line" style={{ display: 'block' }}>
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: '112%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.75, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              >
                Unleash
              </motion.span>
            </span>
            <span className="split-line" style={{ display: 'block' }}>
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: '112%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.87, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              >
                the <span className="serif-i">savage</span>
              </motion.span>
            </span>
            <span className="split-line" style={{ display: 'block' }}>
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: '112%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.99, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="hollow-text">within</span>
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              gap: 'clamp(20px, 4vw, 56px)',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              marginTop: 'clamp(26px, 4vw, 48px)',
              paddingBottom: 'clamp(40px, 6vw, 72px)',
            }}
          >
            <p className="lede" style={{ maxWidth: '42ch' }}>
              Elite-level coaching by an <strong>IFBB Figure Pro</strong>. Online training, group
              challenges, and a supportive community — wherever you are in your journey.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Magnetic>
                <a className="btn btn--pink" href="#programs">
                  Start Right Now <span className="arr">→</span>
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
            'Online Coaching',
            'Savage Sisterhood',
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
    <section className="section" id="about">
      <div className="container grid-2">
        <div>
          <SectionHead
            num="01"
            kicker="About Savage Fit"
            title={
              <>
                Your fitness.
                <br />
                Your <span className="serif-i">tribe</span>.
              </>
            }
          />
          <FadeUp as="p" className="lede" delay={0.1}>
            At Savage, fitness is more than training — it's about building an{' '}
            <strong>unbreakable mindset</strong> and joining a community that has your back.
            Whether you're ready to dominate your first challenge, push past plateaus, or
            completely transform your lifestyle, our proven coaching system and fierce community
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
        <Frame src="/img/xenia-portrait.png" alt="Xenia Busigin" ratio="4 / 5" parallax={14} />
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
    <section ref={ref} className="section--line" style={{ overflow: 'clip' }}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBlock: 'clamp(60px, 8vh, 100px)' }}>
        <div className="container" style={{ marginBottom: 'clamp(32px, 5vh, 64px)' }}>
          <span className="kicker kicker--num">
            <span className="num">02</span>Transformations
          </span>
          <SplitReveal className="display d-1" as="h2">
            Real people. <span className="serif-i">Real</span> results.
          </SplitReveal>
        </div>
        <div
          className="rail"
          style={{ display: 'flex', gap: 'clamp(16px, 2vw, 32px)', paddingLeft: 'var(--gutter)', width: 'max-content' }}
        >
          {TRANSFORMS.map((src, i) => (
            <div
              key={src}
              className="frame"
              style={{ width: 'clamp(300px, 44vw, 640px)', aspectRatio: '4 / 3', flex: 'none' }}
            >
              <img src={src} alt={`Client transformation ${i + 1} — before and after`} loading="lazy" />
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
                Savage Transformation · {String(i + 1).padStart(2, '0')}
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
                From building curves that kill to shredding like queens.
              </p>
              <Magnetic>
                <Link className="btn btn--pink" to="/challenges">
                  Your Turn <span className="arr">→</span>
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
      pos: '50% 15%',
      k: 'Self-guided · App-based',
      t: 'Savage Society Subscription',
      d: 'Unlimited access to the full program library — strength, shred, lifestyle, booty gains — rotating monthly so you never plateau.',
    },
    {
      to: '/training',
      img: '/img/stage-winners.jpg',
      pos: '50% 30%',
      k: 'Premium · 1-on-1',
      t: 'Custom Online Coaching',
      d: '100% custom programming, weekly personal check-ins, and direct access to an IFBB Pro. No cookie-cutter. No BS.',
    },
    {
      to: '/spring-aesthetic',
      img: '/img/transform-4.png',
      pos: '50% 20%',
      k: 'Group · 6 weeks',
      t: 'Savage in Six Challenge',
      d: 'Our signature 6-week transformation sprint. Group energy, cash prizes, and programs tailored to your goal.',
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
                <div className="frame" style={{ aspectRatio: '4 / 3', borderRadius: 0 }}>
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
                  <span style={{ color: 'var(--pink)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
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
      <div className="container">
        <SectionHead
          num="04"
          kicker="Savage Society"
          title={
            <>
              Get addicted to your own
              <br />
              <span className="serif-i">transformation</span>.
            </>
          }
          lede={
            <>
              Unlimited access to the entire library of intense, fresh programs that rotate
              monthly. No check-ins, no fluff — just pure workouts designed by an IFBB Pro who
              knows exactly how to make you sweat, sculpt, and slay.
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
            <Link to="/subscription" style={{ color: 'var(--pink)' }}>
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
          kicker="The Savage difference"
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
                  <span style={{ fontSize: '0.35em', color: 'var(--pink)', fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.2em' }}>
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
            lede="Getting started with Savage is simple. Follow these steps and let's build the best version of you — together."
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
      img: '/img/xenia-portrait.png',
      pos: '50% 12%',
      n: 'Xenia Busigin',
      r: 'Founder · Head Coach · IFBB Figure Pro',
      d: 'IFBB Pro card winner who knows the demands of competition prep and everyday life alike. Xenia has helped hundreds of women transform their bodies and mindsets.',
    },
    {
      img: '/img/coach-matt.png',
      pos: '50% 15%',
      n: 'Matt Haynes',
      r: 'Coach · Custom Training',
      d: 'Matt builds fully customized programs and meal plans with weekly check-ins — effective workouts paired with expert nutrition guidance for sustainable results.',
    },
    {
      img: '/img/coach-angie.png',
      pos: '50% 15%',
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
        <div className="grid-3">
          {team.map((m, i) => (
            <FadeUp key={m.n} delay={i * 0.12}>
              <div className="card" style={{ padding: 0 }}>
                <div className="frame" style={{ aspectRatio: '3 / 3.4', borderRadius: 0 }}>
                  <img src={m.img} alt={m.n} loading="lazy" style={{ objectPosition: m.pos }} />
                </div>
                <div style={{ padding: 'clamp(20px, 2.2vw, 30px)' }}>
                  <h3 className="display d-3">{m.n}</h3>
                  <p style={{ color: 'var(--pink)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '8px 0 12px' }}>
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
        <Frame src="/img/beach.jpg" alt="Recovery and balance — Savage lifestyle" ratio="1 / 1" parallax={12} />
        <div>
          <SectionHead
            num="08"
            kicker="Latest article"
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
            lede="Everything you need to know about Savage Fit — features, pricing, and how to get started."
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
            <div style={{ color: 'var(--pink)', fontSize: '1.6rem', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
              “
            </div>
            <p style={{ color: 'var(--ink)', margin: '10px 0 22px', fontSize: '0.98rem', lineHeight: 1.65 }}>
              {t.quote}
            </p>
            <div>
              <strong style={{ display: 'block' }}>{t.name}</strong>
              <span style={{ color: 'var(--pink)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
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
      <title>Savage Fit — Elite Online Coaching by Xenia Busigin, IFBB Figure Pro</title>
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
      <Marquee
        items={['Join the Sisterhood', 'Train Anywhere', 'No BS', 'Real Results']}
        reverse
      />
    </>
  )
}
