import React from "react";

interface EmailSignupProps {
  popUp?: boolean;
}
const EmailSignup: React.FC<EmailSignupProps> = ({ popUp = false }) => {
  return (
    <form
      className={`flex flex-col gap-5 items-center self-center my-10 max-w-full text-2xl font-medium max-lg:mb-20 max-md:text-lg  mx-auto max-sm:my-5 max-sm:mx-0 max-sm:w-full ${
        popUp ? "my-0 bg-white rounded-lg shadow-lg px-3 py-3 max-sm:my-0" : ""
      }`}
    >
      <div
        className={`flex ${
          popUp ? "flex-col" : "flex-row"
        } w-full justify-start max-sm:flex-col`}
      >
        <div className="flex gap-1 justify-between items-center self-stretch px-6 py-5 my-auto tracking-wide uppercase rounded-xl border-b border-solid border-b-neutral-900  text-zinc-200  max-2xl:py-3 max-lg:py-[8px] max-md:px-5 max-md:max-w-full">
          <label htmlFor="email" className="sr-only">
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email..."
            className="bg-transparent self-stretch border-none outline-none w-full text-[24px] text-neutral-900 font-normal  max-2xl:text-[16px] max-lg:text-[12px] max-md:text-[16px] max-sm:text-[12.65px] placeholder:opacity-30 placeholder:uppercase"
            aria-label="Enter your email"
          />
          <img
            loading="lazy"
            src="/images/arrowRight.svg"
            alt=""
            className={`object-contain shrink-0 cursor-pointer self-stretch ${
              popUp ? "ml-1" : "ml-9"
            } w-8 max-lg:w-6  max-md:w-7 aspect-[1.6]`}
          />
        </div>
        <button
          type="submit"
          className={`font-medium gap-2.5 self-stretch whitespace-nowrap px-4 py-5  tracking-wide text-white uppercase rounded-xl  bg-neutral-900 hover:bg-neutral-700 text-[100%] max-2xl:text-[16px] max-2xl:py-3 max-lg:text-[12px] max-lg:py-[8px] max-sm:w-5  max-md:text-[16px] max-md:px-4  max-md:h-[49px] max-md:py-2 max-md:tracking-normal max-sm:text-[12.65] max-sm:w-full max-sm:ml-0 max-sm:mt-5  ${
            popUp ? "ml-0 mt-5" : "ml-3"
          }`}
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
