"use client"
import React from "react";
import Image from "next/image";

import { easyData, actions } from "@/data/easyAndFast";

import backShadow from "@/public/easy/Group 589.png";
import tourist from "@/public/easy/Rectangle17.jpg";
import building from "@/public/easy/building 1.png";
import Heart from "@/public/easy/heart (6) 1.png";
import seondCardLogo from "@/public/easy/second-card.png";
import progressBar from "@/public/easy/Group 3.png";

const EasyAndFast = () => {
  return (
    <section 
      className="relative w-full overflow-hidden py-24   mx-auto ">
      <div
        className=" relative w-full max-w-[1114px] h-[492px] mx-auto px-6 flex flex-col
        lg:flex-row  items-center lg:items-start justify-between gap-y-16 gap-x-20   lg:p-6 p-3">
        <div
          className=" relative z-20 w-full max-w-[500px]">
          <p className=" font-poppins text-[#5E6282] text-[16px] font-semibold mb-3"
          >
            Easy and Fast
          </p>

          <h2
            className="font-volkhov font-bold text-[#14183E] text-3xl md:text-4xl
              lg:text-[50px] leading-tight max-w-[520px]">
            Book Your Next Trip In 3 Easy Steps
          </h2>

          <div className="flex flex-col gap-8 mt-10">
            {easyData?.map((data) => (
              <div
                key={data.id}
                className="flex items-start gap-4">
                <div className="shrink-0">
                  <Image
                    alt="data Image"
                    src={data.image}
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <div className="max-w-[330px]">
                  <p
                    className=" font-semibold text-[16px] text-[#5E6282] font-poppins"
                  >
                    {data.title}
                  </p>

                  <p
                    className="font-medium font-poppins text-[14px] leading-5 text-[#5E6282]">
                    {data.desciption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative w-full max-w-[485px] flex items-center justify-center  lg:mt-0 mt-25">
          <Image
            src={backShadow}
            alt="back-shadow"
            className="w-full  absolute  -top-40  -right-10  z-10 opacity-100 
            "
          />

          <div
            className=" relative z-20 w-full max-w-[370px] bg-white rounded-[28px] p-6 shadow-2xl
            "
          >
            <div className="relative w-full h-[170px] rounded-[24px] overflow-hidden">
              <Image
                src={tourist}
                alt="tourist"
                fill
                className="object-cover"
              />
            </div>


            <div className="mt-6 flex flex-col gap-5">
              <div>
                <p
                  className=" text-[#080809] font-poppins font-semibold text-[18px]"
                >
                  Trip To Greece
                </p>

                <p
                  className=" text-[#84829A] font-medium text-[15px] mt-1"
                >
                  14-29 June | by Robbin Joseph
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                {actions?.map((img) => (
                  <div key={img.id}>
                    <Image
                      src={img.image}
                      alt="image"
                      width={36}
                      height={36}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={building}
                    alt="building"
                    width={18}
                    height={18}
                  />

                  <p className="text-[#84829A] text-[14px]">
                    24 people going
                  </p>
                </div>

                <Image
                  src={Heart}
                  alt="heart"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          <div
            className="hidden lg:flex absolute lg:bottom-[50px] lg:right-[-60px]
              z-30 w-[263px] bg-white rounded-[20px] p-5
              items-center gap-4 shadow-2xl "
          >
           
            <div
              className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0">
              <Image
                alt="card-logo"
                src={seondCardLogo}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p
                  className="text-[#84829A] text-[12px] font-poppins font-medium"
                >
                  Ongoing
                </p>

                <p
                  className="text-[#080809] font-medium text-[16px]"
                >
                  Trip to Rome
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p
                  className="text-[13px] font-poppins font-medium">
                  <span className="text-[#5E3BE1]">
                    40%
                  </span>{" "}
                  completed
                </p>

                <Image
                  src={progressBar}
                  alt="progressbar"
                  width={156}
                  height={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(EasyAndFast);