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
      <section className="relative  mt-10 max-md:mt-28 ">
        <h1 className="group text-[140px] tracking-tighter uppercase leading-[120px] text-neutral-900 max-xl:text-[100px] max-xl:leading-[85px] max-md:text-[50px] max-md:leading-[42px]">
          <span className="relative z-[4] inline-block  pr-5 group-hover:bg-[#AFEDFF] bg-clip-content transition-colors duration-300">
            IT-consultants, ship&nbsp;{" "}
          </span>
          <span className="inline-block pr-5 group-hover:bg-[#AFEDFF] transition-colors duration-300">
            production-ready{" "}
          </span>
          <span className="inline-block pr-5 group-hover:bg-[#AFEDFF] transition-colors duration-300">
            apps x10 faster&nbsp;
          </span>
        </h1>
        <Description paragraphText="Hybrid low-code & full-code platform with the resource-based pricing model" />

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
