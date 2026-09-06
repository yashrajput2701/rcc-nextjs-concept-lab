"use client";
// CONCEPT 25b: useSearchParams() — the CLIENT COMPONENT way to read the
// query string. Unlike the server-side `searchParams` prop, this hook
// re-renders reactively when the URL changes via client-side navigation,
// which matters for things like a live-updating filter UI.
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function ClientSearchParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sort = searchParams.get("sort") ?? "none";

  function setSort(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 space-y-2">
      <p className="text-sm">
        Client-read <code>sort</code> param: <strong>{sort}</strong>
      </p>
      <div className="flex gap-2">
        {["asc", "desc", "none"].map((v) => (
          <button
            key={v}
            onClick={() => setSort(v)}
            className="px-3 py-1 rounded-full border border-black/10 dark:border-white/10 text-xs"
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
