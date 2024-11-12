import React from "react";
import "../app/styles/description.css";

type InfoCardProps = {
  paragraphText: string;
  width?: string;
  aligment?: string;
  cursor?: boolean;
}

const Description: React.FC<InfoCardProps> = ({ paragraphText, aligment="self-start",width=" w-full", cursor=true}) => {
  
  const replaceSymbolWithImage = (text: string) => {
    return text.split("&").map((part, index) => (
      index === 0 ? part : <><img src="/images/arrowRight.svg" alt="arrow" className="inline w-[1em] h-[1em]"/>{part}</>
    ));
  };


  return (
    <div className={`free-area flex flex-wrap gap-3 items-center mt-5 ${aligment} ${
        !cursor ? 'inline whitespace-nowrap' : ''} max-lg:justify-start`}>
      <p className={`icon-paragraph relative pr-2 max-lg:w-full ${width}`}>
        {replaceSymbolWithImage(paragraphText)}&nbsp;
        {cursor ? <span>&#9646;</span> : null}
      </p>
    </div>
  );
};

export default Description;
