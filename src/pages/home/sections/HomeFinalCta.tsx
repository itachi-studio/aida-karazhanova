import { CONTACT } from '@/shared/data/contact'
import { LinkButton } from '@/shared/ui/Button'
import SectionHead from '@/shared/ui/SectionHead'

export default function HomeFinalCta() {
  return (
    <section className="bg-ink text-white on-dark">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHead
          onDark
          eyebrow="LET'S TALK"
          title={
            <>
              Conversations on <span className="italic-accent" style={{ color: 'var(--accent-2)' }}>digital transformation,</span> e-resilience, and the projects in between.
            </>
          }
          sub="For governments, international organisations, and individual leaders. Advisory, executive coaching, and engagements that need both high-level communication and technical expertise."
        />
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <LinkButton
            variant="primary"
            size="lg"
            href={CONTACT.emailHref}
            className="w-full sm:w-auto"
          >
            Write
          </LinkButton>
          <LinkButton
            variant="outline"
            size="lg"
            href={CONTACT.phoneHref}
            className="w-full sm:w-auto bg-transparent text-white border-white/25 hover:border-white/45"
          >
            Call · {CONTACT.phone}
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
