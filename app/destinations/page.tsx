import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Best Travel Destinations in Europe | Jadoo",
  description:
    "Explore the best travel destinations in Europe with Jadoo. Discover Rome, London, and European highlights with practical trip ideas and itinerary inspiration.",
  alternates: {
    canonical: "/destinations",
  },
};

const destinations = [
  {
    name: "Rome, Italy",
    detail:
      "Discover ancient landmarks, lively piazzas, world-famous museums, and classic Italian food. Rome is ideal for travelers who want to combine history, culture, and relaxed city exploration.",
  },
  {
    name: "London, United Kingdom",
    detail:
      "Explore museums, royal history, neighborhood markets, historic streets, and unforgettable views of the Thames. London offers a mix of culture, entertainment, shopping, and local experiences.",
  },
  {
    name: "European Highlights",
    detail:
      "Build a longer European itinerary with flexible stops across multiple cities. Combine famous landmarks, scenic rail journeys, local food, cultural experiences, and time to explore at your own pace.",
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white text-[#181E4B]">
      <Navbar />

      <main className="mx-auto max-w-[1100px] px-6 pb-24 pt-28">
        <p className="font-poppins font-semibold uppercase text-[#DF6951]">
          Jadoo destinations
        </p>

        <h1 className="mt-3 max-w-3xl font-volkhov text-4xl font-bold md:text-6xl">
          Find the best travel destinations for your next journey.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5E6282]">
          Discover inspiring places and practical travel ideas for your next
          holiday. Whether you are planning a short city break or a longer
          European adventure, Jadoo helps you explore destinations and build
          an itinerary that matches your interests and travel style.
        </p>

        <section className="mt-10 max-w-3xl">
          <h2 className="font-volkhov text-3xl font-bold">
            Explore European destinations
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Europe offers a wide range of experiences for every type of
            traveler. From historic cities and famous landmarks to local food,
            museums, markets, and scenic journeys, each destination has
            something different to offer. Start by choosing a place that
            matches the type of trip you want to experience.
          </p>
        </section>

        <section
          aria-labelledby="destination-list"
          className="mt-14"
        >
          <h2 id="destination-list" className="sr-only">
            Popular travel destinations
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="rounded-2xl border border-[#eee8dc] p-6 shadow-sm"
              >
                <h3 className="font-volkhov text-2xl font-bold">
                  {destination.name}
                </h3>

                <p className="mt-4 leading-7 text-[#5E6282]">
                  {destination.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="font-volkhov text-3xl font-bold">
            How to choose your destination
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Think about the experience you want before choosing your
            destination. History lovers may prefer cities with ancient
            landmarks and museums, while food lovers can focus on places known
            for local cuisine and markets. If you enjoy exploring multiple
            countries, a flexible European itinerary can help you experience
            several destinations during one trip.
          </p>
        </section>

        <Link
          className="mt-12 inline-block font-semibold text-[#DF6951] underline underline-offset-4"
          href="/booking"
        >
          Plan your next trip
        </Link>
      </main>

      <Footer />
    </div>
  );
}