import Link from "next/link";

// CONCEPT 4: Optional catch-all routes with [[...slug]].
// Double brackets make the catch-all itself OPTIONAL, so this single file
// matches BOTH /concepts/optional-catch-all (slug === undefined)
// AND /concepts/optional-catch-all/anything/deeper (slug === ["anything","deeper"]).
// Real-world use case: a single CMS page component that renders the
// homepage of a section AND every nested page under it.
export default async function OptionalCatchAllPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">
        4. Optional catch-all — [[...slug]]
      </h1>
      <p className="opacity-80">
        {slug
          ? `Captured segments: ${JSON.stringify(slug)}`
          : "No extra segments — this is the base URL, and it still matched this same file."}
      </p>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link href="/concepts/optional-catch-all" className="underline">
          base URL
        </Link>
        <Link href="/concepts/optional-catch-all/one" className="underline">
          /one
        </Link>
        <Link href="/concepts/optional-catch-all/one/two" className="underline">
          /one/two
        </Link>
      </div>
    </div>
  );
}
