// All copy pulled verbatim from materials/layout.png — the approved design.

export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'BOOKS', href: '#books' },
  { label: 'ABOUT THE AUTHOR', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
] as const

export const SOCIAL = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  email: 'mailto:hello@cynthiagiachino.com',
} as const

export const HERO = {
  kicker: 'Stories of',
  headline: ['Resilience.', 'Strength.', 'Survival.'],
  sub: ['Real experiences.', 'Unbreakable spirit.', 'Hope that rises.'],
  cta: 'EXPLORE THE BOOKS',
}

export const ABOUT = {
  heading: 'ABOUT THE AUTHOR',
  // Verbatim from layout.png. *Between Lines* is italicised in the layout.
  bio: [
    { text: 'Cynthia J. Giachino lived in the Upper Peninsula of Michigan where she completed her education, including two majors at Northern Michigan University. She is the author of ' },
    { text: '"Quiet. Fear."', italic: false },
    { text: ', an autobiographical novel about her life, told through the protagonist, Lilly. She is now releasing her second novel, ' },
    { text: 'Between Lines', italic: true },
    { text: ', an adventure crime novel reflecting her personal experiences from being scammed in the field of publishing and learning about cyber labor camps. She hopes to globally inform people about these fraudulent camps through the story.' },
  ] as { text: string; italic?: boolean }[],
}

export const BOOKS_HEADING = 'HER BOOKS'

export const BOOKS = [
  {
    id: 'quiet-fear',
    title: 'QUIET. FEAR.',
    blurb: 'True Story of Survival, Resilience, and Confronting the Unknown.',
    cta: 'LEARN MORE',
  },
  {
    id: 'between-lines',
    title: 'BETWEEN LINES',
    blurb: 'One Woman, One Man, One Scam—And a Decision that will Change Both.',
    cta: 'LEARN MORE',
  },
] as const

export const QUOTE = 'No matter where you start, resilience can take you anywhere.'

export const FOOTER_COPY = '© 2026 Cynthia J. Giachino. All Rights Reserved.'
