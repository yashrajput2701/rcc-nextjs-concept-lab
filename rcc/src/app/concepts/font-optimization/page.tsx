export default function FontOptimizationPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-geist-sans)" }}>
        15. next/font
      </h1>
      <p className="opacity-80">
        You&apos;re already looking at it — the whole site&apos;s typeface is loaded
        via <code>next/font/google</code> in <code>src/app/layout.tsx</code>:
      </p>
      <pre className="bg-black/5 dark:bg-white/10 rounded-lg p-4 text-xs overflow-x-auto">
{`import { Geist } from "next/font/google";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// then: <body className={geistSans.variable}>`}
      </pre>
      <p className="opacity-80 text-sm">
        The font file is downloaded and self-hosted at BUILD time — not
        fetched from Google&apos;s CDN at runtime — so there&apos;s no extra DNS
        lookup, no render-blocking external request, and no &quot;flash of
        unstyled text&quot;.
      </p>
    </div>
  );
}
