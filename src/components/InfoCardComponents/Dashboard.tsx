import React from "react";
import Card from "./Card";

interface CardProps {
  title: string;
  text: string;
}

interface DashboardProps {
  data: CardProps[];
  width?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ data, width = "w-full" }) => {
  return (
    <div
      className={`free-area flex flex-wrap ${width} justify-start gap-x-3 border-b-2 border-black pb-10 relative overflow-hidden `}
    >
      {data.map((card: CardProps, index: number) => (
        <div
          key={index}
          className="free-area flex flex-col items-center w-full mt-24 sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)] relative max-lg:mt-10"
        >
          <h4 className="label-text mx-auto">
            [.{index + 1}.]
          </h4>
          <Card
            number={index + 1}
            title={card.title}
            descriptionText={card.text}
            className="flex flex-col w-full min-h-[196px]  rounded-lg max-w-[541px] max-md:min-h-0"
          />
          {index < data.length - 1 && (
            <div className="absolute bottom-0 right-[-1px] w-[1px] h-[85%] border-r-2 border-dotted border-gray-300 max-md:hidden" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
