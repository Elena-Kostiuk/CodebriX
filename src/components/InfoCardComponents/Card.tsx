import React from "react";
import Description from "../Description";

interface CardProps {
  number: number;
  title: string;
  descriptionText: string;
  className?: string;
  animation?: string;
}

const Card: React.FC<CardProps> = ({ title, descriptionText, className }) => {
  return (
    <div className={`${className}`}>
      <h3 className="font-medium pr-2">{title}</h3>
      <Description paragraphText={descriptionText} /> 
    </div>
  );
};

export default Card;
