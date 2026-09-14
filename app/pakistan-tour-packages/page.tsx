import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";
import { breadcrumbSchema, jsonLd, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pakistan Tour Packages | Holidays & Travel Packages",
  description: "Explore Pakistan tour packages for northern areas, family holidays, cultural trips and custom itineraries with Jadoo Travel Agency.",
  alternates: { canonical: "/pakistan-tour-packages" },
  openGraph: { title: "Pakistan Tour Packages | Jadoo Travel Agency", description: "Explore Pakistan holidays, northern trips, family tours and custom travel packages.", url: "/pakistan-tour-packages", images: ["/seo-og.png"] },
};

export default function PakistanToursPage() {
  const schema = { "@context": "https://schema.org", "@graph": [organizationSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pakistan Tour Packages", path: "/pakistan-tour-packages" }])] };
  return <div className="min-h-screen bg-white text-[#181E4B]"><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} /><Navbar /><main className="mx-auto max-w-[1000px] px-6 pb-24 pt-28">
    <p className="font-poppins font-semibold uppercase text-[#DF6951]">Explore Pakistan</p>
    <h1 className="mt-3 font-volkhov text-4xl font-bold md:text-5xl">Pakistan Tour Packages for Your Next Holiday</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5E6282]">Find ideas for Pakistan holidays, northern area trips, family travel, cultural journeys, and flexible itineraries. Jadoo can help you turn the places you want to see into a practical travel plan.</p>
    <section className="mt-12 grid gap-6 md:grid-cols-2">
      {[['Northern Pakistan','Plan trips around mountain scenery, valleys, lakes and local experiences in the north.'],['Family holidays','Choose a comfortable itinerary with family-friendly places, sensible travel days and time to explore.'],['Cultural journeys','Build a trip around historic cities, local food, architecture, markets and cultural experiences.'],['Custom Pakistan trips','Tell us where you want to go and how you like to travel so the itinerary can be shaped around your priorities.']].map(([t,d])=><article key={t} className="rounded-2xl border border-[#eee8dc] p-7"><h2 className="font-volkhov text-2xl font-bold">{t}</h2><p className="mt-3 leading-7 text-[#5E6282]">{d}</p></article>)}
    </section>
    <section className="mt-14 max-w-3xl"><h2 className="font-volkhov text-3xl font-bold">How to choose a Pakistan tour package</h2><p className="mt-4 leading-7 text-[#5E6282]">Start with your travel dates, preferred destinations, group size and the experiences you care about. Then balance sightseeing with realistic travel time so your holiday is enjoyable rather than rushed.</p><p className="mt-4 leading-7 text-[#5E6282]">If you already know the places you want to visit, a custom itinerary can be more useful than a fixed package. Explore Jadoo destinations or contact us to start planning.</p></section>
    <div className="mt-10 flex flex-wrap gap-5 font-semibold"><Link href="/custom-travel-packages" className="text-[#DF6951] underline underline-offset-4">Build a custom itinerary</Link><Link href="/destinations" className="text-[#DF6951] underline underline-offset-4">Explore destinations</Link><Link href="/booking" className="text-[#DF6951] underline underline-offset-4">Start booking</Link></div>
  </main><Footer /></div>;
}
