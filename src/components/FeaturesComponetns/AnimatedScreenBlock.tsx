"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Screen from "../Screen";
import featuresData from "../../data/features.json";
import "../../app/styles/features.css";

const AnimatedScreenBlock: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <div className="w-[48%] relative max-md:w-full" ref={ref}>
      {inView &&
        featuresData.map((screen, index) => (
          <div
            key={index}
            className="screen-container absolute w-full"
            style={{
              top: `${index * 165}px`,
              animationDelay: `${index * 7}s`,
            }}
          >
            <Screen title={screen.header} width="100%">
              <div
                className="relative flex items-center justify-center bg-cover bg-center border-x border-solid border-neutral-900 w-full aspect-[2/1.1] max-lg:h-auto"
                style={{ backgroundImage: "url('/images/background.png')" }}
              >
                <img
                  loading="lazy"
                  src={screen.src}
                  alt={screen.header}
                  className="object-contain w-[100%] max-w-[618px] max-md:w-full max-md:h-auto"
                />
              </div>
            </Screen>
          </div>
        ))}
    </div>
  );
};

export default AnimatedScreenBlock;
