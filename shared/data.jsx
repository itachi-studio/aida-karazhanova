// data.jsx — single source of truth for all 5 variants

const PROFILE = {
  name: 'Dr. Aida N. Karazhanova',
  shortName: 'Aida N. Karazhanova',
  initials: 'A.N.K.',
  credentials: 'PhD Biochemistry · ABNLP Master (since 2013) · ICF Coach (L1)',
  credentialsList: ['PhD · Biochemistry & Molecular Biology', 'ABNLP Master · since 2013', 'ICF Coach · Level 1'],
  positioning: 'Regional Architect of Digital Transformation — Asia-Pacific',
  tagline: 'From policy foresight to deployable action.',
  taglineA: 'From policy foresight',
  taglineB: 'to deployable action.',
  bio: 'Twenty-five years between academia, the United Nations system, and the room where policy is turned into something that can actually be deployed.',
  location: 'Bangkok · Almaty',
  available: '2025 — independent practice. Free flight begins.',
};

const MILESTONES = [
  {
    range: '1991 — 1997',
    span: 'Six years',
    role: 'Doctorate',
    org: 'PhD, Biochemistry & Molecular Biology',
    place: 'Almaty',
    chapter: 'Foundations',
    outcome: 'Trained as a scientist before becoming a policymaker. Lab habits — patience, evidence, replication — never left.',
  },
  {
    range: '1997 — 2002',
    span: 'Five years',
    role: 'Head of Laboratory',
    org: 'British Gas Chair of Environmental Technology · Kazakh State Academy of Architecture & Construction',
    place: 'Almaty',
    chapter: 'Bench to Brief',
    outcome: 'Ran an environmental-technology lab inside an academy of architecture. Began translating science into policy-grade analysis.',
  },
  {
    range: '2002 — 2005',
    span: 'Programme years',
    role: 'Programme Officer',
    org: 'United Nations Development Programme (UNDP)',
    place: 'Kazakhstan',
    chapter: 'Into the System',
    outcome: 'Held the environment, sustainable development and climate-grants portfolio. First years inside the UN machinery.',
  },
  {
    range: '2005 — 2010',
    span: 'Five years',
    role: 'Regional Specialist',
    org: 'RRC.AP of UNEP-AIT',
    place: 'Bangkok',
    chapter: 'Systems Thinking',
    outcome: 'Drafted regional and national sustainable-development strategies. Built integrated policy frameworks via systems thinking.',
  },
  {
    range: '2010 — 2025',
    span: 'Fifteen years',
    role: 'Economic Affairs Officer',
    org: 'United Nations ESCAP',
    place: 'Bangkok',
    chapter: 'Deployable Policy',
    outcome: 'Built the e-resilience monitoring dashboard adopted by member states. Contributed to the AP-IS Action Plan 2022 — 2026. Led RECI delivery in Kazakhstan, Kyrgyzstan, Mongolia. Chaired SPECA Working Group on Innovation & Technology. Originated the Digital Maturity Framework, the Digital Business Card concept, and blockchain-based trusted data repositories.',
    expanded: true,
  },
  {
    range: '2025 —',
    span: 'Now',
    role: 'Independent Practice',
    org: 'Free flight',
    place: 'Asia-Pacific',
    chapter: 'Free Flight',
    outcome: 'Open to governments, international organisations, and individual leaders. Advisory, executive coaching, and the projects that need both.',
  },
];

const ACHIEVEMENTS = [
  { kicker: 'Tooling',     title: 'E-resilience monitoring dashboard', body: 'Designed and delivered through ESCAP. Adopted by member states. The piece of work that proved policy could ship as software.' },
  { kicker: 'Plan',        title: 'AP-IS Action Plan, 2022 — 2026',     body: 'Contributing author. Asia-Pacific Information Superhighway — the regional digital backbone framework.' },
  { kicker: 'Field',       title: 'RECI · three-country delivery',      body: 'Regional Economic Cooperation & Integration. Programme delivery across Kazakhstan, Kyrgyzstan and Mongolia.', countries: ['KZ','KG','MN'] },
  { kicker: 'Convening',   title: 'SPECA Working Group',                body: 'Chair, Innovation & Technology for Sustainable Development. Special Programme for the Economies of Central Asia.' },
  { kicker: 'Framework',   title: 'Digital Maturity Framework',         body: 'Originator. Followed by the Digital Business Card concept and blockchain-based trusted data repositories.' },
  { kicker: 'Authorship',  title: 'World Water Development Report 2016', body: 'Water and Jobs. UNESCO. Co-author.' },
];

const FREE_FLIGHT = [
  {
    tag: 'Still on the boards',
    title: 'Where she serves.',
    body: 'Technical Advisory Group, Global Learning Collaborative for Health Systems Resilience (GLC4HSR).',
    placeholder: 'Additional memberships — to be added.',
  },
  {
    tag: 'Projects in motion',
    title: 'What is being built.',
    body: '',
    placeholder: 'Two or three current engagements — copy to be supplied.',
  },
  {
    tag: 'Available for',
    title: 'Where she shows up.',
    quote: 'Conversations with governments, international organisations, and individual leaders working on digital transformation, e-resilience, and digital public services for small and medium enterprises — and executive coaching for those navigating complex transitions of their own.',
  },
];

const PRACTICE = [
  { kicker: '01', title: 'Strategic Advisory', body: 'For ministries and international organisations on digital transformation, e-resilience, and integrated policy frameworks.' },
  { kicker: '02', title: 'Programme Architecture', body: 'Designing deployable interventions: dashboards, maturity diagnostics, trusted data repositories.' },
  { kicker: '03', title: 'Executive Coaching', body: 'ICF Level 1 coaching for senior leaders navigating their own complex transitions.' },
];

const PRESS = [
  { year: '2016', label: 'World Water Development Report — Water and Jobs', org: 'UNESCO · Co-author' },
  { year: '2022', label: 'AP-IS Action Plan 2022 — 2026', org: 'UN ESCAP · Contributing author' },
  { year: '2023', label: 'Digital Maturity Framework — methodology paper', org: 'UN ESCAP · Originator' },
  { year: '2024', label: 'Trusted data repositories on blockchain', org: 'UN ESCAP · Concept paper' },
];

const CONTACT = {
  phone: '+66 81 344 3651',
  email: '[ to be supplied ]',
  linkedin: 'aida-karazhanova-phd-50450015',
  linkedinUrl: 'https://www.linkedin.com/in/aida-karazhanova-phd-50450015/',
  location: 'Bangkok · Almaty',
};

// PhotoSlot — always renders a real photo (no placeholders).
// `src` is required; aspect ratio + optional border preserved per variant.
function PhotoSlot({ src, caption, ratio = '4/5', border = '1px solid var(--rule, #ddd)', position = 'center' }) {
  return (
    <div
      role="img"
      aria-label={caption || ''}
      style={{
        width: '100%',
        aspectRatio: ratio,
        backgroundImage: `url("${src}")`,
        backgroundSize: 'cover',
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat',
        border,
        backgroundColor: 'var(--paper-2, #eee)',
      }}
    />
  );
}

Object.assign(window, { PROFILE, MILESTONES, ACHIEVEMENTS, FREE_FLIGHT, PRACTICE, PRESS, CONTACT, PhotoSlot });
