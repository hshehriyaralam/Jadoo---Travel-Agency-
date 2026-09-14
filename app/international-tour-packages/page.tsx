import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";
import { breadcrumbSchema, jsonLd, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "International Tour Packages from Pakistan | Jadoo",
  description: "Plan international tour packages from Pakistan with destination ideas, family holidays, European trips and flexible custom itineraries.",
  alternates: { canonical: "/international-tour-packages" },
  openGraph: { title: "International Tour Packages from Pakistan | Jadoo", description: "Plan international holidays and custom tours from Pakistan.", url: "/international-tour-packages", images: ["/seo-og.png"] },
};

export default function InternationalToursPage() {
  const schema = { "@context": "https://schema.org", "@graph": [organizationSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "International Tour Packages", path: "/international-tour-packages" }])] };
  return <div className="min-h-screen bg-white text-[#181E4B]"><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} /><Navbar /><main className="mx-auto max-w-[1000px] px-6 pb-24 pt-28">
    <p className="font-poppins font-semibold uppercase text-[#DF6951]">Travel beyond Pakistan</p><h1 className="mt-3 font-volkhov text-4xl font-bold md:text-5xl">International Tour Packages from Pakistan</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#5E6282]">Explore international holiday ideas for couples, families and independent travelers. Jadoo helps you compare destinations and shape an itinerary around your dates, interests and preferred pace.</p>
    <section className="mt-12"><h2 className="font-volkhov text-3xl font-bold">Popular international travel ideas</h2><div className="mt-7 grid gap-6 md:grid-cols-3">{[['Europe','City breaks, culture, museums, food and multi-city European journeys.'],['Family holidays','Comfortable international trips with practical schedules and family-friendly experiences.'],['Custom international trips','A flexible route built around the countries and experiences you actually want.']].map(([t,d])=><article key={t} className="rounded-2xl border border-[#eee8dc] p-7"><h3 className="font-volkhov text-2xl font-bold">{t}</h3><p className="mt-3 leading-7 text-[#5E6282]">{d}</p></article>)}</div></section>
    <section className="mt-14 max-w-3xl"><h2 className="font-volkhov text-3xl font-bold">Plan an international holiday with a realistic itinerary</h2><p className="mt-4 leading-7 text-[#5E6282]">Choose destinations that match your available time. For shorter holidays, fewer cities can make the trip easier and more enjoyable. For longer journeys, connect destinations with sensible travel days and enough time to experience each place.</p><p className="mt-4 leading-7 text-[#5E6282]">Before booking, consider passport and visa requirements, transportation, accommodation location, seasonal conditions and the activities you want to prioritize.</p></section>
    <Link href="/custom-travel-packages" className="mt-10 inline-block font-semibold text-[#DF6951] underline underline-offset-4">Create a custom international itinerary</Link>
  </main><Footer /></div>;
}
