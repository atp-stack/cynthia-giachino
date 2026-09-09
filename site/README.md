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
- `src/content.ts` — all copy (verbatim from the approved layout)
- `src/assets/` — imagery copied from `../materials/`
- `src/components/` — `Header`, `Hero`, `About`, `Books`, `Quote`, `Footer`, `WheatSprig`
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
