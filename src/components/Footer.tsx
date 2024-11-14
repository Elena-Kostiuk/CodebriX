import React from "react";
import EmailSignup from "./EmailSignup";
import LogoSVG from "./LogoSVG";
import "../app/styles/colorHover.css";

const links = [
  { name: "YouTube", style: "hover-orange" },
  { name: "Twitter", style: "hover-green" },
  { name: "Discord", style: "hover-blue" },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative  z-[2] free-area mt-40 max-md:mt-20 flex flex-col justify-start items-center ">
      <h2 className="self-start font-medium tracking-tighter mb-20 indent-60 max-md:mb-10  max-lg:indent-0 max-md:max-w-full  tracking-tightest max-sm:mb-4">
        Made by IT consultants for IT consultants
      </h2>
      <EmailSignup />
      <LogoSVG />
      <div className="label-text free-area flex self-end justify-end items-center my-6 max-md:justify-start max-md:gap-3 max-sm:flex-col max-sm:my-1">
        <div className="flex gap-1">
        {links.map((item, index) => (
          <a
            key={index}
            className={`cursor-pointer ${item.style} transition duration-500 ease-in-out mr-3 gap-2.5 px-2  rounded-2xl border border-dashed border-neutral-900 max-md:left-auto max-md:inline-block max-md:px-1 max-md:py-[2px]`}
          >
            {item.name}
          </a>
        ))}
        </div>
        <div className="flex gap-1  ml-2 items-center max-md:ml-0">
          <p>
            &gt; “All Rights Reserved” [.2024.]
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaff571623cef6e98308b27b34d75d460159bbb1b23ca187d40e0ef8e63f6684?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square max-md:w-2 max-md:aspect-square"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
