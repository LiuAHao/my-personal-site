# My Personal Site

LiuAHao 的个人主页，使用 React、TypeScript、Vite、Tailwind CSS 和 Framer Motion 构建。

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
  assets/              Static images and SVG assets
  components/
    layout/            Page-level layout and background components
    sections/          Main homepage sections
    ui/                Reusable UI primitives
  data/                Profile, project, keyword, and technology data
  App.tsx              Page composition
  main.tsx             React entry point
```

## Content

Most personal content lives in `src/data/profile.ts`:

- `profile`: name, email, GitHub URL, tagline, contact intro
- `keywords`: animated about-section bubbles
- `projects`: project cards
- `technologies`: stack tags

Update that file first when changing page copy or showcased work.
