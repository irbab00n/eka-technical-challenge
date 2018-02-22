import * as types from '../types';

const INITIAL_STATE = 0;

const updateUserId = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.UPDATE_USER_ID:
      return action.payload;
    default:
      return state;
  }
};

export default updateUserId;