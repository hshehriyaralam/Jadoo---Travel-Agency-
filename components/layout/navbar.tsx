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
      className="w-full absolute top-0 left-0  z-50 "
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
          className="lg:hidden z-50"
        >
          {open ? (
            <X className="w-7 h-7 text-black" />
          ) : (
            <Menu className="w-7 h-7 text-black" />
          )}
        </button>
      </div>
      <div
        className={`lg:hidden absolute top-0 right-0 h-screen w-[320px]   bg-white/90
        backdrop-blur-lg shadow-2xl 
        ${open ? "opacity-100  duration-700  transition-transform tranlate-x-0" : "translate-x-0 opacity-0 overflow-x-hidden"}
        `}>
        <div className="flex flex-col gap-6 mt-28 px-8">
          {navLinks.map((link) => (
            <Link
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