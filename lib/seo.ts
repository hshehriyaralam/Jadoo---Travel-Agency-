export const siteUrl = "https://jadoo-travel-agency-one.vercel.app";

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Jadoo Travel Agency",
  url: siteUrl,
  logo: `${siteUrl}/hero/Logo.webp`,
  description: "Jadoo Travel Agency helps travelers plan custom holidays, tours, flights, hotels, and international trips.",
  areaServed: "Pakistan",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jadoo Travel Agency",
  url: siteUrl,
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
