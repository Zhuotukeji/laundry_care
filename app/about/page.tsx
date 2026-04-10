import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Laundry Care Guide — our mission, editorial approach, and commitment to practical laundry advice.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Laundry Care Guide</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-[var(--color-text-muted)]">
          <p>
            Laundry Care Guide is a free, practical resource designed to help
            people take better care of their clothes. Whether you are dealing
            with a stubborn stain, trying to decode a care label symbol, or
            unsure how to wash a delicate fabric, our guides provide clear,
            step-by-step instructions you can trust.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">Our Mission</h2>
          <p>
            We believe that good laundry care should not require guesswork.
            Our mission is to provide straightforward, well-researched laundry
            advice that helps you extend the life of your clothes, avoid common
            mistakes, and save money on replacements.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">Editorial Approach</h2>
          <p>
            Every guide on this site is researched using established textile
            care best practices. We focus on practical, actionable advice rather
            than theory. Our content is written in plain English and structured
            so you can find the answer you need quickly.
          </p>
          <p>
            We do not accept payment for product recommendations. When we
            mention specific cleaning products or methods, it is based on their
            effectiveness, not commercial relationships.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">What We Cover</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Stain Removal</strong> — Step-by-step guides for removing common household stains from various fabrics.</li>
            <li><strong>Laundry Symbols</strong> — Clear explanations of every care label symbol you will encounter.</li>
            <li><strong>Fabric Care</strong> — How to wash, dry, and iron different fabric types safely.</li>
            <li><strong>FAQ</strong> — Quick answers to the most common laundry care questions.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">Contact</h2>
          <p>
            Have a question or suggestion? Visit our{" "}
            <a href="/contact" className="text-[var(--color-primary)]">Contact page</a>{" "}
            to get in touch.
          </p>
        </div>
      </div>
    </main>
  );
}
