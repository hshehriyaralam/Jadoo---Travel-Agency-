"use client"
import Image from "next/image"
import playButton from '@/public/hero/Play button.png'
import Decore from '@/public/hero/Decore.webp'
import Treveller from '@/public/hero/Traveller 1.webp'
import plane from '@/public/hero/plane.webp'
import Ellipse from '@/public/hero/Ellipse 8.png'
import { Button } from "../ui/button"
import React from "react"

const Hero = () => {
  return (
    <section  className="w-full min-h-screen ">
      <Image
      className="absolute  left-0  top-0 "
      src={Ellipse}
      width={180}
      height={300}
      alt="Ellipse"
      />
    <div  className="flex items-center justify-center">
      {/* left div */}
      <div  className="max-w-[700px]  p-6 flex flex-col  gap-3 ">
        <p  className="text-[#DF6951] font-semibold  uppercase font-poppins  text-[16px] ">Best Destination around the world</p>

        <h1  className="text-[#181E4B]  font-bold  text-6xl  font-volkhov   max-w-[450px] ">Travel, enjoy and live a new and full life </h1>
        <p  className=" text-[#5E6282]  font-medium  font-poppins  text-[15px] max-w-[380px]">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

        <div  className="flex items-center   gap-2   ">
          <Button
          className="bg-[#F1A501]   text-white  px-3 py-5  font-sans  cursor-pointer"
          >
            find out more
          </Button>

         <div
            className="flex  mt-4   cursor-pointer    "
         >
           <Image
            src={playButton}
            width={60}
            height={60}
            alt="play button"
            className="  border   "
            />
            <Button  className="mt-1.5  -mx-4   cursor-pointer text-[#686D77]">
            Play Demo
          </Button>
         </div>
        
        </div>
      </div>

     
    {/* Right div */}
      <div  className="p-6 ">
        <Image 
        src={Decore}
        width={540}
        height={450}
        alt="Decore"
        className="absolute  top-0   -right-0  "
        />

        <Image 
        src={Treveller}
        width={520}
        height={520}
        alt="Teveller"
        className="relative top-4  left-8"
        />

        <Image 
        src={plane}
        width={140}
        height={140}
        alt="plane"
        className="absolute   top-30  right-108 "
        />
      </div>


    </div>

    </section>
  )
}

export default  React.memo(Hero) 
