import Link from "next/link";

// CONCEPT 2: Dynamic routes with [slug].
// A folder named in square brackets captures ANY value at that URL position
// and hands it to your page as a prop. /concepts/dynamic-routes/anything
// all match this one file.
//
// Analogy: it's a mail slot labeled "Resident" — one physical slot handles
// mail for whoever currently lives there, instead of needing one slot
// per possible name.
//
// In Next.js 15+/16, route params are a Promise you must `await` — this
// lets Next.js start rendering the surrounding layout before params resolve.
export default async function DynamicRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">2. Dynamic routes — [slug]</h1>
      <p className="opacity-80">
        You visited <code>/concepts/dynamic-routes/{slug}</code>. The value{" "}
        <strong>{slug}</strong> was captured from the URL and passed into this
        component via the <code>params</code> prop.
      </p>
      <div className="flex flex-wrap gap-2">
        {["hello-world", "nextjs-16", "another-example"].map((s) => (
          <Link
            key={s}
            href={`/concepts/dynamic-routes/${s}`}
            className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-sm hover:bg-black/5 dark:hover:bg-white/5"
          >
            /{s}
          </Link>
        ))}
      </div>
    </div>
  );
}
