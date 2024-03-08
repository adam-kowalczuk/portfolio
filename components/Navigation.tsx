"use client";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Transition from "./Transition";

// Define the Navigation component
const Navigation = () => {
  // State variables to manage routing status and previous path
  const [isRouting, setIsRouting] = useState(false); // State variable to indicate if routing is in progress
  const [prevPath, setPrevPath] = useState("/"); // State variable to store the previous path
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname(); // Get the current browser path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to detect change in path and set isRouting to true
  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  // Effect to handle routing animation and set isRouting to false after animation
  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200); // Set timeout for 1200 milliseconds to mimic routing animation
      return () => clearTimeout(timeout); // Cleanup function to clear timeout
    }
  }, [isRouting]);

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

      {isRouting && <Transition />}
    </div>
  );
};

// Export the Navigation component as default
export default Navigation;
