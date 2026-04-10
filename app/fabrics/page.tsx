import type { Metadata } from "next";
import SearchBox from "@/components/search-box";

export const metadata: Metadata = {
  title: "Fabric Care Guides",
  description:
    "How to wash, dry, and iron different fabrics safely. Guides for cotton, silk, wool, polyester, linen, and more.",
};

export default function FabricsPage() {
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
        <p className="text-center text-[var(--color-text-muted)]">
          Fabric care guides are being loaded...
        </p>
      </section>
    </main>
  );
}
