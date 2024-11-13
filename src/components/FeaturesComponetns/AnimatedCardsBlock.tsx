"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
  const [visibleBlocks, setVisibleBlocks] = useState<number[]>([0]);
  const totalBlocks = featuresData.length;

  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  useEffect(() => {
    if (inView) {
      setVisibleBlocks([0]);
    }
  }, [inView]);

  useEffect(() => {
    if (inView && visibleBlocks.length < totalBlocks) {
      const timer = setTimeout(() => {
        setVisibleBlocks((prev) => [...prev, prev.length]);
      }, 7100);

      return () => clearTimeout(timer);
    }
  }, [inView, visibleBlocks, totalBlocks]);

  const progressWidth = `${(visibleBlocks.length / totalBlocks) * 100}%`;

  return (
    <div
      ref={ref}
      className=" flex flex-col pr-5  w-[48%] min-h-[1000px] max-md:w-full"
    >
      <div className="progress-bar w-[102%] h-[1px] mt-5 bg-gray-300 relative mb-2">
        <div
          className="progress-bar-fill h-full bg-black transition-width duration-300"
          style={{ width: progressWidth }}
        ></div>
      </div>
      {inView &&
        featuresData.map((card, index) => {
          const isVisible =
            visibleBlocks.includes(index) || (index === 0 && inView);
          const fadeOut = index < visibleBlocks[visibleBlocks.length - 1];

          const opacity = isVisible ? 1 : fadeOut ? 0.3 : 0;

          return (
            <Block
              key={index}
              index={index}
              fadeOut={fadeOut}
              card={card}
              opacity={opacity}
              animationDelay={fadeOut ? "0s" : `${index * 7}s`}
            />
          );
        })}
    </div>
  );
};

const Block: React.FC<{
  index: number;
  fadeOut: boolean;
  card: Feature;
  opacity: number;
  animationDelay: string;
}> = ({ index, fadeOut, card, opacity, animationDelay }) => {
  return (
    <div
      className={`card-container flex flex-col items-center w-full mt-10 relative max-md:mt-12 ${
        fadeOut ? "fade-out" : ""
      }`}
      style={{
        opacity: opacity,
        animationDelay: animationDelay,
      }}
    >
      <h4 className="label-text mx-auto">
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
