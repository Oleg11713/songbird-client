import { actionTypes } from "./types";

export const setCurrentUser = (currentUser) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: currentUser,
});
