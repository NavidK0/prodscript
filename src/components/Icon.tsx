import type { ReactNode } from 'react'

// Stroke-based icon set (lucide-flavored), drawn on a 24x24 grid.
const paths = {
  bolt: <path d="M13 2 4 14h6l-1 8 8-12h-6z" />,
  shieldOff: (
    <>
      <path d="M12 22c5-2 8-5 8-9V6l-8-3-5 1.9" />
      <path d="M5 6.6V13c0 4 3 7 7 9" />
      <path d="m3 3 18 18" />
    </>
  ),
  infinity: (
    <path d="M6.5 9a3.5 3.5 0 1 0 0 6c2 0 3-1.5 5.5-4s3.5-4 5.5-4a3.5 3.5 0 1 1 0 6c-2 0-3-1.5-5.5-4S8.5 9 6.5 9Z" />
  ),
  sparkles: (
    <>
      <path d="M12 4.5 13.6 9 18 10.5 13.6 12 12 16.5 10.4 12 6 10.5 10.4 9z" />
      <path d="M18.5 15.2l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
    </>
  ),
  gitBranch: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="9" r="2.5" />
      <path d="M6 8.5v7" />
      <path d="M18 11.5c0 3.2-3.4 3-6 4.5" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.6" />
      <rect x="3" y="13" width="18" height="7" rx="1.6" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  rotate: (
    <>
      <path d="M3 12a9 9 0 1 0 2.6-6.3L3 8" />
      <path d="M3 3v5h5" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  x: <path d="M18 6 6 18M6 6l12 12" />,
  minus: <path d="M5 12h14" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: IconName
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

// Brand mark: a dark "production" tile, a red deploy chevron, a live dot.
export function Mark({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="mark"
    >
      <rect
        x="1"
        y="1"
        width="26"
        height="26"
        rx="7.5"
        fill="#0e1116"
        stroke="rgba(255,255,255,0.14)"
      />
      <path
        d="M9.5 9.5 14 14l-4.5 4.5"
        stroke="#ff4438"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19.5" cy="8.6" r="2.1" fill="#ff4438" />
    </svg>
  )
}
