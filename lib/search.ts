import { getAllStainGuides } from "@/content/stains";
import { getAllSymbolGuides } from "@/content/symbols";
import { getAllFabricGuides } from "@/content/fabrics";
import { getAllFaqItems } from "@/content/faqs";

export interface SearchResult {
  type: "stain" | "symbol" | "fabric" | "faq";
  title: string;
  description: string;
  url: string;
  score: number;
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
}

function scoreMatch(query: string, title: string, keywords: string[], description: string): number {
  const q = normalize(query);
  const t = normalize(title);

  // Exact title match
  if (t === q) return 100;

  // Title starts with query
  if (t.startsWith(q)) return 80;

  // Title contains query
  if (t.includes(q)) return 60;

  // Keyword exact match
  const keywordMatch = keywords.some((k) => normalize(k) === q);
  if (keywordMatch) return 50;

  // Keyword partial match
  const keywordPartial = keywords.some((k) => normalize(k).includes(q));
  if (keywordPartial) return 40;

  // Description contains query
  if (normalize(description).includes(q)) return 20;

  // Word-level matching
  const queryWords = q.split(/\s+/).filter(Boolean);
  const titleWords = t.split(/\s+/);
  const allText = normalize(`${title} ${keywords.join(" ")} ${description}`);
  const matchingWords = queryWords.filter((w) => allText.includes(w));

  if (matchingWords.length === queryWords.length) return 35;
  if (matchingWords.length > 0) return 10 + (matchingWords.length / queryWords.length) * 20;

  return 0;
}

export function search(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const results: SearchResult[] = [];

  for (const guide of getAllStainGuides()) {
    const score = scoreMatch(query, guide.title, guide.keywords, guide.description + " " + guide.overview);
    if (score > 0) {
      results.push({
        type: "stain",
        title: guide.title,
        description: guide.description,
        url: `/stains/${guide.slug}`,
        score,
      });
    }
  }

  for (const guide of getAllSymbolGuides()) {
    const score = scoreMatch(query, guide.title, guide.keywords, guide.description + " " + guide.meaning);
    if (score > 0) {
      results.push({
        type: "symbol",
        title: guide.title,
        description: guide.description,
        url: `/symbols/${guide.slug}`,
        score,
      });
    }
  }

  for (const guide of getAllFabricGuides()) {
    const score = scoreMatch(query, guide.title, guide.keywords, guide.description + " " + guide.overview);
    if (score > 0) {
      results.push({
        type: "fabric",
        title: guide.title,
        description: guide.description,
        url: `/fabrics/${guide.slug}`,
        score,
      });
    }
  }

  for (const faq of getAllFaqItems()) {
    const score = scoreMatch(query, faq.question, faq.keywords, faq.answer);
    if (score > 0) {
      results.push({
        type: "faq",
        title: faq.question,
        description: faq.answer.length > 120 ? faq.answer.slice(0, 120) + "..." : faq.answer,
        url: `/faq#${faq.id}`,
        score,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
