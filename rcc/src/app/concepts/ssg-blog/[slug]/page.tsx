import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

// CONCEPT 16: generateStaticParams — Static Site Generation for dynamic routes.
// Next.js calls this ONCE at build time. Whatever array of param objects you
// return gets pre-rendered to static HTML files during `next build` — so
// EVERY one of these blog posts becomes a plain HTML file on disk, served
// instantly with zero server-side work per visitor.
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Any slug NOT returned above, visited in production, triggers on-demand
// generation once and then caches — unless you set this to false, in which
// case unknown slugs 404 immediately.
export const dynamicParams = true;

export default async function SsgPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="space-y-3 max-w-2xl">
      <p className="text-xs uppercase tracking-wide text-green-600">
        Statically generated at build time
      </p>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="opacity-80">{post.body}</p>
    </article>
  );
}
