/**
 * This code was generated by Builder.io.
 */
import React from "react";

const EmailSignup: React.FC = () => {
  return (
    <form className="flex flex-wrap gap-5 items-center self-center mt-10 max-w-full text-2xl font-medium leading-none w-[930px] mx-auto">
      <div className="flex  grow shrink gap-10 justify-between items-center self-stretch px-6 py-5 my-auto tracking-wide uppercase rounded-xl border-b border-solid border-b-neutral-900 min-w-[240px] text-zinc-200 w-[457px] max-md:px-5 max-md:max-w-full">
        <label htmlFor="email" className="sr-only">
          Enter your email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          className="bg-transparent border-none outline-none w-full text-[rgb(23_23_23/_var(--tw-text-opacity))]"
          aria-label="Enter your email"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78bbdb7a8e70783c7c18f504758bd4478b1802f49fa22b1c4899a0a9782b3b7a?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
          alt=""
          className="object-contain shrink-0 cursor-pointer self-stretch my-auto w-8 aspect-[1.6]"
        />
      </div>
      <button
        type="submit"
        className="gap-2.5 self-stretch px-6 py-5 my-auto tracking-wide text-white uppercase rounded-xl cursor-pointer bg-neutral-900 min-w-[240px] max-md:px-4 max-sm:text-xl"
      >
        Sign up for private Beta
      </button>
      <p className="self-stretch my-auto text-sm leading-none text-neutral-900">
        [...] No credit card required
      </p>
    </form>
  );
};

export default EmailSignup;