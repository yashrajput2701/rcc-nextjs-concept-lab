"use client";
// CONCEPT 28b: useOptimistic.
// Server Actions have real network latency (we even simulated 400-600ms).
// Without optimistic UI, the user clicks "add"/"toggle" and stares at
// nothing changing for half a second. useOptimistic lets you show the
// EXPECTED end result immediately, then reconciles with the real server
// response once it arrives (or rolls back automatically on error).
import { useOptimistic, useRef, useTransition } from "react";
import type { Todo } from "@/lib/db";
import { addTodo, toggleTodo, deleteTodo } from "./actions";

type OptimisticAction =
  | { type: "add"; todo: Todo }
  | { type: "toggle"; id: string }
  | { type: "delete"; id: string };

export default function TodoList({ todos }: { todos: Todo[] }) {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticTodos, applyOptimistic] = useOptimistic(
    todos,
    (state: Todo[], action: OptimisticAction) => {
      switch (action.type) {
        case "add":
          return [...state, action.todo];
        case "toggle":
          return state.map((t) =>
            t.id === action.id ? { ...t, done: !t.done } : t
          );
        case "delete":
          return state.filter((t) => t.id !== action.id);
      }
    }
  );

  function handleAdd(formData: FormData) {
    const text = formData.get("text");
    if (typeof text !== "string" || !text.trim()) return;
    startTransition(() => {
      applyOptimistic({
        type: "add",
        todo: { id: `temp-${Date.now()}`, text, done: false },
      });
    });
    formRef.current?.reset();
  }

  return (
    <div className="space-y-4 max-w-md">
      <form
        ref={formRef}
        action={async (formData) => {
          handleAdd(formData);
          await addTodo(formData);
        }}
        className="flex gap-2"
      >
        <input
          name="text"
          placeholder="New todo…"
          required
          className="flex-1 border border-black/20 dark:border-white/20 rounded-lg px-3 py-2 bg-transparent text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {optimisticTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-3 rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 text-sm"
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => {
                startTransition(() => {
                  applyOptimistic({ type: "toggle", id: todo.id });
                });
                toggleTodo(todo.id);
              }}
            />
            <span className={`flex-1 ${todo.done ? "line-through opacity-50" : ""}`}>
              {todo.text}
            </span>
            <button
              onClick={() => {
                startTransition(() => {
                  applyOptimistic({ type: "delete", id: todo.id });
                });
                deleteTodo(todo.id);
              }}
              className="text-red-500 text-xs hover:underline"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      {isPending && (
        <p className="text-xs opacity-50">Syncing with server…</p>
      )}
    </div>
  );
}
