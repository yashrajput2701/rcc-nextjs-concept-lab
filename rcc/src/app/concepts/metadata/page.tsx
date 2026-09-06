import type { Metadata } from "next";
import Link from "next/link";

// CONCEPT 13a: Static metadata (recap — also used in root layout.tsx).
// Just export a `metadata` object. Next.js merges it with parent layouts'
// metadata and writes the final <head> for you.
export const metadata: Metadata = {
  title: "Metadata Demo",
  description: "Static metadata example page.",
};

export default function MetadataPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">13. Metadata API</h1>
      <p className="opacity-80">
        View this page&apos;s source (or the browser tab title) — it says
        &quot;Metadata Demo | rcc&quot;, combining this page&apos;s static{" "}
        <code>metadata.title</code> with the <code>template</code> defined in
        the root layout.
      </p>
      <p className="opacity-80">
        Dynamic metadata (built from fetched data, e.g. a blog post&apos;s title)
        uses <code>generateMetadata()</code> instead — see a product page:
      </p>
      <Link href="/concepts/metadata/42" className="underline text-sm">
        /concepts/metadata/42 (dynamic title from &quot;data&quot;)
      </Link>
    </div>
  );
}
