import { Reveal } from './Reveal'

export function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="container">
        <Reveal className="wrap">
          <p>
            <span className="q">
              For decades we added layers between the idea and the machine.
            </span>{' '}
            Compilers. Bundlers. Linters. Type systems. Review. Tests. Staging.
            Each one promised safety and delivered <em>latency</em>. ProdScript
            removes every layer until only three things remain: the idea, the
            model, and <em>production</em>. This is not recklessness. This is{' '}
            <em>focus</em>.
          </p>
          <div className="sig">
            — The ProdScript Manifesto, written directly to prod
          </div>
        </Reveal>
      </div>
    </section>
  )
}
