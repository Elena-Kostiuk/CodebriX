import React from "react";
import Card from "./Card";
import data from "../../data.json";

interface CardProps {
  title: string;
  text: string;
}

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-wrap w-full justify-between border-b-2 border-black pb-10 relative overflow-hidden">
      {data.map((card: CardProps, index: number) => (
        <div
          key={index}
          className="flex flex-col items-center w-full mt-24 sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)] relative max-md:mt-12"
        >
          <h4 className="mx-auto max-md:text-[12px]">[.{index + 1}.]</h4>
          <Card
            number={index + 1}
            title={card.title}
            descriptionText={card.text}
            className="flex flex-col w-full min-h-[196px] rounded-lg max-w-[541px]"
          />
          {index < data.length - 1 && (
            <div className="absolute bottom-0 right-[-1px] w-[1px] h-[85%] border-r-2 border-dashed border-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
