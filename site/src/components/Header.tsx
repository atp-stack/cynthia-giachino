import { useEffect, useState } from 'react'
import { Facebook, Instagram, Mail, Menu, X } from 'lucide-react'
import { NAV_LINKS, SOCIAL } from '../content'
import { phoenixLogo } from '../assets'

const socials = [
  { Icon: Facebook, href: SOCIAL.facebook, label: 'Facebook' },
  { Icon: Instagram, href: SOCIAL.instagram, label: 'Instagram' },
  { Icon: Mail, href: SOCIAL.email, label: 'Email' },
]

export default function Header() {
  const [active, setActive] = useState('#home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-4 lg:px-10 lg:pr-28 xl:pr-32">
        {/* Wordmark */}
        <a href="#home" className="flex items-center gap-3">
          <img src={phoenixLogo} alt="" className="h-9 w-auto sm:h-11 lg:h-14" />
          <span className="font-display text-[0.95rem] uppercase tracking-[0.1em] text-gold sm:text-lg sm:tracking-wordmark lg:text-[1.6rem]">
            Cynthia J. Giachino
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 font-sans text-xs uppercase tracking-nav text-ink transition-colors hover:text-gold"
            >
              {l.label}
              {active === l.href && (
                <span className="absolute -bottom-0.5 left-0 h-px w-6 bg-gold" />
              )}
            </a>
          ))}
          {/* Social icons on desktop are part of the approved hero composite
              (materials/Orig photo top section.jfif); links live in the footer. */}
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-ink lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mx-4 flex flex-col gap-1 bg-cream/95 px-6 py-4 shadow-lg backdrop-blur lg:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-sans text-sm uppercase tracking-nav text-ink"
            >
              {l.label}
            </a>
          ))}
          <span className="mt-3 flex items-center gap-5 border-t border-gold-light/40 pt-3">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="text-ink hover:text-gold">
                <Icon size={20} strokeWidth={1.75} />
              </a>
            ))}
          </span>
        </nav>
      )}
    </header>
  )
}
