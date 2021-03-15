import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import RootReducer from '../reducers/root';
import thunk from 'redux-thunk';

export default (preloadedState = {}) => createStore(
  RootReducer, 
  preloadedState,
  applyMiddleware(thunk, logger)
);