import { NextRequest, NextResponse } from "next/server";
import { notes } from "@/lib/db";

// CONCEPT 20c: Item-level route handlers with a DYNAMIC segment [id].
// Route params work the same way here as in page.tsx — passed as a
// Promise in the second argument's `params` field.
type Ctx = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const note = notes.find((n) => n.id === id);
  if (!note) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(note);
}

export async function DELETE(_request: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) return NextResponse.json({ error: "not found" }, { status: 404 });
  const [deleted] = notes.splice(index, 1);
  return NextResponse.json(deleted);
}
