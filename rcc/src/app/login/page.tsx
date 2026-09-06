import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;

  return (
    <div className="max-w-sm mx-auto space-y-4 text-center">
      <h1 className="text-2xl font-bold">Login (middleware demo)</h1>
      <p className="opacity-70 text-sm">
        Middleware redirected you here because{" "}
        <code>{from ?? "/concepts/protected"}</code> requires a{" "}
        <code>demo_session</code> cookie you don&apos;t have yet.
      </p>
      <form action={login}>
        <input type="hidden" name="from" value={from ?? "/concepts/protected"} />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm"
        >
          Log in (sets a cookie)
        </button>
      </form>
    </div>
  );
}
