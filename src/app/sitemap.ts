import type { MetadataRoute } from "next";
import { ALL_VALUES, allPairKeys } from "@/lib/numerology";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const staticPaths = ["/", "/ejemplo", "/escribenos", "/privacidad", "/terminos"];

  return [
    ...staticPaths.map((path) => ({
      url: new URL(path, base).href,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.6,
    })),
    ...ALL_VALUES.map((value) => ({
      url: new URL(`/numero/${value}`, base).href,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...allPairKeys().map((key) => ({
      url: new URL(`/par/${key}`, base).href,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
