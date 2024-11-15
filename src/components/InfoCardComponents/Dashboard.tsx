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
      className={`free-area  flex flex-wrap ${width} justify-start gap-x-3 border-b-2 border-black pb-10 relative overflow-hidden `}
    >
      {data.map((card: CardProps, index: number) => (
        <div
          key={index}
          className="free-area  flex flex-col items-center mt-8 w-[32%] pl-5 relative border-r-2 border-dotted border-gray-300 max-lg:pl-2 max-lg:mt-10 max-lg:h-auto max-md:w-auto max-md:pl-0 max-md:border-r-0 [&:nth-child(3)]:border-r-0 last:border-r-0 [&:nth-child(4)]:pl-0 first:pl-0 "
        >
          <h4 className="label-text mx-auto">
            [.{index + 1}.]
          </h4>
          <Card
            number={index + 1}
            title={card.title}
            descriptionText={card.text}
            className="flex flex-col w-full min-h-[196px]  rounded-lg max-w-[541px] max-lg:min-h-0 max-md:min-h-0"
          />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
