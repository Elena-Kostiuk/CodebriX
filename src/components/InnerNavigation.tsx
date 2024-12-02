"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavigationItemsData from "../data/docsNavigation.json";

interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: NavigationItem[];
}

type NavigationItemsType = {
  [key: string]: NavigationItem[];
};

const NavigationItems: NavigationItemsType = NavigationItemsData;

interface InnerNavigationProps {
  openLabel?: string;
  width?: string;
  namePage: string;
}

const InnerNavigation: React.FC<InnerNavigationProps> = ({
  openLabel,
  width = "w-full",
  namePage,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string[]>(() =>
    openLabel ? [openLabel] : []
  );

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const items = NavigationItems[namePage];

  return (
    <ul
      className={`absolute right-0 top-0 flex flex-col items-center ${width} mt-10 max-md:hidden`}
    >
      {items.map((item, index) => (
        <li key={index} className="relative w-full self-start">
          {item.hasDropdown ? (
            <div
              onClick={() => toggleDropdown(item.label)}
              className="flex items-center self-stretch justify-between pb-5 pl-20 w-[100%] border-l-2 border-dotted border-gray-300 cursor-pointer max-xl:pl-5 max-lg:pb-4"
            >
              <span>{item.label}</span>
              <img
                loading="lazy"
                src={
                  openDropdown.includes(item.label)
                    ? "/images/customDropUp.png"
                    : "/images/customDropDown.png"
                }
                alt="dropdown button"
                className="w-[16px] max-xl:w-[14px] max-lg:w-[10px]"
              />
            </div>
          ) : (
            <Link
              href={item.href}
              className="inline-block pb-5 pl-20 border-l-2 border-dotted border-gray-300 max-xl:pl-5 max-lg:pb-4"
            >
              {item.label}
            </Link>
          )}
          {item.hasDropdown && (
            <ul
              className={`flex flex-col mb-3 ${
                openDropdown.includes(item.label) ? "block" : "hidden"
              }`}
            >
              {item.hasDropdown.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="text-left py-[10px] pl-5 ml-20 border-l-2 border-dotted border-gray-300 max-xl:ml-5 max-lg:py-[8px]"
                >
                  <Link href={subItem.href}>{subItem.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default InnerNavigation;
