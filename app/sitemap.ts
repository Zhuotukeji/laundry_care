import type { MetadataRoute } from "next";
import { getStainSlugs } from "@/content/stains";
import { getSymbolSlugs } from "@/content/symbols";
import { getFabricSlugs } from "@/content/fabrics";

const BASE_URL = "https://www.lxzux.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/stains",
    "/symbols",
    "/fabrics",
    "/faq",
    "/search",
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];

  const stainPages = getStainSlugs().map((slug) => `/stains/${slug}`);
  const symbolPages = getSymbolSlugs().map((slug) => `/symbols/${slug}`);
  const fabricPages = getFabricSlugs().map((slug) => `/fabrics/${slug}`);

  const allPages = [...staticPages, ...stainPages, ...symbolPages, ...fabricPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.includes("/") && path.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
