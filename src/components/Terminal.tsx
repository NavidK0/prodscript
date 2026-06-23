import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { TermToken } from '../content'
import { prefersReducedMotion } from '../hooks'

type Props = {
  title: ReactNode
  lines: TermToken[][]
  speed?: number
  start?: boolean
  onDone?: () => void
}

/** A faux terminal that streams log lines one at a time, with a blinking caret. */
export function Terminal({ title, lines, speed = 420, start = true, onDone }: Props) {
  const [visible, setVisible] = useState(0)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    if (!start) {
      setVisible(0)
      return
    }
    if (prefersReducedMotion()) {
      setVisible(lines.length)
      onDoneRef.current?.()
      return
    }
    let i = 0
    let timer = 0
    setVisible(0)
    const step = () => {
      i += 1
      setVisible(i)
      if (i < lines.length) {
        timer = window.setTimeout(step, speed)
      } else {
        onDoneRef.current?.()
      }
    }
    timer = window.setTimeout(step, speed)
    return () => window.clearTimeout(timer)
  }, [start, lines, speed])

  return (
    <div className="terminal">
      <div className="term-bar">
        <div className="term-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="term-title">{title}</span>
        <span className="term-status">
          <span className="live">
            <span className="dot" />
            live
          </span>
        </span>
      </div>
      <div className="term-body">
        {lines.slice(0, visible).map((line, li) => (
          <span className="term-line" key={li}>
            {line.map((tok, ti) => (
              <span className={tok.c} key={ti}>
                {tok.t}
              </span>
            ))}
            {li === visible - 1 && <span className="cursor" />}
          </span>
        ))}
      </div>
    </div>
  )
}
