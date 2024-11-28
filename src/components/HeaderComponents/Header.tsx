import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SignInButton from "./SignInButton";

interface HeaderProps {
  currentPage?: string
}
const Header: React.FC<HeaderProps> = ({currentPage="main"}) => {
  return (
    <header className="free-area flex flex-wrap justify-start  h-[48px] w-[100%] max-md:max-w-full mt-5">
      <Logo />
      <Navigation currentPage={currentPage}/>
      <SignInButton />
    </header>
  );
};

export default Header;
