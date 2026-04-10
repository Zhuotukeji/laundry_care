import type { Metadata } from "next";
import SearchBox from "@/components/search-box";

export const metadata: Metadata = {
  title: "Stain Removal Guides",
  description:
    "Step-by-step stain removal guides for common household stains including oil, wine, coffee, grass, ink, and more.",
};

export default function StainsPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-blue-50 to-[var(--color-bg)] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Stain Removal Guides
          </h1>
          <p className="text-[var(--color-text-muted)] mb-6">
            Find the right method to remove any stain. Each guide covers the
            best approach for different fabric types and explains what to avoid.
          </p>
          <SearchBox
            placeholder="Search stain removal tips..."
            className="max-w-xl mx-auto"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-center text-[var(--color-text-muted)]">
          Stain removal guides are being loaded...
        </p>
      </section>
    </main>
  );
}
