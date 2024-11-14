
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="free-area flex relative  grow shrink gap-2 items-center self-stretch  w-2/5 max-sm:pb-1">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaff571623cef6e98308b27b34d75d460159bbb1b23ca187d40e0ef8e63f6684?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square max-md:w-3 max-md:aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c21cd1e91076ef4707bc70d9395fec1439bfa5b15061b953c9d1ca519c54f358?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
        alt="Company logo"
        className="relative z-[3] object-contain shrink-0 self-stretch  aspect-[5.49] w-[110px] max-md:w-[80px]"
      />
    </div>
  );
};

export default Logo;
