import Section from '@/shared/ui/Section'
import SectionHead from '@/shared/ui/SectionHead'
import { CAREER } from '@/shared/data/career'

export default function HomeBackground() {
  return (
    <Section surface="well" id="background">
      <SectionHead
        eyebrow="CAREER CHRONICLE"
        title={
          <>
            Where she has <span className="italic-accent">served.</span>
          </>
        }
        sub="Twenty-five years across academia, the UN system, and the room where policy is turned into something that can actually be deployed."
      />

      <ol className="mt-10 md:mt-14 relative">
        {CAREER.map((entry, i) => (
          <li
            key={i}
            className="relative pl-6 md:pl-8 pb-10 md:pb-12 last:pb-0 border-l border-hair30 ml-2"
          >
            <span
              aria-hidden
              className="absolute -left-[5px] top-1 w-[10px] h-[10px] rounded-full bg-accent ring-4 ring-bg-soft"
            />
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 mb-2">
              <span className="text-[12px] italic text-ink-mute tracking-[0.04em] font-medium">
                {entry.range}
              </span>
              <span className="text-[11px] italic text-accent tracking-[0.08em] uppercase">
                {entry.chapter}
              </span>
            </div>
            <h3 className="font-display font-medium text-[20px] md:text-[24px] leading-[1.2] tracking-[-0.015em] m-0 text-ink">
              {entry.role}
            </h3>
            <p className="mt-1 text-[14px] text-ink-soft m-0">{entry.org}</p>
            <p className="mt-3 text-[14px] md:text-[15px] leading-[1.65] text-ink-soft m-0 max-w-[720px]">
              {entry.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
