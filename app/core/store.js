import { createStore, compose } from 'redux';

import { reducers } from './reducers';

// TODO: add dev tools extension
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// TODO: create store
export const store = createStore(reducers, composeEnhancers());
