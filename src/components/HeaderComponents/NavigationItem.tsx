import React from "react";
import Link from "next/link";

interface NavigationItemProps {
  label: string;
  href: string;
  hasDropdown?: string[];
  isOpen: boolean;
  toggleDropdown: () => void;
  isMobile: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  href,
  hasDropdown,
  isOpen,
  toggleDropdown,
  isMobile
}) => {
  return (
    <li className={`relative gap-2  px-6 ${isMobile ? "pb-8 pr-0 self-start" : "self-stretch py-2 my-auto text-center rounded-3xl cursor-pointer min-h-[40px] max-lg:px-3 max-md:px-2 flex-shrink-0"}`}>
      {hasDropdown ? (
        <div
          onClick={toggleDropdown}
          className={`flex gap-2  items-center self-stretch ${isMobile ? "justify-start" : "justify-center"}`}
        >
          <span>{label}</span>
          <img
            loading="lazy"
            src={isOpen ? "/images/dropup.png" : "/images/dropdown.png"}
            alt="dropdown button"
            className={`${isMobile ? "w-[20px]": "max-lg:w-[11px] max-md:w-[10px]"}`}
          />
        </div>
      ) : (
        <Link href={href}>
          {label}
        </Link>
      )}
      {hasDropdown && isOpen && (
        <div className={`text-neutral-900 ${isMobile ? "w-[100%]" :  "absolute top-full left-[-10px] mt-2 rounded-lg bg-white w-[280%] uppercase rounded-[12px] shadow-lg"}`}>
          <ul className={`flex flex-col mx-7 ${isMobile ? "mt-8 mr-0" : "my-3 border-l-2 border-dotted border-gray-300"} `}>
            {hasDropdown.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className={`text-left  ${isMobile ? "py-[16px] px-2 text-[28px] font-robert-trial active:text-[rgba(196,196,196,1)]" : "px-4 py-[6px] hover:text-[rgba(196,196,196,1)] cursor-pointer rounded-lg"}`}
              >
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavigationItem;
