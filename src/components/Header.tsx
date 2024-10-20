/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SignInButton from "./SignInButton";

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap justify-start items-center h-[50px] w-[100%] max-md:max-w-full px-5 mt-5 border-red-600">
      <Logo />
      <Navigation />
      <SignInButton />
    </header>
  );
};

export default Header;
