# ByteSpace – Frontend Assessment

Landing page + Login + Signup, **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS**.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Structure

- `src/app` – routes: `/`, `/login`, `/signup`
- `src/components/sections` – landing sections (Header, Hero, Partners, Courses, Categories, Growth, CreatorCta, Testimonials, Footer)
- `src/components/ui` – reusable pieces (Button, Field, Logo, CourseCard, AvatarStack, Img, Icons)
- `src/components/auth` – AuthShell + AuthForm (shared by login/signup, client-side validation)
- `src/lib/data.ts` – all copy/content; `tailwind.config.ts` – design tokens from Figma
