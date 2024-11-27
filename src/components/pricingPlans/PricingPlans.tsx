"use client"
import React from "react";
import PricingCard  from "./PricingCard";
import pricingCards from "../../data/pricingCards.json";

interface PricingPlansProps {
  highlightPlan: number | null;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ highlightPlan }) => {

  
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1 mt-48 max-xl:mt-20 max-md:mt-10">
      {pricingCards.map((plan, index) => (
        <PricingCard key={index} plan={plan} highlight={index === highlightPlan} />
      ))}
    </section>
  );
}
export default PricingPlans