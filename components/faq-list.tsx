"use client";

import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-[var(--color-border)] rounded-lg bg-white overflow-hidden"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-[var(--color-text)]">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-[var(--color-text-muted)] shrink-0 transition-transform ${
                openId === item.id ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openId === item.id && (
            <div className="px-5 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
