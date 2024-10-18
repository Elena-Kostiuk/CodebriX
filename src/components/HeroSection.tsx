/**
 * This code was generated by Builder.io.
 */
import React from "react";
import TagList from "./TagList";
import EmailSignup from "./EmailSignup";
import ProductTour from "./ProductTour";

const HeroSection: React.FC = () => {
  return (
    <main className="mt-10">
      <h1 className="self-start text-9xl tracking-tighter uppercase leading-[120px] max-w-[1476px] text-neutral-900 w-[78%] max-md:max-w-full max-md:text-4xl max-md:leading-10 max-sm:mt-24 max-lg:text-8xl">
        IT-consultants, ship production-ready appsx10 faster&nbsp;
      </h1>
      <div className="flex flex-wrap gap-3 items-center self-start mt-5 text-2xl leading-none text-neutral-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d95f6465573d9ea8cbf5f565440eb2548c8db0b5d731eacdc20601820543cd5?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
          alt=""
          className="object-contain shrink-0 aspect-[0.61] w-[11px]"
        />
        <span>Hybrid low-code </span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2a2f97a06f3f0f8b248d41757b82fb2efc5d0517df3d89c882dca360ad292d2?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
          alt=""
          className="object-contain shrink-0 aspect-[1.61] w-[29px]"
        />
        <span className="relative max-md:max-w-full after:content-[''] after:inline-block after:bg-neutral-900 after:w-3 after:h-[18px] after:shrink-0 after:ml-3">
          full-code platform with the resource-based pricing model
        </span>
      </div>

      <TagList />
      <EmailSignup />
      <div className="ml-auto max-w-[930px] w-full">
        <div className="flex flex-wrap gap-3 items-center self-end mt-10 text-2xl leading-none text-neutral-900 max-md:mr-2.5 w-full max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b210cd9ef03d02828cb17f37dd7fa79a537d7626353fca79dee8546a07f4833f?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
            alt=""
            className="object-contain shrink-0 aspect-[0.61] w-[11px]"
          />
          <p className="relative max-md:max-w-full after:content-[''] after:inline-block after:bg-neutral-900 after:w-3 after:h-[18px] after:shrink-0 after:ml-3">
            Built by Clojure-developers for result-oriented developers
          </p>
        </div>

        <ProductTour />
      </div>
    </main>
  );
};

export default HeroSection;