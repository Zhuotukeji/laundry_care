"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import SearchBox from "@/components/search-box";
import { search, SearchResult } from "@/lib/search";

const typeLabels: Record<string, string> = {
  stain: "Stain Removal",
  symbol: "Laundry Symbol",
  fabric: "Fabric Care",
  faq: "FAQ",
};

const typeColors: Record<string, string> = {
  stain: "bg-orange-50 text-orange-700",
  symbol: "bg-purple-50 text-purple-700",
  fabric: "bg-green-50 text-green-700",
  faq: "bg-blue-50 text-blue-700",
};

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = query ? search(query) : [];

  return (
    <>
      {/* Search bar with current query */}
      <section className="bg-gradient-to-b from-blue-50 to-[var(--color-bg)] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Search</h1>
          <p className="text-[var(--color-text-muted)] mb-6">
            Search our library of laundry care guides.
          </p>
          <SearchBox
            defaultValue={query}
            className="max-w-xl mx-auto"
          />
        </div>
      </section>

      {/* Results */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {!query && (
          <p className="text-center text-[var(--color-text-muted)]">
            Enter a search term above to find guides.
          </p>
        )}

        {query && results.length === 0 && (
          <div className="text-center">
            <p className="text-lg font-medium mb-2">
              No results found for &quot;{query}&quot;
            </p>
            <p className="text-[var(--color-text-muted)] mb-6">
              Try a different search term, or browse our guides below.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/stains" className="px-4 py-2 bg-white border border-[var(--color-border)] rounded-lg text-sm hover:border-[var(--color-primary-light)] hover:no-underline">
                Browse Stain Guides
              </Link>
              <Link href="/symbols" className="px-4 py-2 bg-white border border-[var(--color-border)] rounded-lg text-sm hover:border-[var(--color-primary-light)] hover:no-underline">
                Browse Symbol Guides
              </Link>
              <Link href="/fabrics" className="px-4 py-2 bg-white border border-[var(--color-border)] rounded-lg text-sm hover:border-[var(--color-primary-light)] hover:no-underline">
                Browse Fabric Guides
              </Link>
            </div>
          </div>
        )}

        {query && results.length > 0 && (
          <>
            <p className="text-sm text-[var(--color-text-muted)] mb-6">
              Found {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
            </p>
            <div className="space-y-3">
              {results.map((result: SearchResult, i: number) => (
                <Link
                  key={i}
                  href={result.url}
                  className="block bg-white border border-[var(--color-border)] rounded-lg p-5 hover:shadow-md hover:border-[var(--color-primary-light)] transition-all hover:no-underline group"
                >
                  <div className="flex items-start gap-3">
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded shrink-0 mt-0.5 ${typeColors[result.type]}`}>
                      {typeLabels[result.type]}
                    </span>
                    <div>
                      <h2 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] mb-1">
                        {result.title}
                      </h2>
                      <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default function SearchPage() {
  return (
    <main className="flex-1">
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center py-20">
            <p className="text-[var(--color-text-muted)]">Loading...</p>
          </div>
        }
      >
        <SearchResults />
      </Suspense>
    </main>
  );
}
