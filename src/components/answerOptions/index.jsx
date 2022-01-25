import React from "react";
import { useDispatch, useSelector } from "react-redux";

import lostSound from "../../sounds/lost.mp3";
import wonSound from "../../sounds/won.mp3";
import {
  selectIsLevelCompleted,
  selectScoreOnTheLevel,
} from "../../redux/progress/selectors";
import {
  setIsCorrectCurrentBird,
  setSelectedBird,
} from "../../redux/birds/actions";
import {
  setIsLevelCompleted,
  setScoreOnTheLevel,
  setTotalScore,
} from "../../redux/progress/actions";
import { selectCurrentUser } from "../../redux/user/selectors";

import "./styles.scss";
import { updateTotalScore } from "../../http/userAPI";

const AnswerOptions = ({ birds, currentBird }) => {
  const SOUND_VOLUME = 0.1;
  const MAX_SCORE_ON_THE_LEVEL = 5;

  const dispatch = useDispatch();
  const isLevelCompleted = useSelector(selectIsLevelCompleted);
  const scoreOnTheLevel = useSelector(selectScoreOnTheLevel);
  const currentUser = useSelector(selectCurrentUser);

  const update = async () => {
    await updateTotalScore(
      currentUser.totalScoreForAllGames,
      currentUser.email
    );
  };

  return (
    <div className="answer-options">
      <ul className="answers-group">
        {birds.map((bird) => (
          <li
            key={bird.name}
            className="answers-item"
            onClick={() => {
              if (currentUser) {
                dispatch(setSelectedBird(bird));
                const click = document.querySelector(`#${bird.name}`);
                if (!isLevelCompleted) {
                  if (bird.name === currentBird.name) {
                    click.classList.add("won");
                    const sound = new Audio(wonSound);
                    sound.volume = SOUND_VOLUME;
                    sound.play();
                    dispatch(setIsCorrectCurrentBird(true));
                    dispatch(setIsLevelCompleted(true));
                    dispatch(setTotalScore(scoreOnTheLevel));
                    currentUser.totalScoreForAllGames += scoreOnTheLevel;
                    update();
                    dispatch(setScoreOnTheLevel(MAX_SCORE_ON_THE_LEVEL));
                  } else {
                    click.classList.remove("won");
                    if (!click.classList.contains("lost")) {
                      const sound = new Audio(lostSound);
                      sound.volume = SOUND_VOLUME;
                      sound.play();
                      dispatch(setScoreOnTheLevel(scoreOnTheLevel - 1));
                    }
                    click.classList.add("lost");
                  }
                }
              }
            }}
          >
            <span id={bird.name} className={`circle`} />
            {bird.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerOptions;
