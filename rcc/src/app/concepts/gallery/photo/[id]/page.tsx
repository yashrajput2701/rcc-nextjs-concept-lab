import Link from "next/link";

export default async function FullPhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Full page for photo {id}</h1>
      <div className="aspect-video max-w-md rounded-lg bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center text-white font-bold text-4xl">
        {id}
      </div>
      <p className="opacity-70 text-sm">
        You reached this via a direct visit / refresh, so the interception
        was bypassed and Next.js rendered the real route:{" "}
        <code>gallery/photo/[id]/page.tsx</code>.
      </p>
      <Link href="/concepts/gallery" className="underline text-sm">
        ← Back to gallery
      </Link>
    </div>
  );
}
