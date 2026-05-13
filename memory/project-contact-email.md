---
name: project-contact-email
description: Contact form behavior and Resend email API setup — fields, states, and email HTML conventions
metadata:
  type: project
---

## Contact form (`components/sections/contact-form.tsx`)
- Fields: Name, Email, Subject, Message (all required)
- State machine: `"idle" | "submitting" | "sent"`
- On success: shows "Message sent!" with cyan checkmark + "Send another message" button that resets to `"idle"`
- No redirect on success — user stays on contact page
- Sends POST to `/api/contact` with `{ name, email, subject, message }`

## API route (`app/api/contact/route.ts`)
- Uses Resend SDK: `new Resend(process.env.SEND_API_KEY)`
- Env var: `SEND_API_KEY` in `.env`
- Sends from: `onboarding@resend.dev`
- Sends to: `derek.campbell6940@gmail.com`

## Email HTML conventions (dark mode safe)
- Uses `<style>` block with `!important` CSS classes to force colors in Gmail mobile dark mode
- All backgrounds use solid hex (no `rgba()`) — Gmail strips transparency on mobile
- `color-scheme: dark !important` on body/table/td
- Key solid replacements: `rgba(0,245,255,0.1)` → `#0d2a2a`, field bg → `#0a0a14`
- All text colors duplicated as both inline `style=` and CSS class for double enforcement
