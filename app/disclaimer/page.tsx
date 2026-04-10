import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for Laundry Care Guide — important information about our content and advice.",
};

export default function DisclaimerPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Disclaimer</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-8">
          Last updated: April 2026
        </p>

        <div className="space-y-6 text-[var(--color-text-muted)]">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              General Information
            </h2>
            <p>
              The information provided on Laundry Care Guide is for general
              informational and educational purposes only. It is not intended
              as professional textile restoration, dry cleaning, or fabric
              conservation advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              No Guarantees
            </h2>
            <p>
              While we strive to provide accurate, up-to-date, and practical
              laundry care information, we make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, or suitability of the
              information. Any reliance you place on this information is
              strictly at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Results May Vary
            </h2>
            <p>
              Stain removal and fabric care results depend on many factors
              including fabric type, stain age, water quality, products used,
              and technique. The methods described on this site may not work
              for every situation. We recommend testing any cleaning method on
              a hidden area of the garment first.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              External Links
            </h2>
            <p>
              This site may contain links to external websites. We have no
              control over the content of those sites and accept no
              responsibility for them or for any loss or damage that may arise
              from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Professional Advice
            </h2>
            <p>
              For valuable, delicate, or antique garments, we recommend
              consulting a professional dry cleaner or textile conservator.
              Our guides are intended for everyday household laundry care.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Contact
            </h2>
            <p>
              If you have concerns about any information on this site, please{" "}
              <a href="/contact" className="text-[var(--color-primary)]">contact us</a>{" "}
              and we will review it promptly.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
