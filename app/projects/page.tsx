"use client";
import React from "react";
import { Projects } from "@/constants";
import ProjectCard from "@/components/ProjectCard";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#1b1d1e] text-gray-200">
      <div className="flex flex-col gap-[50px] max-w-[80%] xl:max-w-[60%] items-center justify-center mb-[5rem] w-full h-full">
        <div className="flex flex-col gap-4 w-[100%] text-center sm:text-left">
          <h1 className="font-semibold text-[48px]">Projects</h1>
        </div>
        {/* Mobile/small screen project links */}
        <div className="flex flex-col sm:flex-row lg:hidden gap-4 sm:w-full">
          {Projects.map((project, index) => (
            <a href={project.href} target="_blank" key={index}>
              <h1 className="flex flex-row items-center text-2xl font-semibold">
                {project.title}
              </h1>
            </a>
          ))}
        </div>
        {/* Flex layout with maximum width and height */}
        <div className="hidden lg:flex flex-col sm:flex-row gap-5 max-w-[100%]">
          {/* Mapping over the Projects array and rendering a ProjectCard component for each project */}
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
