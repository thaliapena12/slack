import { RECEIVE_CHANNEL_ERRORS, REMOVE_ERRORS, RECEIVE_NEW_CHANNEL } from '../actions/channel_actions';


export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
    console.log(action.errors)
    if (action.errors){
      return action.errors;
    }
      break;
    // case REMOVE_ERRORS:
    //   return [];
    case RECEIVE_NEW_CHANNEL:
        return [];
    default:   
    return state;
  }
};
