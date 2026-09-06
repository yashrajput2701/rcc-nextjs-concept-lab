"use server";
// CONCEPT 19: Server Actions.
// The "use server" directive at the top of this file marks EVERY exported
// function as a Server Action: Next.js compiles each one into a secure
// HTTP endpoint automatically and generates a typed client-side stub, so a
// Client Component can call addMessage(formData) as if it were a normal
// function — no fetch(), no API route, no manual serialization.
import { revalidatePath } from "next/cache";

// Reuse the same in-memory store style as the API routes, just to keep the
// demo self-contained. In a real app this would be a database write.
const messages: { id: string; text: string }[] = [
  { id: "1", text: "First message — added via a Server Action." },
];

export async function getMessages() {
  return messages;
}

export async function addMessage(formData: FormData) {
  const text = formData.get("text");
  if (typeof text !== "string" || !text.trim()) return;

  // Simulate real network/DB latency so the pending state is visible.
  await new Promise((r) => setTimeout(r, 500));

  messages.push({ id: String(messages.length + 1), text: text.trim() });

  // CONCEPT 19b: revalidatePath.
  // This tells Next.js "the cached data for this route is now stale" —
  // it re-runs the Server Component tree for that path so the new message
  // shows up, WITHOUT you writing any client-side re-fetch logic.
  revalidatePath("/concepts/server-actions");
}

export async function deleteMessage(id: string) {
  const index = messages.findIndex((m) => m.id === id);
  if (index !== -1) messages.splice(index, 1);
  revalidatePath("/concepts/server-actions");
}
