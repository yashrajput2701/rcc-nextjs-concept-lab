// CONCEPT 17: SSR (Server-Side Rendering) — dynamic, rendered PER REQUEST.
// `force-dynamic` opts this whole route OUT of the static/ISR cache, so
// Next.js re-runs this component on the server for every single request —
// exactly like a classic server-rendered app. Use this for pages that must
// always reflect "right now" (a live dashboard, a page keyed off cookies).
export const dynamic = "force-dynamic";

export default async function SsrClockPage() {
  const now = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">17. SSR — force-dynamic</h1>
      <p className="opacity-80">
        Server time at render: <strong>{now}</strong>
      </p>
      <p className="text-sm opacity-60">
        Reload this page (a real reload, not client navigation) repeatedly —
        the time changes EVERY time, because <code>export const dynamic =
        &quot;force-dynamic&quot;</code> tells Next.js never to cache this
        route&apos;s HTML.
      </p>
    </div>
  );
}
