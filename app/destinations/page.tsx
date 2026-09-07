import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Best Travel Destinations in Europe | Jadoo",
  description:
    "Explore the best travel destinations in Europe with Jadoo. Discover Rome, London, and European highlights with practical travel ideas, attractions, and itinerary inspiration.",
  alternates: {
    canonical: "/destinations",
  },
};

const destinations = [
  {
    name: "Rome, Italy",
    detail:
      "Discover ancient landmarks, lively piazzas, world-famous museums, and classic Italian food. Rome is ideal for travelers who want to combine history, culture, architecture, and relaxed city exploration.",
    highlights: [
      "Ancient historical landmarks",
      "Italian cuisine and local markets",
      "Museums and cultural attractions",
      "Beautiful plazas and city streets",
    ],
  },
  {
    name: "London, United Kingdom",
    detail:
      "Explore museums, royal history, neighborhood markets, historic streets, and unforgettable views of the Thames. London offers a mix of culture, entertainment, shopping, and local experiences.",
    highlights: [
      "Historic landmarks and royal attractions",
      "Museums and cultural experiences",
      "Shopping and local markets",
      "Thames views and city walks",
    ],
  },
  {
    name: "European Highlights",
    detail:
      "Build a longer European itinerary with flexible stops across multiple cities. Combine famous landmarks, scenic rail journeys, local food, cultural experiences, and time to explore at your own pace.",
    highlights: [
      "Multi-city European itineraries",
      "Scenic train journeys",
      "Local food and cultural experiences",
      "Flexible travel planning",
    ],
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
          holiday. Whether you are planning a short city break, a cultural
          getaway, or a longer European adventure, Jadoo helps you explore
          destinations and find ideas for creating an itinerary that matches
          your interests, travel style, and available time.
        </p>

        <section className="mt-12 max-w-4xl">
          <h2 className="font-volkhov text-3xl font-bold">
            Explore popular European travel destinations
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Europe is home to some of the world's most memorable travel
            destinations. Travelers can explore centuries of history, famous
            architecture, local cuisine, museums, markets, and unique cultural
            experiences in a relatively small area. Choosing the right
            destination depends on what you want from your holiday and how much
            time you have available.
          </p>

          <p className="mt-4 leading-7 text-[#5E6282]">
            For a history-focused trip, cities such as Rome offer ancient
            landmarks and cultural attractions. Travelers interested in
            museums, shopping, entertainment, and modern city life may prefer
            London. If you want to visit several countries during one holiday,
            a flexible European itinerary can combine multiple cities and
            experiences.
          </p>
        </section>

        <section
          aria-labelledby="destination-list"
          className="mt-14"
        >
          <h2
            id="destination-list"
            className="font-volkhov text-3xl font-bold"
          >
            Popular destinations
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
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

                <h4 className="mt-6 font-semibold">
                  What to experience
                </h4>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-[#5E6282]">
                  {destination.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 max-w-4xl">
          <h2 className="font-volkhov text-3xl font-bold">
            How to choose the right destination
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Start by thinking about the type of experience you want. If you
            enjoy history and architecture, choose destinations with important
            landmarks, museums, and historic neighborhoods. If food is an
            important part of your trip, look for cities with a strong local
            food culture, markets, and restaurants.
          </p>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Your available travel time is also important. A short holiday may
            work best with one city so you can explore without rushing. Longer
            trips give you more flexibility to visit several destinations.
            Consider transportation between cities, the activities you want to
            enjoy, and how much free time you would like during your journey.
          </p>
        </section>

        <section className="mt-14 max-w-4xl">
          <h2 className="font-volkhov text-3xl font-bold">
            Plan your European adventure
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Once you have selected a destination, the next step is to organize
            your travel plan. Make a list of the places you want to visit,
            decide which experiences are most important, and leave some space
            for discovering local neighborhoods and unexpected attractions.
            A good itinerary should provide direction without making every
            minute of your holiday feel scheduled.
          </p>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Explore our destination ideas first, then use the planning page to
            think about your itinerary and prepare for your next journey.
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

