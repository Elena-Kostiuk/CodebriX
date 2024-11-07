import React from "react";
import TagList from "./TagList";
import EmailSignup from "./EmailSignup";
import Description from "./Description";
import Header from "./Header";
import MouseTracker from "./MouseTracker";
import VideoScreenWrapper from "./VideoScreenWrapper";


const HeroSection: React.FC = () => {
  return (
    <MouseTracker>
      <Header />
      <section className="relative z-[2] free-area  mt-10 max-md:mt-28 ">
        <h1 className="relative z-[1] inline group text-[140px] tracking-tighter uppercase leading-[120px] text-neutral-900 max-xl:text-[100px] max-xl:leading-[86px] max-md:text-[50px] max-md:leading-[42px]">
          <span className="relative z-[4] inline-block  pr-5 group-hover:bg-[#AFEDFF] border-b-2  border-b-transparent group-hover:border-b-[#AFEDFF] box-border transition-colors duration-300">
            IT-consultants, ship{" "}
          </span>
          <span className="relative z-[3] inline-block pr-5 group-hover:bg-[#AFEDFF] border-b-2  border-b-transparent group-hover:border-b-[#AFEDFF] box-border transition-colors duration-300">
            production-ready{" "}
          </span>
          <span className="relative z-[3] inline-block pr-5 group-hover:bg-[#AFEDFF]  border-t-2  border-t-transparent group-hover:border-t-[#AFEDFF] box-border transition-colors duration-300">
            apps x10 faster&nbsp;
          </span>
        </h1>
        <Description paragraphText="Hybrid low-code & full-code platform with the resource-based pricing model" width="w-[63%]" />

        <TagList />
        <EmailSignup />

        <Description
          paragraphText="Built by Clojure-developers for result-oriented developers"
          aligment="justify-end" width="w-[50%]"
        />

        <VideoScreenWrapper />
      </section>
    </MouseTracker>
  );
};

export default HeroSection;
