

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrandItem } from "./BrandItem";
import "../app/styles/brandSlider.css";

interface DATAItem {
  name: string;
  icon?: string;
  iconAlt?: string;
}

interface DATASelectorProps {
  data: DATAItem[];
}
const BrandsSlider: React.FC<DATASelectorProps> = ({ data }) => {
  const [hoverDirection, setHoverDirection] = useState<"left" | "right" | null>(
    null
  );

  return (
    <div className="relative  max-w-[49%] self-start overflow-auto scrollbar-none max-lg:max-w-full">
      <div
        className="absolute z-[2] left-0 top-0 w-[8%] h-[100%] bg-gradient-to-r from-white/95 to-white/20 cursor-pointer"
        onMouseEnter={() => setHoverDirection("left")}
        onMouseLeave={() => setHoverDirection(null)}
      ></div>

      <motion.ul
        className="flex gap-3 items-start justify-center  mt-5 mr-auto max-md:w-full"
        aria-label="brand items"
        initial={{ x: 0 }}
        animate={{
          x:
            hoverDirection === "left"
              ? "55%"
              : hoverDirection === "right"
              ? "-55%"
              : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {data.map((item, index) => (
          <BrandItem
            key={`${item.name}-${index}`}
            name={item.name}
            icon={item.icon}
            iconAlt={item.iconAlt}
          />
        ))}
      </motion.ul>

      <div
        className="absolute right-0 top-0 w-[4%] h-[100%] bg-gradient-to-r from-white/10 to-white/95 cursor-pointer"
        onMouseEnter={() => setHoverDirection("right")}
        onMouseLeave={() => setHoverDirection(null)}
      ></div>
    </div>
  );
};

export default BrandsSlider;
