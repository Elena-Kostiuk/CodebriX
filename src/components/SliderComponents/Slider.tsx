"use client";

import React, { useState } from "react";
import Slider from "react-slider";
import { motion } from "framer-motion";
import sliderData from "../../data/slider.json";
import "../../app/styles/slider.css";

const CustomSlider = () => {
  const [value, setValue] = useState(0);

  const getCurrentBlock = () => {
    if (value < 1) return 0;
    if (value >= 1 && value < 2) return 1;
    if (value >= 2 && value < 3) return 2;
    return 3;
  };

  return (
    <div style={{ width: "100%", margin: "50px auto" }}>
      <Slider
        min={0}
        max={4}
        step={0.01}
        value={value}
        onChange={setValue}
        marks
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`custom-track ${
              state.index === 0 ? "track-left" : "track-right"
            }`}
          />
        )}
        renderMark={(props) => <span {...props} className="custom-mark" />}
        renderThumb={(props) => <div {...props} className="custom-thumb" />}
      />

      <div className="free-area  blocks-container">
        {sliderData.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: getCurrentBlock() === index ? 1 : 0,
            }}
            exit={{ opacity: 0 }}
            className={getCurrentBlock() === index ? "active" : ""}
            transition={{
              duration: 1.0,
              ease: "easeInOut",
              delay: getCurrentBlock() === index ? 0.5 : 0,
            }}
            style={{
              width: "100%",
              visibility: getCurrentBlock() === index ? "visible" : "hidden",
              transition: "visibility 0s linear 0.5s",
              textAlign: "center",
            }}
          >
            <div>
              <h4 className="label-text">{block.title}</h4>
              <ul>
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
