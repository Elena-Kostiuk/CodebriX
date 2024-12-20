import React from "react";

const tags = [
  "#Git-manageable",
  "#React custom components",
  "#Function-as-a-Service",
  "#Export to self-host",
  "#Offline-mode",
];

const TagList: React.FC = () => {
  return (
    <ul className="label-text flex flex-wrap gap-3 items-start mt-5 max-w-full  w-[595px]">
      {tags.map((tag, index) => (
        <li
          key={index}
          className="gap-2.5 self-stretch px-2 py-1 rounded-2xl border border-dashed border-neutral-900"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
