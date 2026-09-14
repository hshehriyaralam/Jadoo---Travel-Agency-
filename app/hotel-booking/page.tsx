import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";
import { breadcrumbSchema, jsonLd, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hotel Booking Pakistan | Plan Stays for Your Trip",
  description: "Plan hotel stays around your destinations, travel dates and itinerary. Jadoo helps you organize accommodation as part of your holiday plan.",
  alternates: { canonical: "/hotel-booking" },
  openGraph: { title: "Hotel Booking Pakistan | Jadoo Travel Agency", description: "Plan accommodation around your destination and wider holiday itinerary.", url: "/hotel-booking", images: ["/seo-og.png"] },
};

export default function HotelBookingPage() {
  const schema = { "@context": "https://schema.org", "@graph": [organizationSchema, { "@context": "https://schema.org", "@type": "Service", name: "Hotel Booking", provider: organizationSchema }, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Hotel Booking", path: "/hotel-booking" }])] };
  return <div className="min-h-screen bg-white text-[#181E4B]"><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} /><Navbar /><main className="mx-auto max-w-[1000px] px-6 pb-24 pt-28"><p className="font-poppins font-semibold uppercase text-[#DF6951]">Accommodation</p><h1 className="mt-3 font-volkhov text-4xl font-bold md:text-5xl">Hotel Booking for Your Travel Plans</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#5E6282]">Choose accommodation that fits your route, dates and travel style. A good hotel location can make a trip easier by reducing unnecessary travel between the places you want to visit.</p><section className="mt-12 max-w-3xl"><h2 className="font-volkhov text-3xl font-bold">How to choose a hotel for a holiday</h2><div className="mt-5 space-y-4 leading-7 text-[#5E6282]"><p>Consider the hotel’s location first. Staying near the attractions or transport connections you plan to use can save time during your trip.</p><p>Then compare room needs, check-in dates, facilities, cancellation terms and the needs of everyone traveling with you.</p><p>For longer trips, consider splitting your stay between neighborhoods or cities rather than choosing one hotel for the entire journey.</p></div></section><Link href="/custom-travel-packages" className="mt-10 inline-block font-semibold text-[#DF6951] underline underline-offset-4">Plan your full itinerary</Link></main><Footer /></div>;
}
