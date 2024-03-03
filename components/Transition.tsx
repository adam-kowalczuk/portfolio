/**
 * React component for transitioning between screens using framer-motion animations.
 * This component renders multiple divs with different background colors and transitions them in and out.
 */
"use client";
import React from "react";
import { motion } from "framer-motion";

// Variants for the transition animation
const TransitionVariants = {
  initial: {
    y: "100%", // initial position off-screen
    height: "100%" // initial height covering the entire screen
  },
  animate: {
    y: "0%", // animate to the top of the screen
    height: "0%" // animate to a height of 0 (disappear)
  },
  exit: {
    y: ["0%", "100%"], // animate from top of screen to bottom of screen
    height: ["0%", "100%"] // animate from a height of 0 to the full screen height
  }
};

/**
 * Transition component responsible for rendering multiple divs with different background colors
 * and animating them using framer-motion library.
 */
const Transition = () => {
  return (
    <div>
      {/* First transition div */}
      <motion.div
        className="fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#2e2257]"
        variants={TransitionVariants} // Transition animation variants
        initial="initial" // Initial animation state
        exit="exit" // Animation state when exiting
        animate="animate" // Animation state when animating
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }} // Animation transition options
      />
      {/* Second transition div */}
      <motion.div
        className="fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#3b2d71]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      {/* Third transition div */}
      <motion.div
        className="fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#4b3792]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Transition;
