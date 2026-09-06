export default function ParallelDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">7. Parallel routes — @slots</h1>
      <p className="opacity-80 mt-2">
        The two boxes below render independently and in parallel, defined by
        <code> @analytics</code> and <code>@team</code> folders sitting next
        to this <code>page.tsx</code>.
      </p>
    </div>
  );
}
