"use client";
import React from "react";
import { Projects } from "@/constants";
import ProjectCard from "@/components/ProjectCard";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      {/* Grid layout with maximum width and height */}
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {/* Mapping over the Projects array and rendering a ProjectCard component for each project */}
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
