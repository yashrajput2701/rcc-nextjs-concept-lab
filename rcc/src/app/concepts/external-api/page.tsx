type ExternalPost = { id: number; title: string; body: string };

const FALLBACK_POSTS: ExternalPost[] = [
  {
    id: 1,
    title: "(fallback) sample post — network blocked",
    body: "This ran because the live fetch to the external API failed or was blocked by your environment's network rules. In a normal environment (your own machine, most hosting providers) the real fetch below succeeds.",
  },
];

// CONCEPT 22: Fetching a THIRD-PARTY (external) API from a Server Component.
// This is the simplest form of API integration in Next.js: just `fetch()`
// inside an async Server Component. It runs on the server, so the external
// API never sees your users' browsers directly, and any API key you pass in
// headers stays server-side and is never shipped to the client bundle.
async function getExternalPosts(): Promise<{ posts: ExternalPost[]; live: boolean }> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
      // CONCEPT 16-18 recap: this fetch cache option is what determines
      // whether the containing route behaves like SSG, SSR, or ISR.
      next: { revalidate: 60 }, // ISR-style: cache for 60s, then refresh.
    });
    if (!res.ok) throw new Error(`Upstream returned ${res.status}`);
    const posts: ExternalPost[] = await res.json();
    return { posts, live: true };
  } catch {
    return { posts: FALLBACK_POSTS, live: false };
  }
}

export default async function ExternalApiPage() {
  const { posts, live } = await getExternalPosts();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">22. External API integration</h1>
      <p className="opacity-80 text-sm">
        Fetches <code>jsonplaceholder.typicode.com</code> (a free public test
        API) directly inside a Server Component, cached for 60s via{" "}
        <code>next: {"{"} revalidate: 60 {"}"}</code>.
      </p>
      <p
        className={`text-xs font-medium ${live ? "text-green-600" : "text-amber-600"}`}
      >
        {live
          ? "✓ Live data from the external API"
          : "⚠ Live fetch failed/blocked — showing fallback data (see try/catch in the code)"}
      </p>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li
            key={p.id}
            className="rounded-lg border border-black/10 dark:border-white/10 p-3"
          >
            <p className="font-medium text-sm">{p.title}</p>
            <p className="text-xs opacity-60 mt-1">{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
