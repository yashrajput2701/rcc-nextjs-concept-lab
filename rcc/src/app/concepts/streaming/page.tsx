import { Suspense } from "react";

// CONCEPT 9b: Suspense for PARTIAL streaming.
// loading.tsx covers the whole page. But if only ONE section of a page is
// slow (e.g. a comments widget), wrap just that piece in <Suspense> so the
// rest of the page can appear immediately and the slow part "pops in" when
// ready — this is React Server Components streaming.
async function SlowWidget({ ms, label }: { ms: number; label: string }) {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return (
    <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-3 text-sm">
      {label} loaded after {ms}ms
    </div>
  );
}

function WidgetSkeleton({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-3 text-sm animate-pulse opacity-60">
      Loading {label}…
    </div>
  );
}

// This whole page component is itself async and awaits a fake 800ms delay,
// which is what triggers loading.tsx to appear first.
export default async function StreamingPage() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">9. loading.tsx & Suspense streaming</h1>
      <p className="opacity-80">
        This page itself waited 800ms (you saw the skeleton from{" "}
        <code>loading.tsx</code>). Below, two independent widgets stream in
        at DIFFERENT speeds without blocking each other or this text.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <Suspense fallback={<WidgetSkeleton label="fast widget" />}>
          <SlowWidget ms={1200} label="Fast-ish widget" />
        </Suspense>
        <Suspense fallback={<WidgetSkeleton label="slow widget" />}>
          <SlowWidget ms={3000} label="Slow widget" />
        </Suspense>
      </div>
    </div>
  );
}
