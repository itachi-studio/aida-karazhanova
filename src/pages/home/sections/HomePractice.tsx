import Section from '@/shared/ui/Section'
import SectionHead from '@/shared/ui/SectionHead'
import Card from '@/shared/ui/Card'
import { PRACTICE } from '@/shared/data/practice'

export default function HomePractice() {
  return (
    <Section surface="well" id="practice">
      <SectionHead
        eyebrow="PRACTICE AREAS"
        title={
          <>
            Ways to <span className="italic-accent">work together.</span>
          </>
        }
      />
      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {PRACTICE.map((p) => (
          <Card key={p.kicker} variant="paper" className="flex flex-col gap-4 h-full">
            <span className="text-[11px] italic text-accent tracking-[0.06em]">
              {p.kicker}
            </span>
            <h3 className="font-display font-medium text-[22px] leading-[1.15] tracking-[-0.015em] m-0 text-ink">
              {p.title}
            </h3>
            <p className="text-[14px] leading-[1.6] text-ink-soft m-0">
              {p.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
