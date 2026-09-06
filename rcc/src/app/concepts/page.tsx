import Link from "next/link";
import { sections } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Concepts",
  description: "Index of every Next.js concept demonstrated in this project.",
};

export default function ConceptsIndex() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">All concepts</h1>
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-lg font-semibold mb-3 opacity-80">{section.title}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {section.links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="block rounded-lg border border-black/10 dark:border-white/10 px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
