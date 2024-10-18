import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
const InitialPage: React.FC = () => {
  return (
    <div className="flex flex-col px-5  border-red-600">
      <Header />
      <HeroSection />
    </div>
  );
};

export default InitialPage;
