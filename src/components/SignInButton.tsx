"use client";
import React, { useState } from "react";
import EmailSignup from "./EmailSignup";

const SignInButton: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <div className="fixed right-3 z-[4] top-5 flex flex-col items-end max-2xl:top-7  max-md:top-6 max-sm:top-7">
      <button
        onClick={toggleForm}
        className="btn   gap-2.5  px-5 py-3 tracking-wide text-white font-medium tracking-wide text-white uppercase rounded-lg bg-neutral-900  max-sm:ml-2 max-sm:px-4 max-sm:py-2  "
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
