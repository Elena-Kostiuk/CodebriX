"use client";

import React, { useEffect, useState } from "react";
import AnimatedScreenBlock from "./AnimatedScreenBlock";
import AnimatedCard from "./AnimatedCardsBlock";
import featuresData from "../../data/features.json";
import Screen from "../Screen";
import Card from "../InfoCardComponents/Card";

const FeaturesBlocksWrapper = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    if (typeof window !== "undefined") {
      handleResize(); // Визначення ширини на початковому рендері
      setIsInitialized(true); // Позначаємо, що початковий рендер завершено
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Якщо ширина ще не ініціалізована, нічого не рендеримо
  if (!isInitialized) {
    return null;
  }

  return (
    <>
      {isDesktop ? (
        <div className="flex w-full flex-wrap justify-start mt-10">
          <AnimatedCard />
          <div className="w-[1px] mt-[20px] mr-[26px] border-l-2 border-dotted border-gray-300 max-2xl:mr-[22px] max-xl:mr-[17px] max-md:hidden"></div>
          <AnimatedScreenBlock />
        </div>
      ) : (
        <div className="flex w-full flex-col justify-start">
          {featuresData.map((item, index) => (
            <div key={index} className="flex flex-col ">
              <h4 className="label-text mx-auto mt-8">[.{index + 1}.]</h4>
              <Card
                number={index + 1}
                title={item.title}
                descriptionText={item.text}
                className="flex flex-col w-full mb-5 rounded-lg max-md:min-h-0"
              />
              <Screen title={item.header} width="w-full">
                <div
                  className="relative flex items-center justify-center bg-cover bg-center border-x border-solid border-neutral-900 w-full aspect-[2/1.1] max-lg:h-auto max-lg:h-auto"
                  style={{ backgroundImage: "url('/images/background.png')" }}
                >
                  <img
                    loading="lazy"
                    src={item.src}
                    alt={item.header}
                    className="object-contain w-[67.8%]"
                  />
                </div>
              </Screen>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturesBlocksWrapper;
