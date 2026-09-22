import { FormEvent, useState } from 'react'
import { CONTACT, SOCIAL } from '../content'

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClass =
  'w-full border-b border-gold-light/60 bg-transparent px-1 py-2.5 font-sans text-sm text-ink ' +
  'placeholder:text-ink-soft/50 focus:border-gold focus:outline-none'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot — real visitors never fill this hidden field.
    if ((data.get('company') as string)?.trim()) {
      setStatus('success')
      form.reset()
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Request failed')
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMsg(CONTACT.error)
    }
  }

  return (
    <section id="contact" className="bg-lavender-bg py-16 lg:py-24">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-[1.7rem] font-semibold uppercase tracking-[0.16em] text-gold lg:text-[2rem]">
            {CONTACT.heading}
          </h2>
          <span className="gold-rule mx-auto mt-3" />
          <p className="mt-6 font-sans text-sm leading-6 text-ink-soft">{CONTACT.intro}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-xl space-y-6"
          noValidate
        >
          {/* Honeypot field — hidden from sighted users, tempting to bots */}
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-sans text-xs uppercase tracking-nav text-ink-soft">
                {CONTACT.fields.name}
              </label>
              <input id="name" name="name" type="text" required className={inputClass + ' mt-1'} />
            </div>
            <div>
              <label htmlFor="email" className="font-sans text-xs uppercase tracking-nav text-ink-soft">
                {CONTACT.fields.email}
              </label>
              <input id="email" name="email" type="email" required className={inputClass + ' mt-1'} />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="font-sans text-xs uppercase tracking-nav text-ink-soft">
              {CONTACT.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={inputClass + ' mt-1 resize-none'}
            />
          </div>

          <div className="flex flex-col items-center gap-4 pt-2 text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-gold disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? CONTACT.sending : CONTACT.cta}
            </button>

            {status === 'success' && (
              <p role="status" className="font-sans text-sm text-gold-deep">
                {CONTACT.success}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="font-sans text-sm text-red-700">
                {errorMsg}{' '}
                <a href={SOCIAL.email} className="underline underline-offset-2">
                  {SOCIAL.email.replace('mailto:', '')}
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
