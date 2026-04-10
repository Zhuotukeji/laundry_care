import Link from "next/link";
import SearchBox from "@/components/search-box";
import GuideCard from "@/components/guide-card";

const entryPoints = [
  {
    href: "/stains",
    title: "Stain Removal",
    description: "Step-by-step guides for removing common stains from your clothes and fabrics.",
    icon: "🧴",
  },
  {
    href: "/symbols",
    title: "Laundry Symbols",
    description: "Learn what every laundry care symbol on your clothing labels means.",
    icon: "🏷️",
  },
  {
    href: "/fabrics",
    title: "Fabric Care",
    description: "How to wash, dry, and iron different fabrics without damaging them.",
    icon: "👕",
  },
];

const featuredGuides = [
  { href: "/stains/oil", title: "How to Remove Oil Stains", description: "Get cooking oil and grease out of any fabric with common household items.", tag: "Stain" },
  { href: "/stains/red-wine", title: "Red Wine Stain Removal", description: "Act fast and use the right method to save your favorite garments.", tag: "Stain" },
  { href: "/symbols/tumble-dry", title: "Tumble Dry Symbols Explained", description: "Understand the dots, circles, and lines on your dryer care labels.", tag: "Symbol" },
  { href: "/fabrics/silk", title: "How to Care for Silk", description: "Gentle washing, drying, and ironing tips to keep silk looking luxurious.", tag: "Fabric" },
  { href: "/stains/coffee", title: "Coffee Stain Removal", description: "Quick tips to lift fresh and set-in coffee stains from clothing.", tag: "Stain" },
  { href: "/symbols/wash-temperature", title: "Wash Temperature Symbols", description: "Decode the numbers and dots that tell you how hot to wash.", tag: "Symbol" },
  { href: "/fabrics/cotton", title: "Cotton Care Guide", description: "The most common fabric deserves proper care — here is how.", tag: "Fabric" },
  { href: "/stains/grass", title: "Grass Stain Removal", description: "Tackle green grass stains on jeans, uniforms, and sportswear.", tag: "Stain" },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-[var(--color-bg)] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Your Complete Laundry Care Resource
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8">
            Practical guides for stain removal, laundry symbols, and fabric
            care — so every wash turns out right.
          </p>
          <SearchBox size="lg" className="max-w-2xl mx-auto" />
        </div>
      </section>

      {/* Entry Points */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          What do you need help with?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {entryPoints.map((ep) => (
            <Link
              key={ep.href}
              href={ep.href}
              className="flex flex-col items-center text-center bg-white rounded-xl border border-[var(--color-border)] p-8 hover:shadow-lg hover:border-[var(--color-primary-light)] transition-all hover:no-underline group"
            >
              <span className="text-4xl mb-4">{ep.icon}</span>
              <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] mb-2">
                {ep.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                {ep.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Popular Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.href} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-xl font-bold mb-3">
          Trusted Laundry Advice
        </h2>
        <p className="text-[var(--color-text-muted)] mb-6 max-w-2xl mx-auto">
          Every guide on this site is researched and reviewed for accuracy. We
          provide straightforward laundry care advice so you can keep your
          clothes looking their best — no gimmicks, no fluff.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/about" className="text-[var(--color-primary)]">About Us</Link>
          <span className="text-[var(--color-border)]">|</span>
          <Link href="/contact" className="text-[var(--color-primary)]">Contact</Link>
          <span className="text-[var(--color-border)]">|</span>
          <Link href="/privacy-policy" className="text-[var(--color-primary)]">Privacy Policy</Link>
          <span className="text-[var(--color-border)]">|</span>
          <Link href="/disclaimer" className="text-[var(--color-primary)]">Disclaimer</Link>
        </div>
      </section>
    </main>
  );
}
