import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// CONCEPT 27: On-demand revalidation.
// Instead of waiting for the `revalidate` timer (concept 18), you can force
// a route's cache to invalidate immediately — the moment your data actually
// changes (e.g. a CMS webhook fires, an admin publishes an article). This is
// what powers "publish now, see it live in 2 seconds" on most modern sites.
export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") ?? "/concepts/isr-news";
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, path, now: Date.now() });
}
