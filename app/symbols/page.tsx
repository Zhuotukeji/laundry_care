import type { Metadata } from "next";
import { getAllSymbolGuides } from "@/content/symbols";
import GuideCard from "@/components/guide-card";
import SearchBox from "@/components/search-box";

export const metadata: Metadata = {
  title: "Laundry Symbol Guide",
  description:
    "Learn what every laundry care symbol means — washing, drying, ironing, bleaching, and dry cleaning symbols explained.",
};

export default function SymbolsPage() {
  const guides = getAllSymbolGuides();
  const categories = [...new Set(guides.map((g) => g.category))];

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
        {categories.map((cat) => (
          <div key={cat} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guides
                .filter((g) => g.category === cat)
                .map((guide) => (
                  <GuideCard
                    key={guide.slug}
                    href={`/symbols/${guide.slug}`}
                    title={guide.title}
                    description={guide.description}
                    tag={guide.category}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
