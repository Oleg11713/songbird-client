import { actionTypes } from './types';

export const setLevel = level => ({
  type: actionTypes.SET_LEVEL,
  payload: level,
});

export const setTotalScore = totalScore => ({
  type: actionTypes.SET_TOTAL_SCORE,
  payload: totalScore,
});

export const resetTotalScore = totalScore => ({
  type: actionTypes.RESET_TOTAL_SCORE,
  payload: totalScore,
});

export const setScoreOnTheLevel = scoreOnTheLevel => ({
  type: actionTypes.SET_SCORE_ON_THE_LEVEL,
  payload: scoreOnTheLevel,
});

export const setIsLevelCompleted = isLevelCompleted => ({
  type: actionTypes.SET_IS_LEVEL_COMPLETED,
  payload: isLevelCompleted,
});
