import { cn } from '@/shared/lib/utils'

interface ImgSlotProps {
  ratio?: '1/1' | '4/5' | '3/4' | '16/9' | '4/3' | '3/2'
  label?: string
  className?: string
}

/* Placeholder slot — ivory bg + hairline + diagonal stripe + caption.
   Hold aspect ratio. Fed with real photo later. */
export default function ImgSlot({ ratio = '4/5', label, className }: ImgSlotProps) {
  return (
    <div
      role="img"
      aria-label={label || 'Image placeholder'}
      className={cn(
        'relative w-full overflow-hidden border border-hair20 bg-bg-soft rounded-lg',
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0 14px, var(--ink) 14px 15px)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
        <span className="text-[11px] italic text-ink-mute">
          {label || 'image — to be supplied'}
        </span>
      </div>
    </div>
  )
}
