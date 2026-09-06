"use client";
// CONCEPT 21: Client-side API integration.
// This whole component is a Client Component that talks to OUR OWN API
// routes (/api/notes) using the browser's fetch() — the exact same pattern
// you'd use to talk to any external REST API. This is the classic
// "frontend calls backend over HTTP" approach, as opposed to Server Actions
// (concept 19) which skip the HTTP layer entirely for same-app mutations.
import { useEffect, useState } from "react";

type Note = { id: string; title: string };

export default function ClientFetchPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GET on mount — the standard "load data into a client component" pattern.
  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then(setNotes)
      .catch(() => setError("Failed to load notes"))
      .finally(() => setLoading(false));
  }, []);

  async function addNote(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const created: Note = await res.json();
    setNotes((prev) => [...prev, created]); // update local state manually —
    // unlike Server Actions + revalidatePath, nothing re-fetches for you.
    setTitle("");
  }

  async function deleteNote(id: string) {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">20–21. API routes + client fetch</h1>
      <p className="opacity-80 text-sm">
        GET on load, POST to add, DELETE to remove — all via{" "}
        <code>fetch()</code> against <code>/api/notes</code>. You own the
        loading state, the error state, and refreshing the UI after a
        mutation.
      </p>

      <form onSubmit={addNote} className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New note title"
          className="flex-1 border border-black/20 dark:border-white/20 rounded-lg px-3 py-2 bg-transparent text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm"
        >
          Add
        </button>
      </form>

      {loading && <p className="text-sm opacity-60">Loading…</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}

      <ul className="space-y-2">
        {notes.map((n) => (
          <li
            key={n.id}
            className="flex items-center justify-between rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 text-sm"
          >
            {n.title}
            <button
              onClick={() => deleteNote(n.id)}
              className="text-red-500 text-xs hover:underline"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
