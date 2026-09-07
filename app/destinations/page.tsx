import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Travel Destinations | Jadoo",
  description:
    "Explore inspiring travel destinations with Jadoo, from city breaks in London and Rome to unforgettable journeys across Europe.",
  alternates: { canonical: "/destinations" },
};

const destinations = [
  {
    name: "Rome, Italy",
    detail: "Discover ancient landmarks, lively piazzas, and classic Italian food on a relaxed city escape.",
  },
  {
    name: "London, United Kingdom",
    detail: "Combine museums, royal history, neighborhood markets, and unforgettable views of the Thames.",
  },
  {
    name: "European Highlights",
    detail: "Build a longer itinerary across Europe with flexible stops, memorable rail journeys, and local experiences.",
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white text-[#181E4B]">
      <Navbar />
      <main className="mx-auto max-w-[1100px] px-6 pb-24 pt-28">
        <p className="font-poppins font-semibold uppercase text-[#DF6951]">Jadoo destinations</p>
        <h1 className="mt-3 max-w-3xl font-volkhov text-4xl font-bold md:text-6xl">
          Find a trip that feels like yours.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5E6282]">
          Start with a destination and shape the rest around the way you like to travel. Jadoo brings together practical trip ideas, flexible itineraries, and inspiration for your next holiday.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {destinations.map((destination) => (
            <article key={destination.name} className="rounded-2xl border border-[#eee8dc] p-6 shadow-sm">
              <h2 className="font-volkhov text-2xl font-bold">{destination.name}</h2>
              <p className="mt-4 leading-7 text-[#5E6282]">{destination.detail}</p>
            </article>
          ))}
        </div>
        <Link className="mt-12 inline-block font-semibold text-[#DF6951] underline underline-offset-4" href="/booking">
          Plan your next trip
        </Link>
      </main>
      <Footer />
    </div>
  );
}
