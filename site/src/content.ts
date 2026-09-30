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
  email: 'mailto:authorservices@page-and-pixel.com',
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

export const BUY_LABEL = 'BUY NOW'

export const BOOKS = [
  {
    id: 'quiet-fear',
    title: 'QUIET. FEAR.',
    blurb: 'True Story of Survival, Resilience, and Confronting the Unknown.',
    // Longer summary supplied by the author.
    summary:
      'Cynthia J. Giachino shares her life story in this unique autobiographical novel, Quiet. Fear. The author moves swiftly into retelling her life story. She begins therapy with her psychologist in the year 1986, and moves back to the 1950’s — a time of childhood trauma. Slowly, the threads of love, lies and secrets begin to unravel for the author (Lilly) and her family. This is an unforgettable journey of twists and turns.',
    links: [
      {
        label: 'AMAZON',
        href: 'https://www.amazon.com/Quiet-Fear-Autobiographical-Cynthia-Giachino/dp/1959450395/ref=tmm_hrd_swatch_0?_encoding=UTF8&sr=8-1',
      },
      {
        label: 'BARNES & NOBLE',
        href: 'https://www.barnesandnoble.com/w/quiet-fear-cynthia-j-giachino/1151370868?ean=9798997848804',
      },
      {
        label: 'PRINT EDITION',
        href: 'https://shop.ingramspark.com/b/084?params=31DrEmoblxpLf2JIpcNaP4R3kk4l7Yh87XAXKXfl9FR',
      },
    ],
  },
  {
    id: 'between-lines',
    title: 'BETWEEN LINES',
    blurb: 'One Woman. One Man. One Scam – And a Decision that will Change Both.',
    // Longer summary supplied by the author.
    summary:
      'Harris, a young Asian American, travels to Bangkok for his first professional job but is kidnapped, sold to a warlord, and forced to work in a scam labor camp. Stripped of his identity, he becomes Ricco R. Smith. Ricco forms a bond with Irene, a retired school teacher living in Chicago publishing her first book, and whom Ricco is scamming. With the help of her friends, Betty and Stella, Irene begins investigating Ricco’s emails, leading them to unforgettable journeys in London and Thailand.',
    links: [
      {
        label: 'AMAZON',
        href: 'https://www.amazon.com/Between-Lines-Cynthia-J-Giachino/dp/B0FPR6QMYL/ref=tmm_hrd_swatch_0',
      },
      {
        label: 'BARNES & NOBLE',
        href: 'https://www.barnesandnoble.com/w/between-lines-cynthia-j-giachino/1148189853?ean=9798997848835',
      },
      {
        label: 'PRINT EDITION',
        href: 'https://shop.ingramspark.com/b/084?params=QLyTQF9mMUUYszW659sfvaNliPDI9pc9oBslv5olgoA',
      },
    ],
  },
] as const

export const QUOTE = 'No matter where you start, resilience can take you anywhere.'

export const CONTACT = {
  heading: 'CONTACT',
  intro:
    'Have a question, an event or media inquiry, or just want to say hello? Send a message below — Cynthia’s team will get back to you soon.',
  fields: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
  },
  cta: 'SEND MESSAGE',
  sending: 'SENDING…',
  success: 'Thank you — your message has been sent.',
  error: 'Something went wrong sending your message. Please try again, or email us directly at',
}

export const FOOTER_COPY = '© 2026 Cynthia J. Giachino. All Rights Reserved.'
