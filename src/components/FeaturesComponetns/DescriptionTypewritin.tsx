"use client";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "../../app/styles/features.css";

type InfoCardProps = {
  paragraphText: string;
  index: number;
  prefix?: boolean;
  aligment?: string;
  width?: string;
};

const DescriptionTypewriting: React.FC<InfoCardProps> = ({
  paragraphText,
  index,
  prefix = true,
  aligment = "justify-start",
  width,
}) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [shouldStartTyping, setShouldStartTyping] = useState(false);

  useEffect(() => {
    const delay = index * 6800;
    const timer = setTimeout(() => {
      setShouldStartTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`relative z-[3] flex flex-wrap gap-3 ${aligment} items-center  mt-5 max-md:mr-2.5 max-md:w-full`}
    >
      {prefix && (
        <img
          loading="lazy"
          src="/images/chevron.svg"
          alt=""
          className="object-contain shrink-0 aspect-[0.56] w-[10px] absolute left-1 top-1.5 max-xl:w-[8px] max-lg:w-[6px] max-lg:top-1 max-md:w-[7px] max-md:top-[6px] max-[430px]:w-[6px] max-[430px]:top-[3px]"
        />
      )}
      <p
        className={`relative max-md:max-w-full ${
          prefix ? "indent-7" : "indent-[12em]"
        }  ${width}`}
      >
        {shouldStartTyping && !isTypingComplete ? (
          <Typewriter
            words={[paragraphText]}
            loop={1}
            cursor
            cursorStyle="&#9646;"
            typeSpeed={20}
            onLoopDone={() => setIsTypingComplete(true)}
          />
        ) : (
          isTypingComplete && paragraphText
        )}
      </p>
    </div>
  );
};

export default DescriptionTypewriting;
