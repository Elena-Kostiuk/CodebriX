import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/InfoCardComponents/Dashboard";

const InitialPage: React.FC = () => {
  return (
    <div className="flex flex-col px-5  border-red-600">
      <Header />
      <HeroSection />
      <section className="relative mt-40 max-md:mt-20">
        <h2 className="text-[80px] font-medium tracking-tighter leading-none indent-60 max-md:indent-0 max-md:max-w-full max-md:text-[40px] ">
          {" "}
          DevEx: Local first platform to make
          <br />
          everything work fast
        </h2>
        <p className="absolute top-[40px] left-[8px] text-[14px] leading-[20px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          #Development process
        </p>
        <Dashboard />
      </section>
    </div>
  );
};

export default InitialPage;
