import { useEffect, useState } from 'react'
import { Terminal } from './Terminal'
import { deployLog } from '../content'
import { useLockBody } from '../hooks'

type Props = { open: boolean; onClose: () => void }

/** Full-screen "Deploy to Production" sequence — fast, irreversible, on-brand. */
export function DeployOverlay({ open, onClose }: Props) {
  const [done, setDone] = useState(false)
  useLockBody(open)

  useEffect(() => {
    if (!open) {
      setDone(false)
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Deploying to production"
      onClick={onClose}
    >
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <Terminal
          title={
            <>
              root@<span className="host">prod.northwind.io</span> — deploy
            </>
          }
          lines={deployLog}
          speed={230}
          start={open}
          onDone={() => setDone(true)}
        />
        <div className="overlay-foot">
          {done ? (
            <span className="done">✓ deployed to production — no undo, no backup, no notes</span>
          ) : (
            <span className="done" style={{ color: 'var(--text-3)' }}>
              writing to production…
            </span>
          )}
          <span className="spacer" />
          <button className="iconbtn" onClick={onClose}>
            {done ? 'Close' : 'Stop watching'}
          </button>
        </div>
      </div>
    </div>
  )
}
