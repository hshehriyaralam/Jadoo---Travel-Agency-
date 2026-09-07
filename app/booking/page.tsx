import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Plan Your Trip | Jadoo Travel Agency",
  description:
    "Plan your next holiday with Jadoo Travel Agency. Explore destinations, organize your itinerary, and get practical travel ideas for a memorable journey.",
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white text-[#181E4B]">
      <Navbar />

      <main className="mx-auto max-w-[900px] px-6 pb-24 pt-28">
        <p className="font-poppins font-semibold uppercase text-[#DF6951]">
          Travel planning
        </p>

        <h1 className="mt-3 font-volkhov text-4xl font-bold md:text-6xl">
          Plan your next journey with confidence.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5E6282]">
          Planning a holiday becomes easier when you know where you want to go,
          what you want to experience, and how much time you have. Jadoo helps
          you start with destination ideas and turn them into a practical
          travel plan. Whether you are traveling for a weekend or planning a
          longer international adventure, having a clear plan can make your
          journey more comfortable and enjoyable.
        </p>

        <section className="mt-12 max-w-3xl">
          <h2 className="font-volkhov text-3xl font-bold">
            Create a travel plan that works for you
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Every traveler has different priorities. Some people want to
            explore historic landmarks and museums, while others prefer local
            food, nature, shopping, or relaxing in a new city. A useful travel
            plan should reflect your interests instead of following a fixed
            schedule designed for everyone.
          </p>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Start by selecting a destination and identifying the experiences
            that matter most to you. Then consider the length of your stay,
            transportation options, accommodation area, and activities you
            would like to experience. Keeping these details organized makes it
            easier to build an itinerary that is realistic and flexible.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-volkhov text-3xl font-bold">
            Simple steps for planning your trip
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="border-l-4 border-[#F1A501] p-5">
              <h3 className="font-semibold">Choose a destination</h3>

              <p className="mt-2 leading-7 text-[#5E6282]">
                Browse destinations that match your interests, preferred travel
                style, budget, and available time. Choosing the right
                destination is the first step toward a successful holiday.
              </p>
            </article>

            <article className="border-l-4 border-[#DF6951] p-5">
              <h3 className="font-semibold">Shape your itinerary</h3>

              <p className="mt-2 leading-7 text-[#5E6282]">
                Decide which landmarks, activities, food experiences, and local
                attractions you want to include. Balance planned activities
                with enough free time to explore.
              </p>
            </article>

            <article className="border-l-4 border-[#181E4B] p-5">
              <h3 className="font-semibold">Prepare for your journey</h3>

              <p className="mt-2 leading-7 text-[#5E6282]">
                Keep your important travel details organized before departure.
                Review your itinerary, transportation plans, accommodation
                information, and activities so you can travel with confidence.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="font-volkhov text-3xl font-bold">
            Tips for building a better itinerary
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Avoid filling every day with too many activities. Give yourself
            enough time to travel between locations and enjoy the places you
            visit. Group attractions that are close to each other so you can
            spend less time commuting and more time exploring.
          </p>

          <p className="mt-4 leading-7 text-[#5E6282]">
            It is also useful to prioritize your must-see attractions. If you
            are visiting a popular city for the first time, identify the
            landmarks and experiences you do not want to miss. After those
            priorities are planned, leave room for restaurants, local markets,
            neighborhood walks, and spontaneous discoveries.
          </p>
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="font-volkhov text-3xl font-bold">
            Start planning your holiday
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Begin by exploring destinations and finding a place that fits your
            travel goals. From Rome and London to broader European adventures,
            choosing a destination gives you a starting point for building
            your itinerary. Think about how long you want to stay, what you
            want to see, and which experiences will make your journey
            memorable.
          </p>

          <p className="mt-4 leading-7 text-[#5E6282]">
            A thoughtful travel plan gives you structure while still leaving
            room for flexibility. Explore Jadoo destinations and start creating
            ideas for your next trip.
          </p>
        </section>

        <Link
          className="mt-12 inline-block font-semibold text-[#DF6951] underline underline-offset-4"
          href="/destinations"
        >
          Explore travel destinations
        </Link>
      </main>

      <Footer />
    </div>
  );
}

