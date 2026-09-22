import { BOOKS, BOOKS_HEADING, QUOTE } from '../content'
import { covers, mountainsImg } from '../assets'
import WheatSprig from './WheatSprig'

/**
 * "Her Books" and the closing quote share a single section so the misty
 * mountain photo (materials/cyndee2 (1).jfif) reads as one continuous
 * backdrop behind both.
 */
export default function Books() {
  return (
    <section id="books" className="relative overflow-hidden py-16 lg:py-24">
      {/* Shared backdrop */}
      <img
        src={mountainsImg}
        alt="A misty mountain road winding through rocky terrain"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Legibility wash — denser over the books, lighter toward the quote */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/92 via-cream/74 to-cream/58" />

      <div className="relative mx-auto max-w-site px-6 lg:px-10">
        {/* Her Books */}
        <div className="flex flex-col items-center">
          <h2 className="font-display text-[1.7rem] font-semibold uppercase tracking-[0.16em] text-gold lg:text-[2rem]">
            {BOOKS_HEADING}
          </h2>
          <span className="gold-rule mt-3" />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          {BOOKS.map((book, idx) => (
            <div key={book.id} className="contents">
              <article className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                <img
                  src={covers[book.id]}
                  alt={`${book.title} book cover`}
                  className="w-40 flex-none shadow-[0_22px_45px_-15px_rgba(46,50,59,0.55)] sm:w-44"
                  style={{ transform: 'perspective(1100px) rotateY(-6deg)' }}
                />
                <div className="max-w-xs text-center sm:text-left">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-gold">
                    {book.title}
                  </h3>
                  <span className="gold-rule mx-auto mt-2 sm:mx-0" />
                  <p className="mt-4 font-sans text-sm leading-6 text-ink-soft">
                    {book.blurb}
                  </p>
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold mt-5 !px-6 !py-2.5 !tracking-nav"
                  >
                    {book.cta}
                  </a>
                </div>
              </article>

              {idx === 0 && (
                <div className="hidden items-center justify-center lg:flex">
                  <WheatSprig vertical className="h-44 w-8 text-gold/70" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <figure className="mx-auto mt-20 max-w-2xl text-center lg:mt-28">
          <blockquote className="font-display text-[1.7rem] italic leading-snug text-ink drop-shadow-[0_1px_10px_rgba(241,239,236,0.85)] sm:text-4xl">
            {QUOTE}
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center gap-4 text-gold">
            <span className="h-px w-20 bg-current sm:w-28" />
            <WheatSprig className="h-6 w-20 flex-none" />
            <span className="h-px w-20 bg-current sm:w-28" />
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
