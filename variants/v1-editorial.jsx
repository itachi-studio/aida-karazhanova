// v1-editorial.jsx — Editorial Terracotta (chosen baseline)
// Off-white + terracotta + ink. Cormorant + Manrope. Folded dossier roadmap. Hero C (small portrait).

const V1_TOKENS = {
  '--paper': '#f6f1e6',
  '--paper-2': '#ece5d5',
  '--ink': '#1c1714',
  '--ink-2': '#48413a',
  '--ink-3': '#7a6e60',
  '--rule': '#d3c7b0',
  '--accent': '#a04a30',
  '--accent-2': '#1c1714',
  '--serif': "'Cormorant Garamond', 'Newsreader', Georgia, serif",
  '--sans': "'Manrope', 'IBM Plex Sans', system-ui, sans-serif",
  '--mono': "'IBM Plex Mono', monospace",
};

function V1({ mobile }) {
  return (
    <div style={{...V1_TOKENS, background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'var(--sans)'}}>
      <V1Hero mobile={mobile} />
      <V1Roadmap mobile={mobile} />
      <V1Achievements mobile={mobile} />
      <V1Practice mobile={mobile} />
      <V1FreeFlight mobile={mobile} />
      <V1Press mobile={mobile} />
      <Moments tokens={V1_TOKENS} mobile={mobile} title="Plates" />
      <V1Contact mobile={mobile} />
    </div>
  );
}

function V1Folio({ n, kicker }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: 'var(--ink-3)',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <span>№ {n}</span>
      {kicker && <><span style={{width: 18, height: 1, background: 'var(--rule)'}} /><span>{kicker}</span></>}
    </div>
  );
}
function V1Rule({ s }) { return <div style={{height: 1, background: 'var(--rule)', width: '100%', ...s}} />; }

function V1Hero({ mobile }) {
  return (
    <section style={{padding: mobile ? '32px 24px 56px' : '40px 80px 100px'}}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--ink-3)',
        marginBottom: mobile ? 56 : 96,
      }}>
        <span>{PROFILE.initials}</span>
        {!mobile && <nav style={{display: 'flex', gap: 28}}>
          <span>Roadmap</span><span>Selected Work</span><span>Practice</span><span>Free Flight</span><span>Contact</span>
        </nav>}
        <span>{PROFILE.location}</span>
      </div>

      <div style={{
        display: mobile ? 'flex' : 'grid',
        flexDirection: 'column',
        gridTemplateColumns: mobile ? undefined : '1.6fr 1fr',
        gap: mobile ? 28 : 80,
        alignItems: 'end',
      }}>
        <div style={{display: 'flex', flexDirection: 'column', gap: mobile ? 22 : 36}}>
          <V1Folio n="01" kicker="A digital business card" />
          <h1 style={{
            margin: 0, fontFamily: 'var(--serif)', fontWeight: 400,
            letterSpacing: '-0.005em',
            fontSize: mobile ? 52 : 116, lineHeight: 0.92, color: 'var(--ink)',
          }}>
            Aida&nbsp;N.<br />
            <span style={{fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)'}}>Karazhanova</span>
          </h1>
          <V1Rule />
          <div style={{
            display: 'flex', gap: mobile ? 0 : 18, flexWrap: 'wrap',
            flexDirection: mobile ? 'column' : 'row',
            fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--ink-2)',
          }}>
            {PROFILE.credentialsList.map((c, i) => (
              <React.Fragment key={i}>
                <span>{c}</span>
                {!mobile && i < PROFILE.credentialsList.length - 1 && <span style={{color: 'var(--rule)'}}>/</span>}
              </React.Fragment>
            ))}
          </div>
          <p style={{
            margin: 0, fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
            fontSize: mobile ? 22 : 30, lineHeight: 1.3, color: 'var(--ink)',
            maxWidth: '22ch',
          }}>
            {PROFILE.taglineA}<br />
            <span style={{color: 'var(--accent)'}}>{PROFILE.taglineB}</span>
          </p>
          <p style={{
            margin: 0, fontSize: mobile ? 14 : 15, lineHeight: 1.65,
            color: 'var(--ink-2)', maxWidth: 460, fontWeight: 400,
          }}>
            {PROFILE.positioning}. {PROFILE.bio}
          </p>
        </div>

        {!mobile && (
          <div>
            <PhotoSlot src={PHOTOS.hero.editorial} caption="Aida N. Karazhanova" ratio="3/4" border="1px solid var(--rule)" />
            <div style={{
              marginTop: 12, display: 'flex', justifyContent: 'space-between',
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--ink-3)',
            }}>
              <span>Plate I</span><span>2025</span>
            </div>
          </div>
        )}
        {mobile && <PhotoSlot src={PHOTOS.hero.editorial} caption="Aida N. Karazhanova" ratio="3/4" border="1px solid var(--rule)" />}
      </div>
    </section>
  );
}

