import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  selectIsLevelCompleted,
  selectLevel,
  selectMaxLevel,
} from "../../redux/progress/selectors";
import {
  setIsCorrectCurrentBird,
  setSelectedBird,
} from "../../redux/birds/actions";
import { setIsLevelCompleted, setLevel } from "../../redux/progress/actions";

import "./styles.scss";
import { toast } from "react-toastify";
import {check} from "../../http/userAPI";

const ButtonNext = () => {
  const START_LEVEL = 1;

  const dispatch = useDispatch();
  const history = useHistory();
  let level = useSelector(selectLevel);
  const isLevelCompleted = useSelector(selectIsLevelCompleted);
  const maxLevel = useSelector(selectMaxLevel);

  return (
    <button
      className={`button-next ${isLevelCompleted ? "active" : ""}`}
      onClick={() => {
        check()
          .then(() => {
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
          })
          .catch(() => {
            toast.error("Чтобы играть необходимо авторизоваться", {
              className: "toast-error",
              position: toast.POSITION.BOTTOM_CENTER,
            });
          });
      }}
    >
      Next Level
    </button>
  );
};

export default ButtonNext;
