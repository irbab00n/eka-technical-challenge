import * as types from '../types';

const INITIAL_STATE = 0;

const updateFormIndex = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.INCREMENT_FORM_INDEX:
      let increment = state + 1;
      return increment;
    case types.DECREMENT_FORM_INDEX:
      let decrement = state - 1;
      return decrement;
    case types.FINISH_FORM:
      window.location.pathname = '/'
      return 0;
    default:
      return state;
  }
};

export default updateFormIndex;