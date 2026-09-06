import Link from "next/link";

export default async function InterceptedPhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 w-80 space-y-3">
        <div className="aspect-square rounded-lg bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center text-white font-bold text-3xl">
          {id}
        </div>
        <p className="text-sm opacity-70">
          Intercepted modal for photo {id}. Rendered from{" "}
          <code>@modal/(.)photo/[id]</code>.
        </p>
        <Link
          href="/concepts/gallery"
          className="block text-center text-sm underline"
        >
          Close
        </Link>
      </div>
    </div>
  );
}
