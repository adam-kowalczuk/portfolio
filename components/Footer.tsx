import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Socials } from "@/constants";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-[80%] xl:w-[60%] h-[100px] bg-transparent flex flex-col sm:flex-row py-4 justify-between items-center text-gray-200">
      <div className="flex flex-row gap-5 mb-2">
        {/* Mapping over Socials array to render social media icons */}
        {Socials.map((social) => (
          <Link href={social.href} target="_blank" key={social.name}>
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
              className="hover:text-red-800"
            />
          </Link>
        ))}
      </div>
      <Link
        className="hover:text-red-800"
        href="https://www.github.com/adam-kowalczuk/portfolio"
        target="_blank"
      >
        Source
      </Link>
    </div>
  );
};

export default Footer;
