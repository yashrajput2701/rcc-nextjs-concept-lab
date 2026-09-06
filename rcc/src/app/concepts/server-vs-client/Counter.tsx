"use client";
// CONCEPT 12b: A Client Component.
// "use client" doesn't mean "this only runs in the browser" — it means
// "this component (and everything it imports) is bundled into JS the
// browser downloads, and it can use hooks/state/event listeners/browser APIs."
// It's still SERVER-RENDERED for the first HTML paint, then "hydrated" in
// the browser so useState/onClick start working.
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
      <p className="text-sm opacity-60 mb-2">Client Component (has state)</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm"
      >
        Clicked {count} times
      </button>
    </div>
  );
}
