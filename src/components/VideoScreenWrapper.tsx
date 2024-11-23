"use client";

import React, { useState, useEffect } from "react";
import Screen from "./Screen";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import ReactPlayer from "react-player";
import "../app/styles/screen.css";

const VideoScreenWrapper: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimatingWidth, setIsAnimatingWidth] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();
  const [showVideo, setShowVideo] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      setIsClient(true);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handlePosterClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setShowVideo(true);
    setTimeout(() => setVideoOpacity(1), 50);
  };

  const widthTransform = useTransform(scrollY, [0, 700], ["50%", "100%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isAnimatingWidth) {
      const currentWidth = widthTransform.get();
      if (currentWidth === "100%") {
        setIsAnimatingWidth(false);}
      if (isDesktop && currentWidth === "100%") { 
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    }
  });

  const dynamicWidth = isDesktop
    ? isAnimatingWidth
      ? widthTransform
      : "100%"
    : undefined;

  return (
    <motion.div
      key={isExpanded ? "expanded" : "collapsed"}
      className="video-screen-wrapper relative flex ml-auto mt-4 max-md:ml-0 max-md:w-full"
      style={{ width: dynamicWidth }}
    >
      <Screen title="Product tour" width="w-full" isExpanded={isExpanded}>
        <div
          className="relative flex items-center justify-center bg-cover bg-center border-x border-solid border-neutral-900 w-full aspect-[2/1.1] max-lg:h-auto transition-transform duration-100"
          style={{ backgroundImage: "url('/images/background.png')" }}
        >
          <div
            onClick={handlePosterClick}
            data-tooltip-id="playTooltip"
            data-tooltip-content="Click to play"
            className="container-tooltip object-contain w-[67.9%] h-[69.3%] bg-cover bg-center  overflow-hidden bg-transparent cursor-pointer"
            style={{
              backgroundImage: "url('/images/preview1.png')",
            }}
          >
            {!showVideo && (
              <ReactTooltip
                id="playTooltip"
                place="top"
                float
                className="custom-tooltip"
              />
            )}
            {isClient && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: videoOpacity }}
                transition={{ duration: 0.8, ease: "easeIn" }}
              >
                {showVideo && (
                  <ReactPlayer
                    url="/video/CodebriX.mp4"
                    playing
                    muted
                    controls
                    width="100%"
                    height="100%"
                  />
                )}
              </motion.div>
            )}
          </div>
        </div>
      </Screen>
    </motion.div>
  );
};

export default VideoScreenWrapper;
