# aida-karazhanova

Personal site for Dr. Aida N. Karazhanova — Regional Architect
of Digital Transformation, Asia-Pacific.

Live: https://aida-karazhanova.vercel.app
GitHub: https://github.com/itachi-studio/aida-karazhanova
Vercel project: `aida-karazhanova` (scope `skandar11s-projects`).

## What this is

A 6-page React SPA. Mobile-first. Diplomatic visual language
(ivory + UN blue + deep navy + gold). Single font family —
Inter / Inter Tight. No mono / no machine-look fonts.

Built on the same stack as `maksi/` (Vite + React 19 + TS +
Tailwind 4 + react-router-dom v7), trimmed down — no analytics,
no lead-modal, no Telegram function. Just static pages and
markdown-like content files.

> History: previously this folder held 5 babel-inline JSX
> variants (`editorial`, `diplomatic`, `bold`, `swiss`, `warm`)
> with a footer switcher. On 2026-05-13 we picked `diplomatic`,
> wiped the rest, and rebuilt as a proper SPA per Aida's
> May 2026 content revision (v2). See commit `354f769`.

## Routes

| Path | What's on it |
|---|---|
| `/` | Hero · 3 Practice Areas · Portfolio preview (3 items) · Background = Career Chronicle (5 entries) · Final CTA |
| `/portfolio` | All 8 portfolio items (Digital Maturity Framework, Digital Business Card, E-Resilience Dashboard, ICT Co-Deployment, APIS papers, Green Bridge, Climate Action, Selected ESCAP/IsDB/RF publications) |
| `/publications` | Papers & publications timeline table |
| `/partners` | Partners & Networks — Convening (committees, working groups) + Boards (GLC4HSR + TBC) + Projects in Motion |
| `/credentials` | Core (PhD / ABNLP / ICF) + Executive Education (UC Berkeley / Metafuture / UNSSC / SOAS / UNDP / TBC) |
| `/contact` | phone / email / LinkedIn / location |

No lead form anywhere — just `mailto:` / `tel:` / LinkedIn
links. Aida's audience converts via direct contact, not a
funnel.

## Where to edit content

**All copy lives in `src/shared/data/*.ts` — that's the
single source of truth.** If you're updating text, dates,
adding portfolio items, certificates, publications, board
memberships — edit one of these files:

```
src/shared/data/
├── profile.ts         hero copy, tagline, descriptor, "available for"
├── career.ts          5 career entries (dates, role, org, body, chapter)
├── practice.ts        3 practice areas
├── portfolio.ts       8 portfolio items (title, tag, summary, relevance, impact)
├── publications.ts    publication timeline rows
├── partners.ts        CONVENING + BOARDS + PROJECTS_IN_MOTION
├── credentials.ts     CORE_CREDENTIALS + EXECUTIVE_EDUCATION
└── contact.ts         phone, email, LinkedIn URL, location
```

Page components in `src/pages/*` just lay out these arrays —
you almost never need to touch them when content changes.

## Photos

All photos are placeholders today (`ImgSlot` component with a
diagonal-stripe pattern). When real photos arrive:

1. Drop files into `public/photos/<name>.jpg`.
2. Replace `<ImgSlot ratio="..." label="..." />` with
   `<img src="/photos/<name>.jpg" alt="..." className="w-full aspect-[4/5] object-cover rounded-lg" />`
   (or extend `ImgSlot` to accept an optional `src`).

Editorial direction per Aida (May 2026 revision):
ministerial / high-level forum moments, panel discussions,
bilateral diplomatic meetings, working sessions with dashboards
and policy tools, leadership moments with teams and workshops.
**Avoid:** repetitive portraits, casual social images, images
without professional context.

Aspect ratios already in use: `4/5` (hero portrait), `4/3`
(portfolio covers), `16/10` (home portfolio preview cards).
Keep them — they're tuned for the layout.

## Design system

