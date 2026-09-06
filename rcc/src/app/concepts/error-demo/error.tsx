"use client"; // error.tsx MUST be a Client Component — React needs to catch
// the render error on the client and give you a way to retry.

import { useEffect } from "react";

// CONCEPT 10: error.tsx boundaries.
// Any uncaught error thrown while rendering page.tsx (or its children) in
// this folder is caught by the NEAREST error.tsx, exactly like a React
// error boundary — but Next.js wires it up for you automatically per route
// segment. Sibling routes are unaffected; only this subtree shows the error UI.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In a real app: send `error` to an error-reporting service here.
    console.error(error);
  }, [error]);

  return (
    <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-6 space-y-3">
      <h2 className="font-semibold text-red-600 dark:text-red-400">
        Something broke in this section.
      </h2>
      <p className="text-sm opacity-70">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm"
      >
        Try again
      </button>
    </div>
  );
}
