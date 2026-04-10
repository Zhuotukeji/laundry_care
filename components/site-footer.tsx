import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-[var(--color-primary)] mb-2">
              Laundry Care Guide
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              Practical laundry advice for everyday fabrics. Learn how to remove
              stains, decode laundry symbols, and care for your clothes the right
              way.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/stains">Stain Removal Guides</Link></li>
              <li><Link href="/symbols">Laundry Symbol Guide</Link></li>
              <li><Link href="/fabrics">Fabric Care Guides</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Information</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Laundry Care Guide. All rights
          reserved. Content is for informational purposes only.
        </div>
      </div>
    </footer>
  );
}
