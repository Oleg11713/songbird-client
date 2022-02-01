import { actionTypes } from './types';
import { fetchBirds } from '../../http/birdAPI';

export const INITIAL_STATE = {
  birds: null,
  selectedBird: null,
  isCorrectCurrentBird: false,
};

fetchBirds().then(data => {
  INITIAL_STATE.birds = data;
});

export const birdsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_BIRD:
      return {
        ...state,
        selectedBird: action.payload,
      };
    case actionTypes.SET_BIRDS:
      return {
        ...state,
        birds: action.payload,
      };
    case actionTypes.SET_IS_CORRECT_CURRENT_BIRD:
      return {
        ...state,
        isCorrectCurrentBird: action.payload,
      };
    default:
      return state;
  }
};
