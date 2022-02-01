import { actionTypes } from './types';

const START_LEVEL = 1;
const START_TOTAL_SCORE = 0;
const START_SCORE_ON_THE_LEVEL = 5;
const MAX_LEVEL = 6;

export const INITIAL_STATE = {
  level: START_LEVEL,
  totalScore: START_TOTAL_SCORE,
  scoreOnTheLevel: START_SCORE_ON_THE_LEVEL,
  isLevelCompleted: false,
  maxLevel: MAX_LEVEL,
};

export const progressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_LEVEL_COMPLETED:
      return {
        ...state,
        isLevelCompleted: action.payload,
      };
    case actionTypes.SET_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case actionTypes.SET_TOTAL_SCORE:
      return {
        ...state,
        totalScore: state.totalScore + action.payload,
      };
    case actionTypes.RESET_TOTAL_SCORE:
      return {
        ...state,
        totalScore: action.payload,
      };
    case actionTypes.SET_SCORE_ON_THE_LEVEL:
      return {
        ...state,
        scoreOnTheLevel: action.payload,
      };
    default:
      return state;
  }
};
