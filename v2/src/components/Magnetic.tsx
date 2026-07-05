import { type ReactNode } from 'react'

/**
 * Formerly a magnetic-hover wrapper — the client asked for hover effects
 * without magnetism, so this is now a plain passthrough. Kept as a component
 * so call sites stay untouched.
 */
export default function Magnetic({
  children,
}: {
  children: ReactNode
  strength?: number
}) {
  return <span style={{ display: 'inline-block' }}>{children}</span>
}
