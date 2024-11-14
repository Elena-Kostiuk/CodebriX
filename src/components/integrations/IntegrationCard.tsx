import * as React from "react";
import { IntegrationItem } from "./IntegrationItem";
import "../../app/styles/colorHover.css";

interface Item {
  icon?: string;
  name: string;
}

interface IntegrationCardProps {
  number: string;
  title: string;
  hoverColor?: string;
  items: Item[];
}

export function IntegrationCard({
  number,
  title,
  hoverColor,
  items,
}: IntegrationCardProps) {
  return (
    <article
      className={`flex overflow-hidden flex-col p-5 pr-0 ${hoverColor} transition duration-500 ease-in-out rounded-3xl border border-solid border-neutral-900 h-[362px] max-lg:h-auto max-md:p-2`}
    >
      <div className="flex flex-col w-full">
        <p className="label-text  self-center ">
          &gt; [{number}]
        </p>
        <h3 className="mt-2 font-medium ">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3 items-start mt-7 w-full leading-none max-sm:mt-3">
        {items.map((item, index) => (
          <IntegrationItem key={index} item={item} />
        ))}
      </div>
    </article>
  );
}
