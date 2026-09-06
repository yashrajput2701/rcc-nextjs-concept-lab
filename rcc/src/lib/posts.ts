// Pretend this file is a database client or CMS SDK. It's here so the
// SSG / SSR / ISR demo pages have something realistic to "fetch" without
// depending on an external network call (which sandboxes/CI often block).
// Everything here is `async` on purpose, exactly like a real DB query.

export type Post = {
  slug: string;
  title: string;
  body: string;
};

const POSTS: Post[] = [
  {
    slug: "what-is-app-router",
    title: "What is the App Router?",
    body: "The App Router (introduced in Next.js 13, now the default) is a file-system-based router built on React Server Components. Folders define routes, and special files (page, layout, loading, error) define UI for each route segment.",
  },
  {
    slug: "rendering-strategies",
    title: "SSG vs SSR vs ISR, in one paragraph",
    body: "SSG renders HTML once at build time and reuses it for every visitor (fastest, but data can go stale). SSR renders fresh HTML on every single request (always current, but slower per-request). ISR is the middle ground: serve the cached static HTML, but silently regenerate it in the background after N seconds.",
  },
  {
    slug: "server-actions-explained",
    title: "Server Actions in one paragraph",
    body: "A Server Action is an async function marked 'use server' that a Client (or Server) Component can call directly — as a form action or a plain function call — without you writing an API route or a fetch call. Next.js turns it into a secure RPC endpoint automatically.",
  },
];

// Simulate real-world latency so loading.tsx / Suspense demos are visible.
function delay<T>(value: T, ms = 400): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function getAllPosts(): Promise<Post[]> {
  return delay(POSTS, 300);
}

export async function getAllPostSlugs(): Promise<string[]> {
  return delay(POSTS.map((p) => p.slug), 100);
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return delay(POSTS.find((p) => p.slug === slug), 300);
}
