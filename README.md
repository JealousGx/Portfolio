# jealous.dev — Abdul Mateen Khilji's Portfolio

Personal portfolio and blog of Abdul Mateen Khilji, a freelance full stack web developer specializing in Next.js, TypeScript, and Node.js. Live at [jealous.dev](https://jealous.dev).

---

## About

This is a production portfolio site built with Next.js 16 App Router. It serves as a personal brand hub, freelance portfolio, technical blog, and CMS-managed content platform. The site is SEO-optimized for AI search engines (Google AI Overviews, ChatGPT, Perplexity) as well as traditional search.

---

## Tech Stack

| Layer            | Technology                          |
| ---------------- | ----------------------------------- |
| Framework        | Next.js 16 (App Router, React 19)   |
| Language         | TypeScript                          |
| Styling          | Tailwind CSS v4                     |
| Content          | MDX via `@content-collections`      |
| CMS              | Keystatic (local dev + GitHub mode) |
| Fonts            | Geist, Geist Mono (next/font)       |
| Animations       | Framer Motion, MagicUI              |
| Icons            | Lucide React                        |
| Package Manager  | pnpm                                |
| Linter/Formatter | Biome                               |

---

## Features

### Portfolio

- Hero section with animated intro
- Work experience timeline
- Skills grid with custom SVG icons
- Featured projects showcase
- Full projects page (`/projects`)
- Services section
- Testimonials
- Contact section

### Blog

- MDX-powered blog with syntax highlighting (`rehype-pretty-code`)
- Pagination
- Per-post OG image generation
- RSS feed (`/rss.xml`)
- Prev/Next post navigation

### SEO (Aggressive)

- Dynamic `sitemap.xml` covering all pages and all blog posts
- `robots.txt` with explicit allows for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot
- `llms.txt` for AI engine context
- `Person` JSON-LD schema on homepage
- `BlogPosting` JSON-LD on every post
- `FAQPage` JSON-LD auto-injected from frontmatter
- `BreadcrumbList` JSON-LD on blog listing
- OG + Twitter card meta on all pages
- Author attribution on all blog posts

### Blog Post SEO Automation

Every new MDX post supports structured frontmatter fields that automatically render:

```yaml
summary: "40-60 word TL;DR block shown at top of post, cited by AI engines"

keyStats:
  - stat: "The statistic as a sentence"
    source: "Publication name"
    sourceUrl: "https://..."

faqs:
  - question: "What people search for?"
    answer: "Direct, 1-3 sentence answer."
```

- `summary` → renders as a TL;DR card above the article
- `keyStats` → renders as stat cards before the article body
- `faqs` → renders as FAQ section at bottom + injects `FAQPage` JSON-LD automatically
- Auto internal linking via a custom remark plugin that scans post content and links mentions of other post titles

### CMS (Keystatic)

- Admin UI at `/keystatic`
- Local mode in development (no setup needed)
- GitHub mode in production — edits create PRs on `cms/*` branches
- Full schema editor for all frontmatter fields including SEO fields
- MDX rich text editor with toolbar
- Custom branding

---

## Project Structure

```
app/
├── (portfolio)/          # Portfolio routes (uses portfolio layout)
│   ├── layout.tsx        # Portfolio layout: ThemeProvider, Navbar, max-w-2xl
│   ├── page.tsx          # Homepage
│   ├── blog/             # Blog listing + post pages
│   ├── projects/         # Projects page
│   ├── guestbook/        # Guestbook
│   ├── error.tsx         # Portfolio error boundary
│   └── not-found.tsx     # 404 for portfolio routes
├── keystatic/            # CMS admin UI (isolated layout)
├── api/
│   └── keystatic/        # Keystatic API route handler
├── layout.tsx            # Root layout (bare html/body shell)
├── not-found.tsx         # Root 404 (with portfolio chrome)
├── global-error.tsx      # Root error boundary
├── opengraph-image.tsx   # Root OG image
└── sitemap.ts            # Dynamic sitemap

posts/                    # MDX blog posts
├── _template.mdx         # Post template with SEO field guides
└── *.mdx                 # 25+ posts

lib/
├── remark-auto-link.ts   # Auto internal linking remark plugin
├── remark-code-meta.ts   # Code block meta plugin
├── pagination.ts         # Blog pagination utilities
└── utils.ts

data/
└── resume.tsx            # All site content (projects, work, skills, etc.)

public/
├── llms.txt              # AI engine context file
├── robots.txt            # Crawler rules
└── rss.xml               # RSS feed
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install

```bash
pnpm install
```

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com

# Keystatic GitHub mode (production only — leave blank for local dev)
KEYSTATIC_GITHUB_CLIENT_ID=
KEYSTATIC_GITHUB_CLIENT_SECRET=
KEYSTATIC_SECRET=
```

### Run

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the site.
Open [http://localhost:3000/keystatic](http://localhost:3000/keystatic) for the CMS.

### Build

```bash
pnpm build
```

---

## CMS Usage

### Local Development

The CMS runs at `/keystatic` in local mode with no setup required. Changes write directly to MDX files in `posts/`.

### Production (GitHub Mode)

To enable editing from the deployed site:

1. Create a GitHub OAuth App at [github.com/settings/applications/new](https://github.com/settings/applications/new):
   - Homepage URL: `https://jealous.dev`
   - Callback URL: `https://jealous.dev/api/keystatic/github/oauth/callback`

2. Add to your hosting provider's env vars:

   ```
   KEYSTATIC_GITHUB_CLIENT_ID=<client id>
   KEYSTATIC_GITHUB_CLIENT_SECRET=<client secret>
   KEYSTATIC_SECRET=<any long random string>
   ```

3. Deploy. Edits at `jealous.dev/keystatic` will open PRs on `cms/*` branches — merge to publish.

### Writing a New Post

Use `posts/_template.mdx` as a starting point. Fill in:

- `title` — use the exact query people search for
- `publishedAt` — ISO date (`YYYY-MM-DD`)
- `brief` — meta description, ~155 chars
- `summary` — 40-60 word TL;DR (shown at top, cited by AI engines)
- `keyStats` — real statistics with sources
- `faqs` — 3-5 Q&A pairs using exact search query phrasing
- H2 headings — use `## How to X`, `## What is X`, `## X vs Y` patterns

---

## Customization

All site content lives in `data/resume.tsx`:

- Personal info, bio, skills
- Work experience
- Featured projects + full project list
- Services
- Testimonials

Update that file and the entire site reflects the changes.

---

## Deployment

Designed to deploy on Vercel. Connect the GitHub repo, add env vars, and deploy.

---

## Credits

This project is based on the [Magic UI Portfolio](https://github.com/magicuidesign/portfolio) template by [Magic UI](https://magicui.design). The original template provided the foundational structure, components, and design system that this portfolio is built upon.

---

## License

MIT
