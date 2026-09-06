import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function SsgBlogIndex() {
  const posts = await getAllPosts();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">16. SSG — generateStaticParams</h1>
      <p className="opacity-80">
        Every post below was rendered to static HTML at{" "}
        <code>npm run build</code> time — visiting them is just a static
        file, no server work per-request. Open one, then run{" "}
        <code>npm run build</code> and watch the terminal list each slug as a
        pre-rendered (○ Static) route.
      </p>
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/concepts/ssg-blog/${p.slug}`}
              className="underline"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
