import * as types from '../types';

export const updateUserId = (id) => ({
  type: types.UPDATE_USER_ID,
  payload: id
});