"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Defining a TypeScript interface for the props expected by the ProjectCard component
interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  // Using state to track whether the card is flipped and whether it's currently animating
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to handle flipping the card
  function handleFlip() {
    // If not currently animating, flip the card and set animating state to true
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  // Rendering the component
  return (
    <div
      onClick={handleFlip}
      className="w-[450px] h-[280px] rounded-md cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }} // Conditionally rotating the card based on isFlipped state
        transition={{ duration: 0.6, animationDirection: "normal" }} // Setting transition duration and direction
        onAnimationComplete={() => setIsAnimating(false)} // Callback when animation completes to set isAnimating state to false
      >
        {/* Front side of the card */}
        <div
          style={{ backgroundImage: `url(${image})` }} // Setting background image
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4" // Applying styles using Tailwind CSS classes
        >
          {/* Overlay for hover effect */}
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          {/* Text indicating more information */}
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>
        {/* Back side of the card */}
        <div
          style={{ backgroundImage: `url(${image})` }} // Setting background image
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4" // Applying styles using Tailwind CSS classes
        >
          {/* Overlay for hover effect */}
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          {/* Project title and text */}
          <div className="flex flex-col gap-20 py-3 z-[30]">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[20px]">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
