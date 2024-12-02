import React from "react";
import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/Footer";
import DescriptionTypewriting from "@/components/FeaturesComponetns/DescriptionTypewritin";
import HotKeysIArticles from "@/components/docsPagesComponents/HotKeysArticles";
import HelpSection from "@/components/docsPagesComponents/HelpSection";
import InnerNavigation from "@/components/InnerNavigation";
import Breadcrumbs from "@/components/docsPagesComponents/Breadcrumbs";

const KeyboardShortcutsPage: React.FC = () => {
  return (
    <div className="relative px-5 max-w:[100vw] overflow-hidden max-sm:px-3">
      <Header />
      <div className="flex flex-col w-[70%] max-md:w-full">
        <div className="flex flex-col w-full">
          <div className="fixed top-[110px] right-5 w-[24%] max-md:relative max-md:top-0 max-md:right-auto max-md:w-full">
            <Breadcrumbs />
            <InnerNavigation namePage="KeyboardShortcuts" />
          </div>
          <section className="flex w-full mt-10 flex-col  max-sm:mt-4">
            <h2 className=" tracking-tighter uppercase">
              App IDE keyboard shortcuts
            </h2>
            <DescriptionTypewriting
              paragraphText="App IDE keyboard shortcuts"
              index={0}
              prefix={true}
              aligment="justify-start my-5"
            />
            <p>
              Use CodebriX's built-in keyboard shortcuts to quickly perform
              certain actions or control the interface. You can also configure{" "}
              <a className="text-link-color underline cursor-pointer">
                custom keyboard shortcuts
              </a>{" "}
              on a per-app basis that can trigger queries, interact with
              components, and more.
            </p>
          </section>
        </div>
        <HotKeysIArticles />
        <HelpSection />
      </div>
      <Footer isMainPage={false} />
    </div>
  );
};
export default KeyboardShortcutsPage;
