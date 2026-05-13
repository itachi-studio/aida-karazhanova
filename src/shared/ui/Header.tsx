import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { cn } from '@/shared/lib/utils'

interface NavItem {
  to: string
  label: string
}

const NAV: NavItem[] = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/publications', label: 'Publications' },
  { to: '/partners', label: 'Partners & Networks' },
  { to: '/credentials', label: 'Credentials' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkCls =
    'text-[13px] tracking-[0.01em] text-ink-soft hover:text-accent transition-colors'

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-bg/85 backdrop-blur-md border-b border-hair20">
        <nav className="flex justify-between items-center max-w-[1120px] mx-auto px-5 md:px-10 h-14 md:h-16">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="font-display font-medium text-[16px] tracking-[-0.01em] text-ink no-underline flex items-center gap-2"
          >
            <span
              aria-hidden
              className="inline-block w-2 h-2 rounded-full bg-accent"
            />
            <span>A.N. Karazhanova</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cn(linkCls, isActive && 'text-accent')
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center size-10 rounded-lg border border-hair20 bg-paper text-ink"
          >
            {open ? (
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 2l8 8M10 2l-8 8" /></svg>
            ) : (
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M1 1h16M1 6h16M1 11h10" /></svg>
            )}
          </button>
        </nav>
      </header>

      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-bg flex flex-col transition-transform duration-300 ease-out pt-14',
          open ? 'translate-y-0' : '-translate-y-full pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <nav className="flex-1 px-5 pt-4 overflow-y-auto flex flex-col">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              cn(
                'py-[18px] border-b border-hair15',
                'font-display font-medium text-[28px] leading-none tracking-[-0.02em]',
                isActive ? 'text-accent' : 'text-ink',
              )
            }
          >
            Home
          </NavLink>
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'py-[18px] border-b border-hair15 last:border-b-0',
                  'font-display font-medium text-[28px] leading-none tracking-[-0.02em]',
                  isActive ? 'text-accent' : 'text-ink',
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
