import { notFound } from "next/navigation";
import Link from "next/link";

// CONCEPT 11a: notFound().
// Calling this function anywhere in a Server Component immediately stops
// rendering and tells Next.js to render the nearest not-found.tsx instead —
// useful when e.g. a database lookup for a dynamic [id] comes back empty.
export default async function NotFoundDemoPage({
  searchParams,
}: {
  searchParams: Promise<{ trigger?: string }>;
}) {
  const { trigger } = await searchParams;

  if (trigger === "1") {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">11. notFound() & not-found.tsx</h1>
      <p className="opacity-80">
        A common pattern: <code>const item = await db.find(id); if (!item)
        notFound();</code>
      </p>
      <Link
        href="/concepts/not-found-demo?trigger=1"
        className="inline-block px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm"
      >
        Trigger notFound()
      </Link>
    </div>
  );
}
