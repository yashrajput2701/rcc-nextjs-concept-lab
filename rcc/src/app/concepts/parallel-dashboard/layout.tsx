// CONCEPT 7: Parallel routes — @slots.
// A folder prefixed with @ is a "named slot", not a URL segment. This
// layout receives it as an extra prop (matching the folder name) alongside
// `children`. Both slots render SIMULTANEOUSLY, independently — each can
// have its own loading.tsx / error.tsx / even its own nested routes.
//
// Real use case: a dashboard where the analytics widget and the team-
// activity widget fetch from different, unrelated APIs at different
// speeds — one slow slot doesn't block the other from showing up.
export default function ParallelDashboardLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      {children}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <p className="text-xs uppercase opacity-50 mb-2">@analytics slot</p>
          {analytics}
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <p className="text-xs uppercase opacity-50 mb-2">@team slot</p>
          {team}
        </div>
      </div>
    </div>
  );
}
