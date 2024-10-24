import React from "react";

type InfoCardProps = {
  paragraphText: string;
};

const Description: React.FC<InfoCardProps> = ({ paragraphText }) => {
  return (
    <div className=" relative flex flex-wrap gap-3 items-center self-start w-full mt-5 text-2xl leading-none text-neutral-900 max-md:mr-2.5 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b210cd9ef03d02828cb17f37dd7fa79a537d7626353fca79dee8546a07f4833f?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
        alt=""
        className="object-contain shrink-0 aspect-[0.56] w-[11px] absolute left-1 top-1.5 max-md:w-[9px] max-md:top-2"
      />
      <p className="relative text-[24px] leading-[32px] max-md:max-w-full after:content-[''] after:inline-block after:bg-neutral-900 after:w-3 after:h-[18px] after:shrink-0 after:ml-3 indent-7 max-md:text-[20px]">
        {paragraphText}
      </p>
    </div>
  );
};

export default Description;
