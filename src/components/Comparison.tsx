import { comparison } from '../content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Comparison() {
  return (
    <section id="compare">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">The old way vs the only way</span>
          <h2 className="h2">Subtract until only production remains.</h2>
        </Reveal>

        <Reveal className="cmp">
          <div className="cmp-col legacy">
            <h3>
              <Icon name="x" size={16} />
              The legacy stack
            </h3>
            {comparison.map((r, i) => (
              <div className="cmp-row" key={i}>
                <span className="ic">
                  <Icon name="minus" size={16} />
                </span>
                <span className="txt">{r.legacy}</span>
              </div>
            ))}
          </div>

          <div className="cmp-col prod">
            <h3>
              <Icon name="check" size={16} />
              ProdScript
            </h3>
            {comparison.map((r, i) => (
              <div className="cmp-row" key={i}>
                <span className="ic">
                  <Icon name="check" size={16} />
                </span>
                <span className="txt">
                  <b>{r.prod}</b>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
