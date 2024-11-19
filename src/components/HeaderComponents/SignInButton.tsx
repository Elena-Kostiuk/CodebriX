"use client";
import React, { useState } from "react";
import EmailSignup from "../EmailSignup";

const SignInButton: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <div className="fixed right-5 z-[4] h-[48px] flex flex-col items-end">
      <button
        onClick={toggleForm}
        className="btn gap-2.5 px-5 py-3 my-auto text-white font-medium tracking-wide uppercase rounded-lg bg-neutral-900  max-sm:ml-2 max-sm:px-4 max-sm:py-2  "
      >
        Sign in
      </button>
      {isFormOpen && (
        <div className="w-[26vw] max-xl:w-[31vw]  max-md:w-[56vw] max-sm:w-[90vw]">
          <EmailSignup popUp={true} />
        </div>
      )}
    </div>
  );
};

export default SignInButton;
