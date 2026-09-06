"use server";
import { revalidatePath } from "next/cache";
import { todos, nextId, type Todo } from "@/lib/db";

// CONCEPT 28: The capstone — combines Server Actions, optimistic UI, and
// revalidation into one real feature: a full CRUD Todo list.
export async function getTodos(): Promise<Todo[]> {
  return todos;
}

export async function addTodo(formData: FormData) {
  const text = formData.get("text");
  if (typeof text !== "string" || !text.trim()) return;
  await new Promise((r) => setTimeout(r, 600)); // simulate DB latency
  todos.push({ id: nextId(todos), text: text.trim(), done: false });
  revalidatePath("/concepts/todo-app");
}

export async function toggleTodo(id: string) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.done = !todo.done;
  await new Promise((r) => setTimeout(r, 400));
  revalidatePath("/concepts/todo-app");
}

export async function deleteTodo(id: string) {
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) todos.splice(index, 1);
  await new Promise((r) => setTimeout(r, 400));
  revalidatePath("/concepts/todo-app");
}
