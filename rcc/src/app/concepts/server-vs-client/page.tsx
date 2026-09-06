import ServerInfo from "./ServerInfo";
import Counter from "./Counter";

// This page itself is a Server Component that COMPOSES a Client Component.
// This is the standard pattern: keep most of your tree as Server Components
// (zero client JS, direct data access) and carve out small, focused Client
// Components only where you need interactivity.
export default function ServerVsClientPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">12. Server vs Client Components</h1>
      <p className="opacity-80">
        Analogy: Server Components are like a chef preparing a finished dish
        in the kitchen (you only see the result); Client Components are like
        a build-your-own-taco bar (interactive, assembled in front of you /
        in the browser).
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <ServerInfo />
        <Counter />
      </div>
    </div>
  );
}
