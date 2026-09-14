export const siteUrl = "https://jadoo-travel-agency-one.vercel.app";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${siteUrl}/#organization`,
  name: "Jadoo Travel Agency",
  url: siteUrl,
  logo: `${siteUrl}/Logo.png`,
  description:
    "Jadoo Travel Agency helps travelers discover destinations, custom travel packages, and practical trip planning ideas.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Jadoo Travel Agency",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en",
};

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
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