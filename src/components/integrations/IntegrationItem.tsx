import * as React from "react";

interface IntegrationItemProps {
  item: {
    icon?: string;
    name: string;
  };
}

export function IntegrationItem({
  item: { icon, name },
}: IntegrationItemProps) {
  return (
    <div className="flex gap-2 justify-center items-center px-3 py-2 whitespace-nowrap rounded-3xl border border-dashed border-neutral-900 max-sm:px-2 max-sm:py-1">
      <img
        loading="lazy"
        src={icon}
        alt={`${name} icon`}
        className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square max-md:w-6 max-md:aspect-square max-sm:w-4 max-sm:aspect-square"
      />
      <p className="self-stretch my-auto">{name}</p>
    </div>
  );
}
