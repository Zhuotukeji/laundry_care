import type { Metadata } from "next";
import SearchBox from "@/components/search-box";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common laundry care questions about stain removal, washing, drying, ironing, and fabric care.",
};

export default function FaqPage() {
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
        <p className="text-center text-[var(--color-text-muted)]">
          FAQ content is being loaded...
        </p>
      </section>
    </main>
  );
}
