import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Plan Your Trip | Jadoo Travel Agency",
  description:
    "Plan a memorable holiday with Jadoo. Choose a destination, compare trip ideas, and get practical guidance for your next journey.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white text-[#181E4B]">
      <Navbar />
      <main className="mx-auto max-w-[900px] px-6 pb-24 pt-28">
        <p className="font-poppins font-semibold uppercase text-[#DF6951]">Travel planning</p>
        <h1 className="mt-3 font-volkhov text-4xl font-bold md:text-6xl">Make your next journey simple.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5E6282]">
          Tell us what kind of escape you have in mind and use our trip ideas as a starting point. From short city breaks to multi-country adventures, thoughtful planning helps you spend less time searching and more time enjoying the journey.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="border-l-4 border-[#F1A501] p-5"><h2 className="font-semibold">Choose a destination</h2><p className="mt-2 text-[#5E6282]">Browse places that match your pace, interests, and travel dates.</p></div>
          <div className="border-l-4 border-[#DF6951] p-5"><h2 className="font-semibold">Shape your itinerary</h2><p className="mt-2 text-[#5E6282]">Balance landmarks, local experiences, and time to explore freely.</p></div>
          <div className="border-l-4 border-[#181E4B] p-5"><h2 className="font-semibold">Travel with confidence</h2><p className="mt-2 text-[#5E6282]">Keep your plans clear with useful details before you set off.</p></div>
        </div>
        <Link className="mt-12 inline-block font-semibold text-[#DF6951] underline underline-offset-4" href="/destinations">
          Explore destinations
        </Link>
      </main>
      <Footer />
    </div>
  );
}
