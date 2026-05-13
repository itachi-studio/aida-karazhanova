import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface SectionProps {
  children: ReactNode
  id?: string
  surface?: 'paper' | 'well' | 'ink'
  compact?: boolean
  className?: string
}

export default function Section({
  children,
  id,
  surface = 'paper',
  compact = false,
  className,
}: SectionProps) {
  const surfaceCls = {
    paper: '',
    well: 'bg-bg-soft',
    ink: 'bg-ink text-white on-dark',
  }[surface]
  const padding = compact ? 'py-12 md:py-16' : 'py-16 md:py-24'
  return (
    <section id={id} className={cn(padding, surfaceCls, className)}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">{children}</div>
    </section>
  )
}
