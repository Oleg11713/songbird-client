import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  resetTotalScore,
} from "../../redux/progress/actions";
import { selectTotalScore } from "../../redux/progress/selectors";

import "./styles.scss";

const EndGamePage = () => {
  const dispatch = useDispatch();
  const totalScore = useSelector(selectTotalScore);

  return (
    <div className="end-game-page">
      <h1 className="title">Поздравляем!</h1>
      <p className="congratulations">
        Вы прошли викторину и набрали <strong>{totalScore}</strong> из
        <strong> 30</strong> возможных баллов
      </p>
      <hr className="area" />
      <Link
        to="/"
        onClick={() => {
          dispatch(resetTotalScore(0));
        }}
      >
        <button className="button-try-again">Попробовать еще раз!</button>
      </Link>
    </div>
  );
};

export default EndGamePage;
