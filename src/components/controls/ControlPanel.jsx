import React from "react";

import "./control-panel.scss";

const HOUR_IN_SECONDS = 3600;
const MINUTE_IN_SECONDS = 60;
const TEN = 10;

const ControlPanel = ({ duration, currentTime }) => {
  function secondsToHms(seconds) {
    if (!seconds) return "00:00";

    let duration = seconds;
    let hours = duration / HOUR_IN_SECONDS;
    duration = duration % HOUR_IN_SECONDS;

    let min = parseInt(duration / MINUTE_IN_SECONDS);
    duration = duration % MINUTE_IN_SECONDS;

    let sec = parseInt(duration);

    if (sec < TEN) {
      sec = `0${sec}`;
    }
    if (min < TEN) {
      min = `0${min}`;
    }

    if (parseInt(hours, TEN) > 0) {
      return `${parseInt(hours, TEN)}:${min}:${sec}`;
    } else if (min === 0) {
      return `00:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }

  return (
    <div className="control-panel">
      <div className="timer">{secondsToHms(currentTime)}</div>
      <div className="timer">{secondsToHms(duration)}</div>
    </div>
  );
};
export default ControlPanel;
