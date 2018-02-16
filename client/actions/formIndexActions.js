import * as types from '../types';

export const incrementIndex = () => {
  return (dispatch, getState) => {
    let { formIndex } = getState();
    if (formIndex < 2) {
      dispatch({type: types.INCREMENT_FORM_INDEX});
    }
    if (formIndex === 2) {
      dispatch({type: types.FINISH_FORM})
    }
  };
};

export const decrementIndex = () => {
  return (dispatch, getState) => {
    let { formIndex } = getState();
    if (formIndex > 0) {
      dispatch({type: types.DECREMENT_FORM_INDEX});
    }
  };
};