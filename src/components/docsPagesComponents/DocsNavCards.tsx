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
    <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-3 mt-[100px] w-[70%] max-md:w-full max-md:mt-10 max-md:gap-1">
      {cardData.map((card: CardData, index: number) => (
        <Link href={card.href} key={index}>
          <div
            className="flex flex-col justify-between h-full p-5 leading-none rounded-3xl border border-solid border-neutral-900 hover:border-[3px] hover:p-[18px] 
            min-h-[240px] max-h-auto max-xl:min-h-[180px] max-md:min-h-[120px]"
            role="article"
            tabIndex={0}
          >
            <div className="flex flex-col w-full">
              <p className="label-text self-center">&gt; [.{index + 1}.]</p>
              <h3 className="mt-2 leading-tight">{card.title}</h3>
              <p className="label-text mt-2">{card.description}</p>
            </div>
            <p className="label-text mt-10 text-right max-xl:mt-7 max-lg:mt-5 max-md:mt-1">
              {card.itemCount} items
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DocsNavCards;
