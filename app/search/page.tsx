import type { Metadata } from "next";
import SearchBox from "@/components/search-box";

export const metadata: Metadata = {
  title: "Search",
  description: "Search laundry care guides for stain removal, laundry symbols, and fabric care tips.",
};

export default function SearchPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-blue-50 to-[var(--color-bg)] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Search</h1>
          <p className="text-[var(--color-text-muted)] mb-6">
            Search our library of laundry care guides.
          </p>
          <SearchBox className="max-w-xl mx-auto" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-center text-[var(--color-text-muted)]">
          Enter a search term above to find guides.
        </p>
      </section>
    </main>
  );
}
