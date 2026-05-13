import PageHero from '@/shared/ui/PageHero'
import Section from '@/shared/ui/Section'
import { CONTACT } from '@/shared/data/contact'

const rows: { label: string; value: string; href?: string; external?: boolean }[] = [
  { label: 'WORK', value: CONTACT.phone, href: CONTACT.phoneHref },
  { label: 'EMAIL', value: CONTACT.email, href: CONTACT.emailHref },
  {
    label: 'LINKEDIN',
    value: CONTACT.linkedin,
    href: CONTACT.linkedinUrl,
    external: true,
  },
  { label: 'BASED', value: CONTACT.location },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={
          <>
            Let's <span className="italic-accent">talk.</span>
          </>
        }
        sub="Conversations with governments, international organisations, and individual leaders working on digital transformation, e-resilience, and digital public services for SMEs — and executive coaching for those navigating complex transitions of their own."
      />
      <Section>
        <dl className="hair-t">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[100px_1fr] md:grid-cols-[160px_1fr] gap-4 md:gap-8 py-5 md:py-6 border-b border-hair20 items-baseline"
            >
              <dt className="text-[11px] italic text-ink-mute tracking-[0.08em] uppercase">
                {r.label}
              </dt>
              <dd className="m-0 text-[16px] md:text-[20px] text-ink leading-[1.4]">
                {r.href ? (
                  <a
                    href={r.href}
                    target={r.external ? '_blank' : undefined}
                    rel={r.external ? 'noopener noreferrer' : undefined}
                    className="text-ink hover:text-accent transition-colors no-underline border-b border-dotted border-hair30 hover:border-accent"
                  >
                    {r.value}
                    {r.external && ' ↗'}
                  </a>
                ) : (
                  <span>{r.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
