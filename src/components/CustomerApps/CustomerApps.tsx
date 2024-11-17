import React from "react";
import AppSection from "./AppSection";
import data from "../../data/useCases.json"; 

const CustomerApps = () => {
  const { leftColumnApps, rightColumnApps } = data;

  return (
    <div className="self-stretch mt-10 w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          {leftColumnApps.map((app, index) => (
            <AppSection key={index} {...app} />
          ))}
        </div>
        <div className="free-area flex flex-col ml-[6%] w-6/12 max-md:ml-0 max-md:w-full">
          {rightColumnApps.map((app, index) => (
            <AppSection key={index} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerApps;
