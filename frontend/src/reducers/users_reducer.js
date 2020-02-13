import {
  RECEIVE_USER_CHANNELS
} from "../actions/user_actions";

const UsersReducer = (
  state = { userChannels: [] },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_CHANNELS:
      newState.userChannels = action.channels;
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
