"use client";

export default function ClientEnv() {
  // Reading a non-NEXT_PUBLIC_ var here would just be `undefined` in the
  // browser — Next.js only inlines variables explicitly prefixed
  // NEXT_PUBLIC_ into client bundles, at BUILD time (not runtime).
  return (
    <p className="text-sm">
      Read in a Client Component:{" "}
      <strong>{process.env.NEXT_PUBLIC_SITE_NAME ?? "(not set)"}</strong>
    </p>
  );
}
