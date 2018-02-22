import * as types from '../types';
import $ from 'jquery';

import * as formIndexActions from './formIndexActions';
import * as userIdActions from './userIdActions';

export const updateForm = (type, updates) => ({
  type,
  payload: updates
});

export const updateFormThunk = (type, updates, id) => {
  return (dispatch) => {
    $.post({
      url: '/user',
      data: JSON.stringify({type, updates, id}),
      contentType: 'application/json',
      success: (data) => {
        if (type === types.UPDATE_FORM_ONE) {
          dispatch(userIdActions.updateUserId(data.id));
        }
        dispatch(updateForm(type, updates));
        dispatch(formIndexActions.incrementIndex());
      },
      error: () => {

      }
    });
  };
};