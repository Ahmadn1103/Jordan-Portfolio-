---
name: project-portfolio-overview
description: Overview of the portfolio project — owner, stack, purpose, and deployment context
metadata:
  type: project
---

This is Derek Campbell's personal IT portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS.

**Why:** Showcase Derek's real IT Technician resume — replacing placeholder "Jordan" data analyst content with Derek's actual background in data center ops, networking, and IT support.

**How to apply:** All content changes must match Derek's real resume. Never reintroduce "Jordan" or analytics/BI placeholder data.

## Owner
- **Name:** Derek Campbell
- **Email:** derek.campbell6940@gmail.com (contact form recipient) / derek.campbell10@gmail.com (personal)
- **Location:** Fairfax, VA
- **LinkedIn:** https://www.linkedin.com/in/derek-campbell-25750131a/
- **GitHub:** https://github.com/Jordan-2269

## Stack
- Next.js App Router (`app/` directory)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Resend API (transactional email, env var: `SEND_API_KEY`)
- Canvas API (particle background)

## Key directories
- `lib/data.ts` — all site content (experience, skills, projects, case studies, stats)
- `components/sections/` — page sections
- `components/ui/` — reusable UI primitives
- `components/layout/` — navbar, footer
- `app/api/contact/route.ts` — email API route
- `public/Derek-Campbell-Resume.pdf` — resume download + embedded in resume page
- `public/Headshot Pic.jpeg` — Derek's profile photo, used in about section (objectPosition: center 15%)
- `public/RedHat/Picture1-4.jpg` — Red Hat Linux scripting lab screenshots
- `public/Stack/Picture1.png` — Java Stack data structure lab screenshot

## Resume page
- PDF embedded via iframe with `#toolbar=0&navpanes=0&scrollbar=0&view=FitH`
- Wrapper is `overflow:hidden` with iframe `width: calc(100% + 10px)` to hide horizontal scrollbar
- Height: `1045px` fixed

## Projects
- `ProjectCategory` includes `"Live"` — green NeonBadge, green filter button with pulsing dot
- Each project has a `detail` string with `**bold**` markers rendered by `FormattedDetail` component
- Cards are clickable — open a modal (`max-w-4xl`) with image gallery (auto-advances every 3s) and detail text
- Clicking an image opens a fullscreen lightbox (`z-[60]`, no blur)
- Live projects: Red Hat Linux Scripting Lab, Java Stack Assignment

## Background
- Replaced animated particle canvas with static CSS radial gradients (3 glows: cyan top-left, purple bottom-right, pink bottom-center)
