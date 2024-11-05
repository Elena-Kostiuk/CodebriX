"use client";

import React from "react";
import Vector from "/public/images/Vector.svg";
import "../app/styles/colorHover.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LogoSVG: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
      className="svg-container mt-[8%] py-[2%] w-[100%] border-t-2 border-dotted border-gray-300"
    >
      <Vector className="svg-icon w-[100%]" />
    </motion.div>
  );
};

export default LogoSVG;
