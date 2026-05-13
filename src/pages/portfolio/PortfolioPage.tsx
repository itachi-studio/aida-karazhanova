import PageHero from '@/shared/ui/PageHero'
import Section from '@/shared/ui/Section'
import ImgSlot from '@/shared/ui/ImgSlot'
import { PORTFOLIO } from '@/shared/data/portfolio'

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="PORTFOLIO"
        title={
          <>
            Built. Adopted. <span className="italic-accent">Shipped.</span>
          </>
        }
        sub="A curated selection of frameworks, tools, and publications that moved from concept to adoption."
      />
      <Section>
        <div className="flex flex-col gap-10 md:gap-16">
          {PORTFOLIO.map((item, idx) => (
            <article
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-12 pb-10 md:pb-16 border-b border-hair20 last:border-b-0 last:pb-0"
            >
              <div>
                <ImgSlot ratio="4/3" label="Cover — to be supplied" />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] italic text-ink-mute tracking-[0.04em] font-medium">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-accent font-medium">
                    {item.tag}
                  </span>
                </div>
                <h2 className="font-display font-medium text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em] m-0 text-ink">
                  {item.title}
                </h2>
                <p className="text-[15px] md:text-[16px] leading-[1.65] text-ink-soft m-0">
                  {item.summary}
                </p>
                <dl className="mt-2 grid grid-cols-1 gap-4 text-[14px]">
                  <div className="grid grid-cols-[110px_1fr] gap-3 border-t border-hair15 pt-3">
                    <dt className="text-[11px] italic text-ink-mute tracking-[0.04em] pt-0.5">
                      Relevance
                    </dt>
                    <dd className="text-ink-soft leading-[1.6] m-0">
                      {item.relevance}
                    </dd>
                  </div>
                  <div className="grid grid-cols-[110px_1fr] gap-3 border-t border-hair15 pt-3">
                    <dt className="text-[11px] italic text-ink-mute tracking-[0.04em] pt-0.5">
                      Impact
                    </dt>
                    <dd className="text-ink-soft leading-[1.6] m-0">
                      {item.impact}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
