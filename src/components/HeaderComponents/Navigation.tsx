"use client";
import React, { useState, useEffect, useRef } from "react";
import "../../app/styles/navMenu.css";
import NavigationItem from "./NavigationItem";


const navigationItems = [
  { label: "PRICING", href: "/pricing" },
  {
    label: "DOCS",
    href: "/docs",
    hasDropdown: [
      {label: "Build apps",href:"#"},
      {label:"Quick start",href:"#"},
      {label:"Tutorial",href:"#"},
      {label:"How-to",href:"#"},
      {label:"Reference",href:"/docs/reference"},
    ],
  },
  { label: "RESOURCES", href: "/resources" },
  { label: "ROADMAP", href: "/roadmap" },
];
interface NavigationProps {
  currentPage: string;
}

const Navigation: React.FC<NavigationProps> = ({currentPage}) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

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

  const handleCloseDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && openDropdown !== null) {
      setOpenDropdown(null);
    }
  };

  return (
    <nav ref={menuRef}>
      <div
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
        <ul className="flex max-sm:hidden  items-center p-1 my-auto text-[16px] tracking-wide whitespace-nowrap rounded-3xl backdrop-blur-[10px] bg-white bg-opacity-20 min-w-[240px]  max-lg:text-[12px]  max-md:max-w-full max-sm:ml-2.5">
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={index}
              label={item.label}
              href={item.href}
              hasDropdown={item.hasDropdown}
              isOpen={openDropdown === index}
              toggleDropdown={() => toggleDropdown(index)}
              isMobile={false}
              isCurrentPage={currentPage == item.label}
            />
          ))}
        </ul>
      </div>

      {/* Mobile */}
      {isMenuOpen && (
        <div
          onClick={handleCloseDropdown}
          className="fixed top-0 left-0 w-[100vw] h-[200vh] z-[5] flex items-start justify-start backdrop-blur-[10px] bg-white bg-opacity-20"
        >
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
    </nav>
  );
};

export default Navigation;
