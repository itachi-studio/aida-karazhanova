import PageHero from '@/shared/ui/PageHero'
import Section from '@/shared/ui/Section'
import SectionHead from '@/shared/ui/SectionHead'
import Card from '@/shared/ui/Card'
import {
  CORE_CREDENTIALS,
  EXECUTIVE_EDUCATION,
  CREDENTIALS_INTRO,
} from '@/shared/data/credentials'

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        eyebrow="CERTIFICATES"
        title={
          <>
            Credentials & <span className="italic-accent">learning.</span>
          </>
        }
        sub={CREDENTIALS_INTRO}
      />

      <Section>
        <SectionHead eyebrow="CORE" title="Degrees & certifications." />
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CORE_CREDENTIALS.map((c, i) => (
            <CredCard key={i} c={c} />
          ))}
        </div>
      </Section>

      <Section surface="well">
        <SectionHead
          eyebrow="EXECUTIVE EDUCATION"
          title={
            <>
              Continuous <span className="italic-accent">learning.</span>
            </>
          }
        />
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {EXECUTIVE_EDUCATION.map((c, i) => (
            <CredCard key={i} c={c} />
          ))}
        </div>
      </Section>
    </>
  )
}

function CredCard({
  c,
}: {
  c: { institution: string; programme: string; detail: string; year?: string }
}) {
  return (
    <Card variant="paper" className="flex flex-col gap-3 h-full">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] italic text-accent tracking-[0.06em] uppercase font-medium">
          {c.institution}
        </span>
        {c.year && (
          <span className="text-[11px] italic text-ink-mute tracking-[0.04em]">
            {c.year}
          </span>
        )}
      </div>
      <h3 className="font-display font-medium text-[18px] leading-[1.2] tracking-[-0.01em] m-0 text-ink">
        {c.programme}
      </h3>
      <p className="text-[13px] leading-[1.55] text-ink-soft m-0">{c.detail}</p>
    </Card>
  )
}
