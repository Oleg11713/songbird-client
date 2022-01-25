import React from "react";
import { useSelector } from "react-redux";

import startBirdImage from "../../assets/startBird.jpg";
import AudioPlayer from "../audio";
import {
  selectIsCorrectCurrentBird,
  selectSelectedBird,
} from "../../redux/birds/selectors";

import "./styles.scss";

const CurrentQuestion = ({ image, name, audio }) => {
  const isCorrectCurrentBird = useSelector(selectIsCorrectCurrentBird);
  const selectedBird = useSelector(selectSelectedBird);

  const START_NAME_OF_THE_HIDDEN_BIRD = "******";

  const imageIfSelectedBirdExist =
    selectedBird && selectedBird.name === name ? image : startBirdImage;

  const nameIfSelectedBirdExist =
    selectedBird && selectedBird.name === name
      ? name
      : START_NAME_OF_THE_HIDDEN_BIRD;

  return (
    <div className="current-question">
      <img
        src={`${isCorrectCurrentBird ? image : imageIfSelectedBirdExist}`}
        className="bird-image"
        alt="bird"
      />
      <div className="bird-info">
        <div className="name">
          {`${isCorrectCurrentBird ? name : nameIfSelectedBirdExist}`}
        </div>
        <AudioPlayer audio={audio} />
      </div>
    </div>
  );
};

export default CurrentQuestion;
