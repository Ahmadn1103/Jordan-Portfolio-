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
- `public/Derek-Campbell-Resume.docx` — resume download
