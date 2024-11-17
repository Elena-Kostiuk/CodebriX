"use client";
import React, { useState, useRef, useEffect } from "react";
import Screen from "./Screen";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const VideoScreenWrapper: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); 
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const widthTransform = useTransform(scrollY, [0, 700], ["50%", "100%"]);

  useMotionValueEvent(widthTransform, "change", (latest) => {
    if (latest === "100%") {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  });

  const handleVideoPlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .catch((error) => console.error("Video play failed:", error));
    }
  };

  return (
    <motion.div
      className="video-screen-wrapper flex ml-auto mt-4 max-md:ml-0 max-md:w-full"
      style={{ width: isDesktop ? widthTransform : undefined }}
    >
      <Screen title="Product tour" width="w-full" isExpanded={isExpanded}>
        <div
          className="relative flex items-center justify-center bg-cover bg-center border-x border-solid border-neutral-900 w-full aspect-[2/1.1] max-lg:h-auto transition-transform duration-100"
          style={{
            backgroundImage: "url('/images/background.png')",
          }}
        >
          <div
            data-tooltip-id="playTooltip"
            data-tooltip-content="Click to play"
            className="container-tooltip object-contain w-[67.8%] overflow-hidden  bg-cover"
          >
            {!isPlaying && (
              <ReactTooltip id="playTooltip" place="top" float className="custom-tooltip" />
            )}

            <video
              ref={videoRef}
              src="/video/CodebriX.mp4"
              onClick={handleVideoPlay}
              controls={isPlaying}
              autoPlay={isPlaying}
              poster="/images/preview1.png"
              muted={true}
              className={`object-contain w-full max-md:w-full max-md:h-auto z-10  `}
            />
          </div>
        </div>
      </Screen>
    </motion.div>
  );
};

export default VideoScreenWrapper;
