# rcc — a Next.js 16 Concept Lab

A single Next.js project (App Router, TypeScript, Tailwind CSS, React 19)
built to *study* Next.js: every major concept — routing, layouts, rendering
strategies, Server Actions, Route Handlers, middleware/proxy, caching, and
more — lives in its own folder with working code and comments explaining
the *why*, not just the *how*.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 and click "Browse all 28 concepts", or go
straight to http://localhost:3000/concepts.

For rendering-strategy concepts (SSG / SSR / ISR), differences are much
easier to see in a production build than in `next dev` (which always
re-renders):

```bash
npm install
npm run build
npm start
```

## How it's organized

```
src/
  app/
    layout.tsx              root layout: fonts (next/font), global metadata
    page.tsx                home page
    (marketing)/about/      route group demo (concept 5)
    login/                  login flow used by the proxy/middleware demo
    concepts/
      static-routing/           1. static routing & <Link>
      dynamic-routes/[slug]/    2. dynamic routes
      catch-all/[...slug]/      3. catch-all routes
      optional-catch-all/       4. optional catch-all routes
      dashboard/                6. nested layouts
      parallel-dashboard/       7. parallel routes (@slots)
      gallery/                  8. intercepting routes (modal pattern)
      streaming/                9. loading.tsx & Suspense
      error-demo/               10. error.tsx boundaries
      not-found-demo/           11. notFound() & not-found.tsx
      server-vs-client/         12. Server vs Client Components
      metadata/                 13. Metadata API (static + dynamic)
      image-optimization/       14. next/image
      font-optimization/        15. next/font (see layout.tsx too)
      ssg-blog/                 16. SSG + generateStaticParams
      ssr-clock/                17. SSR (force-dynamic)
      isr-news/                 18. ISR (revalidate) + on-demand revalidation
      server-actions/           19. Server Actions
      client-fetch/             20-21. Route Handlers + client-side fetch
      external-api/             22. External API integration
      protected/                23. Proxy/middleware (auth guard)
      cookies-demo/             24. Cookies & headers
      search-params/            25. searchParams / useSearchParams
      env-vars/                 26. Environment variables
      todo-app/                 28. Capstone: full CRUD + useOptimistic
    api/
      hello/route.ts            basic Route Handler (GET/POST)
      notes/route.ts            collection Route Handler (GET/POST)
      notes/[id]/route.ts       item Route Handler (GET/DELETE)
      revalidate/route.ts       27. on-demand revalidation endpoint
  lib/
    posts.ts                 mock "database" for SSG/SSR/ISR demos
    db.ts                    in-memory store for notes/todos demos
  proxy.ts                   Next.js 16's renamed "middleware" (concept 23)
```

## Notes

- **No real database.** `src/lib/db.ts` and `src/lib/posts.ts` are
  in-memory arrays standing in for a real data layer — swap them for
  Prisma/Drizzle/SQL calls and every Server Action / Route Handler here
  keeps working unchanged. State resets whenever the dev server restarts.
- **External API demo** (`/concepts/external-api`) calls
  `jsonplaceholder.typicode.com` (a free public test API) and falls back to
  mock data if that request fails — some sandboxed/offline environments
  block outbound requests; your own machine should fetch live data.
- **`proxy.ts`, not `middleware.ts`.** Next.js 16 renamed the middleware
  file convention to `proxy.ts` (exported function `proxy`, defaults to the
  Node.js runtime instead of Edge). This project already uses the new
  convention.
- Every concept page has comments explaining the reasoning, plus at least
  one interactive element so you can *see* the behavior, not just read
  about it.

### Scripts

| Command         | What it does                                      |
|-----------------|----------------------------------------------------|
| `npm install`   | Install dependencies (run this first)             |
| `npm run dev`   | Start the dev server at http://localhost:3000     |
| `npm run build` | Production build (needed to see real SSG/ISR/SSR) |
| `npm start`     | Serve the production build                        |
| `npm run lint`  | Run ESLint                                        |
