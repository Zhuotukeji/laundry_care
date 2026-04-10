import type { Metadata } from "next";
import { getAllFaqItems } from "@/content/faqs";
import SearchBox from "@/components/search-box";
import FaqList from "@/components/faq-list";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common laundry care questions about stain removal, washing, drying, ironing, and fabric care.",
};

export default function FaqPage() {
  const items = getAllFaqItems();
  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-blue-50 to-[var(--color-bg)] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[var(--color-text-muted)] mb-6">
            Quick answers to the most common laundry care questions.
          </p>
          <SearchBox
            placeholder="Search FAQs..."
            className="max-w-xl mx-auto"
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        {categories.map((cat) => (
          <div key={cat} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{cat}</h2>
            <FaqList items={items.filter((i) => i.category === cat)} />
          </div>
        ))}
      </section>
    </main>
  );
}
