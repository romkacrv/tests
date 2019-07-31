import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  types,
  testAction
} from './actions';

const mockStore = configureStore([thunk]);

describe('test actions', () => {
  afterEach(() => {
    //fetchMock.restore();
  })

  it('testAction', () => {
    const store = mockStore({
      count: 0
    });

    const expectedAction = [{
      type: types.INCREMENT,
      payload: 1
    }];

    store.dispatch(testAction(1));
    expect(store.getActions()).toEqual(expectedAction);
  })
});