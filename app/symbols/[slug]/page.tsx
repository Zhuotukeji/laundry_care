import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSymbolGuide, getSymbolSlugs, getAllSymbolGuides } from "@/content/symbols";
import Breadcrumb from "@/components/breadcrumb";
import SearchBox from "@/components/search-box";

export function generateStaticParams() {
  return getSymbolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getSymbolGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
  };
}

export default async function SymbolGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getSymbolGuide(slug);
  if (!guide) notFound();

  const allGuides = getAllSymbolGuides();
  const related = guide.relatedSlugs
    .map((s) => allGuides.find((g) => g.slug === s))
    .filter(Boolean);

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Laundry Symbols", href: "/symbols" },
            { label: guide.title },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{guide.title}</h1>
        <span className="inline-block px-3 py-1 bg-blue-50 text-[var(--color-primary)] text-sm rounded-full mb-6">
          {guide.category}
        </span>

        {/* Symbol Info */}
        <section className="mb-8 bg-white border border-[var(--color-border)] rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Symbol: {guide.symbolName}</h2>
          <p className="text-[var(--color-text-muted)] mb-4">{guide.meaning}</p>
          <h3 className="font-semibold mb-2">Recommended Action</h3>
          <p className="text-sm text-[var(--color-text-muted)]">{guide.recommendedAction}</p>
        </section>

        {/* Avoid List */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What to Avoid</h2>
          <ul className="space-y-2">
            {guide.avoidList.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                <span className="text-red-500 shrink-0">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Related Symbols */}
        {related.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Related Symbols</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {related.map((r) => r && (
                <Link
                  key={r.slug}
                  href={`/symbols/${r.slug}`}
                  className="block bg-white border border-[var(--color-border)] rounded-lg p-4 hover:shadow-md hover:border-[var(--color-primary-light)] transition-all hover:no-underline"
                >
                  <span className="text-xs px-2 py-0.5 bg-blue-50 text-[var(--color-primary)] rounded">{r.category}</span>
                  <h3 className="font-medium text-sm mt-2 mb-1">{r.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] line-clamp-2">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Search */}
        <section className="bg-blue-50 rounded-xl p-6 mt-8">
          <h2 className="text-lg font-semibold mb-3 text-center">
            Looking for another symbol?
          </h2>
          <SearchBox placeholder="Search laundry symbols..." className="max-w-lg mx-auto" />
        </section>
      </div>
    </main>
  );
}
