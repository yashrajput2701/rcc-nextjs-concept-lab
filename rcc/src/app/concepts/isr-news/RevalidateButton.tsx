"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RevalidateButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function handleClick() {
    setBusy(true);
    await fetch("/api/revalidate?path=/concepts/isr-news", { method: "POST" });
    router.refresh(); // re-fetches this Server Component's data without a
    // full page reload — pairs with revalidatePath on the server.
    setBusy(false);
  }

  return (
    <button
      onClick={handleClick}
      disabled={busy}
      className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm disabled:opacity-50"
    >
      {busy ? "Revalidating…" : "27. Force revalidate now"}
    </button>
  );
}
