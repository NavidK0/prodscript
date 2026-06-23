import { Mark } from './Icon'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand" href="#top" aria-label="ProdScript — home">
              <Mark />
              <span>Prod<b>Script</b></span>
            </a>
            <p className="tagline">
              The best way to build. Everything else is latency.
            </p>
          </div>

          <div className="footer-col">
            <h5>Product</h5>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#pricing">Concierge</a>
            <a href="#manifesto">Manifesto</a>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <a href="#">Documentation</a>
            <a href="#">
              Status <span className="st">● up, probably</span>
            </a>
            <a href="#">Changelog (it is the server)</a>
            <a
              href="https://github.com/NavidK0/prodscript"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Careers (the model is not hiring)</a>
            <a href="#">Terms (there are none)</a>
            <a href="#">Privacy (it is in prod)</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ProdScript. Shipped directly to prod.</span>
          <span>
            Built with <span className="accent">&lt;3</span> using React and
            TypeScript
          </span>
        </div>
      </div>
    </footer>
  )
}
