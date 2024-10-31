import React from "react";
import Screen from "../Screen";
import featuresData from "../../data/features.json";
import "../../app/styles/features.css";
import AnimatedCard from "./AnimatedCard";

const Features: React.FC = () => {
 
  return (
    <section className="relative mt-40 max-md:mt-20">
      <h2 className="font-medium tracking-tighter indent-60 max-md:indent-0 max-md:max-w-full tracking-tightest">
        Everything your clients need to succeed
      </h2>
      <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:text-[12px] max-md:leading-[18px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
        #Features
      </p>
      <div className="flex w-full flex-wrap justify-start mt-10">
        <div className="flex flex-col w-[48%] min-h-[1000px] max-md:w-full">
          <AnimatedCard  />
        </div>

        <div className="w-[1px] mt-[20px] mr-[20px] border-l-2 border-dotted border-gray-300 max-md:hidden"></div>

        <div className="w-[48%] relative max-md:w-full">
          {featuresData.map((screen, index) => (
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
      </div>
    </section>
  );
};

export default Features;
