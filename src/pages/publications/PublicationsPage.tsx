import PageHero from '@/shared/ui/PageHero'
import Section from '@/shared/ui/Section'
import { PUBLICATIONS } from '@/shared/data/publications'
import { CONTACT } from '@/shared/data/contact'

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="ON RECORD"
        title={
          <>
            Papers & <span className="italic-accent">publications.</span>
          </>
        }
        sub="Peer-reviewed and institutional publications informing regional policy agendas across sustainable development, water resilience, and digital transformation."
      />
      <Section>
        <div className="hair-t">
          {PUBLICATIONS.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-[64px_1fr] md:grid-cols-[100px_1fr_200px_140px] gap-3 md:gap-6 py-5 md:py-6 border-b border-hair20 items-baseline"
            >
              <span className="text-[14px] md:text-[16px] font-display font-medium text-ink tabular-nums">
                {p.year}
              </span>
              <div className="text-[15px] md:text-[16px] leading-[1.5] text-ink m-0">
                {p.title}
                <span className="md:hidden block mt-1 text-[12px] italic text-ink-mute">
                  {p.org} · {p.role}
                </span>
              </div>
              <span className="hidden md:block text-[13px] text-ink-soft">
                {p.org}
              </span>
              <span className="hidden md:block text-[12px] italic text-ink-mute">
                {p.role}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[14px] italic text-ink-mute">
          Additional publications available via{' '}
          <a
            href={CONTACT.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-4"
          >
            LinkedIn ↗
          </a>
          .
        </p>
      </Section>
    </>
  )
}
