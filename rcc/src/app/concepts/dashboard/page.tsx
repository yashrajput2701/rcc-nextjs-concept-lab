export default function DashboardOverview() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">6. Nested layouts</h1>
      <p className="opacity-80">
        This is <code>/concepts/dashboard</code>. The sidebar to the left
        comes from <code>dashboard/layout.tsx</code>. Click &quot;Settings&quot; — the
        sidebar stays mounted, only the content on the right changes.
      </p>
    </div>
  );
}
