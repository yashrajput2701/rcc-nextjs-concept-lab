import Link from "next/link";

// CONCEPT 11b: not-found.tsx.
// This renders whenever `notFound()` is called anywhere in this route
// segment, OR when a URL simply doesn't match any route under here.
export default function NotFound() {
  return (
    <div className="text-center py-16 space-y-3">
      <p className="text-5xl">🕳️</p>
      <h2 className="text-xl font-bold">Not found (custom not-found.tsx)</h2>
      <p className="opacity-70 text-sm">
        This came from calling <code>notFound()</code> in the page component.
      </p>
      <Link href="/concepts/not-found-demo" className="underline text-sm">
        Reset demo
      </Link>
    </div>
  );
}
