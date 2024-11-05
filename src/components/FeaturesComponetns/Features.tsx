import React from "react";
import "../../app/styles/features.css";
import FeaturesBlocksWrapper from "./FeaturesBlocksWrapper";

const Features: React.FC = () => {
  return (
    <section className="relative mt-40 max-md:mt-20">
      <h2 className="font-medium tracking-tighter indent-60 max-lg:indent-40 max-md:indent-0 max-md:max-w-full tracking-tightest">
        Everything your clients need to succeed
      </h2>
      <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px]  max-md:text-[12px] max-md:leading-[18px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
        #Features
      </p>
      <FeaturesBlocksWrapper />
    </section>
  );
};

export default Features;
