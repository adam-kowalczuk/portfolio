"use client";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

// Defining a TypeScript interface for the props expected by the ProjectCard component
interface Props {
  image: string;
  title: string;
  text: string;
  href: string;
}

const ProjectCard = ({ image, title, text, href }: Props) => {
  // Rendering the component
  return (
    <div className="w-[337.5px] h-[230px] cursor-pointer group relative text-gray-200">
      {/* Front side of the card */}
      <div
        style={{ backgroundImage: `url(${image})` }} // Setting background image
        className="w-full h-full bg-cover bg-center border-[1px] border-gray-200 rounded-lg p-4 transition-opacity duration-[1.5s] ease-in-out group-hover:opacity-0 absolute" // Applying styles using Tailwind CSS classes
      ></div>
      {/* Back side of the card */}
      <div
        className="w-full h-full bg-purple border-[1px] border-gray-200 rounded-lg p-4 transition-opacity duration-[1.5s] ease-in-out opacity-0 group-hover:opacity-100 absolute" // Applying styles using Tailwind CSS classes
      >
        {/* Project title and text */}
        <div className="flex flex-col gap-4 py-1 z-[30]">
          <h1 className="flex flex-row items-center text-2xl font-semibold">
            {title}
            <a href={href} target="_blank">
              <RxArrowTopRight className="hover:text-red-800 font-bold ml-2" />
            </a>
          </h1>
          <p className="text-gray-200 text-[16px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
