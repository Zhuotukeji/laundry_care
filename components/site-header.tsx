"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stains", label: "Stains" },
  { href: "/symbols", label: "Symbols" },
  { href: "/fabrics", label: "Fabrics" },
  { href: "/search", label: "Search" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[var(--color-primary)] hover:no-underline">
          Laundry Care Guide
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors hover:no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--color-text-muted)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-[var(--color-border)] bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-[var(--color-text-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-primary)] hover:no-underline"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
