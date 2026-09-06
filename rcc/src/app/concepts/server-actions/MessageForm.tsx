"use client";
// CONCEPT 19c: useActionState (React 19) for pending/error state on a
// Server Action-backed form, without manually wiring up fetch + useState.
import { useActionState } from "react";
import { addMessage } from "./actions";

async function submitAction(_prevState: unknown, formData: FormData) {
  await addMessage(formData);
  return { success: true };
}

export default function MessageForm() {
  const [, formAction, isPending] = useActionState(submitAction, null);

  return (
    <form action={formAction} className="flex gap-2">
      <input
        name="text"
        placeholder="Write a message…"
        required
        className="flex-1 border border-black/20 dark:border-white/20 rounded-lg px-3 py-2 bg-transparent text-sm"
      />
      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm disabled:opacity-50"
      >
        {isPending ? "Posting…" : "Post"}
      </button>
    </form>
  );
}
