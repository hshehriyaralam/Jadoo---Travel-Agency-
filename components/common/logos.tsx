import React from "react";
import logoOne from "@/public/logos/logoOne.png";
import logoTwo from "@/public/logos/logoTwo.png";
import logoThree from "@/public/logos/logoThree.png";
import logoFour from "@/public/logos/logoFour.png";
import logoFive from "@/public/logos/logoFive.png";
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
    <div className="w-full p-6 ">
      <div className="flex items-center justify-center lg:gap-8 gap-4">
        {logos?.map((logo) => (
          <div
            // ${logo.shadow && 'shadow-b-xl'}
            className={` w-[180px] `}
            key={logo.id}
          >
            <Image alt="all-logos" src={logo.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Logos);
