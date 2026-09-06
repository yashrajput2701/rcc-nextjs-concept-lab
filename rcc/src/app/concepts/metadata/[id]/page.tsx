import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

// CONCEPT 13b: generateMetadata() — DYNAMIC metadata.
// Runs on the server before the page renders and can `await` data (a DB
// lookup, a fetch call) to build a title/description per-item — essential
// for good SEO on pages like /product/123 or /blog/my-post.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  // Pretend this came from a database or CMS:
  const fakeItem = { id, name: `Product #${id}` };
  return {
    title: fakeItem.name,
    description: `Auto-generated description for ${fakeItem.name}.`,
  };
}

export default async function DynamicMetadataPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Product #{id}</h1>
      <p className="opacity-80">
        Check the browser tab: the title is &quot;Product #{id} | rcc&quot;, generated
        at request time by <code>generateMetadata()</code> — try changing the
        id in the URL.
      </p>
    </div>
  );
}
