"use client";
import React from "react";
import { SkillData } from "@/constants";
import Image from "next/image";

/**
 * Page component to display skills and technologies using Swiper.
 * This component renders a full-screen page with a background image and two Swiper instances
 * for displaying skills and technologies.
 **/
const Page = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#1b1d1e]">
      <div className="flex flex-col w-full gap-[50px] max-w-[80%] xl:max-w-[60%] items-center mb-[5rem]">
        {/* Title and subtitle section */}
        <div className="flex flex-col gap-4 w-[100%] text-center sm:text-left">
          <h1 className="font-semibold text-gray-200 text-[48px]">Skills</h1>
          <p className="text-gray-200">
            This site was created using NextJS, TypeScript, and Tailwind CSS. It
            is currently deployed via Vercel.
          </p>
        </div>
        {/* Swiper component for displaying skills */}
        <div className="flex flex-row flex-wrap justify-between items-center">
          {SkillData.map((skill, index) => (
            <Image
              key={index}
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="h-[75px] p-2 transform transition-transform duration-300 hover:scale-125 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page; // Exporting the Page component as default
