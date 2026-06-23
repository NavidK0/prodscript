import { useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Logos } from './components/Logos'
import { Steps } from './components/Steps'
import { Features } from './components/Features'
import { Comparison } from './components/Comparison'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Manifesto } from './components/Manifesto'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { DeployOverlay } from './components/DeployOverlay'

function App() {
  // Opens automatically on the /#deploy deep-link; otherwise via any CTA.
  const [deployOpen, setDeployOpen] = useState(
    () => typeof window !== 'undefined' && window.location.hash === '#deploy',
  )
  const openDeploy = () => setDeployOpen(true)

  return (
    <>
      <div className="atmosphere" aria-hidden="true" />
      <div className="grid-lines" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="page">
        <Nav onDeploy={openDeploy} />
        <main>
          <Hero onDeploy={openDeploy} />
          <Logos />
          <Steps />
          <Features />
          <Comparison />
          <Stats />
          <Testimonials />
          <Pricing onDeploy={openDeploy} />
          <Manifesto />
          <FAQ />
          <CTA onDeploy={openDeploy} />
        </main>
        <Footer />
      </div>

      <DeployOverlay open={deployOpen} onClose={() => setDeployOpen(false)} />
    </>
  )
}

export default App
