import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";
import { breadcrumbSchema, jsonLd, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Flight Booking Pakistan | Find Flights for Your Trip",
  description: "Plan flight booking from Pakistan around your destination, dates and travel plans. Use Jadoo to organize flights with your wider holiday itinerary.",
  alternates: { canonical: "/flight-booking" },
  openGraph: { title: "Flight Booking Pakistan | Jadoo Travel Agency", description: "Plan flights from Pakistan as part of your wider travel itinerary.", url: "/flight-booking", images: ["/seo-og.png"] },
};

export default function FlightBookingPage() {
  const schema = { "@context": "https://schema.org", "@graph": [organizationSchema, { "@context": "https://schema.org", "@type": "Service", name: "Flight Booking Pakistan", provider: organizationSchema }, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Flight Booking", path: "/flight-booking" }])] };
  return <div className="min-h-screen bg-white text-[#181E4B]"><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} /><Navbar /><main className="mx-auto max-w-[1000px] px-6 pb-24 pt-28"><p className="font-poppins font-semibold uppercase text-[#DF6951]">Flights</p><h1 className="mt-3 font-volkhov text-4xl font-bold md:text-5xl">Flight Booking from Pakistan</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#5E6282]">Start your trip by organizing flights around your destination and dates. Jadoo helps you connect flight planning with the rest of your holiday itinerary.</p><section className="mt-12 grid gap-6 md:grid-cols-3">{[['Choose your route','Start with your departure city, destination and preferred dates.'],['Compare your trip needs','Think about baggage, connections, travel times and the location of your accommodation.'],['Connect your itinerary','Keep flights, hotels and activities aligned so your overall travel plan is practical.']].map(([t,d])=><article key={t} className="rounded-2xl border border-[#eee8dc] p-7"><h2 className="font-volkhov text-2xl font-bold">{t}</h2><p className="mt-3 leading-7 text-[#5E6282]">{d}</p></article>)}</section><section className="mt-14 max-w-3xl"><h2 className="font-volkhov text-3xl font-bold">Flight planning tips</h2><p className="mt-4 leading-7 text-[#5E6282]">Check your travel dates carefully and allow enough time for airport transfers and connections. For international travel, confirm passport and visa requirements before finalizing the trip.</p></section><Link href="/booking" className="mt-10 inline-block font-semibold text-[#DF6951] underline underline-offset-4">Continue to trip planning</Link></main><Footer /></div>;
}
