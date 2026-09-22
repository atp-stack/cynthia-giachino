# Cynthia J. Giachino — Author Website

Single-page author site built to match `../materials/layout.png`.

## Stack
React 18 · Vite · TypeScript · Tailwind CSS · lucide-react (icons)

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Structure
- `src/content.ts` — all copy (verbatim from the approved layout, plus the Contact section)
- `src/assets/` — imagery copied from `../materials/`
- `src/components/` — `Header`, `Hero`, `About`, `Books` (includes the closing quote),
  `Contact`, `Footer`, `WheatSprig`
- `api/contact.ts` — Vercel serverless function that emails contact-form submissions
- `tailwind.config.js` — palette + font tokens (single source of truth)

---

## Asset map

| Layout element | Source file in `materials/` | Used as |
|---|---|---|
| Header phoenix logo | `resilience.png` (phoenix cropped out) | `src/assets/phoenix-logo.png` |
| Hero background (beach + woman + phoenix + watercolor + baked social icons) | `Orig photo top section.jfif` | `src/assets/hero.jpg` — used as-is per sign-off |
| Author headshot | `Selected photo (1).jfif` | `src/assets/author.jpg` |
| RISE / GROW / HEAL / ENDURE values wheel (icons + circle + labels, all baked in) | `resilience.png` | `src/assets/values-wheel.png` — used as one image per sign-off |
| Between Lines cover | `Between Lines.png` | `src/assets/between-lines.png` |
| Quiet. Fear. cover | `Quiet.Fear.png` | `src/assets/quiet-fear.png` |
| Quote-band mountain photo | `cyndee2 (1).jfif` | `src/assets/mountains.jpg` |
| Social icons (Facebook / Instagram / email) — nav & footer | *none in materials* | lucide-react SVG icons, tinted to palette |
| Wheat / laurel decorative accents | *none in materials* | inline SVG (`WheatSprig.tsx`), gold palette |
| Watercolor texture backgrounds | *none in materials* | CSS gradients (About wash, hero left fade, top lavender fade) |

### Unused / superseded materials
- `Orig photo top section.png` — the clean beach plate (no woman/phoenix). Superseded by the composed `.jfif` per sign-off.
- `resilience.png` full-res also drives both the logo crop and the wheel.

### Substitutions made (flagged for sign-off)
1. **Social icons** — no icon assets existed; using Lucide's Facebook / Instagram / Mail glyphs.
2. **Wheat/laurel flourishes** — no accent assets existed; drawn as a small inline SVG sprig in gold.
3. **Watercolor washes** — no texture files existed; approximated with CSS gradients.
4. On desktop the hero's social icons are the ones baked into `Orig photo top section.jfif`
   (not clickable — accepted trade-off of using that composite as-is). Clickable social
   links live in the footer; the mobile menu also has clickable links.

---

> Footer copyright reads **© 2026** (updated from the layout's 2024 for launch year).

## Palette (sampled from `layout.png`) — CONFIRMED

| Token | Hex | Use |
|---|---|---|
| `gold` | `#A2783A` | buttons, headings, wordmark, rules, icons |
| `gold.deep` | `#8C6529` | button hover / pressed |
| `gold.light` | `#C9A45C` | hairlines, faint accents |
| `ink` | `#2E323B` | "Stories of", nav links, dark headings |
| `ink.soft` | `#4A4A4A` | body copy |
| `ink.navy` | `#1F2A3D` | wheel labels / deep serif |
| `lavender.bg` | `#EAE6F2` | About section wash (base) |
| `lavender.soft` | `#CAD0DF` | top-of-hero fade |
| `cream` | `#F1EFEC` | Her Books / base section |
| `footer-purple` | `#7E7F9F` | footer band |
| on-gold text | `#FFFFFF` | button labels |

## Fonts — CONFIRMED

No font files or brand guide were present in `materials/`, so these are best-match
Google Fonts chosen against the letterforms in `layout.png`:

- **Cormorant Garamond** — wordmark, all display headings ("Resilience. Strength.
  Survival.", "ABOUT THE AUTHOR", "HER BOOKS", book titles), and the italic quote.
- **Lato** — nav links, section eyebrows, sub-copy, buttons, and the About bio (body).

Uppercase + letter-spacing is preserved on nav, labels, and buttons via Tailwind
`tracking-*` tokens.

Alternatives if the author prefers: Playfair Display (higher contrast) or EB Garamond
in place of Cormorant; Montserrat or Jost in place of Lato.

---

## Contact form — setup required before it can send mail

The `#contact` section (`src/components/Contact.tsx`) posts to a Vercel serverless
function, `api/contact.ts`, which emails the submission out through Gmail's SMTP
server using `nodemailer`. It ships with:

- Client + server-side validation (name / valid email / non-empty message)
- A hidden honeypot field to deflect basic bots
- Inline success/error states in the form (the error state also offers a mailto
  fallback to `CONTACT_TO`)

**It will not send anything until three environment variables are set in Vercel**
(Project → Settings → Environment Variables):

| Variable | Value | Required |
|---|---|---|
| `GMAIL_USER` | The Gmail or Google Workspace address that sends the mail (e.g. an `@gmail.com` login, or a Workspace address on a custom domain — both work the same way) | Yes |
| `GMAIL_APP_PASSWORD` | A 16-character **App Password** for that account (not the normal login password) | Yes |
| `CONTACT_TO` | Inbox the messages should land in. Defaults to `GMAIL_USER` if omitted | No — set to `authorservices@page-and-pixel.com` if that inbox differs from `GMAIL_USER` |

### Generating the App Password
1. On the sending account, turn on **2-Step Verification**: myaccount.google.com/security
2. Then open **myaccount.google.com/apppasswords**, create one named e.g. "Author
   site contact form", and copy the 16-character password it gives you (spaces don't
   matter, the code strips them either way).
3. In Vercel: **Settings → Environment Variables** → add `GMAIL_USER` and
   `GMAIL_APP_PASSWORD` (and `CONTACT_TO` if needed) for Production (and Preview, if
   you want the form to work on preview deploys too).
4. Redeploy.

> `authorservices@page-and-pixel.com` was given as the delivery inbox. If that address
> is itself hosted on Google (Google Workspace), it can be used directly as
> `GMAIL_USER` — generate the App Password on that account. If it's hosted elsewhere,
> use a real `@gmail.com` account as `GMAIL_USER` and set `CONTACT_TO` to
> `authorservices@page-and-pixel.com`; the form will send *from* the Gmail account but
> *to* that inbox.

### Local testing
`vite dev` does not run `/api` routes — you'll see the form's error state (with the
mailto fallback) if you submit locally with plain `npm run dev`, which is expected.
To test the real send path locally: `npm i -g vercel`, copy `.env.example` to `.env`
and fill it in, then run `vercel dev`.
