"use client";
// A Server Action can also be called imperatively (not just as a form
// action) from a Client Component — here, directly inside an onClick.
import { deleteMessage } from "./actions";
import { useTransition } from "react";

export default function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => deleteMessage(id))}
      className="text-red-500 text-xs hover:underline disabled:opacity-40"
    >
      {isPending ? "deleting…" : "delete"}
    </button>
  );
}
