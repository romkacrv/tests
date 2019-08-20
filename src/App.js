import React, {
  useState,
  useEffect
} from 'react';

import { connect } from 'react-redux';

import {
  Width
} from './Inc';

import {
  Reducer
} from './Reducer';

import {
  testAction
} from './actions'

const App = (props) => {
  const {
    count
  } = props;

  const onClick = (count) => {
    props.testAction(count);
  }

  return (
    <div className="App">
      <Reducer />
    </div>
  );
}


const AppEnhanced = connect(
  (state, ownProps) => {
    return {
      count: state.count.count
    }
  },
  (dispatch, ownProps) => {
    return {
      testAction: (count) => dispatch(testAction(count)),
    }
  },
)(App);

export {
  AppEnhanced as default,
  App,
}
