/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface TextBlockProps {
  subtitle: string;
  title: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ subtitle, title }) => {
  return (
    <div className="flex flex-col max-md:max-w-full">
      <p className="self-start">{subtitle}</p>
      <h2 className=" font-medium tracking-tighter  max-md:max-w-full ">
        {title}
      </h2>
    </div>
  );
};

export default TextBlock;
