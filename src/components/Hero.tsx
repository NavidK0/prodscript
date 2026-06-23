import { Icon } from './Icon'
import { Terminal } from './Terminal'
import { heroLog, heroMeta } from '../content'

export function Hero({ onDeploy }: { onDeploy: () => void }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="live">
            <span className="dot" />
            Live in production
          </span>

          <h1>
            Production is the only <span className="em">environment</span> that
            matters.
          </h1>

          <p className="lede">
            ProdScript wires your model straight to your server over SFTP and
            writes HTML, CSS, and JavaScript directly to prod. No build. No
            types. No staging. <strong>The best way to build.</strong>
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary btn-lg" onClick={onDeploy}>
              Connect to production
              <Icon name="arrowRight" size={18} className="arrow" />
            </button>
            <a className="btn btn-ghost btn-lg" href="#manifesto">
              Read the manifesto
            </a>
          </div>

          <div className="hero-meta">
            {heroMeta.map((m) => (
              <div className="m" key={m.lbl}>
                <span className="num">{m.num}</span>
                <span className="lbl">{m.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        <Terminal
          title={
            <>
              root@<span className="host">prod.northwind.io</span>
            </>
          }
          lines={heroLog}
          speed={460}
        />
      </div>
    </section>
  )
}
