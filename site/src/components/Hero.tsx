import { HERO } from '../content'
import { heroImg } from '../assets'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Approved hero composite: beach photo + soaring phoenix + watercolor
          fade + social icons, all baked into the source image. */}
      <img
        src={heroImg}
        alt="A woman walks along the shoreline toward the sunset, a phoenix rising in the sky"
        className="h-[clamp(560px,66vw,820px)] w-full object-cover object-right"
      />
      {/* Lavender fade at the very top, behind the nav */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-lavender-soft/80 to-transparent" />
      {/* Soft light wash on the left so the headline stays legible, echoing
          the watercolor edge in the source art */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#efeaf2]/95 via-[#efeaf2]/55 to-transparent sm:w-4/5 lg:w-[58%]" />

      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-site items-center px-6 lg:px-10">
          <div className="w-full max-w-[24rem] pt-16 lg:max-w-[26rem]">
            <p className="font-display text-[1.7rem] text-ink sm:text-3xl lg:text-4xl">
              {HERO.kicker}
            </p>
            <h1 className="mt-1 font-display text-[2.6rem] font-medium leading-[1.12] text-gold sm:text-5xl lg:text-[3.4rem]">
              {HERO.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <span className="gold-rule mt-6" />

            <div className="mt-5 space-y-1 font-sans text-sm text-ink-soft sm:text-[0.95rem]">
              {HERO.sub.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <a href="#books" className="btn-gold mt-7">
              {HERO.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
