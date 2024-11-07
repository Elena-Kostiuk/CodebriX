import React from "react";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/InfoCardComponents/Dashboard";
import BrandsSlider from "@/components/BrandsSlider";
import developmentProcess1 from "../../data/developmentProcess1.json";
import developmentProcess2 from "../../data/developmentProcess2.json";
import clientRelations from "../../data/clientRelations.json";
import Screen from "@/components/Screen";
import SliderWrapper from "@/components/SliderComponents/SliderWrapper";
import Integrations from "@/components/integrations/Integrations";
import "../styles/screen.css";
import ides from "../../data/ides.json";
import clients from "../../data/clients.json";
import MetricsSection from "@/components/metrics/MetricsSection";
import CustomerApps from "@/components/CustomerApps/CustomerApps";
import Footer from "@/components/Footer";
import Features from "@/components/FeaturesComponetns/Features";

const InitialPage: React.FC = () => {
  return (
    <main className="flex flex-col px-5  border-red-600">
      <HeroSection />

      <section className="relative mt-40 max-md:mt-20">
        <h2 className="flex flex-start flex-wrap tracking-tighter indent-60 mr-[240px] max-lg:indent-52 max-md:indent-0 max-md:max-w-fulltracking-tightest max-lg:mr-0">
          {" "}
          DevEx: Local first platform to make everything work fast
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px]  max-md:relative max-md:text-[12px] max-md:leading-[18px] max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard data={developmentProcess1} />
      </section>

      <section className="relative mt-40 max-md:mt-20">
        <h2>Local first platform to make everything work fast</h2>
        <div className="flex justify-start  flex-wrap flex-row-reverse max-lg:flex-col">
          <Screen title="Outer IDE">
            <div className="list-container object-contain bg-black  w-full  p-[20px] aspect-[1.94] text-[24px] leading-[32px] max-md:text-[16px] max-md:leading-[24px]  max-md:h-auto max-md:p-[16px]">
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
                  parseInt (currentRow.<span className="blue">utilization</span>
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

      <SliderWrapper />

      <section className="relative mt-36 max-lg:mt-20">
        <h2 className="font-medium tracking-tighter  max-md:max-w-full  tracking-tightest indent-60 max-lg:indent-52 max-md:indent-0">
          Low-code
          <img
            loading="lazy"
            src="/images/arrowRight.svg"
            className="inline w-[1em] h-[1em] mx-5"
          />
          Full-code with custom components
          <span className="font-ibm-plex-mono self-end ml-4 text-[24px] leading-[36px] max-lg:text-[20px] max-md:text-[18px]">
            / Flexibility / No Limits
          </span>
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard data={developmentProcess2} />
      </section>

      <Integrations />

      <section className="relative mt-40 max-md:mt-20">
        <h2 className="font-medium tracking-tighter indent-60 max-lg:indent-52 max-md:indent-0 max-md:max-w-full  tracking-tightest">
          Let us help you close the deal fast
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px]  max-md:text-[12px] max-md:leading-[18px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Client relations 
        </p>
        <Dashboard data={clientRelations} />
      </section>

      <Features />

      <MetricsSection />

      <section className="relative mt-40 max-md:mt-20">
        <h2>Built by the team that shipped for</h2>
        <div className="flex justify-start  flex-wrap  max-lg:flex-col">
          <Screen title="Preview the new table in your dashboard">
            <div
              className="relative flex items-center justify-center bg-cover bg-center border-x border-solid border-neutral-900 w-full aspect-[2/1.1] max-lg:h-auto max-lg:h-auto"
              style={{ backgroundImage: "url('/images/background.png')" }}
            >
              <img
                loading="lazy"
                src="/images/previewTable.png"
                alt="Preview the new table in your dashboard"
                className="object-contain w-[100%] max-w-[618px]  max-md:w-full max-md:h-auto"
              />
            </div>
          </Screen>
          <div className=" w-[1px] mt-[20px] mx-[20px] border-l-2 border-dotted border-gray-300 max-md:hidden"></div>
          <BrandsSlider data={clients} />
        </div>
      </section>

      <section className="relative mt-40 max-md:mt-20 flex flex-col items-start">
        <h2 className="font-medium tracking-tighter indent-60 max-lg:indent-40 max-md:indent-0  max-md:max-w-full  tracking-tightest">
          Create Interactive Customer-facing Apps
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px] max-md:text-[12px] max-md:leading-[18px] max-md:relative max-md:mt-4 max-md:top-auto  max-md:left-auto max-md:inline-block">
          #Use Cases
        </p>
        <CustomerApps />
      </section>

      <Footer />
    </main>
  );
};

export default InitialPage;
