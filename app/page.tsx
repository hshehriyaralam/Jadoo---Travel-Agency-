import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/common/footer";
import Navbar from "@/components/layout/navbar";
import Outlet from "@/components/layout/outlet";
import { breadcrumbSchema, jsonLd, organizationSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Travel Agency Pakistan | Custom Tour Packages & Flights",
  description:
    "Jadoo Travel Agency helps travelers in Pakistan plan custom tour packages, international holidays, family trips, flights, hotels, and memorable journeys.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Travel Agency Pakistan | Jadoo Travel Agency",
    description: "Custom tour packages, international holidays, family trips, flights and hotels from Jadoo Travel Agency.",
    url: "/",
    images: [{ url: "/seo-og.png", width: 1200, height: 630, alt: "Jadoo Travel Agency" }],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema, breadcrumbSchema([{ name: "Home", path: "/" }])],
};

export default function Home() {
  return (
    <div className="max-w-full min-h-screen scrollbar">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(homeSchema)} />
      <Navbar />
      <Outlet />

      <section className="mx-auto w-full max-w-275 px-6 py-16">
        <p className="font-poppins font-semibold uppercase text-[#DF6951]">Travel agency in Pakistan</p>
        <h2 className="mt-2 max-w-4xl font-volkhov text-4xl font-bold text-Textprimary md:text-5xl">
          Travel & Tour Packages from Pakistan, Planned Around You
        </h2>
        <p className="mt-5 max-w-4xl leading-8 text-Textsecondary">
          Jadoo Travel Agency helps you discover destinations and plan practical holidays. Explore Pakistan tour packages, international travel, family holidays, custom itineraries, flight booking, and hotel options from one place.
        </p>
        <div className="mt-7 flex flex-wrap gap-4 font-semibold">
          <Link href="/pakistan-tour-packages" className="rounded-full bg-[#DF6951] px-6 py-3 text-white">Pakistan Tour Packages</Link>
          <Link href="/custom-travel-packages" className="rounded-full border border-[#181E4B] px-6 py-3">Custom Travel Packages</Link>
          <Link href="/international-tour-packages" className="rounded-full border border-[#181E4B] px-6 py-3">International Tours</Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-275 gap-6 px-6 pb-20 md:grid-cols-3">
        {[
          ["Pakistan tour packages", "Explore flexible holidays across northern areas, cultural destinations, and popular Pakistani getaways.", "/pakistan-tour-packages"],
          ["International tour packages", "Plan multi-city and international holidays with destination ideas that fit your time and interests.", "/international-tour-packages"],
          ["Flights & hotels", "Use Jadoo as a starting point for flight booking, hotel planning, and the practical details of your trip.", "/flight-booking"],
        ].map(([title, text, href]) => (
          <article key={title} className="rounded-2xl border border-[#eee8dc] p-7">
            <h2 className="font-volkhov text-2xl font-bold">{title}</h2>
            <p className="mt-3 leading-7 text-Textsecondary">{text}</p>
            <Link href={href} className="mt-5 inline-block font-semibold text-[#DF6951] underline underline-offset-4">Explore</Link>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}
