# Amarante — Salon & Beauty Culture Website (Next.js)

A 5-page premium marketing site for **Amarante**, a Colombo hair & skin
studio — rebuilt with the assessment's preferred stack.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — full custom design system via `tailwind.config.js`
- **Framer Motion** — scroll reveals, page/menu transitions, gallery lightbox,
  testimonials, FAQ accordion
- Real studio photography (in `public/images`)

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.js` | Hero, philosophy, signature rituals, testimonials, gallery teaser |
| `/rituals` | `app/rituals/page.js` | Full service menu, filterable by category |
| `/atelier` | `app/atelier/page.js` | Brand story, 4-step process timeline, team, values |
| `/gallery` | `app/gallery/page.js` | Filterable masonry portfolio + lightbox |
| `/booking` | `app/booking/page.js` | Reservation form, studio info/hours, FAQ |

## Project structure

```
amarante-next/
├── app/
│   ├── layout.js         # fonts, header, footer
│   ├── globals.css       # tailwind + design-system utility classes
│   ├── page.js           # home
│   ├── rituals/page.js
│   ├── atelier/page.js
│   ├── gallery/page.js
│   └── booking/page.js
├── components/            # reusable, composable pieces
│   ├── Header.js / Footer.js
│   ├── Reveal.js          # scroll-reveal + stagger wrappers (Framer Motion)
│   ├── Photo.js           # duotone next/image wrapper
│   ├── Marquee.js / RitualCard.js / HScroll.js / CtaBand.js / PageHero.js
│   ├── Testimonials.js / RitualsMenu.js / Gallery.js / BookingForm.js / Faq.js
│   └── CursorDot.js
├── public/images/         # real studio photography
├── tailwind.config.js     # design tokens (colors, fonts, keyframes)
└── package.json
```

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Building for production

```bash
npm run build
npm start
```

## Deploying (recommended: Vercel)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import that repo.
3. Leave all settings as default (Vercel auto-detects Next.js) → **Deploy**.
4. You'll get a live URL like `https://amarante-salon.vercel.app` in about a minute.

No manual build configuration is required — Vercel runs `npm install` and
`npm run build` automatically.

## Design system

Same visual language as the original build: warm paper `#F2EAE0`, ink
`#241B18`, bordeaux `#5B1A2E`, gold `#A9834F`, blush `#E9D3C8`; Fraunces
(display serif) + Manrope (UI sans); a duotone photo treatment
(`components/Photo.js` + `.photo` styles in `globals.css`) that keeps the
photography set visually cohesive; Framer Motion `whileInView` reveals
instead of manual `IntersectionObserver` code.

## Accessibility & performance

- Semantic headings, `aria-label`s on icon-only controls, keyboard-operable
  lightbox (Esc/←/→) and accordion.
- Images served through `next/image` (automatic responsive sizes, lazy
  loading, AVIF/WebP).
- Route-level code splitting via the App Router — each page ships only the
  JS it needs.
