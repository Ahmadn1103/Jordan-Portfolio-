# Jordan's Data Analytics Portfolio — Design Spec
**Date:** 2026-04-29  
**Status:** Approved

---

## Context

Jordan is a data analyst building a personal portfolio to showcase BI, data science, and SQL/engineering skills to potential employers and clients. The site needs to communicate technical depth while making a strong visual impression. The aesthetic direction is "2030 neon" — dark, glowing, futuristic — using a YouTube-style wide-content layout with Magic UI components and Framer Motion animations.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS 4 |
| UI Components | Magic UI |
| Animations | Framer Motion |
| Fonts | Space Grotesk (headings) + Geist Mono (code/data) |

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#0a0a0f` | Page background |
| Neon Cyan | `#00f5ff` | Primary accent, CTAs, active states |
| Neon Purple | `#bf5af2` | Secondary accent, hover states |
| Neon Pink | `#ff2d78` | Tertiary accent, tags |
| Text Primary | `#e2e8f0` | Body text |
| Text Muted | `#64748b` | Subtitles, metadata |
| Card BG | `#0f0f1a` | Card backgrounds |
| Border | `#1e1e3f` | Card borders, dividers |

---

## Architecture

### File Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx              — Root layout: fonts, providers, Navbar, Footer
│   ├── page.tsx                — Home (Hero section)
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── case-studies/page.tsx
│   ├── resume/page.tsx
│   ├── contact/page.tsx
│   └── globals.css             — Tailwind base + neon CSS custom properties
├── components/
│   ├── ui/                     — Magic UI primitives + custom neon variants
│   │   ├── glowing-card.tsx
│   │   ├── neon-button.tsx
│   │   ├── neon-badge.tsx
│   │   ├── animated-progress.tsx
│   │   └── number-ticker.tsx
│   ├── sections/               — Full page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects-grid.tsx
│   │   ├── case-studies.tsx
│   │   ├── resume-timeline.tsx
│   │   └── contact-form.tsx
│   └── layout/
│       ├── navbar.tsx
│       ├── footer.tsx
│       └── mobile-drawer.tsx
├── lib/
│   └── data.ts                 — Static content: projects, skills, experience
└── public/
    └── resume.pdf              — Downloadable CV
```

---

## Layout & Navigation

### Top Navbar
- Fixed position, full width
- Transparent at top → dark blur (`bg-black/60 backdrop-blur-md`) on scroll
- Left: "Jordan." wordmark in neon cyan
- Right: nav links (About, Projects, Case Studies, Resume, Contact)
- Active link: cyan glow + underline
- Mobile: hamburger → Framer Motion slide-in drawer from right

### Page Layout
- Full-width sections, max content width `1280px`, centered
- Consistent vertical padding `py-24` between sections
- No persistent sidebar on main pages; sticky TOC sidebar on individual case study pages

### Page Transitions
- Framer Motion `AnimatePresence` wrapping `{children}` in root layout
- Transition: `opacity 0→1` + `translateY 20px→0` over `0.4s ease-out`
- Scroll-triggered section reveals: `whileInView` with `once: true`, stagger children `0.1s`

---

## Page-by-Page Design

### 1. Hero (`/`)
- Full-viewport section
- Magic UI `Sparkles` + `AnimatedGradientBackground` — pulses cyan → purple
- Center-aligned content:
  - H1: "Jordan" — large, bold, Space Grotesk
  - Typewriter subtitle cycling: `"BI Analyst" | "Data Scientist" | "SQL Engineer"`
  - Animated tagline: "Turning raw data into insight."
- Two CTAs (Framer Motion stagger on load):
  - Primary: "View Projects" — neon cyan filled button
  - Secondary: "Download Resume" — outlined with cyan border
- Scroll indicator: animated bouncing arrow

### 2. About (`/about`)
- Two-column layout (desktop): left = glowing avatar, right = bio
- Magic UI `GlowingCard` wrapping the bio block
- Bio: 2–3 paragraphs on Jordan's background, tools, and approach
- Animated stats row using `NumberTicker`:
  - "5+ Years Experience", "20+ Projects Delivered", "3 Domains"
- Framer Motion: left column slides in from left, right from right

### 3. Skills (section within About page, anchored at `#skills`)
- Three columns: **BI Tools** | **Data Science** | **SQL & Engineering**
- Each skill: neon badge label + animated horizontal progress bar (cyan fill)
- Sample skills:
  - BI: Tableau, Power BI, Looker, Excel
  - Data Science: Python, Pandas, Scikit-learn, Jupyter
  - SQL: PostgreSQL, dbt, Snowflake, BigQuery
