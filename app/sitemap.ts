import type { MetadataRoute } from "next";

const siteUrl = "https://jadoo-travel-agency-one.vercel.app";
const pages = [
  ["/", "weekly", 1],
  ["/pakistan-tour-packages", "weekly", 0.9],
  ["/international-tour-packages", "weekly", 0.9],
  ["/custom-travel-packages", "weekly", 0.9],
  ["/family-tour-packages", "monthly", 0.8],
  ["/destinations", "weekly", 0.85],
  ["/flight-booking", "monthly", 0.8],
  ["/hotel-booking", "monthly", 0.75],
  ["/booking", "monthly", 0.75],
  ["/about", "monthly", 0.6],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, changeFrequency, priority]) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
