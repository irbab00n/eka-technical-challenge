import { combineReducers } from 'redux';
import form from './form';
import formIndex from './formIndex';

const reducers = combineReducers({
  form,
  formIndex
});

export default reducers;