// v4-swiss.jsx — Swiss Mono / brutalist-light
// White + black + electric green accent. Monospace everything. Dense grid.

const V4_TOKENS = {
  '--paper': '#fafaf7',
  '--paper-2': '#000000',
  '--ink': '#000000',
  '--ink-2': '#3d3d3d',
  '--ink-3': '#7a7a7a',
  '--rule': '#000000',
  '--accent': '#00ff66',
  '--accent-2': '#ff3300',
  '--mono': "'IBM Plex Mono', monospace",
  '--sans': "'IBM Plex Sans', system-ui, sans-serif",
};

function V4({ mobile }) {
  return (
    <div style={{...V4_TOKENS, background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'var(--mono)'}}>
      <V4Hero mobile={mobile} />
      <V4Roadmap mobile={mobile} />
      <V4Achievements mobile={mobile} />
      <V4Practice mobile={mobile} />
      <V4FreeFlight mobile={mobile} />
      <V4Press mobile={mobile} />
      <Moments tokens={V4_TOKENS} mobile={mobile} title="// frames" />
      <V4Contact mobile={mobile} />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes v4-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .v4-cursor::after { content: "_"; animation: v4-blink 1s steps(1) infinite; color: var(--accent); margin-left: 4px; }
        .v4-row { transition: background 0.15s; }
        .v4-row:hover { background: var(--ink); color: var(--paper); }
        .v4-row:hover .v4-row-accent { color: var(--accent); }
      `}} />
    </div>
  );
}

function V4Bar({ left, right, big }) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: big ? 12 : 10.5, padding: '12px 0', borderBottom: '1px solid var(--ink)', textTransform: 'uppercase', letterSpacing: '0.04em'}}>
      <span>{left}</span><span>{right}</span>
    </div>
  );
}

function V4Hero({ mobile }) {
  return (
    <section style={{padding: mobile ? '0 16px 40px' : '0 48px 80px', borderBottom: '2px solid var(--ink)'}}>
      <V4Bar left={`> aida.karazhanova.system :: ${PROFILE.location.toLowerCase()}`} right="online · 2025" big />
      <div style={{padding: mobile ? '32px 0 8px' : '48px 0 24px'}}>
        <div style={{fontSize: 11, marginBottom: 24, letterSpacing: '0.08em'}}>FILE-001 / DIGITAL_BUSINESS_CARD.TXT</div>
        <h1 style={{margin: 0, fontFamily: 'var(--mono)', fontWeight: 500, fontSize: mobile ? 38 : 96, lineHeight: 1.0, letterSpacing: '-0.04em', color: 'var(--ink)'}} className="v4-cursor">
          DR.AIDA.N.<br />KARAZHANOVA
        </h1>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr', gap: mobile ? 32 : 56, padding: '24px 0', borderTop: '1px solid var(--ink)'}}>
        <div>
          <table style={{width: '100%', fontSize: 12, borderCollapse: 'collapse'}}>
            <tbody>
              {[
                ['ROLE', PROFILE.positioning],
                ['TAG ', PROFILE.tagline],
                ['CRED', PROFILE.credentialsList.join(' / ')],
                ['BIO ', PROFILE.bio],
                ['STAT', '> independent_practice = TRUE'],
              ].map(([k, v], i) => (
                <tr key={i} style={{borderBottom: i < 4 ? '1px dashed var(--ink)' : 'none'}}>
                  <td style={{verticalAlign: 'top', padding: '10px 16px 10px 0', color: 'var(--accent-2)', fontWeight: 500, whiteSpace: 'nowrap'}}>[{k}]</td>
                  <td style={{padding: '10px 0', lineHeight: 1.5}}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{border: '1px solid var(--ink)', position: 'relative'}}>
          <PhotoSlot src={PHOTOS.hero.swiss} caption="// Aida N. Karazhanova :: portrait" ratio="4/5" border="1px solid var(--rule)" />
          <div style={{position: 'absolute', top: 8, left: 8, background: 'var(--accent)', color: 'var(--ink)', padding: '4px 8px', fontSize: 10, fontWeight: 500}}>● REC</div>
        </div>
      </div>
      <V4Bar left="↓ scroll = next.section" right={`PG 1 / 7`} />
    </section>
  );
}

function V4SectionHead({ n, kicker, title, mobile }) {
  return (
    <div style={{borderBottom: '2px solid var(--ink)', paddingBottom: mobile ? 24 : 40, marginBottom: mobile ? 32 : 56}}>
      <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em'}}>
        <span style={{color: 'var(--accent-2)'}}>§ {n}</span>
        <span>{kicker}</span>
      </div>
      <h2 style={{margin: 0, fontFamily: 'var(--mono)', fontWeight: 500, fontSize: mobile ? 32 : 64, lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', textTransform: 'uppercase'}}>{title}</h2>
    </div>
  );
}

function V4Roadmap({ mobile }) {
  return (
    <section style={{padding: mobile ? '40px 16px' : '80px 48px', borderBottom: '2px solid var(--ink)'}}>
      <V4SectionHead n="02.0" kicker="career.log" title="// roadmap" mobile={mobile} />
      <div>
        {MILESTONES.map((m, i) => (
          <div key={i} className="v4-row" style={{
            display: 'grid', gridTemplateColumns: mobile ? '50px 1fr' : '60px 200px 1fr 80px',
            gap: mobile ? 12 : 24, padding: mobile ? '18px 0' : '20px 8px', borderBottom: '1px solid var(--ink)',
            fontSize: mobile ? 12 : 13, alignItems: 'baseline',
          }}>
            <div className="v4-row-accent" style={{color: 'var(--accent-2)', fontWeight: 500}}>[{String(i+1).padStart(2,'0')}]</div>
            <div style={{fontWeight: 500, letterSpacing: '0.04em'}}>{m.range}</div>
            <div>
              <div style={{fontSize: mobile ? 15 : 18, fontWeight: 500, letterSpacing: '-0.01em', textTransform: 'uppercase', marginBottom: 4}}>{m.role}</div>
              <div style={{opacity: 0.65, fontSize: mobile ? 11 : 12, marginBottom: 10}}>// {m.org}</div>
              <div style={{lineHeight: 1.55, fontSize: mobile ? 12 : 12.5, opacity: 0.85, fontFamily: 'var(--sans)'}}>{m.outcome}</div>
            </div>
            {!mobile && <div style={{textAlign: 'right', fontSize: 11, opacity: 0.65, textTransform: 'uppercase'}}>{m.place}</div>}
            {mobile && <div style={{gridColumn: '2', fontSize: 10, opacity: 0.6, textTransform: 'uppercase', marginTop: -4}}>{m.place}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function V4Achievements({ mobile }) {
  return (
    <section style={{padding: mobile ? '40px 16px' : '80px 48px', borderBottom: '2px solid var(--ink)'}}>
      <V4SectionHead n="03.0" kicker="output.bin" title="// selected_work" mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--ink)'}}>
        {ACHIEVEMENTS.map((a, i) => (
          <article key={i} style={{
            padding: mobile ? 20 : 28, borderRight: !mobile && (i % 3 !== 2) ? '1px solid var(--ink)' : 'none',
            borderBottom: (mobile ? i < ACHIEVEMENTS.length - 1 : i < 3) ? '1px solid var(--ink)' : 'none',
            minHeight: mobile ? 'auto' : 240, display: 'flex', flexDirection: 'column', gap: 12,
            background: i === 4 ? 'var(--ink)' : 'var(--paper)', color: i === 4 ? 'var(--paper)' : 'var(--ink)',
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 10.5}}>
              <span style={{color: i === 4 ? 'var(--accent)' : 'var(--accent-2)'}}>[{a.kicker.toUpperCase()}]</span>
              <span style={{opacity: 0.6}}>{String(i+1).padStart(2,'0')}/06</span>
            </div>
            <h3 style={{margin: 0, fontSize: mobile ? 18 : 20, fontWeight: 500, lineHeight: 1.15, textTransform: 'uppercase', letterSpacing: '-0.01em'}}>{a.title}</h3>
            <p style={{margin: 0, fontSize: 12.5, lineHeight: 1.6, opacity: 0.85, fontFamily: 'var(--sans)'}}>{a.body}</p>
            {a.countries && <div style={{marginTop: 'auto', display: 'flex', gap: 6, paddingTop: 10}}>
              {a.countries.map((c,j) => <span key={j} style={{padding: '2px 6px', border: `1px solid ${i === 4 ? 'var(--paper)' : 'var(--ink)'}`, fontSize: 10, fontWeight: 500}}>{c}</span>)}
            </div>}
          </article>
        ))}
      </div>
    </section>
  );
}

function V4Practice({ mobile }) {
  return (
    <section style={{padding: mobile ? '40px 16px' : '80px 48px', borderBottom: '2px solid var(--ink)'}}>
      <V4SectionHead n="04.0" kicker="services.cfg" title="// practice_modes" mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', border: '1px solid var(--ink)'}}>
        {PRACTICE.map((p, i) => (
          <div key={i} style={{
            padding: mobile ? 20 : 28,
            borderRight: !mobile && i < 2 ? '1px solid var(--ink)' : 'none',
            borderBottom: mobile && i < 2 ? '1px solid var(--ink)' : 'none',
          }}>
            <div style={{fontSize: 10.5, marginBottom: 12}}>
              <span style={{color: 'var(--accent-2)'}}>$ ./mode</span> <span>{p.kicker}</span>
            </div>
            <h3 style={{margin: 0, fontSize: mobile ? 20 : 22, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '-0.01em'}}>{p.title}</h3>
            <p style={{margin: '12px 0 0', fontSize: 13, lineHeight: 1.6, fontFamily: 'var(--sans)', opacity: 0.85}}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function V4FreeFlight({ mobile }) {
  return (
    <section style={{padding: mobile ? '40px 16px' : '80px 48px', borderBottom: '2px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)'}}>
      <div style={{borderBottom: `2px solid var(--paper)`, paddingBottom: mobile ? 24 : 40, marginBottom: mobile ? 32 : 56}}>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em'}}>
          <span style={{color: 'var(--accent)'}}>§ 05.0</span><span>now.status</span>
        </div>
        <h2 style={{margin: 0, fontFamily: 'var(--mono)', fontWeight: 500, fontSize: mobile ? 32 : 64, lineHeight: 1.0, letterSpacing: '-0.03em', textTransform: 'uppercase'}}>// free_flight</h2>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--paper)'}}>
        {FREE_FLIGHT.map((f, i) => (
          <article key={i} style={{
            padding: mobile ? 20 : 28,
            borderRight: !mobile && i < 2 ? '1px solid var(--paper)' : 'none',
            borderBottom: mobile && i < 2 ? '1px solid var(--paper)' : 'none',
            display: 'flex', flexDirection: 'column', gap: 12, minHeight: mobile ? 'auto' : 280,
          }}>
            <div style={{fontSize: 10.5, color: 'var(--accent)'}}>[{f.tag.toUpperCase()}]</div>
            <h3 style={{margin: 0, fontSize: 18, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '-0.01em'}}>{f.title}</h3>
            {f.quote ? <p style={{margin: 0, fontSize: 13.5, lineHeight: 1.6, fontFamily: 'var(--sans)'}}>"{f.quote}"</p> : f.body && <p style={{margin: 0, fontSize: 13, lineHeight: 1.6, fontFamily: 'var(--sans)', opacity: 0.85}}>{f.body}</p>}
            {f.placeholder && <p style={{margin: 0, marginTop: 'auto', fontSize: 10.5, opacity: 0.55, paddingTop: 14, borderTop: '1px dashed rgba(255,255,255,0.3)'}}>// {f.placeholder}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function V4Press({ mobile }) {
  return (
    <section style={{padding: mobile ? '40px 16px' : '80px 48px', borderBottom: '2px solid var(--ink)'}}>
      <V4SectionHead n="06.0" kicker="library.idx" title="// papers" mobile={mobile} />
      {PRESS.map((p, i) => (
        <div key={i} className="v4-row" style={{
          display: 'grid', gridTemplateColumns: mobile ? '60px 1fr' : '80px 1fr 1fr 30px',
          gap: mobile ? 12 : 24, padding: mobile ? '14px 8px' : '16px 8px',
          borderBottom: '1px solid var(--ink)', borderTop: i === 0 ? '1px solid var(--ink)' : 'none',
          fontSize: 13, alignItems: 'baseline',
        }}>
          <div className="v4-row-accent" style={{color: 'var(--accent-2)', fontWeight: 500}}>{p.year}</div>
          <div style={{fontFamily: 'var(--sans)', fontSize: mobile ? 15 : 17, fontWeight: 500, letterSpacing: '-0.01em'}}>{p.label}</div>
          {!mobile && <div style={{textAlign: 'right', fontSize: 11, opacity: 0.65, textTransform: 'uppercase'}}>{p.org}</div>}
          {!mobile && <div style={{textAlign: 'right'}}>→</div>}
          {mobile && <div style={{gridColumn: '2', fontSize: 10, opacity: 0.6, textTransform: 'uppercase', marginTop: -4}}>{p.org}</div>}
        </div>
      ))}
    </section>
  );
}

function V4Contact({ mobile }) {
  return (
    <section style={{padding: mobile ? '40px 16px' : '80px 48px'}}>
      <V4SectionHead n="07.0" kicker="contact.dat" title="// open_channel" mobile={mobile} />
      <div>
        {[['WORK', CONTACT.phone], ['EMAIL', CONTACT.email, true], ['LNKDIN', CONTACT.linkedin, false, CONTACT.linkedinUrl], ['BASED', CONTACT.location]].map(([label, value, placeholder, link], i) => (
          <div key={i} className="v4-row" style={{display: 'grid', gridTemplateColumns: mobile ? '80px 1fr' : '120px 1fr 30px', gap: mobile ? 12 : 24, padding: mobile ? '16px 8px' : '20px 8px', borderTop: i === 0 ? '1px solid var(--ink)' : 'none', borderBottom: '1px solid var(--ink)', alignItems: 'baseline', fontSize: 13}}>
            <div className="v4-row-accent" style={{color: 'var(--accent-2)', fontWeight: 500}}>[{label}]</div>
            {link ? <a href={link} style={{color: 'inherit', textDecoration: 'none', fontSize: mobile ? 16 : 20, fontWeight: 500}}>{value}</a> :
              <div style={{fontSize: mobile ? 16 : 22, fontWeight: 500, letterSpacing: '-0.01em', opacity: placeholder ? 0.5 : 1}}>{value}</div>}
            {!mobile && <div style={{textAlign: 'right'}}>↗</div>}
          </div>
        ))}
      </div>
      <div style={{marginTop: mobile ? 40 : 64, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em', paddingTop: 16, borderTop: '1px solid var(--ink)'}}>
        <span>// © A.N.K. 2026</span>
        <span>// build v4.swiss</span>
        <span>↑ TOP</span>
      </div>
    </section>
  );
}

Object.assign(window, { V4 });
