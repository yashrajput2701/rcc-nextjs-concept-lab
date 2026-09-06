import Link from "next/link";

// This is a Server Component by default (no "use client" at the top).
// It never ships its own JS to the browser — Next.js renders it to HTML on the server.
const sections: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Routing",
    links: [
      { href: "/concepts/static-routing", label: "1. Static routing & <Link>" },
      { href: "/concepts/dynamic-routes/hello-world", label: "2. Dynamic routes [slug]" },
      { href: "/concepts/catch-all/a/b/c", label: "3. Catch-all [...slug]" },
      { href: "/concepts/optional-catch-all", label: "4. Optional catch-all [[...slug]]" },
      { href: "/about", label: "5. Route groups (marketing)" },
      { href: "/concepts/dashboard", label: "6. Nested layouts" },
      { href: "/concepts/parallel-dashboard", label: "7. Parallel routes @slots" },
      { href: "/concepts/gallery", label: "8. Intercepting routes" },
    ],
  },
  {
    title: "UI States",
    links: [
      { href: "/concepts/streaming", label: "9. loading.tsx & Suspense" },
      { href: "/concepts/error-demo", label: "10. error.tsx boundaries" },
      { href: "/concepts/not-found-demo", label: "11. notFound() & not-found.tsx" },
    ],
  },
  {
    title: "Components & Metadata",
    links: [
      { href: "/concepts/server-vs-client", label: "12. Server vs Client components" },
      { href: "/concepts/metadata", label: "13. Metadata API (static + dynamic)" },
      { href: "/concepts/image-optimization", label: "14. next/image" },
      { href: "/concepts/font-optimization", label: "15. next/font" },
    ],
  },
  {
    title: "Data Fetching & Rendering",
    links: [
      { href: "/concepts/ssg-blog", label: "16. SSG + generateStaticParams" },
      { href: "/concepts/ssr-clock", label: "17. SSR (dynamic, no-store)" },
      { href: "/concepts/isr-news", label: "18. ISR (time-based revalidate)" },
      { href: "/concepts/isr-news", label: "27. On-demand revalidation" },
    ],
  },
  {
    title: "Mutations & APIs",
    links: [
      { href: "/concepts/server-actions", label: "19. Server Actions" },
      { href: "/concepts/client-fetch", label: "20-21. API routes + client fetch" },
      { href: "/concepts/external-api", label: "22. External API integration (server)" },
      { href: "/concepts/todo-app", label: "28. Capstone: full CRUD Todo app" },
    ],
  },
  {
    title: "Requests, Cookies, Env",
    links: [
      { href: "/concepts/protected", label: "23. Proxy / middleware (auth guard)" },
      { href: "/concepts/cookies-demo", label: "24. Cookies & headers" },
      { href: "/concepts/search-params", label: "25. searchParams / useSearchParams" },
      { href: "/concepts/env-vars", label: "26. Environment variables" },
    ],
  },
];

export default function Nav() {
  return (
    <nav className="w-full border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-lg">
          rcc <span className="text-xs font-normal opacity-60">/ Next.js concept lab</span>
        </Link>
        <Link
          href="/concepts"
          className="text-sm px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80"
        >
          All concepts
        </Link>
      </div>
    </nav>
  );
}

export { sections };
