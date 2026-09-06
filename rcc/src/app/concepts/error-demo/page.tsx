"use client";

import { useState } from "react";

// CONCEPT 10 (continued): what triggers error.tsx.
// Throwing during RENDER (not inside an event handler) is what error.tsx
// catches. Throwing inside a plain onClick handler is normal JS — React/
// Next.js won't route that to error.tsx.
export default function ErrorDemoPage() {
  const [boom, setBoom] = useState(false);

  if (boom) {
    throw new Error("Deliberate render-time error, thrown to demonstrate error.tsx");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">10. error.tsx boundaries</h1>
      <p className="opacity-80">
        Click the button to throw an error DURING RENDER. The nearest{" "}
        <code>error.tsx</code> (in this same folder) will catch it and
        replace this UI, with a &quot;Try again&quot; button that calls{" "}
        <code>reset()</code> to attempt re-rendering the segment.
      </p>
      <button
        onClick={() => setBoom(true)}
        className="px-4 py-2 rounded-full bg-red-600 text-white text-sm"
      >
        💥 Throw a render error
      </button>
    </div>
  );
}
