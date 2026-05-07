"use client";
import React from "react";
import { categoriesData } from "@/data/categories";
import Image from "next/image";
import Rectangle from "@/public/category/Rectangle.png";
import decore from "@/public/category/sideDecore.png";


const Category = () => {

  return (
    <section className="w-full  p-6 ">
         <Image  
        src={decore}
        width={100}
        alt="side-decore"
        className=" hidden lg:block absolute  right-10"   
        />
      <div className="flex flex-col items-center justify-center  gap-6">
      
        
        <div className="flex flex-col  items-center justify-center gap-1  ">
          <p className="text-[#5E6282] uppercase  font-poppins font-semibold  text-md  ">
            Category
          </p>
          <h2 className="text-[#14183E] font-volkhov font-bold text-4xl   text-center ">
            We Offer Best Services
          </h2>
        </div>

       

        {/* Cards */}
        <div className="flex  lg:flex-row flex-col  items-center justify-center p-4 gap-6    z-50 lg:mt-10  mt-5">
          {categoriesData?.map((cat) => (
            <div
              key={cat.id}
              className={`rounded-3xl  w-[250px] h-[250px]  bg-white   z-40 flex flex-col items-center justify-center  p-4   gap-3 ${cat.shdow && "shadow-xl "}`}
            >
              <div>
                <Image
                  src={cat.image}
                  width={cat.imageWidth}
                  // height={60}
                  alt="cat-logo"
                  className=""
                />
              </div>
              <div>
                <p
                  className={`text-[#1E1D4C] font-medium   text-[18px] text-center mb-2 
                            ${cat.shdow ? "" : "mt-4"}
                            `}
                >
                  {cat.titile}
                </p>
                <p className="text-[#50525e] text-[15px]   text-center  max-w-[160px]  ">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Image
          src={Rectangle}
          className="hidden lg:block  relative  z-30   right-58  bottom-22 "
          width={70}
          height={70}
          alt="Sqaure"
        />
      </div>
    </section>
  );
};

export default React.memo(Category);
