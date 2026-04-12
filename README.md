# Hi, I'm Pranathi!

## Software development projects

- [Visual Discrimination Task](https://github.com/1851701/Visual-Discrimation-Task)
- [Dynamic Sliding Puzzle Game](https://github.com/1851701/Dynamic-Sliding-Puzzle-Game)

---

# Personal portfolio (Next.js)

A minimal, responsive portfolio site built with the App Router, Tailwind CSS v4, Framer Motion, and `next-themes` (dark mode).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Customize content

| What | Where |
|------|--------|
| Name, bio, skills, experience, social links | `src/lib/site.ts` |
| Projects and case studies | `src/data/projects.ts` |
| Resume text (page body) | `src/components/resume/resume-section.tsx` |
| PDF download + embed | Add `public/resume.pdf` |
| Site URL (SEO, OG, sitemap) | Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` |

## Features

- Pages: Home, About, Projects, Project detail (`/projects/[slug]`), Resume, Contact
- Sticky navbar, mobile menu, footer
- Dark / light theme toggle
- Framer Motion fade-in and hover motion (respects reduced motion)
- Contact form posts to `src/app/api/contact/route.ts` (demo: logs in dev; connect to email or a form service for production)
- `sitemap.xml` and `robots.txt` via `src/app/sitemap.ts` and `src/app/robots.ts`

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

Project images use [picsum.photos](https://picsum.photos/) placeholders; replace `thumbnail` / `heroImage` in `projects.ts` with your own assets under `public/` or allowed remote URLs in `next.config.ts`.
