import { combineReducers } from 'redux';
import { bookReducer } from '../screens/books/bookReducer';

// TODO: add reducers
export const reducers = combineReducers({
  book: bookReducer
});
