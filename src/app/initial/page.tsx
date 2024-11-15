import React from "react";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/InfoCardComponents/Dashboard";
import developmentProcess1 from "../../data/developmentProcess1.json";
import developmentProcess2 from "../../data/developmentProcess2.json";
import clientRelations from "../../data/clientRelations.json";
import SliderWrapper from "@/components/SliderComponents/SliderWrapper";
import Integrations from "@/components/integrations/Integrations";
import "../styles/screen.css";
import ides from "../../data/ides.json";
import clients from "../../data/clients.json";
import MetricsSection from "@/components/metrics/MetricsSection";
import CustomerApps from "@/components/CustomerApps/CustomerApps";
import Footer from "@/components/Footer";
import Features from "@/components/FeaturesComponetns/Features";
import MouseTracker from "@/components/MouseTracker";
import ContentPanel from "@/components/ContentPanel";

const InitialPage: React.FC = () => {
  return (
    <MouseTracker>
      <HeroSection />

      <section className="relative z-[2] free-area mt-40 max-md:mt-20">
        <h2 className="free-area font-medium flex flex-start flex-wrap tracking-tighter indent-60 mr-[240px] max-lg:indent-52 max-md:indent-0 max-md:max-w-full tracking-tightest max-lg:mr-0">
          {" "}
          DevEx: Local first platform to make everything work fast
        </h2>
        <p className="label-text absolute top-[40px] left-[8px] text-[14px]  gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px]  max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard data={developmentProcess1} />
      </section>
      <ContentPanel
        title="Local first platform to make everything work fast"
        data={ides}
        reverse={false}
      >
        <div className="list-container object-contain bg-black  w-full  p-[20px] aspect-[1.94] text-[24px] leading-[32px] max-md:text-[16px] max-md:leading-[24px] max-sm:text-[12px] max-sm:leading-[18px]  max-md:h-auto max-md:p-[16px]">
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
      </ContentPanel>

      <SliderWrapper />

      <section className="relative free-area mt-36 max-lg:mt-20">
        <h2 className="free-area font-medium tracking-tighter  max-md:max-w-full  tracking-tightest indent-60 max-lg:indent-52  max-md:indent-0">
          Low-code
          <img
            loading="lazy"
            src="/images/arrowRight.svg"
            className="inline w-[1em] h-[1em] mx-5"
          />
          Full-code with custom components
          <span className="font-ibm-plex-mono self-end ml-4 text-[0.4em] font-normal">
            / Flexibility / No Limits
          </span>
        </h2>
        <p className="label-text  absolute top-[40px] left-[8px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard data={developmentProcess2} />
      </section>

      <Integrations />

      <section className="relative free-area mt-40 max-md:mt-20">
        <h2 className="free-area font-medium tracking-tighter indent-60 max-lg:indent-52  max-md:indent-0 max-md:max-w-full  tracking-tightest">
          Let us help you close the deal fast
        </h2>
        <p className="label-text  absolute top-[40px] left-[8px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Client relations
        </p>
        <Dashboard data={clientRelations} />
      </section>

      <Features />

      <MetricsSection />
      <ContentPanel
        title="Built by the team that shipped for"
        data={clients}
        reverse={true}
      >
        <div
          className="relative flex items-center justify-center bg-cover bg-center border-x border-solid border-neutral-900 w-full aspect-[2/1.1] max-lg:h-auto max-lg:h-auto"
          style={{ backgroundImage: "url('/images/background.png')" }}
        >
          <img
            loading="lazy"
            src="/images/preview6.png"
            alt="Preview the new table in your dashboard"
            className="object-contain w-[67.8%]"
          />
        </div>
      </ContentPanel>

      <section className="relative free-area mt-40 max-md:mt-20 flex flex-col items-start">
        <h2 className="inline-block font-medium tracking-tighter indent-60 max-lg:indent-52 max-md:indent-0  max-md:max-w-full  tracking-tightest">
          Create Interactive Customer-facing Apps
        </h2>
        <p className="label-text absolute top-[40px] left-[8px]  gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px]  max-md:relative max-md:mt-4 max-md:top-auto  max-md:left-auto max-md:inline-block">
          #Use Cases
        </p>
        <CustomerApps />
      </section>

      <Footer />
    </MouseTracker>
  );
};

export default InitialPage;
