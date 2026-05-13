---
name: project-design-system
description: Neon color system, component conventions, and visual design decisions for this portfolio
metadata:
  type: project
---

## Neon color palette
- Cyan: `#00f5ff` — primary accent
- Purple: `#bf5af2` — secondary accent
- Pink: `#ff2d78` — tertiary accent
- Orange: `#ff8c00` — quaternary (used for IT Asset Inventory project card)

## Background / foreground
- Background: `#0d0d18`
- Foreground: `#f0f4ff`
- Muted: `#8896b3`
- Card: `#13132a`
- Border: `#252550`

## Key UI conventions
- **NeonBadge** (`components/ui/neon-badge.tsx`) supports `"cyan" | "purple" | "pink" | "orange"` — solid filled, black/white text
- **GlowingCard** (`components/ui/glowing-card.tsx`) supports `"cyan" | "purple" | "pink" | "orange"` glowColors
- **SectionHeading** subtitle is a cyan pill badge (not plain text)
- **Skill badges** are colored pills per category — no progress bars, no `level` field
- **Project cards** have `group` class, image zooms on `group-hover:scale-110`
- **Navbar** floats as a `rounded-2xl` pill on scroll with liquid glass (`backdrop-blur-2xl bg-white/5`)
- **Particles background** (`components/ui/particles-bg.tsx`) — canvas network graph, glowing colored dots connected by lines within 130px

## ProjectCategory type
`"Infra" | "Cloud" | "Support"` — color mapping: Infra=cyan, Cloud=purple, Support=pink, with orange override for `asset-inventory-system` slug

## SkillGroup.skills type
`{ name: string }[]` — `level` field was removed. No AnimatedProgress component used anywhere.
