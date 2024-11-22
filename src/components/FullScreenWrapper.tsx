"use client";

import React, { useState, useEffect, ReactElement, cloneElement } from "react";

interface FullscreenWrapperProps {
  children: ReactElement<{ isExpanded?: boolean }>; 
}

const FullScreenWrapper: React.FC<FullscreenWrapperProps> = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      setIsFullscreen(true);
    }
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

 
  const childWithProps = cloneElement(children, { isExpanded: isFullscreen });

  return (
    <>
      <div
        className="relative cursor-pointer"
        onClick={handleClick}
      >
        {childWithProps}
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-10 w-[100vw] h-[100vh] bg-black flex items-center justify-center"
          onClick={handleCloseFullscreen}
        >
          <div
            className="overflow-auto max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {childWithProps}
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenWrapper;
