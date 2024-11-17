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
    <section className="free-area fix-area relative min-h-[100vh] mt-40 max-md:mt-20">
      <h2 className="inline-block font-medium tracking-tighter indent-60 max-lg:indent-52 max-md:indent-0 max-md:max-w-full tracking-tightest">
        Everything your clients need to succeed
      </h2>
      <p className="label-text absolute top-[40px] left-[8px] gap-2.5 px-2 py-1 rounded-2xl border border-dashed border-neutral-900 max-lg:top-[8px] max-md:relative max-md:mt-4 max-md:top-auto max-md:left-auto max-md:inline-block">
        #Features
      </p>
      <FeaturesBlocksWrapper />
    </section>
  );
};

export default Features;