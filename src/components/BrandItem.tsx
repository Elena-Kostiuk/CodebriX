
import * as React from "react";

interface BrandItemProps {
  icon?: string;
  name: string;
  iconAlt?: string;
}

export const BrandItem: React.FC<BrandItemProps> = ({
  icon,
  name,
  iconAlt = "",
}) => {
  return (
    <li
      className="flex gap-2 h-[48px] justify-center items-center px-6 py-2 tracking-wide whitespace-nowrap rounded-3xl border border-dashed border-neutral-900 max-md:h-[36px] max-md:px-4 max-md:py-1  max-sm:py-0"
      aria-label={name}
    >
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt={iconAlt}
          className="object-contain shrink-0 self-stretch  w-8  max-md:w-6  max-sm:w-4 "
        />
      )}
      <span className="self-stretch my-auto ">{name}</span>
    </li>
  );
};
