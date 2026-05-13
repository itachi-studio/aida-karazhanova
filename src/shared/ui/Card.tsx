import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface CardProps {
  children: ReactNode
  variant?: 'paper' | 'dark' | 'well'
  className?: string
}

export default function Card({ children, variant = 'paper', className }: CardProps) {
  const surface = {
    paper: 'bg-paper border border-hair20 text-ink',
    dark: 'bg-ink text-white',
    well: 'bg-bg-soft text-ink',
  }[variant]
  return (
    <div
      className={cn(
        'rounded-lg p-6',
        surface,
        variant === 'dark' && 'on-dark',
        className,
      )}
    >
      {children}
    </div>
  )
}
