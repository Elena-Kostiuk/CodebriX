"use client";
import React, { useState, useRef } from "react";
import Screen from "./Screen";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoScreenWrapper: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 900], ['48%', '100%']); 

  const handleVideoPlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) =>
        console.error("Video play failed:", error)
      );
    }
  };

  return (
  
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
                backgroundImage: isPlaying ? "none" : "url('/images/productTour.png')",
              }}
              className="object-contain w-[60%] bg-cover border-box
              cursor-pointer"
            >
             
            {!isPlaying && <ReactTooltip id="playTooltip" place="top" float />}

              <video
                ref={videoRef}
                src="https://cdn.pixabay.com/video/2022/07/12/123872-729413470_large.mp4"
                onClick={handleVideoPlay}
                controls={isPlaying}
                autoPlay={isPlaying}
                className={`object-contain w-full max-md:w-full max-md:h-auto z-10 ${
                  isPlaying ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </Screen>
      </motion.div>
  
  );
};

export default VideoScreenWrapper;
