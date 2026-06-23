import { stats, type Stat } from '../content'
import { Reveal } from './Reveal'
import { useCountUp, useInView } from '../hooks'

function StatCell({ s }: { s: Stat }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const counting = inView && s.to !== undefined
  const val = useCountUp(s.to ?? 0, counting)
  const text =
    s.display ?? `${s.prefix ?? ''}${Math.round(val)}${s.suffix ?? ''}`

  return (
    <div className="stat" ref={ref}>
      <div className="n">{text}</div>
      <div className="c">{s.label}</div>
    </div>
  )
}

export function Stats() {
  return (
    <section>
      <div className="container">
        <Reveal className="stats">
          {stats.map((s) => (
            <StatCell key={s.label} s={s} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
