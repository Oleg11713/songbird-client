import React from "react";

import "./button.scss";

const Button = ({ play, isPlaying }) => {
  return (
    <div className="btn-container">
      <div onClick={play} className={isPlaying ? "btn-stop" : "btn-play"} />
    </div>
  );
}
export default Button;
