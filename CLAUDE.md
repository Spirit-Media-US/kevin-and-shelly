# Kevin and Shelly

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: Kevin and Shelly | Repo: github.com/Spirit-Media-US/kevin-and-shelly | Domain: kevinandshelly.com (GoDaddy, SMP account) | Sanity ID: a53g9qeq | Registry project: aec0e58e (newsite)

**Build protocol:** /home/deploy/bin/tools-api/pipelines/newsite/CLAUDE.md
**Blog protocol:** /home/deploy/claude-config/specs/blog-protocol.md

## Dev Commands

- `npm run dev` — local preview
- `PUBLIC_SITE_URL=https://kevinandshelly.com npm run build` — production build to dist/ (builds the embedded Studio into public/studio first)
- `git pushd origin dev` — push + upload dist to the dev preview (dev.kevin-and-shelly.pages.dev)

## Mandatory — Before Starting Work
```
cd /srv/sites/kevin-and-shelly && claude
git checkout dev && git pull origin dev
```

## Stack

- Astro 5 + Tailwind CSS v4 (tokens in `src/styles/global.css` `@theme`)
- Sanity Studio embedded at `/studio` (structure in `sanity.config.ts`, schemas in `studio/schemaTypes/`)
- Cloudflare Pages: kevin-and-shelly.pages.dev · dev preview: dev.kevin-and-shelly.pages.dev

## Purpose

Home of Kevin and Shelly White and the **Revived by Our Father's Love** podcast. Replaces kevinwhite.us.
Featured on fathersheartbible.com (leadership page, /podcast) and spiritmediapublishing.com.

## Design (approved by Kevin and Shelly 2026-10-14 — mood board 4)

- Hybrid page: alternating light stone bands (reading) and charcoal bands (podcast art, book covers). No pure white, no pure black.
- Colors: stone #F4F3F1, stone-deep #EAE8E4, ink #22211F, soft gray #6B6862, charcoal #1B1A19, denim #2F4A63 (accent on light), gold #E3AD3A (accent on dark).
- Fonts: DM Serif Display (headings) + Karla (body), self-hosted on R2.
- Home hero: "Beloved on wall" photo, shown UNCROPPED so the word BELOVED shows (Kevin).
- Nav: Home · Story · Podcast · Books · Blog (Events + Contact pages removed 2026-10-15; the compact footer is the contact point, schemas kept for later). Father's Heart Bible is NOT its own page — it is featured on Story and Books with Spirit Media Publishing.
- Emails never as plain `mailto:` — always `MailtoLink.astro`.
- Logo: Shelly is designing it; text wordmark until `siteSettings.logo` is set.

## Sanity Content Audit

| Page | Content block | Where |
|---|---|---|
| All | Site name, tagline, SEO description, share image, emails, socials, location, logo | `siteSettings` |
| Home | Hero image/heading/intro/buttons, story preview, books heading, sign-up text | `homePage` |
| Home | Podcast block, episodes, books, latest posts, upcoming events | `podcastShow`, `podcastEpisode`, `book`, `blogPost`, `event` |
| Story | Heading, hero, intro, story sections (repeatable), ministries | `storyPage`, `ministry` |
| Podcast | Show description, artwork, listen links; episode cards + one page per episode at /podcast/<slug>/ (shown once an episode has a Title; YouTube link switches thumbnail + click-to-play video) | `podcastShow`, `podcastEpisode` |
| Books | Section labels; every book (section: shelly/kevin/fhb, cover, description, link, order); publisher block | `booksPage`, `book`, `ministry` |
| Books | FHB block: marquee (R2 cards, same keys as fathersheartbible.com/print), chips, back-cover copy, buttons, tagline | code — FHB's verbatim brand copy, mirrors fathersheartbible.com; marquee labels hardcoded in CoverMarquee.astro (25 / 34 as of 2026-10-14) |
| Blog | Posts (SMP blog protocol) | `blogPost` |
| Events | Page text, speaking request text, every event | `eventsPage`, `event` |
| Contact | Heading, intro, image | `contactPage` |
| Static | Nav order, footer structure, JSON-LD, legal line | code |

## Status — as of 2026-10-14

### Completed
- Phase 2 infrastructure (repo, Sanity, CF Pages) · schemas · images in Sanity · content seeded (approved copy + marked placeholders) · all pages built · blog per protocol

### Still Pending
- Placeholders Kevin and Shelly will deliver: story sections, Zacchaeus description + Amazon link, blog posts, events, logo
- Sign-up / contact / speaking forms (GHL) — placeholder divs `ghl-signup-form`, `ghl-contact-form`, `ghl-speaking-form`
- Sanity → CF Pages webhook, CF Pages env PUBLIC_SITE_URL, perf audit, Phase 5+ QA, launch

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main via `auto-merge-dev.sh` with Kevin's approval
- public/_headers must include CSP and security headers
- Media never in git — images live in Sanity
