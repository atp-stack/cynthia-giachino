import { QUOTE } from '../content'
import { mountainsImg } from '../assets'
import WheatSprig from './WheatSprig'

export default function Quote() {
  return (
    <section
      className="relative flex min-h-[340px] items-center justify-center overflow-hidden lg:min-h-[420px]"
    >
      <img
        src={mountainsImg}
        alt="A misty mountain road winding through rocky terrain"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/55 via-cream/35 to-cream/55" />

      <figure className="relative mx-auto max-w-2xl px-6 text-center">
        <blockquote className="font-display text-[1.7rem] italic leading-snug text-ink drop-shadow-[0_1px_10px_rgba(241,239,236,0.8)] sm:text-4xl">
          {QUOTE}
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-20 bg-current sm:w-28" />
          <WheatSprig className="h-6 w-20 flex-none" />
          <span className="h-px w-20 bg-current sm:w-28" />
        </figcaption>
      </figure>
    </section>
  )
}
