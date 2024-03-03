"use client";
import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    y: "100%",
    height: "100%"
  },
  animate: {
    y: "0%",
    height: "0%"
  },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%"]
  }
};

const Transition = () => {
  return <div>Transition</div>;
};

export default Transition;
