import { tiers, type Tier } from '../content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { WhiteGlove } from './WhiteGlove'
import { useInView } from '../hooks'

function TierCard({
  t,
  i,
  onDeploy,
}: {
  t: Tier
  i: number
  onDeploy: () => void
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`tier reveal${inView ? ' in' : ''}${t.featured ? ' featured' : ''}`}
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      {t.tag && <span className="tag">{t.tag}</span>}
      <div className="name">{t.name}</div>
      <div className="desc">{t.desc}</div>
      <div className="price">
        <span className="amt">{t.price}</span>
        <span className="per">{t.per}</span>
      </div>
      <ul>
        {t.features.map((f) => (
          <li key={f}>
            <span className="ck">
              <Icon name="check" size={15} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`btn ${t.featured ? 'btn-primary' : 'btn-ghost'}`}
        onClick={onDeploy}
      >
        {t.cta}
      </button>
    </div>
  )
}

export function Pricing({ onDeploy }: { onDeploy: () => void }) {
  return (
    <section id="pricing">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Pricing</span>
          <h2 className="h2">Simple, transparent pricing.</h2>
          <p className="lede">
            Every plan deploys directly to production. Start free, upgrade as
            your team grows, and never pay for a build minute again.
          </p>
        </Reveal>

        <div className="tiers">
          {tiers.map((t, i) => (
            <TierCard key={t.name} t={t} i={i} onDeploy={onDeploy} />
          ))}
        </div>

        <WhiteGlove onDeploy={onDeploy} />
      </div>
    </section>
  )
}
