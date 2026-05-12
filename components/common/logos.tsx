"use client"
import React from "react";
import logoOne from "@/public/logos/logo-1.png";
import logoTwo from "@/public/logos/logo-2.png";
import logoThree from "@/public/logos/logo-3.png";
import logoFour from "@/public/logos/logo-4.png";
import logoFive from "@/public/logos/logo-5.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";


const Logos = () => {
  const logos = [
    {
      id: 1,
      logo: logoOne,
      shadow: false,
    },
    {
      id: 2,
      logo: logoTwo,
      shadow: false,
    },
    {
      id: 3,
      logo: logoThree,
      shadow: true,
    },
    {
      id: 4,
      logo: logoFour,
      shadow: false,
    },
    {
      id: 5,
      logo: logoFive,
      shadow: false,
    },
  ];


  const images = [
    logoOne,
    logoTwo,
    logoThree,
    logoFour,
    logoFive,
    
  ]
  return (
    <section className="w-full   p-6 overflow-hidden  mx-auto  my-10  ">
      <div className="mx-auto   lg:w-[2000px]  w-[2100px]   ">
      <div  className="overflow-hidden">
      <Marquee
      delay={5}
      pauseOnHover={true}
      speed={250}>
         {[ ...images,  ...images,].map((image:any, index:number) => {
          return <Image width={200} height={200} alt={`marqueImg${index}`}
             className="object-contain pr-20   cursor-pointer" src={image} key={index} />
        })}
      </Marquee>
      </div>
      </div>
    </section>
  );
};

export default React.memo(Logos);








