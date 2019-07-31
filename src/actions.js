export const types = {
  INCREMENT: 'INCREMENT'
}

export const testAction = (count) => (dispatch) => {
  dispatch({
    type: types.INCREMENT,
    payload: count
  });
}