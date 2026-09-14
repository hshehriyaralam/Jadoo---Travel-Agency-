import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";
import { breadcrumbSchema, jsonLd, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Travel Packages Pakistan | Jadoo Travel Agency",
  description: "Build custom travel packages in Pakistan around your dates, destinations, budget, interests and preferred travel style with Jadoo.",
  alternates: { canonical: "/custom-travel-packages" },
  openGraph: { title: "Custom Travel Packages Pakistan | Jadoo", description: "Plan a flexible travel itinerary around your own destinations and priorities.", url: "/custom-travel-packages", images: ["/seo-og.png"] },
};

export default function CustomPackagesPage() {
  const schema = { "@context": "https://schema.org", "@graph": [organizationSchema, { "@context": "https://schema.org", "@type": "Service", name: "Custom Travel Packages Pakistan", provider: organizationSchema }, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Custom Travel Packages", path: "/custom-travel-packages" }])] };
  return <div className="min-h-screen bg-white text-[#181E4B]"><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} /><Navbar /><main className="mx-auto max-w-[1000px] px-6 pb-24 pt-28">
    <p className="font-poppins font-semibold uppercase text-[#DF6951]">Travel your way</p><h1 className="mt-3 font-volkhov text-4xl font-bold md:text-5xl">Custom Travel Packages Pakistan</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#5E6282]">Have a destination in mind but do not want a fixed itinerary? Build a custom travel package around your dates, destinations, group, interests and preferred pace.</p>
    <section className="mt-12 grid gap-6 md:grid-cols-3">{[['1. Tell us your plan','Share where you want to go, when you want to travel and who is coming.'],['2. Shape the itinerary','Choose the experiences, destinations and pace that make sense for your trip.'],['3. Prepare to travel','Keep your route, accommodation and important trip details organized before departure.']].map(([t,d])=><article key={t} className="rounded-2xl border border-[#eee8dc] p-7"><h2 className="font-volkhov text-2xl font-bold">{t}</h2><p className="mt-3 leading-7 text-[#5E6282]">{d}</p></article>)}</section>
    <section className="mt-14 max-w-3xl"><h2 className="font-volkhov text-3xl font-bold">What makes a custom package useful?</h2><p className="mt-4 leading-7 text-[#5E6282]">A fixed tour is not always the best fit. Custom planning gives you room to prioritize the places and experiences that matter to you while keeping travel days practical.</p><p className="mt-4 leading-7 text-[#5E6282]">Whether you want a Pakistan holiday, a family trip or an international itinerary, start with your must-see places and build from there.</p></section>
    <div className="mt-10 flex flex-wrap gap-5 font-semibold"><Link href="/pakistan-tour-packages" className="text-[#DF6951] underline underline-offset-4">See Pakistan tour packages</Link><Link href="/booking" className="text-[#DF6951] underline underline-offset-4">Start planning</Link></div>
  </main><Footer /></div>;
}
