
import React from "react";

const EmailSignup: React.FC = () => {
  return (
    <form className="flex flex-col gap-5 items-center self-center my-10 max-w-full text-2xl font-medium max-lg:mb-20 max-md:text-lg  mx-auto max-sm:my-5">
      <div className="flex w-full justify-start max-sm:flex-col">
      <div className="flex gap-10 justify-between items-center self-stretch px-6 py-5 my-auto tracking-wide uppercase rounded-xl border-b border-solid border-b-neutral-900  text-zinc-200  max-2xl:py-3 max-lg:py-[8px] max-md:px-5 max-md:max-w-full">
        <label htmlFor="email" className="sr-only">
          Enter your email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          className=" uppercase bg-transparent border-none outline-none w-full text-[rgb(23_23_23/_var(--tw-text-opacity))] text-[24px] max-2xl:text-[16px] max-lg:text-[12px] max-md:text-[16px] max-sm:text-[12.65]"
          aria-label="Enter your email"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78bbdb7a8e70783c7c18f504758bd4478b1802f49fa22b1c4899a0a9782b3b7a?placeholderIfAbsent=true&apiKey=91b63c92872e4a9fbc65bfa4b6faa19c"
          alt=""
          className="object-contain shrink-0 cursor-pointer self-stretch ml-10 w-8 max-lg:w-6  max-md:w-7 aspect-[1.6]"
        />
      </div>
      <button
        type="submit"
        className="font-medium gap-2.5 self-stretch px-4 py-5 ml-3 tracking-wide text-white uppercase rounded-xl  bg-neutral-900  text-[100%] max-2xl:text-[16px] max-2xl:py-3 max-lg:text-[12px] max-lg:py-[8px] max-sm:w-5  max-md:text-[16px] max-md:px-4  max-md:h-[49px] max-md:py-2 max-sm:text-[12.65] max-sm:w-full max-sm:ml-0 max-sm:mt-5"
      >
        Sign up for private Beta
      </button>
      </div>
      <p className="label-text self-stretch my-auto font-normal ">
        [...] No credit card required
      </p>
    </form>
  );
};

export default EmailSignup;
