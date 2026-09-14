    import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";
import { breadcrumbSchema, jsonLd, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Jadoo Travel Agency",
  description:
    "Learn about Jadoo Travel Agency and how we help travelers plan Pakistan and international holidays, custom itineraries and travel services.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Jadoo Travel Agency", description: "Learn about Jadoo Travel Agency and our approach to travel planning.", url: "/about", images: ["/seo-og.png"] },
};

export default function AboutPage() {
  const schema = { "@context": "https://schema.org", "@graph": [organizationSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])] };
  return (
    <div className="min-h-screen bg-white text-[#181E4B]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <Navbar />
      <main className="mx-auto max-w-225 px-6 pb-24 pt-28">
        <p className="font-poppins font-semibold uppercase text-[#DF6951]">About Jadoo</p>
        <h1 className="mt-3 font-volkhov text-4xl font-bold md:text-6xl">Travel planning with room for discovery.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-Textsecondary">
          Jadoo is a travel agency experience built to make choosing your next destination feel exciting and manageable. We bring inspiration, practical planning, and memorable places together in one clear starting point.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-Textsecondary">
          Whether you are planning a quick city break or a longer European journey, begin with the places you want to see and let the itinerary take shape from there.
        </p>
        <Link className="mt-12 inline-block font-semibold text-[#DF6951] underline underline-offset-4" href="/destinations">
          See destination ideas
        </Link>
      </main>
      <Footer />
    </div>
  );
}
