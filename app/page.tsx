"use client"
import Link from "next/link";
import Footer from "@/components/common/footer";
import Navbar from "@/components/layout/navbar";
import Outlet from "@/components/layout/outlet";


export default function Home() {
  return (
   <div  className="max-w-full  min-h-screen scrollbar">
    <Navbar />  
    <Outlet />
    <section className="mx-auto w-full max-w-275 px-6 pb-20 text-center">
      <p className="font-poppins font-semibold uppercase text-[#DF6951]">Plan with confidence</p>
      <h2 className="mt-2 font-volkhov text-3xl font-bold text-Textprimary">More than a destination, a better way to travel</h2>
      <p className="mx-auto mt-4 max-w-3xl leading-7 text-Textsecondary">
        Discover city breaks, longer European journeys, and practical ideas for building a holiday around the experiences you value most. Explore our destination guide, then use the simple planning steps to turn inspiration into a trip.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-6 font-semibold text-[#DF6951]">
        <Link href="/destinations" className="underline underline-offset-4">Browse destinations</Link>
        <Link href="/booking" className="underline underline-offset-4">Start planning</Link>
      </div>
    </section>
    <Footer />
   </div>
  );
}
