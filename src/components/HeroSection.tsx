import React from "react";
import TagList from "./TagList";
import EmailSignup from "./EmailSignup";
import Description from "./Description";
import DescriptionTypewriting from "./FeaturesComponetns/DescriptionTypewritin";
import Header from "./Header";
import MouseTracker from "./MouseTracker";
import VideoScreenWrapper from "./VideoScreenWrapper";

const HeroSection: React.FC = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col relative z-[2] free-area  mt-10 max-md:mt-28 ">
        <h1 className="relative z-[1] free-area inline group text-[140px] tracking-tighter uppercase leading-[120px] text-neutral-900 max-xl:text-[100px] max-xl:leading-[86px] max-md:text-[50px] max-md:leading-[42px]">
          <span className="relative z-[4] inline-block  pr-5 ">
            IT-consultants, ship{" "}
          </span>
          <span className="relative z-[3] inline-block pr-5 ">
            production-ready{" "}
          </span>
          <span className="relative z-[3] inline-block pr-5 ">
            apps&nbsp;
            <span className="font-neureal-trial lowercase">x</span>10
            faster&nbsp;
          </span>
        </h1>

        <div className="flex w-[75%] ">
          <Description
            paragraphText="Hybrid low-code &"
            cursor={false}
          />
          <DescriptionTypewriting
            paragraphText="full-code platform with the resource-based pricing model"
            index={0}
            prefix={false}
          />
        </div>

        <TagList />
        <EmailSignup />

        <DescriptionTypewriting
          paragraphText="Built by Clojure-developers for result-oriented developers"
          index={0}
          aligment="w-[50%] self-end"
          
        />

        <VideoScreenWrapper />
      </section>
      </>
  );
};

export default HeroSection;
