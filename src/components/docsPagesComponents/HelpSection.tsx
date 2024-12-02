import React from "react";

const HelpSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 items-end w-[70%] mt-[100px] max-md:w-full max-md:mt-[60px]">
      <p>
        Need more help?{" "}
        <a className="underline text-link-color cursor-pointer">Ask CodebriX developers</a>
      </p>
      <p>Last updated on Nov 10, 2024</p>
    </section>
  );
};
export default HelpSection;
