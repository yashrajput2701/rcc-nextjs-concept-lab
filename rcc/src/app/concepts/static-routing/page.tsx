import Link from "next/link";

// CONCEPT 1: Static (file-system) routing.
// In the App Router, a folder = a URL segment, and a `page.tsx` inside it
// makes that segment a visitable page. This file lives at
// src/app/concepts/static-routing/page.tsx, so its URL is
// /concepts/static-routing — no router config file, no route table.
//
// Analogy: it's like a filing cabinet where the folder name IS the label
// on the drawer. You don't maintain a separate index of what's in which
// drawer; the folder structure IS the index.
export default function StaticRoutingPage() {
  return (
    <div className="prose-block space-y-4">
      <h1 className="text-2xl font-bold">1. Static routing & &lt;Link&gt;</h1>
      <p className="opacity-80">
        This page&apos;s URL comes directly from its folder path. Next.js also
        ships a <code>&lt;Link&gt;</code> component instead of a plain
        <code>&lt;a&gt;</code> tag — it pre-fetches the linked page&apos;s code in
        the background when it scrolls into view, so navigation feels instant.
      </p>
      <div className="flex gap-3">
        <Link href="/" className="underline">
          ← Back home (Link, client-side nav)
        </Link>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- intentional: demonstrating the full-reload behavior of a plain <a>, contrasted with <Link> above */}
        <a href="/" className="underline opacity-50">
          Back home (plain &lt;a&gt;, full reload)
        </a>
      </div>
      <p className="text-sm opacity-60">
        Open devtools → Network tab. Clicking the Link keeps the tab quiet
        (no full document reload); clicking the plain anchor reloads
        everything.
      </p>
    </div>
  );
}
