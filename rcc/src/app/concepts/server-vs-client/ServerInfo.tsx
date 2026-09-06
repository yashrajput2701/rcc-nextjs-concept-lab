// CONCEPT 12a: A Server Component (the default — no directive needed).
// This code NEVER ships to the browser. It can safely read secrets, hit a
// database directly, or use Node APIs, because it only ever executes on
// the server. It cannot use useState, useEffect, or onClick.
export default function ServerInfo() {
  const renderedAt = new Date().toISOString();
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
      <p className="text-sm opacity-60 mb-2">Server Component (no state)</p>
      <p className="text-sm">
        Rendered on the server at <code>{renderedAt}</code>. Refresh the page
        (full reload) and this timestamp changes; clicking the counter next
        to it never re-runs this component.
      </p>
    </div>
  );
}
