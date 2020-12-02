import { bookData } from '../../mocks/mocks';

// TODO: initial state
const initialState = {
  list: []
};

// TODO: create reducer
export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_BOOK':
    return {
      ...state,
      list: [
        ...state.list,
        action.payload
      ]
    };
  case 'FETCH_BOOKS_SUCCESS':
    return {
      ...state,
      list: action.payload
    };
  case 'EDIT_BOOK_SUCCESS':
    return {
      ...state,
      list: state.list.map(book => {
        if (book.id === action.payload.id) {
          return action.payload;
        } else {
          return book;
        }
      })
    };
  default:
    return state;
  }
};
