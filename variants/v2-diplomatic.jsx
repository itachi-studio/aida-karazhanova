// v2-diplomatic.jsx — UN Diplomatic Blue
// Pale ivory + classic UN blue + deep navy. Source Serif + IBM Plex Sans.
// Formal, institutional, generous whitespace, vertical chronicle roadmap with numbered seals.

const V2_TOKENS = {
  '--paper': '#f4f1ea',
  '--paper-2': '#ffffff',
  '--ink': '#0c1f3d',
  '--ink-2': '#2a3a55',
  '--ink-3': '#6b7990',
  '--rule': '#c9cfdb',
  '--accent': '#5b92e5',
  '--accent-2': '#0a3878',
  '--gold': '#c9a548',
  '--serif': "'Source Serif 4', 'Newsreader', Georgia, serif",
  '--sans': "'IBM Plex Sans', system-ui, sans-serif",
  '--mono': "'IBM Plex Mono', monospace",
};

function V2({ mobile }) {
  return (
    <div style={{...V2_TOKENS, background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'var(--sans)'}}>
      <V2Hero mobile={mobile} />
      <V2Roadmap mobile={mobile} />
      <V2Achievements mobile={mobile} />
      <V2Practice mobile={mobile} />
      <V2FreeFlight mobile={mobile} />
      <V2Press mobile={mobile} />
      <Moments tokens={V2_TOKENS} mobile={mobile} title="From the field" />
      <V2Contact mobile={mobile} />
    </div>
  );
}

// Subtle UN-style emblem — concentric circle seal
function V2Seal({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" style={{display: 'block'}}>
      <circle cx="40" cy="40" r="38" fill="none" stroke="var(--accent-2)" strokeWidth="0.5" />
      <circle cx="40" cy="40" r="32" fill="none" stroke="var(--accent-2)" strokeWidth="0.5" />
      <circle cx="40" cy="40" r="22" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="2 3" />
      <circle cx="40" cy="40" r="2.5" fill="var(--gold)" />
      {[...Array(12)].map((_,i) => {
        const a = (i / 12) * Math.PI * 2;
        const x1 = 40 + Math.cos(a) * 32, y1 = 40 + Math.sin(a) * 32;
        const x2 = 40 + Math.cos(a) * 38, y2 = 40 + Math.sin(a) * 38;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--accent-2)" strokeWidth="0.5" />;
      })}
    </svg>
  );
}

function V2Hero({ mobile }) {
  return (
    <section style={{padding: mobile ? '24px 24px 64px' : '32px 96px 120px', position: 'relative'}}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--ink-2)',
        paddingBottom: mobile ? 32 : 48, borderBottom: '1px solid var(--rule)',
        marginBottom: mobile ? 56 : 96,
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <div style={{width: 22, height: 22, borderRadius: '50%', border: '1px solid var(--accent-2)', position: 'relative'}}>
            <div style={{position: 'absolute', inset: 4, borderRadius: '50%', background: 'var(--accent)'}} />
          </div>
          <span>{PROFILE.initials}</span>
        </div>
        {!mobile && <nav style={{display: 'flex', gap: 32}}>
          <span>I · Roadmap</span><span>II · Selected Work</span><span>III · Practice</span><span>IV · Contact</span>
        </nav>}
        <span>Bangkok · Almaty · 2025</span>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : '3fr 2fr', gap: mobile ? 28 : 80, alignItems: 'end'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: mobile ? 24 : 40}}>
          <div style={{fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-2)'}}>
            ◆ Office of an independent practitioner
          </div>
          <h1 style={{
            margin: 0, fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: mobile ? 44 : 84, lineHeight: 1.0, color: 'var(--ink)',
            letterSpacing: '-0.015em',
          }}>
            Dr. Aida N.<br />Karazhanova
          </h1>
          <div style={{height: 1, background: 'var(--accent-2)', width: 80}} />
          <div style={{display: 'flex', flexWrap: 'wrap', gap: mobile ? 4 : 12, fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-2)', flexDirection: mobile ? 'column' : 'row'}}>
            {PROFILE.credentialsList.map((c, i) => (
              <React.Fragment key={i}>
                <span>{c}</span>
                {!mobile && i < PROFILE.credentialsList.length - 1 && <span style={{color: 'var(--rule)'}}>·</span>}
              </React.Fragment>
            ))}
          </div>
          <p style={{margin: 0, fontFamily: 'var(--serif)', fontSize: mobile ? 22 : 30, lineHeight: 1.3, color: 'var(--accent-2)', maxWidth: '24ch', fontWeight: 400}}>
            From policy foresight to deployable action.
          </p>
          <p style={{margin: 0, fontSize: mobile ? 14 : 16, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 520, fontWeight: 400}}>
            <strong style={{color: 'var(--ink)', fontWeight: 600}}>{PROFILE.positioning}.</strong> {PROFILE.bio}
          </p>
        </div>

        <div style={{position: 'relative'}}>
          <PhotoSlot src={PHOTOS.hero.diplomatic} caption="Aida N. Karazhanova" ratio="4/5" border="1px solid var(--rule)" />
          <div style={{position: 'absolute', top: -12, right: -12, background: 'var(--paper)', padding: 6}}>
            <V2Seal size={mobile ? 56 : 72} />
          </div>
        </div>
      </div>
    </section>
  );
}

