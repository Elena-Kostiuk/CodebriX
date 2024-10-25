"use client";

import React, { useState } from "react";
import Slider from "react-slider";
import { motion } from "framer-motion";
import "../../app/styles/slider.css";

const CustomSlider = () => {
  const [value, setValue] = useState(0);

  const blocks = [
    {
      id: 1,
      title: "[.1.]",
      items: [
        "> Fastest option for boilerplate tasks",
        "> Drag & drop interface",
        "> Workflow in UI",
        "> 100% drag & drop",
        "> Prebuilt components",
      ],
    },
    {
      id: 2,
      title: "[.2.]",
      items: [
        "> 80% & 20% ",
        "[ + ] Drag & drop interface",
        "[ + ] Workflow in UI",
        "[ + ] Prebuilt components",
        "[ + ] Custom components",
      ],
    },
    {
      id: 3,
      title: "[.3.]",
      items: [
        "> Unexpected Complexities",
        "[ + ] Function as a Service with Custom backend logic",
        "[ - ] Workflow in UI",
      ],
    },
    {
      id: 4,
      title: "[.4.]",
      items: [
        "> Tweakable to the core",
        "[ + ] export your project and build without limitations",
        "[ - ] drag & drop interface",
        "[ - ] workflow in UI",
      ],
    },
  ];

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

      <div className="blocks-container">
        {blocks.map((block, index) => (
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
              <h4>{block.title}</h4>
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
