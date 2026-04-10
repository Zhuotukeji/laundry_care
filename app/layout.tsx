import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Laundry Care Guide — Stain Removal, Symbols & Fabric Care",
    template: "%s | Laundry Care Guide",
  },
  description:
    "Practical laundry care advice: stain removal guides, laundry symbol meanings, and fabric care instructions for everyday fabrics.",
  keywords: [
    "laundry care",
    "stain removal",
    "laundry symbols",
    "fabric care",
    "washing guide",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
