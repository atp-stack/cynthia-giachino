import { BOOKS, BOOKS_HEADING } from '../content'
import { covers } from '../assets'
import WheatSprig from './WheatSprig'

export default function Books() {
  return (
    <section id="books" className="relative bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-site px-6 lg:px-10">
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
                  <a href="#contact" className="btn-gold mt-5 !px-6 !py-2.5 !tracking-nav">
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
      </div>
    </section>
  )
}
