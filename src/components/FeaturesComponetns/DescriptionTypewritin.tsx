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
  prefix=true,
  aligment="justify-start",
  width
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
      {prefix && <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b210cd9ef03d02828cb17f37dd7fa79a537d7626353fca79dee8546a07f4833f?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
        alt=""
        className="object-contain shrink-0 aspect-[0.56] w-[11px] absolute left-1 top-1.5 max-md:w-[9px] max-md:top-2"
      />}
      <p className={`relative max-md:max-w-full indent-7 ${width}`}>
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
