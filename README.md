# Jadoo Travel Agency — SEO implementation

This version is structured around a practical SEO strategy for a travel agency. It does not guarantee a Google position; rankings depend on relevance, content quality, competition, links, crawl/indexing and real-world authority.

## What was implemented

- Reworked global and page-level titles and meta descriptions.
- Added canonical URLs, Open Graph and Twitter metadata.
- Added JSON-LD for `TravelAgency`, `WebSite`, `Service` and `BreadcrumbList` where relevant.
- Added SEO landing pages for important search-intent clusters:
  - `/pakistan-tour-packages`
  - `/international-tour-packages`
  - `/custom-travel-packages`
  - `/family-tour-packages`
  - `/flight-booking`
  - `/hotel-booking`
- Added internal links between homepage, service pages, destinations and booking.
- Expanded useful on-page copy around travel planning, destinations and services.
- Improved generic image alt text where it was present in shared components.
- Added a social preview image at `/seo-og.png`.
- Consolidated the sitemap into `app/sitemap.ts` and removed the duplicate `app/sitemap.js` route.
- Kept `robots.txt` connected to `/sitemap.xml`.

## Important: actions outside the code

These cannot be completed honestly from the source code alone:

1. Deploy the site to the production domain.
2. Add the production domain to Google Search Console.
3. Submit `https://jadoo-travel-agency-one.vercel.app/sitemap.xml`.
4. Inspect and request indexing for the important new URLs.
5. Create/verify a Google Business Profile if Jadoo serves customers at an eligible local business location.
6. Build genuine, relevant mentions and backlinks. Do not buy or mass-generate spam links.
7. Keep publishing genuinely useful travel content based on real customer questions and first-hand knowledge.
8. Monitor Search Console queries, impressions, CTR and average position weekly and improve pages that are already gaining impressions.

## Keyword-to-page strategy

- `travel agency Pakistan` → `/`
- `Pakistan tour packages` → `/pakistan-tour-packages`
- `international tour packages Pakistan` → `/international-tour-packages`
- `custom travel packages Pakistan` → `/custom-travel-packages`
- `family tour packages Pakistan` → `/family-tour-packages`
- `flight booking Pakistan` → `/flight-booking`
- `hotel booking Pakistan` → `/hotel-booking`
- destination searches → `/destinations` and future dedicated destination pages

## Verification

Run:

```bash
npm ci
npm run build
```

Then deploy and verify:

- `/robots.txt`
- `/sitemap.xml`
- each new page in Google Search Console
- page titles and canonical tags in the deployed HTML
- structured data with Google's Rich Results Test

A ranking position cannot be guaranteed by any code change. The implementation is designed to give Google clearer, more useful pages to index and rank for relevant travel searches.
