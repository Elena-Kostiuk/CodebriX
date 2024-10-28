import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/InfoCardComponents/Dashboard";
import BrandsSlider from "@/components/BrandsSlider";
import developmentProcess1 from "../../data/developmentProcess1.json";
import developmentProcess2 from "../../data/developmentProcess2.json";
import clientRelations from "../../data/clientRelations.json";
import Screen from "@/components/Screen";
import SliderHeader from "@/components/SliderComponents/SliderHeader";
import Slider from "@/components/SliderComponents/Slider";
import Integrations from "@/components/integrations/Integrations";
import "../styles/screen.css";
import ides from "../../data/ides.json";
import clients from "../../data/clients.json";
import { MetricsSection } from "@/components/metrics/MetricsSection";
import LogoSVG from "@/components/LogoSVG";

const InitialPage: React.FC = () => {
  return (
    <main className="flex flex-col px-5  border-red-600">
      <Header />
      <HeroSection />

      <section className="relative mt-40 max-md:mt-20">
        <h2 className="flex flex-start flex-wrap tracking-tighter indent-60 mr-[240px] max-md:indent-0 max-md:max-w-fulltracking-tightest max-md:mr-0">
          {" "}
          DevEx: Local first platform to make everything work fast
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:relative max-md:text-[12px] max-md:leading-[18px] max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard data={developmentProcess1} />
      </section>

      <section className="mt-[55px]">
        <h2>Local first platform to make everything work fast</h2>
        <div className="flex justify-start  flex-wrap flex-row-reverse max-lg:flex-col">
          <Screen title="Outer IDE">
            <div className="list-container object-contain bg-black  w-full  pt-[20px] pl-[20px] aspect-[1.94] text-[24px] leading-[32px] max-md:text-[18px] max-md:leading-[24px]  max-md:h-auto">
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
          <div className=" w-[1px] mt-[20px] mx-[20px] border-l-2 border-dotted border-gray-300 max-md:hidden"></div>
          <BrandsSlider data={ides} />
        </div>
      </section>

      <section className="relative  max-md:mt-20 mt-40 max-md:m-[30px]">
        <SliderHeader />
        <Slider />
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
        <Integrations />
      </section>

      <section className="relative mt-40 max-md:mt-20">
        <h2 className="font-medium tracking-tighter leading-none indent-60 max-md:indent-0 max-md:max-w-full  tracking-tightest">
          Let us help you close the deal fast
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:text-[12px] max-md:leading-[18px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard data={clientRelations} />
      </section>

      <MetricsSection />

      <section className="relative mt-40 max-md:mt-20">
        <h2>Built by the team that shipped for</h2>
        <div className="flex justify-start  flex-wrap  max-lg:flex-col">
          <Screen title="Preview the new table in your dashboard">
            <img
              loading="lazy"
              src="/images/previewTable.png"
              alt="Preview the new table in your dashboard"
              className="object-contain w-full h-auto border border-solid border-neutral-900 max-md:w-full max-md:h-auto"
            />
          </Screen>
          <div className=" w-[1px] mt-[20px] mx-[20px] border-l-2 border-dotted border-gray-300 max-md:hidden"></div>
          <BrandsSlider data={clients} />
        </div>
      </section>
    </main>
  );
};

export default InitialPage;
