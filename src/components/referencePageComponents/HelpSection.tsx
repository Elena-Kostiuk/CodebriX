import React from "react";

const HelpSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 items-end w-full mt-[100px]">
      <p>
        Need more help?{" "}
        <a className="underline text-link-color">Ask CodebriX developers</a>
      </p>
      <p>Last updated on Nov 10, 2024</p>
    </section>
  );
};
export default HelpSection;
