import Link from "next/link";

interface GuideCardProps {
  href: string;
  title: string;
  description: string;
  tag?: string;
}

export default function GuideCard({ href, title, description, tag }: GuideCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-lg border border-[var(--color-border)] p-5 hover:shadow-md hover:border-[var(--color-primary-light)] transition-all hover:no-underline group"
    >
      {tag && (
        <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-[var(--color-primary)] mb-2">
          {tag}
        </span>
      )}
      <h3 className="font-semibold text-base text-[var(--color-text)] group-hover:text-[var(--color-primary)] mb-1">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">
        {description}
      </p>
    </Link>
  );
}
