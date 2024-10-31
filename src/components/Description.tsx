import React from "react";

type InfoCardProps = {
  paragraphText: string;
};

const Description: React.FC<InfoCardProps> = ({ paragraphText }) => {
  return (
    <div className="relative z-[3] flex flex-wrap gap-3 items-center self-start w-full mt-5 max-md:mr-2.5 max-md:w-full ">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b210cd9ef03d02828cb17f37dd7fa79a537d7626353fca79dee8546a07f4833f?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
        alt=""
        className="object-contain shrink-0 aspect-[0.56] w-[11px] absolute left-1 top-1.5 max-md:w-[9px] max-md:top-2"
      />
      <p className="relative max-md:max-w-full indent-7">
        {paragraphText} &#9646;
      </p>
    </div>
  );
};

export default Description;
