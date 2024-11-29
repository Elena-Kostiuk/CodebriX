import React from "react";
import cardData from "../../data/referenceNavCards.json";
import Link from "next/link";

type CardData = {
  title: string;
  description: string;
  itemCount: number;
  href: string;
};

const DocsNavCards: React.FC = () => {
  return (
    <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-3 mt-[100px] min-h-[224px]">
      {cardData.map((card: CardData, index: number) => (
        <Link href={card.href}>
          <div
            key={index}
            className="flex flex-col grow shrink justify-between h-full self-stretch p-5 leading-none rounded-3xl border border-solid border-neutral-900"
            role="article"
            tabIndex={0}
          >
            <div className="flex flex-col w-full">
              <p className="label-text self-center">&gt; [.{index + 1}.]</p>
              <h3 className="mt-2 leading-tight">{card.title}</h3>
              <p className="label-text mt-2">{card.description}</p>
            </div>
            <p className="label-text mt-16 text-right max-md:mt-10">
              {card.itemCount} items
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DocsNavCards;
