// TODO: actions

// action types
export const ADD_BOOK = 'ADD_BOOK';

// actions
export const addBook = book => {
  return {
    type: ADD_BOOK,
    book
  }
};
