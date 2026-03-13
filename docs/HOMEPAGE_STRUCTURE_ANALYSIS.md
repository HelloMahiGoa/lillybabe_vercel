# Homepage Structure Analysis

This document summarizes the structure of the homepage (header, hero, content) so location pages like `/t-nagar-escorts` can follow the same patterns while staying eye-catching.

---

## 1. Layout (Wrapper)

**File:** `src/components/layout/layout.tsx`

- **Wrapper:** `min-h-screen flex flex-col bg-black`
- **Header:** Fixed at top (not inside scroll)
- **Main:** `flex-1 pt-16 lg:pt-20` (offset for fixed header height)
- **Footer:** At bottom

So the global structure is: **Header (fixed) → Main (content) → Footer**.

---

## 2. Header

**File:** `src/components/layout/header.tsx`

| Aspect | Implementation |
|--------|----------------|
| **Position** | `fixed top-0 left-0 right-0 z-50` |
| **Background (top)** | `bg-gradient-to-b from-black/70 to-transparent`, `border-b border-transparent` |
| **Background (scrolled)** | `bg-black/95 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-white/8` |
| **Height** | `h-16 lg:h-20` |
| **Logo** | "LILLY" (white) + "BABE" (amber-400) + small amber dot; link to `/` |
| **Nav** | Home, Gallery, Locations, Blog, Contact — uppercase, `tracking-[0.15em]`, gray-300 → amber-400 on hover |
| **Desktop CTAs** | Phone link + "Book Now" (amber-500, WhatsApp) rounded-full |
| **Mobile** | Hamburger → dropdown with same links + phone + WhatsApp |

**Design tokens:** Black/dark background, white and gray-300/400 text, **amber-400/500** as primary accent.

---

## 3. Hero

**File:** `src/components/home/hero.tsx`

| Element | Details |
|--------|--------|
| **Container** | `relative`, no extra wrapper |
| **Background** | Full-bleed image (`/images/hero-bg.webp`) with overlays: `from-black via-black/85 to-black/40` (L→R), `from-black/80 via-transparent to-black/20` (bottom→top) |
| **Section height** | `min-h-[calc(100vh-4rem)]`, content centered with `flex items-center` |
| **Max width** | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| **Grid** | `lg:grid-cols-[1fr_380px]` — main content left, sidebar right on desktop |

**Left column (primary):**

1. **Pill badge** — `bg-amber-500/10 border border-amber-500/30`, "Chennai Escorts · Est. 2010", small amber dot
2. **H1** — Two lines: "Chennai" (white), "Escorts" (amber-400), `text-[clamp(3rem,11vw,7.5rem)]`, `font-black`
3. **Divider + tagline** — 10px amber line + "LillyBabe — Verified. Discreet. Real."
4. **Description** — Gray-400, max-w-lg
5. **Trust badges** — Pills with CheckCircle + short text (e.g. "Real girls — no stock photos")
6. **CTAs** — Grid: WhatsApp (primary green), Telegram Book (blue), TG Channel, TG Group

**Right column (desktop only):**

- **Stats grid** — 2×2 cards: 10+ Years, 24/7, 100%, ₹0 Advance (amber numbers on dark cards)
- **How it works** — Numbered steps in a card
- **Quick contact** — WhatsApp + Telegram small cards

**Mobile:** Same left column; stats as a 4-column row below; no right sidebar.

**Color palette:** Black, white, gray-300/400/500, **amber-400/500**, green (WhatsApp), blue (Telegram).

---

## 4. Content Sections (Below Hero)

**File:** `src/components/home/content-sections.tsx`

| Aspect | Details |
|--------|--------|
| **Background** | `bg-gray-900` (dark, not black) |
| **Spacing** | `py-8 sm:py-12 lg:py-16`, sections separated with `mb-12` to `mb-24` |
| **Max width** | `max-w-7xl` or `max-w-6xl` depending on section |
| **Typography** | Large H2s (e.g. 3xl–7xl), white for headings, gray-300/400 for body |
| **Accents** | Red/amber for highlights (e.g. "Escorts" in red-500), amber dividers and buttons |
| **Cards** | `bg-zinc-900` or `bg-zinc-950`, `border border-white/10` or `border-amber-500/30` |
| **CTAs** | WhatsApp (zinc-800 or green), Telegram (amber-500), rounded-lg |
| **Images** | Rounded-lg, sometimes with floating badges (e.g. "Since 2010", "500+ Profiles") |

**Section types:**

- Centered intro (heading + paragraph + CTAs + divider)
- Two-column: text + image (image with overlay cards/badges)
- Grid of cards (e.g. service areas, types of escorts)
- Tabs (e.g. Incall/Outcall) in dark cards

---

## 5. Footer

**File:** `src/components/layout/footer.tsx`

- **Background:** `bg-zinc-950 border-t border-white/8`
- **Brand:** LILLY + BABE (amber) + tagline + phone + WhatsApp
- **Columns:** Quick Links, Service Areas (e.g. T. Nagar, Anna Nagar)
- **Accent:** `text-amber-400` for section headings

---

## 6. Summary: Design System for Consistency

| Item | Homepage usage |
|------|----------------|
| **Background** | Black (main), gray-900 (content), zinc-950 (footer) |
| **Primary accent** | Amber (400/500) |
| **Text** | White (headings), gray-300/400 (body) |
| **Cards** | Zinc-900/950, white/10 or amber borders |
| **Hero** | Full-bleed image + gradients, pill → H1 → tagline → trust → CTAs, optional sidebar |
| **Header** | Fixed, transparent → solid on scroll, amber CTAs |

For **location pages** (e.g. T Nagar): use the same **Header** and **Footer**, and mirror the **Hero + Content** pattern (hero with location-specific H1 and CTAs, then content sections in the same dark + amber system) for an attractive, on-brand design.
