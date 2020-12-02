// TODO: actions

// action types
export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

// actions
export const addBook = book => {
  return {
    type: ADD_BOOK,
    payload: book
  }
};

export const deleteBook = id => {
  return {
    type: DELETE_BOOK,
    payload: id
  }
};
