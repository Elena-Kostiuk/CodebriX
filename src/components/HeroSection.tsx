import React from "react";
import TagList from "./TagList";
import EmailSignup from "./EmailSignup";
import Description from "./Description";
import DescriptionTypewriting from "./FeaturesComponetns/DescriptionTypewritin";
import Header from "./HeaderComponents/Header";
import VideoScreenWrapper from "./VideoScreenWrapper";

const HeroSection: React.FC = () => {
  return (
    <>
      <Header />
      <section className="free-area flex flex-col relative  free-area  mt-10 max-sm:mt-4 ">
        <h1 className="relative z-[1] free-area inline group text-[140px] tracking-tighter uppercase leading-[120px] text-neutral-900 max-2xl:text-[92px] max-2xl:leading-[80px] max-lg:text-[69px] max-lg:leading-[60px] max-md:text-[36px] max-md:leading-[36px] max-[430px]:text-[28.47px] max-[430px]:leading-[28.47px]">
          <span className="relative z-[4] inline-block  pr-5 ">
            IT-consultants, ship{" "}
          </span>
          <br />
          <span className="relative z-[3] inline-block pr-5 ">
            production-ready{" "}
          </span>
          <br />
          <span className="relative z-[3] inline-block pr-5 ">
            apps&nbsp;
            <span className="font-neureal-trial lowercase">x</span>10
            faster&nbsp;
          </span>
        </h1>

        <div className="relative flex w-[65%] min-h-[2.2em] max-xl:w-[80%] max-md:w-full ">
          <div className="absolute top-0 left-0">
            <Description paragraphText="Hybrid low-code &" cursor={false} />
          </div>
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
          aligment="w-[50%] min-h-[1.4em] self-end max-lg:self-start max-lg:w-full"
        />

        <VideoScreenWrapper />
      </section>
    </>
  );
};

export default HeroSection;
