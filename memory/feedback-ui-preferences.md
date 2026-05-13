---
name: feedback-ui-preferences
description: Derek's UI/UX preferences and corrections from past sessions — what to always/never do
metadata:
  type: feedback
---

## Always use colored neon badges
Use solid filled NeonBadge components (cyan/purple/pink/orange) for tags, labels, subtitles, and category chips. Plain text that blends into the dark background is rejected.

**Why:** User repeatedly flagged low-contrast text as unreadable on the dark `#0d0d18` background.

**How to apply:** Any label, subtitle, category tag, or stat chip should be a colored badge, not unstyled text.

---

## No progress bars or percentage levels in skills
Skills section uses pill badges only — no AnimatedProgress bars, no `level` numbers.

**Why:** User explicitly removed them. The `level` field was also deleted from the TypeScript type.

**How to apply:** Never re-add progress bars or level values to skill components or data.

---

## No redirect after contact form submit
After a successful email send, show the "Message sent!" success state and stay on the contact page. Do not redirect to home.

**Why:** User rejected the redirect behavior twice. They want to optionally send another message.

**How to apply:** Keep state as `"idle" | "submitting" | "sent"`. On success set `setState("sent")`. Provide a "Send another message" button to reset to idle.

---

## Images on project cards should be bright and visible
Dark or hard-to-see images are rejected. Prefer `brightness-110` or similar filters on card images.

**Why:** User flagged the data center infrastructure image as "too dark and far."

**How to apply:** When adding images to project cards ensure they are bright and clearly visible.

---

## Navbar uses rounded pill / liquid glass style on scroll
The navbar should be a floating `rounded-2xl` pill with `backdrop-blur-2xl bg-white/5` when scrolled.

**Why:** User approved this after rejecting a plain rectangle navbar.

**How to apply:** Keep the floating pill shape. Never revert to a full-width rectangle navbar.
