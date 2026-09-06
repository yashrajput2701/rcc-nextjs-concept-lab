export default function DashboardSettings() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Settings (nested route)</h1>
      <p className="opacity-80">
        Still wrapped by the same <code>dashboard/layout.tsx</code> — layouts
        compose down the tree, so a page can be wrapped by several layouts at
        once (root layout → dashboard layout → this page).
      </p>
    </div>
  );
}
