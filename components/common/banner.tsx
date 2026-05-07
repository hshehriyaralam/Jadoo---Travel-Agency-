import React from "react";
import { Button } from "../ui/button";
import email from "@/public/banners/Group 46.png";
import ring from "@/public/banners/Mask Group.png";
import share from "@/public/banners/Group 77.png";
import starts from "@/public/banners/Group 5.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full min-h-screen p-4">
      <div className="bg-[#DFD7F9]/20  mx-auto rounded-tl-[100px] 
       w-[80%] flex flex-col  justify-center gap-10  h-90 ">
        <Image
          src={share}
          alt="share"
          width={50}
          className=" absolute    right-34  top-826 z-50 "
        />
        <div>
          <h2 className="text-[#5E6282] font-semibold  mt-6 lg:text-[30px]  text-[15px] text-center 
           lg:max-w-[800px]   max-w-[300px]  mx-auto  ">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo  
          </h2>
        </div>

        <Image
          src={ring}
          alt="ring"
          className="   absolute  right-38  top-830 z-40"
        />
        <Image
          src={ring}
          alt="ring"
          className="absolute rotate-90 left-35  top-842"
        />

        <div className="flex  lg:flex-row flex-col items-center justify-center  gap-2  ">
          <div className="flex items-center justify-center gap-2  bg-white rounded-xl  
          lg:py-3.5 lg:px-6  px-3 py-1">
            <Image alt="email logo" src={email} className="w-full" />
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
        className="relative bottom-20  left-285"
      />
    </div>
  );
};

export default React.memo(Banner);
