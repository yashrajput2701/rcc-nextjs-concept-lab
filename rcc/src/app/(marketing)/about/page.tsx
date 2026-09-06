export default function AboutPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">5. Route groups — (marketing)</h1>
      <p className="opacity-80">
        This page lives at{" "}
        <code>src/app/(marketing)/about/page.tsx</code> but its URL is{" "}
        <code>/about</code> — the <code>(marketing)</code> folder was
        stripped from the path because it&apos;s wrapped in parentheses. It still
        gave this page (and any siblings) the dashed-border layout you can
        see wrapping this text, defined in{" "}
        <code>app/(marketing)/layout.tsx</code>.
      </p>
    </div>
  );
}
