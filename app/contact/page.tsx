import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Laundry Care Guide team. Send us your questions, suggestions, or feedback.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>

        <div className="space-y-6 text-[var(--color-text-muted)]">
          <p>
            We would love to hear from you. Whether you have a laundry question
            we have not covered, a suggestion for a new guide, or feedback about
            our existing content, please do not hesitate to reach out.
          </p>

          <div className="bg-white border border-[var(--color-border)] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] bg-white"
                >
                  <option>General Question</option>
                  <option>Content Suggestion</option>
                  <option>Report an Error</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="text-sm">
            <p>
              You can also reach us by email at{" "}
              <strong>hello@laundrycareguide.com</strong>
            </p>
            <p className="mt-2">
              We aim to respond to all inquiries within 2 business days.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
