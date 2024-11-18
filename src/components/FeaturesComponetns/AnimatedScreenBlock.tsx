"use client";
import React, { useState,useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Screen from "../Screen";
import featuresData from "../../data/features.json";
import "../../app/styles/features.css";

const AnimatedScreenBlock: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  const [offset, setOffset] = useState(165); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setOffset(180); 
      } else if (window.innerWidth < 1536) {
        setOffset(240); 
      } else {
        setOffset(165); 
      }
    };

  
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="w-[49%] relative max-md:w-full" ref={ref}>
      {inView &&
        featuresData.map((screen, index) => (
          <div
            key={index}
            className={`screen-container absolute w-full transition-all duration-500 ${
              expandedIndex === index ? "expanded" : ""
            }`}
            style={{
              top: `${index * offset}px`,
              animationDelay: `${index * 7}s`,
            }}
            onClick={() => handleExpand(index)}
          >
            <Screen
              title={screen.header}
              width="100%"
              isExpanded={expandedIndex === index}
            >
              <div
                className="relative flex items-center justify-center bg-cover bg-center border-x border-solid border-neutral-900 w-full aspect-[2/1.1] max-lg:h-auto"
                style={{ backgroundImage: "url('/images/background.png')" }}
              >
                <img
                  loading="lazy"
                  src={screen.src}
                  alt={screen.header}
                  className="object-contain w-[67.8%]"
                />
              </div>
            </Screen>
          </div>
        ))}
    </div>
  );
};

export default AnimatedScreenBlock;