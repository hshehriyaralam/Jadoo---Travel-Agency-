import Image from "next/image";
import React from "react";
import group68 from "@/public/testimonials/Group61.png";
import ArrowUp from "@/public/testimonials/Vector 2.svg";
import ArrowDown from "@/public/testimonials/Vector 3.svg";
import userImage from "@/public/testimonials/Image.png";

const Testimonials = () => {
  return (
    <section
    className="w-full  mx-auto lg:px-6 overflow-hidden  "
    >
    <div className=" max-w-[1165] h-[356px]   flex  flex-col lg:flex-row  lg:items-start  items-center justify-center  mx-auto  ">
      {/* left div */}
      <div className=" lg:p-10 p-6 mt-10">
        <p className="text-[#5E6282] font-poppins  font-semibold mb-2 text-center lg:text-left ">
          Testimonials
        </p>
        <h2 className="text-[#14183E] text-4xl  font-bold  font-volkhov  max-w-sm  text-center lg:text-left   ">
          What People Say About Us.
        </h2>

        <Image
          src={group68}
          alt="navigation"
          width={80}
          className="cursor-pointer  mt-15 lg:mx-2  mx-auto "
        />
      </div>

      {/* right  div */}
      <div className="  flex items-center  justify-center  gap-6 lg:p-10  p-2 ">
        <div>
          <Image
            src={userImage}
            alt="user-profile"
            width={60}
            className="lg:relative lg:right-10  lg:mx-0   mx-auto "
          />

          {/* first card */}
          <div className="p-4 shadow-2xl lg:w-[420px] w-[300px]  min-h-[200px] rounded-xl bg-white z-50  relative   lg:mt-0 mt-4  ">
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className="mt-12">
              <p>Mike taylor</p>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

          {/* second card */}

          <div className="p-4  bg-transparent border-2 border-gray-200  lg:w-[420px] w-[300px]  min-h-[200px] rounded-xl  relative bottom-38 lg:bottom-32  lg:left-10  z-40  opacity-50   ">
            <p className="max-w-sm">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className="mt-12">
              <p>Chris Thomas</p>
              <p>CEO of Red Button</p>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="hidden lg:flex flex-col gap-12   cursor-pointer  relative  left-30">
          <Image src={ArrowUp} alt="arrow-up" width={13} />
          <Image src={ArrowDown} alt="arrow-up" width={13} />
        </div>
      </div>
    </div>
    </section>

  );
};

export default React.memo(Testimonials);
