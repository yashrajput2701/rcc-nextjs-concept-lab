import ClientEnv from "./ClientEnv";

// CONCEPT 26: Environment variables.
// .env.local (git-ignored by default) holds two vars here:
//   SECRET_API_KEY        — server-only, safe for real secrets
//   NEXT_PUBLIC_SITE_NAME — inlined into client JS at build time
export default function EnvVarsPage() {
  const secret = process.env.SECRET_API_KEY;
  const publicVar = process.env.NEXT_PUBLIC_SITE_NAME;

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">26. Environment variables</h1>
      <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 text-sm space-y-2">
        <p>
          Read in this Server Component — <code>SECRET_API_KEY</code>:{" "}
          <strong>{secret ? `${secret.slice(0, 6)}…` : "(not set)"}</strong>
        </p>
        <p>
          Read in this Server Component — <code>NEXT_PUBLIC_SITE_NAME</code>:{" "}
          <strong>{publicVar}</strong>
        </p>
        <ClientEnv />
      </div>
      <p className="text-xs opacity-60">
        Try it: open devtools → Sources and search the client JS bundle for
        &quot;super-secret&quot; — it won&apos;t be there. Search for &quot;rcc Concept Lab&quot; —
        it will, because of the <code>NEXT_PUBLIC_</code> prefix.
      </p>
    </div>
  );
}
