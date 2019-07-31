import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import {
  types
} from './actions';

const count = (state = {
  count: 0
}, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        count: action.payload
      }
    default:
      return state
  }
}

export const store = createStore(
  combineReducers({
    count
  }),
  applyMiddleware(
    thunk
  )
);