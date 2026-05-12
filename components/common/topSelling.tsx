"use client"

import React from "react";
import Image from "next/image";
import { sellingData } from "@/data/topselling";
import icon from "@/public/selling/navigatIcon.png";
import Decore from "@/public/selling/sellDecore.png";
import { motion } from "framer-motion";



const TopSelling = () => {
  return (
    <section className="w-full mx-auto overflow-hidden">
      <div  className="max-w-[1102px] lg:h-[617px]  min-h-[617px] mx-auto  py-10  lg:py-0">
      <div className="flex flex-col items-center justify-center  gap-10">
        <div className="flex flex-col  items-center justify-center gap-2  ">
          <p className="text-[#5E6282] uppercase  font-poppins font-semibold  text-md  ">
            Top Selling
          </p>
          <h2 className="text-[#14183E] font-volkhov font-bold lg:text-4xl text-3xl   text-center ">
            Top Destinations
          </h2>
        </div>

        {/*  selling cards  */}
        <div  className="flex flex-col lg:flex-row items-center justify-center  gap-8 relative  ">
          {sellingData?.map((sell) => (
            <motion.div
                key={sell.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration:  0.6}}
                  >

            <div
              className="w-[280px] h-[400px]  shadow-xl   rounded-3xl  z-50 
               cursor-pointer  transition-transform duration-400  hover:-translate-y-4  hover:shadow-2xl "
              
            >
              <div className="h-70  w-full  rounded-3xl  bg-white">
                <Image
                  src={sell.image}
                  alt="sell-image"
                  className="w-full h-full  rounded-t-3xl"
                />
              </div>

              <div className="p-4  bg-white">
                <div
                  className="flex items-center justify-between  mb-3 text-[#5E6282] 
                    font-poppins font-semibold"
                >
                  <p className="">{sell.title}</p>
                  <p>${sell.price}k</p>
                </div>

                <div className="flex items-center gap-2 p-2  ">
                  <Image width={15} height={15} alt="icon" src={icon} />
                  <p className="text-[#5E6282]  font-medium text-md">
                    {sell.days} Days Trip
                  </p>
                </div>
              </div>
            </div>
           </motion.div>

          ))}
          
          <Image         
          alt="Decore"
          src={Decore}
          className="absolute -right-15  lg:w-26 w-22"
          />
</div>
      </div>
      </div>

    </section>
  );
};

export default React.memo(TopSelling);
