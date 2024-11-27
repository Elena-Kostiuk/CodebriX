import * as React from "react";

interface PricingFeatureProps {
  feature: {
    description: string;
  };
  isLast?: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> =({
  feature,
  isLast = false,
}: PricingFeatureProps)=> {
  return (
    <div
      className={`flex flex-wrap gap-3 items-start py-3 w-full leading-8 ${
        !isLast ? "border-b border-dashed border-b-neutral-900" : ""
      } max-lg:py-2 max-md:max-w-full`}
    >
      <img
        loading="lazy"
        src="/images/checkYes.png"
        className="object-contain  shrink-0 w-8 max-xl:w-7 max-lg:w-4 max-lg:mt-[6px] max-sm:mt-[8px] aspect-square"
      />
      <div className="flex-1 shrink basis-0 max-md:max-w-full">
        {feature.description}
      </div>
    </div>
  );
}
export default PricingFeature;
