// A tiny in-memory "database" so every API-route / server-action demo has
// real CRUD to perform without needing a real database or ORM. State lives
// in this module's memory for as long as the Next.js server process is
// running (resets on restart) — swap these arrays + functions for real
// Prisma/Drizzle/SQL calls in a real app; every route handler and server
// action in this project would keep working unchanged.

export type Note = { id: string; title: string };
export type Todo = { id: string; text: string; done: boolean };

export const notes: Note[] = [
  { id: "1", title: "Notes come from /api/notes (a route handler)" },
  { id: "2", title: "Fetched client-side with useEffect + fetch()" },
];

export const todos: Todo[] = [
  { id: "1", text: "Learn Server Actions", done: true },
  { id: "2", text: "Build the capstone Todo app", done: false },
];

export function nextId(list: { id: string }[]): string {
  return String(Math.max(0, ...list.map((i) => Number(i.id))) + 1);
}
