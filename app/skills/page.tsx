"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

/**
 * Page component to display skills and technologies using Swiper.
 * This component renders a full-screen page with a background image and two Swiper instances
 * for displaying skills and technologies.
 **/
const Page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#1b1d1e]">
      <div className="flex flex-col gap-[50px] max-w-[80%] md:min-w-[60%] text-center items-center">
        {/* Title and subtitle section */}
        <div className="flex flex-col gap-4 min-w-[100%] text-center sm:text-left">
          <h1 className="font-semibold text-gray-200 text-[48px]">Skills</h1>
          <p className="text-gray-200">
            This site was created using NextJS, TypeScript, and Tailwind CSS. It
            is currently deployed via Vercel.
          </p>
        </div>
        {/* Swiper component for displaying skills */}
        <div className="flex flex-row flex-wrap justify-center items-center">
          {SkillData.map((skill, index) => (
            <Image
              key={index}
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              // className={`mb-4 h-[70px] ${
              //   index === 5 || index === 11 ? "" : "mr-[6rem]"
              // }`}
              className="h-[80px] p-3 sm:p-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page; // Exporting the Page component as default
