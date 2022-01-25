import { createSelector } from "reselect";

const totalScore = (state) => state.progress.totalScore;
const isLevelCompleted = (state) => state.progress.isLevelCompleted;
const scoreOnTheLevel = (state) => state.progress.scoreOnTheLevel;
const level = (state) => state.progress.level;
const maxLevel = (state) => state.progress.maxLevel;

export const selectTotalScore = createSelector(
  [totalScore],
  (totalScore) => totalScore
);

export const selectLevel = createSelector([level], (level) => level);

export const selectIsLevelCompleted = createSelector(
  [isLevelCompleted],
  (isLevelCompleted) => isLevelCompleted
);

export const selectScoreOnTheLevel = createSelector(
  [scoreOnTheLevel],
  (scoreOnTheLevel) => scoreOnTheLevel
);

export const selectMaxLevel = createSelector(
  [maxLevel],
  (maxLevel) => maxLevel
);
