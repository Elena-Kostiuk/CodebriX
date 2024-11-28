"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../app/styles/colorHover.css";

interface LogoSVGProps {
  margin?: string; 
}
const LogoSVG: React.FC<LogoSVGProps> = ({margin}) => {
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
      className={`svg-container ${margin} pt-[1%] w-[100%] border-t-2 border-dotted border-gray-300 max-sm:pt-0`}
    >
      <div className="svg-icon w-[100%] h-[300px] max-xl:h-[250px] max-lg:h-[200px] max-md:h-[150px] max-sm:h-[100px]"></div>
    </motion.div>
  );
};

export default LogoSVG;
