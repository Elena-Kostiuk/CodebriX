"use client";
import React, { useState } from "react";
import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/pricingPlans/PricingPlans";
import Calculation from "@/components/pricingPlans/Calculation";

const PricingPage: React.FC = () => {
  const [highlightPlan, setHighlightPlan] = useState<number | null>(null);

  const setPlan = (value: number): void => {
    if (value <= 5000 && value > 500) {
      setHighlightPlan(1);
    } else if (value <= 500) {
      setHighlightPlan(0);
    } else {
      setHighlightPlan(2);
    }
  };

  return (
    <div className="relative px-5 max-w:[100vw] overflow-hidden max-sm:px-3">
      <Header />
      <section className="flex w-full mt-10 max-xl:flex-col  max-sm:mt-4">
        <h1 className="relative z-[1] text-[140px] tracking-tighter uppercase leading-[120px] text-neutral-900 w-[50%] max-2xl:text-[92px] max-2xl:leading-[80px] max-xl:mb-10 max-lg:text-[69px] max-lg:leading-[60px] max-md:text-[36px] max-md:leading-[36px] max-[430px]:text-[28.47px] max-[430px]:leading-[28.47px]">
          <p className="">plans &</p>
          <p className="indent-[30%]">pricing</p>
        </h1>

        <Calculation setPlan={setPlan} />
      </section>

      <PricingPlans highlightPlan={highlightPlan} />

      <section className="relative z-[2] free-area mt-40  max-lg:mt-20  max-sm:mt-10">
        <h2 className="free-area font-medium flex flex-start flex-wrap tracking-tighter indent-60 mr-[240px]  max-xl:indent-48 max-lg:indent-40 max-sm:indent-0 max-md:max-w-full tracking-tightest max-2xl:mr-0">
          Compare Plans and Features
        </h2>
        <p className="label-text absolute top-[40px] text-[14px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-xl:top-[18px] max-xl:top-[15px] max-lg:top-[12px] max-md:top-[6px]  max-sm:mt-4 max-sm:relative max-sm:top-auto  max-sm:left-auto max-sm:inline-block">
          #Сomparison sheet
        </p>
      </section>
      <Footer isMainPage={false} />
    </div>
  );
};
export default PricingPage;
