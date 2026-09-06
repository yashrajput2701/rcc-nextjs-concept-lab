// CONCEPT 5: Route groups — (marketing).
// Wrapping a folder name in parentheses opts it OUT of the URL path.
// This layout applies to everything under app/(marketing)/*, but the
// segment "(marketing)" itself never appears in the URL — /about, not
// /marketing/about.
//
// Why bother? To give a SUBSET of routes their own layout (e.g. a marketing
// site header/footer that's different from your app's dashboard chrome)
// without changing any URLs, and to organize files by feature without
// affecting routing.
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-dashed border-blue-400/40 rounded-xl p-4">
      <p className="text-xs uppercase tracking-wide text-blue-500 mb-3">
        Route group layout: (marketing)
      </p>
      {children}
    </div>
  );
}
