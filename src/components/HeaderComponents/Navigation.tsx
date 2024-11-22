"use client";
import React, { useState, useEffect, useRef } from "react";
import "../../app/styles/navMenu.css";
import NavigationItem from "./NavigationItem";

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
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Закриваємо dropdown при кліку поза меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        ref={menuRef}
        className="z-[6] box-border fixed right-1/2 transform translate-x-1/2  h-[48px] max-sm:mt-[10px]"
      >
        <div
          onClick={toggleMenu}
          className={`sm:hidden flex relative z-[6] justify-start items-center rounded-3xl backdrop-blur-[10px] bg-white bg-opacity-20 py-1 px-3 my-auto ${
            isMenuOpen ? "border border-black" : ""
          }`}
        >
          <p className="text-[14px] flex items-center uppercase pr-2 font-medium leading-none py-1">
            {isMenuOpen ? "close" : "menu"}
          </p>

          <div className="menuOpen">
            <div className={`open ${isMenuOpen ? "open-active" : ""}`}></div>
          </div>
        </div>

        {/* Desktop */}
        <ul className="flex max-sm:hidden  items-center p-1 my-auto text-[16px] tracking-wide whitespace-nowrap rounded-3xl backdrop-blur-[10px] bg-white bg-opacity-20 min-w-[240px] text-neutral-900 max-lg:text-[12px]  max-md:max-w-full max-sm:ml-2.5">
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={index}
              label={item.label}
              href={item.href}
              hasDropdown={item.hasDropdown}
              isOpen={openDropdown === index}
              toggleDropdown={() => toggleDropdown(index)}
              isMobile={false}
            />
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-[100vw] h-[200vh] z-[5] flex items-start justify-start backdrop-blur-[10px] bg-white bg-opacity-20">
            <ul className="flex flex-col items-center gap-4 text-[30px] font-medium mt-[120px] ">
              {navigationItems.map((item, index) => (
                <NavigationItem
                  key={index}
                  label={item.label}
                  href={item.href}
                  hasDropdown={item.hasDropdown}
                  isOpen={openDropdown === index}
                  toggleDropdown={() => toggleDropdown(index)}
                  isMobile={true}
                />
              ))}
            </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
