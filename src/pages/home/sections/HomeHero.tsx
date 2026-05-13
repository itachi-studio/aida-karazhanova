import { PROFILE } from '@/shared/data/profile'
import ImgSlot from '@/shared/ui/ImgSlot'
import { LinkButton } from '@/shared/ui/Button'
import { CONTACT } from '@/shared/data/contact'

export default function HomeHero() {
  return (
    <section className="relative">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10 pt-12 md:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
          {/* Left — copy */}
          <div className="order-2 md:order-1">
            <p className="text-[11px] italic text-accent mb-5 tracking-[0.08em] uppercase font-medium">
              ◆ {PROFILE.identityLine}
            </p>
            <h1 className="font-display font-medium text-ink m-0 text-[44px] sm:text-[60px] md:text-[80px] leading-[0.95] tracking-[-0.03em] text-balance">
              {PROFILE.name.replace('Dr. ', '')}
            </h1>
            <p className="mt-8 text-[20px] md:text-[26px] leading-[1.25] tracking-[-0.01em] text-ink max-w-[600px]">
              {PROFILE.taglineA}{' '}
              <span className="italic-accent">{PROFILE.taglineB}</span>
            </p>
            <p className="mt-6 text-[15px] md:text-[16px] leading-[1.65] text-ink-soft max-w-[600px]">
              {PROFILE.descriptor}
            </p>

            <div className="mt-10 hair-t pt-6 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 sm:gap-6">
              <span className="text-[11px] italic text-ink-mute tracking-[0.02em]">
                Available for
              </span>
              <p className="text-[14px] leading-[1.6] text-ink-soft m-0">
                {PROFILE.availableFor}
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <LinkButton
                variant="primary"
                size="lg"
                href={CONTACT.emailHref}
                className="w-full sm:w-auto"
              >
                Get in touch
              </LinkButton>
              <LinkButton
                variant="outline"
                size="lg"
                href={CONTACT.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                LinkedIn ↗
              </LinkButton>
            </div>
          </div>

          {/* Right — portrait placeholder */}
          <div className="order-1 md:order-2">
            <ImgSlot ratio="4/5" label="Portrait — to be supplied" />
            <p className="mt-3 text-[11px] italic text-ink-mute">
              {PROFILE.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
