import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStainGuide, getStainSlugs, getAllStainGuides } from "@/content/stains";
import Breadcrumb from "@/components/breadcrumb";
import SearchBox from "@/components/search-box";

export function generateStaticParams() {
  return getStainSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getStainGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
  };
}

export default async function StainGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getStainGuide(slug);
  if (!guide) notFound();

  const allGuides = getAllStainGuides();
  const related = guide.relatedSlugs
    .map((s) => allGuides.find((g) => g.slug === s))
    .filter(Boolean);

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Stain Removal", href: "/stains" },
            { label: guide.title },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-8">{guide.overview}</p>

        {/* Affected Materials */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Affected Materials</h2>
          <div className="flex flex-wrap gap-2">
            {guide.affectedMaterials.map((m) => (
              <span key={m} className="px-3 py-1 bg-blue-50 text-[var(--color-primary)] text-sm rounded-full">
                {m}
              </span>
            ))}
          </div>
        </section>

        {/* Step-by-Step */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Step-by-Step Removal</h2>
          <ol className="space-y-4">
            {guide.steps.map((s) => (
              <li key={s.step} className="flex gap-4 bg-white rounded-lg border border-[var(--color-border)] p-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{s.instruction}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What Not to Do */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What Not to Do</h2>
          <ul className="space-y-2">
            {guide.doNot.map((d, i) => (
              <li key={i} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                <span className="text-red-500 shrink-0">✗</span>
                {d}
              </li>
            ))}
          </ul>
        </section>

        {/* Related Stains */}
        {related.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Related Stain Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {related.map((r) => r && (
                <Link
                  key={r.slug}
                  href={`/stains/${r.slug}`}
                  className="block bg-white border border-[var(--color-border)] rounded-lg p-4 hover:shadow-md hover:border-[var(--color-primary-light)] transition-all hover:no-underline"
                >
                  <h3 className="font-medium text-sm mb-1">{r.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] line-clamp-2">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Search Box */}
        <section className="bg-blue-50 rounded-xl p-6 mt-8">
          <h2 className="text-lg font-semibold mb-3 text-center">
            Looking for another stain?
          </h2>
          <SearchBox placeholder="Search stain removal guides..." className="max-w-lg mx-auto" />
        </section>
      </div>
    </main>
  );
}