function V2SectionHead({ n, kicker, title, subtitle, mobile }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: mobile ? 16 : 24, marginBottom: mobile ? 40 : 80, alignItems: 'flex-start'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          border: '1.5px solid var(--accent-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--accent-2)', fontWeight: 500,
        }}>{n}</div>
        <div style={{fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-2)'}}>{kicker}</div>
      </div>
      <h2 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 400, fontSize: mobile ? 36 : 64, lineHeight: 1.05, color: 'var(--ink)', maxWidth: mobile ? '100%' : '20ch', letterSpacing: '-0.01em'}}>
        {title}
      </h2>
      {subtitle && <p style={{margin: 0, maxWidth: mobile ? '100%' : 620, fontSize: mobile ? 15 : 17, lineHeight: 1.65, color: 'var(--ink-2)'}}>{subtitle}</p>}
    </div>
  );
}

function V2Roadmap({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 96px 140px', background: 'var(--paper-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)'}}>
      <V2SectionHead n="I" kicker="Career chronicle"
        title="A continuous arc — from the laboratory to the policy room."
        subtitle="Each chapter ends with a tool, a framework, or a programme adopted by the institutions she served."
        mobile={mobile} />

      <div style={{position: 'relative', maxWidth: 1100, margin: '0 auto'}}>
        {!mobile && <div style={{position: 'absolute', left: 'calc(50% - 0.5px)', top: 0, bottom: 0, width: 1, background: 'var(--rule)'}} />}
        {MILESTONES.map((m, i) => {
          const left = i % 2 === 0;
          return (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: mobile ? '32px 1fr' : '1fr 80px 1fr',
              gap: mobile ? 16 : 24,
              marginBottom: mobile ? 40 : 64,
              position: 'relative',
            }}>
              {!mobile && (
                <div style={{
                  textAlign: left ? 'right' : 'left',
                  gridColumn: left ? 1 : 3,
                  paddingTop: 18,
                }}>
                  {V2Card(m, i, left)}
                </div>
              )}
              {!mobile && (
                <div style={{gridColumn: 2, position: 'relative', display: 'flex', justifyContent: 'center', paddingTop: 24}}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: m.expanded ? 'var(--accent)' : 'var(--paper-2)',
                    border: '1.5px solid var(--accent-2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--mono)', fontSize: 12, color: m.expanded ? '#fff' : 'var(--accent-2)',
                    fontWeight: 500, position: 'relative', zIndex: 1,
                  }}>{i+1}</div>
                </div>
              )}
              {!mobile && <div style={{gridColumn: left ? 3 : 1}} />}

              {mobile && (
                <>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
                    <div style={{width: 28, height: 28, borderRadius: '50%', background: m.expanded ? 'var(--accent)' : 'var(--paper)', border: '1.5px solid var(--accent-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 11, color: m.expanded ? '#fff' : 'var(--accent-2)', fontWeight: 500}}>{i+1}</div>
                    {i < MILESTONES.length - 1 && <div style={{width: 1, flex: 1, background: 'var(--rule)', minHeight: 32}} />}
                  </div>
                  <div>{V2Card(m, i, false)}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function V2Card(m, i, alignRight) {
  return (
    <div style={{textAlign: alignRight ? 'right' : 'left'}}>
      <div style={{fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6}}>{m.range}</div>
      <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 24, lineHeight: 1.15, color: 'var(--ink)', letterSpacing: '-0.005em'}}>{m.role}</h3>
      <div style={{marginTop: 6, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.4}}>{m.org}</div>
      <p style={{margin: '12px 0 0', fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)'}}>{m.outcome}</p>
      <div style={{marginTop: 10, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)'}}>{m.place}</div>
    </div>
  );
}

function V2Achievements({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 96px 140px'}}>
      <V2SectionHead n="II" kicker="Selected work"
        title="What was deployed."
        subtitle="Six artefacts. Adopted, referenced, or shipped — not merely written."
        mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 24 : 32}}>
        {ACHIEVEMENTS.map((a, i) => (
          <article key={i} style={{
            background: 'var(--paper-2)', border: '1px solid var(--rule)',
            padding: mobile ? 24 : 32, position: 'relative', minHeight: mobile ? 'auto' : 280,
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div style={{position: 'absolute', top: 0, left: 0, width: 40, height: 4, background: 'var(--accent)'}} />
            <div style={{fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-2)', display: 'flex', justifyContent: 'space-between'}}>
              <span>{a.kicker}</span><span>{String(i+1).padStart(2,'0')} / 06</span>
            </div>
            <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 400, fontSize: mobile ? 22 : 24, lineHeight: 1.2, color: 'var(--ink)'}}>{a.title}</h3>
            <p style={{margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)'}}>{a.body}</p>
            {a.countries && <div style={{marginTop: 'auto', paddingTop: 14, display: 'flex', gap: 12, borderTop: '1px solid var(--rule)'}}>
              {a.countries.map((c,j) => <span key={j} style={{paddingTop: 12, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', color: 'var(--accent)'}}>{c}</span>)}
            </div>}
          </article>
        ))}
      </div>
    </section>
  );
}

function V2Practice({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 96px 140px', background: 'var(--paper-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)'}}>
      <V2SectionHead n="III" kicker="Practice areas" title="Three modes of engagement." mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 28 : 48}}>
        {PRACTICE.map((p, i) => (
          <div key={i} style={{position: 'relative', paddingLeft: 28}}>
            <div style={{position: 'absolute', left: 0, top: 4, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em'}}>{p.kicker}</div>
            <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 400, fontSize: mobile ? 24 : 28, lineHeight: 1.15, color: 'var(--ink)'}}>{p.title}</h3>
            <p style={{margin: '14px 0 0', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)'}}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function V2FreeFlight({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 96px 140px'}}>
      <V2SectionHead n="IV" kicker="The current chapter" title="Free Flight."
        subtitle="Independent practice — open to governments, international organisations, and individual leaders."
        mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 24 : 36}}>
        {FREE_FLIGHT.map((f, i) => (
          <article key={i} style={{
            background: 'var(--paper-2)', border: '1px solid var(--rule)', borderTop: '4px solid var(--accent)',
            padding: 28, display: 'flex', flexDirection: 'column', gap: 14, minHeight: mobile ? 'auto' : 300,
          }}>
            <div style={{fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-2)'}}>{f.tag}</div>
            <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 22, color: 'var(--ink)'}}>{f.title}</h3>
            {f.quote ? (
              <blockquote style={{margin: 0, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, lineHeight: 1.55, color: 'var(--ink)'}}>“{f.quote}”</blockquote>
            ) : f.body && <p style={{margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)'}}>{f.body}</p>}
            {f.placeholder && <p style={{margin: 0, marginTop: 'auto', fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-3)', paddingTop: 14, borderTop: '1px dashed var(--rule)'}}>[ {f.placeholder} ]</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function V2Press({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 96px 140px', background: 'var(--paper-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)'}}>
      <V2SectionHead n="V" kicker="Authorship" title="On the record." mobile={mobile} />
      {PRESS.map((p, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: mobile ? '60px 1fr' : '100px 1fr 1fr',
          gap: mobile ? 16 : 32, padding: mobile ? '20px 0' : '24px 0',
          borderBottom: '1px solid var(--rule)', alignItems: 'baseline',
        }}>
          <div style={{fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent)'}}>{p.year}</div>
          <div style={{fontFamily: 'var(--serif)', fontSize: mobile ? 17 : 22, color: 'var(--ink)'}}>{p.label}</div>
          {!mobile && <div style={{textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)'}}>{p.org}</div>}
          {mobile && <div style={{gridColumn: '2', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: -6}}>{p.org}</div>}
        </div>
      ))}
    </section>
  );
}

function V2Contact({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 56px' : '120px 96px 80px', background: 'var(--accent-2)', color: '#f4f1ea'}}>
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 80}}>
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <div style={{width: 44, height: 44, borderRadius: '50%', border: '1.5px solid #f4f1ea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 16}}>VI</div>
            <div style={{fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)'}}>Contact</div>
          </div>
          <h2 style={{margin: '24px 0 0', fontFamily: 'var(--serif)', fontWeight: 400, fontSize: mobile ? 36 : 64, lineHeight: 1.05, color: '#fff', letterSpacing: '-0.01em'}}>The door is open.</h2>
          <p style={{marginTop: 18, fontFamily: 'var(--serif)', fontSize: mobile ? 16 : 19, lineHeight: 1.5, color: 'rgba(255,255,255,0.7)', maxWidth: 420}}>
            For advisory, coaching, or a considered conversation. A note is enough.
          </p>
        </div>
        <div style={{paddingTop: mobile ? 0 : 56}}>
          {[
            ['Work', CONTACT.phone],
            ['Email', CONTACT.email, true],
            ['LinkedIn', CONTACT.linkedin, false, CONTACT.linkedinUrl],
            ['Based', CONTACT.location],
          ].map(([label, value, placeholder, link], i) => (
            <div key={i} style={{display: 'grid', gridTemplateColumns: '110px 1fr', alignItems: 'baseline', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.18)', gap: 20}}>
              <div style={{fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)'}}>{label}</div>
              {link ? <a href={link} style={{fontFamily: 'var(--mono)', fontSize: 13, color: '#fff', textDecoration: 'none'}}>{value}</a> :
                <div style={{fontFamily: 'var(--serif)', fontSize: 20, color: placeholder ? 'rgba(255,255,255,0.55)' : '#fff', fontStyle: placeholder ? 'italic' : 'normal'}}>{value}</div>}
            </div>
          ))}
        </div>
      </div>
      <div style={{marginTop: mobile ? 56 : 96, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.18)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)'}}>
        <span>© Aida N. Karazhanova · MMXXVI</span>
        <span>v2 · Diplomatic</span>
        <span>↑ Top</span>
      </div>
    </section>
  );
}

Object.assign(window, { V2 });
