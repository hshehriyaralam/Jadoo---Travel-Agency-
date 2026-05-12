"use client"
import Image from "next/image"
import playButton from '@/public/hero/Play button.png'
import Decore from '@/public/hero/Decore.webp'
import Treveller from '@/public/hero/Traveller 1.webp'
import plane from '@/public/hero/plane.webp'
import Ellipse from '@/public/hero/Ellipse 8.png'
import { Button } from "../ui/button"
import React from "react"
import underline   from '@/public/hero/underline.png'
import { motion, useInView } from "framer-motion";

const Hero = () => {   
  return (
    <section className="w-full min-h-screen mx-auto overflow-hidden relative">
      <Image className="absolute left-0 top-0    w-[600px] h-[600px] opacity-100 "
      src={Ellipse}
        alt="Ellipse"
      />
        <Image
            src={Decore}
            alt="Decore"
            className="absolute right-0  lg:max-w-[48%]   xl:max-w-[60%]  xl:max-w-[60%] 
             3xl:max-w-[60%] lg:h-[550px]"
            />

      <div className="relative w-full max-w-[1200px] min-h-screen lg:h-[764px] mx-auto  px-4 px-6 
      pt-[100px] lg:pt-[120px]  flex flex-col-reverse lg:flex-row  items-center justify-between  "
      >

        {/* left div */}
        <div className="relative z-20 w-full max-w-[630px] 
          min-h-auto lg:min-h-[535px]  flex flex-col gap-4 text-center lg:text-left">
          <p className="text-[#DF6951] font-semibold uppercase  text-[16px]  lg:text-[20px]    leading-[100%]"
          >
            Best Destination around the world
          </p>

          <div  className="relative ">
          <Image 
            src={underline}
            alt="underline-image"
            className="hidden lg:block absolute top-16 left-50   w-[300px]  z-40"
            />
          <h1
            className="text-[#181E4B] font-[700]   text-[40px]  lg:text-[68px]  relative
            leading-tight  max-w-[545px] mx-auto lg:mx-0  z-50 "
            >
          
            Travel, enjoy and live a new and full life
          </h1>
            </div>

          <p  className="text-[#5E6282] font-[400] leading-[24px] text-[14px] max-w-[430px] mx-auto lg:mx-0"
          >  Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell
            they west hard for the.
          </p>

          <div  className="max-w-[379px] min-h-[60px]  flex flex-col lg:flex-row
            items-center gap-4 mx-auto lg:mx-0">
            <Button className="bg-[#F1A501]   hover:bg-[#F1A501]/70 
            cursor-pointer  transition-transform duration-500  hover:-translate-y-1   text-white px-5 py-6  font-sans cursor-pointer" >
              find out more
            </Button>

            <div className="flex  cursor-pointer  lg:mt-5 mt-0 cursor-pointer  transition-transform duration-500  hover:-translate-y-1 "
            >
              <Image
                src={playButton}
                width={60}
                height={60}
                alt="play button"
                className="border"
              />

              <Button className="mt-1.5 -mx-4 cursor-pointer text-[#686D77]">
                Play Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Right div */}
        <div
          className="relative w-full max-w-[630px]  min-h-[500px] lg:min-h-[764px]
          flex items-center justify-center">

        
          <div
          className="relative">
      <motion.div
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 10 }}
      transition={{ duration:  0.6}}
      >  
      
      
      <Image
            src={Treveller}
            width={620}
            height={620}
            alt="Traveller"
            className="relative z-10   right-0 lg:right-10  top-0 lg:-top-20 
             w-[420px]  lg:w-[620px]  h-auto"
            />

    </motion.div>
        

          <Image
            src={plane}
            width={140}
            height={140}
            alt="plane"
            className="absolute  top-0 left-16  lg:-top-10 lg:left-14  
            z-20   w-[80px] lg:w-[140px]  h-auto"
            />
            </div>
        </div>
      </div>
    </section>
  )
}


export default React.memo(Hero)