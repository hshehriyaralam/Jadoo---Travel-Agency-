"use client";

import Link from "next/link";
import Footer from "@/components/common/footer";
import Navbar from "@/components/layout/navbar";
import Outlet from "@/components/layout/outlet";
import { JsonLd, organizationSchema, siteUrl, websiteSchema } from "@/lib/seo";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: "Custom Travel Packages Pakistan | Jadoo Travel Agency",
        description:
          "Explore custom travel packages in Pakistan, family-friendly Europe destinations, flight deals, and practical trip planning with Jadoo Travel Agency.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <div className="max-w-full min-h-screen scrollbar">
      <JsonLd data={structuredData} />
      <Navbar />
      <Outlet />

      <section className="mx-auto w-full max-w-275 px-6 pb-20 text-center">
        <p className="font-poppins font-semibold uppercase text-[#DF6951]">
          Plan with confidence
        </p>
        <h2 className="mt-2 font-volkhov text-3xl font-bold text-Textprimary">
          Best Travel Services for Your Next Trip
        </h2>
        <p className="mx-auto mt-4 max-w-3xl leading-7 text-Textsecondary">
          Explore custom travel packages, popular European destinations, and
          simple booking ideas. Choose the places and experiences that matter
          to you, then start planning a trip that fits your time and travel
          style.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6 font-semibold text-[#DF6951]">
          <Link href="/destinations" className="underline underline-offset-4">
            Explore travel destinations
          </Link>
          <Link href="/booking" className="underline underline-offset-4">
            Start planning your trip
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
