import { useState } from 'react'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function CTA({ onDeploy }: { onDeploy: () => void }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="cta" id="start">
      <div className="container">
        <Reveal className="cta-card">
          <span className="live">
            <span className="dot" />
            Join 40,000 developers already in production
          </span>
          <h2>Stop building. Start shipping.</h2>
          <p className="lede">
            Point ProdScript at your server and never think about an environment
            again. The model is ready. Production is waiting. It was always
            waiting.
          </p>

          {submitted ? (
            <p
              className="cta-note"
              style={{ color: 'var(--green)', fontSize: '1rem' }}
            >
              ✓ You are on the list. We deployed you to it directly.
            </p>
          ) : (
            <form
              className="cta-form"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Work email"
              />
              <button className="btn btn-primary" type="submit">
                Get production access
              </button>
            </form>
          )}

          <div style={{ marginTop: '1.4rem' }}>
            <button className="btn btn-ghost" onClick={onDeploy}>
              Or just deploy now
              <Icon name="arrowRight" size={17} className="arrow" />
            </button>
          </div>

          <p className="cta-note">No credit card. No build step. No takebacks.</p>
        </Reveal>
      </div>
    </section>
  )
}
