# CLAUDE.md

This file is the permanent operating manual and decision framework for Claude Code (and any AI agent) working in this repository. It does not replace `README.md` or other technical documentation — it extends and contextualizes it with business intent, engineering standards, UX principles, and workflow rules. When in doubt, this file wins on *priorities and process*; `README.md` and inline code comments win on *current technical implementation details*.

---

# Project Overview

- **Brand**: Quokka Coffee
- **Positioning**: Premium specialty coffee roaster
- **Market**: Saudi-first customer experience (Riyadh branches: Granada, Al Muruj)
- **Language**: Bilingual — Arabic / English, with full RTL support
- **Strategy**: Website-first business strategy — the site is the primary growth and conversion engine, not a brochure

This repository (`Quokka-Web-Build`) is a clean, standalone rebuild of the Quokka Coffee Roasters website (Vite + React + TypeScript + Tailwind CSS v4), recreated from the original `quokka-cafe` project. See the **Repository-Specific Technical Documentation** section below and `README.md` for stack and deployment details.

---

# Business Goals

**Primary goals** (optimize for these first):

1. Increase catering requests
2. Increase coffee bean sales
3. Increase branch visits

**Secondary goals** (valuable, but never at the expense of the primary three):

1. Loyalty program
2. Wallet cards
3. Customer retention
4. Operational automation

Every roadmap item, feature request, or refactor should be evaluated against whether it moves the primary goals forward.

---

# MVP Constraints

**Do NOT introduce:**

- Foodics integration
- POS dependencies
- Mobile apps
- Enterprise infrastructure
- Complex microservices

**Prefer:**

- Simplicity
- Maintainability
- Existing SaaS tools
- Fast execution

If a request implies any of the "do not introduce" items, flag it explicitly and propose the simplest alternative before implementing anything.

---

# Decision Priority Rules

When trade-offs are required, always prioritize in this order:

1. Customer Experience
2. Business Goals
3. Simplicity
4. Maintainability
5. Reliability
6. Performance
7. Developer Convenience
8. New Features

A feature that scores well on "Developer Convenience" or "New Features" but poorly on the top of this list should be pushed back on or descoped.

---

# Brand Direction

Quokka Coffee should feel:

- Premium
- Warm
- Modern
- Clean
- Minimal
- Saudi

**Avoid:**

- Corporate language
- Generic startup language
- Excessive animations
- Trend-driven design

Copy, UI components, and motion design should all be checked against this list before shipping.

---

# Customer Experience Principles

Every page should help users do at least one of:

1. Visit a branch
2. Request catering
3. Purchase coffee beans

Question any feature that does not support these outcomes. If a proposed change doesn't map to one of these three, ask why it's being built before building it.

---

# Product Owner Mindset

When scoping or reviewing work, act like a senior product owner. Optimize for:

- Conversion
- Clarity
- Business value
- Simplicity

Challenge unnecessary complexity — including requests that add complexity without a clear link to a business goal.

---

# Senior Engineer Rules

**Prefer:**

- Reusable components
- Clear architecture
- Readable code
- Predictable systems

**Avoid:**

- Premature optimization
- Unnecessary abstractions
- Clever code
- Framework churn

Code should read like the obvious solution, not the cleverest one.

---

# Anti-Overengineering Rules

Always choose:

- The simplest working solution
- Fewer dependencies
- Existing platform capabilities

