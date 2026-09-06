import { cookies, headers } from "next/headers";
import { setThemeCookie } from "./actions";

// CONCEPT 24b: Reading cookies() and headers() in a Server Component.
// Both are async functions (in Next.js 15+) returning read-only accessors —
// you can READ them anywhere on the server, but can only WRITE cookies from
// a Server Action or Route Handler (not while rendering a page), because a
// page's HTML might be cached/reused and shouldn't have side effects.
export default async function CookiesDemoPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const theme = cookieStore.get("demo_theme")?.value ?? "not set";
  const userAgent = headerStore.get("user-agent") ?? "unknown";

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">24. Cookies & headers</h1>
      <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 text-sm space-y-1">
        <p>
          <strong>demo_theme cookie:</strong> {theme}
        </p>
        <p className="truncate">
          <strong>User-Agent header:</strong> {userAgent}
        </p>
      </div>
      <form action={setThemeCookie.bind(null, "dark")}>
        <button className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm">
          Set demo_theme=dark cookie
        </button>
      </form>
      <p className="text-xs opacity-50">
        Click the button, then reload this page — the cookie value updates
        because it was written by a Server Action (the only place cookies
        can be SET) and read here on the next render.
      </p>
    </div>
  );
}
