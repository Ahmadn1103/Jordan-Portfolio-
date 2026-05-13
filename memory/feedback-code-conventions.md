---
name: feedback-code-conventions
description: Code-level conventions and bug fixes that must be preserved in future sessions
metadata:
  type: feedback
---

## AnimatePresence must use mode="popLayout" not mode="wait" for project grid
`AnimatePresence` wrapping the projects grid must use `mode="popLayout"`. Using `mode="wait"` with multiple children throws a console warning and was rejected.

**Why:** Multiple children can't use `mode="wait"`. Switching to `mode="popLayout"` fixed both the warning and a disappearing-projects bug.

**How to apply:** In `components/sections/projects-grid.tsx`, the outer wrapper is a plain `<div>` (not `motion.div` with layout prop), and `AnimatePresence` uses `mode="popLayout"`.

---

## colorFor function takes optional slug parameter
`colorFor(c: ProjectCategory, slug?: string)` — the slug param enables orange override for the `asset-inventory-system` card specifically.

**Why:** Orange wasn't in the ProjectCategory type but was needed for one card. Slug-based override was the clean solution.

**How to apply:** Keep the optional slug param. Don't remove it.

---

## Gmail email HTML: use solid hex, not rgba, and double-enforce with CSS classes
Gmail on mobile strips `rgba()` transparency and can invert colors in dark mode.

**Why:** User reported black text on mobile making emails unreadable.

**How to apply:** Always use solid hex equivalents for backgrounds in email HTML. Add a `<style>` block with `!important` classes alongside inline styles for double enforcement. See [[project-contact-email]].
