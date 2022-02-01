import { createSelector } from 'reselect';

const currentUser = state => state.user.currentUser;

export const selectCurrentUser = createSelector(
  [currentUser],
  currentUser => currentUser,
);
