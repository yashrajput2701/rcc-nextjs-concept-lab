"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// CONCEPT 24a: Setting a cookie from a Server Action, via next/headers.
export async function login(formData: FormData) {
  const destination = (formData.get("from") as string) || "/concepts/protected";

  const cookieStore = await cookies();
  cookieStore.set("demo_session", "demo-user", {
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    path: "/",
  });

  redirect(destination);
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("demo_session");
  redirect("/concepts/protected");
}
