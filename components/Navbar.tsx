import React from "react";
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import Navigation from "./Navigation";

// Navbar functional component
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-[80%] xl:w-[60%] h-[100px] bg-transparent flex justify-between items-center">
      {/* Navigation section */}
      <Link href="/">
        <RxHome
          size={28}
          className="text-gray-200 transition-color duration-300 hover:text-red-800"
        />
      </Link>
      {/* Render Navigation links */}
      <Navigation />
    </div>
  );
};

export default Navbar;
