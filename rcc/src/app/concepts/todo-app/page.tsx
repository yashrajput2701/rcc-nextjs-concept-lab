import { getTodos } from "./actions";
import TodoList from "./TodoList";

export default async function TodoAppPage() {
  const todos = await getTodos();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">28. Capstone — full CRUD Todo app</h1>
      <p className="opacity-80 text-sm max-w-md">
        Everything from this project working together: a Server Component
        fetches the initial list, Server Actions handle add/toggle/delete,
        <code> revalidatePath</code> keeps the server-rendered data fresh,
        and <code>useOptimistic</code> makes every action feel instant
        despite the (simulated) 400–600ms network delay.
      </p>
      <TodoList todos={todos} />
    </div>
  );
}
