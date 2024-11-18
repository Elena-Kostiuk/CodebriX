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
    <footer className="relative  z-[2] free-area mt-40 max-lg:mt-20  max-sm:mt-10 flex flex-col justify-start items-center ">
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
            src="/images/logoPin.svg"
            alt=""
            className="object-contain shrink-0 self-stretch ml-2 w-5 aspect-square max-xl:w-4 max-lg:w-3 max-md:w-2 max-md:aspect-square"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
