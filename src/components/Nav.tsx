import { useState } from 'react'
import { Mark } from './Icon'
import { useScrolled } from '../hooks'

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export function Nav({ onDeploy }: { onDeploy: () => void }) {
  const scrolled = useScrolled(8)
  const [open, setOpen] = useState(false)

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="ProdScript — home">
          <Mark />
          <span>Prod<b>Script</b></span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a
            className="ghostlink"
            href="https://github.com/NavidK0/prodscript"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <button className="btn btn-primary btn-sm" onClick={onDeploy}>
            Deploy to prod
          </button>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
