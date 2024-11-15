
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="free-area flex relative  grow shrink gap-2 items-center self-stretch  w-2/5 max-sm:pb-1">
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
        className="relative z-[3] object-contain shrink-0 self-stretch  aspect-[5.49] w-[110px] max-md:w-[80px]"
      />
    </div>
  );
};

export default Logo;
