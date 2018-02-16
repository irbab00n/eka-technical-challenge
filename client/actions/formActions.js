import * as types from '../types';
import $ from 'jquery';

import * as formIndexActions from './formIndexActions';

console.log(formIndexActions);

export const updateForm = (type, updates) => ({
  type,
  payload: updates
});

export const updateFormThunk = (type, updates) => {
  return (dispatch) => {
    $.post({
      url: '/test',
      data: JSON.stringify({updates, type}),
      contentType: 'application/json',
      success: () => {
        dispatch(updateForm(type, updates));
        dispatch(formIndexActions.incrementIndex());
      }
    });
  };
};