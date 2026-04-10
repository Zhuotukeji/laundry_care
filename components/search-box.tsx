"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

interface SearchBoxProps {
  defaultValue?: string;
  placeholder?: string;
  size?: "lg" | "md";
  className?: string;
}

export default function SearchBox({
  defaultValue = "",
  placeholder = "Search for stain removal tips, laundry symbols, fabric care...",
  size = "md",
  className = "",
}: SearchBoxProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  const inputClass =
    size === "lg"
      ? "px-5 py-4 text-lg rounded-xl"
      : "px-4 py-2.5 text-sm rounded-lg";

  const btnClass =
    size === "lg"
      ? "px-6 py-4 text-base rounded-xl"
      : "px-4 py-2.5 text-sm rounded-lg";

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 w-full ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={`flex-1 border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] ${inputClass}`}
        aria-label="Search"
      />
      <button
        type="submit"
        className={`bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer ${btnClass}`}
      >
        Search
      </button>
    </form>
  );
}
