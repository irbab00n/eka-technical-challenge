import { combineReducers } from 'redux';
import form from './form';
import formIndex from './formIndex';
import userId from './userId';

const reducers = combineReducers({
  form,
  formIndex,
  userId
});

export default reducers;