import React from "react";
import logoOne from "@/public/logos/logo-1.png";
import logoTwo from "@/public/logos/logo-2.png";
import logoThree from "@/public/logos/logo-3.png";
import logoFour from "@/public/logos/logo-4.png";
import logoFive from "@/public/logos/logo-5.png";
import Image from "next/image";

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
  return (
    <section className="w-full   p-6 overflow-hidden  mx-auto  my-10">
      <div
      className="max-w-[1073px]   h-[162px]   mx-auto"
      >
      <div className="flex items-center justify-center lg:gap-8 gap-4 mx-auto  flex-wrap  
      ">
        {logos?.map((logo) => (
          <div
            className={`p-4`}
            key={logo.id}
          >
            <Image alt="all-logos" src={logo.logo} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default React.memo(Logos);








