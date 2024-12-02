import React from "react";
import itemsData from "../../data/hotKeysItemsData.json";

const Items: React.FC = () => {
  return (
    <section>
      {itemsData.map((item, index) => (
        <article key={index} className="flex flex-col gap-3 w-full mt-20">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>
            {item.subtitle}
            <a className="underline text-link-color cursor-pointer">
              {item.link}
            </a>
            .
          </p>
          <div className="flex flex-col p-3 w-[30%] border border-solid border-neutral-900 max-xl:w-[50%]">
            <img
              loading="lazy"
              src="/images/logoPin.svg"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square max-md:w-3 max-md:aspect-square"
            />
            <img loading="lazy" src={item.img} alt="" className="mt-3" />
          </div>
        </article>
      ))}
    </section>
  );
};
export default Items;
