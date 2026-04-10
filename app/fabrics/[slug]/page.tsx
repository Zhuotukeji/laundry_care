import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getFabricGuide, getFabricSlugs, getAllFabricGuides } from "@/content/fabrics";
import Breadcrumb from "@/components/breadcrumb";
import SearchBox from "@/components/search-box";

export function generateStaticParams() {
  return getFabricSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getFabricGuide(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
  };
}

export default function FabricGuidePage({ params }: { params: { slug: string } }) {
  const guide = getFabricGuide(params.slug);
  if (!guide) notFound();

  const allGuides = getAllFabricGuides();
  const related = guide.relatedSlugs
    .map((s) => allGuides.find((g) => g.slug === s))
    .filter(Boolean);

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Fabric Care", href: "/fabrics" },
            { label: guide.title },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-8">{guide.overview}</p>

        {/* Care Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-[var(--color-border)] rounded-lg p-5">
            <h2 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-blue-500">🌡️</span> Wash Temperature
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">{guide.washTemperature}</p>
          </div>
          <div className="bg-white border border-[var(--color-border)] rounded-lg p-5">
            <h2 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-blue-500">☀️</span> Drying
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">{guide.drying}</p>
          </div>
          <div className="bg-white border border-[var(--color-border)] rounded-lg p-5">
            <h2 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-blue-500">🔥</span> Ironing
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">{guide.ironing}</p>
          </div>
        </div>

        {/* Common Mistakes */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Common Mistakes to Avoid</h2>
          <ul className="space-y-2">
            {guide.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                <span className="text-red-500 shrink-0">✗</span>
                {m}
              </li>
            ))}
          </ul>
        </section>

        {/* Related Fabrics */}
        {related.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Related Fabric Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {related.map((r) => r && (
                <Link
                  key={r.slug}
                  href={`/fabrics/${r.slug}`}
                  className="block bg-white border border-[var(--color-border)] rounded-lg p-4 hover:shadow-md hover:border-[var(--color-primary-light)] transition-all hover:no-underline"
                >
                  <h3 className="font-medium text-sm mb-1">{r.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] line-clamp-2">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Search */}
        <section className="bg-blue-50 rounded-xl p-6 mt-8">
          <h2 className="text-lg font-semibold mb-3 text-center">
            Looking for another fabric?
          </h2>
          <SearchBox placeholder="Search fabric care guides..." className="max-w-lg mx-auto" />
        </section>
      </div>
    </main>
  );
}
