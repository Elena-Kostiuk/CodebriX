
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="free-area flex relative  grow  gap-2   w-2/5 ">
      <img
        loading="lazy"
        src="/images/logoPin.svg"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square max-md:w-3 max-md:aspect-square"
      />
      <img
        loading="lazy"
        src="/images/logoTag.svg"
        alt="Company logo"
        className="relative z-[3] object-contain  w-[110px] max-md:w-[80px]"
      />
    </div>
  );
};

export default Logo;
