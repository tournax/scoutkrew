# ScoutKrew — PRD

## Original Problem Statement
Landing page only (marketing page, pre-auth) for ScoutKrew — a player-connection platform for gamers where users build clip-based profiles and get matched with teammates based on in-game role. Retro arcade / 90s-2000s gaming aesthetic with neon-on-dark palette, CRT scanline textures, and real interactive Three.js 3D (floating orbs + tilted phone mockup reacting to cursor/scroll). No auth, no app screens, no admin surfaces.

## User Personas
- Competitive gamers (Free Fire, BGMI, COD Mobile, Valorant) looking for teammates with proven skill
- Pre-launch visitors who should be converted to waitlist signups

## Core Requirements (static)
1. Hero with headline "Find your squad. Not just players.", subtext, single "Get Started" CTA, interactive 3D background (Three.js orbs + phone mockup), scroll parallax
2. Problem strip: "Struggling to find real teammates?" — no gameplay proof, mismatched skill, no channel to connect
3. How it works: Create Profile → Post Clips → Get Matched by Role
4. Features showcase: Clips Feed, Smart Matching, Role-Based Matchmaking, Chat, Verified Player Profiles
5. Matches spotlight: role-based player cards (IGL, Sniper, Support)
6. Social proof stats strip (placeholders: 10K+ waitlisted, 5K+ matches)
7. Games row: Free Fire, BGMI, COD Mobile, Valorant
8. Final CTA with waitlist email capture (front-end only toast confirmation — user choice)
9. Footer: logo, About/Privacy/Terms/Contact, socials, copyright

## Architecture
- React (CRA + craco) frontend only; no backend usage (waitlist is front-end only per user choice)
- Three.js via @react-three/fiber + @react-three/drei (hero scene: emissive low-poly orbs, pixel cubes, neon-edged phone with 3D app-feed UI, retro grid floor, mouse-parallax rig)
- framer-motion (masked line-by-line hero reveal, scroll reveals, count-ups, hover micro-interactions)
- lenis (smooth momentum scrolling + scrollTo for CTAs)
- react-fast-marquee (editorial marquee strip), sonner (waitlist toast), lucide-react (icons)
- Fonts: Bungee (display), Outfit (body), Silkscreen (pixel accents)
- Global CRT scanlines + vignette + noise overlays in index.css

## Implemented
- 2026-08-11: Full landing page, all 9 sections in order, custom cursor, chapter-numbered manifesto structure, neon hover glows, waitlist toast flow, character-select-style Matches cards with "your slot" empty card. Verified via screenshots + toast flow test.

## Backlog / Next
- P0: none (all requested sections delivered)
- P1: wire waitlist to real email capture (Resend or DB endpoint) when user wants it
- P1: real game logos/art for Games row
- P2: mobile-specific 3D tuning, reduced-motion fallbacks, FAQ section, blog/SEO pages

## Test Credentials
- None required (no auth in scope)
