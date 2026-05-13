import { NavLink } from 'react-router-dom'
import { CONTACT } from '@/shared/data/contact'
import { PROFILE } from '@/shared/data/profile'

const NAV = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/publications', label: 'Publications' },
  { to: '/partners', label: 'Partners & Networks' },
  { to: '/credentials', label: 'Credentials' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const linkCls = 'text-white/85 hover:text-white transition-colors'
  const colHead = 'text-[11px] italic text-white/55 mb-3 tracking-[0.02em]'

  return (
    <footer className="w-full bg-ink text-white on-dark">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pb-8 border-b border-white/15">
          <div className="col-span-2">
            <div className="font-display font-medium text-[20px] tracking-[-0.01em]">
              {PROFILE.shortName}
            </div>
            <p className="mt-3 text-[14px] leading-[1.6] text-white/70 max-w-[360px]">
              {PROFILE.identityLine}.
            </p>
            <p className="mt-3 text-[12px] italic text-white/55">
              {CONTACT.location}
            </p>
          </div>

          <div>
            <div className={colHead}>navigate</div>
            <div className="flex flex-col gap-2 text-[14px]">
              {NAV.map((l) => (
                <NavLink key={l.to} to={l.to} className={linkCls}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <div className={colHead}>contact</div>
            <div className="flex flex-col gap-2 text-[14px]">
              <a href={CONTACT.phoneHref} className={linkCls}>
                {CONTACT.phone}
              </a>
              <a href={CONTACT.emailHref} className={linkCls}>
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] italic text-white/55">
          <div>© {new Date().getFullYear()} {PROFILE.name}</div>
          <div>{CONTACT.location}</div>
        </div>
      </div>
    </footer>
  )
}
