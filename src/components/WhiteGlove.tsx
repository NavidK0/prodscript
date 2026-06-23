import { gloveItems } from '../content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

/** The absurd, prominently-featured "Concierge" white-glove tier. */
export function WhiteGlove({ onDeploy }: { onDeploy: () => void }) {
  return (
    <Reveal className="glove">
      <div className="glove-top">
        <div>
          <span className="eyebrow">ProdScript Concierge</span>
          <h3>Complete white-glove service, for production-only organizations.</h3>
        </div>
        <div className="priceblock">
          <div className="amt">From $2,000,000</div>
          <div className="per">
            per year · billed in production · non-refundable on principle
          </div>
        </div>
      </div>

      <div className="glove-list">
        {gloveItems.map((g) => (
          <div className="gl" key={g.n}>
            <span className="n">{g.n}</span>
            <span>
              <b>{g.lead}</b> {g.body}
            </span>
          </div>
        ))}
      </div>

      <div className="glove-cta">
        <button className="btn btn-primary btn-lg" onClick={onDeploy}>
          Talk to the concierge
          <Icon name="arrowRight" size={18} className="arrow" />
        </button>
        <p className="fine">
          Concierge requires a three-year minimum commitment to production.
          Travel, velvet, and ceremonial materials are billed separately. There
          is no free trial, because there is no environment in which to trial it.
        </p>
      </div>
    </Reveal>
  )
}
