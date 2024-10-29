/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ScreenProps {
  title: string;
  children: React.ReactNode;
  width?: string;
}
const Screen: React.FC<ScreenProps> = ({
  title,
  children,
  width = "w-[48%]",
}) => {
  return (
    <section
      className={`flex overflow-hidden flex-col self-end ${width} px-3 py-2.5 text-[14px] leading-[20px] max-md:text-[12px] max-md:leading-[18px] border border-solid mt-5 border-neutral-900 max-md:px-2 max-md:py-1 max-md:w-full`}
    >
      <div className="flex flex-wrap gap-4 justify-between items-center w-full mb-2   max-md:gap-2 max-md:mb-1  max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78bbef0900bf6196dd4b4ce7650c2ad36fc0b031027add6125589e1392cf973?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square max-md:w-4 max-md:aspect-square"
        />

        <div
          className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid bg-neutral-900 border-neutral-900 flex-grow transition-all max-md:flex-grow-0 max-md:opacity-0 max-md:w-0"
          aria-hidden="true"
        />

        <h4 className="flex gap-3 items-center self-stretch my-auto max-md:gap-1">
          <span className="self-stretch my-auto">[..]</span>
          <span className="self-stretch my-auto ">&gt; "{title}"</span>
        </h4>

        <div
          className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid bg-neutral-900 border-neutral-900 flex-grow transition-all max-md:flex-grow-0 max-md:opacity-0 max-md:w-0"
          aria-hidden="true"
        />

        <div
          className="object-contain shrink-0 self-stretch w-7 aspect-square bg-no-repeat bg-center bg-cover transition-transform hover:scale-105 active:scale-95 max-md:w-6 max-md:aspect-square"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/1cd4a4c76c84070bc418043908a6cbde45f5b74f730d9a288005c15e1b8a6d4f?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c')`,
          }}
        />
      </div>
      {children}
    </section>
  );
};

export default Screen;
