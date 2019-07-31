import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import {
  count
} from './reducer';

export const store = createStore(
  combineReducers({
    count
  }),
  applyMiddleware(thunk)
);