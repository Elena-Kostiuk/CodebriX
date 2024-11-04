import React from "react";
import "../app/styles/description.css";

type InfoCardProps = {
  paragraphText: string;
  width?: string;
  aligment?: string;
}

const Description: React.FC<InfoCardProps> = ({ paragraphText, aligment="self-start",width=" w-full"}) => {
  
  const replaceSymbolWithImage = (text: string) => {
    return text.split("&").map((part, index) => (
      index === 0 ? part : <><img src="/images/arrowRight.svg" alt="arrow" className="inline w-[1em] h-[1em]"/>{part}</>
    ));
  };


  return (
    <div className={`flex flex-wrap gap-3 items-center mt-5 ${aligment} max-lg:justify-start`}>
      <p className={`icon-paragraph relative pr-2 max-lg:w-full ${width} `}>
        {replaceSymbolWithImage(paragraphText)} &#9646;
      </p>
    </div>
  );
};

export default Description;
