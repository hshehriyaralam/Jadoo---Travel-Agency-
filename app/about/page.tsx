    import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";
import { JsonLd, organizationSchema, breadcrumbSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Jadoo Travel Agency",
  description:
    "Learn how Jadoo Travel Agency helps travelers discover destinations and plan memorable holidays with practical trip ideas.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About Jadoo Travel Agency",
    description:
      "Learn how Jadoo Travel Agency helps travelers discover destinations and plan memorable holidays.",
    url: `${siteUrl}/about`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Jadoo Travel Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Jadoo Travel Agency",
    description:
      "Learn how Jadoo Travel Agency helps travelers discover destinations and plan memorable holidays.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#181E4B]">
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
