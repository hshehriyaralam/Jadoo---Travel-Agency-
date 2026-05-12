 "use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/hero/Logo.webp";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      text: "Destinations",
      link: "/",
      border: false,
    },
    {
      id: 2,
      text: "Hotels",
      link: "/",
      border: false,
    },
    {
      id: 3,
      text: "Flight",
      link: "/",
      border: false,
    },
    {
      id: 4,
      text: "Booking",
      link: "/",
      border: false,
    },
    {
      id: 5,
      text: "Login",
      link: "/",
      border: false,
    },
    {
      id: 6,
      text: "SignUp",
      link: "/",
      border: true,
    },
  ];

  return (
    <nav
      className="w-full lg:absolute  sticky  lg:bg-transparent  bg-white  top-0 left-0  z-50  lg:py-0 py-0.1"
    >
      <div className=" w-full max-w-[1160px] mx-auto px-6 lg:px-8 h-[40px] py-10
    flex items-center justify-between  ">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            className="object-contain"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.link}>
              <p
                className={`text-[#212832] font-semibold cursor-pointer transition
                hover:text-orange-500 px-3 py-1
                ${link.border ? "border border-[#212832] rounded-md hover:bg-[#212832] hover:text-white" : "" }`}
              >
                {link.text}
              </p>
            </Link>
          ))}

          <div className="flex items-center gap-1 font-semibold cursor-pointer group">
            <p>EN</p>

            <ChevronDown
              className="w-5 h-5 transition duration-300 group-hover:rotate-180"
            />
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden z-50  cursor-pointer "
        >
          {/* {open ? (
            <X className="w-7 h-7 text-black   mt-34" />
          ) : (
            <Menu className="w-7 h-7 text-black" />
          )} */}

          {!open && (
            <Menu className="w-7 h-7 text-black  hover:text-orange-500   " />
          )}
        
        </button>

         
      </div>
      <div
        className={`lg:hidden absolute top-18 right-0 min-h-auto pb-10 w-full   bg-white
        backdrop-blur-lg shadow-2xl  overflow-x-hidden   border-none  
        ${open ? " transition-transform -tranlate-y-0" : "-translate-y-150  "}
        duration-500 
        `}>
            <button
          onClick={() => setOpen(false)}
          className="lg:hidden z-50  cursor-pointer "
        >
           <X className="w-7 h-7 text-black  absolute  right-4 top-4 hover:text-orange-500" />
        </button>
        <div className="flex flex-col gap-6 mt-14 px-8">
          {navLinks.map((link) => (
            <Link
            className="max-w-30 "
              key={link.id}
              href={link.link}
              onClick={() => setOpen(false)}
            >
              <p
                className={`text-lg font-semibold text-[#212832] transition
                hover:text-orange-500 `}
              >
                {link.text}
              </p> 
            </Link>
          ))}
          <div className="flex items-center gap-2 font-semibold cursor-pointer">
            <p>EN</p>
            <ChevronDown className="w-5 h-5" />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);