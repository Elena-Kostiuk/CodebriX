import React from "react";

interface NavigationItemProps {
  label: string;
  href: string;
  hasDropdown?: string[];
  isOpen: boolean;
  toggleDropdown: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  href,
  hasDropdown,
  isOpen,
  toggleDropdown,
}) => {
  return (
    <li className="relative gap-2 px-6 my-auto text-center rounded-3xl cursor-pointer max-lg:px-3 max-md:px-2 flex-shrink-0">
      {hasDropdown ? (
        <div
          onClick={toggleDropdown}
          className="flex gap-2 justify-center items-center self-stretch"
        >
          <span>{label}</span>
          <img
            loading="lazy"
            src={isOpen ? "/images/dropup.png" : "/images/dropdown.png"}
            alt="dropdown button"
            className="max-lg:w-[11px] max-md:w-[10px]"
          />
        </div>
      ) : (
        <a href={href}>{label}</a>
      )}
      {hasDropdown && isOpen && (
        <div className="absolute top-full left-[-10px] mt-2 rounded-lg bg-white text-neutral-900 w-[280%] uppercase rounded-[12px] shadow-lg">
          <ul className="flex flex-col mx-7 my-3 border-l-2 border-dotted border-gray-300">
            {hasDropdown.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="px-4 py-[6px] text-left hover:text-[rgba(196,196,196,1)] cursor-pointer rounded-lg"
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
