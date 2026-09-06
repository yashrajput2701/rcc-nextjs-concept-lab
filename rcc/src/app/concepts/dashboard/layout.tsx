import Link from "next/link";

// CONCEPT 6: Nested layouts.
// A layout.tsx wraps every page.tsx (and every nested layout) inside its
// own folder AND all subfolders. Layouts persist across navigation between
// their child routes — they don't re-render or lose state, only the
// `children` slot swaps out. This is why a sidebar's scroll position or a
// video player doesn't reset when you click between dashboard tabs.
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[160px_1fr] gap-6">
      <aside className="space-y-1 text-sm">
        <p className="text-xs uppercase opacity-50 mb-2">Dashboard nav</p>
        <Link href="/concepts/dashboard" className="block hover:underline">
          Overview
        </Link>
        <Link
          href="/concepts/dashboard/settings"
          className="block hover:underline"
        >
          Settings
        </Link>
      </aside>
      <div>{children}</div>
    </div>
  );
}
