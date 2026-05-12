"use client"
import React from "react";
import { Button } from "../ui/button";
import email from "@/public/banners/Group 46.png";
import ring from "@/public/banners/Mask Group.png";
import share from "@/public/banners/Group 77.png";
import starts from "@/public/banners/Group 5.png";
import Image from "next/image";
import { motion } from "framer-motion";


const Banner = () => {
  return (
     <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration:  0.6}}
        >
    <section
    className="w-full max-auto overflow-hidden ">
    <div className="max-w-[1356px]   h-[490px]  relative   mx-auto ">
      <div className="bg-[#DFD7F9]/20 mx-auto rounded-tl-[100px]   lg:p-1 p-4
       w-[80%] flex flex-col  justify-center gap-10  h-90   z-40  relative ">
        <Image
          src={share}
          alt="share"
          className="absolute  -right-4 top-0 z-50  w-8 lg:w-12"
        />
        <div >
          <h2 className="text-[#5E6282] font-semibold   lg:text-[30px]  text-[13px] text-center 
           lg:max-w-[800px]   max-w-[250px]  mx-auto  ">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo  
          </h2>
        </div>

        <Image
          src={ring}
          alt="ring"
          className="hidden lg:block absolute  top-13  rotate-90 "
        />
        <Image
          src={ring}
          alt="ring"
          className="absolute   right-0  z-40"
        />

        <div className="flex  lg:flex-row flex-col items-center justify-center  gap-2  ">
          <div className="flex items-center justify-center gap-2  bg-white rounded-xl
            
          lg:py-3.5 lg:px-6  px-3 py-1">
            <Image alt="email logo" src={email}  />
            <input
              type="email"
              placeholder="Your email"
              className="text-[#39425D] outline-none border-none"
              
            />
          </div>

          <Button className="bg-[#FF946D]  text-white lg:p-6  p-3 lg:text-md  text-sm  cursor-pointer ">
            Subscribe
          </Button>
        </div>
      </div>

      <Image
        src={starts}
        alt="stars"
        className="hidden lg:block absolute right-8 bottom-10  opacity-80"
      />
    </div>
    </section>
     </motion.div>

  );
};

export default React.memo(Banner);
