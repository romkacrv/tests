import React from 'react';
import { connect } from 'react-redux';

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
      <div onClick={() => onClick(count + 1)} className="btn">click</div>
      <div className={'count'}>{count}</div>
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
