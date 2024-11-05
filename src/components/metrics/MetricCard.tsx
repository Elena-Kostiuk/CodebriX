
import * as React from "react";

export interface MetricCardProps {
  id: string;
  number: string;
  unit?: string;
  prefix?: string;
  description: string;
  subtitle?: string;
}

const MetricCard =({
  number,
  unit,
  prefix,
  description,
  subtitle,
}: MetricCardProps) =>{
  return (
    <article className="flex flex-col self-start h-full mt-6 border-dotted border-gray-300 
    [&:nth-child(1)]:border-l-0 [&:nth-child(1)]:p-0
    md:border-l-2  md:pl-[15%] 
    md:odd:border-l-0 md:odd:pl-0 
    xl:odd:border-l-2 xl:odd:pl-[15%]
    xl:[&:nth-child(4)]:border-l-0 xl:[&:nth-child(4)]:pl-0
    2xl:[&:nth-child(4)]:border-l-2 2xl:[&:nth-child(4)]:pl-[15%]">
      <div className="flex items-end self-start font-medium font-robert-trial whitespace-nowrap">
        {prefix && (
          <span className="text-[40px] max-md:text-[28px]">{prefix}</span>
        )}
        <span className="text-[140px] tracking-tighter leading-[120px] max-md:text-[60px] max-md:leading-[50px]">
          {number}
        </span>
        {unit && <span className="text-[40px] max-md:text-[28px]">{unit}</span>}
      </div>
      <p className="mt-4 ">&gt; {description}</p>
      {subtitle && <p className="self-start mt-3  uppercase">/ {subtitle}</p>}
    </article>
  );
}

export default MetricCard;
