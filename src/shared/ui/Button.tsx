import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost' | 'link'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const variantCls: Record<Variant, string> = {
  primary: 'bg-accent text-white border-accent hover:bg-accent/90',
  outline: 'bg-paper text-ink border-hair30 hover:border-ink-mute',
  ghost: 'text-ink hover:bg-bg-soft border-transparent',
  link: 'text-accent underline underline-offset-4 hover:opacity-80 border-transparent px-0 h-auto',
}
const sizeCls: Record<Size, string> = {
  sm: 'h-8 px-3 text-[13px]',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-[15px]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg border font-medium whitespace-nowrap transition-colors cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-accent-2/35',
        variantCls[variant],
        variant === 'link' ? '' : sizeCls[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

interface LinkBtnProps extends ComponentProps<'a'> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: LinkBtnProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg border font-medium whitespace-nowrap transition-colors no-underline outline-none focus-visible:ring-[3px] focus-visible:ring-accent-2/35',
        variantCls[variant],
        sizeCls[size],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