- Magic UI `AnimatedBeam` visually connecting the three columns at the top
- Scroll-triggered reveal with stagger

### 4. Projects (`/projects`)
- Filter bar: "All | BI | Python | SQL" — neon toggle buttons
- YouTube-style responsive grid:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- Each project card (`GlowingCard`):
  - Chart/screenshot thumbnail (top)
  - Title + 1-line description
  - Neon tag pills (e.g. "Python", "Tableau")
  - Hover: card border glows cyan, subtle scale-up
- Clicking a card opens a modal or routes to a detail page

### 5. Case Studies (`/case-studies`)
- Featured full-width cards, one per case study
- Each card layout: **Problem → Approach → Result**
- Framer Motion scroll reveal: each block fades + slides up as user scrolls
- Accent line on left border in neon cyan
- Metric callouts (bold neon numbers): e.g. "↑ 34% efficiency"

### 6. Resume (`/resume`)
- Animated vertical timeline (Framer Motion `AnimatePresence` + `staggerChildren`)
- Two columns: Experience (left) | Education + Certifications (right)
- Each timeline node: neon dot + glowing line connector
- Download button: "Download PDF" with pulsing neon glow animation
- Timeline data sourced from `lib/data.ts`

### 7. Contact (`/contact`)
- Magic UI `GlowingCard` wrapping the form
- Fields: Name, Email, Message
- Submit button: neon cyan with pulse on hover
- Social links row: GitHub, LinkedIn — icon buttons with neon hover glow
- Form submission: client-side validation, success state with animated checkmark

---

## Animation System

| Trigger | Animation | Duration |
|---|---|---|
| Page load | Fade + translateY stagger | 0.4s |
| Route change | Fade out/in + translateY | 0.4s |
| Scroll into view | Fade + translateY, `once: true` | 0.5s |
| Card hover | Scale 1.02 + glow border | 0.2s |
| Button hover | Brightness + glow shadow | 0.15s |
| NumberTicker | Count up from 0 | 1.5s |

All animations use Framer Motion. Spring physics for hover states, easeOut for entrance animations.

---

## Data Layer

All content lives in `lib/data.ts` as typed TypeScript arrays:
- `projects[]` — title, description, tags, thumbnail, link
- `caseStudies[]` — title, problem, approach, result, metrics
- `skills{}` — grouped by category with proficiency 0–100
- `experience[]` — role, company, dates, bullets
- `education[]` — degree, institution, year

No CMS or database — static data only for v1.

---

## Dependencies to Install

```bash
npm install framer-motion
npm install @magicui/react   # or per-component CLI installs
npm install space-grotesk    # via next/font or fontsource
```

Magic UI components are added via their CLI (`npx magicui-cli add <component>`) or copied manually into `components/ui/`.

---

## Verification Plan

1. `npm run dev` — site loads at localhost:3000 with no errors
2. Navigate all 6 routes — page transitions animate correctly
3. Resize to mobile (375px) — navbar collapses, grid goes to 1 column
4. Scroll through each section — scroll-triggered animations fire once
5. Hover all cards and buttons — glow effects visible
6. Click "Download Resume" — PDF downloads
7. Submit contact form — validation fires, success state shows
8. `npm run build` — zero TypeScript or ESLint errors
