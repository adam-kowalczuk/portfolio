import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 z-[40] w-[80%] xl:w-[60%] h-[100px] bg-transparent flex justify-between items-center text-gray-200">
      <Link
        href="https://www.github.com/adam-kowalczuk/portfolio"
        target="_blank"
      >
        Source
      </Link>
    </div>
  );
};

export default Footer;
