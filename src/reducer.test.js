import {
  types,
} from './actions';

import {
  count
} from './reducer';

describe('test reducer', () => {
  const initialState = {
    count: 0,
  }

  it('count initial', () => {
    expect(
      count(initialState, {})
    ).toEqual({
      count: 0
    });
  })

  it('count INCREMENT', () => {
    expect(
      count(initialState,
        {
          type: types.INCREMENT,
          payload: 1
        })
    ).toEqual({
      count: 1
    });
  })
})