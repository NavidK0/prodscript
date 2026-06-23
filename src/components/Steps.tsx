import { steps, type Step } from '../content'
import { Reveal } from './Reveal'
import { useInView } from '../hooks'

function StepCard({ s, i }: { s: Step; i: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`step reveal${inView ? ' in' : ''}`}
      style={{ transitionDelay: `${i * 90}ms` }}
    >
      <span className="idx">{s.idx}</span>
      <h3>{s.title}</h3>
      <p>{s.body}</p>
      <span className="big" aria-hidden="true">
        {s.big}
      </span>
    </div>
  )
}

export function Steps() {
  return (
    <section id="how">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The workflow</span>
          <h2 className="h2">Idea, model, production.</h2>
          <p className="lede">
            Every other tool sits between you and the server. ProdScript removes
            the gap. Setup takes one credential and ends before you notice.
          </p>
        </Reveal>

        <div className="steps">
          {steps.map((s, i) => (
            <StepCard key={s.idx} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
