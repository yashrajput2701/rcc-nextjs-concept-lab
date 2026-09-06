import { getMessages } from "./actions";
import DeleteButton from "./DeleteButton";
import MessageForm from "./MessageForm";

// This page is a Server Component that reads data directly (getMessages)
// and renders Client Components (MessageForm, DeleteButton) that call
// Server Actions. This is the "modern Next.js" mutation pattern: no API
// route needed for a same-app form submission.
export default async function ServerActionsPage() {
  const messages = await getMessages();

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">19. Server Actions</h1>
      <p className="opacity-80 text-sm">
        Submitting the form below calls <code>addMessage()</code> — a{" "}
        <code>&quot;use server&quot;</code> function — directly. No{" "}
        <code>/api</code> route was written for this feature.
      </p>

      <MessageForm />

      <ul className="space-y-2">
        {messages.map((m) => (
          <li
            key={m.id}
            className="flex items-center justify-between rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 text-sm"
          >
            {m.text}
            <DeleteButton id={m.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
