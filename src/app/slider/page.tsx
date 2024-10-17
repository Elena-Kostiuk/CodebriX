import React from "react";
import SliderHeader from "../../components/SliderComponents/SliderHeader";
import Slider from "../../components/SliderComponents/Slider";

const FastCustomComponent: React.FC = () => {
  return (
    <div className="m-[100px] max-md:m-[30px]">
      <SliderHeader />
      <Slider />
    </div>
  );
};

export default FastCustomComponent;
