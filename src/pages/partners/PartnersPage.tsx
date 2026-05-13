import PageHero from '@/shared/ui/PageHero'
import Section from '@/shared/ui/Section'
import SectionHead from '@/shared/ui/SectionHead'
import Card from '@/shared/ui/Card'
import { CONVENING, BOARDS, PROJECTS_IN_MOTION } from '@/shared/data/partners'

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="PARTNERS & NETWORKS"
        title={
          <>
            Where she <span className="italic-accent">convenes.</span>
          </>
        }
        sub="Committees, working groups, and advisory boards across the UN system and Asia-Pacific regional cooperation."
      />

      <Section>
        <SectionHead
          eyebrow="CONVENING"
          title="Committees & working groups."
        />
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {CONVENING.map((c, i) => (
            <Card key={i} variant="paper" className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] m-0 text-ink">
                {c.title}
              </h3>
              <p className="text-[13px] italic text-accent m-0">{c.org}</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft m-0">
                {c.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section surface="well">
        <SectionHead
          eyebrow="STILL ON THE BOARDS"
          title="Where she serves."
        />
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {BOARDS.map((b, i) => (
            <Card key={i} variant="paper" className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] m-0 text-ink">
                {b.title}
              </h3>
              <p className="text-[13px] italic text-accent m-0">{b.org}</p>
              {b.body && (
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft m-0">
                  {b.body}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="PROJECTS IN MOTION"
          title={
            <>
              What is being <span className="italic-accent">built.</span>
            </>
          }
        />
        <p className="mt-6 text-[15px] italic text-ink-mute max-w-[560px]">
          {PROJECTS_IN_MOTION.intro}
        </p>
      </Section>
    </>
  )
}
