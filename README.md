# Fauzan Arisanto — Portfolio

Personal portfolio inspired by the clean, modern aesthetic of [russellnumo.nl](https://www.russellnumo.nl/).

**Fauzan Arisanto** · Fullstack Developer

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # run production server
```

## Customize your content

Almost everything is editable in one place:

**[`src/data/site.ts`](src/data/site.ts)**

| Field | What it controls |
| --- | --- |
| `name`, `shortName`, `lastName` | Header / branding |
| `title`, `description` | SEO + meta |
| `location`, `openToWork` | Hero meta row |
| `email`, `phone`, `socials` | Contact + footer |
| `marquee` | Large scrolling role titles |
| `about` | About section copy |
| `projects.items` | Featured work (title, year, image, link, blurb) |
| `quote` | Mid-page statement |
| `services` | Expandable service rows |
| `portrait` | Hero portrait path |

### Images

Replace placeholders under `public/images/`:

- `portrait.svg` → your photo (`.jpg` / `.webp` recommended)
- `project-1.svg`, `project-2.svg` → project covers

Then update the paths in `src/data/site.ts`.

### Adding a project

```ts
{
  id: "03",
  role: "Fullstack Development",
  year: "2026",
  title: "My Project",
  subtitle: "Optional label",
  description: "Short project description…",
  href: "https://…",
  image: "/images/my-project.jpg",
  imageAlt: "My Project cover",
}
```

## Project structure

```
src/
  app/           # layout, page, global styles
  components/    # Header, Hero, About, Projects, Quote, Services, Contact…
  data/site.ts   # ← edit me
  hooks/
public/images/   # portrait + project covers
```

## Design notes

The layout mirrors the reference site’s structure:

1. Fixed nav + mobile menu  
2. Full-viewport hero with opposing marquees + centered portrait  
3. About, featured work, statement quote, services accordion, contact/footer  
4. Scroll progress indicator (bottom-right)

Typography uses free Google Fonts close to the original feel:

- **Bebas Neue** — condensed display (marquee / big titles)  
- **DM Sans** — body UI text  

Background: `#0e0e0e`.
