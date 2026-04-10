import type { Metadata } from "next";
import SearchBox from "@/components/search-box";

export const metadata: Metadata = {
  title: "Laundry Symbol Guide",
  description:
    "Learn what every laundry care symbol means — washing, drying, ironing, bleaching, and dry cleaning symbols explained.",
};

export default function SymbolsPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-blue-50 to-[var(--color-bg)] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Laundry Symbol Guide
          </h1>
          <p className="text-[var(--color-text-muted)] mb-6">
            Decode every symbol on your clothing care labels. Understand
            washing, drying, ironing, bleaching, and professional care
            instructions at a glance.
          </p>
          <SearchBox
            placeholder="Search laundry symbols..."
            className="max-w-xl mx-auto"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-center text-[var(--color-text-muted)]">
          Laundry symbol guides are being loaded...
        </p>
      </section>
    </main>
  );
}
