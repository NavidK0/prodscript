import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

/** Wraps content in a div that fades/slides in when scrolled into view. */
export function Reveal({ children, className = '', delay = 0, style }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal${inView ? ' in' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
