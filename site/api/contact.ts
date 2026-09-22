import type { IncomingMessage, ServerResponse } from 'node:http'
import nodemailer from 'nodemailer'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Vercel's Node runtime parses JSON/form bodies onto `req.body` before the
// handler runs; the stock `http` types don't know about that, so we extend
// them just enough to avoid depending on the full @vercel/node package.
type VercelRequest = IncomingMessage & { body?: unknown }
type VercelResponse = ServerResponse & {
  status(code: number): VercelResponse
  json(body: unknown): void
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const body = typeof req.body === 'string' ? safeJsonParse(req.body) : req.body
  const { name, email, message, company } = (body ?? {}) as Record<string, unknown>

  // Honeypot: a hidden field real visitors never fill in.
  if (typeof company === 'string' && company.trim() !== '') {
    return res.status(200).json({ ok: true })
  }

  if (
    typeof name !== 'string' ||
    !name.trim() ||
    typeof email !== 'string' ||
    !EMAIL_RE.test(email) ||
    typeof message !== 'string' ||
    !message.trim()
  ) {
    return res.status(400).json({ error: 'Please fill in your name, a valid email, and a message.' })
  }

  const GMAIL_USER = process.env.GMAIL_USER
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
  const CONTACT_TO = process.env.CONTACT_TO || GMAIL_USER

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('contact API: missing GMAIL_USER / GMAIL_APP_PASSWORD env vars')
    return res.status(500).json({ error: 'Email is not configured yet. Please try again later.' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  })

  try {
    await transporter.sendMail({
      from: `"Cynthia J. Giachino — website" <${GMAIL_USER}>`,
      to: CONTACT_TO,
      replyTo: `${name} <${email}>`,
      subject: `New website message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(
        message,
      ).replace(/\n/g, '<br>')}</p>`,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('contact API: failed to send email', err)
    return res.status(502).json({ error: 'Could not send your message right now. Please try again later.' })
  }
}

function safeJsonParse(raw: string): unknown {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function escapeHtml(s: string) {
  const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  return s.replace(/[&<>"']/g, (c) => map[c])
}
