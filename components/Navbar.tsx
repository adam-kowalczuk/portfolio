import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Socials } from "@/constants";
import { RxHome } from "react-icons/rx";

// Navbar functional component
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      {/* Navigation section */}
      <div className="flex flex-row gap-3 items-center">
        {/* Logo */}
        <div className="relative">
          <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        {/* Site title */}
        <h1 className="text-white text-[25px] font-semibold">Adam Kowalczuk</h1>
        <Link href="/">
          {/* <a style={{ textDecoration: "none", color: "inherit" }}> */}
          <RxHome size={32} className="text-white" />
          {/* </a> */}
        </Link>
      </div>

      {/* Social media icons */}
      <div className="flex flex-row gap-5 mb-2">
        {/* Mapping over Socials array to render social media icons */}
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
