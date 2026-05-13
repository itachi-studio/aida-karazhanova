export interface Credential {
  institution: string
  programme: string
  detail: string
  year?: string
}

export const CREDENTIALS_INTRO =
  'A career built on both practice and continuous learning — at the intersection of policy, technology, and leadership.'

export const CORE_CREDENTIALS: Credential[] = [
  {
    institution: 'PhD',
    programme: 'Biochemistry & Molecular Biology',
    detail: 'Almaty',
    year: '1991 — 1997',
  },
  {
    institution: 'ABNLP',
    programme: 'Master Practitioner',
    detail: 'NLP coaching certification',
    year: 'since 2013',
  },
  {
    institution: 'ICF',
    programme: 'Certified Coach',
    detail: 'Level 1',
  },
]

export const EXECUTIVE_EDUCATION: Credential[] = [
  {
    institution: 'UC Berkeley',
    programme: 'Data Science',
    detail: 'Executive / Professional Programme',
    year: 'TBC',
  },
  {
    institution: 'UC Berkeley',
    programme: 'Digital Transformation',
    detail: 'Executive / Professional Programme',
    year: 'TBC',
  },
  {
    institution: 'Metafuture',
    programme: 'Become a Futurist',
    detail: 'Futures studies and foresight methodology',
    year: 'TBC',
  },
  {
    institution: 'UNSSC',
    programme: 'UN System Staff College',
    detail: 'Learning and leadership programmes',
  },
  {
    institution: 'SOAS University of London',
    programme: 'Programme — TBC',
    detail: 'Course / programme title to be confirmed',
  },
  {
    institution: 'UNDP',
    programme: 'Development Specialist Programme',
    detail: 'Multilateral development practice',
    year: 'TBC',
  },
  {
    institution: 'UN System Certifications',
    programme: 'Additional UN certifications',
    detail: 'To be listed from LinkedIn',
  },
  {
    institution: 'Other Executive Education',
    programme: 'Additional items',
    detail: 'To be supplied from LinkedIn and Google Drive',
  },
]
