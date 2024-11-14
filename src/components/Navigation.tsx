"use client";
import React, { useState } from "react";
import "../app/styles/navMenu.css";

const navigationItems = [
  { label: "PRICING", href: "#" },
  {
    label: "DOCS",
    href: "#",
    hasDropdown: [
      "Build apps",
      "Quick start",
      "Tutorial",
      "How-to",
      "Reference",
    ],
  },
  { label: "RESOURCES", href: "#" },
  { label: "ROADMAP", href: "#" },
];

const Navigation: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      <nav className="z-[6] box-border fixed right-1/2 transform translate-x-1/2 bg-white bg-opacity-0 h-[50px] max-sm:mt-[20px]">
        <div
          onClick={toggleMenu}
          className={`sm:hidden flex relative z-[6] justify-srart items-center  rounded-3xl backdrop-blur-[10px] bg-white bg-opacity-20 py-1 px-3 ${
            isMenuOpen ? "border border-black" : ""
          }`}
        >
          <p className="text-[14px] uppercase pr-2 font-medium ">
            {isMenuOpen ? "close" : "menu"}
          </p>

          <div className="menuOpen">
            <div className={`open ${isMenuOpen ? "open-active" : ""}`}></div>
          </div>
        </div>

      
        <ul className="flex max-sm:hidden  items-center p-1 my-auto text-[16px] tracking-wide whitespace-nowrap rounded-3xl backdrop-blur-[10px] bg-white bg-opacity-20 min-w-[240px] text-neutral-900 max-lg:text-[12px]  max-md:max-w-full max-sm:ml-2.5">
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className="relative gap-2 self-stretch px-6 py-2 my-auto text-center rounded-3xl cursor-pointer min-h-[40px] max-lg:px-3 max-md:px-2 flex-shrink-0"
            >
              {item.hasDropdown ? (
                <div
                  onClick={() => toggleDropdown(index)}
                  className="flex gap-2 justify-center items-center self-stretch"
                >
                  <span>{item.label}</span>
                  <span className="text-[1.3em] leading-[1.3em] max-md:text-[1.2em] max-md:leading-[1.1em]">
                    {openDropdown === index ? "▲" : "▼"}
                  </span>
                </div>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
              {item.hasDropdown && openDropdown === index && (
                <div className="absolute top-full left-[-10px] mt-2 rounded-lg bg-white text-neutral-900 w-[280%] uppercase rounded-[12px] shadow-lg">
                  <ul className="flex flex-col mx-7 my-3 border-l-2 border-dotted border-gray-300">
                    {item.hasDropdown.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-[6px] text-left  hover:text-[rgba(196,196,196,1)] cursor-pointer rounded-lg"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>


      {isMenuOpen && (
        <div className="menu">
          <div className="menuContent">
            <ul className="flex flex-col items-center gap-4 text-[32px] font-medium mt-[120px] ">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className="relative gap-2 self-stretch px-6 pb-8  rounded-3xl cursor-pointer max-lg:px-4 "
                >
                  {item.hasDropdown ? (
                    <div
                      onClick={() => toggleDropdown(index)}
                      className="flex gap-2 justify-start items-center self-stretch my-auto"
                    >
                      <a>{item.label}</a>
                      <span>{openDropdown === index ? "▲" : "▼"}</span>
                    </div>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                  {item.hasDropdown && openDropdown === index && (
                    <div className="  text-neutral-900 w-[100%]">
                      <ul className="flex flex-col mx-7 mt-8 border-l-2 border-dotted border-gray-300">
                        {item.hasDropdown.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="px-4 py-[16px] text-[28px] text-left font-robert-trial hover:text-[rgba(196,196,196,1)] cursor-pointer rounded-lg"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
