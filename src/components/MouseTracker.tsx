"use client"
import React, { useState, useEffect } from "react";
import SlipAnimationElement from "./SlipAnimationElement";

const MouseTracker: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showAnimated, setShowAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setShowAnimated(false); 
      resetTimeout(); 
    };

    let timeout: NodeJS.Timeout;

    const startTimeout = () => {
      timeout = setTimeout(() => {
        setShowAnimated(true); 
      }, 5000);
    };

    const resetTimeout = () => {
      clearTimeout(timeout);
      startTimeout();
    };

    window.addEventListener("mousemove", handleMouseMove);
    startTimeout(); 

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout); 
    };
  }, []);

  return (
    <div className="relative">
      {showAnimated && (
        <div
        style={{
            position: "absolute",
            top: mousePosition.y,
            left: mousePosition.x,
            transform: "translate(-50%, -50%)", 
            zIndex: -1, 
          }}
          className={`transition-opacity duration-1000 ${showAnimated ? 'opacity-100' : 'opacity-0'}`}
        >
            
          <SlipAnimationElement /> 
        </div>
      )}
      {children}
    </div>
  );
};

export default MouseTracker;
