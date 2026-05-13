import { Link } from 'react-router-dom'
import Section from '@/shared/ui/Section'
import SectionHead from '@/shared/ui/SectionHead'
import { PORTFOLIO } from '@/shared/data/portfolio'

export default function HomePortfolioPreview() {
  const featured = PORTFOLIO.slice(0, 3)
  return (
    <Section id="portfolio">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHead
          eyebrow="SELECTED PORTFOLIO"
          title={
            <>
              Built. Adopted. <span className="italic-accent">Shipped.</span>
            </>
          }
          sub="A curated selection of frameworks, tools, and publications that moved from concept to adoption."
        />
        <Link
          to="/portfolio"
          className="text-[14px] text-accent hover:underline underline-offset-4 self-start md:self-end whitespace-nowrap"
        >
          View all →
        </Link>
      </div>

      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {featured.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-4 bg-paper border border-hair20 rounded-lg overflow-hidden"
          >
            <div
              aria-hidden
              className="relative w-full aspect-[16/10] bg-bg-soft overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(135deg, transparent 0 14px, var(--ink) 14px 15px)',
                }}
              />
              <span className="absolute top-3 left-3 text-[10px] italic text-ink-mute bg-paper/80 backdrop-blur-sm px-2 py-1 rounded tracking-[0.06em]">
                {item.tag}
              </span>
            </div>
            <div className="p-5 pt-2 flex flex-col gap-3">
              <h3 className="font-display font-medium text-[18px] leading-[1.2] tracking-[-0.01em] m-0 text-ink">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-ink-soft m-0 line-clamp-3">
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
