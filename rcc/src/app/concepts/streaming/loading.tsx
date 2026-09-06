// CONCEPT 9a: loading.tsx.
// Next.js automatically wraps the sibling page.tsx in a <Suspense> boundary
// and shows THIS component while the page (or any async data it awaits) is
// still loading. No manual <Suspense> wiring needed for whole-page loading —
// just add this file next to page.tsx.
export default function Loading() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-8 w-64 bg-black/10 dark:bg-white/10 rounded" />
      <div className="h-4 w-full bg-black/10 dark:bg-white/10 rounded" />
      <div className="h-4 w-3/4 bg-black/10 dark:bg-white/10 rounded" />
      <p className="text-xs opacity-50 pt-2">
        (This is loading.tsx — shown automatically while the page below is
        fetching.)
      </p>
    </div>
  );
}
