import React from "react";
import EmailSignup from "./EmailSignup";
import LogoSVG from "./LogoSVG";
import "../app/styles/colorHover.css";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-40 max-md:mt-20 flex flex-col justify-start items-center ">
      <h2 className="self-start font-medium tracking-tighter mb-20 indent-60 max-md:mb-10  max-md:indent-0 max-md:max-w-full  tracking-tightest">
        Made by IT consultants for IT consultants
      </h2>
      <EmailSignup />
      <LogoSVG />
      <div className="flex flex-wrap w-full justify-end items-center my-6">
        <p className="hover-orange transition duration-500 ease-in-out text-[14px] leading-[20px] mr-3 gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:text-[12px] max-md:leading-[18px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          YouTube
        </p>
        <p className="hover-green transition duration-500 ease-in-out text-[14px] leading-[20px] mr-3 gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:text-[12px] max-md:leading-[18px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          Twitter
        </p>
        <p className="hover-blue transition duration-500 ease-in-out text-[14px] leading-[20px] mr-3 gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-md:text-[12px] max-md:leading-[18px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
          Discord
        </p>
        <div className="flex gap-1  ml-8">
          <p className="text-[14px] leading-[20px] max-md:text-[12px] max-md:leading-[18px]">
            &gt; “All Rights Reserved” [.2024.]
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaff571623cef6e98308b27b34d75d460159bbb1b23ca187d40e0ef8e63f6684?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
