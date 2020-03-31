import { RECEIVE_DMGROUP_ERRORS, REMOVE_ERRORS } from '../actions/dmgroup_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DMGROUP_ERRORS:
    console.log(action.errors)
    if (action.errors){
      return action.errors;
    }
      break;
    case REMOVE_ERRORS:
      return [];
    default:
    return state;
  }
};