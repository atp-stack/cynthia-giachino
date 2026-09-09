import { ABOUT } from '../content'
import { authorImg, valuesWheel } from '../assets'

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-lavender-bg py-16 lg:py-24"
    >
      {/* Soft lavender watercolor wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(120% 90% at 12% 20%, #CFC7E0 0%, transparent 55%), radial-gradient(120% 90% at 92% 85%, #C8CEDF 0%, transparent 55%), radial-gradient(100% 100% at 50% 50%, #EEEAF4 0%, #E3DEEE 100%)',
        }}
      />

      <div className="relative mx-auto grid max-w-site items-center gap-10 px-6 lg:grid-cols-[minmax(0,230px)_minmax(0,1fr)_minmax(0,380px)] lg:gap-12 lg:px-10">
        {/* Headshot */}
        <div className="mx-auto w-full max-w-[230px]">
          <img
            src={authorImg}
            alt="Portrait of Cynthia J. Giachino"
            className="w-full rounded-md border-2 border-gold-light object-cover shadow-[0_18px_40px_-18px_rgba(46,50,59,0.5)]"
          />
        </div>

        {/* Bio */}
        <div className="max-w-xl">
          <h2 className="font-display text-[1.7rem] font-semibold uppercase tracking-[0.08em] text-gold lg:text-[2rem]">
            {ABOUT.heading}
          </h2>
          <span className="gold-rule mt-4" />
          <p className="mt-6 font-sans text-[0.95rem] leading-7 text-ink-soft">
            {ABOUT.bio.map((seg, i) =>
              seg.italic ? (
                <em key={i}>{seg.text}</em>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </p>
        </div>

        {/* Values wheel — full composite from materials/resilience.png */}
        <div className="mx-auto w-full max-w-[380px]">
          <img
            src={valuesWheel}
            alt="Values wheel: Rise, Grow, Heal, Endure"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
