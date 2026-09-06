import { NextRequest, NextResponse } from "next/server";

// CONCEPT 20a: Route Handlers — the App Router's replacement for
// pages/api/*.ts. A file named route.ts inside app/ exports one async
// function PER HTTP METHOD (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS).
// This file's URL is /api/hello (the "api" folder is just a normal folder —
// nothing magic about the name, unlike the old Pages Router).
export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name") ?? "world";
  return NextResponse.json({ message: `Hello, ${name}!`, method: "GET" });
}

export async function POST(request: NextRequest) {
  // NextRequest extends the standard Web Request — .json() works exactly
  // like it does in the browser's fetch API.
  const body = await request.json().catch(() => null);
  return NextResponse.json(
    { message: "Received your POST body", youSent: body },
    { status: 201 }
  );
}
