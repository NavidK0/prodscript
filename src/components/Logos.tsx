import { logos } from '../content'

export function Logos() {
  // Duplicate the row so the marquee can loop seamlessly (-50% translate).
  const row = [...logos, ...logos]

  return (
    <section className="logos" aria-label="Teams already in production">
      <div className="container">
        <p>Teams shipping at the speed of thought</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((l, i) => (
            <span className="logo-item" key={i}>
              <span className="glyph" aria-hidden="true">
                {l.glyph}
              </span>
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
