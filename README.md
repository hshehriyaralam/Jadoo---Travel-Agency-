This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO implementation

This version includes the SEO audit fixes requested for the public pages:

- Short, intent-focused page titles for the homepage, destinations, and booking pages.
- Page-specific meta descriptions, canonical URLs, Open Graph tags, and Twitter cards.
- A generated `public/og-image.png` for social previews.
- JSON-LD structured data for `TravelAgency`, `WebSite`, `WebPage`, `BreadcrumbList`, and the booking `Service`.
- Descriptive `alt` text for the site's image components.
- A single Next.js `app/sitemap.ts` route (the duplicate `sitemap.js` route was removed).
- `robots.txt` continues to expose `/sitemap.xml`.
- Updated headings and copy to better match travel, destination, and booking search intent.

### Still required outside the codebase

Some off-page actions cannot be completed inside a website repository:

1. Add and verify the property in Google Search Console.
2. Submit `https://jadoo-travel-agency-one.vercel.app/sitemap.xml`.
3. If Jadoo serves customers at a real location, create/verify its Google Business Profile and keep business name, address, phone, and website consistent.
4. Build genuine travel-industry citations and backlinks; avoid paid/spammy link schemes.
5. After deployment, run the site through Google Search Console URL Inspection and request indexing for changed pages.
