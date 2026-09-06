import ClientSearchParams from "./ClientSearchParams";

// CONCEPT 25a: The `searchParams` prop — the SERVER COMPONENT way to read
// the query string (?sort=asc etc). It's a Promise, same as `params`.
// Reading it opts the page out of full static rendering for that data,
// since query strings are only known at request time.
export default async function SearchParamsPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string; q?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">25. searchParams / useSearchParams</h1>
      <p className="opacity-80 text-sm">
        Try appending <code>?sort=asc&amp;q=next</code> to this page&apos;s URL.
      </p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 text-sm">
        <p>Server-read params: {JSON.stringify(params)}</p>
      </div>
      <ClientSearchParams />
    </div>
  );
}
