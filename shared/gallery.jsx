// gallery.jsx — Moments section, drops in before Contact in each variant.
// Inherits palette from the variant via CSS vars on the wrapper.

function Moments({ tokens, mobile, title = 'Moments' }) {
  const items = (window.PHOTOS && window.PHOTOS.gallery) || [];
  return (
    <section style={{
      ...tokens,
      background: 'var(--paper)',
      color: 'var(--ink)',
      padding: mobile ? '56px 24px 40px' : '96px 80px 56px',
      borderTop: '1px solid var(--rule)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: mobile ? 24 : 40, flexWrap: 'wrap', gap: 12,
      }}>
        <h2 style={{
          margin: 0, fontFamily: 'var(--serif, var(--sans))',
          fontWeight: 400, fontSize: mobile ? 32 : 48, letterSpacing: '-0.01em',
          color: 'var(--ink)',
        }}>{title}</h2>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--ink-3)',
        }}>{items.length} frames</span>
      </div>

      {mobile ? (
        <div style={{
          display: 'flex', gap: 12, overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          margin: '0 -24px', padding: '0 24px 12px',
          scrollbarWidth: 'thin',
        }}>
          {items.map((p, i) => (
            <figure key={i} style={{
              flex: '0 0 78%', margin: 0, scrollSnapAlign: 'start',
            }}>
              <div style={{
                aspectRatio: '4/5',
                backgroundImage: `url("${p.src}")`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                border: '1px solid var(--rule)',
              }} role="img" aria-label={p.caption} />
              <figcaption style={{
                marginTop: 8, fontFamily: 'var(--mono)', fontSize: 10,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)',
              }}>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }}>
          {items.map((p, i) => (
            <figure key={i} style={{margin: 0}}>
              <div style={{
                aspectRatio: '4/5',
                backgroundImage: `url("${p.src}")`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                border: '1px solid var(--rule)',
              }} role="img" aria-label={p.caption} />
              <figcaption style={{
                marginTop: 10, fontFamily: 'var(--mono)', fontSize: 10,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)',
              }}>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

window.Moments = Moments;
