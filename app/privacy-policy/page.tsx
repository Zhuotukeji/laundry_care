import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Laundry Care Guide — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-8">
          Last updated: April 2026
        </p>

        <div className="space-y-8 text-[var(--color-text-muted)]">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Introduction
            </h2>
            <p>
              Laundry Care Guide (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your
              privacy. This Privacy Policy explains how we collect, use, and
              protect information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Information We Collect
            </h2>
            <p className="mb-2">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Usage data:</strong> Pages visited, time on site, and
                referring URLs, collected automatically through analytics tools.
              </li>
              <li>
                <strong>Contact information:</strong> Name and email address if
                you choose to contact us through our contact form.
              </li>
              <li>
                <strong>Cookies:</strong> Small text files stored on your device
                to improve your browsing experience and for analytics purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To operate and improve the website.</li>
              <li>To respond to your questions or feedback.</li>
              <li>To analyze site traffic and usage patterns.</li>
              <li>To prevent misuse and ensure security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Third-Party Services
            </h2>
            <p>
              We may use third-party services such as Google Analytics to
              understand how visitors use our site. These services may collect
              information about your visit according to their own privacy
              policies. We encourage you to review their policies directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Your Choices
            </h2>
            <p>
              You can disable cookies in your browser settings. You may also
              opt out of Google Analytics by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)]"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect the information we collect.
              However, no method of electronic storage or transmission is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, please{" "}
              <a href="/contact" className="text-[var(--color-primary)]">contact us</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
