"use client";
import React, { useState } from "react";
import Screen from "./Screen";
import BrandsSlider from "./BrandsSlider";
import "../app/styles/contentPanel.css";

interface ContentPanelProps {
  title: string;
  data: any[];
  reverse?: boolean;
  children: React.ReactNode;
}

const ContentPanel: React.FC<ContentPanelProps> = ({
  title,
  data,
  reverse = false,
  children,
}) => {
  const [isScreenExpanded, setIsScreenExpanded] = useState(false);

  const handleScreenClick = () => {
    setIsScreenExpanded((prev) => !prev);
  };

  return (
    <section className="relative free-area mt-40 max-lg:mt-20  max-sm:mt-10">
      <h2 className="inline-block">{title}</h2>
      <div
        className={`free-area flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        } ${
          isScreenExpanded ? "flex-wrap" : "flex-nowrap"
        } max-lg:flex-col justify-end`}
      >
        <div
          className={`${
            isScreenExpanded ? "animate-expand" : "w-[48%]"
          } transition-all duration-${isScreenExpanded ? "1000" : "0"} ease-${
            isScreenExpanded ? "in-out" : "out"
          } max-lg:w-full`}
        >
          <BrandsSlider data={data} />
        </div>

        {!isScreenExpanded && (
          <div className="w-[1px] mt-[20px] mx-[20px] border-l-2 border-dotted border-gray-300 max-md:hidden"></div>
        )}

        <div
        onClick={handleScreenClick}
          className={`${
            isScreenExpanded ? "animate-expand" : "w-[48%]"
          } transition-all duration-1000 ease-in-out max-lg:w-full max-lg:pointer-events-none`}
        >
          <Screen
            title="Preview the new table in your dashboard"
            width="w-[100%]"
            isExpanded={isScreenExpanded}
          >
            {children}
          </Screen>
        </div>
      </div>
    </section>
  );
};

export default ContentPanel;
