import React from "react";
import { easyData, actions } from "@/data/easyAndFast";
import backShadow from "@/public/easy/Group 589.png";
import tourist from "@/public/easy/Rectangle17.jpg";
import Image from "next/image";
import building from "@/public/easy/building 1.png";
import Heart from "@/public/easy/heart (6) 1.png";
import seondCardLogo from "@/public/easy/second-card.png";
import progressBar from "@/public/easy/Group 3.png";

const EasyAndFast = () => {
  return (
    <section className="w-full  my-10   ">
      <div className="flex p-6  lg:flex-row flex-col lg:items-start items-center   w-full  justify-center gap-x-20  gap-y-4  ">
        {/* left div */}
        <div className=" p-6  ">
          <p className="font-poppins text-[#5E6282] text-[16px] font-semibold mb-2">
            Easy and Fast
          </p>
          <h2 className="font-volkhov font-bold  text-4xl  text-[#14183E] max-w-sm ">
            Book Your Next Trip In 3 Easy Steps
          </h2>

          <div className="py-4   flex flex-col gap-5  my-4  ">
            {easyData?.map((data) => (
              <div className="flex  items-center gap-4" key={data.id}>
                <div>
                  <Image alt="data Image" src={data.image} width={50} />
                </div>

                <div className="text-[#5E6282]   max-w-[300px]">
                  <p className="font-semibold text-[16x]  font-poppins">
                    {data.title}
                  </p>
                  <p className="font-medium font-poppins  text-[14px]">
                    {data.desciption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right div */}
        <div className="p-10  ">
          <Image
            src={backShadow}
            width={500}
            // height={400}
            alt="back-shadow"
            className="hidden lg:block absolute lg:left-190 z-30  lg:top-420    "
          />

          <div className="bg-white  relative   w-80 min-h-[120px]   p-6   rounded-3xl  shadow-xl  pb-10   z-50 ">
            {/* Image div */}
            <div className="  w-full  bg-white  ">
              <Image className="w-full " src={tourist} alt="tourist" />
            </div>

            <div className="bg-white w-full  flex  flex-col gap-4    ">
              <div className="mt-4">
                <p className="text-[#080809]  font-poppins font-semibold  ">
                  Trip To Greece
                </p>
                <p className="text-[#84829A] font-medium text-[15px] ">
                  14-29 June| by Robbin joseph
                </p>
              </div>

              <div className="flex  items-center gap-x-4  bg-white">
                {actions?.map((img) => (
                  <div key={img.id}>
                    <Image src={img.image} alt="image" />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between   bg-white  mx-2">
                <div className="flex gap-4   bg-white ">
                  <Image src={building} alt="building" />
                  <p className="text-[#84829A]  text-[14px] ">24 people going</p>
                </div>
                <Image src={Heart} alt="building" />
              </div>
            </div>
          </div>

          {/* seond card */}
          <div
            className=" hidden w-60 py-4 bg-white  lg:flex  items-center gap-3 justify-center   rounded-2xl 
          relative lg:left-48 lg:bottom-45   lg:shadow-xl shadow-2xl z-50"
          >
            <div className=" w-12 h-12   rounded-full bg-white ">
              <Image
                alt="card-logo"
                src={seondCardLogo}
                className="w-full rounded-full  h-full"
              />
            </div>

            <div className=" bg-white">
              <div className=" bg-white">
                <p className="text-[#84829A] text-[12px] font-poppins  font-medium">
                  Ongoing
                </p>
                <p className="text-[#080809] font-medium text-[14px]">
                  Trip to rome
                </p>
              </div>

              <div className=" bg-white">
                <p className="text-[13px]  font-poppins font-medium ">
                  {" "}
                  <span className="text-[#5E3BE1]">40% </span>completed
                </p>
                <Image src={progressBar} alt="progressbar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(EasyAndFast);
