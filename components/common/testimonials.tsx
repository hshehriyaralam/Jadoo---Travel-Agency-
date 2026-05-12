"use client";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import clientOne from "@/public/testimonials/clientOne.png";
import clientTwo from "@/public/testimonials/clientTwo.png";
import clientThree from "@/public/testimonials/clientThree.png";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      Image: clientOne,
      comments:
        "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed ordiverted no.”",
      name: "Mike taylor",
      address: "Lahore Pakistan",
    },
    {
      id: 2,
      Image: clientTwo,
      comments:
        "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed ordiverted no.”",
      name: "Chris Thomas",
      address: "CEO of Red Button",
    },
    {
      id: 3,
      Image: clientThree,
      comments:
        "“After going through a number of sites, I had to settle for Jadoo because honestly it was a no brainer trying someone else”",
      name: "Sarah Connor",
      address: "Globetrotter",
    },
  ];
  const variants = {
    enter: (direction: any) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: any) => ({
      zIndex: 0,
      y: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const [[card, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: any) => {
    setPage([card + newDirection, newDirection]);
  };

  const currentTestimonial = testimonials[Math.abs(card) % testimonials.length];

  return (
    <section className="w-full  mx-auto lg:px-6 overflow-hidden  ">
      <div className=" max-w-[1165] lg:h-[360px]    min-h-[300px]  flex  flex-col lg:flex-row  lg:items-start  items-center justify-center  mx-auto  ">
        {/* left div */}
        <div className=" lg:p-10 p-6 mt-10">
          <p className="text-[#5E6282]   font-semibold mb-2 text-center lg:text-left ">
            Testimonials
          </p>
          <h2 className="text-[#14183E] text-4xl  font-bold    max-w-sm  text-center lg:text-left   ">
            What People Say About Us.
          </h2>
        </div>

        <div className="  flex  lg:flex-row flex-col  lg:gap-0 gap-6  items-center  justify-center   lg:p-10  p-2 ">
          <div className="flex  flex-col items-center  justify-center  gap-6">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={card}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                transition={{
                  y: { type: "spring", stiffness: 200, damping: 20 },
                  opacity: { duration: 1.3},
                  // delay: 50,
                }}
              >
                <Image
                  src={currentTestimonial.Image}
                  alt="user-profile"
                  width={60}
                  className="lg:relative lg:right-10  lg:mx-0   mx-auto "
                />
                <div className="p-4 shadow-2xl lg:w-[420px] w-[300px]  min-h-[200px] rounded-xl bg-white z-50  relative   lg:mt-0 mt-4 cursor-pointer  transition-transform duration-500  hover:-translate-y-2  hover:shadow-2xl  text-[#5E6282]   ">
                  <p>{currentTestimonial.comments}</p>

                  <div className="mt-12">
                    <p>{currentTestimonial.name}</p>
                    <p>{currentTestimonial.address}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex  flex-row lg:flex-col  lg:gap-8 gap-4 items-center justify-center   cursor-pointer  relative lg:top-0 lg:left-30 text-[#5E6282]/80    z-50  ">
            <ChevronUp
              onClick={() => paginate(-1)}
              className={"w-6 h-6  cursor-pointer   lg:rotate-0  rotate-270 "}
            />

            <ChevronDown
              onClick={() => paginate(1)}
              className={"w-6 h-6  cursor-pointer   lg:rotate-0  rotate-270 "}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
