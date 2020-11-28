import { createSelector } from 'reselect';

// TODO: add reselect and create selector

export const bookSelector = createSelector(
  (state) => state.book.list
);
