// CONCEPT 8: Intercepting routes, combined with a parallel @modal slot.
// This is THE standard Next.js pattern for "photo grid that opens a modal
// on click, but a direct link/refresh shows a full page" (Instagram-style).
//
// (.)photo/[id] inside @modal means: "when navigating to photo/[id] from
// THIS SAME LEVEL, intercept it and render it in the @modal slot instead of
// replacing the whole page." A hard refresh or direct URL visit bypasses the
// interception and hits the real app/concepts/gallery/photo/[id]/page.tsx.
export default function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
