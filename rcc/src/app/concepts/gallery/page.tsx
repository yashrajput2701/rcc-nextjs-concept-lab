import Link from "next/link";

const photos = [1, 2, 3, 4];

export default function GalleryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">8. Intercepting routes</h1>
      <p className="opacity-80">
        Click a photo: the URL changes to <code>/concepts/gallery/photo/&lt;id&gt;</code>{" "}
        but it opens as a MODAL over this grid (intercepted). Now copy that
        URL and open it in a fresh tab, or hit refresh — you get the real,
        full standalone page instead. Same URL, two different components,
        depending on how you arrived.
      </p>
      <div className="grid grid-cols-4 gap-3">
        {photos.map((id) => (
          <Link
            key={id}
            href={`/concepts/gallery/photo/${id}`}
            className="aspect-square rounded-lg bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl hover:opacity-80"
          >
            {id}
          </Link>
        ))}
      </div>
    </div>
  );
}
