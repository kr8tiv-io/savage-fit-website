import { FadeUp } from './Reveal'

export default function PriceCard({
  plan,
  was,
  price,
  per,
  features,
  href,
  cta = 'Get Started',
  hot = false,
  tag,
  delay = 0,
}: {
  plan: string
  was?: string
  price: string
  per: string
  features: string[]
  href: string
  cta?: string
  hot?: boolean
  tag?: string
  delay?: number
}) {
  return (
    <FadeUp className={`price-card${hot ? ' price-card--hot' : ''}`} delay={delay}>
      {tag && (
        <span className="chip chip--pink tag">
          <span className="dot" />
          {tag}
        </span>
      )}
      <div className="plan">{plan}</div>
      <div className="amount">
        {was && <span className="was">{was}</span>}
        <span className={hot ? 'gt' : ''}>{price}</span>
        <span className="per">{per}</span>
      </div>
      <ul>
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <a
        className={`btn ${hot ? 'btn--pink' : 'btn--ghost'}`}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        style={{ justifyContent: 'center' }}
      >
        {cta} <span className="arr">→</span>
      </a>
    </FadeUp>
  )
}
