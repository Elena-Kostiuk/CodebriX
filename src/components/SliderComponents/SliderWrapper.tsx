
import React from "react";
import TextBlock from "./TextBlock";
import Slider from "./Slider";

const SliderWrapper: React.FC = () => {
  const items = [
    { subtitle: "/ FAST", title: "Drag & Drop" },
    { subtitle: "/ NO LIMITS", title: "Custom code" },
  ];

  return (
    <section className="relative  max-md:mt-20 ml-5 mt-40">
      <div className="flex flex-wrap gap-5 justify-between self-stretch w-full  max-md:max-w-full">
        {items.map((item, index) => (
          <TextBlock key={index} subtitle={item.subtitle} title={item.title} />
        ))}
      </div>
      <Slider />
    </section>
  );
};

export default SliderWrapper;
