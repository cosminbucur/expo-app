import { createSelector } from 'reselect';

// TODO: add reselect and create selector

export const booksSelector = createSelector(
  (state) => state.book.list
);
