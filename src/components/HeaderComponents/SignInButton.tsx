"use client";
import React, { useState, useEffect, useRef } from "react";
import EmailSignup from "../EmailSignup";

const SignInButton: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isFormOpen &&
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsFormOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isFormOpen]);

  return (
    <div className="fixed right-5 z-[4] h-[48px] flex flex-col items-end">
      <button
        ref={buttonRef} 
        onClick={toggleForm}
        className="btn z-[4] gap-2.5 px-5 py-3 my-auto text-white font-medium tracking-wide uppercase rounded-lg bg-neutral-900 hover:bg-neutral-700 active:bg-neutral-700 max-sm:ml-2 max-sm:px-4 max-sm:py-2"
      >
        Sign in
      </button>
      {isFormOpen && (
        <div
          ref={formRef} 
          className="absolute z-[3] top-14 right-0 w-[26vw] max-xl:w-[31vw]  max-md:w-[56vw] max-md:top-8 max-sm:top-12 max-sm:w-[93vw]"
        >
          <EmailSignup popUp={true} />
        </div>
      )}
    </div>
  );
};

export default SignInButton;
