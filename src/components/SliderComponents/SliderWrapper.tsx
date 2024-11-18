
import React from "react";
import TextBlock from "./TextBlock";
import Slider from "./Slider";

const SliderWrapper: React.FC = () => {
  const items = [
    { subtitle: "/ FAST", title: "Drag & Drop" },
    { subtitle: "/ NO LIMITS", title: "Custom code" },
  ];

  return (
    <section className="relative free-area ml-5 mt-40  max-lg:mt-20 max-sm:mt-10">
      <div className="free-area flex flex-wrap gap-5 justify-between self-stretch w-full  max-md:max-w-full">
        {items.map((item, index) => (
          <TextBlock key={index} subtitle={item.subtitle} title={item.title} />
        ))}
      </div>
      <Slider />
    </section>
  );
};

export default SliderWrapper;
