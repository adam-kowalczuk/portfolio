"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLinks } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Define the Navigation component
const Navigation = () => {
  // State variable to manage mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Set mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Render the navigation component
  return (
    <div className="flex justify-between items-center relative">
      {/* Hamburger icon for mobile */}
      <RxHamburgerMenu
        className="block sm:hidden cursor-pointer text-gray-200 w-full hover:text-red-800 z-[10]"
        size={24}
        onClick={toggleMenu}
      />
      {/* Dropdown menu for mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }} // Adjust the duration here (in seconds)
            className="sm:hidden absolute top-0 right-0 bg-transparent pt-[32px] text-right"
          >
            {/* Map through NavLinks array to render dropdown navigation links */}
            {NavLinks.map((nav) => (
              <Link
                key={nav.name}
                href={nav.link}
                className="block py-2 text-gray-200 text-lg hover:text-red-800"
                onClick={toggleMenu}
              >
                {nav.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Original navigation links for larger screens */}
      <div className="hidden sm:flex">
        {/* Map through NavLinks array to render original navigation links */}
        {NavLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.link}
            className="pl-4 min-w-[20%] text-gray-200 text-[24px] hover:text-red-800"
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Export the Navigation component as default
export default Navigation;
