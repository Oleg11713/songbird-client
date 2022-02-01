import { actionTypes } from './types';

export const setSelectedBird = bird => ({
  type: actionTypes.SET_SELECTED_BIRD,
  payload: bird,
});

export const setBirds = birds => ({
  type: actionTypes.SET_SELECTED_BIRD,
  payload: birds,
});

export const setIsCorrectCurrentBird = isCorrectCurrentBird => ({
  type: actionTypes.SET_IS_CORRECT_CURRENT_BIRD,
  payload: isCorrectCurrentBird,
});
