import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

// ---- CONCEPT 15: next/font ----
// next/font downloads Google/local fonts at BUILD time and self-hosts them.
// No request ever goes to Google at runtime, so there's no layout shift and
// no external network waterfall for your users. Think of it like a chef who
// pre-buys and preps every ingredient before the restaurant opens, instead of
// running to the store mid-order.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---- CONCEPT 13a: Static Metadata ----
// Anything exported as `metadata` from a layout or page is read by Next.js
// and injected into <head> automatically. You never touch <head> yourself.
export const metadata: Metadata = {
  title: {
    default: "rcc — Next.js Concept Lab",
    template: "%s | rcc",
  },
  description:
    "A hands-on Next.js 16 (App Router) project demonstrating every major concept: routing, layouts, server/client components, API routes, server actions, caching, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`}>
        <Nav />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="max-w-6xl mx-auto px-4 py-10 text-xs opacity-50">
          Built to study Next.js 16 (App Router) — every folder under{" "}
          <code>src/app/concepts</code> is one concept, with comments explaining
          the &quot;why&quot;, not just the &quot;how&quot;.
        </footer>
      </body>
    </html>
  );
}
