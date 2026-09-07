import type { MetadataRoute } from "next";

const siteUrl = "https://jadoo-travel-agency-one.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/destinations", "/booking", "/about"];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
