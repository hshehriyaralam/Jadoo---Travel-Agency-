import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";
import { breadcrumbSchema, jsonLd, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Family Tour Packages Pakistan | Family-Friendly Holidays",
  description: "Plan family tour packages in Pakistan and international destinations with comfortable itineraries, practical travel days and family-friendly experiences.",
  alternates: { canonical: "/family-tour-packages" },
  openGraph: { title: "Family Tour Packages Pakistan | Jadoo", description: "Family-friendly holidays with practical itineraries and destination ideas.", url: "/family-tour-packages", images: ["/seo-og.png"] },
};

export default function FamilyToursPage() {
  const schema = { "@context": "https://schema.org", "@graph": [organizationSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Family Tour Packages", path: "/family-tour-packages" }])] };
  return <div className="min-h-screen bg-white text-[#181E4B]"><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} /><Navbar /><main className="mx-auto max-w-[1000px] px-6 pb-24 pt-28">
    <p className="font-poppins font-semibold uppercase text-[#DF6951]">Travel together</p><h1 className="mt-3 font-volkhov text-4xl font-bold md:text-5xl">Family Tour Packages for Comfortable Holidays</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#5E6282]">Plan family-friendly travel with sensible schedules, comfortable stays and activities that work for different ages. Choose Pakistan destinations or explore international family holidays.</p>
    <section className="mt-12 max-w-3xl"><h2 className="font-volkhov text-3xl font-bold">What to consider when planning family travel</h2><div className="mt-6 space-y-5 text-[#5E6282]"><p className="leading-7">Keep daily travel time realistic and avoid packing too many activities into one day. Families often enjoy having a clear plan with enough free time for meals, rest and unexpected discoveries.</p><p className="leading-7">Choose accommodation locations carefully, think about transportation between attractions, and prioritize experiences that everyone in the group can enjoy.</p><p className="leading-7">For international trips, check passport, visa, seasonal and travel requirements before confirming your itinerary.</p></div></section>
    <section className="mt-14 grid gap-6 md:grid-cols-2">{[['Pakistan family holidays','Explore local destinations and build a comfortable route around your family’s available time.'],['International family travel','Plan Europe and other international journeys with practical city stays and flexible days.']].map(([t,d])=><article key={t} className="rounded-2xl border border-[#eee8dc] p-7"><h2 className="font-volkhov text-2xl font-bold">{t}</h2><p className="mt-3 leading-7 text-[#5E6282]">{d}</p></article>)}</section>
    <Link href="/custom-travel-packages" className="mt-10 inline-block font-semibold text-[#DF6951] underline underline-offset-4">Build a family itinerary</Link>
  </main><Footer /></div>;
}
