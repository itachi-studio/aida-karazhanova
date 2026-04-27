// v5-warm.jsx — Soft pastel/serif modern, warm contemporary
// Sage + cream + clay. Fraunces light + Manrope. Generous, rounded, modern editorial.

const V5_TOKENS = {
  '--paper': '#f3eee2',
  '--paper-2': '#e8e3d2',
  '--ink': '#2a2920',
  '--ink-2': '#52503f',
  '--ink-3': '#878470',
  '--rule': '#d4cdb6',
  '--accent': '#6b8a6e',     // sage
  '--accent-2': '#c4865c',   // clay
  '--serif': "'Fraunces', 'Newsreader', Georgia, serif",
  '--sans': "'Manrope', system-ui, sans-serif",
  '--mono': "'IBM Plex Mono', monospace",
};

function V5({ mobile }) {
  return (
    <div style={{...V5_TOKENS, background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'var(--sans)'}}>
      <V5Hero mobile={mobile} />
      <V5Roadmap mobile={mobile} />
      <V5Achievements mobile={mobile} />
      <V5Practice mobile={mobile} />
      <V5FreeFlight mobile={mobile} />
      <V5Press mobile={mobile} />
      <Moments tokens={V5_TOKENS} mobile={mobile} title="Album" />
      <V5Contact mobile={mobile} />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes v5-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes v5-spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
        .v5-blob { animation: v5-float 6s ease-in-out infinite; }
        .v5-spin { animation: v5-spin 30s linear infinite; }
        .v5-card { transition: all 0.4s cubic-bezier(0.2, 0.7, 0.3, 1); }
        .v5-card:hover { transform: translateY(-6px); }
      `}} />
    </div>
  );
}

function V5Blob({ size = 80, color = 'var(--accent)', s = {} }) {
  return (
    <svg className="v5-blob" width={size} height={size} viewBox="0 0 80 80" style={s}>
      <path d="M40 8 C58 8 72 22 72 40 C72 58 58 72 40 72 C22 72 8 58 8 40 C8 22 22 8 40 8 Z"
        fill={color} opacity="0.85"
        style={{filter: 'blur(0.4px)'}} />
    </svg>
  );
}

function V5Hero({ mobile }) {
  return (
    <section style={{padding: mobile ? '24px 24px 64px' : '32px 80px 100px', position: 'relative', overflow: 'hidden'}}>
      {!mobile && <V5Blob size={280} color="var(--accent)" s={{position: 'absolute', top: 80, right: -80, opacity: 0.18}} />}
      {!mobile && <V5Blob size={180} color="var(--accent-2)" s={{position: 'absolute', bottom: 40, left: 40, opacity: 0.15}} />}

      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', marginBottom: mobile ? 48 : 80}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, fontStyle: 'italic'}}>
          <div style={{width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontFamily: 'var(--sans)', fontWeight: 600, fontStyle: 'normal'}}>A</div>
          aida.
        </div>
        {!mobile && <nav style={{display: 'flex', gap: 32, fontSize: 14, fontWeight: 500}}>
          <span>Roadmap</span><span>Work</span><span>Practice</span><span>Contact</span>
        </nav>}
        <button style={{background: 'var(--ink)', color: 'var(--paper)', border: 'none', padding: '12px 22px', borderRadius: 999, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--sans)'}}>
          Say hello →
        </button>
      </header>

      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr', gap: mobile ? 32 : 64, alignItems: 'center', position: 'relative'}}>
        <div>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'var(--paper-2)', borderRadius: 999, fontSize: 12, fontWeight: 500, marginBottom: 28}}>
            <span style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)'}} />
            Available for new projects · 2025
          </div>
          <h1 style={{
            margin: 0, fontFamily: 'var(--serif)', fontWeight: 300,
            fontSize: mobile ? 56 : 124, lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--ink)',
          }}>
            Hi, I'm <span style={{fontStyle: 'italic', color: 'var(--accent)'}}>Aida</span>.
          </h1>
          <p style={{marginTop: mobile ? 24 : 36, fontFamily: 'var(--serif)', fontWeight: 300, fontSize: mobile ? 22 : 30, lineHeight: 1.35, color: 'var(--ink-2)', maxWidth: '24ch'}}>
            <span style={{color: 'var(--accent-2)', fontStyle: 'italic'}}>Regional Architect</span> of Digital Transformation across Asia-Pacific.
          </p>
          <p style={{marginTop: mobile ? 18 : 24, fontSize: mobile ? 15 : 16, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 520}}>
            Twenty-five years between academia, the United Nations system, and the rooms where policy actually gets deployed. Now in independent practice.
          </p>
          <div style={{marginTop: mobile ? 28 : 40, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
            {PROFILE.credentialsList.map((c, i) => (
              <span key={i} style={{padding: '8px 14px', background: 'var(--paper-2)', borderRadius: 999, fontSize: 12, fontWeight: 500, color: 'var(--ink-2)'}}>{c}</span>
            ))}
          </div>
        </div>
        <div style={{position: 'relative'}}>
          <div style={{borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', overflow: 'hidden', boxShadow: '0 30px 80px rgba(42, 41, 32, 0.12)'}}>
            <PhotoSlot src={PHOTOS.hero.warm} caption="Aida N. Karazhanova" ratio="4/5" border="1px solid var(--rule)" />
          </div>
          <div className="v5-spin" style={{position: 'absolute', bottom: -20, right: -20, width: 100, height: 100, fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink)', letterSpacing: '0.18em', textTransform: 'uppercase'}}>
            <svg viewBox="0 0 100 100" width="100" height="100">
              <defs><path id="v5circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" /></defs>
              <text fill="currentColor" fontSize="10" letterSpacing="2">
                <textPath href="#v5circle">free flight · est. 2025 · free flight · est. 2025 · </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function V5SectionHead({ n, kicker, title, italics, subtitle, mobile }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 14, marginBottom: mobile ? 36 : 64}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, fontWeight: 500, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em'}}>
        <span style={{padding: '4px 10px', background: 'var(--paper-2)', borderRadius: 999}}>{n}</span>
        <span>{kicker}</span>
      </div>
      <h2 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 300, fontSize: mobile ? 40 : 76, lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--ink)', maxWidth: '18ch'}}>
        {title} {italics && <span style={{fontStyle: 'italic', color: 'var(--accent)'}}>{italics}</span>}
      </h2>
      {subtitle && <p style={{margin: 0, fontSize: mobile ? 15 : 18, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: 580}}>{subtitle}</p>}
    </div>
  );
}

function V5Roadmap({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px', background: 'var(--paper-2)', borderTop: '1px solid var(--rule)'}}>
      <V5SectionHead n="01" kicker="The journey" title="A long," italics="winding path."
        subtitle="From a Kazakh biochemistry lab to ESCAP in Bangkok, then back to my own studio. Each chapter has its own weather."
        mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: mobile ? 16 : 24}}>
        {MILESTONES.map((m, i) => (
          <article key={i} className="v5-card" style={{
            background: m.expanded ? 'var(--accent)' : 'var(--paper)',
            color: m.expanded ? 'var(--paper)' : 'var(--ink)',
            borderRadius: 24, padding: mobile ? 24 : 32,
            display: 'flex', flexDirection: 'column', gap: 14,
            boxShadow: '0 4px 20px rgba(42,41,32,0.06)',
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, fontWeight: 500, opacity: 0.8}}>
              <span>{m.range}</span>
              <span style={{
                width: 28, height: 28, borderRadius: '50%',
                background: m.expanded ? 'rgba(255,255,255,0.2)' : 'var(--paper-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600,
              }}>{i+1}</span>
            </div>
            <div style={{fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: m.expanded ? 'rgba(255,255,255,0.7)' : 'var(--accent-2)'}}>{m.chapter}</div>
            <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 300, fontSize: mobile ? 24 : 32, lineHeight: 1.1, letterSpacing: '-0.01em'}}>{m.role}</h3>
            <div style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: mobile ? 14 : 16, opacity: 0.8}}>{m.org}</div>
            <p style={{margin: 0, fontSize: mobile ? 13.5 : 14, lineHeight: 1.65, opacity: 0.9}}>{m.outcome}</p>
            <div style={{marginTop: 'auto', paddingTop: 12, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.6}}>📍 {m.place}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function V5Achievements({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px'}}>
      <V5SectionHead n="02" kicker="Selected work" title="Things I've" italics="actually built."
        subtitle="The shortlist. Each adopted, deployed, or referenced — never just authored."
        mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(6, 1fr)', gap: mobile ? 16 : 20}}>
        {ACHIEVEMENTS.map((a, i) => {
          const span = [3,3,2,2,4,2][i];
          const pal = ['var(--paper)', 'var(--paper-2)', 'var(--accent)', 'var(--paper-2)', 'var(--accent-2)', 'var(--paper)'][i];
          const isAccent = i === 2 || i === 4;
          return (
            <article key={i} className="v5-card" style={{
              gridColumn: mobile ? 'auto' : `span ${span}`,
              background: pal, color: isAccent ? '#fff' : 'var(--ink)',
              borderRadius: 24, padding: mobile ? 24 : 32, minHeight: mobile ? 'auto' : 280,
              display: 'flex', flexDirection: 'column', gap: 12,
              boxShadow: '0 4px 20px rgba(42,41,32,0.06)',
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: isAccent ? 0.85 : 0.7}}>
                <span>{a.kicker}</span><span>{String(i+1).padStart(2,'0')} / 06</span>
              </div>
              <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 300, fontSize: span >= 3 ? (mobile ? 26 : 36) : (mobile ? 22 : 24), lineHeight: 1.1, letterSpacing: '-0.015em'}}>{a.title}</h3>
              <p style={{margin: 0, fontSize: mobile ? 13.5 : 14, lineHeight: 1.65, opacity: isAccent ? 0.9 : 0.85}}>{a.body}</p>
              {a.countries && <div style={{marginTop: 'auto', display: 'flex', gap: 6, paddingTop: 12}}>
                {a.countries.map((c,j) => <span key={j} style={{padding: '6px 10px', background: isAccent ? 'rgba(255,255,255,0.2)' : 'var(--paper)', borderRadius: 999, fontSize: 10.5, fontWeight: 600, letterSpacing: '0.06em'}}>{c}</span>)}
              </div>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function V5Practice({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px', background: 'var(--paper-2)'}}>
      <V5SectionHead n="03" kicker="How we work" title="Three ways" italics="to begin." mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 20 : 28}}>
        {PRACTICE.map((p, i) => (
          <div key={i} className="v5-card" style={{
            background: 'var(--paper)', borderRadius: 24, padding: mobile ? 24 : 32,
            display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 4px 20px rgba(42,41,32,0.06)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: i === 1 ? 'var(--accent-2)' : 'var(--accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: '#fff', fontWeight: 400,
            }}>{p.kicker}</div>
            <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 300, fontSize: mobile ? 24 : 28, lineHeight: 1.15, letterSpacing: '-0.015em'}}>{p.title}</h3>
            <p style={{margin: 0, fontSize: mobile ? 14 : 14.5, lineHeight: 1.7, color: 'var(--ink-2)'}}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function V5FreeFlight({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px', position: 'relative', overflow: 'hidden'}}>
      {!mobile && <V5Blob size={200} color="var(--accent)" s={{position: 'absolute', top: 60, right: 80, opacity: 0.15}} />}
      <V5SectionHead n="04" kicker="Right now" title="Free" italics="Flight."
        subtitle="The current chapter — independent, available, and curious about what's next."
        mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 20 : 28, position: 'relative'}}>
        {FREE_FLIGHT.map((f, i) => (
          <article key={i} className="v5-card" style={{
            background: i === 2 ? 'var(--ink)' : 'var(--paper-2)',
            color: i === 2 ? 'var(--paper)' : 'var(--ink)',
            borderRadius: 24, padding: mobile ? 24 : 30,
            display: 'flex', flexDirection: 'column', gap: 14, minHeight: mobile ? 'auto' : 320,
            boxShadow: '0 4px 20px rgba(42,41,32,0.06)',
          }}>
            <div style={{fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: i === 2 ? 'var(--accent-2)' : 'var(--accent)'}}>{f.tag}</div>
            <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 26, lineHeight: 1.15, letterSpacing: '-0.01em'}}>{f.title}</h3>
            {f.quote ? <p style={{margin: 0, fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 16, lineHeight: 1.55, opacity: 0.95}}>"{f.quote}"</p> : f.body && <p style={{margin: 0, fontSize: 14, lineHeight: 1.65, opacity: 0.85}}>{f.body}</p>}
            {f.placeholder && <p style={{margin: 0, marginTop: 'auto', fontFamily: 'var(--mono)', fontSize: 10.5, opacity: 0.55, paddingTop: 14, borderTop: i === 2 ? '1px dashed rgba(255,255,255,0.25)' : '1px dashed var(--rule)'}}>[ {f.placeholder} ]</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function V5Press({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px', background: 'var(--paper-2)'}}>
      <V5SectionHead n="05" kicker="On record" title="Things I've" italics="written." mobile={mobile} />
      <div style={{background: 'var(--paper)', borderRadius: 24, padding: mobile ? 16 : 24, boxShadow: '0 4px 20px rgba(42,41,32,0.06)'}}>
        {PRESS.map((p, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: mobile ? '60px 1fr' : '90px 1fr 1fr 30px',
            gap: mobile ? 16 : 24, padding: mobile ? '18px 8px' : '20px 12px',
            borderBottom: i < PRESS.length - 1 ? '1px solid var(--rule)' : 'none',
            alignItems: 'center', borderRadius: 12,
          }}>
            <div style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: mobile ? 18 : 20, color: 'var(--accent-2)'}}>{p.year}</div>
            <div style={{fontFamily: 'var(--serif)', fontWeight: 300, fontSize: mobile ? 17 : 22, letterSpacing: '-0.005em'}}>{p.label}</div>
            {!mobile && <div style={{textAlign: 'right', fontSize: 12, fontWeight: 500, color: 'var(--ink-3)'}}>{p.org}</div>}
            {!mobile && <div style={{textAlign: 'right', fontSize: 16, color: 'var(--accent)'}}>↗</div>}
            {mobile && <div style={{gridColumn: '2', fontSize: 11, fontWeight: 500, color: 'var(--ink-3)', marginTop: -4}}>{p.org}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function V5Contact({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 56px' : '120px 80px 80px', position: 'relative', overflow: 'hidden'}}>
      {!mobile && <V5Blob size={240} color="var(--accent-2)" s={{position: 'absolute', bottom: -60, right: 80, opacity: 0.18}} />}
      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 80, alignItems: 'start'}}>
        <div>
          <div style={{display: 'inline-block', padding: '6px 14px', background: 'var(--paper-2)', borderRadius: 999, fontSize: 12, fontWeight: 500, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24}}>06 · Contact</div>
          <h2 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 300, fontSize: mobile ? 44 : 88, lineHeight: 1.0, letterSpacing: '-0.025em', color: 'var(--ink)'}}>
            Let's <span style={{fontStyle: 'italic', color: 'var(--accent)'}}>chat.</span>
          </h2>
          <p style={{marginTop: 24, fontFamily: 'var(--serif)', fontWeight: 300, fontSize: mobile ? 18 : 22, lineHeight: 1.45, color: 'var(--ink-2)', maxWidth: 420}}>
            For advisory, coaching, or simply a considered conversation. A note is enough.
          </p>
        </div>
        <div style={{paddingTop: mobile ? 0 : 36, display: 'flex', flexDirection: 'column', gap: 12}}>
          {[['Work', CONTACT.phone], ['Email', CONTACT.email, true], ['LinkedIn', CONTACT.linkedin, false, CONTACT.linkedinUrl], ['Based', CONTACT.location]].map(([label, value, placeholder, link], i) => (
            <div key={i} style={{
              padding: 22, background: 'var(--paper-2)', borderRadius: 18,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
            }}>
              <div>
                <div style={{fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6}}>{label}</div>
                {link ? <a href={link} style={{fontFamily: 'var(--serif)', fontSize: mobile ? 17 : 20, color: 'var(--ink)', textDecoration: 'none'}}>{value}</a> :
                  <div style={{fontFamily: 'var(--serif)', fontWeight: 300, fontSize: mobile ? 18 : 22, color: placeholder ? 'var(--ink-3)' : 'var(--ink)', fontStyle: placeholder ? 'italic' : 'normal'}}>{value}</div>}
              </div>
              <span style={{fontSize: 18, color: 'var(--accent)'}}>→</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{marginTop: mobile ? 56 : 96, paddingTop: 24, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11, fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
        <span>© Aida N. Karazhanova · 2026</span>
        <span>v5 · Warm</span>
        <span>↑ Top</span>
      </div>
    </section>
  );
}

Object.assign(window, { V5 });