Diplomatic palette tokens in `src/index.css`:

- `--ink: #0c1f3d` — deep navy text
- `--ink-soft: #2a3a55`
- `--ink-mute: #6b7990` — for italic eyebrows / meta
- `--paper: #ffffff`
- `--bg: #f4f1ea` — warm ivory page background
- `--bg-soft: #ebe6db` — section wells
- `--accent: #0a3878` — deep UN blue (primary)
- `--accent-2: #5b92e5` — lighter UN blue (accents on dark)
- `--gold: #c9a548`

Type:
- `font-sans` → Inter (body)
- `font-display` → Inter Tight (h1 / h2 / large display)
- **One human accent:** `.italic-accent` — apply to one word
  inside an h1/h2 (e.g. `<span className="italic-accent">talk.</span>`).
  This is the brand's one humanizing typographic move. Do not
  invent other italic accents.

Radius: 8px everywhere (`rounded-lg` in Tailwind classes here).

## Shared UI

`src/shared/ui/`:
- `Layout` — Header + Outlet + Footer. Scrolls to top on
  route change.
- `Header` — sticky 56/64px, mobile drawer. Nav: Portfolio /
  Publications / Partners & Networks / Credentials / Contact.
- `Footer` — dark navy, navigate / contact / © columns.
- `Section` — `<Section surface="paper|well|ink" compact>` —
  use this for every section. Holds the 1120px container and
  padding. Don't write raw `<section className="py-...">`.
- `SectionHead` — eyebrow + h2 + sub. Use `italic-accent`
  inside the title.
- `PageHero` — eyebrow + h1 + sub (no CTA) for internal page
  tops. Use this on every page except `/`.
- `Card` — paper / dark / well variants.
- `ImgSlot` — placeholder. See "Photos" above.
- `Button` / `LinkButton` — primary (UN blue) / outline / ghost
  / link. No "WhatsApp variant" — this isn't maksi.

## Local dev

```bash
npm install
npm run dev          # vite on default port
npm run build        # tsc --noEmit && vite build
```

There is no API / serverless function — pure static SPA. No
env vars needed locally.

## Deploy

Vercel project `aida-karazhanova` is already linked
(`.vercel/project.json` committed). Two paths:

**Auto via GitHub** — push to `main` on
`itachi-studio/aida-karazhanova`. Vercel picks it up.

**Manual** — from this directory:

```bash
vercel --prod --yes --token "$VERCEL_TOKEN"
# then alias the new deployment to the stable URL:
vercel alias set <new-deployment>.vercel.app aida-karazhanova.vercel.app --token "$VERCEL_TOKEN"
```

`VERCEL_TOKEN` is in the operator's shell env (not in this
repo).

`vercel.json` already has the SPA fallback rewrite — every
non-asset path serves `index.html`, so client-side routing
works in production.

## Conventions

- `@` alias for `src/`. Imports use `@/shared/...`,
  `@/pages/...`.
- Mobile-first. Verify on 375px before claiming done. Avoid
  horizontal scroll — `html, body { overflow-x: clip }` in
  `index.css` is the safety net, don't remove it.
- No emojis in source.
- No CTAs that need infrastructure (forms, analytics,
  trackers). If Aida asks for one later, talk to Skandar before
  wiring it.
- Don't reintroduce mono / serif fonts. One family — Inter.

## Pending content (per Aida's May 2026 doc)

These are still TBC in the data files:

- Email (currently `aidakarazhanova1@gmail.com` — confirm
  the professional address).
- Additional board memberships beyond GLC4HSR.
- Current "projects in motion" (2–3 engagements).
- Certificate dates and exact programme titles for
  UC Berkeley / Metafuture / UNSSC / SOAS / UNDP.
- Portfolio document covers / visual assets.
- Real photo set.
- LinkedIn-highlight publications for the authorship card.

When any of these arrive, update the relevant file in
`src/shared/data/` — that's it.
