import * as React from "react";
import { IntegrationItem } from "./IntegrationItem";
import '../../app/styles/integration.css';

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
    <section className={`flex overflow-hidden flex-col p-5 pr-0 ${hoverColor} transition duration-500 ease-in-out rounded-3xl border border-solid border-neutral-900 h-[362px] max-lg:h-auto`}>
      <header className="flex flex-col w-full">
        <p className="self-center text-sm leading-none">&gt; [{number}]</p>
        <h2 className="mt-2 text-4xl font-medium leading-tight">
          {title}
        </h2>
      </header>
      <div className="flex flex-wrap gap-3 items-start mt-7 w-full leading-none">
        {items.map((item, index) => (
          <IntegrationItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}