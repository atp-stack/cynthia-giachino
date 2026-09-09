import { Facebook, Instagram, Mail } from 'lucide-react'
import { FOOTER_COPY, SOCIAL } from '../content'

const socials = [
  { Icon: Facebook, href: SOCIAL.facebook, label: 'Facebook' },
  { Icon: Instagram, href: SOCIAL.instagram, label: 'Instagram' },
  { Icon: Mail, href: SOCIAL.email, label: 'Email' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-footer-purple text-white">
      <div className="mx-auto flex max-w-site flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between lg:px-10">
        <p className="font-sans text-xs tracking-wide text-white/90">{FOOTER_COPY}</p>
        <div className="flex items-center gap-5">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gold-light transition-colors hover:text-white"
            >
              <Icon size={18} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
