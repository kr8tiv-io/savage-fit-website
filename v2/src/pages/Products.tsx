import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import PriceCard from '../components/PriceCard'
import Marquee from '../components/Marquee'
import Magnetic from '../components/Magnetic'
import { FadeUp, Frame } from '../components/Reveal'
import { checkout, social } from '../data/site'

/* ————— sections ————— */

function CustomPlans() {
  return (
    <section className="section section--line">
      <div className="container">
        <SectionHead
          num="01"
          kicker="Custom Workouts & Meal Plans"
          title={
            <>
              Built for <span className="serif-i">your</span> goals.
              <br />
              Not a template.
            </>
          }
          lede={
            <>
              One-time plans, zero commitment. Everything starts with your questionnaire —
              your taste, your goals, your life — and comes back{' '}
              <strong>custom built, no cookie-cutter</strong>.
            </>
          }
        />
        <div className="grid-3">
          <PriceCard
            plan="Custom Meal Plan"
            price="$100"
            per="one-time"
            href={checkout.mealPlan}
            features={[
              'Designed around foods you actually like',
              'Macronutrients fit to your goals',
              'Built from your questionnaire',
              'Hit your goals sustainably',
            ]}
          />
          <PriceCard
            plan="4-Week Custom Workout + Meal Plan"
            price="$175"
            per="/4 weeks"
            href={checkout.fourWeekCustom}
            hot
            tag="Popular"
            delay={0.12}
            features={[
              'Customized 4-week program in the app',
              'Customized 4-week meal plan',
              'Self-tracking tools to monitor progress',
              'No check-ins — you run the show',
            ]}
          />
          <PriceCard
            plan="8-Week Custom Program"
            price="$225"
            per="/8 weeks"
            href={social.email}
            cta="Enquire"
            delay={0.24}
            features={[
              '8-week custom program, designed fresh',
              'Two different monthly schedules',
              'In-app with self-monitoring — no meal plan',
              'One-off plan for self-motivated people',
            ]}
          />
        </div>
        <FadeUp delay={0.2}>
          <p style={{ textAlign: 'center', color: 'var(--faint)', marginTop: 28, fontSize: '0.85rem' }}>
            Every custom plan starts with your intake questionnaire — fill it out once, and we
            build from there.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

function TrainWithMatt() {
  return (
    <section className="section section--line">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'start', marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
            <SectionHead
              num="02"
              kicker="Train with Matt"
              title={
                <>
                  One coach.
                  <br />
                  Every <span className="serif-i">detail</span>.
                </>
              }
              lede={
                <>
                  Every Train-with-Matt plan is the full package: a{' '}
                  <strong>completely customized program and meal plan</strong>, weekly check-ins,
                  and adjustments as required. Pick the runway that matches your commitment.
                </>
              }
            />
          </div>
          <Frame src="/img/coach-matt.png" alt="Coach Matt Haynes" ratio="4 / 5" parallax={14} />
        </div>
        <div className="grid-3">
          <PriceCard
            plan="1 Month"
            price="$250"
            per="/1 month"
            href={checkout.mattMonthly}
            features={[
              '1 month of 1-on-1 coaching with Matt',
              'Fully customized training program',
              'Custom meal plan included',
              'Weekly check-ins + adjustments as required',
            ]}
          />
          <PriceCard
            plan="3 Months"
            price="$600"
            per="/3 months"
            href={checkout.mattQuarterly}
            hot
            delay={0.12}
            features={[
              '3 months of 1-on-1 coaching with Matt',
              'Fully customized training program',
              'Custom meal plan included',
              'Weekly check-ins + adjustments as required',
            ]}
          />
          <PriceCard
            plan="12 Months"
            price="$900"
            per="/12 months"
            href={checkout.mattYearly}
            delay={0.24}
            features={[
              '12 months of 1-on-1 coaching with Matt',
              'Fully customized training program',
              'Custom meal plan included',
              'Weekly check-ins + adjustments as required',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function TrainWithAngie() {
  return (
    <section className="section section--line">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'start', marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <Frame src="/img/coach-angie.png" alt="Coach Angie Romayor-Eisele" ratio="4 / 5" parallax={14} />
          <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
            <SectionHead
              num="03"
              kicker="Train with Angie"
              title={
                <>
                  Fire meets
                  <br />
                  <span className="serif-i">heart</span>.
                </>
              }
              lede={
                <>
                  Angie coaches with equal parts fire and heart. Every plan includes a{' '}
                  <strong>completely customized program and meal plan</strong>, weekly check-ins,
                  and adjustments as required — the accountability to keep you moving forward.
                </>
              }
            />
          </div>
        </div>
        <div className="grid-3">
          <PriceCard
            plan="1 Month"
            price="$150"
            per="/1 month"
            href={checkout.angieMonthly}
            features={[
              '1 month of 1-on-1 coaching with Angie',
              'Fully customized training program',
              'Custom meal plan included',
              'Weekly check-ins + adjustments as required',
            ]}
          />
          <PriceCard
            plan="3 Months"
            price="$400"
            per="/3 months"
            href={checkout.angieQuarterly}
            hot
            delay={0.12}
            features={[
              '3 months of 1-on-1 coaching with Angie',
              'Fully customized training program',
              'Custom meal plan included',
              'Weekly check-ins + adjustments as required',
            ]}
          />
          <PriceCard
            plan="12 Months"
            price="$700"
            per="/12 months"
            href={checkout.angieYearly}
            delay={0.24}
            features={[
              '12 months of 1-on-1 coaching with Angie',
              'Fully customized training program',
              'Custom meal plan included',
              'Weekly check-ins + adjustments as required',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function MensHomeSavage() {
  return (
    <section className="section section--line" style={{ overflow: 'clip' }}>
      <div className="container">
        <SectionHead
          num="04"
          kicker="Men's Home Savage · Intense"
          title={
            <>
              Lean muscle,
              <br />
              built at <span className="serif-i">home</span>.
            </>
          }
          lede={
            <>
              Training for the men, too. The Men's Home Savage subscription is a{' '}
              <strong>16-week, minimal-equipment home program</strong> designed to build lean,
              functional muscle and athletic conditioning through supersets, bodyweight
              exercises, and cardio intervals.
            </>
          }
        />
      </div>
      <Marquee
        items={[
          'Minimal Equipment',
          'Supersets',
          'Bodyweight Work',
          'Cardio Intervals',
          'Lean Functional Muscle',
          '16 Weeks',
        ]}
        reverse
      />
      <div className="container" style={{ marginTop: 'clamp(40px, 6vw, 72px)' }}>
        <div className="grid-3">
          <PriceCard
            plan="1 Month"
            price="$44"
            per="/1 month"
            href={checkout.mensMonthly}
            features={[
              '16-week intense home program in the app',
              'Minimal equipment required',
              'Supersets, bodyweight + cardio intervals',
              'Ongoing subscription',
            ]}
          />
          <PriceCard
            plan="3 Months"
            price="$111"
            per="/3 months"
            href={checkout.mensQuarterly}
            delay={0.12}
            features={[
              '16-week intense home program in the app',
              'Minimal equipment required',
              'Supersets, bodyweight + cardio intervals',
              'Ongoing subscription',
            ]}
          />
          <PriceCard
            plan="1 Year"
            price="$369"
            per="/1 year"
            href={checkout.mensYearly}
            delay={0.24}
            features={[
              '16-week intense home program in the app',
              'Minimal equipment required',
              'Supersets, bodyweight + cardio intervals',
              'Ongoing subscription',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="section section--line" style={{ overflow: 'clip' }}>
      <div className="container">
        <Frame
          src="/img/xenia-wide.png"
          alt="Xenia Busigin, IFBB Figure Pro — Body by Xenia"
          ratio="3 / 1"
          parallax={10}
        />
        <div style={{ marginTop: 'clamp(40px, 6vw, 72px)' }}>
          <SectionHead
            align="center"
            kicker="Still deciding?"
            title={
              <>
                Can't decide? Talk to the <span className="serif-i">team</span>.
              </>
            }
            lede={
              <>
                Tell us where you're at and where you want to be — we'll point you to the plan
                that gets you there. <strong>No pressure, no gimmicks.</strong>
              </>
            }
          />
          <FadeUp delay={0.15}>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Magnetic>
                <a className="btn btn--pink" href={social.email}>
                  Email the Team <span className="arr">→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <Link className="btn btn--ghost" to="/training">
                  Explore 1-on-1 Coaching <span className="arr">→</span>
                </Link>
              </Magnetic>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ————— page ————— */

export default function Products() {
  return (
    <>
      <title>Programs & Products — Body by Xenia</title>
      <PageHero
        chip="Programs & Products"
        title={
          <>
            Own your <span className="serif-i">power</span>.
          </>
        }
        lede={
          <>
            Every woman has her own vision. Whether you're ready to build hourglass strength,
            lean out with confidence, or feel absolutely untouchable in your own skin, our
            programs are designed to serve <strong>looks AND performance</strong>. It's time
            to stop playing small.
          </>
        }
      >
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
          <Magnetic>
            <a className="btn btn--ghost" href={social.email}>
              Get Launch Alerts <span className="arr">→</span>
            </a>
          </Magnetic>
          <p style={{ color: 'var(--faint)', fontSize: '0.85rem', maxWidth: '34ch' }}>
            We're constantly adding new programs and products — get on the list so you never
            miss a drop.
          </p>
        </div>
      </PageHero>
      <CustomPlans />
      <TrainWithMatt />
      <TrainWithAngie />
      <MensHomeSavage />
      <FinalCta />
    </>
  )
}
