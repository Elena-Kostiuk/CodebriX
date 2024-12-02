"use client";
import React, { useState } from "react";
import Slider from "react-slider";
import "../../app/styles/slider.css";

interface CalculationProps {
  setPlan: (value: number) => void;
}
const logScale = (value: number, min: number, max: number): number => {
  const minLog = Math.log(min + 1);
  const maxLog = Math.log(max + 1);
  const scale = (Math.log(value + 1) - minLog) / (maxLog - minLog);
  return scale;
};

const reverseLogScale = (scale: number, min: number, max: number): number => {
  const minLog = Math.log(min + 1);
  const maxLog = Math.log(max + 1);
  return Math.round(Math.exp(scale * (maxLog - minLog) + minLog)) - 1;
};

const Calculation: React.FC<CalculationProps> = ({ setPlan }) => {
  const [value, setValue] = useState(60);
  const min = 60;
  const max = 100000;

  const handleSliderChange = (scaleValue: number): void => {
    const realValue =
      Math.round(reverseLogScale(scaleValue, min, max) / 10) * 10;
    setValue(realValue);
   
  };

  const handleSliderAfterChange = ()=>{
    setPlan(value);
  }

  return (
    <div className="flex flex-col w-[50%] gap-1 border-l-2 border-dotted border-gray-300 px-5 pt-10 max-2xl:pt-5 max-xl:border-0 max-lg:pt-0 max-xl:w-full">
      <p className="self-start label-text">/ Based on your monthly revenue</p>
      <h3 className="mb-8 max-xl:mb-6">Estimate your spend</h3>
      <p className="label-text text-gray-300 text-nowrap">
        [ * 60 included ]
      </p>
      <div className="w-full mx-auto my-[10px] relative flex items-center">
        <div className="h-[5px] border-b border-gray-300 w-[8em]"/>
        <div className="w-full  relative">
          <div className="absolute top-[-4px] h-[12px] w-[4px] bg-black max-xl-:top-[-5px] max-sm:h-[9px] max-sm:top-[-2px]" />
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={logScale(value, min, max)}
            onChange={handleSliderChange}
            onAfterChange={handleSliderAfterChange}
            renderTrack={(props, state) => (
              <div
                {...props}
                className={`h-[5px] absolute top-1/2 -translate-y-1/2 ${
                  state.index === 0
                    ? "border-b border-black"
                    : "border-b border-dashed border-gray-400"
                }`}
              />
            )}
            renderThumb={(props) => (
              <div
                {...props}
                className="relative cursor-pointer rounded-sm w-5 h-5 bg-black top-[-7px] max-xl:h-4 max-xl:w-4 max-sm:h-3 max-sm:w-3 max-sm:top-[-5px]"
              >
                <p
                  className="label-text absolute top-full mt-5 left-1/2 -translate-x-1/2 text-sm text-neutral-900"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <span className="font-robert-trial font-medium text-[40px] max-xl:text-[28px] max-lg:text-[20px]">
                    {value}
                  </span>{" "}
                  runs/mo
                </p>
              </div>
            )}
          />
        </div>
      </div>

      <p className="label-text mt-[26px] max-xl:mt-[18px] max-md:mt-[16px]">workflow</p>
    </div>
  );
};

export default Calculation;
