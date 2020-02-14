import {
  RECEIVE_USER_CHANNELS
} from "../actions/user_actions";
import { RECEIVE_NEW_CHANNEL } from "../actions/channel_actions"
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";


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
    case RECEIVE_NEW_CHANNEL:
      newState.userChannels.push(action.channel.data);
      return newState;
    case RECEIVE_USER_LOGOUT:
      newState.userChannels = [];
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
