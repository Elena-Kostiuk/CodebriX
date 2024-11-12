"use client";
import React, { useState, useEffect } from "react";
import Screen from "./Screen";
import PlayIcon from "/public/images/PlayIcon.svg";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactPlayer from "react-player";
import "../app/styles/screen.css";

const VideoScreenWrapper: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(typeof window !== "undefined" && window.innerWidth >= 1024);
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

  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 900], ["50%", "100%"]);

  const handleVideoPlay = () => setIsPlaying(true);

  return (
    <>
      {isDesktop ? (
        <motion.div
          className="flex ml-auto  mt-4 max-md:ml-0 max-md:w-full"
          style={{
            width: width,
            transformOrigin: "top right",
          }}
        >
          <Screen title="Product tour" width="w-full">
            <div
              className="relative flex items-center justify-center bg-cover bg-center border-x border-solid border-neutral-900 w-full aspect-[2/1.1] max-lg:h-auto transition-transform duration-100"
              style={{
                backgroundImage: "url('/images/background.png')",
              }}
            >
              <div
               data-tooltip-id="playTooltip"
               data-tooltip-content="Click to play"
               onClick={handleVideoPlay}
                style={{
                  backgroundImage: isPlaying
                    ? "none"
                    : "url('/images/preview1.png')",
                }}
                className="container-tooltip relative object-contain w-[74.7%] h-[76.5%] bg-cover border-box
               transition-opacity duration-1000"
              >
                {!isPlaying && (
                  <ReactTooltip id="playTooltip" place="top" float className="custom-tooltip"  />
                )}

<div       className={`transition-opacity duration-1000 ${
                isPlaying ? "opacity-100" : "opacity-0"
              }`}>
              <ReactPlayer
                url="/video/CodebriX.mp4"
                playing={isPlaying}
                controls
                width="100%"
                height="100%"
                muted={true}
              />
           </div>
              </div>
            </div>
          </Screen>
        </motion.div>
      ) : (
        <Screen title="Product tour" width="w-full">
          <div
            style={{
              backgroundImage: isPlaying
                ? "none"
                : "url('/images/productTour.png')",
            }}
            className="relative object-contain w-full bg-cover border-box
              cursor-pointer max-md:w-full"
          >
            {!isPlaying && (
              <PlayIcon
                className="absolute z-[2] left-[40%] top-[35%]"
                onClick={handleVideoPlay}
              />
            )}
            {isPlaying && (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ar_kiKRala8"
                playing
                controls
                width="100%"
                height="100%"
                light="/images/preview1.png"
              />
            )}
          </div>
        </Screen>
      )}
    </>
  );
};

export default VideoScreenWrapper;
