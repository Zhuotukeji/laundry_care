import type { Metadata } from "next";
import { getAllFabricGuides } from "@/content/fabrics";
import GuideCard from "@/components/guide-card";
import SearchBox from "@/components/search-box";

export const metadata: Metadata = {
  title: "Fabric Care Guides",
  description:
    "How to wash, dry, and iron different fabrics safely. Guides for cotton, silk, wool, polyester, linen, and more.",
};

export default function FabricsPage() {
  const guides = getAllFabricGuides();

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-blue-50 to-[var(--color-bg)] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fabric Care Guides
          </h1>
          <p className="text-[var(--color-text-muted)] mb-6">
            Learn the best way to wash, dry, and iron every type of fabric.
            Avoid common mistakes that damage your clothes.
          </p>
          <SearchBox
            placeholder="Search fabric care tips..."
            className="max-w-xl mx-auto"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <GuideCard
              key={guide.slug}
              href={`/fabrics/${guide.slug}`}
              title={guide.title}
              description={guide.description}
              tag="Fabric"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
