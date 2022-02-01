import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  selectIsLevelCompleted,
  selectLevel,
  selectMaxLevel,
} from "../../redux/progress/selectors";
import { setIsLevelCompleted, setLevel } from "../../redux/progress/actions";
import {
  setIsCorrectCurrentBird,
  setSelectedBird,
} from "../../redux/birds/actions";

import "./styles.scss";

const START_LEVEL = 1;

const ButtonNext = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let level = useSelector(selectLevel);
  const isLevelCompleted = useSelector(selectIsLevelCompleted);
  const maxLevel = useSelector(selectMaxLevel);

  return (
    <button
      className={`button-next ${isLevelCompleted ? "active" : ""}`}
      onClick={() => {
        if (isLevelCompleted) {
          if (level < maxLevel) {
            level++;
          } else {
            history.push("/endGame");
            level = START_LEVEL;
          }
          dispatch(setSelectedBird(null));
        }
        dispatch(setIsCorrectCurrentBird(false));
        dispatch(setLevel(level));
        dispatch(setIsLevelCompleted(false));
      }}
    >
      Next Level
    </button>
  );
};

export default ButtonNext;
