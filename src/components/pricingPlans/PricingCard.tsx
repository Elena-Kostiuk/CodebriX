import React, { useEffect, useRef } from "react";
import PricingFeature from "./PricingFeature";

export interface PricingCardProps {
  plan: {
    title: string;
    subtitle: string;
    price: number;
    additionalText: string;
    features: {
      description: string;
    }[];
    ctaText: string;
    hoverStyle: string;
  };
  highlight: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, highlight }) => {
  const {
    title,
    subtitle,
    price,
    additionalText,
    features,
    ctaText,
    hoverStyle,
  } = plan;

 
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (highlight) {
      if (window.innerWidth <= 640) {
        const timer = setTimeout(() => {
          cardRef.current?.scrollIntoView({
            behavior: "smooth", 
            block: "start",
          });
        }, 1800); 

        return () => clearTimeout(timer); 
      }
    }
  }, [highlight]);

  return (
    <article
      ref={cardRef}
      className={`relative flex flex-col justify-start p-5 mx-[10px] mb-10 min-h-[885px] rounded-3xl  ${hoverStyle} ${
        highlight ? "border-[3px] sm:top-[-40px]" : "border"
      } border-solid border-neutral-900 text-neutral-900 max-lg:min-h-0  max-md:mt-5 max-md:mx-0 `}
    >
      <div className="flex flex-col w-full h-[136px] max-lg:h-[80px] max-sm:h-[70px]">
        <h3>{title}</h3>
        <p className="label-text">{subtitle}</p>
      </div>

      <div className="flex items-end self-start  mb-20 whitespace-nowrap max-lg:mb-10 max-sm:mb-5">
        <span className="font-robert-trial font-medium text-[140px] tracking-tighter uppercase leading-[120px] text-neutral-900 max-2xl:text-[92px] max-2xl:leading-[80px] max-lg:text-[69px] max-lg:leading-[60px] max-md:text-[36px] max-md:leading-[36px] max-md:pt-2 max-sm:pt-0 max-[430px]:text-[28.47px] max-[430px]:leading-[28.47px]">
          {price}
        </span>
        <span>€/mo</span>
      </div>

      <div className="flex flex-col mt-2 mb-20 w-full max-sm:mb-10">
        <p className="label-text">{additionalText}</p>
        {features.map((feature, index) => (
          <PricingFeature
            key={index}
            feature={feature}
            isLast={index === features.length - 1}
          />
        ))}
      </div>

      <button
        className="text-nowrap text-center w-[8em] px-2 py-4 mt-auto font-ibm-plex-mono font-medium tracking-wide text-white uppercase rounded-lg bg-neutral-900 hover:bg-neutral-700 active:bg-neutral-700 max-lg:py-3"
        aria-label={`${ctaText} ${title} plan`}
      >
        {ctaText}
      </button>
    </article>
  );
};

export default PricingCard;
