// Import necessary dependencies and components
"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// Define the Navigation component
const Navigation = () => {
  // State variables to manage routing status and previous path
  const [isRouting, setIsRouting] = useState(false); // State variable to indicate if routing is in progress
  const path = usePathname(); // Get the current browser path
  const [prevPath, setPrevPath] = useState("/"); // State variable to store the previous path

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
    <div
      style={{ left: "20%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border border-white py-7"
    >
      {/* Map through NavLinks array to render navigation links */}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
          {/* Render navigation icon */}
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

// Export the Navigation component as default
export default Navigation;
