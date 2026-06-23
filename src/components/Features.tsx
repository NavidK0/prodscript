import { features, type Feature } from '../content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { useInView } from '../hooks'

function FeatureCard({ f, i }: { f: Feature; i: number }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <article
      ref={ref}
      className={`feature reveal${inView ? ' in' : ''}${f.wide ? ' wide' : ''}`}
      style={{ transitionDelay: `${(i % 3) * 70}ms` }}
    >
      <div className="ficon">
        <Icon name={f.icon} size={20} />
      </div>
      <h3>{f.title}</h3>
      <p>{f.body}</p>
    </article>
  )
}

export function Features() {
  return (
    <section id="features">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Why ProdScript</span>
          <h2 className="h2">Everything you used to need, removed.</h2>
          <p className="lede">
            Each of these was something your old stack called essential. We
            looked closer and found it was only ever latency wearing a lanyard.
          </p>
        </Reveal>

        <div className="bento">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
