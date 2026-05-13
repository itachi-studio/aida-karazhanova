export interface PortfolioItem {
  id: string
  title: string
  tag: string
  summary: string
  relevance: string
  impact: string
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'dmf',
    title: 'Digital Maturity Framework',
    tag: 'FRAMEWORK',
    summary:
      'A diagnostic methodology for assessing the digital readiness of member state economies. Originated at UN ESCAP.',
    relevance:
      'Adopted as a reference tool for national digital transformation planning across Asia-Pacific.',
    impact:
      'Led to the Digital Business Card concept and blockchain-based trusted data repository work.',
  },
  {
    id: 'dbc',
    title: 'Digital Business Card — Proof of Concept',
    tag: 'CONCEPT',
    summary:
      'A proof-of-concept for portable, blockchain-verified digital identity for SMEs and public institutions.',
    relevance:
      'Addresses digital trust and verification gaps in developing digital economies.',
    impact: 'Conceptual foundation for trusted data repository architecture.',
  },
  {
    id: 'e-resilience',
    title: 'E-Resilience Monitoring Dashboard',
    tag: 'TOOLING',
    summary:
      'A live monitoring and diagnostic tool for national e-resilience assessment. Designed and delivered through UN ESCAP.',
    relevance:
      'Translated policy indicators into real-time software adopted by member states.',
    impact:
      'Adopted in time series across Asia-Pacific member states. Proved that policy can ship as software.',
  },
  {
    id: 'co-deployment',
    title: 'ICT Co-Deployment Simulator and Transboundary Portal',
    tag: 'TOOLING',
    summary:
      'Regional planning tool for integrated cross-border deployment of ICT, energy, and transport infrastructure.',
    relevance:
      'Enables coordinated infrastructure investment across Central and East Asian economies.',
    impact: 'Planning support tool for RECI regional programmes.',
  },
  {
    id: 'apis',
    title: 'APIS Working Papers',
    tag: 'PLAN',
    summary:
      'Analytical and policy papers supporting the Asia-Pacific Information Superhighway Action Plan 2022–2026.',
    relevance:
      'Foundational documents for Asia-Pacific regional digital connectivity governance.',
    impact:
      'Contributed to ESCAP intergovernmental deliberations and member state action plans.',
  },
  {
    id: 'green-bridge',
    title: 'Green Bridge Initiative — Astana',
    tag: 'PLAN',
    summary:
      'Regional framework for green economy transition developed in partnership with ESCAP and member states, 2010–2013.',
    relevance:
      'Connected sustainable development commitments to regional cooperation mechanisms.',
    impact:
      'Resourceful to Pan-European and GA resolutions. Referenced in Green Bridge Partnership Programme.',
  },
  {
    id: 'climate',
    title: 'Climate Action Digital Platforms',
    tag: 'TOOLING',
    summary:
      'Digital tools and analytical platforms in support of climate action programming and water-climate nexus work.',
    relevance: 'Integrated data and digital delivery into climate policy implementation.',
    impact: 'Impact detail to be confirmed.',
  },
  {
    id: 'selected-pubs',
    title: 'Selected ESCAP, IsDB and RF Publications',
    tag: 'AUTHORSHIP',
    summary:
      'Major co-authored and authored publications across sustainable development, water resilience, and digital transformation.',
    relevance:
      'Peer-reviewed and institutional publications informing regional policy agendas.',
    impact: 'Highlight publications to be selected from LinkedIn.',
  },
]
