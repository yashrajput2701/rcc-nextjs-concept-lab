import { NextRequest, NextResponse } from "next/server";
import { notes, nextId } from "@/lib/db";

// CONCEPT 20b: Collection-level route handlers — GET (list) + POST (create).
export async function GET() {
  return NextResponse.json(notes);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body?.title || typeof body.title !== "string") {
    return NextResponse.json(
      { error: "title is required" },
      { status: 400 }
    );
  }
  const note = { id: nextId(notes), title: body.title };
  notes.push(note);
  return NextResponse.json(note, { status: 201 });
}
