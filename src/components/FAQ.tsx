import { useState } from 'react'
import { faqs } from '../content'
import { Reveal } from './Reveal'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-grid">
          <Reveal className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Questions, briefly</span>
            <h2 className="h2">You have concerns. They are also features.</h2>
            <p className="lede">
              If something here alarms you, that alarm is working exactly as
              designed.
            </p>
          </Reveal>

          <div className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div className={`faq-item${isOpen ? ' open' : ''}`} key={f.q}>
                  <button
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {f.q}
                    <span className="pm" aria-hidden="true" />
                  </button>
                  <div className="faq-a" style={{ maxHeight: isOpen ? 360 : 0 }}>
                    <div>{f.a}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
