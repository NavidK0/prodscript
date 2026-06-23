import { testimonials, type Quote } from '../content'
import { Reveal } from './Reveal'
import { useInView } from '../hooks'

function QuoteCard({ q, i }: { q: Quote; i: number }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <figure
      ref={ref}
      className={`quote reveal${inView ? ' in' : ''}`}
      style={{ transitionDelay: `${(i % 3) * 80}ms` }}
    >
      <blockquote>
        <p>{q.quote}</p>
      </blockquote>
      <figcaption className="by">
        <span className="av" aria-hidden="true">
          {q.initials}
        </span>
        <span className="meta">
          <b>{q.name}</b>
          <span>{q.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section id="wall">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">From production</span>
          <h2 className="h2">
            Loved by teams who no longer have a staging environment.
          </h2>
        </Reveal>

        <div className="quotes">
          {testimonials.map((q, i) => (
            <QuoteCard key={q.name} q={q} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
