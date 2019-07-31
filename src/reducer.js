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

export {
  count
};