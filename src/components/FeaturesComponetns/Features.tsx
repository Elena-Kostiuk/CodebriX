"use client";

import React, { useEffect, useState, useRef } from "react";
import "../../app/styles/features.css";
import FeaturesBlocksWrapper from "./FeaturesBlocksWrapper";

const Features: React.FC = () => {
  const [scrollLocked, setScrollLocked] = useState(false);
  const hasLockedScrollRef = useRef(false);
  const scrollbarWidth = useRef(0);

  useEffect(() => {
    const handleScrollLock = (lock: boolean) => {
      if (lock) {
        scrollbarWidth.current = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scrollbarWidth.current}px`; 
      } else {
        document.body.style.overflow = "";
        document.body.style.marginRight = "0";
      }
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasLockedScrollRef.current) {
          hasLockedScrollRef.current = true;
          setScrollLocked(true);
          handleScrollLock(true);

          const timer = setTimeout(() => {
            setScrollLocked(false);
            handleScrollLock(false);
          }, 5000);

          return () => clearTimeout(timer);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.7,
    });

    const section = document.querySelector("section.fix-area");
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
      handleScrollLock(false);
    };
  }, []);

  return (
    <section className="free-area fix-area relative min-h-[120vh] mt-40 max-lg:mt-20 max-sm:mt-10">
      <h2 className="free-area font-medium tracking-tighter indent-60  max-xl:indent-48 max-lg:indent-40 max-sm:indent-0 max-md:max-w-full tracking-tightest">
        Everything your clients need to succeed
      </h2>
      <p className="label-text absolute top-[40px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-xl:top-[18px] max-xl:top-[15px] max-lg:top-[12px] max-md:top-[6px]  max-sm:mt-4 max-sm:relative max-sm:top-auto  max-sm:left-auto max-sm:inline-block">
        #Features
      </p>
      <FeaturesBlocksWrapper />
    </section>
  );
};

export default Features;