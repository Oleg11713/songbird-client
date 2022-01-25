import { useState, useRef, useEffect } from "react";

import "./slider.scss";
import "./thumb.scss";

const Slider = ({ percentage = 0, onChange }) => {
  const PERCENTAGE = 100;
  const PIXELS_IN_PERCENTAGE = 7.5;

  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / PERCENTAGE) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / PERCENTAGE) * percentage -
      (thumbWidth / PERCENTAGE) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar / PIXELS_IN_PERCENTAGE);
  }, [percentage]);

  return (
    <div className="slider-container">
      <div
        className="progress-bar-cover"
        style={{
          width: `${progressBarWidth}%`,
        }}
      />
      <div
        className="thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      />
      <input
        type="range"
        value={position.toString()}
        ref={rangeRef}
        step="0.01"
        className="range"
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
