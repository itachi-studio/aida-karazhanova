import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface SectionHeadProps {
  eyebrow?: string
  title: ReactNode
  sub?: ReactNode
  onDark?: boolean
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHead({
  eyebrow,
  title,
  sub,
  onDark = false,
  align = 'left',
  className,
}: SectionHeadProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <p
          className={cn(
            'text-[11px] italic mb-2 m-0 tracking-[0.02em]',
            onDark ? 'text-white/60' : 'text-ink-mute',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display font-medium m-0 text-balance text-[28px] sm:text-[32px] md:text-[40px] leading-[1.05] tracking-[-0.025em]',
          onDark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            'mt-3 text-[15px] leading-[1.6] max-w-[640px]',
            align === 'center' && 'mx-auto',
            onDark ? 'text-white/70' : 'text-ink-soft',
          )}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
