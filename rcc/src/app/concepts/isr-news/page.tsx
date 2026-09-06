// CONCEPT 18: ISR (Incremental Static Regeneration).
// This route is served from the STATIC cache (fast, like SSG) — but Next.js
// marks the cached HTML "stale" after `revalidate` seconds. The very next
// request after that gets the (still fast) stale HTML immediately, while
// Next.js regenerates a fresh copy in the background for all requests after
// that. Analogy: a bakery display case — customers always get a bread
// loaf instantly (never wait for the oven), but the case is restocked with
// a fresh batch periodically instead of baking to order.
import RevalidateButton from "./RevalidateButton";

export const revalidate = 15; // seconds

export default async function IsrNewsPage() {
  const generatedAt = new Date().toLocaleTimeString();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">18. ISR — time-based revalidate</h1>
      <p className="opacity-80">
        This HTML was generated at <strong>{generatedAt}</strong> and will be
        reused for every visitor for up to 15 seconds. Reload within 15s →
        same timestamp (served from cache). Reload after 15s → you trigger a
        background regeneration; that request still gets the OLD timestamp
        once more, and the NEXT request after that gets the new one.
      </p>
      <p className="text-sm opacity-60">
        (This is easiest to observe with <code>npm run build && npm start</code>
        — `next dev` re-renders on every request regardless of `revalidate`.)
      </p>
      <div className="pt-2">
        <RevalidateButton />
        <p className="text-xs opacity-50 mt-2">
          This calls <code>POST /api/revalidate</code>, which runs{" "}
          <code>revalidatePath()</code> on the server, then this button calls{" "}
          <code>router.refresh()</code> so you see the new timestamp
          immediately — no 15s wait.
        </p>
      </div>
    </div>
  );
}
