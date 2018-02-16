import * as types from '../types';

const INTIAL_STATE = {
  username: '',
  password: '',
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '' 
};

const buildNewState = (originalState, updates) => {
  let newState = Object.assign(
    {},
    originalState,
    updates,
  );
  return newState;
};

const updateForm = (state = INTIAL_STATE, action) => {
  switch(action.type) {
    case types.UPDATE_FORM_ONE:
      let firstUpdated = buildNewState(state, action.payload);
      return firstUpdated;
    case types.UPDATE_FORM_TWO:
      let secondUpdated = buildNewState(state, action.payload);
      return secondUpdated;
    case types.UPDATE_FORM_THREE:
      let thirdUpdated = buildNewState(state, action.payload);
      return thirdUpdated;
    default:
      return state;
  }
};

// take the current 

export default updateForm;