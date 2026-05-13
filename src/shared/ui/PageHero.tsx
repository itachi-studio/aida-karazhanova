import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  sub?: ReactNode
}

export default function PageHero({ eyebrow, title, sub }: PageHeroProps) {
  return (
    <section className="relative">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10 pt-16 md:pt-28 pb-12 md:pb-20">
        <p className="text-[11px] italic m-0 mb-4 text-ink-mute tracking-[0.02em]">
          {eyebrow}
        </p>
        <h1 className="font-display font-medium text-[40px] sm:text-[56px] md:text-[68px] leading-[0.98] tracking-[-0.03em] text-balance max-w-[860px] m-0 text-ink">
          {title}
        </h1>
        {sub && (
          <p className="mt-6 max-w-[600px] text-[16px] md:text-[18px] leading-[1.55] m-0 text-ink-soft">
            {sub}
          </p>
        )}
      </div>
    </section>
  )
}
