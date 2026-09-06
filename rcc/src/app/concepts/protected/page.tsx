import { logout } from "@/app/login/actions";

// This page has NO auth check in its own code — middleware.ts already
// guarantees nobody reaches this component without the cookie. That's the
// whole point of middleware: centralize the check once, upstream of routes.
export default function ProtectedPage() {
  return (
    <div className="max-w-md mx-auto text-center space-y-4">
      <h1 className="text-2xl font-bold">23. Middleware — protected page</h1>
      <p className="opacity-80 text-sm">
        You&apos;re seeing this because <code>middleware.ts</code> found your{" "}
        <code>demo_session</code> cookie and let the request through.
      </p>
      <form action={logout}>
        <button className="px-4 py-2 rounded-full border border-black/20 dark:border-white/20 text-sm">
          Log out
        </button>
      </form>
    </div>
  );
}
