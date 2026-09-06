import Image from "next/image";

// CONCEPT 14: next/image.
// Regular <img> serves whatever file size you give it, to every device.
// next/image automatically: resizes to the exact rendered size, converts to
// modern formats (WebP/AVIF) when the browser supports it, lazy-loads
// off-screen images, and prevents layout shift by reserving space via
// width/height (or `fill`). Analogy: it's like a photo lab that always
// prints the exact size you ordered instead of mailing you the full-res
// negative and letting your browser shrink it down (wasting bandwidth).
export default function ImageOptimizationPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">14. next/image</h1>
      <p className="opacity-80">
        Open devtools → Network → Img while reloading this page. The request
        goes through Next.js&apos;s <code>/_next/image</code> optimizer, and the
        response is a resized, modern-format image — not the original file.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200&q=80"
        alt="A cat, optimized by next/image"
        width={480}
        height={320}
        className="rounded-lg"
        priority
      />
      <p className="text-xs opacity-50">
        `priority` tells Next.js to preload this image because it&apos;s likely
        above the fold (skip lazy-loading for it).
      </p>
    </div>
  );
}
