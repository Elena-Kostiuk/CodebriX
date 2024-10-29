"use client";

import React, { useState } from 'react';
import Vector from '/public/images/Vector.svg';

const LogoSVG: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="svg-container mt-[10%] pt-[2%] w-[100%] border-t-2 border-dotted  border-gray-300"
      onMouseEnter={() => setIsHovered(true)}   
      onMouseLeave={() => setIsHovered(false)} 
      style={{ color: isHovered ? '#BBD4FF' : 'white', transition: 'color 0.3s ease' }} 
    >
      <Vector 
        className="svg-icon w-[100%]" 
        style={{ fill: 'currentColor', transition: 'fill 0.3s ease' }} 
      />
      <style jsx>{`
        .svg-container {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default LogoSVG;
