"use client";
import React, { useState, useEffect } from "react";
import DescriptionTypewriting from "./DescriptionTypewritin";
import featuresData from "../../data/features.json";
import "../../app/styles/features.css";

interface Feature {
  header: string;
  src: string;
  title: string;
  text: string;
}

const AnimatedCard: React.FC = () => {
  const [currentBlock, setCurrentBlock] = useState(0);
  const totalBlocks = featuresData.length;

  useEffect(() => {
    if (currentBlock < totalBlocks - 1) {
      const timer = setTimeout(() => {
        setCurrentBlock((prev) => prev + 1);
      }, 6600);

      return () => clearTimeout(timer);
    }
  }, [currentBlock, totalBlocks]);

  const progressWidth = `${((currentBlock + 1) / totalBlocks) * 100}%`;
  return (
    <div className="card-container-wrapper flex flex-col pr-5">
      <div className="progress-bar w-[102%] h-[1px] mt-5 bg-gray-300 relative mb-2">
        <div
          className="progress-bar-fill h-full bg-black transition-width duration-300"
          style={{ width: `${((currentBlock + 1) / totalBlocks) * 100}%` }}
        ></div>
      </div>
      {featuresData.map((card: Feature, index: number) => (
        <Block
          key={index}
          index={index}
          isVisible={index === currentBlock}
          fadeOut={index < currentBlock}
          card={card}
        />
      ))}
    </div>
  );
};

const Block: React.FC<{
  index: number;
  isVisible: boolean;
  fadeOut: boolean;
  card: Feature;
}> = ({ index, isVisible, fadeOut, card }) => {
  return (
    <div
      className={`card-container opasity-0 flex flex-col items-center w-full mt-10 relative max-md:mt-12 ${
        fadeOut ? "fade-out" : ""
      }`}
      style={{
        opacity: fadeOut ? 0.3 : isVisible ? 1 : 0,
        animationDelay: `${index * 7}s`,
      }}
    >
      <h4 className="mx-auto text-[14px] max-md:text-[12px]">
        [.{index + 1}.]
      </h4>
      <div className="flex flex-col w-full rounded-lg max-md:h-auto">
        <h3 className="font-medium">{card.title}</h3>
        <DescriptionTypewriting paragraphText={card.text} index={index} />
      </div>
    </div>
  );
};

export default AnimatedCard;
