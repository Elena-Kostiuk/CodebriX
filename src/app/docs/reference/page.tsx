import React from "react";
import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/Footer";
import DescriptionTypewriting from "@/components/FeaturesComponetns/DescriptionTypewritin";
import DocsNavCards from "@/components/referencePageComponents/DocsNavCards";
import HelpSection from "@/components/referencePageComponents/HelpSection";

const ReferencePage: React.FC = () => {
  return (
    <div className="relative px-5 max-w:[100vw] overflow-hidden max-sm:px-3">
      <Header />
      <div className="flex flex-col w-[70%]">
        <section className="flex w-full mt-10 flex-col  max-sm:mt-4">
          <h1 className="relative z-[1] text-[140px] tracking-tighter uppercase leading-[120px] max-2xl:text-[92px] max-2xl:leading-[80px] max-xl:mb-10 max-lg:text-[69px] max-lg:leading-[60px] max-md:text-[36px] max-md:leading-[36px] max-[430px]:text-[28.47px] max-[430px]:leading-[28.47px]">
            Apps reference
          </h1>
          <DescriptionTypewriting
            paragraphText="Reference documentation for CodebriX Apps"
            index={0}
            prefix={true}
            aligment="justify-start my-5"
          />
          <p>
            Detailed reference information, such as API specifications,
            configuration options, and command descriptions.
          </p>
        </section>
        <DocsNavCards />
        <HelpSection />
      </div>
      <Footer isMainPage={false} />
    </div>
  );
};
export default ReferencePage;
