import { createSelector } from 'reselect';

const selectedBird = state => state.birds.selectedBird;
const isCorrectCurrentBird = state => state.birds.isCorrectCurrentBird;
const birds = state => state.birds.birds;

export const selectSelectedBird = createSelector(
  [selectedBird],
  selectedBird => selectedBird,
);

export const selectIsCorrectCurrentBird = createSelector(
  [isCorrectCurrentBird],
  isCorrectCurrentBird => isCorrectCurrentBird,
);

export const selectBirds = createSelector([birds], birds => birds);
