import React from "react";
import AnimatedScreenBlock from "./AnimatedScreenBlock";
import AnimatedCard from "./AnimatedCard";
import "../../app/styles/features.css";

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
        <AnimatedCard />
        <div className="w-[1px] mt-[20px] mr-[20px] border-l-2 border-dotted border-gray-300 max-md:hidden"></div>
        <AnimatedScreenBlock />
      </div>
    </section>
  );
};

export default Features;
