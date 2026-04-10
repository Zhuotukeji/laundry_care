import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-20">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
          Try searching for what you need, or browse our guides.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] hover:no-underline transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/search"
            className="px-5 py-2.5 bg-white border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary-light)] hover:no-underline transition-colors"
          >
            Search Guides
          </Link>
        </div>
      </div>
    </main>
  );
}
