// v3-bold.jsx — Virgin / red bold modern
// Pure white + signal red + black. Manrope 800 display. Tight grid, horizontal cartography roadmap.

const V3_TOKENS = {
  '--paper': '#ffffff',
  '--paper-2': '#f5f5f5',
  '--ink': '#0a0a0a',
  '--ink-2': '#3a3a3a',
  '--ink-3': '#8a8a8a',
  '--rule': '#e0e0e0',
  '--accent': '#e30613',
  '--accent-2': '#0a0a0a',
  '--sans': "'Manrope', system-ui, sans-serif",
  '--mono': "'IBM Plex Mono', monospace",
};

function V3({ mobile }) {
  return (
    <div style={{...V3_TOKENS, background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'var(--sans)'}}>
      <V3Hero mobile={mobile} />
      <V3Roadmap mobile={mobile} />
      <V3Achievements mobile={mobile} />
      <V3Practice mobile={mobile} />
      <V3FreeFlight mobile={mobile} />
      <V3Press mobile={mobile} />
      <Moments tokens={V3_TOKENS} mobile={mobile} title="MOMENTS" />
      <V3Contact mobile={mobile} />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes v3-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes v3-fade-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .v3-marquee-track { animation: v3-marquee 40s linear infinite; }
        .v3-fade { animation: v3-fade-up 0.8s cubic-bezier(0.2, 0.7, 0.3, 1) both; }
        .v3-card { transition: transform 0.3s cubic-bezier(0.2, 0.7, 0.3, 1), box-shadow 0.3s; }
        .v3-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.12); }
        .v3-link { position: relative; }
        .v3-link::after { content: ""; position: absolute; left: 0; bottom: -2px; width: 100%; height: 2px; background: currentColor; transform: scaleX(0); transform-origin: left; transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.3, 1); }
        .v3-link:hover::after { transform: scaleX(1); }
      `}} />
    </div>
  );
}

function V3Hero({ mobile }) {
  return (
    <section style={{padding: mobile ? '20px 20px 60px' : '24px 64px 100px', position: 'relative', overflow: 'hidden'}}>
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 24, borderBottom: '2px solid var(--ink)', marginBottom: mobile ? 40 : 80}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, fontSize: 14, letterSpacing: '-0.01em'}}>
          <div style={{width: 32, height: 32, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14}}>A</div>
          AIDA.
        </div>
        {!mobile && <nav style={{display: 'flex', gap: 28, fontWeight: 600, fontSize: 13}}>
          {['Roadmap','Work','Practice','Contact'].map(x => <span key={x} className="v3-link" style={{cursor: 'pointer'}}>{x}</span>)}
        </nav>}
        <button style={{background: 'var(--accent)', color: '#fff', border: 'none', padding: '10px 20px', fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: 999}}>
          Get in touch ↗
        </button>
      </header>

      <div className="v3-fade" style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : '7fr 4fr', gap: mobile ? 32 : 56, alignItems: 'end'}}>
        <div>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28}}>
            <span style={{width: 6, height: 6, borderRadius: '50%', background: '#fff'}} />
            Now independent · 2025
          </div>
          <h1 style={{
            margin: 0, fontWeight: 800,
            fontSize: mobile ? 64 : 168, lineHeight: 0.86, letterSpacing: '-0.04em', color: 'var(--ink)',
          }}>
            Policy.<br />
            <span style={{color: 'var(--accent)'}}>Deployed.</span>
          </h1>
          <p style={{marginTop: mobile ? 24 : 40, fontSize: mobile ? 17 : 22, lineHeight: 1.45, color: 'var(--ink-2)', maxWidth: 580, fontWeight: 500}}>
            <strong style={{color: 'var(--ink)', fontWeight: 700}}>Dr. Aida N. Karazhanova</strong> — Regional Architect of Digital Transformation. Twenty-five years across academia and the United Nations system. Now in independent practice.
          </p>
          {!mobile && <div style={{marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap'}}>
            {PROFILE.credentialsList.map((c, i) => (
              <span key={i} style={{padding: '8px 16px', border: '1.5px solid var(--ink)', borderRadius: 999, fontSize: 12, fontWeight: 600, letterSpacing: '0.02em'}}>{c}</span>
            ))}
          </div>}
        </div>
        <div>
          <PhotoSlot src={PHOTOS.hero.bold} caption="Aida N. Karazhanova" ratio="3/4" border="1px solid var(--rule)" />
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{marginTop: mobile ? 56 : 96, padding: '20px 0', background: 'var(--accent)', color: '#fff', overflow: 'hidden', whiteSpace: 'nowrap', marginLeft: mobile ? -20 : -64, marginRight: mobile ? -20 : -64}}>
        <div className="v3-marquee-track" style={{display: 'inline-flex', gap: 40, fontSize: mobile ? 24 : 40, fontWeight: 800, letterSpacing: '-0.02em'}}>
          {[...Array(2)].map((_, k) => (
            <React.Fragment key={k}>
              <span>★ ESCAP</span><span>★ UNDP</span><span>★ UNESCO</span><span>★ SPECA</span><span>★ AP-IS</span><span>★ DIGITAL MATURITY</span><span>★ E-RESILIENCE</span><span>★ COACHING</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function V3SectionHead({ n, kicker, title, accent, mobile }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 14, marginBottom: mobile ? 40 : 64}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase'}}>
        <span style={{color: 'var(--accent)'}}>{n}</span>
        <span style={{flex: 1, height: 1, background: 'var(--ink)'}} />
        <span style={{color: 'var(--ink)'}}>{kicker}</span>
      </div>
      <h2 style={{margin: 0, fontWeight: 800, fontSize: mobile ? 44 : 88, lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--ink)'}}>
        {title} {accent && <span style={{color: 'var(--accent)'}}>{accent}</span>}
      </h2>
    </div>
  );
}

function V3Roadmap({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 20px 80px' : '120px 64px 140px', background: 'var(--paper-2)'}}>
      <V3SectionHead n="01" kicker="The route" title="A career, drawn" accent="long-form." mobile={mobile} />
      {mobile ? (
        <div>
          {MILESTONES.map((m, i) => (
            <div key={i} style={{padding: '24px 0', borderTop: i === 0 ? '2px solid var(--ink)' : '1px solid var(--rule)', borderBottom: i === MILESTONES.length - 1 ? '2px solid var(--ink)' : 'none'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10}}>
                <div style={{width: 28, height: 28, borderRadius: '50%', background: m.expanded ? 'var(--accent)' : 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700}}>{i+1}</div>
                <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.06em'}}>{m.range}</div>
              </div>
              <h3 style={{margin: 0, fontSize: 24, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em'}}>{m.role}</h3>
              <div style={{marginTop: 4, fontSize: 13, color: 'var(--ink-2)', fontWeight: 500}}>{m.org}</div>
              <p style={{margin: '12px 0 0', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)'}}>{m.outcome}</p>
            </div>
          ))}
        </div>
      ) : (
        <div style={{display: 'grid', gridTemplateColumns: `repeat(${MILESTONES.length}, 1fr)`, position: 'relative', gap: 0}}>
          <div style={{position: 'absolute', left: 0, right: 0, top: 88, height: 2, background: 'var(--ink)'}} />
          {MILESTONES.map((m, i) => (
            <div key={i} style={{paddingRight: i < MILESTONES.length - 1 ? 20 : 0, position: 'relative'}}>
              <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--ink-3)', marginBottom: 8}}>CH. {String(i+1).padStart(2,'0')}</div>
              <div style={{fontSize: 17, fontWeight: 800, marginBottom: 28, letterSpacing: '-0.01em'}}>{m.range}</div>
              <div style={{width: 16, height: 16, borderRadius: '50%', background: m.expanded ? 'var(--accent)' : 'var(--paper-2)', border: '2px solid var(--ink)', position: 'relative', zIndex: 1, marginBottom: 28}} />
              <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8}}>{m.chapter}</div>
              <h3 style={{margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.015em'}}>{m.role}</h3>
              <div style={{marginTop: 6, fontSize: 12.5, color: 'var(--ink-2)', fontWeight: 500, lineHeight: 1.4}}>{m.org}</div>
              <p style={{margin: '12px 0 0', fontSize: 12.5, lineHeight: 1.6, color: 'var(--ink-2)'}}>{m.outcome.length > 220 ? m.outcome.slice(0,200) + '…' : m.outcome}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function V3Achievements({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 20px 80px' : '120px 64px 140px'}}>
      <V3SectionHead n="02" kicker="Selected work" title="Built." accent="Adopted. Shipped." mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 16 : 24}}>
        {ACHIEVEMENTS.map((a, i) => (
          <article key={i} className="v3-card" style={{
            background: i === 0 ? 'var(--accent)' : (i === 4 ? 'var(--ink)' : 'var(--paper-2)'),
            color: (i === 0 || i === 4) ? '#fff' : 'var(--ink)',
            padding: mobile ? 24 : 32, minHeight: mobile ? 'auto' : 280,
            display: 'flex', flexDirection: 'column', gap: 14, borderRadius: 4,
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.75}}>
              <span>{a.kicker}</span><span>{String(i+1).padStart(2,'0')}/06</span>
            </div>
            <h3 style={{margin: 0, fontSize: mobile ? 24 : 28, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em'}}>{a.title}</h3>
            <p style={{margin: 0, fontSize: 14, lineHeight: 1.55, opacity: 0.85}}>{a.body}</p>
            {a.countries && <div style={{marginTop: 'auto', paddingTop: 14, display: 'flex', gap: 8, borderTop: `1px solid ${(i === 0 || i === 4) ? 'rgba(255,255,255,0.25)' : 'var(--rule)'}`}}>
              {a.countries.map((c,j) => <span key={j} style={{paddingTop: 12, padding: '8px 12px', border: '1px solid currentColor', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em'}}>{c}</span>)}
            </div>}
          </article>
        ))}
      </div>
    </section>
  );
}

function V3Practice({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 20px 80px' : '120px 64px 140px', background: 'var(--ink)', color: '#fff'}}>
      <V3SectionHead n="03" kicker="What she does" title="Three ways" accent="to work together." mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 28 : 40}}>
        {PRACTICE.map((p, i) => (
          <div key={i} style={{padding: 28, border: '1px solid rgba(255,255,255,0.18)', borderRadius: 4, position: 'relative'}}>
            <div style={{position: 'absolute', top: -16, left: 24, background: 'var(--accent)', color: '#fff', padding: '6px 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', borderRadius: 999}}>{p.kicker}</div>
            <h3 style={{margin: '12px 0 0', fontSize: mobile ? 24 : 28, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.015em'}}>{p.title}</h3>
            <p style={{marginTop: 14, fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)'}}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function V3FreeFlight({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 20px 80px' : '120px 64px 140px'}}>
      <V3SectionHead n="04" kicker="Right now" title="Free" accent="Flight." mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 20 : 24}}>
        {FREE_FLIGHT.map((f, i) => (
          <article key={i} className="v3-card" style={{
            background: i === 2 ? 'var(--accent)' : 'var(--paper)',
            color: i === 2 ? '#fff' : 'var(--ink)',
            border: i === 2 ? 'none' : '2px solid var(--ink)',
            padding: 28, display: 'flex', flexDirection: 'column', gap: 14, minHeight: mobile ? 'auto' : 320, borderRadius: 4,
          }}>
            <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase'}}>{f.tag}</div>
            <h3 style={{margin: 0, fontSize: 24, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em'}}>{f.title}</h3>
            {f.quote ? <p style={{margin: 0, fontSize: 16, lineHeight: 1.5, fontWeight: 500}}>“{f.quote}”</p> : f.body && <p style={{margin: 0, fontSize: 14, lineHeight: 1.6, opacity: 0.85}}>{f.body}</p>}
            {f.placeholder && <p style={{margin: 0, marginTop: 'auto', fontFamily: 'var(--mono)', fontSize: 11, opacity: 0.6, paddingTop: 14, borderTop: `1px dashed ${i === 2 ? 'rgba(255,255,255,0.4)' : 'var(--rule)'}`}}>[ {f.placeholder} ]</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function V3Press({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 20px 80px' : '120px 64px 140px', background: 'var(--paper-2)'}}>
      <V3SectionHead n="05" kicker="On record" title="Papers &" accent="publications." mobile={mobile} />
      {PRESS.map((p, i) => (
        <a key={i} href="#" style={{display: 'grid', gridTemplateColumns: mobile ? '60px 1fr' : '100px 1fr 1fr 40px', gap: mobile ? 16 : 32, padding: mobile ? '20px 0' : '28px 0', borderBottom: '1px solid var(--rule)', borderTop: i === 0 ? '2px solid var(--ink)' : 'none', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
          <div style={{fontWeight: 700, fontSize: 14, color: 'var(--accent)'}}>{p.year}</div>
          <div style={{fontSize: mobile ? 18 : 24, fontWeight: 700, letterSpacing: '-0.015em'}}>{p.label}</div>
          {!mobile && <div style={{textAlign: 'right', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-2)'}}>{p.org}</div>}
          {!mobile && <div style={{textAlign: 'right', fontSize: 18}}>↗</div>}
          {mobile && <div style={{gridColumn: '2', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: -6}}>{p.org}</div>}
        </a>
      ))}
    </section>
  );
}

function V3Contact({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 20px 56px' : '120px 64px 80px', background: 'var(--accent)', color: '#fff', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'absolute', right: -100, top: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.06)'}} />
      <div style={{position: 'relative'}}>
        <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24}}>06 — Contact</div>
        <h2 style={{margin: 0, fontWeight: 800, fontSize: mobile ? 56 : 144, lineHeight: 0.92, letterSpacing: '-0.04em'}}>
          Let's<br />talk.
        </h2>
        <div style={{marginTop: mobile ? 40 : 64, display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 20}}>
          {[['Work', CONTACT.phone], ['Email', CONTACT.email, true], ['LinkedIn', CONTACT.linkedin, false, CONTACT.linkedinUrl], ['Based', CONTACT.location]].map(([label, value, placeholder, link], i) => (
            <div key={i} style={{padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.3)'}}>
              <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 8}}>{label}</div>
              {link ? <a href={link} className="v3-link" style={{fontSize: mobile ? 18 : 24, fontWeight: 700, color: '#fff', textDecoration: 'none', letterSpacing: '-0.01em'}}>{value} ↗</a> :
                <div style={{fontSize: mobile ? 20 : 28, fontWeight: 700, letterSpacing: '-0.015em', opacity: placeholder ? 0.6 : 1}}>{value}</div>}
            </div>
          ))}
        </div>
        <div style={{marginTop: mobile ? 56 : 96, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.3)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7}}>
          <span>© Aida N. Karazhanova · 2026</span>
          <span>v3 · Bold</span>
          <span>↑ Top</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { V3 });
