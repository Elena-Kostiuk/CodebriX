"use client";
import * as React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export interface MetricCardProps {
  number: number; 
  unit?: string;
  prefixText?: string;
  prefixLetter?: string;
  description: string;
  subtitle?: string;
}

const MetricCard = ({
  number,
  unit,
  prefixText,
  prefixLetter,
  description,
  subtitle,
}: MetricCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.7 });

  return (
    <article
      ref={ref}
      className="free-area flex flex-col h-full self-start pt-1 border-l-2 border-dotted border-gray-300 
        [&:nth-child(1)]:border-l-0 pl-[15%] max-md:odd:border-l-0 max-md:odd:pl-2 max-md:mt-4 max-md:h-auto"
    >
      <div className="flex items-end self-start font-medium font-robert-trial whitespace-nowrap">
        {prefixText && (
          <span className="text-[40px] leading-[48px] max-2xl:text-[28px] max-2xl:leading-[34px] max-lg:text-[21px] max-lg:leading-[27px] max-md:text-[22px] max-md:leading-[30px] max-[430px]:text-[17.4px] max-[430px]:leading-[23.72px]">
            {prefixText}
          </span>
        )}
        {prefixLetter && (
          <span className="font-neureal-trial text-[140px] tracking-tighter leading-[120px] max-2xl:text-[92px] max-2xl:leading-[80px] max-lg:text-[69px] max-lg:leading-[60px] max-md:text-[36px] max-md:leading-[36px] max-[430px]:text-[28.47px]">
            {prefixLetter}
          </span>
        )}
        <span className="text-[140px] tracking-tighter leading-[120px] max-2xl:text-[92px] max-2xl:leading-[80px] max-lg:text-[69px] max-lg:leading-[60px] max-md:text-[36px] max-md:leading-[36px] max-[430px]:text-[28.47px]">
          {inView && (
            <CountUp start={1} end={number} duration={3} />
          )}
        </span>
        {unit && (
          <span className="text-[40px] leading-[48px] max-2xl:text-[28px] max-2xl:leading-[34px] max-lg:text-[21px] max-lg:leading-[27px] max-md:text-[22px] max-md:leading-[30px] max-[430px]:text-[17.4px] max-[430px]:leading-[23.72px]">
            {unit}
          </span>
        )}
      </div>
      <p className="mt-4 ">&gt; {description}</p>
      {subtitle && <p className="self-start mt-3 uppercase max-md:mt-1">/ {subtitle}</p>}
    </article>
  );
};

export default MetricCard;
