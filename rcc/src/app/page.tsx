import Link from "next/link";

// Home page = a plain Server Component. It runs on the server, fetches
// nothing, and streams static HTML to the browser. This is the DEFAULT
// behavior of every component in the `app/` directory unless you add
// "use client" at the top of the file (see concept #12).
export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          rcc — a Next.js concept lab
        </h1>
        <p className="mt-4 text-lg opacity-70 max-w-2xl mx-auto">
          One project, every major Next.js (App Router) concept: routing,
          layouts, rendering strategies, server actions, API routes, caching,
          middleware and more — each with working code and comments.
        </p>
        <Link
          href="/concepts"
          className="inline-block mt-6 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80"
        >
          Browse all 28 concepts →
        </Link>
      </section>

      <section className="grid sm:grid-cols-2 gap-4">
        <Card
          title="How to use this repo"
          body="Every concept lives in its own folder under src/app/concepts/<name>. Open the page.tsx (and layout.tsx/loading.tsx/error.tsx where present) side by side with the running app to see cause and effect."
        />
        <Card
          title="Where to start"
          body="If you're new to the App Router, go in numeric order from the 'All concepts' page: routing → UI states → components → data fetching → mutations/APIs → requests & env."
        />
        <Card
          title="What's real vs. mocked"
          body="API routes use an in-memory array (resets on server restart) so you can see full CRUD without a database. External API calls hit JSONPlaceholder, a free public test API."
        />
        <Card
          title="Run it"
          body="npm run dev, then open http://localhost:3000. npm run build && npm start to see production rendering behavior (SSG/ISR/SSR differences are easiest to observe in production mode)."
        />
      </section>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-white/5">
      <h3 className="font-semibold mb-1.5">{title}</h3>
      <p className="text-sm opacity-70">{body}</p>
    </div>
  );
}