function V1SectionHead({ n, kicker, title, italics, subtitle, mobile }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: mobile ? 14 : 20, marginBottom: mobile ? 40 : 64}}>
      <V1Folio n={n} kicker={kicker} />
      <V1Rule />
      <h2 style={{
        margin: 0, fontFamily: 'var(--serif)', fontWeight: 400,
        fontSize: mobile ? 38 : 72, lineHeight: 1.0, color: 'var(--ink)',
        maxWidth: mobile ? '100%' : '14ch', letterSpacing: '-0.005em',
      }}>
        {title} {italics && <span style={{fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)'}}>{italics}</span>}
      </h2>
      {subtitle && (
        <p style={{
          margin: 0, maxWidth: mobile ? '100%' : 540,
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
          fontSize: mobile ? 16 : 20, lineHeight: 1.5, color: 'var(--ink-2)',
        }}>{subtitle}</p>
      )}
    </div>
  );
}

function V1Roadmap({ mobile }) {
  const offsets = [0, 16, 4, 22, 2, 12];
  const widths = [60, 68, 60, 78, 90, 56];
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px'}}>
      <V1SectionHead n="02" kicker="Career chronicle"
        title="The file," italics="in chapters."
        subtitle="Loose-leaf. Each chapter pinned at a slightly different angle — the way an archive actually accumulates. Twenty-five years across one continuous arc."
        mobile={mobile} />
      {MILESTONES.map((m, i) => (
        <div key={i} style={{
          marginLeft: mobile ? 0 : `${offsets[i]}%`,
          width: mobile ? '100%' : `${widths[i]}%`,
          maxWidth: 760,
          padding: mobile ? '24px 0' : '36px 0',
          borderTop: '1px solid var(--rule)',
          borderBottom: i === MILESTONES.length - 1 ? '1px solid var(--rule)' : 'none',
          display: 'grid',
          gridTemplateColumns: mobile ? '70px 1fr' : '140px 1fr',
          gap: mobile ? 18 : 32,
        }}>
          <div>
            <div style={{fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)'}}>ch.{i+1}</div>
            <div style={{marginTop: 8, fontFamily: 'var(--serif)', fontSize: mobile ? 13 : 17, fontVariantNumeric: 'oldstyle-nums', color: 'var(--ink)'}}>{m.range}</div>
            <div style={{marginTop: mobile ? 10 : 18, width: 8, height: 8, borderRadius: '50%', background: m.expanded ? 'var(--accent)' : 'var(--paper)', border: '1px solid var(--accent)'}} />
          </div>
          <div>
            <div style={{fontFamily: 'var(--mono)', fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8}}>{m.chapter}</div>
            <div style={{fontFamily: 'var(--serif)', fontWeight: 400, fontSize: mobile ? 24 : 32, lineHeight: 1.05, color: 'var(--ink)'}}>{m.role}</div>
            <div style={{marginTop: 6, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: mobile ? 14 : 17, color: 'var(--ink-2)'}}>{m.org}</div>
            <div style={{marginTop: 12, fontSize: mobile ? 13 : 14, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: 540}}>{m.outcome}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

function V1Achievements({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px', borderTop: '1px solid var(--rule)'}}>
      <V1SectionHead n="03" kicker="Selected work"
        title="What was left behind," italics="in usable form."
        subtitle="Six artefacts from twenty-five years. Chosen because they were adopted, deployed, or referenced — not merely authored."
        mobile={mobile} />
      <div style={{
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(6, 1fr)',
        gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)',
      }}>
        {ACHIEVEMENTS.map((a, i) => {
          const span = [4,2,2,2,4,2][i];
          return (
            <article key={i} style={{
              gridColumn: mobile ? 'auto' : `span ${span}`,
              background: 'var(--paper)', padding: mobile ? 22 : 32,
              minHeight: mobile ? 'auto' : 280,
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between',
                fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--ink-3)'}}>
                <span style={{color: 'var(--accent)'}}>{a.kicker}</span>
                <span>№ {String(i+1).padStart(2,'0')}</span>
              </div>
              <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: span === 4 ? (mobile ? 26 : 34) : (mobile ? 22 : 24),
                lineHeight: 1.1, color: 'var(--ink)'}}>{a.title}</h3>
              <p style={{margin: 0, fontSize: mobile ? 13.5 : 14, lineHeight: 1.6, color: 'var(--ink-2)'}}>{a.body}</p>
              {a.countries && (
                <div style={{marginTop: 'auto', paddingTop: 12, display: 'flex', gap: 14,
                  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', color: 'var(--accent)',
                  borderTop: '1px solid var(--rule)'}}>
                  {a.countries.map((c,j) => <span key={j} style={{paddingTop: 12}}>{c}</span>)}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function V1Practice({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px', borderTop: '1px solid var(--rule)'}}>
      <V1SectionHead n="04" kicker="Practice areas"
        title="Three" italics="rooms she works in."
        subtitle="Not a service menu. Three modes she shows up in, depending on what the conversation actually needs."
        mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 28 : 48}}>
        {PRACTICE.map((p, i) => (
          <div key={i} style={{borderTop: '1px solid var(--rule)', paddingTop: 24}}>
            <div style={{fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)'}}>{p.kicker}</div>
            <h3 style={{margin: '14px 0 0', fontFamily: 'var(--serif)', fontWeight: 400, fontSize: mobile ? 26 : 30, lineHeight: 1.1, color: 'var(--ink)'}}>{p.title}</h3>
            <p style={{marginTop: 14, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)'}}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function V1FreeFlight({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px',
      borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)',
      background: 'var(--paper-2)'}}>
      <V1SectionHead n="05" kicker="The current chapter"
        title="Free" italics="Flight."
        subtitle={"After more than two decades inside the United Nations system, independent practice. Open to conversations on digital transformation, e-resilience, and digital public services for SMEs — and to executive coaching."}
        mobile={mobile} />
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 24 : 36}}>
        {FREE_FLIGHT.map((f, i) => (
          <article key={i} style={{
            background: 'var(--paper)', border: '1px solid var(--rule)',
            padding: 28, display: 'flex', flexDirection: 'column', gap: 14, minHeight: mobile ? 'auto' : 280,
          }}>
            <div style={{fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)'}}>{f.tag}</div>
            <h3 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 26, lineHeight: 1.15, color: 'var(--ink)'}}>{f.title}</h3>
            <V1Rule />
            {f.quote ? (
              <blockquote style={{margin: 0, fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 16, lineHeight: 1.5, color: 'var(--ink)'}}>
                <span style={{color: 'var(--accent)', fontSize: 24, marginRight: 4}}>“</span>{f.quote}
              </blockquote>
            ) : f.body && <p style={{margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)'}}>{f.body}</p>}
            {f.placeholder && (
              <p style={{margin: 0, marginTop: 'auto', fontFamily: 'var(--mono)', fontSize: 10.5, lineHeight: 1.5, color: 'var(--ink-3)', paddingTop: 14, borderTop: '1px dashed var(--rule)'}}>
                [ {f.placeholder} ]
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function V1Press({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 80px' : '120px 80px 140px'}}>
      <V1SectionHead n="06" kicker="Authorship & papers"
        title="On the" italics="record."
        subtitle="A short bibliography. Co-authorships and originating papers, in date order."
        mobile={mobile} />
      <div>
        {PRESS.map((p, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: mobile ? '60px 1fr' : '100px 1fr 1fr',
            gap: mobile ? 16 : 32, padding: mobile ? '20px 0' : '28px 0',
            borderTop: '1px solid var(--rule)',
            borderBottom: i === PRESS.length - 1 ? '1px solid var(--rule)' : 'none',
            alignItems: 'baseline',
          }}>
            <div style={{fontFamily: 'var(--mono)', fontSize: mobile ? 12 : 14, letterSpacing: '0.1em', color: 'var(--accent)'}}>{p.year}</div>
            <div style={{fontFamily: 'var(--serif)', fontSize: mobile ? 17 : 22, lineHeight: 1.25, color: 'var(--ink)'}}>{p.label}</div>
            {!mobile && <div style={{fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', textAlign: 'right'}}>{p.org}</div>}
            {mobile && <div style={{gridColumn: '2', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: -8}}>{p.org}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function V1Contact({ mobile }) {
  return (
    <section style={{padding: mobile ? '64px 24px 56px' : '120px 80px 80px', borderTop: '1px solid var(--rule)'}}>
      <div style={{display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 80, alignItems: 'start'}}>
        <div>
          <V1Folio n="07" kicker="Contact" />
          <div style={{height: 16}} /><V1Rule /><div style={{height: mobile ? 24 : 36}} />
          <h2 style={{margin: 0, fontFamily: 'var(--serif)', fontWeight: 400, fontSize: mobile ? 38 : 72, lineHeight: 1.0, color: 'var(--ink)'}}>
            Get in touch.<br /><span style={{fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)'}}>Quietly.</span>
          </h2>
          <p style={{marginTop: mobile ? 18 : 28, fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, fontSize: mobile ? 16 : 19, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: 380}}>
            For advisory, coaching, or a considered conversation, the door is open. A note is enough.
          </p>
        </div>
        <div style={{paddingTop: mobile ? 0 : 56}}>
          {[
            ['Work', CONTACT.phone],
            ['Email', CONTACT.email, true],
            ['LinkedIn', CONTACT.linkedin, false, CONTACT.linkedinUrl],
            ['Based', CONTACT.location],
          ].map(([label, value, placeholder, link], i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '110px 1fr', alignItems: 'baseline',
              padding: '18px 0', borderBottom: '1px solid var(--rule)', gap: 20,
            }}>
              <div style={{fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)'}}>{label}</div>
              {link ? (
                <a href={link} style={{fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent)', textDecoration: 'none'}}>{value}</a>
              ) : (
                <div style={{fontFamily: 'var(--serif)', fontSize: 22, color: placeholder ? 'var(--ink-3)' : 'var(--ink)', fontStyle: placeholder ? 'italic' : 'normal'}}>{value}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={{height: mobile ? 56 : 80}} /><V1Rule />
      <div style={{marginTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)'}}>
        <span>© Aida N. Karazhanova · MMXXVI</span>
        <span>v1 · Editorial</span>
        <span>↑ Return to top</span>
      </div>
    </section>
  );
}

Object.assign(window, { V1 });
