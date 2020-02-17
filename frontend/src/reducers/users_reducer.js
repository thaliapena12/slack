import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";
import { RECEIVE_USER_CHANNELS, RECEIVE_USERS, RECEIVE_USER_DMGROUPS } from "../actions/user_actions";
import { RECEIVE_NEW_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_DMGROUP, REMOVE_DMGROUP } from "../actions/dmgroup_actions";



const UsersReducer = (
  state = { userChannels: [], userDmgroups: [] },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_CHANNELS:
      newState.userChannels = action.channels;
      return newState;
    case RECEIVE_USER_DMGROUPS:
        newState.userDmgroups = action.dmgroups;
        return newState;
    case RECEIVE_NEW_CHANNEL:
      newState.userChannels.push(action.channel.data);
      return newState;
    case RECEIVE_USER_LOGOUT:
      newState.userChannels = [];
      return newState;
    case RECEIVE_DMGROUP:
        newState.userDmgroups.push(action.dmgroup.data);
        return newState;

    case RECEIVE_USERS:
        newState.userUtil.push(action.receivedUsers);
        return newState;

    case REMOVE_CHANNEL:
      newState.userChannels = newState.userChannels
                                .filter(channel => {
                                  return channel._id !== action.channelId;
                                });
      return newState;
    case REMOVE_DMGROUP:
      newState.userDmgroups = newState.userDmgroups
                                  .filter(dmgroup => {
                                    return dmgroup._id !== action.dmgroupId;
                                  });
      return newState;

    default:
      return state;
  }
};

export default UsersReducer;
