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
      <div className="flex flex-col gap-20 max-w-[80%] md:max-w-[60%] text-center items-center">
        {/* Title and subtitle section */}
        <div className="flex flex-col gap-4 min-w-[100%] text-center sm:text-left">
          <h1 className="font-semibold text-gray-200 text-[48px]">Skills</h1>
          <p className="text-gray-200">
            This site was created using NextJS, TypeScript, and Tailwind CSS. It
            is currently deployed via Vercel.
          </p>
        </div>
        {/* Swiper component for displaying skills */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[100%]"
        >
          {/* Mapping through skill data to create Swiper slides */}
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              {/* Image component for displaying skill logo */}
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Second Swiper for displaying skills in reverse direction */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[100%]"
        >
          {/* Mapping through skill data to create Swiper slides */}
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              {/* Image component for displaying skill logo */}
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page; // Exporting the Page component as default
