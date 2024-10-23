import React from 'react';
import Description from '../Description';

interface CardProps {
  number: number;
  title: string;
  descriptionText: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ number, title, descriptionText,className }) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-[40px] leading-[48px] font-medium max-md:text-[30px]">{title}</h3>
      <Description paragraphText={descriptionText} />
    </div>
  );
};

export default Card;
