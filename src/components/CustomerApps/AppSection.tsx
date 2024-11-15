"use client";

import React, { useState } from 'react';

export interface AppSectionProps {
  title: string;
  features: string[];
  counter: string;
  isClose: boolean;
}

const AppSection = ({ title, features, counter, isClose }: AppSectionProps) =>  {
  const [isExpanded, setIsExpanded] = useState(!isClose);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <article className="flex flex-col w-full pt-10 max-md:mt-3 max-md:max-w-full max-md:pt-0">
      <div className="flex flex-wrap gap-5 justify-between items-end max-md:max-w-full">
        <h3 className="max-md:w-[50%]">
          {title}
        </h3>
        <button
          className="self-start mt-3.5"
          aria-label={isExpanded ? 'expanded' : 'collapsed'}
          onClick={toggleExpand}
        >
          [ {isExpanded ? '-' : '+'} ]
        </button>
      </div>

    
      {isExpanded && (
        <>
        <span className="label-text self-center mt-4">
        {counter}
      </span>
        
        <ul className="self-start mt-3 max-md:max-w-full">
          {features.map((feature, index) => (

            <li key={index} className="list-none">
              &gt; {feature}
            </li>
          ))}
        </ul>
        </>
      )}

      <div className="shrink-0 mt-5 h-px border-b-2 border-dotted border-gray-300 max-md:max-w-full" role="separator" />
    </article>
  );
}

export default AppSection