Do not build custom infrastructure when a reliable managed solution already exists (e.g. prefer Supabase managed features over hand-rolled auth/storage/queues; prefer Vercel's built-in capabilities over custom deploy tooling).

---

# UX Review Checklist

Before implementing UX changes, review:

- [ ] Desktop experience
- [ ] Mobile experience
- [ ] Visual hierarchy
- [ ] CTA visibility
- [ ] Accessibility
- [ ] Conversion flow
- [ ] Arabic and English layouts (including RTL mirroring)
- [ ] Performance impact

No UX change ships without walking through this checklist first.

---

# Browser MCP Workflow

Before making UX recommendations:

1. Open the live site
2. Review desktop experience
3. Review mobile experience
4. Identify friction points
5. Recommend improvements
6. Then implement changes

Use Browser MCP whenever visual verification is useful — don't recommend UX changes from code-reading alone if a live render is available.

---

# Supabase Architecture Rules

Supabase is the primary backend for this project going forward.

**Future responsibilities:**

- Customers
- Loyalty accounts
- Points
- Rewards
- Wallet cards
- Admin dashboard

**Requirements:**

- Use migrations for all schema changes
- Use Row Level Security (RLS) on every table containing customer data
- Never expose customer data (no anon-key reads of PII, no unguarded public endpoints)
- Design schemas for future wallet integration (Apple Wallet / Google Wallet pass identifiers, point balances, tiering)
- Prefer schema-driven development over ad-hoc client-side logic

**Do not apply migrations without approval.** Propose the migration, explain its effect, and wait for explicit sign-off before running it against any environment.

---

# Connected Tooling Rules

Connected systems:

- GitHub
- Lovable
- Vercel
- Make
- Browser MCP
- Supabase MCP

Use these tools whenever they make the work faster, more accurate, or more verifiable. **Never perform destructive actions without approval** — this includes (but is not limited to): force pushes, branch deletion, dropping tables, resetting databases, merging to `main`, or disabling production deployments.

---

# Vercel Workflow

Use Vercel to:

- Check preview deployments
- Review build failures
- Inspect logs
- Validate releases

**Never deploy to production without explicit approval.** Preview deployments and PR checks are fair game to inspect freely; promoting to production is not.

---

# Development Workflow

1. Understand the requirement
2. Review current implementation
3. Propose approach
4. Explain tradeoffs
5. Implement
6. Test
7. Review UX
8. Commit cleanly

Skipping steps (especially "propose approach" and "explain tradeoffs" for anything non-trivial) is not acceptable for architecture-level changes.

---

# Git Workflow

- Never rewrite shared history
- Create feature branches for all work
- Keep commits focused (one logical change per commit where practical)
- Write meaningful commit messages (explain *why*, not just *what*)
- Open PRs for significant changes
- Preserve Lovable compatibility (don't introduce build steps, file layouts, or tooling that breaks Lovable's ability to edit/sync this project)

---

# Explain-Decision Requirements

Whenever proposing architecture changes, explain:

- **Why** — what problem this solves
- **Alternatives considered** — and why they were rejected
- **Tradeoffs** — what gets harder, slower, or more complex as a result
- **Long-term impact** — how this affects the roadmap below

Do not provide blind implementation for architecture-level decisions. Small, obviously-correct fixes (typos, broken links, lint errors) don't need this treatment — use judgment.

---

# Conversion Optimization Rules

Every major page should support:

- Branch visits
- Catering requests
- Coffee bean sales

Prioritize conversion improvements (clearer CTAs, faster load, better mobile flow, reduced friction to WhatsApp/maps/checkout) over cosmetic changes. If asked to choose between a visual polish task and a conversion-relevant fix, default to the conversion fix unless told otherwise.

---

# Future Roadmap

Design systems so they can support these future additions without a rewrite:

- Loyalty system
- Apple Wallet
- Google Wallet
- QR rewards
- Customer dashboard
- Microsoft 365 integration
- Analytics dashboards
- Automated engagement
- Membership tiers
- Promotions engine

This doesn't mean building these now (see **MVP Constraints**) — it means not making decisions today that would block these tomorrow (e.g. avoid schemas or page structures that can't accommodate a future `customers`/`loyalty_accounts` relationship).

---

# Repository-Specific Technical Documentation

This section preserves and extends the existing technical documentation rather than replacing it. Always keep this section consistent with the actual state of the codebase — update it when the stack changes, don't let it drift.

**Current stack (this repo, `Quokka-Web-Build`):**

- Vite + React 19 + TypeScript SPA
- Tailwind CSS v4 (`@tailwindcss/vite`, OKLCH design tokens in `src/styles.css`)
- Bilingual i18n via `src/i18n.ts` (`LangContext`, `useLang`, `useT`), RTL toggled via `document.documentElement.dir`
- Images sourced from `src/assets/` and imported directly in `src/App.tsx` (see `README.md` for the current asset checklist/status)
- Deployed on Vercel as a static SPA via `vercel.json` (SPA rewrite fallback to `index.html` to avoid 404s)

**Note on architecture lineage:** the original `quokka-cafe` reference project used TanStack Start with SSR, shadcn/ui, and a different i18n implementation (`src/lib/i18n.ts`). This repo intentionally diverges to a simpler static-SPA architecture to reduce deployment risk and maintenance burden, per the **Anti-Overengineering Rules** above. If/when this project's needs grow to require SSR, server actions, or shadcn/ui component primitives, treat that as an architecture change requiring the **Explain-Decision Requirements** process — don't reintroduce that complexity casually.

Maintain consistency with, and do not silently diverge from, whichever of the following are actually in use in this repo at a given time:

- TanStack Start (if/when reintroduced)
- Tailwind v4
- shadcn/ui (if/when reintroduced)
- The existing i18n implementation
- The existing SSR architecture (if/when reintroduced)
- The existing deployment workflow (Vercel, SPA rewrite, branch strategy)

`README.md` remains the source of truth for "how to run/build/deploy this today." This file remains the source of truth for "why, and in what order of priorities."
