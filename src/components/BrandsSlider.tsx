import React from "react";
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
  const repeatedData = [...data, ...data, ...data, ...data];

  return (
    <div className="slider-container mt-5 overflow-hidden  self-start max-lg:max-w-full">
      <motion.div
        className="flex gap-5"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }} 
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, 
        }}
      >
     
        {repeatedData.map((item, index) => (
          <BrandItem
            key={`${item.name}-${index}`}
            name={item.name}
            icon={item.icon}
            iconAlt={item.iconAlt}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsSlider;
