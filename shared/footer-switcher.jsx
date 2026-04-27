// footer-switcher.jsx — temporary nav between the 5 design variants.
// Sits below the variant content. Neutral palette so it doesn't clash with any variant.

const VARIANT_LINKS = [
  { id: 'editorial',  label: 'I · Editorial',  href: '/editorial'  },
  { id: 'diplomatic', label: 'II · Diplomatic', href: '/diplomatic' },
  { id: 'bold',       label: 'III · Bold',     href: '/bold'       },
  { id: 'swiss',      label: 'IV · Swiss',     href: '/swiss'      },
  { id: 'warm',       label: 'V · Warm',       href: '/warm'       },
];

function FooterSwitcher({ current }) {
  return (
    <footer style={{
      background: '#111',
      color: '#fff',
      padding: '40px 24px 56px',
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      borderTop: '1px solid #222',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
        }}>
          Aida N. Karazhanova · 5 design variants · preview
        </span>

        <nav style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6,
          padding: 6,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 999,
        }}>
          {VARIANT_LINKS.map(v => {
            const active = v.id === current;
            return (
              <a key={v.id} href={v.href} style={{
                padding: '8px 14px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase',
                borderRadius: 999,
                textDecoration: 'none',
                background: active ? '#fff' : 'transparent',
                color: active ? '#111' : 'rgba(255,255,255,0.65)',
                transition: 'background 0.18s, color 0.18s',
                whiteSpace: 'nowrap',
              }}>
                {v.label}
              </a>
            );
          })}
        </nav>

        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10, letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.4)',
        }}>
          Switcher is temporary — pick one and we will ship it.
        </span>
      </div>
    </footer>
  );
}

window.FooterSwitcher = FooterSwitcher;
