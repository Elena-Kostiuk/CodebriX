
"use client";
import React from "react";

interface ScreenProps {
  title: string;
  children: React.ReactNode;
  width?: string;
  isExpanded?: boolean; 
}

const Screen: React.FC<ScreenProps> = ({
  title,
  children,
  width = "w-[48%]",
  isExpanded = false,
}) => {
 

  return (
    <section
      className={`flex overflow-hidden flex-col self-end ${width} px-3 py-2.5 bg-white border border-solid mt-5 border-neutral-900 max-md:px-2 max-md:py-1 max-lg:w-full  duration-300 ease-in-out`}
    >
      <div className="flex gap-4 justify-between items-center w-full mb-2 max-md:gap-2 max-md:mb-1 max-md:max-w-full">
        <img
          loading="lazy"
          src="/images/logoPin.svg"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square max-md:w-3 max-md:aspect-square"
        />

        <div
          className="shrink-0 self-stretch my-auto max-w-full min-w-6 h-px border border-solid bg-neutral-900 border-neutral-900 flex-grow transition-all"
          aria-hidden="true"
        />

        <h4 className="label-text flex gap-3 items-center self-stretch my-auto max-md:gap-1">
          [..] &gt; "{title}"
        </h4>

        <div
          className="shrink-0 self-stretch my-auto max-w-full min-w-6 h-px border border-solid bg-neutral-900 border-neutral-900 flex-grow transition-all"
          aria-hidden="true"
        />
         <img
          loading="lazy"
          src={isExpanded ? "/images/arrowIn.png" : "/images/arrowOut.png"}
          alt=""
          className="object-contain shrink-0 p-[1px] self-stretch my-auto w-6 aspect-square rounded-2xl border border-dashed border-gray-400 max-md:w-3 max-md:aspect-square"
        />
  
      </div>
      {children}
    </section>
  );
};

export default Screen;
