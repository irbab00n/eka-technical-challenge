import * as types from '../types';
import * as formActions from './formActions';
import * as formIndexActions from './formIndexActions';

console.log(formIndexActions);

const actions = Object.assign(
  {},
  formActions,
  formIndexActions
);

export default actions;

// In this file, we will have to import all of the exports from the separate action files we create, then will will have to assign them all onto a single object
