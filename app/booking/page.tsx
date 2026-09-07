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
          travel plan.
        </p>

        <section className="mt-10 max-w-3xl">
          <h2 className="font-volkhov text-3xl font-bold">
            Create a travel plan that works for you
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Whether you are planning a weekend city break or a multi-country
            adventure, a clear itinerary can make your journey more enjoyable.
            Choose destinations that match your interests, decide which
            experiences matter most, and leave enough flexibility to discover
            places at your own pace.
          </p>
        </section>

        <section className="mt-12">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="border-l-4 border-[#F1A501] p-5">
              <h2 className="font-semibold">Choose a destination</h2>

              <p className="mt-2 leading-7 text-[#5E6282]">
                Browse destinations that match your interests, preferred travel
                style, and available time.
              </p>
            </article>

            <article className="border-l-4 border-[#DF6951] p-5">
              <h2 className="font-semibold">Shape your itinerary</h2>

              <p className="mt-2 leading-7 text-[#5E6282]">
                Balance famous landmarks, local experiences, food, culture, and
                free time while creating your travel schedule.
              </p>
            </article>

            <article className="border-l-4 border-[#181E4B] p-5">
              <h2 className="font-semibold">Travel with confidence</h2>

              <p className="mt-2 leading-7 text-[#5E6282]">
                Keep important trip details organized so you can prepare before
                departure and enjoy your journey with fewer surprises.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="font-volkhov text-3xl font-bold">
            Start planning your holiday
          </h2>

          <p className="mt-4 leading-7 text-[#5E6282]">
            Begin by exploring destinations and finding a place that fits your
            travel goals. From there, you can think about the length of your
            stay, activities you want to experience, and the best way to move
            between places. A thoughtful plan gives you structure while still
            leaving room for spontaneous discoveries.
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