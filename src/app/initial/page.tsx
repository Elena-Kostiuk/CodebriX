import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/InfoCardComponents/Dashboard";
import IDESelector from "@/components/ide/IDESelector";
import developmentProcess1 from "../../data/developmentProcess1.json";
import developmentProcess2 from "../../data/developmentProcess2.json";
import clientRelations from "../../data/clientRelations.json";
import Screen from "@/components/Screen";
import SliderHeader from "@/components/SliderComponents/SliderHeader";
import Slider from "@/components/SliderComponents/Slider";
import  Integrations  from "@/components/integrations/Integrations";
import "../styles/screen.css";


const InitialPage: React.FC = () => {
  return (
    <div className="flex flex-col px-5  border-red-600">
      <Header />
      <HeroSection />
      <section className="relative mt-40 max-md:mt-20">
        <h2 className="flex flex-start flex-wrap tracking-tighter leading-none indent-60 mr-[240px] max-md:indent-0 max-md:max-w-full max-md:text-[40px] tracking-tightest">
          {" "}
          DevEx: Local first platform to make everything work fast
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard data={developmentProcess1} />
      </section>
      <section className="mt-[55px]">
        <h2>Local first platform to make everything work fast</h2>
        <div className="flex justify-between flex-wrap flex-row-reverse max-lg:flex-col">
         
          
          <Screen title="Outer IDE">
            <div className="list-container object-contain bg-black  w-full  pt-[20px] pl-[20px] aspect-[1.94] max-md:h-auto">
              <ol className="list-decimal text-white">
                <li>
                  &#123;&#123;currentRow<span className="yellow">.</span>
                  <span className="blue">error </span>{" "}
                  <span className="yellow">? </span>{" "}
                  <span className="green">&#39;</span>red
                  <span className="green">&#39;</span> :&#125;&#125;
                </li>
                <li>
                  (Math.abs(<span className="yellow">10000 -</span>{" "}
                </li>
                <li>
                  parseInt(currentRow.<span className="blue">utilization</span>
                  )) <span className="yellow">&lt;</span>
                </li>
                <li>
                  <span className="yellow">50 ? </span>{" "}
                  <span className="green">&#39;yellow&#39; </span>:{" "}
                  <span className="green">&#39;none&#39; </span>)&#125;&#125;
                </li>
              </ol>
            </div>
          </Screen>
          <div className=" w-[1px] ml-[20px] mr-[20px] border-r-2 border-dashed border-gray-300 max-md:hidden"></div>
          <IDESelector />
        </div>
      </section>
      <section className="relative  max-md:mt-20 mt-40 max-md:m-[30px]">
        <SliderHeader />
        <Slider  /> 
      </section>
      <section className="relative mt-40 max-md:mt-20">
        <h2 className="flex flex-start flex-wrap text-[80px] font-medium tracking-tighter leading-none  max-md:max-w-full max-md:text-[40px] tracking-tightest">
          {" "}
          <span className="indent-60 max-md:indent-0">Low-code</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2a2f97a06f3f0f8b248d41757b82fb2efc5d0517df3d89c882dca360ad292d2?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
            alt=""
            className="object-contain shrink-0 aspect-[1.61] w-[5rem] ml-10 mr-10  mb-[-15px]"
          />
          <span className="mr-7">Full-code with custom</span>
          <br />
          <span>components</span>
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard data={developmentProcess2} />
      </section>
      <section className="relative mt-40 max-md:mt-20">
      <h2>Connectors & Integrations</h2>
      <Integrations/>
      </section>
      <section className="relative mt-40 max-md:mt-20">
        <h2 className="text-[80px] font-medium tracking-tighter leading-none indent-60 max-md:indent-0 max-md:max-w-full max-md:text-[40px] tracking-tightest">
          Let us help you close the deal fast
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard data={clientRelations} />
      </section>
    </div>
  );
};

export default InitialPage;
