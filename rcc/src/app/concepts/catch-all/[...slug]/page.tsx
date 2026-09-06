import Link from "next/link";

// CONCEPT 3: Catch-all routes with [...slug].
// The three dots mean "capture one OR MORE remaining URL segments as an
// array". /concepts/catch-all/a/b/c matches this single file and
// slug becomes ["a", "b", "c"].
//
// Analogy: a dynamic route [slug] is a mail slot for ONE resident name;
// a catch-all [...slug] is a mail slot for an entire multi-line address —
// it swallows everything after that point in the path.
// NOTE: /concepts/catch-all (with nothing after it) does NOT match this
// route — for that you'd need [[...slug]] (concept 4).
export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">3. Catch-all routes — [...slug]</h1>
      <p className="opacity-80">
        Captured segments: <code>{JSON.stringify(slug)}</code>
      </p>
      <p className="text-sm opacity-60">
        This is exactly how documentation sites (e.g. /docs/a/b/c) render a
        single template for arbitrarily deep nested paths.
      </p>
      <Link href="/concepts/catch-all/x/y/z/w" className="underline text-sm">
        Try a deeper path: /concepts/catch-all/x/y/z/w
      </Link>
    </div>
  );
}
