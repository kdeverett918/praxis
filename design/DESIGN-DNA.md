# Design DNA: Midnight Scholar

## Direction
Like studying in a beautiful dark library at midnight. Focused, calm, but alive with warmth. Editorial authority meets modern study app. Premium, trustworthy, motivating.

## Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary | Deep Indigo | `#4338ca` |
| Primary Hover | Brighter Indigo | `#4f46e5` |
| Secondary | Warm Amber | `#f59e0b` |
| Secondary Hover | Deep Amber | `#d97706` |
| Background | Midnight Navy | `#0f0a2e` |
| Surface | Dark Indigo | `#1e1b4b` |
| Surface Elevated | Rich Indigo | `#312e81` |
| Text Primary | Soft Lavender White | `#e8e5ff` |
| Text Secondary | Muted Indigo | `#a5b4fc` |
| Text Muted | Deep Indigo Text | `#6366f1` |
| Border | Indigo Border | `#312e81` |
| Success | Green | `#22c55e` |
| Error | Red | `#ef4444` |
| Warning | Amber | `#f59e0b` |

## Typography
- **Display**: DM Serif Display (700) — editorial, authoritative headlines
- **Body**: Plus Jakarta Sans (400, 500, 600, 700) — modern, highly readable
- **Mono**: JetBrains Mono (400) — stats, data, code

## Texture
- Subtle film grain noise overlay (0.03 opacity)
- Soft radial gradients behind hero/key sections
- Frosted glass cards with 1px indigo borders
- No harsh corners — rounded-2xl minimum on cards

## Motion Language
- **Pacing**: Slow, cinematic
- **Default easing**: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Sweep easing**: cubic-bezier(0.22, 1, 0.36, 1)
- **Entrance**: Fade-up from 32px, 0.6-0.8s duration
- **Scroll**: ScrollTrigger reveals, parallax depth on hero
- **Interactions**: Buttons scale 1.02 on hover with snappy easing
- **Hover lift**: translateY(-2px) on cards

## Image Direction
- Dark, warm-toned photography
- Study spaces, libraries, warm lighting
- Clinical settings with warm color grading
- Grad students in natural, unstaged moments

## Anti-Patterns (Never Use)
- Clinical blue/white sterile palette
- Stock photos of children or cartoonish illustrations
- Generic "Get Started" / "Learn More" CTAs
- Symmetrical card grids with no visual hierarchy
- Light backgrounds with gray text
